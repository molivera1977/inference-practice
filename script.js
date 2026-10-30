/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE · script.js
   Drawing Conclusions · Inferences · Supporting Details — learning, not testing.
   Marcos 10/20/2026: "similar to RAD Practice", "leveled for the wide variety of
   readers", "mirror the IAB styling but easier reading levels … same concepts and
   questioning", levels "2nd grade, then 2.5, 3.0, 3.5, 4.0" and "4.5 for the high
   achievers", "it's the process that I want them used to and the terminology".
   So every question is the SBAC test's process in the test's words: the passage on
   the left (paragraphs numbered), the question on the right, Part A and Part B on
   one screen, "Which sentence from the passage BEST supports…", click a sentence in
   the passage. Six reading levels per activity; everyone starts at Level 1 and
   climbs (70% opens the next level; 70% on Level 1 opens the next activity).
   The learning layer is R.A.D. Practice's: lesson cards heard before Next, a why
   after every answer, the chart (Facts From the Text + Things We Know = Conclusion
   We Draw), a R.A.D. answer after Part B, and Listen before Next after a miss.
   Built on the R.A.D. Practice engine: same sign-in, read aloud, timers, save and
   resume, share link, Teacher Access (Manual / Auto-run / Slide Mode), score sending.
   Data: data/inference.js (levels, activities) + data/act-<kind>.js (cards, passages)
   Game keys: inference-practice-<kind>; the Form column says the level.
   PIN: 9377 (Teacher override)
═══════════════════════════════════════════════════════ */

/* ── CONFIG ─────────────────────────────────────────── */
const REVIEW_OPEN   = true;      // OPENED to students 10/23 (Marcos: "open it"). false = students locked out; only Teacher Access works.
const SHARE_MODE    = !!window.SHARE_MODE;   // set by share.js — a visitor's link, never a student's
const INSTRUCT_SECS = 15;
const READ_SECS     = 12;
const NEXT_SECS     = 6;
const STORAGE_KEY   = 'infp_session_v1';
const SCORES_KEY    = 'infp_scores_v1';
const AWOC_SESSION_ID_KEY = 'infp_session_id_v1';
const SESSION_ID = (() => {
  let id = localStorage.getItem(AWOC_SESSION_ID_KEY);
  if (!id) { id = 'INFP-' + Math.random().toString(36).slice(2, 9).toUpperCase(); localStorage.setItem(AWOC_SESSION_ID_KEY, id); }
  return id;
})();

/* ── ACTIVITIES AND LEVELS ──────────────────────────
   One activity per entry in data/inference.js, in teaching order; its lesson cards
   and passages come from data/act-<kind>.js. The key (prove) names the saved
   scores; the game key (inference-practice-prove) names the tab the scores land
   in; the level rides in the sheet's Form column ("Level 3 · 3.0"). */
const PARTS = {
  R: { name: 'Restate', color: 'blue' },
  A: { name: 'Answer',  color: 'green' },
  D: { name: 'Detail',  color: 'red' }
};
const LEVELS = (window.INF_LEVELS || []).map(L => L.n);
const LEVEL_FK = Object.fromEntries((window.INF_LEVELS || []).map(L => [L.n, L.fk]));
const ACTIVITIES = {};
(window.INF_ACTIVITIES || []).forEach((a, i) => {
  const set = (window.INF_SETS || {})[a.kind];
  if (!set) return;   // an activity with no data file yet is left off the menu
  ACTIVITIES[a.kind] = {
    key: a.kind, n: Object.keys(ACTIVITIES).length + 1, kind: a.kind, letter: a.letter, icon: a.icon,
    sub: a.sub, short: a.label, data: Object.assign({}, a, set),
    get label() { return `${this.n}. ${a.label}`; },
    game:  `inference-practice-${a.kind}`
  };
});
const GAME_KEYS = Object.fromEntries(Object.values(ACTIVITIES).map(a => [a.key, a.game]));
/* "Level 3 · 3.0" — what the sheet's Form column and the teacher see */
function levelLabel(level) { return `Level ${level} · ${Number(LEVEL_FK[level] || 0).toFixed(1)}`; }

/* ── SHEET SUBMISSION ───────────────────────────────── */
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzv8CWv1yyi8NeH04now9UxVL4IZm5yMqqsEGMcgGdrcAOWVB-aSp5siTvSSJXIUpzFMA/exec';

let tabSwitchCount = 0;

/* Question HTML → plain text */
function plainText(html) {
  return String(html || '').replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

/* One saved miss: "[ID] (Skill) question (picked: answer)" — the standard every
   review uses. Skill comes from data/skills.js by question id, so misses restored
   from an older saved attempt still get tagged. " | " separates entries, so it is
   swapped out of the pick just in case. */
function missEntry(m) {
  const skill  = m.skill || (window.SKILLS || {})[m.id] || 'Unsorted';
  const picked = m.yourAnswer == null || m.yourAnswer === '' ? '' :
    ` (picked: ${String(m.yourAnswer).replace(/\s*\|\s*/g, ' / ').replace(/\s+/g, ' ').trim()})`;
  return `[${m.id}] (${skill}) ${plainText(m.q)}${picked}`;
}

// Same id for the partial rows and the final row of one attempt, so the
// final row replaces the in-progress row instead of sitting beside it.
// The base id is saved with the progress, so a resume after closing the tab keeps it too.
function attemptSessionId() {
  return (app.sessionBase || SESSION_ID) + '-' + (app.currentSection || 'x') + '-L' + (app.level || 1) + '-A' + (app.currentAttemptNum || 1);
}

/* Teacher Access never sends a row (Marcos 10/19: "teacher mode allows me to preview the site") */
function submitScorePartial() {
  if (reviewMode) return;
  const pct = app.currentBank.length
    ? Math.round((app.score / app.currentBank.length) * 100) : 0;
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action:         'submit',
      game:           GAME_KEYS[app.currentSection] || 'inference-practice',
      sessionId:      attemptSessionId(),
      name:           app.studentName || 'Unknown',
      form:           levelLabel(app.level || 1),
      section:        app.currentSection || '?',
      score:          app.score,
      total:          app.currentBank.length,
      percent:        pct,
      status:         `In Progress (Q${app.currentIndex + 1}/${app.currentBank.length})`,
      done:           false,
      elapsed:        app.timerSeconds,
      tabSwitches:    tabSwitchCount,
      wrongQuestions: (app.missedQuestions||[]).map(missEntry).join(' | '),
      startedAt:      app.startedAt || '',
      finishedAt:     app.finishedAt || '',
      events:         JSON.stringify(app.events || []),
      timestamp:      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}

function submitScoreFinal() {
  if (reviewMode) return;
  const pct = app.currentBank.length
    ? Math.round((app.score / app.currentBank.length) * 100) : 0;
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action:         'submit',
      game:           GAME_KEYS[app.currentSection] || 'inference-practice',
      sessionId:      attemptSessionId(),
      name:           app.studentName || 'Unknown',
      form:           levelLabel(app.level || 1),
      section:        app.currentSection || '?',
      level:          app.level || 1,
      attempt:        app.currentAttemptNum || 1,
      score:          app.score,
      total:          app.currentBank.length,
      percent:        pct,
      status:         'Complete',
      done:           true,
      elapsed:        app.timerSeconds,
      tabSwitches:    tabSwitchCount,
      wrongQuestions: (app.missedQuestions||[]).map(missEntry).join(' | '),
      startedAt:      app.startedAt || '',
      finishedAt:     app.finishedAt || '',
      events:         JSON.stringify(app.events || []),
      timestamp:      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}

/* ── ROSTER ─────────────────────────────────────────── */
const ROSTER = [
  { name: "Mr. O (Teacher)",           id: "9377" },
  { name: "Avery, Jo'Von",             id: "10053632" },
  { name: "Belasquez Bonilla, Eduin",  id: "10058674" },
  { name: "Castaneda, Kelvin",         id: "10053248" },
  { name: "Chicas-Santos, Allison",    id: "10066737" },
  { name: "Collado, Roniel",           id: "10060249" },
  { name: "Dejesus, Michael",          id: "10049434" },
  { name: "Dock, Fakeem",              id: "10059720" },
  { name: "Douglas, Iyana",            id: "10070980" },
  { name: "Dumphrey, Christopher",     id: "10060696" },
  { name: "Flores, Kiara",             id: "10052834" },
  { name: "Johnson, Destiny",          id: "10052926" },
  { name: "Jones, Tahji",              id: "10060315" },
  { name: "Lawrence, Eric",            id: "10057451" },
  { name: "Madero, Jovany",            id: "10076374" },
  { name: "Pettway, Lanaura",          id: "10060616" },
  { name: "Polanco Soriano, Thiara",   id: "10060503" },
  { name: "Roberts, Robyn",            id: "10060925" },
  { name: "Rodriguez-Jimenez, Marcos", id: "10048936" },
  { name: "Rojas, Alanie",             id: "10076388" },
  { name: "Sanchez Rodriguez, Johanelyz", id: "10076767" },
  { name: "Vega, Taishmara",           id: "10054043" },
  { name: "Watts, Autumn",             id: "10039032" },
  { name: "Zelaya-Osorto, Nazareth",   id: "10053626" }
];

const GUEST_SLOTS = {
  '937701': 'Guest 1', '937702': 'Guest 2', '937703': 'Guest 3',
  '937704': 'Guest 4', '937705': 'Guest 5', '937706': 'Guest 6',
  '937707': 'Guest 7', '937708': 'Guest 8', '937709': 'Guest 9',
  '937710': 'Guest 10'
};

const SECTION_LABELS = Object.fromEntries(Object.values(ACTIVITIES).map(a => [a.key, a.label]));

/* ── THE QUESTIONS OF ONE LEVEL ─────────────────────
   A level is two passages, each with its questions, in passage order. Every scored
   step carries the passage it is about, so the passage panel shows the right one.
   - mc: one question, 4 choices (right one first in the data; shuffled at start).
   - hot: click a sentence in the passage. Its choices ARE the clickable sentences,
     in passage order (never shuffled); the panel turns them into buttons.
   - ebsr: Part A then Part B, both on the screen, like the test. Part A's step shows
     Part B waiting under it; Part B's step shows Part A, answered, above it. */
function choiceNote(c, i) {
  if (c.notes && c.notes[i]) return c.notes[i];
  const kind = c.kinds && c.kinds[i];
  return kind && kind !== 'good' ? ((window.INF_KIND_NOTES || {})[kind] || '') : '';
}

/* What a miss saves: the question (with its part and paragraph) and the passage */
function missText(q) {
  let t = q.part ? `Part ${q.part}: ${q.q}` : q.q;
  if (q.part === 'B' && q.partA) t += ` (Part A: ${q.partA.q})`;
  return `${t} — passage “${q.title}”`;
}

/* Only version 1 so far: every try of a level gets the same passages. */
function versionCount() { return 1; }

function levelData(section, level) {
  const act = ACTIVITIES[section];
  return (act && act.data.levels && act.data.levels[level]) || [];
}

function sectionBank(section, level) {
  const out = [];
  levelData(section, level || 1).forEach((p, pi) => {
    const base = { passage: pi, title: p.title, genre: p.genre };
    (p.items || []).forEach(it => {
      if (it.type === 'ebsr') {
        const sk = Array.isArray(it.skill) ? it.skill : [it.skill, 'Supporting detail'];
        out.push(Object.assign({}, base, {
          id: it.id + '.A', skill: sk[0], type: 'ebsr', part: 'A', group: it.id,
          q: it.a.q, choices: it.a.choices, answer: it.a.answer || 0,
          notes: it.a.choices.map((_, i) => choiceNote(it.a, i)), why: it.a.why
        }));
        out.push(Object.assign({}, base, {
          id: it.id + '.B', skill: sk[1], type: 'ebsr', part: 'B', group: it.id,
          q: window.INF_PART_B, choices: it.b.choices, answer: it.b.answer || 0,
          notes: it.b.choices.map((_, i) => choiceNote(it.b, i)), why: it.b.why,
          partA: { q: it.a.q, right: it.a.choices[it.a.answer || 0], why: it.a.why }, model: it.model
        }));
      } else if (it.type === 'hot') {
        const area = it.para != null ? [it.para] : p.paragraphs.map((_, i) => i + 1);
        const sents = [], where = [];
        area.forEach(n => window.INF_SPLIT(p.paragraphs[n - 1]).forEach((t, k) => { sents.push(t); where.push([n, k]); }));
        out.push(Object.assign({}, base, {
          id: it.id, skill: it.skill, type: 'hot', q: it.q, para: it.para || null,
          choices: sents, where, answer: Math.max(0, sents.indexOf(it.answer)), fixed: true,
          notes: sents.map(t => (it.notes || {})[t] || (t === it.answer ? '' : (window.INF_KIND_NOTES || {}).notproof)),
          why: it.why, chart: it.chart || null
        }));
      } else {
        out.push(Object.assign({}, base, {
          id: it.id, skill: it.skill, type: 'mc', q: it.q, para: it.para || null,
          choices: it.choices, answer: it.answer || 0, fixed: !!it.fixed,
          notes: it.choices.map((_, i) => choiceNote(it, i)), why: it.why, chart: it.chart || null
        }));
      }
    });
  });
  return out;
}

/* ── BUILD THE ACTIVITY MENU ──────────────────────────
   One card per activity: a big button that starts the student's next level, and a
   row of Level 1–6 buttons (locked ones say why when tapped). applyLocks fills in
   the words. */
(function buildMenu() {
  const menu = document.getElementById('activity-menu');
  if (!menu) return;
  menu.innerHTML = `<div class="rp-menu">${Object.values(ACTIVITIES).map(a => `
    <div class="ip-act">
      <button class="start-btn rp-act" id="btn-${a.key}" onclick="app.startNext('${a.key}')">
        <span class="rp-act-num" aria-hidden="true">${a.n}</span>
        <span class="rp-act-name">${a.icon} ${escapeHtml(a.short)}</span>
        <span class="form-btn-sub">${escapeHtml(a.sub)}</span>
      </button>
      <div class="ip-levels" role="group" aria-label="${escapeHtml(a.short)}: pick a level">
        ${LEVELS.map(L => `<button type="button" class="ip-lvl" id="lvl-${a.key}-${L}" onclick="app.attemptStart('${a.key}', ${L})">Level ${L}</button>`).join('')}
      </div>
    </div>`).join('')}</div>`;
})();

/* ── BUILD DROPDOWN ─────────────────────────────────── */
(function buildRoster() {
  const sel = document.getElementById('name-select');
  ROSTER.forEach(s => {
    const o = document.createElement('option');
    o.value = s.name; o.textContent = s.name;
    sel.appendChild(o);
  });
  const div = document.createElement('option');
  div.disabled = true; div.textContent = '── Guest Slots ──';
  sel.appendChild(div);
  Object.entries(GUEST_SLOTS).forEach(([code, label]) => {
    const o = document.createElement('option');
    o.value = `GUEST:${code}`; o.textContent = `🙋 ${label}`;
    sel.appendChild(o);
  });
})();

/* ── STATE ──────────────────────────────────────────── */
let loggedInName     = '';
let unlockedSections = new Set();
let pinModalCallback = null;
let activeSpeakBtn   = null;
let reviewMode       = false;
let reviewAutoRun    = false;

function letterGradeStudent(pct) {
  if (pct >= 97) return 'A+';
  if (pct >= 93) return 'A';
  if (pct >= 90) return 'A-';
  if (pct >= 87) return 'B+';
  if (pct >= 83) return 'B';
  if (pct >= 80) return 'B-';
  if (pct >= 77) return 'C+';
  if (pct >= 73) return 'C';
  if (pct >= 70) return 'C-';
  if (pct >= 67) return 'D+';
  if (pct >= 63) return 'D';
  if (pct >= 60) return 'D-';
  return 'F';
}

let hlTimer = null;
const liveUtterances = new Set();   // speech in progress, held so its events still arrive
/* ── LISTEN, THEN NEXT (copied from math-module-2, Marcos 10/11: "the kids have to hear
   something before they can move on to the next item") ──
   After a MISS, the Next button stays hidden until the note on the mistake and the right
   answer have been heard to the end. One big Listen button; stopping early does not count;
   a second tap while it is speaking does nothing. A device that will not speak (no sound
   started within 4 s, or the voice reports an error) gets a wait long enough to read it,
   then an "I read it" button. Not after a right answer, not in the teacher's look.
   What it proves: the audio played to the end. Not that the child listened. */
const LISTEN_START_WAIT = 4000;
const listenDwellMs = words => Math.min(15000, Math.max(3000, words * 450));
let listenJob = null;   // the forced listen now speaking, if any

function stopActiveSpeech() {
  clearTimeout(hlTimer);
  if (listenJob && !listenJob.settled) listenJob.abort();   // cut off before the end → it does not count
  window.speechSynthesis.cancel();
  document.querySelectorAll('.wrd.hl').forEach(e => e.classList.remove('hl'));
  if (activeSpeakBtn) { activeSpeakBtn.textContent = '🔊'; activeSpeakBtn = null; }
}

/* ── HIGHLIGHT FALLBACK ─────────────────────────────
   Some voices (and some browsers) never fire word-boundary
   events, so the highlight would never move. If no boundary
   arrives shortly after speaking starts, step through the
   words on a timer paced by word length and speech rate. */
function addHighlightFallback(u, spans) {
  let fired = false, i = 0, ended = false;
  const prevB = u.onboundary, prevE = u.onend;
  u.onboundary = e => { if (e.name === 'word' && !fired) { fired = true; clearTimeout(hlTimer); } if (prevB) prevB(e); };
  // The end of the speech always stops the highlight, however the voice reports it:
  // a normal end, an error or cancel, or (some Chromebook voices) no event at all,
  // which the watch below catches by seeing the voice go quiet AFTER it started.
  // A voice that never starts is left alone: the page's own no-sound wait handles that.
  const finish = e => {
    if (ended) return;
    ended = true;
    clearInterval(watch);
    clearTimeout(hlTimer);
    spans.forEach(s => s.classList.remove('hl'));
    liveUtterances.delete(u);
    if (prevE) prevE(e || {});
  };
  u.onend = finish;
  u.onerror = finish;
  // Chrome can drop an utterance's events if nothing else holds on to it.
  liveUtterances.add(u);
  let started = false, quietTicks = 0;
  const prevS = u.onstart;
  u.onstart = e => { started = true; if (prevS) prevS(e); };
  const watch = setInterval(() => {
    const voice = window.speechSynthesis;
    if (voice.speaking) { started = true; quietTicks = 0; return; }
    quietTicks = started && !voice.pending ? quietTicks + 1 : 0;
    if (quietTicks >= 2) finish();
  }, 400);
  const step = () => {
    if (fired || ended) return;
    spans.forEach(s => s.classList.remove('hl'));
    if (i >= spans.length) return;
    const w = spans[i++];
    w.classList.add('hl');
    const len = (w.textContent || '').replace(/[^A-Za-z0-9]/g, '').length;
    hlTimer = setTimeout(step, Math.max(280, len * 70 + 120) / (u.rate || 1));
  };
  clearTimeout(hlTimer);
  hlTimer = setTimeout(step, 500);
}

/* ── HELPERS ────────────────────────────────────────── */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getFirstName(name) {
  if (!name) return 'Student';
  const parts = name.split(',');
  return parts.length > 1 ? parts[1].trim().split(' ')[0] : name.split(' ')[0];
}

/* Light the word the voice is on. The voice says where it is in the text (charIndex); it does NOT signal every
   word — Samantha in Chrome gave no signal for "example:" after "For" (measured in Marcos's Chrome 10/28) — so
   moving one word per signal fell further behind with each skipped word ("the highlighting can't keep up").
   The spoken text has one token per span, joined by single spaces. */
function lightAt(spans, text, charIndex) {
  let j = 0, start = 0;
  String(text).split(' ').forEach((tok, k) => { if (start <= charIndex) j = k; start += tok.length + 1; });
  spans.forEach(sp => sp.classList.remove('hl'));
  if (spans[j]) spans[j].classList.add('hl');
}
function wrapWords(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  let idx = 0;
  function walk(node) {
    if (node.nodeType === 3) {
      const text = node.textContent.replace(/—/g, ' — ').replace(/  +/g, ' ');
      const words = text.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      words.forEach(part => {
        if (/\S/.test(part)) {
          const sp = document.createElement('span');
          sp.className = 'wrd';
          sp.dataset.wi = idx++;
          sp.textContent = part;
          frag.appendChild(sp);
        } else if (part) {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
    } else if (!(node.nodeType === 1 && node.hasAttribute('data-noread'))) {
      [...node.childNodes].forEach(walk);   // letter badges (data-noread) are shown, never read
    }
  }
  walk(tmp);
  return tmp.innerHTML;
}

function escapeHtml(t) {
  return String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* A sentence in quote marks — unless it already starts or ends with one (dialogue) */
function quoted(text) {
  const t = escapeHtml(text);
  return /^["“‘]|["”’]$/.test(String(text)) ? t : `“${t}”`;
}

function choiceHtml(text) {
  return text.replace(/—/g, ' — ');
}

/* Finished tries of one activity at one level, on this device */
function triesOf(name, section, level) {
  const scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
  return scores.filter(s => s.name === name && s.section === section && (s.level || 1) === level && s.done && s.total > 0);
}

function allSectionsCompletedOnce(name) {
  const scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
  return Object.keys(ACTIVITIES).every(k => scores.some(s => s.name === name && s.section === k && s.done));
}

/* No try limit — a learning site. Every try is still its own row (Attempt 1, 2, 3 …).
   ── THE GATES (Marcos 10/20: "Everyone climbs from Level 1") ──
   Each activity has Level 1 to 6. A level opens when the level under it has a finished
   try at 70% or better (the BEST try counts). An activity's Level 1 opens when EVERY
   activity before it has Level 1 at 70% (the strict rule R.A.D. Practice uses), so a
   student moves on to the next idea without first climbing every reading level.
   Scores are remembered on the device. The Teacher PIN lets one student past a gate.
   The share link and Teacher Access have no gates. */
const PASS_PCT = 70;
function bestScore(name, section, level) {
  return triesOf(name, section, level)
    .reduce((best, s) => (!best || s.score / s.total > best.score / best.total ? s : best), null);
}
function passed(name, section, level) {
  const best = bestScore(name, section, level);
  return !!best && best.score / best.total * 100 >= PASS_PCT;
}
/* How many right it takes: 70% of 8 questions = 6 */
function needFor(section, level) {
  return Math.ceil(PASS_PCT / 100 * sectionBank(section, level || 1).length);
}
function nextActivity(section) {
  const keys = Object.keys(ACTIVITIES);
  const i = keys.indexOf(section);
  return i >= 0 && i + 1 < keys.length ? ACTIVITIES[keys[i + 1]] : null;
}
/* Why this level is not open for this student yet ('' = it is open): names the FIRST gap */
function gateWait(name, section, level) {
  if (SHARE_MODE || reviewMode) return '';
  const keys = Object.keys(ACTIVITIES);
  const at = keys.indexOf(section);
  for (let i = 0; i < at; i++) {
    const k = keys[i];
    if (!passed(name, k, 1)) return `Get ${needFor(k, 1)} of ${sectionBank(k, 1).length} on ${ACTIVITIES[k].short} Level 1 first`;
  }
  for (let L = 1; L < (level || 1); L++) {
    if (!passed(name, section, L)) return `Get ${needFor(section, L)} of ${sectionBank(section, L).length} on Level ${L} first`;
  }
  return '';
}
/* The level the big button starts: the lowest one not passed yet (all passed → the top one) */
function nextLevelFor(name, section) {
  for (const L of LEVELS) if (!passed(name, section, L)) return L;
  return LEVELS[LEVELS.length - 1];
}

/* ── THE FLOW (Marcos 10/20: "I'd prefer that they flow automatically" → "Next activity first") ──
   The class's order: every activity at Level 1, then every activity at Level 2, … up to Level 6.
   A student's next step is the first level in that order not passed yet (null = all 48 passed).
   The ▶ Continue button on the menu and the ▶ Next button on the end screen start it. The menu
   stays, so a student can still redo any open level. */
const FLOW = LEVELS.flatMap(L => Object.keys(ACTIVITIES).map(k => ({ section: k, level: L })));
function nextStep(name) {
  return FLOW.find(st => !passed(name, st.section, st.level)) || null;
}
/* The step after this one in the order (the share link and Teacher Access save no scores) */
function stepAfter(section, level) {
  const i = FLOW.findIndex(st => st.section === section && st.level === level);
  return i >= 0 && i + 1 < FLOW.length ? FLOW[i + 1] : null;
}
function stepLabel(st) { return `${ACTIVITIES[st.section].short} · Level ${st.level}`; }

/* ── YOUR PATH (Marcos 10/22: the activity grid was "slightly confusing to a kid" · "How would they
   know about finishing all level 1s") ──
   Under ▶ Continue: a strip of the six levels (✅ done · ▶ now · plain = later) and this level's 8
   activities (✅ done · ▶ you are here · ○ later), with how many are done and what comes after.
   The full list of activities and levels hides behind "🔁 Do an activity again". */
function levelDone(name, L) {
  return Object.keys(ACTIVITIES).every(k => passed(name, k, L));
}
function pathHTML(name) {
  const st = nextStep(name);
  const top = LEVELS[LEVELS.length - 1];
  const L = st ? st.level : top;
  const keys = Object.keys(ACTIVITIES);
  const done = keys.filter(k => passed(name, k, L)).length;
  const strip = LEVELS.map(n => {
    const state = levelDone(name, n) ? 'done' : n === L ? 'now' : 'later';
    const mark = state === 'done' ? '✅ ' : state === 'now' ? '▶ ' : '';
    return `<span class="ip-strip-lvl ip-strip-${state}">${mark}Level ${n}</span>`;
  }).join('');
  const rows = keys.map((k, i) => {
    const ok = passed(name, k, L);
    const here = st && st.section === k && st.level === L;
    const cls = ok ? 'done' : here ? 'here' : 'later';
    const mark = ok ? '✅' : here ? '▶' : '○';   // later in the path (not locked: the list may have it open)
    return `<li class="ip-path-row ip-path-${cls}"><span class="ip-path-mark" aria-hidden="true">${mark}</span>` +
      `<span class="ip-path-num" aria-hidden="true">${i + 1}</span><span class="ip-path-name">${escapeHtml(ACTIVITIES[k].short)}</span>` +
      (here ? '<span class="ip-here-tag">← you are here</span>' : '') + `</li>`;
  }).join('');
  const after = !st ? 'You finished every level of every activity!'
    : L < top ? `When all 8 are done, Level ${L + 1} starts. Level ${L + 1} has harder passages and the same kinds of questions.`
    : 'This is the last level!';
  const say = st
    ? `Your path. You are on Level ${L} of ${top}. You are on ${ACTIVITIES[st.section].short}. ${done} of ${keys.length} activities are done at Level ${L}. ${after}`
    : `Your path. ${after}`;
  return sayBlockHTML('ip-path-say', escapeHtml(say).replace(/^Your path\./, '<strong>Your path.</strong>')) +
    `<div class="ip-strip" aria-label="The six levels">${strip}</div>` +
    `<p class="ip-path-head">Level ${L}: ${done} of ${keys.length} done</p>` +
    `<ol class="ip-path-list">${rows}</ol>`;
}

function applyLocks(name) {
  const st = nextStep(name);
  const cont = document.getElementById('continue-btn');
  if (cont) {
    cont.classList.toggle('hidden', !st);
    if (st) cont.querySelector('.ip-continue-what').textContent = stepLabel(st);
    const done = document.getElementById('all-done-note');
    if (done) done.classList.toggle('hidden', !!st);
  }
  const path = document.getElementById('ip-path');
  if (path) path.innerHTML = pathHTML(name);
  Object.values(ACTIVITIES).forEach(act => {
    const btn = document.getElementById(`btn-${act.key}`);
    if (!btn) return;
    const sub  = btn.querySelector('.form-btn-sub');
    const L    = nextLevelFor(name, act.key);
    const why  = gateWait(name, act.key, L);
    const top  = LEVELS[LEVELS.length - 1];
    // A gated button looks locked but can still be tapped, so it can say why (and take the Teacher PIN)
    btn.classList.toggle('locked', !!why);
    if (why) sub.textContent = `🔒 ${why}`;
    else if (L === top && passed(name, act.key, top)) sub.textContent = `🏆 All ${top} levels passed · ▶ Level ${top} again`;
    else sub.textContent = `▶ Start Level ${L}`;
    LEVELS.forEach(n => {
      const chip = document.getElementById(`lvl-${act.key}-${n}`);
      if (!chip) return;
      const wait = gateWait(name, act.key, n);
      const best = bestScore(name, act.key, n);
      chip.classList.toggle('locked', !!wait);
      chip.classList.toggle('passed', !wait && passed(name, act.key, n));
      chip.classList.toggle('current', !wait && n === L && !passed(name, act.key, n));
      // the ONE level button that is the student's next step pulses, with ▶ Continue (Marcos 10/22)
      chip.classList.toggle('is-next', !!st && st.section === act.key && st.level === n);
      chip.textContent = wait ? `🔒 Level ${n}` : passed(name, act.key, n) ? `✅ Level ${n}` : `Level ${n}`;
      chip.title = wait ? wait : best ? `Best: ${best.score} of ${best.total}` : 'Not tried yet';
      chip.setAttribute('aria-label', `Level ${n}. ${chip.title}.`);
    });
  });
}

/* ── SPEAK (directions) ─────────────────────────────── */
function speakDir(btn) {
  if (activeSpeakBtn === btn) { stopActiveSpeech(); return; }
  stopActiveSpeech();

  const p = btn.closest('.dir-section').querySelector('.dir-text');
  if (!p) return;
  if (!p.querySelector('.wrd')) p.innerHTML = wrapWords(p.innerHTML);

  const spans = Array.from(p.querySelectorAll('.wrd'));
  if (!spans.length) return;

  activeSpeakBtn = btn;
  btn.textContent = '⏹';

  const speechText = spans.map(s => s.textContent).join(' ');
  const u = new SpeechSynthesisUtterance(speechText);
  english(u);
  u.rate = READ_RATE;

  u.onboundary = e => {
    if (e.name !== 'word') return;
    document.querySelectorAll('.dir-text .wrd.hl').forEach(el => el.classList.remove('hl'));
    lightAt(spans, u.text, e.charIndex);
  };

  u.onend = () => {
    document.querySelectorAll('.dir-text .wrd.hl').forEach(el => el.classList.remove('hl'));
    if (activeSpeakBtn === btn) { btn.textContent = '🔊'; activeSpeakBtn = null; }
  };

  addHighlightFallback(u, spans);
  window.speechSynthesis.speak(u);
}

/* ── SPEAK ONE BLOCK ────────────────────────────────
   Every block a student reads (a lesson line, the question being answered, a
   story paragraph, a finished R.A.D. answer) has its own 🔊 on the left that
   reads just that block, word by word. Letter badges are data-noread. */
function blockSpans(el) {
  if (!el.querySelector('.wrd')) el.innerHTML = wrapWords(el.innerHTML);
  return Array.from(el.querySelectorAll('.wrd')).filter(sp => /[A-Za-z0-9]/.test(sp.textContent));
}
function spokenOf(spans) {
  return spans.map(s => s.textContent.replace(/[…]/g, '')).join(' ');
}
function speakEl(btn, el) {
  if (activeSpeakBtn === btn) { stopActiveSpeech(); return; }
  stopActiveSpeech();
  if (!el) return;
  const spans = blockSpans(el);
  if (!spans.length) return;
  activeSpeakBtn = btn;
  btn.textContent = '⏹';
  const u = new SpeechSynthesisUtterance(spokenOf(spans));
  english(u);
  u.rate = READ_RATE;
  u.onboundary = e => {
    if (e.name !== 'word') return;
    spans.forEach(s => s.classList.remove('hl'));
    lightAt(spans, u.text, e.charIndex);
  };
  u.onend = () => {
    spans.forEach(s => s.classList.remove('hl'));
    if (activeSpeakBtn === btn) { btn.textContent = '🔊'; activeSpeakBtn = null; }
  };
  addHighlightFallback(u, spans);
  window.speechSynthesis.speak(u);
}
/* Speaker for the block it sits in (onclick="speakBlock(this)") */
function speakBlock(btn) {
  speakEl(btn, btn.parentElement.querySelector('.rp-say'));
}
const SPEAK_HTML = '<button type="button" class="speak-btn rp-speak" onclick="speakBlock(this)" title="Read this aloud" aria-label="Read this aloud">🔊</button>';

/* ── A READING STOPPED EARLY SAYS WHAT TO DO NEXT ──────
   Marcos 10/30 ("Yes, read it aloud"): when a lesson card is stopped before the end, the line that says what to do
   gets its own 🔊 and reads itself as soon as nothing else is reading (a line the student tapped finishes first),
   and the 🔊 that reads the whole card pulses until it is tapped. The voice skips the icons, so the line says
   "the 🔊 speaker". */
let stoppedNoteTimer = null;
let readAloudHushed = false;   // the student left (hushReadAloud): a note shown after that is not read aloud
function sayStoppedNote(note, text, speaker) {
  if (!note || note.classList.contains('lc-stopped')) return;   // already saying it for this stop
  clearTimeout(stoppedNoteTimer);
  note.classList.add('lc-stopped');
  note.innerHTML = `${SPEAK_HTML}<span class="rp-say">${text}</span>`;
  if (speaker) speaker.classList.add('lc-pulse');
  let tries = 0;
  const say = () => {
    if (!note.isConnected || !note.classList.contains('lc-stopped') || (speaker && activeSpeakBtn === speaker)) return;
    if (readAloudHushed || document.hidden || !note.getClientRects().length) return;   // the student left: say nothing
    if (activeSpeakBtn || window.speechSynthesis.speaking) { if (++tries < 100) stoppedNoteTimer = setTimeout(say, 300); return; }
    speakBlock(note.querySelector('.rp-speak'));
  };
  stoppedNoteTimer = setTimeout(say, 300);
}
function clearStoppedNote(speaker, note) {
  clearTimeout(stoppedNoteTimer);
  readAloudHushed = false;   // a reading the student started
  if (speaker) speaker.classList.remove('lc-pulse');
  if (note) note.classList.remove('lc-stopped');
}

/* ── R.A.D. PICTURES ─────────────────────────────────
   An answer in the color check: each part underlined in its color, with its
   letter on the left (shown, not read). `mark` puts a yellow box around one
   part and hides the colors (Color-Check asks which part that is). `open`
   lists parts not picked yet, shown as empty slots (Build). */
function radPartHTML(key, text, opts) {
  const o = opts || {};
  if (o.slot) return `<span class="rm-part rm-slot rm-${key}"><span class="rm-tag" data-noread>${key}</span><span class="rm-slot-name" data-noread>${PARTS[key].name}</span></span>`;
  const cls = o.plain ? 'rm-part rm-plain' : `rm-part rm-${key}`;
  const mark = o.mark ? ' rm-mark' : '';
  const tag = o.plain ? '' : `<span class="rm-tag" data-noread>${key}</span>`;
  return `<span class="${cls}${mark}">${tag}${escapeHtml(text)}</span>`;
}
function radAnswerHTML(r, opts) {
  const o = opts || {};
  const keys = o.keys || ['R', 'A', 'D'];
  const body = keys.map(k => {
    if (r[k]) return radPartHTML(k, r[k], { plain: !!o.mark, mark: o.mark === k });
    return o.slots ? radPartHTML(k, '', { slot: true }) : '';
  }).join(' ');
  const para = r.para ? ` <span class="rm-para">(paragraph ${r.para})</span>` : '';
  return `<span class="rad-model${o.mark ? ' rad-marked' : ''}">${body}${para}</span>`;
}
/* A block with its speaker on the left: kind is the CSS class, label is read with it */
function sayBlockHTML(kind, inner, label) {
  return `<div class="rp-block ${kind}">${SPEAK_HTML}<div class="rp-say">${label ? `<span class="rp-label">${label}</span> ` : ''}${inner}</div></div>`;
}

/* Mr. O's chart, in his words: Facts From the Text + Things We Know = Conclusions We Draw */
function chartHTML(c) {
  return `<div class="ip-chart">
    ${sayBlockHTML('ip-cbox ip-facts', escapeHtml(c.facts), '📄 Facts From the Text:')}
    <div class="ip-op" aria-hidden="true">+</div>
    ${sayBlockHTML('ip-cbox ip-know', escapeHtml(c.know), '🧠 Things We Know:')}
    <div class="ip-op" aria-hidden="true">=</div>
    ${sayBlockHTML('ip-cbox ip-concl', escapeHtml(c.conclusion), '💡 Conclusions We Draw:')}
  </div>`;
}

/* ── READ-ALOUD INTRO SPEAKS ITSELF ─────────────────
   Marcos 10/6: the "Read Aloud is Available!" screen announces itself
   the moment it opens — no reading, no button. The click on "Let's Get
   Started!" is the user gesture the browser needs. The icons are said
   as words, and each word lights up as it is read. Leaving the screen
   (app.show) cancels the speech. */
const INTRO_SAY = { '🔊': 'the speaker button', '⏹': 'the stop button', '—': ',' };
const READ_RATE = 0.82;    // every read-aloud a student taps (Marcos 10/26: "I like the 0.82. It's clear and easy to listen to.")
/* The pause between one line and the next — QPS's lesson pause (qps-literacy-hub/practice.js PAUSE.line = 900 ms),
   as on Parts of Speech HQ. Marcos 10/28: "the speed still sounds faster than on QPS" — same voice, same 0.82, but
   lines 0.25 s apart ran together. */
const LINE_PAUSE_MS = 900;
/* THE SAME VOICE AS QPS (Marcos 10/28, on Parts of Speech HQ: "why can't this site talk like QPS" · "the reading
   speed also sounds different on QPS"; after the fix: "i like the sound and pacing of the read aloud"): every reading
   asks for English and uses the device's own default English voice, picked the way the QPS Literacy Hub picks it
   (qps-literacy-hub/readaloud.js). Asking only for "en-US" let the browser choose a different voice, which sounds
   different at the same 0.82. A device that lists no voices yet still gets English. */
let _enVoice = null;
function englishVoice() {
  if (_enVoice) return _enVoice;
  const all = (window.speechSynthesis && speechSynthesis.getVoices && speechSynthesis.getVoices()) || [];
  const isEn = v => /^en([-_]|$)/i.test((v && v.lang) || ''), us = v => /^en[-_]US$/i.test(v.lang || '');
  _enVoice = all.find(v => v.default && isEn(v)) || all.find(v => us(v) && v.localService) || all.find(us) || all.find(isEn) || null;
  return _enVoice;                         // null until the device lists its voices (Chrome lists them late): asked again next time
}
function english(u) {
  u.lang = 'en-US';
  const v = englishVoice();
  if (v) { try { u.voice = v; } catch (e) { /* a voice the browser won't take: en-US still asks for English */ } }
  return u;
}
const INTRO_RATE = 0.82;   // Marcos 10/6: 0.92 ran ahead of the highlight
let introToken = 0, introTimer = null;
let introMsPerChar = null, introMsPerWord = null;   // learned from this device's voice
function speakReadAloudIntro() {
  stopActiveSpeech();
  clearTimeout(introTimer);
  const screen = document.getElementById('readaloud-screen');
  const els = Array.from(screen.querySelectorAll('.ra-read'));
  els.forEach(el => { if (!el.querySelector('.wrd')) el.innerHTML = wrapWords(el.innerHTML); });
  // One piece per SENTENCE (Marcos 10/6: the end of a long sentence lost its
  // highlight). Each piece = the words to say + the on-screen word each one lights.
  const pieces = [];
  els.forEach(el => {
    let words = [], wordSpan = [];
    const flush = () => { if (words.length) pieces.push({ words, wordSpan }); words = []; wordSpan = []; };
    el.querySelectorAll('.wrd').forEach(sp => {
      const t = sp.textContent.replace(/\uFE0F/g, '').trim();
      const key = t.replace(/[.!?,]+$/, ''), punct = t.slice(key.length);   // "🔊." → icon + "."
      let say = INTRO_SAY[key] != null ? INTRO_SAY[key] + punct : (/[A-Za-z0-9]/.test(t) ? t : '');
      if (!say) return;
      if (say === ',') { if (words.length) words[words.length - 1] += ','; return; }
      if (/^the /.test(say) && /^(every|each)$/i.test(words[words.length - 1] || '')) say = say.slice(4);
      // past-tense "read" ("is read aloud") must sound like "red", not "reed" (Marcos 10/6)
      if (/^read[.!?,]?$/i.test(say) && /^(is|was|are|were|be|been|being)$/i.test(words[words.length - 1] || '')) say = say.replace(/^read/i, 'red');
      say.split(' ').forEach(w => { words.push(w); wordSpan.push(sp); });
      if (/[.!?]$/.test(say)) flush();
    });
    if (words.length && !/[.!?,]$/.test(words[words.length - 1])) words[words.length - 1] += '.';
    flush();
  });
  const factor = (typeof READ_SPEEDS !== 'undefined' && typeof readSpeed !== 'undefined' && READ_SPEEDS[readSpeed]) ? READ_SPEEDS[readSpeed].factor : 1;
  const rate = INTRO_RATE * factor;
  const token = ++introToken;
  const live = () => token === introToken && !screen.classList.contains('hidden');
  const sayPiece = k => {
    if (!live() || k >= pieces.length) return;
    const p = pieces[k];
    const text = p.words.join(' ');
    const starts = []; let pos = 0;
    p.words.forEach(w => { starts.push(pos); pos += w.length + 1; });
    const lit = new Set(p.wordSpan);
    let idx = -1, lastHeard = 0, startedAt = 0, viaVoice = false;
    const mark = j => {
      j = Math.max(0, Math.min(j, p.words.length - 1));
      if (j === idx) return;
      idx = j;
      lit.forEach(sp => sp.classList.remove('hl'));
      p.wordSpan[j].classList.add('hl');
    };
    // Watchdog: when the voice goes quiet about word positions (some voices
    // never report them, Chrome sometimes stops partway), step on at a
    // speaking pace — never past the last word, which stays lit until the end.
    // Pace comes from how long this voice really took on the sentences before
    // (first sentence: a guess), so the highlight keeps up on any voice.
    // (a hair quick on purpose: the last word stays lit until the voice ends, so early is safe, late is not)
    const wordMs = w => introMsPerChar ? 0.92 * (w.length + 1) * introMsPerChar : (120 + w.replace(/[^A-Za-z0-9]/g, '').length * 55) / rate;
    const tick = () => {
      if (!live()) return;
      // while the voice is reporting words it leads; step in only once it has gone quiet
      const base = wordMs(p.words[idx] || ''), quiet = Date.now() - lastHeard;
      const avg = Math.max(base, introMsPerWord || 0);   // a normal pause between reported words is never "quiet"
      if (idx >= 0 && viaVoice && quiet > avg * 1.8) {
        const n = Math.max(1, Math.floor(quiet / avg));   // catch up the words said while it was quiet
        viaVoice = false; mark(idx + n); lastHeard += n * avg;
      } else if (idx >= 0 && !viaVoice && quiet > base) {
        mark(idx + 1); lastHeard = Math.min(Date.now(), lastHeard + base);   // keep exact time between steps
      }
      introTimer = setTimeout(tick, 60);
    };
    const u = new SpeechSynthesisUtterance(text);
    english(u); u.rate = rate;
    u.onstart = () => { startedAt = lastHeard = Date.now(); mark(0); clearTimeout(introTimer); tick(); };
    u.onboundary = e => {
      if (e.name !== 'word') return;
      let j = 0;
      while (j + 1 < starts.length && starts[j + 1] <= e.charIndex) j++;
      mark(j); lastHeard = Date.now(); viaVoice = true;
    };
    u.onend = () => {
      clearTimeout(introTimer);
      const took = Date.now() - startedAt;
      if (startedAt && live() && took > 300) {   // learn the voice's real speed (skip cancelled/odd pieces)
        const perChar = took / (text.length + 1);
        introMsPerChar = introMsPerChar ? (introMsPerChar + perChar) / 2 : perChar;
        const perWord = took / p.words.length;
        introMsPerWord = introMsPerWord ? (introMsPerWord + perWord) / 2 : perWord;
      }
      lit.forEach(sp => sp.classList.remove('hl'));
      if (live()) introTimer = setTimeout(() => sayPiece(k + 1), 250);
    };
    window.speechSynthesis.speak(u);
  };
  sayPiece(0);
}

/* ── SESSION EVENT LOG ───────────────────────────────
   start · leave · return · resume · close · finish, each with the
   on-task clock. elapsed is time ON TASK: the timer pauses while the
   page is hidden and counts ticks, so a slept device cannot inflate it. */
function logEvent(kind, extra) {
  if (!app.events) app.events = [];
  app.events.push(Object.assign({
    at: new Date().toISOString(),
    e:  kind,
    q:  (app.currentIndex || 0) + 1,
    on: app.timerSeconds || 0
  }, extra || {}));
  if (app.events.length > 200) app.events.splice(0, app.events.length - 200);
}

/* ══════════════════════════════════════════════════════
   APP OBJECT
══════════════════════════════════════════════════════ */
const app = {

  /* ── state ── */
  studentName:    '',
  currentSection: '',
  currentBank:    [],
  currentIndex:   0,
  score:          0,
  streak:         0,
  missedQuestions:[],
  responses:      {},
  currentAttemptNum: 1,
  selectedIndices:new Set(),
  questionLocked: false,
  timerSeconds:   0,
  timerInterval:  null,
  timerOn:        false,
  instructInterval: null,
  readInterval:   null,
  nextInterval:   null,

  /* ── screens ── */
  show(id) {
    ['start-screen','readaloud-screen','directions-screen','quiz-screen','end-screen','scoreboard-screen','slide-screen']
      .forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    // Leaving the quiz screen always drops the two-sided Comprehension layout
    if (id !== 'quiz-screen') this._applyCompLayout(false);
    window.scrollTo(0, 0);   // every new screen starts at the top
    hushReadAloud();
  },

  /* ── TWO-SIDED COMPREHENSION LAYOUT ── */
  _applyCompLayout(isComp) {
    const qs = document.getElementById('quiz-screen');
    if (qs) qs.classList.toggle('comp-mode', isComp);
    document.body.classList.toggle('comp-active', isComp);
  },

  /* ── INIT ── */
  init() {
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  /* ── READ ALOUD INTRO ── */
  showReadAloudIntro() {
    if (!REVIEW_OPEN && !SHARE_MODE) return;
    document.getElementById('welcome-panel').classList.add('hidden');
    this.show('readaloud-screen');
    introTimer = setTimeout(speakReadAloudIntro, 150);   // announces itself (show() just cancelled any speech; leaving first cancels this)
    const btn   = document.getElementById('readaloud-btn');
    const fill  = document.getElementById('readaloud-fill');
    const count = document.getElementById('readaloud-count');
    btn.disabled = true; btn.style.opacity = '0.45'; btn.style.cursor = 'not-allowed';
    count.textContent = 6;
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = 'width 6s linear';
      fill.style.width = '0%';
    }));
    let remaining = 6;
    const iv = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(iv);
        btn.disabled = false; btn.style.opacity = '1';
        btn.style.cursor = 'pointer'; btn.textContent = "✅ Got It — Show Me the Directions!";
      }
    }, 1000);
  },

  /* ── DIRECTIONS ── */
  showDirections() {
    this.show('directions-screen');
    this.startInstructionsTimer();
  },

  showLogin() {
    if (this.instructInterval) { clearInterval(this.instructInterval); this.instructInterval = null; }
    window.speechSynthesis.cancel();
    document.querySelectorAll('.dir-text .wrd.hl').forEach(e => e.classList.remove('hl'));
    this.studentName = '';
    loggedInName = '';
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementById('section-select').classList.add('hidden');
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.remove('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.add('hidden');
    document.getElementById('student-login-panel').classList.remove('hidden');
    if (SHARE_MODE) this._shareSignIn();
  },

  /* Shared preview: no roster, no student number — straight to the parts. */
  _shareSignIn() {
    loggedInName     = 'Guest';
    this.studentName = 'Guest';
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.add('hidden');
    const select = document.getElementById('section-select');
    select.classList.remove('hidden');
    // student-only pieces: the attempt rules and the score history
    select.querySelectorAll('div').forEach(el => {
      if (!el.querySelector('div, button') && /Rules:/.test(el.textContent)) el.style.display = 'none';
    });
    select.querySelectorAll('.score-btn').forEach(el => { el.style.display = 'none'; });
    applyLocks(this.studentName);
    this.checkResume();
  },

  /* ── NAME SELECT ── */
  onNameSelect() {
    const val = document.getElementById('name-select').value;
    const pinSec = document.getElementById('pin-section');
    const guestSec = document.getElementById('guest-name-section');
    document.getElementById('login-error').textContent = '';
    if (!val) { pinSec.classList.add('hidden'); return; }
    pinSec.classList.remove('hidden');
    if (val.startsWith('GUEST:')) {
      guestSec.classList.remove('hidden');
      document.getElementById('pin-label').textContent = '🔒 Enter guest code:';
    } else {
      guestSec.classList.add('hidden');
      document.getElementById('pin-label').textContent = '🔒 Enter your student number:';
    }
    setTimeout(() => document.getElementById('student-pin').focus(), 80);
  },

  /* ── LOGIN ── */
  attemptLogin() {
    const selVal = document.getElementById('name-select').value;
    const pin    = document.getElementById('student-pin').value.trim();
    const errEl  = document.getElementById('login-error');
    errEl.textContent = '';

    if (!selVal) { errEl.textContent = '⚠️ Please select your name.'; return; }
    if (!pin)    { errEl.textContent = '⚠️ Please enter your student number.'; return; }

    let matched = false;
    let displayName = '';

    if (selVal.startsWith('GUEST:')) {
      const code = selVal.replace('GUEST:', '');
      if (pin === code) {
        const firstName = (document.getElementById('guest-display-name').value || '').trim();
        if (!firstName) { errEl.textContent = '⚠️ Please enter your first name.'; return; }
        matched = true;
        displayName = firstName + ' (Guest)';
      } else {
        errEl.textContent = '❌ Incorrect guest code. Try again.'; return;
      }
    } else {
      const student = ROSTER.find(s => s.name === selVal);
      if (student && student.id === pin) {
        matched = true;
        displayName = selVal;
      } else {
        errEl.textContent = '❌ Incorrect student number. Try again.'; return;
      }
    }

    if (matched) {
      loggedInName       = displayName;
      this.studentName   = displayName;
      document.getElementById('student-pin').value = '';
      document.getElementById('login-error').textContent = '';
      const loginCard = document.getElementById('login-step-card');
      if (loginCard) loginCard.classList.add('hidden');
      document.getElementById('section-select').classList.remove('hidden');
      applyLocks(displayName);
      this.checkResume();
      const rmBtn = document.getElementById('review-mode-btn');
      if (rmBtn) rmBtn.classList.toggle('hidden', displayName !== 'Mr. O (Teacher)');
    }
  },

  /* ── ATTEMPT START ── */
  // "🔁 Do an activity again" opens (and closes) the full list of activities and levels
  toggleRedo(open) {
    const list = document.getElementById('redo-list');
    const btn = document.getElementById('redo-toggle');
    if (!list || !btn) return;
    const show = open == null ? list.classList.contains('hidden') : !!open;
    list.classList.toggle('hidden', !show);
    btn.setAttribute('aria-expanded', String(show));
    btn.textContent = show ? '✖ Hide the list' : '🔁 Do an activity again';
  },

  // ▶ Continue: the student's next step in the class's order (see FLOW)
  continueFlow() {
    if (!this.studentName) return;
    const st = nextStep(this.studentName);
    if (st) this.attemptStart(st.section, st.level);
  },

  // The big button on an activity starts the student's next level
  startNext(section) {
    if (!this.studentName) return;
    this.attemptStart(section, nextLevelFor(this.studentName, section));
  },

  attemptStart(section, level) {
    if (!this.studentName) return;
    level = level || nextLevelFor(this.studentName, section);
    // The gates (see PASS_PCT): no try limit, but a level waits for 70% on the one under it.
    // The Teacher PIN lets this one student past.
    const why = gateWait(this.studentName, section, level);
    if (why) {
      this.showPinModal(
        '🔒 Not Yet',
        `${getFirstName(this.studentName)}: ${why.charAt(0).toLowerCase() + why.slice(1)}. ` +
        `Teachers: enter your PIN to let this student start ${ACTIVITIES[section].short} Level ${level} now.`,
        () => this.startSession(section, level)
      );
      return;
    }
    this.startSession(section, level);
  },

  /* ── TEACHER REVIEW MODE ── */
  promptTeacherReview() {
    const pin = prompt('Enter Teacher PIN to access Review Mode:');
    if (pin !== '9377') { if (pin !== null) alert('Incorrect PIN.'); return; }
    this.studentName = 'Mr. O (Teacher)';
    reviewMode = true;
    localStorage.removeItem(STORAGE_KEY);
    this._showReviewPicker();
  },

  _showReviewPicker() {
    const keys = Object.keys(ACTIVITIES);
    const section = prompt('Choose an activity to review:\n' +
      keys.map((k, i) => `${i + 1} — ${ACTIVITIES[k].label}`).join('\n') + `\n\nEnter 1 to ${keys.length}:`);
    const map = Object.fromEntries(keys.map((k, i) => [String(i + 1), k]));
    if (!map[section]) { alert('Invalid choice.'); reviewMode = false; return; }
    const mode = prompt('Choose review mode:\n1 — Manual (you tap Next each question)\n2 — Auto-run (fully automatic)\n3 — Slide Mode (big slides for the board; tap to show each answer)\n\nEnter 1, 2 or 3:');
    if (mode !== '1' && mode !== '2' && mode !== '3') { alert('Invalid choice.'); reviewMode = false; return; }
    reviewAutoRun = (mode === '2');
    const lv = prompt('Which level?\n' + LEVELS.map(L => `${L} — ${levelLabel(L)} reading level`).join('\n') +
      `\n\nEnter ${LEVELS[0]} to ${LEVELS[LEVELS.length - 1]}:`, '1');
    const level = Number(lv);
    if (!LEVELS.includes(level)) { alert('Invalid choice.'); reviewMode = false; return; }
    this._reviewLevel = level;
    if (mode === '3') { this.openSlides(map[section], level); return; }
    this.startSession(map[section], level);
  },

  /* ── SLIDE MODE (Teacher Access) ──
     Marcos 10/19 (R.A.D. Practice): "can we add slide mode to teacher access in addition
     to review mode". The level as big slides for the board, in teaching order: the lesson
     cards, then each passage and its questions (the passage stays on the left). The
     answer stays hidden until Show Answer. Next / Back, the arrow keys and a clicker's
     Page Down / Page Up, and a jump list. Nothing is timed, scored, saved or sent. */
  openSlides(section, level) {
    const act = ACTIVITIES[section];
    const passages = levelData(section, level);
    const list = [];
    (act.data.cards || []).forEach((card, i) => list.push({ kind: 'card', card, label: `📘 Lesson card ${i + 1}: ${card.title}` }));
    const bank = sectionBank(section, level);
    passages.forEach((p, pi) => {
      list.push({ kind: 'story', passage: pi, label: `📖 Passage ${pi + 1}: ${p.title}` });
      bank.forEach((q, k) => {
        if (q.passage !== pi) return;
        // The data lists the right choice first, so the slides mix them once here (click-a-sentence keeps passage order)
        const order = q.choices.map((_, i) => i);
        if (!q.fixed) shuffle(order);
        const where = `Question ${k + 1} of ${bank.length}` + (q.part ? ` · Part ${q.part}` : '');
        list.push({ kind: 'q', q, order, passage: pi, where, label: `❓ ${where}` });
      });
    });
    this._slides = { section, level, list, at: 0, shown: false, passages };
    this.show('slide-screen');
    document.body.classList.add('slides-active');
    const jump = document.getElementById('sl-jump');
    jump.innerHTML = list.map((s, i) => `<option value="${i}">${i + 1}. ${escapeHtml(s.label)}</option>`).join('');
    document.getElementById('sl-title').textContent = `🖥️ Slide Mode · ${act.short} · ${levelLabel(level)}`;
    this._renderSlide();
  },

  _renderSlide() {
    const S = this._slides;
    const s = S.list[S.at];
    stopActiveSpeech();
    document.getElementById('sl-count').textContent = `Slide ${S.at + 1} of ${S.list.length}`;
    document.getElementById('sl-jump').value = String(S.at);
    const body = document.getElementById('sl-body');
    body.classList.toggle('sl-with-story', s.kind === 'q');
    if (s.kind === 'card') {
      body.innerHTML = `<h2 class="sl-h rp-say">${escapeHtml(s.card.title)}</h2>` +
        `<div class="lc-blocks">${s.card.blocks.map(b => this._cardBlockHTML(b)).join('')}</div>`;
    } else if (s.kind === 'story') {
      body.innerHTML = this._slideStoryHTML(S.passages[s.passage], null);
    } else {
      body.innerHTML = this._slideStoryHTML(S.passages[s.passage], s.q) + `<div class="sl-main">${this._slideQuestionHTML(s)}</div>`;
    }
    const last = S.at + 1 >= S.list.length;
    const asking = s.kind === 'q' && !S.shown;
    const next = document.getElementById('sl-next');
    next.disabled = last && !asking;
    next.textContent = asking ? '👀 Show Answer' : last ? '🏁 Last slide' : 'Next ▶';
    document.getElementById('sl-back').disabled = S.at === 0;
    // A new slide starts at the top; Show Answer brings the answer into view
    const answer = S.shown && body.querySelector('.sl-answer');
    if (!answer) window.scrollTo(0, 0);
    this._fitSlide();
    if (answer) answer.scrollIntoView({ block: 'nearest' });
  },

  /* As big as fits above the Back / Next bar: at most 1.35×, never under 0.95× (the size
     students see), so a long slide scrolls rather than shrinking past that. The answer box
     does not count, so Show Answer never shrinks the slide; the passage scrolls in its column. */
  _fitSlide() {
    const S = this._slides;
    const body = document.getElementById('sl-body');
    const answer = body.querySelector('.sl-answer');
    const scroll = body.querySelector('.sl-with-story .story-scroll');
    if (window.innerWidth <= 700) { body.style.zoom = '1'; if (scroll) scroll.style.maxHeight = ''; return; }
    if (S.shown && S.fitAt === S.at) {                         // Show Answer keeps the slide's size
      body.style.zoom = String(S.fitZoom);
      if (scroll) scroll.style.maxHeight = S.fitStory;
      return;
    }
    if (answer) answer.style.display = 'none';
    if (scroll) scroll.style.maxHeight = '0px';            // the question column decides the height
    body.style.zoom = '1';
    const top = body.getBoundingClientRect().top + window.scrollY;
    const room = window.innerHeight - top - document.querySelector('.sl-nav').getBoundingClientRect().height - 8;
    const main = body.querySelector('.sl-main') || body;
    const fit = v => Math.round(Math.max(0.95, Math.min(1.35, v)) * 100) / 100;
    let z = fit(room / Math.max(1, main.getBoundingClientRect().height));
    // Bigger text wraps into more lines, so measure again at that size and step down until it fits
    for (let k = 0; k < 10; k++) {
      body.style.zoom = String(z);
      const h = main.getBoundingClientRect().height;
      if (h <= room || z <= 0.95) break;
      z = fit(Math.min(z - 0.02, z * room / h));
    }
    if (scroll) {
      const head = body.querySelector('.sl-story .story-panel-header');
      scroll.style.maxHeight = `${Math.max(160, room / z - (head ? head.getBoundingClientRect().height / z : 0) - 4)}px`;
    }
    if (answer) answer.style.display = '';
    S.fitAt = S.at; S.fitZoom = z; S.fitStory = scroll ? scroll.style.maxHeight : '';
  },

  /* The passage with its paragraphs numbered. A question about one paragraph rings that
     paragraph. (A click-a-sentence question shows its sentences next to the question.) */
  _slideStoryHTML(p, q) {
    return `<div class="sl-story">${this._passageHTML(p, q)}</div>`;
  },

  /* One question: the question, the choices — and, after Show Answer, the right choice in
     green, why, and the chart or R.A.D. answer (as the student sees it) */
  _slideQuestionHTML(s) {
    const q = s.q;
    const open = this._slides.shown;
    const blocks = [`<p class="sl-where">${escapeHtml(s.where)}</p>`];
    blocks.push(this._beforeHTML(q));
    blocks.push(sayBlockHTML('sl-qblock', (q.part ? `<span class="part-pill">Part ${q.part}</span> ` : '') + escapeHtml(q.q)));
    blocks.push(this._showHTML(q, { right: open ? q.answer : null }));
    if (q.type !== 'hot') {
      const choices = s.order.map((i, pos) => {
        const right = i === q.answer;
        const face = `<strong>${'ABCDE'[pos]}.</strong>&nbsp;<span class="choice-text">${choiceHtml(escapeHtml(q.choices[i]))}</span>`;
        return `<div class="sl-choice-row">${SPEAK_HTML.replace('speakBlock(this)', 'speakEl(this, this.nextElementSibling.querySelector(\'.choice-text\'))')}` +
          `<div class="sl-choice${open && right ? ' sl-right' : ''}" data-orig="${i}">${face}${open && right ? ' <span class="sl-tick" data-noread>✅</span>' : ''}</div></div>`;
      }).join('');
      blocks.push(`<div class="sl-choices">${choices}</div>`);
    }
    if (q.part === 'A') blocks.push(this._partBWaitHTML());
    if (open) blocks.push(`<div class="sl-answer">${this._answerHTML(q, true, null)}</div>`);
    return blocks.join('');
  },

  slideNext() {
    const S = this._slides;
    if (!S) return;
    if (S.list[S.at].kind === 'q' && !S.shown) { S.shown = true; this._renderSlide(); return; }
    if (S.at + 1 >= S.list.length) return;
    S.at += 1; S.shown = false;
    this._renderSlide();
  },

  slideBack() {
    const S = this._slides;
    if (!S || S.at === 0) return;
    S.at -= 1; S.shown = false;
    this._renderSlide();
  },

  slideGo(i) {
    const S = this._slides;
    if (!S || !(i >= 0 && i < S.list.length)) return;
    S.at = i; S.shown = false;
    this._renderSlide();
  },

  exitSlides() {
    stopActiveSpeech();
    this._slides = null;
    document.getElementById('sl-body').innerHTML = '';
    document.body.classList.remove('slides-active');
    this.exitReviewMode();
  },

  exitReviewMode() {
    reviewMode    = false;
    reviewAutoRun = false;
    this._reviewLevel = null;
    this.stopTimerEngine();
    const banner = document.getElementById('review-mode-banner');
    if (banner) banner.classList.add('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  _autoAnswer() {
    const q = this.currentBank[this.currentIndex];
    if (q.type === 'hot') {
      const el = document.querySelector(`#q-show .hot-s[data-i="${q.answer}"]`);
      if (el) this._selectHot(q.answer, el, true);
    } else {
      document.querySelectorAll('.answer-btn').forEach((btn, i) => {
        if (i === q.answer) { this.selectedIndices.add(i); btn.classList.add('selected'); }
      });
    }
    setTimeout(() => this.confirmAnswer(), 600);
  },

  /* ── START SESSION ── */
  startSession(section, level) {
    level = level || 1;
    this.events = []; this.startedAt = new Date().toISOString();
    this.finishedAt = '';
    tabSwitchCount = 0;
    const warnBanner = document.getElementById('tab-warning-banner');
    if (warnBanner) warnBanner.classList.add('hidden');
    const banner = document.getElementById('review-mode-banner');
    if (banner) {
      banner.classList.toggle('hidden', !reviewMode);
      const label = banner.querySelector('span');
      if (label) label.textContent = reviewAutoRun
        ? '🔍 Teacher Review Mode — auto-run'
        : '🔍 Teacher Review Mode — tap Next to advance';
    }
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(AWOC_SESSION_ID_KEY);
    this.currentSection = section;
    this.level          = level;
    this.score          = 0;
    this.streak         = 0;
    this.missedQuestions= [];
    this.responses      = {};
    this.currentIndex   = 0;
    this.questionLocked = false;   // a finished section leaves it set
    this.timerSeconds   = 0;
    this.currentAttemptNum = reviewMode ? 1 : triesOf(this.studentName, section, level).length + 1;
    this.sessionBase = SESSION_ID;
    this.version = 1;

    // Each choice keeps its own note when the choices are shuffled. Click-a-sentence
    // choices keep passage order.
    const shuffleQ = q => {
      const indexed = q.choices.map((text, i) => ({ text, note: (q.notes || [])[i] || '', origIdx: i }));
      if (!q.fixed) shuffle(indexed);
      return Object.assign({}, q, {
        choices: indexed.map(c => c.text), notes: indexed.map(c => c.note),
        answer: indexed.findIndex(c => c.origIdx === q.answer)
      });
    };

    // The questions keep their order: passage 1's, then passage 2's, Part A before Part B.
    this.currentBank = sectionBank(section, level).map(shuffleQ);
    // The lesson cards play on a student's first try of an activity. After a finished try
    // (any level) the climb goes straight to the passage. Teacher Access always shows them.
    const triedBefore = !reviewMode && LEVELS.some(L => triesOf(this.studentName, section, L).length);
    this.cardsSeen = triedBefore ? [0] : [];

    this._enterQuiz();
    logEvent('start', { v: this.version, L: level });
    this.startTimer();
    this.renderQuestion();
  },

  // Quiz screen in the test's layout: the passage on the left, the question on the right
  _enterQuiz() {
    this.show('quiz-screen');
    this._applyCompLayout(true);
  },

  /* ── RESUME ── */
  checkResume() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const rc = document.getElementById('resume-container');
    const sectionSelect = document.getElementById('section-select');
    if (saved && rc) {
      const data = JSON.parse(saved);
      if (this.studentName && data.studentName === this.studentName) {
        rc.classList.remove('hidden');
        const qNum = Math.min(data.currentIndex + 1, data.currentBank.length);
        document.getElementById('resume-detail').textContent =
          `${SECTION_LABELS[data.currentSection]} · Level ${data.level || 1} — Q${qNum} of ${data.currentBank.length}`;
        if (sectionSelect) sectionSelect.classList.add('hidden');
      } else {
        rc.classList.add('hidden');
        if (sectionSelect && this.studentName) sectionSelect.classList.remove('hidden');
      }
    } else if (rc) {
      rc.classList.add('hidden');
      if (sectionSelect && this.studentName) sectionSelect.classList.remove('hidden');
    }
  },

  resumeSession() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    this.studentName    = saved.studentName;
    this.currentSection = saved.currentSection;
    this.currentBank    = saved.currentBank;
    this.currentIndex   = saved.currentIndex;
    this.score          = saved.score;
    this.streak         = saved.streak || 0;
    this.missedQuestions= saved.missedQuestions || [];
    this.responses      = saved.responses || {};
    this.timerSeconds   = saved.timerSeconds || 0;
    this.currentAttemptNum = saved.currentAttemptNum || 1;
    this.sessionBase    = saved.sessionBase || SESSION_ID;
    this.questionLocked = false;
    tabSwitchCount      = saved.tabSwitches || 0;
    this.cardsSeen = saved.cardsSeen || [];
    this.version = saved.version || 1;           // the saved questions are already that version's
    this.level = saved.level || 1;
    this.events = saved.events || [];
    this.startedAt = saved.startedAt || new Date().toISOString();
    this.finishedAt = '';
    logEvent('resume');
    this._enterQuiz();
    this.startTimer();
    // Saved right after answering the last question → nothing left to ask
    if (this.currentIndex >= this.currentBank.length) { this._finishSession(); return; }
    this.renderQuestion();
  },

  saveProgress() {
    if (reviewMode) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      studentName:     this.studentName,
      currentSection:  this.currentSection,
      currentBank:     this.currentBank,
      currentIndex:    this.questionLocked ? this.currentIndex + 1 : this.currentIndex, // answered → resume at the next one
      score:           this.score,
      streak:          this.streak,
      missedQuestions: this.missedQuestions,
      responses:       this.responses,
      timerSeconds:    this.timerSeconds,
      currentAttemptNum: this.currentAttemptNum,
      sessionBase:     this.sessionBase,
      tabSwitches:     tabSwitchCount,
      cardsSeen: this.cardsSeen || [],
      version: this.version || 1,
      level: this.level || 1,
      events: this.events,
      startedAt: this.startedAt
    }));
  },

  discardProgress() {
    this.showPinModal(
      '🗑️ Discard Progress',
      'Enter Teacher PIN to clear the current in-progress session. The student will start fresh.',
      () => {
        localStorage.removeItem(STORAGE_KEY);
        document.getElementById('resume-container').classList.add('hidden');
        applyLocks(this.studentName);
        this.checkResume();
      }
    );
  },

  /* ── OVERALL TIMER ── */
  startTimer() {
    this.stopTimerEngine();
    this.timerOn = true;
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      this._tickTimer();
      if (this.timerSeconds % 30 === 0) this.saveProgress();
    }, 1000);
  },

  stopTimerEngine() {
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
    this.timerOn = false;
  },

  _tickTimer() {
    const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
    const s = String(this.timerSeconds % 60).padStart(2, '0');
    const el = document.getElementById('timer-display');
    if (el) el.textContent = `${m}:${s}`;
  },

  /* ── INSTRUCTIONS LOCK (15s) ── */
  startInstructionsTimer() {
    if (this.instructInterval) { clearInterval(this.instructInterval); this.instructInterval = null; }
    const btn   = document.getElementById('ready-btn');
    const fill  = document.getElementById('instruct-fill');
    const count = document.getElementById('instruct-count');
    if (!btn) return;
    if (reviewMode) { btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer'; btn.textContent = "✅ I'm Ready — Let's Begin!"; return; }
    btn.disabled = true;
    btn.style.opacity = '0.45';
    btn.style.cursor  = 'not-allowed';
    if (count) count.textContent = INSTRUCT_SECS;
    if (fill) {
      fill.style.transition = 'none';
      fill.style.width = '100%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        fill.style.transition = `width ${INSTRUCT_SECS}s linear`;
        fill.style.width = '0%';
      }));
    }
    let remaining = INSTRUCT_SECS;
    this.instructInterval = setInterval(() => {
      remaining--;
      if (count) count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.instructInterval);
        this.instructInterval = null;
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor  = 'pointer';
        btn.textContent   = "✅ I'm Ready — Let's Begin!";
      }
    }, 1000);
  },

  /* ── READING LOCK ──
     12 s on every question. The first question of each passage waits longer, so the
     passage gets read first: about 1 second for every 5 words, 20 to 60 seconds. */
  _readSecs() {
    const q = this.currentBank[this.currentIndex];
    const prev = this.currentBank[this.currentIndex - 1];
    if (prev && prev.passage === q.passage) return { secs: READ_SECS, first: false };
    const p = levelData(this.currentSection, this.level || 1)[q.passage];
    const words = p ? p.paragraphs.join(' ').split(/\s+/).length : 0;
    return { secs: Math.min(60, Math.max(20, Math.round(words / 5))), first: true };
  },

  startReadTimer() {
    if (this.readInterval) { clearInterval(this.readInterval); this.readInterval = null; }
    const bar   = document.getElementById('reading-timer-bar');
    const fill  = document.getElementById('reading-fill');
    const count = document.getElementById('reading-count');
    const label = document.getElementById('reading-label');
    const setLocked = on => {
      this._hotLocked = on;
      document.querySelectorAll('.answer-btn').forEach(b => { b.classList.toggle('locked-choice', on); b.disabled = on; });
      document.querySelectorAll('#q-show .hot-s').forEach(el => el.classList.toggle('locked-choice', on));
    };

    if (reviewMode) {
      bar.classList.add('hidden');
      setLocked(false);
      setTimeout(() => this._autoAnswer(), 300);
      return;
    }

    const { secs, first } = this._readSecs();
    if (label) label.textContent = first ? '📖 Read the passage first — answers unlock in' : '📖 Read carefully — answers unlock in';
    bar.classList.remove('hidden');
    count.textContent = secs;
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${secs}s linear`;
      fill.style.width = '0%';
    }));

    setLocked(true);

    let remaining = secs;
    this.readInterval = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.readInterval);
        this.readInterval = null;
        bar.classList.add('hidden');
        setLocked(false);
        document.getElementById('confirm-btn').classList.remove('hidden');
      }
    }, 1000);
  },

  /* ── NEXT SOAK (6s) ── */
  startNextTimer(onDone) {
    if (this.nextInterval) { clearInterval(this.nextInterval); this.nextInterval = null; }
    const bar   = document.getElementById('next-timer-bar');
    const fill  = document.getElementById('next-fill');
    const count = document.getElementById('next-count');

    if (reviewMode) {
      bar.classList.add('hidden');
      if (reviewAutoRun) {
        setTimeout(() => this.nextQuestion(), 800);
      } else {
        document.getElementById('next-btn').classList.remove('hidden');
      }
      return;
    }

    this.soakDone = false;
    bar.classList.remove('hidden');
    count.textContent = NEXT_SECS;
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${NEXT_SECS}s linear`;
      fill.style.width = '0%';
    }));

    let remaining = NEXT_SECS;
    this.nextInterval = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.nextInterval);
        this.nextInterval = null;
        bar.classList.add('hidden');
        this.soakDone = true;
        this._maybeShowNext();   // after a miss, Next also waits for the Listen
        if (onDone) onDone();
      }
    }, 1000);
  },

  /* ── LESSON CARDS ──
     Every activity opens with its lesson cards (data/rad.js `cards`), one card
     at a time. The card reads itself line by line, each word lighting up, and
     every line also has its own 🔊. Next opens when the voice reaches the end of
     the card — or, on a device with no voice, after a wait long enough to read
     the card. Cards are not scored. cardsSeen remembers the cards were shown,
     so a resume goes straight back to the questions. */
  _needsCards() {
    const act = ACTIVITIES[this.currentSection];
    return !!act && this.currentIndex === 0 && (act.data.cards || []).length > 0 &&
           !(this.cardsSeen || []).includes(0);
  },

  _showCards() {
    this._cards  = ACTIVITIES[this.currentSection].data.cards;
    this._cardAt = 0;
    this.questionLocked = false;   // a save during the cards must not skip the first question
    document.getElementById('quiz-screen').classList.add('card-mode');
    this._applyCompLayout(false);
    this._renderCard();
  },

  _cardBlockHTML(b) {
    const ex = (cls, icon, text, why) => sayBlockHTML(`rp-ex ${cls}`,
      `<span class="rp-ex-icon" aria-hidden="true">${icon}</span><span class="rp-ex-text">“${escapeHtml(text)}”</span><span class="rp-ex-why">${escapeHtml(why)}</span>`);
    if (b.p)      return sayBlockHTML('rp-p', escapeHtml(b.p));
    if (b.term)   return sayBlockHTML('ip-term', `<strong class="ip-term-word">${escapeHtml(b.term)}</strong> means ${escapeHtml(b.means || '')}`) +
                    (b.ex ? sayBlockHTML('ip-term-ex', escapeHtml(b.ex), 'For example:') : '');
    if (b.quote)  return sayBlockHTML('ip-excerpt', escapeHtml(b.quote), '📄 From the passage:');
    if (b.ask)    return sayBlockHTML('rp-ask', escapeHtml(b.ask), 'Test question:');
    if (b.chart)  return chartHTML(b.chart);
    if (b.rows)   return b.rows.map(r => sayBlockHTML('rp-step',
                    `<span class="rp-letter"${/[A-Za-z0-9]/.test(r[0]) && !/^\d+$/.test(r[0]) ? '' : ' data-noread'}>${escapeHtml(r[0])}</span>${escapeHtml(r[1])}`)).join('');
    if (b.rad)    return sayBlockHTML('rp-model', radAnswerHTML(b.rad), 'R.A.D. answer:');
    if (b.good)   return ex('rp-good', '✔', b.good, b.why);
    if (b.bad)    return ex('rp-bad', '✘', b.bad, b.why);
    return '';
  },

  _renderCard() {
    stopActiveSpeech();
    clearTimeout(this._cardUnlock);
    clearTimeout(this._cardSpeak);
    clearTimeout(this._cardPause);
    const c   = this._cards[this._cardAt];
    const box = document.getElementById('learn-card');
    const last = this._cardAt + 1 >= this._cards.length;
    document.getElementById('progress-text').textContent = `Lesson card ${this._cardAt + 1} of ${this._cards.length}`;
    document.getElementById('score-text').textContent    = `${getFirstName(this.studentName)} · ${this.score}`;
    document.getElementById('progress-fill').style.width = '0%';
    document.getElementById('streak-bar').textContent    = '';
    box.innerHTML = `
      <div class="lc-top">
        <button class="speak-btn" id="lc-speak" onclick="app.speakCard()" title="Hear this whole card" aria-label="Hear this whole card">🔊</button>
        <span class="lc-kicker">📘 Listen to the lesson</span>
      </div>
      <h2 class="lc-title rp-say">${escapeHtml(c.title)}</h2>
      <div class="lc-blocks">${c.blocks.map(b => this._cardBlockHTML(b)).join('')}</div>
      <p class="lc-note" id="lc-note" aria-live="polite">Listen to the end of the card. Then the Next button opens.</p>
      <div class="lc-btns">
        ${this._cardAt > 0 ? '<button class="action-btn lc-back" onclick="app.prevCard()">⬅️ Back</button>' : ''}
        <button id="lc-next" class="action-btn" onclick="app.nextCard()" disabled>⏳ Listen first…</button>
      </div>`;
    box.classList.remove('hidden');
    window.scrollTo(0, 0);
    this._cardLast = last;
    this.saveProgress();
    if (reviewMode) { this._openCardNext(); if (reviewAutoRun) setTimeout(() => this.nextCard(), 500); return; }
    // The button opens when the voice finishes the card. Only a device with NO voice (nothing started within
    // 4 s) gets it after a wait long enough to read the card: the reading-time timer used to run even while the
    // voice was still reading, and opened Next before the card was heard (Marcos 10/30: "RAD practice i saw
    // allowed it"; Parts of Speech HQ's fix of 10/28).
    const words = Array.from(box.querySelectorAll('.rp-say')).reduce((n, el) => n + el.textContent.split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length, 0);
    this._cardVoiceStarted = false;
    this._cardUnlock = setTimeout(() => {
      if (this._cardVoiceStarted) return;
      this._cardUnlock = setTimeout(() => this._openCardNext(), Math.max(0, Math.min(40000, Math.max(10000, words * 450)) - LISTEN_START_WAIT));
    }, LISTEN_START_WAIT);
    this._cardSpeak = setTimeout(() => this.speakCard(), 250);
  },

  _openCardNext() {
    clearTimeout(this._cardUnlock);
    const btn = document.getElementById('lc-next');
    if (!btn || !btn.disabled) return;
    btn.disabled = false;
    btn.textContent = this._cardLast ? 'Start practicing ➡️' : 'Next card ➡️';
    clearStoppedNote(document.getElementById('lc-speak'));
    const note = document.getElementById('lc-note');
    if (note) { note.classList.remove('lc-stopped'); note.textContent = '✅ You can go on.'; }
  },

  /* Stopped before the end (⏹, or another 🔊): Next stays shut, and the note says what to do — read aloud (10/30) */
  _cardStoppedEarly() {
    const next = document.getElementById('lc-next');
    if (next && next.disabled) sayStoppedNote(document.getElementById('lc-note'), '👆 Tap the 🔊 speaker at the top to hear the whole card. Then the Next button opens.', document.getElementById('lc-speak'));
  },

  /* Reads the whole card, one block at a time, lighting each word */
  speakCard() {
    const btn = document.getElementById('lc-speak');
    const box = document.getElementById('learn-card');
    if (!btn || !box) return;
    // a stopped reading may still have its next line waiting out the pause: it must not come in on top of this one
    clearTimeout(this._cardPause);
    if (activeSpeakBtn === btn) { stopActiveSpeech(); this._cardStoppedEarly(); return; }
    stopActiveSpeech();
    // the card's own lines (not the note under it)
    const lines = Array.from(box.querySelectorAll('.rp-say')).filter(el => !el.closest('.lc-note')).map(blockSpans).filter(s => s.length);
    if (!lines.length) { this._openCardNext(); return; }
    activeSpeakBtn = btn; btn.textContent = '⏹';
    clearStoppedNote(btn, document.getElementById('lc-note'));
    const sayLine = k => {
      if (activeSpeakBtn !== btn) { this._cardStoppedEarly(); return; }   // stopped before the end: Next stays shut until the whole card is heard
      if (k >= lines.length) { btn.textContent = '🔊'; activeSpeakBtn = null; this._openCardNext(); return; }
      const spans = lines[k];
      let text = spokenOf(spans);
      if (!/[.!?:,]["”’]?$/.test(text)) text += '.';
      const u = new SpeechSynthesisUtterance(text);
      english(u); u.rate = 0.82;
      u.onstart = () => { this._cardVoiceStarted = true; };
      u.onboundary = e => {
        if (e.name !== 'word') return;
        box.querySelectorAll('.wrd.hl').forEach(el => el.classList.remove('hl'));
        lightAt(spans, u.text, e.charIndex);
      };
      u.onend = () => {
        box.querySelectorAll('.wrd.hl').forEach(el => el.classList.remove('hl'));
        this._cardPause = setTimeout(() => sayLine(k + 1), LINE_PAUSE_MS);
      };
      addHighlightFallback(u, spans);
      window.speechSynthesis.speak(u);
    };
    sayLine(0);
  },

  nextCard() {
    stopActiveSpeech();
    clearTimeout(this._cardUnlock);
    clearTimeout(this._cardPause);
    clearTimeout(this._cardSpeak);
    this._cardAt++;
    if (this._cardAt < this._cards.length) { this._renderCard(); return; }
    this.cardsSeen.push(0);
    this._leaveCards();
    this.saveProgress();
    this.renderQuestion();
  },

  prevCard() {
    if (this._cardAt <= 0) return;
    this._cardAt -= 1;
    this._renderCard();
  },

  _leaveCards() {
    clearTimeout(this._cardUnlock);
    clearTimeout(this._cardPause);
    clearTimeout(this._cardSpeak);
    document.getElementById('quiz-screen').classList.remove('card-mode');
    const box = document.getElementById('learn-card');
    if (box) { box.classList.add('hidden'); box.innerHTML = ''; }
  },

  /* ── RENDER QUESTION ── */
  renderQuestion() {
    if (this._needsCards()) { this._showCards(); return; }
    this._leaveCards();
    this._applyCompLayout(true);
    const q      = this.currentBank[this.currentIndex];
    const total  = this.currentBank.length;

    document.getElementById('progress-text').textContent =
      `Level ${this.level || 1} · Question ${this.currentIndex + 1} of ${total}` + (q.part ? ` · Part ${q.part}` : '');
    document.getElementById('score-text').textContent =
      `${getFirstName(this.studentName)} · ${this.score}`;
    document.getElementById('progress-fill').style.width =
      `${(this.currentIndex / total) * 100}%`;

    this._renderStreak();

    document.getElementById('question-text').innerHTML =
      wrapWords((q.part ? `<span class="part-pill">Part ${q.part}</span> ` : '') + escapeHtml(q.q));
    document.getElementById('q-before').innerHTML = this._beforeHTML(q);
    document.getElementById('q-show').innerHTML = this._showHTML(q);
    document.querySelectorAll('#q-show .hot-s').forEach(el => {
      const pick = () => this._selectHot(Number(el.dataset.i), el);
      el.addEventListener('click', pick);
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
    });
    this._renderPassage(q);
    document.getElementById('q-after').innerHTML = q.part === 'A' ? this._partBWaitHTML() : '';
    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box';
    fb.style.display = 'none';
    fb.textContent = '';

    document.getElementById('confirm-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('next-timer-bar').classList.add('hidden');

    this.selectedIndices = new Set();
    this.questionLocked  = false;
    this.mustHear = false;
    this.soakDone = false;
    const wrap = document.getElementById('answers');
    wrap.innerHTML = '';
    wrap.classList.toggle('ip-hot-answers', q.type === 'hot');

    if (q.type === 'hot') {
      // Click a sentence: the sentences are buttons in the passage; this box says how and shows the pick
      wrap.innerHTML = sayBlockHTML('ip-hot-help', '👆 Tap the sentence above that answers the question. The sentence turns yellow. Then tap That’s My Answer!') +
        `<div class="ip-hot-pick" id="hot-pick" aria-live="polite">No sentence picked yet.</div>`;
    } else {
      q.choices.forEach((text, i) => {
        const row = document.createElement('div');
        row.className = 'answer-row';
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.innerHTML = `<strong>${['A','B','C','D','E'][i]}.</strong>&nbsp;<span class="choice-text">${choiceHtml(escapeHtml(text))}</span>`;
        btn.onclick = () => this._selectChoice(i, btn, false);
        const speakBtn = document.createElement('button');
        speakBtn.className = 'choice-speak-btn';
        speakBtn.textContent = '🔊';
        speakBtn.title = 'Read this choice aloud';
        speakBtn.setAttribute('aria-label', 'Read this choice aloud');
        speakBtn.onclick = (e) => {
          e.stopPropagation();
          speakEl(speakBtn, btn.querySelector('.choice-text'));
        };
        row.appendChild(speakBtn);
        row.appendChild(btn);
        wrap.appendChild(row);
      });
    }

    if (this.currentIndex > 0 && this.currentIndex % 5 === 0) {
      submitScorePartial();
    }

    this.saveProgress();

    document.getElementById('answers').classList.remove('hidden');
    this.startReadTimer();
  },

  /* Above the question on Part B: Part A, answered (the right answer, and the student's
     pick if it was different) — the test shows Part A above Part B on one screen */
  _beforeHTML(q) {
    if (!(q.part === 'B' && q.partA)) return '';
    const mine = (this.responses || {})[q.group + '.A'];
    const said = mine && !mine.correct ? `You picked: ${quoted(mine.pick)} · ` : '';
    return sayBlockHTML('ip-partA', `<span class="part-pill">Part A</span> ${escapeHtml(q.partA.q)} ` +
      `<span class="ip-partA-ans">${said}✅ Answer: ${escapeHtml(q.partA.right)}</span>`);
  },

  /* Between the question and the choices: the sentences to click, or the paragraph the
     question is about in a "From the passage" box. Every block has a speaker. */
  _showHTML(q, opts) {
    const blocks = [];
    if (q.type === 'hot') blocks.push(this._hotAreaHTML(q, opts && opts.right));
    else if (q.para) {
      const p = levelData(this.currentSection || (this._slides || {}).section, this.level || (this._slides || {}).level || 1)[q.passage];
      const text = p && p.paragraphs[q.para - 1];
      if (text) blocks.push(sayBlockHTML('ip-excerpt', escapeHtml(text), `📄 From the passage — paragraph ${q.para}:`));
    }
    return blocks.join('');
  },

  /* Part B waits under Part A, like the test shows both parts on one screen */
  _partBWaitHTML() {
    return sayBlockHTML('ip-partB-wait', `<span class="part-pill">Part B</span> ${escapeHtml(window.INF_PART_B)} ` +
      `<span class="ip-wait-note">You answer Part B after Part A.</span>`);
  },

  /* The passage: title, numbered paragraphs, a speaker on each. A question about one
     paragraph rings it. The passage is for reading; clicking happens next to the question. */
  _passageHTML(p, q) {
    const icon = p.genre === 'nonfiction' ? '📰' : '📖';
    return `
      <div class="story-panel-header">${icon} ${escapeHtml(p.title)}</div>
      <div class="story-scroll">
        ${p.paragraphs.map((t, i) => `
          <div class="sp-para${q && q.para === i + 1 ? ' sp-focus' : ''}" data-para="${i + 1}">
            <span class="sp-num" aria-label="Paragraph ${i + 1}">${i + 1}</span>
            ${SPEAK_HTML}
            <div class="rp-say">${escapeHtml(t)}</div>
          </div>`).join('')}
      </div>`;
  },

  /* Click a sentence, like the test's hot text: the paragraph (or the whole passage) is shown
     again next to the question, every sentence a button. `right` marks the answer green
     (Slide Mode, after Show Answer). */
  _hotAreaHTML(q, right) {
    const p = levelData(this.currentSection || (this._slides || {}).section, this.level || (this._slides || {}).level || 1)[q.passage];
    if (!p) return '';
    const nums = [...new Set(q.where.map(w => w[0]))];
    const label = q.para ? `📄 From the passage — paragraph ${q.para}:` : '📄 The passage:';
    return `<div class="ip-hot-area"><p class="ip-hot-label">${label}</p>${nums.map(n =>
      `<div class="ip-hot-para">${q.para ? '' : `<span class="sp-num" aria-label="Paragraph ${n}">${n}</span>`}${SPEAK_HTML}<div class="rp-say">${
        window.INF_SPLIT(p.paragraphs[n - 1]).map((t, k) => {
          const i = q.where.findIndex(w => w[0] === n && w[1] === k);
          return `<span class="hot-s${right === i ? ' hot-right' : ''}" role="button" tabindex="0" data-i="${i}">${escapeHtml(t)}</span>`;
        }).join(' ')}</div></div>`).join('')}</div>`;
  },

  _renderPassage(q) {
    const panel = document.getElementById('story-panel');
    if (!panel) return;
    const p = levelData(this.currentSection, this.level || 1)[q.passage];
    if (!p) { panel.innerHTML = ''; return; }
    const old = panel.querySelector('.story-scroll');
    const keep = old && this._panelPassage === q.passage ? old.scrollTop : 0;
    panel.innerHTML = this._passageHTML(p, q);
    this._panelPassage = q.passage;
    const scroll = panel.querySelector('.story-scroll');
    const focus = panel.querySelector('.sp-focus');
    if (scroll) scroll.scrollTop = focus ? Math.max(0, focus.offsetTop - 8) : keep;
  },

  _selectHot(i, el, auto) {
    if (this.questionLocked || (this._hotLocked && !auto)) return;
    document.querySelectorAll('#q-show .hot-s.selected').forEach(x => x.classList.remove('selected'));
    el.classList.add('selected');
    this.selectedIndices = new Set([i]);
    const q = this.currentBank[this.currentIndex];
    const pick = document.getElementById('hot-pick');
    if (pick) pick.innerHTML = `<span class="rp-label">Your pick:</span> ${quoted(q.choices[i])}`;
  },

  _selectChoice(i, btn, isMulti) {
    if (this.questionLocked) return;
    document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
    this.selectedIndices = new Set([i]);
    btn.classList.add('selected');
  },

  _renderStreak() {
    const el = document.getElementById('streak-bar');
    if (this.streak >= 3) {
      el.textContent = '🔥'.repeat(Math.min(this.streak, 8)) + ` ${this.streak} in a row!`;
    } else {
      el.textContent = '';
    }
  },

  /* Next appears when the 6 second pause is over and — after a miss — the feedback has been heard */
  _maybeShowNext() {
    if (!this.soakDone || this.mustHear) return;
    const next = document.getElementById('next-btn');
    next.classList.remove('hidden');
    next.scrollIntoView({ block: 'nearest' });
    try { next.focus({ preventScroll: true }); } catch (e) {}
  },

  /* LISTEN, THEN NEXT — the big Listen button under the feedback after a miss (see LISTEN_START_WAIT) */
  _armListen(fb, smallBtn, spans, text, qid, onHeard) {
    smallBtn.style.display = 'none';              // one thing to press
    const row = document.createElement('div');
    row.className = 'listen-row';
    row.innerHTML = `<button type="button" class="listen-btn" id="listen-btn">🔊 Listen</button>` +
      `<span class="listen-note" id="listen-note" aria-live="polite">Listen to the end. Then you can go on.</span>`;
    fb.after(row);                                // right under the words it reads
    const btn = row.querySelector('#listen-btn'), note = row.querySelector('#listen-note');
    const words = text.split(/\s+/).filter(Boolean).length;
    const clearHl = () => spans.forEach(el => el.classList.remove('hl'));
    const idle = () => { btn.classList.remove('playing'); btn.textContent = this.mustHear ? '🔊 Listen' : '🔊 Listen again'; };

    const heard = how => {
      if (!this.mustHear || !btn.isConnected) return;
      this.mustHear = false;
      logEvent('heard', { id: qid, how });      // how: 'voice' or 'read' (no sound on the device)
      if (onHeard) onHeard();
      btn.disabled = false; btn.classList.add('heard'); btn.onclick = play; idle();
      note.textContent = '✅ Done. You can go on.';
      this.saveProgress();
      this._maybeShowNext();
    };

    // This device will not speak: wait long enough to read it, then an "I read it" button
    const noVoice = () => {
      clearHl();
      if (!this.mustHear) { idle(); return; }
      btn.classList.remove('playing'); btn.disabled = true; btn.textContent = '⏳ Read it first…';
      note.textContent = 'No sound here. Read it. Then tap the button.';
      setTimeout(() => {
        if (!this.mustHear || !btn.isConnected) return;
        btn.disabled = false; btn.textContent = '✅ I read it';
        btn.onclick = () => heard('read');
      }, listenDwellMs(words));
    };

    const play = () => {
      if (listenJob && !listenJob.settled && listenJob.btn === btn) return;   // a second tap must not cut the voice off
      stopActiveSpeech();
      if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') { noVoice(); return; }
      const job = listenJob = { btn, settled: false, started: false, startTimer: null, watchdog: null };
      const settle = () => { job.settled = true; clearTimeout(job.startTimer); clearTimeout(job.watchdog); clearHl(); };
      const finish = ok => {
        if (job.settled) return;
        settle();
        if (!btn.isConnected) return;
        if (ok && this.mustHear) { heard('voice'); return; }
        idle();
        if (!ok && this.mustHear) note.textContent = 'It stopped early. Tap Listen. Hear it to the end.';
      };
      job.abort = () => finish(false);
      btn.classList.add('playing'); btn.textContent = '🔊 Listening…';
      const u = new SpeechSynthesisUtterance(text);
      english(u); u.rate = READ_RATE;
      u.onstart = () => {
        job.started = true;
        // Some voices never report that they finished. Generous on purpose (about 80 words a minute),
        // so it can only fire after a real voice would be done.
        job.watchdog = setTimeout(() => finish(true), words * 750 + 6000);
      };
      u.onboundary = e => {
        if (e.name !== 'word') return;
        clearHl();
        lightAt(spans, u.text, e.charIndex);
      };
      u.onend = () => finish(true);
      u.onerror = () => { if (job.settled) return; settle(); noVoice(); };
      addHighlightFallback(u, spans);
      job.startTimer = setTimeout(() => {
        if (job.started || job.settled) return;      // no sound started: this device cannot speak
        settle(); window.speechSynthesis.cancel(); noVoice();
      }, LISTEN_START_WAIT);
      window.speechSynthesis.speak(u);
    };
    btn.onclick = play;
  },

  /* ── CONFIRM ANSWER ──
     Every answer teaches: the right answer, why (and, after a miss, why the picked
     choice did not work), then the chart (Facts From the Text + Things We Know =
     Conclusions We Draw) or, after Part B, the R.A.D. answer Part A and Part B make. */
  confirmAnswer() {
    if (this.questionLocked) return;   // answered already: a second tap or key must not count it again (10/27)
    if (this.selectedIndices.size === 0) return;
    this.questionLocked = true;

    const q       = this.currentBank[this.currentIndex];
    const pickIdx = [...this.selectedIndices][0];
    const correct = pickIdx === q.answer;
    const picked    = q.choices[pickIdx];
    const rightText = q.choices[q.answer];
    this.responses[q.id] = { stem: q.q, pick: picked, answer: rightText, correct };

    if (correct) {
      this.score++;
      this.streak++;
    } else {
      this.streak = 0;
      this.missedQuestions.push({ id: q.id, q: missText(q), skill: q.skill, yourAnswer: picked, correct: rightText });
    }

    if (q.type === 'hot') {
      document.querySelectorAll('#q-show .hot-s').forEach(el => {
        const i = Number(el.dataset.i);
        el.classList.add('done');
        el.setAttribute('aria-disabled', 'true');
        if (i === q.answer) el.classList.add('hot-right');
        else if (i === pickIdx) el.classList.add('hot-wrong');
      });
    } else {
      document.querySelectorAll('.answer-btn').forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.answer)                   btn.classList.add('correct');
        else if (this.selectedIndices.has(i)) btn.classList.add('incorrect');
      });
    }

    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box ' + (correct ? 'correct' : 'incorrect');
    fb.style.display = 'block';
    fb.innerHTML = this._answerHTML(q, correct, pickIdx);

    // After a miss the student must HEAR why before Next shows
    const fbSpeak = fb.querySelector('.rp-fb .rp-speak');
    const fbSpans = blockSpans(fb.querySelector('.fb-text'));
    this.mustHear = !correct && !reviewMode;
    if (this.mustHear) this._armListen(fb.querySelector('.rp-fb'), fbSpeak, fbSpans, spokenOf(fbSpans), q.id);

    document.getElementById('confirm-btn').classList.add('hidden');
    document.getElementById('score-text').textContent = `${getFirstName(this.studentName)} · ${this.score}`;
    this._renderStreak();
    this.saveProgress();
    this.startNextTimer(null);
  },

  /* The feedback: right or not, why, and the chart / R.A.D. answer. In Slide Mode it is
     always the "right" wording (pickIdx null). */
  /* Part A's why names the clue — the very sentence Part B asks for — so, like the test, Part A
     gets no explanation until Part B is answered: only right or not (and the note on a wrong
     pick). After Part B the student sees why for both parts, then the R.A.D. answer. Slide Mode
     (the teacher's board) explains each part as it is shown. */
  _answerHTML(q, correct, pickIdx) {
    const rightText = q.choices[q.answer];
    const best = q.type === 'hot' || q.part === 'B'
      ? `The best sentence is: <strong>${quoted(rightText)}</strong>`
      : `The best answer is: <strong>${escapeHtml(rightText.replace(/[.!?…]+$/, ''))}</strong>.`;
    const note = !correct && pickIdx != null ? (q.notes && q.notes[pickIdx]) || '' : '';
    const holdWhy = q.part === 'A' && pickIdx != null;
    const why = holdWhy ? 'You will see why after Part B.' : (q.why || '');
    const fbText = pickIdx == null
      ? `✅ ${best} ${escapeHtml(why)}`
      : correct
        ? `✅ <strong>Correct!</strong> ${escapeHtml(why)}`
        : `❌ <strong>Not quite.</strong> ${note ? escapeHtml(note) + ' ' : ''}${best} ${escapeHtml(why)}`;
    let html = `<div class="rp-block rp-fb">${SPEAK_HTML}<div class="rp-say fb-text">${fbText}</div></div>`;
    if (q.part === 'B' && q.partA && q.partA.why && pickIdx != null)
      html += `<div class="rp-after">${sayBlockHTML('ip-partA-why', escapeHtml(q.partA.why), 'Why the Part A answer is right:')}</div>`;
    if (q.chart) html += `<div class="rp-after">${chartHTML(q.chart)}</div>`;
    if (q.part === 'B' && q.model) html += `<div class="rp-after">${sayBlockHTML('rp-model', radAnswerHTML(q.model), '📝 Part A + Part B make a R.A.D. answer:')}</div>`;
    return html;
  },

  /* ── NEXT QUESTION ── */
  nextQuestion() {
    stopActiveSpeech();
    this.currentIndex++;
    if (this.currentIndex >= this.currentBank.length) {
      this._finishSession();
    } else {
      this.renderQuestion();
    }
  },

  /* ── FINISH SESSION ── */
  _finishSession() {
    this.finishedAt = new Date().toISOString(); logEvent('finish');
    this.stopTimerEngine();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(AWOC_SESSION_ID_KEY);

    const total = this.currentBank.length;
    const pct   = Math.round((this.score / total) * 100);
    const date  = new Date();

    // was this level already passed before this try? (the "you finished Level N" moment needs to know)
    this._passedBefore = !reviewMode && passed(this.studentName, this.currentSection, this.level || 1);
    const scores   = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    const attemptNum = this.currentAttemptNum || 1;
    // A GUEST'S VISIT ACTS LIKE A STUDENT'S (Marcos 10/25: "what about RAD and Inference" — the Lab's guest fix): a guest's tries are kept too, so "Your path",
    // ▶ Continue and the levels move on. share.js keeps them under share_ keys and wipes them on the next visit; nothing is
    // sent. There is no try limit here, so nothing locks.
    if (!reviewMode) {
      scores.push({
        name:    this.studentName,
        section: this.currentSection,
        level:   this.level || 1,
        attempt: attemptNum,
        score:   this.score,
        total,
        pct,
        elapsed: this.timerSeconds,
        date:    date.toLocaleDateString(),
        time:    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        done:    true
      });
      localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
    }

    submitScoreFinal();

    let letter = 'F', msg = "Let's study this again! 📚";
    if (pct === 100) { letter = 'A+'; msg = "⭐ PERFECT SCORE! ⭐"; }
    else if (pct >= 90) { letter = 'A'; msg = "Outstanding Work! 🌟"; }
    else if (pct >= 80) { letter = 'B'; msg = "Great Job! 👏"; }
    else if (pct >= 70) { letter = 'C'; msg = "Good Effort! 💪"; }
    else if (pct >= 60) { letter = 'D'; msg = "Keep Practicing! 🔄"; }

    this.show('end-screen');
    this._showAgainButton();

    const reviewNextBtn = document.getElementById('review-next-btn');
    if (reviewNextBtn) reviewNextBtn.classList.toggle('hidden', !reviewMode);

    document.getElementById('final-score-sub').textContent = SHARE_MODE
      ? `${SECTION_LABELS[this.currentSection]} · Level ${this.level || 1} · Guest view — kept for this visit only, not sent to Mr. O`
      : `${SECTION_LABELS[this.currentSection]} · Level ${this.level || 1} · Attempt ${attemptNum} · ${this.studentName}`;
    document.getElementById('final-msg').textContent = msg;

    const pctEl = document.getElementById('final-percent');
    pctEl.innerHTML =
      `${this.score}/${total}<br><small style="font-size:0.5em;color:${pct>=70?'var(--correct)':'var(--danger)'};">${pct}% · ${letter}</small>`;
    setTimeout(() => pctEl.classList.add('revealed'), 50);

    const missedSec = document.getElementById('missed-section');
    if (this.missedQuestions.length) {
      missedSec.classList.remove('hidden');
      document.getElementById('missed-items').innerHTML =
        this.missedQuestions.map(m =>
          `<div class="missed-item">
            <div class="mi-label">${m.id}</div>
            <div style="margin:3px 0;">${plainText(m.q)}</div>
            ${m.yourAnswer ? `<div>Your answer: <span style="color:var(--danger);">${m.yourAnswer}</span> &nbsp; ✅ Correct: <strong style="color:var(--correct);">${m.correct}</strong></div>` : ''}
          </div>`
        ).join('');
    } else {
      missedSec.classList.add('hidden');
    }

    if (pct >= 80) startConfetti(pct);

    // No automatic Score History here (R.A.D. Practice opens it 3 s after an end screen once every
    // activity is done). With six levels that is every finish after the first trip through Level 1,
    // and it would cover the next level the student just started from ▶ Next. The button stays.
    if (false && !reviewMode && !SHARE_MODE && allSectionsCompletedOnce(this.studentName)) {
      setTimeout(() => this.showScores(true), 3000);
    }
  },

  /* ── SPEAK QUESTION ── */
  speakQuestion() {
    const qBtn = document.getElementById('speak-q-btn');
    if (activeSpeakBtn === qBtn) { stopActiveSpeech(); return; }
    stopActiveSpeech();
    activeSpeakBtn = qBtn;
    qBtn.textContent = '⏹';

    const qtEl    = document.getElementById('question-text');
    const qtSpans = Array.from(qtEl.querySelectorAll('.wrd'));
    const qtText  = qtSpans.map(s => s.textContent).join(' ').replace(/_+/g, 'blank');

    const u = new SpeechSynthesisUtterance(qtText);
    english(u);
    u.rate = READ_RATE;
    u.onboundary = e => {
      if (e.name !== 'word') return;
      document.querySelectorAll('#question-text .wrd.hl').forEach(el => el.classList.remove('hl'));
      lightAt(qtSpans, u.text, e.charIndex);
    };
    u.onend = () => {
      document.querySelectorAll('#question-text .wrd.hl').forEach(e => e.classList.remove('hl'));
      const b = document.getElementById('speak-q-btn');
      if (activeSpeakBtn === b) { b.textContent = '🔊'; activeSpeakBtn = null; }
    };
    addHighlightFallback(u, qtSpans);
    window.speechSynthesis.speak(u);
  },

  /* ── SCORES ──
     One card per activity: every level, its best score and how many tries. */
  showScores(autoShow = false) {
    this.show('scoreboard-screen');
    const teacherBtns = document.getElementById('teacher-score-btns');
    if (teacherBtns) teacherBtns.style.display = this.studentName === 'Mr. O (Teacher)' ? 'flex' : 'none';
    if (!reviewMode) this._startScoreLock(autoShow ? 60 : 0);
    const all    = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]').filter(s => s.done && (!this.studentName || s.name === this.studentName));
    const listEl = document.getElementById('score-list');
    const noEl   = document.getElementById('no-scores-msg');

    if (!all.length) {
      listEl.innerHTML = '';
      noEl.style.display = 'block';
      return;
    }
    noEl.style.display = 'none';

    listEl.innerHTML = Object.keys(ACTIVITIES).map(sec => {
      const rows = LEVELS.map(L => {
        const tries = all.filter(s => s.section === sec && (s.level || 1) === L);
        if (!tries.length) return `<tr><td>Level ${L}</td><td colspan="3" style="color:#666;">Not tried yet</td></tr>`;
        const best = tries.reduce((b, r) => (!b || r.pct > b.pct) ? r : b, null);
        const cls = best.pct >= 90 ? 'score-good' : best.pct >= 70 ? 'score-ok' : 'score-bad';
        return `<tr><td>${best.pct >= PASS_PCT ? '✅' : '🔁'} Level ${L}</td><td>${best.score}/${best.total}</td>` +
          `<td class="${cls}">${best.pct}%</td><td>${tries.length} ${tries.length === 1 ? 'try' : 'tries'}</td></tr>`;
      }).join('');
      return `<h3 style="color:var(--primary);margin:22px 0 8px;border-bottom:2px solid #e0e0e0;padding-bottom:6px;">${SECTION_LABELS[sec]}</h3>
        <table class="scoreboard-table"><thead><tr><th>Level</th><th>Best</th><th>%</th><th>Tries</th></tr></thead><tbody>${rows}</tbody></table>`;
    }).join('');
  },

  _startScoreLock(secs) {
    const bar     = document.getElementById('sb-lock-bar');
    const fill    = document.getElementById('sb-lock-fill');
    const count   = document.getElementById('sb-lock-count');
    const buttons = document.querySelectorAll('#scoreboard-screen button:not(#sb-lock-bar button)');
    if (!secs || secs <= 0) { if (bar) bar.classList.add('hidden'); return; }
    bar.classList.remove('hidden');
    count.textContent = secs;
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${secs}s linear`;
      fill.style.width = '0%';
    }));
    buttons.forEach(b => { b.disabled = true; b.style.opacity = '0.4'; });
    let remaining = secs;
    const iv = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(iv);
        bar.classList.add('hidden');
        buttons.forEach(b => { b.disabled = false; b.style.opacity = '1'; });
      }
    }, 1000);
  },

  clearScores() {
    const panel = document.getElementById('clear-confirm-panel');
    panel.classList.remove('hidden');
    document.getElementById('clear-pin-input').value = '';
    document.getElementById('clear-pin-error').textContent = '';
    setTimeout(() => document.getElementById('clear-pin-input').focus(), 80);
  },

  confirmClearScores() {
    const pin = document.getElementById('clear-pin-input').value.trim();
    if (pin === '9377') {
      localStorage.removeItem(SCORES_KEY);
      document.getElementById('clear-confirm-panel').classList.add('hidden');
      this.showScores();
    } else {
      document.getElementById('clear-pin-error').textContent = '❌ Incorrect PIN. Try again.';
      document.getElementById('clear-pin-input').value = '';
      document.getElementById('clear-pin-input').focus();
    }
  },

  cancelClearScores() {
    document.getElementById('clear-confirm-panel').classList.add('hidden');
  },

  printResults() {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    if (!all.length) { alert('No scores to print yet!'); return; }
    const rows = Object.keys(ACTIVITIES).flatMap(sec =>
      all.filter(s => s.section === sec).map(r => {
        const cc  = r.pct >= 80 ? 'good' : r.pct >= 60 ? 'ok' : 'bad';
        return `<tr>
          <td>${escapeHtml(r.name||'—')}</td>
          <td>${SECTION_LABELS[r.section]}</td>
          <td>${levelLabel(r.level || 1)}</td>
          <td>Attempt ${r.attempt || 1}</td>
          <td>${r.score}/${r.total}</td>
          <td class="${cc}">${r.pct}%</td>
          <td>${r.time||'—'}</td>
          <td>${r.date}</td>
        </tr>`;
      })
    ).join('');

    const html = `<html><head><title>Inference Practice Scores</title>
      <style>body{font-family:Arial;padding:20px;}h2{color:#1a3a6b;}
      table{width:100%;border-collapse:collapse;margin-top:12px;}
      th,td{border:1px solid #ccc;padding:8px 12px;text-align:center;}
      th{background:#1a3a6b;color:white;}
      .good{color:green;font-weight:bold;}.ok{color:orange;font-weight:bold;}.bad{color:red;font-weight:bold;}</style>
      </head><body>
      <h2>🕵️ Inference Practice — Score Report</h2>
      <p>Printed: ${new Date().toLocaleString()}</p>
      <table><tr><th>Name</th><th>Activity</th><th>Level</th><th>Attempt</th><th>Score</th><th>%</th><th>Time</th><th>Date</th></tr>${rows}</table>
      </body></html>`;
    const w = window.open('', '_blank');
    w.document.write(html);
    w.document.close();
    w.print();
  },

  /* ── END SCREEN ACTIONS ──
     Marcos 10/14: the buttons say where they go. "Back to My Activities" keeps
     the student signed in; "Do This Activity Again" starts the same one (while a
     try is left); only "Sign Out" goes back to the very beginning. */
  backToMenu() {
    if (!this.studentName) { this.restart(); return; }
    this.tryAgain();
  },

  doAgain() {
    stopConfetti();
    if (!this.studentName || !this.currentSection) { this.restart(); return; }
    this.attemptStart(this.currentSection, this.level || 1);
  },

  // This try finished the last activity of Level L (all 8 now passed at L, and this one was not before)
  _levelJustDone(L) {
    if (L >= LEVELS[LEVELS.length - 1]) return false;
    if (reviewMode) { const st = stepAfter(this.currentSection, L); return !!st && st.level > L; }
    return !this._passedBefore && levelDone(this.studentName, L);
  },

  // "▶ Next": the next step in the class's order (see FLOW)
  goNext() {
    stopConfetti();
    if (!this.studentName || !this._nextStep) { this.restart(); return; }
    this.attemptStart(this._nextStep.section, this._nextStep.level);
  },

  // The end screen's main button takes the student on: ▶ Next (the next step in the order) after a
  // pass, 🔄 Try Again while this level is still the next step. Back to My Activities stays.
  _showAgainButton() {
    const btn  = document.getElementById('again-btn');
    const next = document.getElementById('next-step-btn');
    const note = document.getElementById('again-note');
    if (!btn || !note) return;
    const L = this.level || 1;
    const total = this.currentBank.length;
    const thisTry = total ? this.score / total * 100 >= PASS_PCT : false;
    const need = needFor(this.currentSection, L);
    // Teacher Access saves no scores: it follows the order from this level (a guest's tries are kept, so a guest goes by them)
    const st = reviewMode
      ? (thisTry ? stepAfter(this.currentSection, L) : { section: this.currentSection, level: L })
      : nextStep(this.studentName);
    const same = !!st && st.section === this.currentSection && st.level === L;
    this._nextStep = st && !same ? st : null;
    if (next) {
      next.classList.toggle('hidden', !this._nextStep || reviewMode);
      if (this._nextStep) {
        next.querySelector('.ip-next-what').textContent = stepLabel(this._nextStep);
        const sub = document.getElementById('next-sub');
        if (sub) sub.textContent = this._nextStep.section === this.currentSection
          ? 'A harder passage, the same kinds of questions.'
          : `Level ${this._nextStep.level} · ${ACTIVITIES[this._nextStep.section].sub}`;
      }
    }
    // Marcos 10/22: "let's get rid of this option if the student has passed. There's no reason for it
    // if they passed." Passed = this level's best try is 70%+ (Teacher Access: this try).
    const passedHere = reviewMode ? thisTry : passed(this.studentName, this.currentSection, L);
    btn.classList.toggle('hidden', passedHere);
    btn.querySelector('.again-what').textContent = same ? `🔄 Try Level ${L} Again` : '🔄 Do This Level Again';
    const sub = document.getElementById('again-sub');
    if (sub) sub.textContent = same ? `Get ${need} of ${total} right to move on.` : 'Start this one over.';
    let text = '';
    if (reviewMode) text = '';
    else if (!st) text = '🏆 You finished every level of every activity! Do any of them again anytime.';
    else if (same) text = `Get ${need} of ${total} right to move on. Tap Try Again. You can do it!`;
    else if (thisTry && this._levelJustDone(L)) text = `🎉 You finished Level ${L} of every activity! Level ${L + 1} starts now: harder passages, the same kinds of questions.`;
    else if (thisTry) text = `🔓 You got ${need} or more right! Next up: ${stepLabel(st)}.`;
    else text = `Next up: ${stepLabel(st)}.`;
    note.classList.toggle('hidden', !text);
    note.textContent = text;
    // the main button goes first
    const first = this._nextStep && !reviewMode ? next : btn;
    if (first && first.parentElement && first.parentElement.firstElementChild !== first) first.parentElement.prepend(first);
  },

  tryAgain() {
    stopConfetti();
    this.toggleRedo(false);   // back to the path, list folded away
    this.timerSeconds = 0;
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.add('hidden');
    document.getElementById('student-login-panel').classList.remove('hidden');
    applyLocks(this.studentName);
    this.checkResume();
  },

  restart() {
    stopConfetti();
    this.stopTimerEngine();
    this.timerSeconds   = 0;
    this.studentName    = '';
    loggedInName        = '';
    unlockedSections    = new Set();
    document.getElementById('name-select').value = '';
    document.getElementById('student-pin').value = '';
    document.getElementById('pin-section').classList.add('hidden');
    document.getElementById('section-select').classList.add('hidden');
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementById('login-error').textContent = '';
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.remove('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  /* ── GLOBAL PIN MODAL ── */
  showPinModal(title, msg, onSuccess) {
    pinModalCallback = onSuccess;
    document.getElementById('pin-modal-title').textContent = title;
    document.getElementById('pin-modal-msg').textContent   = msg;
    document.getElementById('pin-modal-input').value       = '';
    document.getElementById('pin-modal-error').textContent = '';
    document.getElementById('pin-modal').classList.remove('hidden');
    setTimeout(() => document.getElementById('pin-modal-input').focus(), 80);
  },

  confirmPinModal() {
    const pin = document.getElementById('pin-modal-input').value.trim();
    if (pin === '9377') {
      document.getElementById('pin-modal').classList.add('hidden');
      const cb = pinModalCallback;
      pinModalCallback = null;
      if (cb) cb();
    } else {
      document.getElementById('pin-modal-error').textContent = '❌ Incorrect PIN. Try again.';
      document.getElementById('pin-modal-input').value = '';
      document.getElementById('pin-modal-input').focus();
    }
  },

  cancelPinModal() {
    document.getElementById('pin-modal').classList.add('hidden');
    pinModalCallback = null;
  }
};

/* ── SLIDE MODE KEYS: arrows, a clicker's Page Down / Page Up, Space; Esc leaves ── */
document.addEventListener('keydown', e => {
  if (document.getElementById('slide-screen').classList.contains('hidden')) return;
  if (e.target && e.target.tagName === 'SELECT') return;     // the jump list uses the arrows itself
  const k = e.key;
  if (k === ' ' && e.target && e.target.tagName === 'BUTTON') return;   // Space on a button already presses it
  if (k === 'ArrowRight' || k === 'PageDown' || k === ' ') { e.preventDefault(); app.slideNext(); }
  else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); app.slideBack(); }
  else if (k === 'Escape') { e.preventDefault(); app.exitSlides(); }
});
// A new window size (the projector plugged in, full screen) fits the slide again
window.addEventListener('resize', () => {
  if (!app._slides || document.getElementById('slide-screen').classList.contains('hidden')) return;
  app._slides.fitAt = -1;
  app._fitSlide();
});

/* ── LEAVING ENDS THE READ-ALOUD ──────────────────────
   Marcos 10/23 (the QPS hub): "if I leave I still hear the read aloud". A new screen, another tab
   or leaving the site ends everything being read — a whole lesson card, the Read Aloud screen, a
   Listen — for good, not just the line being said (the card used to go on to its next line). */
function hushReadAloud() {
  introToken++; clearTimeout(introTimer);
  clearTimeout(app._cardSpeak); clearTimeout(app._cardPause); clearTimeout(stoppedNoteTimer); readAloudHushed = true;
  stopActiveSpeech();
}
window.addEventListener('pagehide', hushReadAloud);
document.addEventListener('visibilitychange', () => { if (document.hidden) hushReadAloud(); });

/* ── VISIBILITY / UNLOAD ─────────────────────────────── */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (!app.timerOn) return;
    tabSwitchCount++;
    logEvent('leave');
    app.stopTimerEngine();
    app.saveProgress();
    if (app.instructInterval) { clearInterval(app.instructInterval); }
    if (app.readInterval)     { clearInterval(app.readInterval); app.readInterval = null; app._readLockPaused = true; }
    app._wasTimerRunning = true;
  } else {
    if (!app._wasTimerRunning) return;
    app._wasTimerRunning = false;
    logEvent('return');
    const warnBanner = document.getElementById('tab-warning-banner');
    if (warnBanner) warnBanner.classList.remove('hidden');
    app.stopTimerEngine();
    app.timerInterval = setInterval(() => {
      app.timerSeconds++;
      app._tickTimer();
      if (app.timerSeconds % 30 === 0) app.saveProgress();
    }, 1000);
    app.timerOn = true;
    // The read lock stopped while the page was hidden; start it over so the
    // answers unlock again (left alone they stayed locked until a refresh).
    if (app._readLockPaused) { app._readLockPaused = false; app.startReadTimer(); }
  }
});

window.addEventListener('beforeunload', () => {
  if (app.timerOn) logEvent('close');
  if (app.timerOn) app.saveProgress();
});

/* ── CONFETTI ────────────────────────────────────────── */
const canvas = document.getElementById('confetti-canvas');
const ctx    = canvas.getContext('2d');
let particles = [], animId = null;

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();

function startConfetti(pct) {
  particles = [];
  let count, cols;
  if (pct === 100) {
    count = 300;
    cols = ['#FFD700','#c0392b','#FFFACD','#FFA500','#ffffff','#FFD700'];
  } else if (pct >= 90) {
    count = 220;
    cols = ['#1a3a6b','#c0392b','#2ecc71','#3498db','#9b59b6','#e74c3c','#FFD700'];
  } else if (pct >= 80) {
    count = 160;
    cols = ['#1a3a6b','#c0392b','#2ecc71','#3498db','#e74c3c','#9b59b6'];
  } else {
    count = 80;
    cols = ['#1a3a6b','#c0392b','#7f8c8d','#95a5a6','#bdc3c7'];
  }
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      c: cols[~~(Math.random() * cols.length)],
      s: Math.random() * 5 + 3,
      d: Math.random() * 5 + 2,
      r: Math.random() * Math.PI * 2
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r += 0.05);
    ctx.fillStyle = p.c; ctx.fillRect(-p.s/2, -p.s/2, p.s, p.s);
    ctx.restore();
    p.y += p.d; p.x += Math.sin(p.r) * 1.5;
    if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
  });
  animId = requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
  if (animId) cancelAnimationFrame(animId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  animId = null;
}

/* ── BOOT ────────────────────────────────────────────── */
app.init();

/* ── CLOSED-TO-STUDENTS LOCK ────────────────────────── */
(function applyReviewLock() {
  if (REVIEW_OPEN || SHARE_MODE) return;
  const btn = document.querySelector('.lgs-btn');
  if (!btn) return;
  btn.disabled = true;
  btn.classList.add('locked');
  btn.textContent = '🔒 Not Open Yet';
  const note = document.createElement('p');
  note.className = 'locked-note';
  note.textContent = "Mr. O will let you know when Inference Practice is ready!";
  btn.insertAdjacentElement('afterend', note);
})();

/* ── A KEY ON A HIDDEN BUTTON DOES NOTHING (10/27/2026) ──
   After a tap the keyboard stays on that button, even once it is hidden, so Enter or Space pressed it
   again: a right answer counted twice (13 of 12 on Vocab Practice) and Next skipped a question.
   Enter and Space on a button that is hidden or turned off are now ignored. */
['keydown', 'keyup'].forEach(type => document.addEventListener(type, e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const el = document.activeElement;
  if (el && el.tagName === 'BUTTON' && (el.disabled || !el.getClientRects().length)) {
    e.preventDefault();
    e.stopPropagation();
  }
}, true));
