/* ═══════════════════════════════════════════════════════
   Inference Practice → Teacher Dashboard
   Rewrites the block between /* INFP:BEGIN *\/ and /* INFP:END *\/ in
   "Mr. O's Teacher Dashboard/index.html" from this site's data files, so the
   dashboard's question list always matches the site: one entry per activity
   (kind, letter, label) with every scored question as { id, skill, q }.
   Every level asks the same questions (same ids and skills), so q is the
   Level 1 wording, worded the way the site saves a miss (Part A / Part B, the
   passage title). A row's own miss text names the real question at its level.
   Usage:  node tools/dashboard-data.js          (rewrite the dashboard block)
           node tools/dashboard-data.js --print  (print the block only)
═══════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = path.resolve(__dirname, '..');
const DASH = path.resolve(SITE, '..', "Mr. O's Teacher Dashboard", 'index.html');

const box = { window: {} };
vm.createContext(box);
vm.runInContext(fs.readFileSync(path.join(SITE, 'data', 'inference.js'), 'utf8'), box);
const W = box.window;
W.INF_SETS = {};
W.INF_ACTIVITIES.forEach(a => {
  const f = path.join(SITE, 'data', `act-${a.kind}.js`);
  if (!fs.existsSync(f)) { console.error(`Missing data/act-${a.kind}.js`); process.exit(1); }
  vm.runInContext(fs.readFileSync(f, 'utf8'), box);
});

// Same wording as the site's missText()
const missText = (q, part, partAq, title) =>
  `${part ? `Part ${part}: ${q}` : q}${part === 'B' ? ` (Part A: ${partAq})` : ''} — passage “${title}”`;

const activities = W.INF_ACTIVITIES.map((a, i) => {
  const items = [];
  (W.INF_SETS[a.kind].levels[1] || []).forEach(p => (p.items || []).forEach(it => {
    if (it.type === 'ebsr') {
      const sk = Array.isArray(it.skill) ? it.skill : [it.skill, 'Supporting detail'];
      items.push({ id: it.id + '.A', skill: sk[0], q: missText(it.a.q, 'A', null, p.title) });
      items.push({ id: it.id + '.B', skill: sk[1], q: missText(W.INF_PART_B, 'B', it.a.q, p.title) });
    } else items.push({ id: it.id, skill: it.skill, q: missText(it.q, null, null, p.title) });
  }));
  return { kind: a.kind, n: i + 1, letter: a.letter, label: a.label, items };
});

const ids = activities.flatMap(a => a.items.map(q => q.id));
const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
if (dup.length) { console.error('Duplicate question ids:', dup.join(', ')); process.exit(1); }
const levels = W.INF_LEVELS.map(L => ({ n: L.n, fk: L.fk }));

const block = `/* INFP:BEGIN */\nconst INFP_LEVELS = ${JSON.stringify(levels)};\nconst INFP_ACTIVITIES = ${JSON.stringify(activities)};\n/* INFP:END */`;

if (process.argv.includes('--print')) { console.log(block); process.exit(0); }

const html = fs.readFileSync(DASH, 'utf8');
const re = /\/\* INFP:BEGIN \*\/[\s\S]*?\/\* INFP:END \*\//;
if (!re.test(html)) { console.error('No INFP:BEGIN / INFP:END markers in the dashboard. Add the Inference Practice block first.'); process.exit(1); }
fs.writeFileSync(DASH, html.replace(re, () => block));
console.log(`Dashboard updated: ${activities.length} activities, ${ids.length} questions.`);
