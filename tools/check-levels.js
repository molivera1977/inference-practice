/* ═══════════════════════════════════════════════════════
   Checks the passages and questions of Inference Practice.
   Usage: node tools/check-levels.js [kind ...]   (no kind = every activity)
   Exit 1 on any failure. Prints each passage's reading level and length.

   - every activity has Level 1 to 6; every level has the same passages slots
     (same genre) and the same questions (ids, types, skills) as Level 1
   - each passage measures within 0.3 of its level's Flesch-Kincaid target and
     has a word count in the level's range (data/inference.js INF_LEVELS)
   - a "Which sentence…" choice, a Part B choice and a click-a-sentence answer
     are EXACT sentences of the passage (INF_SPLIT, the same split the site uses)
   - a click-a-sentence question has at least 4 sentences to click
   - multiple choice: 4 different choices, every wrong one says why (kind or note),
     every question has a why; why never names a choice by position (they shuffle)
   - Part A + Part B: the R.A.D. answer's Detail is the Part B answer
   - lesson cards, why lines and wrong-choice notes read at grade 3 or below
   - two questions on one passage never share 2+ wrong choices
   - no giveaways: an earlier question's notes / why lines never quote 7+ words of a later
     question's answer sentence
   - no student first names, no blanks (____), no passage title used twice,
     and the right answer is not the longest choice most of the time
═══════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = path.resolve(__dirname, '..');
const box = { window: {} };
vm.createContext(box);
vm.runInContext(fs.readFileSync(path.join(SITE, 'data/inference.js'), 'utf8'), box);
const W = box.window;
W.INF_SETS = {};
W.INF_ACTIVITIES.forEach(a => {
  const f = path.join(SITE, `data/act-${a.kind}.js`);
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), box);
});

const only = process.argv.slice(2);
const fails = [];
const fail = m => fails.push(m);
const notes = [];

/* Reading level — the same formula as R.A.D. Practice's checker */
function syl(w) { w = w.toLowerCase().replace(/[^a-z]/g, ''); if (!w) return 0; if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, ''); const m = w.match(/[aeiouy]{1,2}/g); return m ? m.length : 1; }
function stats(texts) { let s = 0, w = 0, y = 0;
  // Mr. Mrs. Ms. Dr. St. are not sentence ends (the same rule as INF_SPLIT)
  texts.forEach(t => { t = String(t).replace(/\b(Mr|Mrs|Ms|Dr|St)\./g, '$1'); s += Math.max(1, t.split(/[.!?…]+/).filter(x => /[A-Za-z]/.test(x)).length);
    const words = t.split(/\s+/).filter(x => /[A-Za-z0-9]/.test(x)); w += words.length; words.forEach(x => y += syl(x)); });
  return { words: w, fk: w ? 0.39 * (w / s) + 11.8 * (y / w) - 15.59 : 0 }; }
const fk = texts => stats(texts).fk;

/* Student first names (roster in script.js) */
const roster = fs.readFileSync(path.join(SITE, 'script.js'), 'utf8').match(/const ROSTER = \[([\s\S]*?)\];/)[1];
const firstNames = [...roster.matchAll(/name: "[^,"]*, ([^" ]+)/g)].map(m => m[1].replace(/[^A-Za-z']/g, '')).filter(n => n.length > 1);
const nameRe = new RegExp(`\\b(${firstNames.join('|')})\\b`);

const POSITION_RE = /\b(first|second|third|fourth|last|top|bottom) (choice|answer|option)\b|\b(choice|answer|option) [A-D]\b/i;
const titles = new Map();
let levelNotes = [];
const allText = [];   // [where, text] for the name/blank scan

function cardTexts(cards) {
  const out = [];
  (cards || []).forEach(c => {
    out.push(c.title);
    (c.blocks || []).forEach(b => {
      ['p', 'quote', 'ask', 'good', 'bad', 'why', 'means', 'ex'].forEach(k => { if (typeof b[k] === 'string') out.push(b[k]); });
      if (b.term) out.push(b.term);
      if (b.chart) out.push(b.chart.facts, b.chart.know, b.chart.conclusion);
      if (b.rows) b.rows.forEach(r => out.push(r[1]));
      if (b.rad) out.push(b.rad.R, b.rad.A, b.rad.D);
    });
  });
  return out.filter(Boolean);
}

/* The questions of a passage as scored slots: an mc/hot item is one, Part A + Part B is two */
function slotsOf(p) {
  const out = [];
  (p.items || []).forEach(it => {
    if (it.type === 'ebsr') {
      const sk = Array.isArray(it.skill) ? it.skill : [it.skill, 'Supporting detail'];
      out.push({ id: it.id + '.A', type: 'ebsrA', skill: sk[0] });
      out.push({ id: it.id + '.B', type: 'ebsrB', skill: sk[1] });
    } else out.push({ id: it.id, type: it.type, skill: it.skill });
  });
  return out;
}

function checkChoices(at, c, sentences, mustBeSentences, wantWhy) {
  const choices = c.choices || [];
  if (choices.length !== 4) fail(`${at}: ${choices.length} choices (want 4)`);
  if (new Set(choices.map(x => String(x).trim().toLowerCase())).size !== choices.length) fail(`${at}: two choices are the same`);
  const ans = c.answer == null ? 0 : c.answer;
  if (!(ans >= 0 && ans < choices.length)) fail(`${at}: answer ${ans} is not a choice`);
  choices.forEach((ch, i) => {
    if (i === ans) return;
    const k = c.kinds && c.kinds[i];
    const n = c.notes && c.notes[i];
    if (!n && !(k && W.INF_KIND_NOTES[k])) fail(`${at}: wrong choice ${i + 1} ("${String(ch).slice(0, 40)}…") has no kind or note`);
  });
  if (c.kinds) c.kinds.forEach((k, i) => { if (k && k !== 'good' && !W.INF_KIND_NOTES[k]) fail(`${at}: unknown kind "${k}"`); });
  if (mustBeSentences) choices.forEach((ch, i) => {
    if (!sentences.includes(ch)) fail(`${at}: choice ${i + 1} is not an exact sentence of the passage: "${ch}"`);
  });
  (c.notes || []).forEach(n => { if (n) { allText.push([at + ' note', n]); levelNotes.push(n); } });
  if (wantWhy && !c.why) fail(`${at}: no why`);
  if (c.why && POSITION_RE.test(c.why)) fail(`${at}: why names a choice by position (choices are shuffled)`);
  return { right: choices[ans] || '', longestIsRight: choices.length === 4 && choices.every((x, i) => i === ans || String(x).length < String(choices[ans]).length) };
}

const report = [];
W.INF_ACTIVITIES.forEach(a => {
  if (only.length && !only.includes(a.kind)) return;
  const set = W.INF_SETS[a.kind];
  if (!set) { fail(`${a.kind}: no data/act-${a.kind}.js (window.INF_SETS.${a.kind})`); return; }
  const levels = set.levels || {};
  const base = levels[1];
  if (!base) { fail(`${a.kind}: no Level 1`); return; }
  const cards = cardTexts(set.cards);
  if (!cards.length) fail(`${a.kind}: no lesson cards`);
  else {
    const c = fk(cards);
    if (c > 3.0) fail(`${a.kind}: lesson cards read at ${c.toFixed(2)} (want ≤ 3.0)`);
    report.push(`${a.kind} cards: FK ${c.toFixed(2)}, ${stats(cards).words} words`);
    cards.forEach(t => allText.push([`${a.kind} cards`, t]));
  }

  W.INF_LEVELS.forEach(L => {
    const ps = levels[L.n];
    const tag = `${a.kind} L${L.n}`;
    if (!Array.isArray(ps) || !ps.length) { fail(`${tag}: missing`); return; }
    if (ps.length !== base.length) fail(`${tag}: ${ps.length} passages (Level 1 has ${base.length})`);
    const whys = [];
    levelNotes = [];
    let longest = 0, scored = 0;
    ps.forEach((p, pi) => {
      const at = `${tag} passage ${pi + 1}`;
      const b = base[pi] || {};
      if (!p.title) fail(`${at}: no title`);
      if (p.genre !== 'story' && p.genre !== 'nonfiction') fail(`${at}: genre must be "story" or "nonfiction"`);
      if (b.genre && p.genre !== b.genre) fail(`${at}: genre ${p.genre} ≠ Level 1 ${b.genre}`);
      if (titles.has(p.title)) fail(`${at}: title "${p.title}" also used at ${titles.get(p.title)}`);
      titles.set(p.title, at);
      const paras = p.paragraphs || [];
      if (paras.length < 2) fail(`${at}: ${paras.length} paragraphs (want 2 or more)`);
      const st = stats(paras);
      const lo = L.fk - 0.3, hi = L.fk + 0.3;
      const ok = st.fk >= lo && st.fk <= hi && st.words >= L.words[0] && st.words <= L.words[1];
      if (st.fk < lo || st.fk > hi) fail(`${at} "${p.title}": FK ${st.fk.toFixed(2)} (want ${lo.toFixed(1)}–${hi.toFixed(1)})`);
      if (st.words < L.words[0] || st.words > L.words[1]) fail(`${at} "${p.title}": ${st.words} words (want ${L.words[0]}–${L.words[1]})`);
      report.push(`${ok ? '  ' : '✗ '}${tag} p${pi + 1} FK ${st.fk.toFixed(2)} · ${st.words} words · ${p.genre} · "${p.title}"`);
      paras.forEach(t => allText.push([at, t]));
      allText.push([at, p.title]);
      const sentences = paras.flatMap(W.INF_SPLIT);
      const paraSentences = n => (paras[n - 1] ? W.INF_SPLIT(paras[n - 1]) : null);

      // Same questions as Level 1, slot by slot
      const mine = slotsOf(p), theirs = slotsOf(b);
      if (L.n > 1) {
        if (mine.length !== theirs.length) fail(`${at}: ${mine.length} scored questions (Level 1 has ${theirs.length})`);
        mine.forEach((s, i) => {
          const t = theirs[i] || {};
          if (s.id !== t.id) fail(`${at}: question ${i + 1} id ${s.id} ≠ Level 1 ${t.id}`);
          if (s.type !== t.type) fail(`${at} ${s.id}: type ${s.type} ≠ Level 1 ${t.type}`);
          if (s.skill !== t.skill) fail(`${at} ${s.id}: skill "${s.skill}" ≠ Level 1 "${t.skill}"`);
        });
      }
      scored += mine.length;
      mine.forEach(s => { if (!new RegExp(`^${a.letter}\\d\\d`).test(s.id)) fail(`${at}: id ${s.id} should start with ${a.letter} and two digits`); });

      // No giveaways: an earlier question's notes / why lines must not quote 7+ words of a later
      // question's answer sentence (the proof a child is about to be asked for)
      const words7 = t => { const w = String(t || '').toLowerCase().replace(/[^a-z0-9' ]+/g, ' ').split(/\s+/).filter(Boolean);
        const out = new Set(); for (let k = 0; k + 7 <= w.length; k++) out.add(w.slice(k, k + 7).join(' ')); return out; };
      const said = it => [it.why, ...(it.notes ? Object.values(it.notes) : []), ...(it.a ? [it.a.why, ...(it.a.notes || [])] : []),
        ...(it.b ? [it.b.why, ...(it.b.notes || [])] : []), ...(it.chart ? [it.chart.facts, it.chart.know, it.chart.conclusion] : [])].filter(Boolean);
      const keySentence = it => it.type === 'hot' ? it.answer : it.type === 'ebsr' ? it.b.choices[it.b.answer || 0]
        : it.evidence ? it.choices[it.answer || 0] : null;
      // Two questions on one passage never share 2+ wrong choices (a child could answer the
      // second by crossing out what the first already ruled out)
      const asked = [];
      (p.items || []).forEach(it => {
        if (it.type === 'ebsr') { asked.push([it.id + '.A', it.a]); asked.push([it.id + '.B', it.b]); }
        else if (it.type === 'mc') asked.push([it.id, it]);
      });
      const wrongOf = c => new Set((c.choices || []).filter((_, i) => i !== (c.answer || 0)));
      asked.forEach(([idI, cI], i) => asked.slice(i + 1).forEach(([idJ, cJ]) => {
        const wJ = wrongOf(cJ);
        const shared = [...wrongOf(cI)].filter(x => wJ.has(x));
        if (shared.length >= 2) fail(`${at}: ${idI} and ${idJ} share ${shared.length} wrong choices (give the later one different ones)`);
      }));
      // Part A's notes are heard before Part B, so they must not quote Part B's answer either
      // (Part A's why waits until Part B is answered)
      (p.items || []).filter(it => it.type === 'ebsr').forEach(it => {
        const grams = words7(it.b.choices[it.b.answer || 0]);
        (it.a.notes || []).filter(Boolean).forEach(t => {
          const hit = [...words7(t)].find(g => grams.has(g));
          if (hit) fail(`${at} ${it.id}: a Part A note gives away the Part B sentence ("…${hit}…")`);
        });
      });
      (p.items || []).forEach((later, j) => {
        const key = keySentence(later);
        if (!key) return;
        const grams = words7(key);
        (p.items || []).slice(0, j).forEach(earlier => said(earlier).forEach(t => {
          const hit = [...words7(t)].find(g => grams.has(g));
          if (hit) fail(`${at} ${earlier.id}: a note or why line gives away ${later.id}'s answer sentence ("…${hit}…")`);
        }));
      });
      (p.items || []).forEach(it => {
        const iat = `${at} ${it.id}`;
        if (it.para != null && !paraSentences(it.para)) fail(`${iat}: para ${it.para} does not exist`);
        if (it.type === 'mc') {
          if (!it.q) fail(`${iat}: no question`);
          allText.push([iat, it.q]); (it.choices || []).forEach(c => allText.push([iat, c]));
          const r = checkChoices(iat, it, sentences, !!it.evidence, true);
          if (r.longestIsRight) longest++;
          if (it.evidence && !/\bBEST\b/.test(it.q)) fail(`${iat}: a "which sentence" question says BEST, like the test`);
          if (it.chart && !(it.chart.facts && it.chart.know && it.chart.conclusion)) fail(`${iat}: chart needs facts, know and conclusion`);
          if (it.why) whys.push(it.why);
        } else if (it.type === 'hot') {
          if (!it.q) fail(`${iat}: no question`);
          allText.push([iat, it.q]);
          const area = it.para != null ? paraSentences(it.para) || [] : sentences;
          if (area.length < 4) fail(`${iat}: only ${area.length} sentences to click (want 4 or more)`);
          const hits = area.filter(s => s === it.answer).length;
          if (hits !== 1) fail(`${iat}: answer is ${hits ? 'more than one' : 'not an exact'} sentence ${it.para != null ? 'of paragraph ' + it.para : 'of the passage'}: "${it.answer}"`);
          if (!/^Click on the sentence/.test(it.q)) fail(`${iat}: a click question starts "Click on the sentence…", like the test`);
          if (!it.why) fail(`${iat}: no why`); else whys.push(it.why);
          if (it.notes) Object.keys(it.notes).forEach(k => {
            if (!area.includes(k)) fail(`${iat}: note for a sentence that is not clickable: "${k}"`);
            allText.push([iat + ' note', it.notes[k]]); levelNotes.push(it.notes[k]);
          });
          if (it.why && POSITION_RE.test(it.why)) fail(`${iat}: why names a choice by position`);
        } else if (it.type === 'ebsr') {
          if (!it.a || !it.b) { fail(`${iat}: Part A and Part B need a and b`); return; }
          allText.push([iat, it.a.q]); it.a.choices.forEach(c => allText.push([iat, c]));
          const ra = checkChoices(iat + ' Part A', it.a, sentences, false, true);
          const rb = checkChoices(iat + ' Part B', it.b, sentences, true, true);
          if (ra.longestIsRight) longest++;
          if (it.b.q && it.b.q !== W.INF_PART_B) fail(`${iat}: Part B asks "${W.INF_PART_B}" (leave b.q out)`);
          if (!it.model || !it.model.R || !it.model.A || !it.model.D) fail(`${iat}: needs model { R, A, D }`);
          else if (it.model.D !== rb.right) fail(`${iat}: model.D must be the Part B answer`);
          if (it.a.why) whys.push(it.a.why);
          if (it.b.why) whys.push(it.b.why);
          if (it.model) allText.push([iat, [it.model.R, it.model.A].join(' ')]);
        } else fail(`${iat}: unknown type "${it.type}"`);
      });
    });
    if (whys.length) {
      const w = fk(whys);
      if (w > 3.0) fail(`${tag}: the why lines read at ${w.toFixed(2)} (want ≤ 3.0 together)`);
      whys.forEach(t => allText.push([tag + ' why', t]));
    }
    // The notes after a wrong pick are heard before Next, so they read like the why lines
    if (levelNotes.length) {
      const n = fk(levelNotes);
      if (n > 3.0) fail(`${tag}: the wrong-choice notes read at ${n.toFixed(2)} (want ≤ 3.0 together)`);
    }
    const mc = ps.reduce((n, p) => n + (p.items || []).filter(it => it.type !== 'hot').length, 0);
    if (mc >= 4 && longest > mc / 2) fail(`${tag}: the right answer is the longest choice in ${longest} of ${mc} questions (make the wrong ones as long)`);
    if (L.n === 1) report.push(`${tag}: ${scored} scored questions`);
  });
});

allText.forEach(([where, t]) => {
  const s = String(t || '');
  const m = s.match(nameRe);
  if (m) fail(`${where}: uses a student's first name "${m[1]}"`);
  if (/_{2,}/.test(s)) fail(`${where}: has a blank (____)`);
});

console.log(report.join('\n'));
if (fails.length) {
  console.log(`\n✗ ${fails.length} problem(s):`);
  fails.forEach(f => console.log('  - ' + f));
  process.exit(1);
}
console.log('\n✓ all checks passed');
