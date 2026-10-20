/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE — LEVELS, ACTIVITIES, SHARED WORDS
   Drawing Conclusions · Inferences · Supporting Details.
   Marcos 10/20/2026: "similar to RAD Practice" · "leveled for the wide variety
   of readers" · "Definitely mirror the IAB styling but easier reading levels
   for learning and practicing yet same concepts and questioning" · "start at
   2nd grade level, then 2.5, then 3.0, then 3.5, then 4.0" · "maybe 4.5 for the
   high achievers" · "it[']s the process that I want them used to and the
   terminology".
   So: the SBAC test's process and words (passage on the left, question on the
   right, Part A and Part B on one screen, "Which sentence from the passage BEST
   supports…", click a sentence in the passage), at six reading levels. Every
   level asks the same kinds of questions in the same words; only the passage
   gets harder. Everyone starts at Level 1 and climbs (70% opens the next level).

   This file: the levels, the activity list (teaching order), the notes said
   after a wrong choice, and the sentence splitter that both the site and
   tools/check-levels.js use. Each activity's lesson cards and passages live in
   data/act-<kind>.js (window.INF_SETS[kind]).
═══════════════════════════════════════════════════════ */

/* Reading level of the passages (Flesch-Kincaid grade). Every passage on a level
   measures within 0.3 of its target (tools/check-levels.js). */
window.INF_LEVELS = [
  { n: 1, fk: 2.0, words: [70, 110] },
  { n: 2, fk: 2.5, words: [90, 140] },
  { n: 3, fk: 3.0, words: [110, 170] },
  { n: 4, fk: 3.5, words: [140, 200] },
  { n: 5, fk: 4.0, words: [170, 240] },
  { n: 6, fk: 4.5, words: [200, 280] }
];

/* Teaching order. The letter starts every question id (C01, T03 …). */
window.INF_ACTIVITIES = [
  { kind: 'meet',       letter: 'M', icon: '🕵️', label: 'Meet Inference',              sub: 'Facts from the text + things we know' },
  { kind: 'clue',       letter: 'C', icon: '🔎', label: 'Find the Clue',               sub: 'Click the sentence that tells you' },
  { kind: 'feel',       letter: 'F', icon: '💭', label: 'How Does the Character Feel?', sub: 'Feelings, traits, and changes' },
  { kind: 'conclude',   letter: 'D', icon: '🎯', label: 'Draw a Conclusion',           sub: 'What do the clues add up to?' },
  { kind: 'prove',      letter: 'P', icon: '🧱', label: 'Prove It',                    sub: 'Which sentence BEST supports it?' },
  { kind: 'twopart',    letter: 'T', icon: '🧩', label: 'Part A and Part B',           sub: 'Answer it. Then prove it.' },
  { kind: 'nonfiction', letter: 'N', icon: '📰', label: 'Nonfiction Inferences',       sub: 'Infer from a true passage' },
  { kind: 'together',   letter: 'X', icon: '🏁', label: 'Put It Together',             sub: 'A practice test page' }
];

/* What a wrong choice did — said after the student picks it (a choice can carry
   its own note instead). Short, at a grade 2 reading level. */
window.INF_KIND_NOTES = {
  fact:       'The passage says this right out. That is a fact, not an inference.',
  noclue:     'The passage gives no clue for this.',
  toofar:     'Too far. The clues do not prove this.',
  opposite:   'The clues show the opposite.',
  notproof:   'This sentence is in the passage. But it does not prove the answer.',
  onedetail:  'This is just one detail. It is not the main idea.',
  wrongwho:   'This is about someone else in the passage.',
  notknow:    'This does not help you figure out the answer.',
  wrongtime:  'This is about a different part of the passage.'
};

/* Part B always asks the same thing, in the test's words */
window.INF_PART_B = 'Which sentence from the passage BEST supports the answer in Part A?';

/* One paragraph → its sentences, the way a click-a-sentence question splits it.
   A sentence ends at . ! ? (with a closing quote after it, if any) when the next
   word starts with a capital letter, a number or an opening quote. Mr. Mrs. Ms. Dr.
   St. never end a sentence. The site and the checker both use this, so a sentence
   the checker approves is exactly a sentence the student can click. */
window.INF_SPLIT = function (para) {
  const text = String(para).replace(/\s+/g, ' ').trim();
  const out = [];
  let start = 0;
  const re = /[.!?]["”’]?(?=\s+["“‘A-Z0-9])/g;
  let m;
  while ((m = re.exec(text))) {
    const end = m.index + m[0].length;
    const before = text.slice(start, end);
    if (/\b(?:Mr|Mrs|Ms|Dr|St)\.$/.test(before)) continue;
    out.push(before.trim());
    start = end;
  }
  const rest = text.slice(start).trim();
  if (rest) out.push(rest);
  return out;
};
