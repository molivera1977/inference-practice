# Inference Practice — content spec (for writing `data/act-<kind>.js`)

## Who it is for
Mr. O's Grade 4 class. Most of the class reads below grade level, and the readers range widely, from students still learning phonics to students reading at or above grade level. Two-part (Part A / Part B) questions are the hardest type for this class on the SBAC Inferences FIABs. Mr. O wants them to *learn* inference, drawing conclusions and supporting details by practicing. He was clear about two things:

- **"It's the process that I want them used to and the terminology."** Every question uses the SBAC test's words and shapes: *passage*, *infer*, *inference*, *conclusion*, *detail*, *Part A*, *Part B*, "Which sentence from the passage **BEST** supports…", "What can you infer about…", "What conclusion can be drawn about…", "Click on the sentence…". Do not invent friendlier question words. Make the passage easy, not the question.
- **Six reading levels, everyone climbs from Level 1.** The questions are the same at every level (same ids, same skill, same question shape). Only the passage gets harder.

The site wraps a learning layer around the test process. Every activity opens with lesson cards. After every answer the student sees why. After a miss they must hear why before Next. A wrong choice gets its own note.

## The levels (Flesch-Kincaid grade of each passage; `tools/check-levels.js` enforces this)

| Level | FK target (±0.3) | Words per passage |
|---|---|---|
| 1 | 2.0 | 70–110 |
| 2 | 2.5 | 90–140 |
| 3 | 3.0 | 110–170 |
| 4 | 3.5 | 140–200 |
| 5 | 4.0 | 170–240 |
| 6 | 4.5 | 200–280 |

FK uses this formula: 0.39 × words/sentence + 11.8 × syllables/word − 15.59. Very short, simple sentences measure near 0, so even Level 1 needs sentences of about 9–11 words and some two-syllable words. `node tools/fk.js "text"` measures any text, one paragraph per line. Tune a passage by joining or splitting sentences and by swapping word lengths. **Never** pad a passage with filler.

Each level gets its **own new passages**. They are not the same story rewritten, because a student who climbs from Level 1 to Level 2 must not meet the answers again. Same question slots, new story.

## File format

```js
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.<kind> = {
  cards: [ /* lesson cards — the same at every level, see "Lesson cards" */ ],
  levels: {
    1: [ PASSAGE, PASSAGE ],
    2: [ PASSAGE, PASSAGE ],
    // … 3, 4, 5, 6
  }
};
```

`PASSAGE = { title, genre: 'story' | 'nonfiction', paragraphs: ['…', '…'], items: [ITEM, …] }`

- Use 3–6 paragraphs, and number them in your head: the site shows them as 1, 2, 3…
- Titles are unique across the whole site. The checker fails a repeat.

### ITEM types

**mc** (one question, 4 choices; the RIGHT choice comes FIRST, and the site shuffles):
```js
{ id: 'D01', type: 'mc', skill: 'Drawing conclusions',
  q: 'What conclusion can be drawn about Lena?',
  choices: ['right', 'wrong', 'wrong', 'wrong'],
  kinds: [null, 'toofar', 'opposite', 'noclue'],   // or notes: [null, 'own note', …]
  why: 'Paragraph 2 says … Paragraph 4 says … So Lena …',
  para: 3,           // optional: shows paragraph 3 in a "From the passage" box (use when the question says "Read paragraph 3")
  evidence: true,    // set when every choice is a sentence from the passage — then each choice must be an EXACT sentence
  chart: { facts: 'what the passage says', know: 'what we already know', conclusion: 'the inference' }  // optional, see below
}
```

**hot** (click a sentence in the passage, like the test's hot text):
```js
{ id: 'C01', type: 'hot', skill: 'Finding clues',
  q: 'Click on the sentence in paragraph 2 that shows Lena is nervous.',
  para: 2,            // the sentences of paragraph 2 can be clicked; leave para out to make every sentence of the passage clickable
  answer: 'Her hands shook as she held the paper.',   // EXACT sentence
  notes: { 'Another exact sentence.': 'Why that one is not the best.' },   // optional
  why: 'Shaking hands are a clue. People shake when they are nervous.' }
```
- The question starts with **"Click on the sentence"**.
- The clickable area needs at least 4 sentences.
- Sentences split at `. ! ?` when the next word starts with a capital, a number or a quote mark. Mr./Mrs./Ms./Dr. do not split. So `"Wait!" Sam said.` becomes TWO sentences, `"Wait!"` and `Sam said.`, while `"Wait!" said Sam.` stays one. Inside a clickable paragraph, write dialogue so that each clickable sentence makes sense alone.

**ebsr** (Part A + Part B on one screen, exactly like the test. Each part is scored, so one ebsr counts as 2 questions):
```js
{ id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
  a: { q: 'What can you infer about Omar?', choices: ['right', 'w', 'w', 'w'], kinds: [...], why: '…' },
  b: { choices: ['EXACT right sentence', 'EXACT sentence', 'EXACT sentence', 'EXACT sentence'], kinds: [null, 'notproof', 'notproof', 'notproof'], why: '…' },
  model: { R: 'Omar is', A: 'a good friend.', D: 'EXACT right sentence' } }   // a R.A.D. answer: Restate + Answer (Part A) + Detail (Part B). D must equal b.choices[0].
```
- Part B's question is always the test's own words, which the site adds itself: "Which sentence from the passage BEST supports the answer in Part A?" Do not write `b.q`.
- The model is the class's R.A.D. answer (Restate, Answer, Detail), which the class already knows. It teaches them that **Part B is your Detail**.

### Wrong choices must teach
Every wrong choice gets a `kinds` entry or its own `notes` entry. The kinds are in `data/inference.js`:

- `fact`: the passage says this right out. It is a fact, not an inference.
- `noclue`: the passage gives no clue for this.
- `toofar`: too far; the clues do not prove this.
- `opposite`: the clues show the opposite.
- `notproof`: this sentence is in the passage, but it does not prove the answer. (Use for evidence choices.)
- `onedetail`: just one detail, not the main idea.
- `wrongwho`: about someone else in the passage.
- `notknow`: does not help you figure out the answer. (Use for "what do you already know".)
- `wrongtime`: about a different part of the passage.

A specific `note` beats a kind when it can name the paragraph.

**Two questions on one passage never share 2 or more wrong choices**, or a child answers the second by crossing out what the first ruled out.

**A note or why line never gives away a later question.** A note shows after a wrong pick, and the next question about the same passage comes right after. If a note on question 1 says the trait, the reason or the proof sentence that question 2, 3 or 4 asks for, the child just copies it. A note only says what THAT choice is about. For example: "Paragraph 3 says Ana looked at the clock. That does not show she was brave."

Write wrong choices that a struggling reader could really pick: the same length as the right one, about the same people, using words from the passage. The checker fails a level where the right answer is the longest choice in more than half the questions.

### why lines
- Grade 3 or easier. The checker measures all the why lines of a level together and wants FK ≤ 3.0.
- Name the paragraph: "Paragraph 2 says …".
- Never name a choice by position ("the first choice", "choice B"), because choices shuffle.
- Say the thinking: the clue, what we know, and so the inference.

### The chart (Mr. O's own teaching chart, in his words)
Facts From the Text + Things We Know = Conclusions We Draw. On screen it shows as:

📄 Facts From the Text + 🧠 Things We Know = 💡 Conclusion We Draw

`chart: { facts, know, conclusion }`. Each part is one short sentence. *facts* restates what the passage says, *know* is everyday knowledge a 9-year-old has, and *conclusion* is the inference. Give a chart to inference and conclusion items where the activity plan says "chart".

## Writing rules
- **Original writing only.** Do not copy or retell published stories, Wonders texts, edHelper worksheets, or anything Mr. O's class has seen. Do not reuse "The Big Snow Day", Maya/Omar/Mr. Diaz, or the snowman story.
- **No student first names.** The checker reads the first names on the class roster in script.js and fails any text that uses one. Pick a wide mix of other names and vary them across levels.
- **Stories:** kid-world realistic fiction (school, family, pets, sports, neighborhood, a city in winter), with an occasional fable or folktale. The inference must be *figure-out-able* from 2+ clues, not stated. If the passage says "Lena was nervous", there is nothing to infer, so show it instead ("Her hands shook").
- **Nonfiction:** only facts that are well known and certain (animals, plants, weather, the human body, how things work, community helpers). For a person, use either a generic job ("Some scientists count sea turtle nests at night…") or a very well-known real person with only their famous core facts. At the top of each nonfiction passage put a `// FACTS:` comment listing every fact claim, so Mr. O's reviewer can check them. When unsure, leave it out.
- **Low levels:** repeat the noun instead of "it/they" when the reference is more than a sentence away. Keep one idea per sentence. Every word should be one a 2nd–3rd grader can decode or will hear read aloud.
- **No blanks (____).**
- **Question stems:** use the activity plan's stems word for word, filling in the names. Keep "BEST" in capitals where the stem has it.
- Every level of your activity has **exactly** the slots in the plan: same ids, types and skills, in the same order.

## Lesson cards (written once per activity; the same at every level)
2–4 cards, each a title plus a few blocks. Grade 3 or easier (FK ≤ 3.0 across the cards; aim for 2.5), about 40–80 words per card. The site reads each card aloud before Next opens.

Block types:
- `{ p: 'sentence' }`
- `{ term: 'infer', means: 'to figure out something the author does not say', ex: 'an example sentence' }`: teaches a test word. **Teach each test word on a card before your questions use it.**
- `{ quote: 'a short passage or excerpt' }`: shown in a "From the passage" box.
- `{ ask: 'a test question' }`: shown as "Test question:".
- `{ chart: { facts, know, conclusion } }`
- `{ good: 'an answer', why: 'why it works' }` and `{ bad: 'an answer', why: 'why it does not' }`
- `{ rows: [['1', 'step one'], ['2', 'step two']] }`: numbered steps.
- `{ rad: { R, A, D } }`: a R.A.D. answer in the class colors.

Use the shared word meanings, so every activity says them the same way:
- **passage**: the story or article you read on a test.
- **clue**: a detail that helps you figure something out.
- **infer**: to figure out something the author does not say.
- **inference**: something you figure out from clues and what you know.
- **conclusion / draw a conclusion**: put the clues together and decide what they show.
- **detail / supporting detail**: a sentence from the passage that proves your answer.
- **BEST supports**: proves the answer the most.
- **most likely**: what will probably happen.
- **feeling** (how a character feels at one time) vs **trait** (what a character is like most of the time: kind, brave, careful).
- **theme / lesson**: what a character learns that we can learn too ("It is important to…").
- **main idea**: what the whole passage is mostly about.
- **author's point of view**: what the author thinks about the topic.

## Activity plans (8 scored questions per level; 70% = 6 of 8 opens the next level)

**meet — Meet Inference** (2 story passages). Cards teach: passage, clue, infer, inference, the chart (Facts From the Text + Things We Know = Conclusions We Draw), and inference vs fact.
- P1: M01 mc chart "What can you infer about ___?" (Making inferences) · M02 mc evidence "Which sentence from the passage BEST supports the idea that ___?" (Supporting detail) · M03 mc "Which sentence is an inference about ___, not a fact from the passage?" (Inference or fact). The right choice is an inference; the 3 wrong choices are facts the passage states, kind `fact`. · M04 mc "What do you already know that helps you infer that ___?" (Things we know). The right choice is everyday knowledge; wrong choices are true-sounding but unhelpful, kind `notknow`.
- P2: M05–M08, the same four slots in the same order.

**clue — Find the Clue** (2 story passages). Cards teach: clue, how to look back, and how to click a sentence (tap a sentence, it turns yellow, then tap "That's My Answer!").
- P1: C01 hot with para "Click on the sentence in paragraph N that shows ___." (Finding clues) · C02 hot, whole passage, "Click on the sentence in the passage that BEST shows ___." (Finding clues) · C03 mc evidence "Which sentence from the passage BEST shows that ___?" (Supporting detail) · C04 mc chart with `para`, "Read paragraph N. What can you infer from the clues in paragraph N?" (Making inferences)
- P2: C05–C08, the same.

**feel — How Does the Character Feel?** (2 story passages). Cards teach: feeling vs trait, clues to feelings (what a character says, does, looks like), and feelings that change.
- P1: F01 mc chart "How does ___ feel when ___?" (Character feelings) · F02 mc "Which word BEST describes ___?" with one-word trait choices (Character traits) · F03 mc "How do ___'s feelings change from the beginning to the end of the passage?" with choices shaped "nervous at first, then proud" (Feeling change) · F04 mc evidence "Which sentence from the passage BEST shows that ___ is ___?" (Supporting detail)
- P2: F05 mc "How are ___ and ___ different?" (Comparing characters) · F06 mc chart "How does ___ feel when ___?" (Character feelings) · F07 mc "Which word BEST describes ___?" (Character traits) · F08 mc evidence "Which sentence from the passage BEST shows that ___ is ___?" (Supporting detail)

**conclude — Draw a Conclusion** (2 story passages). Cards teach: conclusion, putting 2+ clues together, "most likely", theme/lesson ("It is important to…").
- P1: D01 mc chart "What conclusion can be drawn about ___?" (Drawing conclusions) · D02 mc "What will ___ most likely do next?" (Predicting) · D03 mc "Why does ___ ___?", where the reason is never stated (Drawing conclusions) · D04 mc "Which statement BEST tells a lesson ___ learns in the passage?" with choices "It is important to…" (Theme)
- P2: D05–D08, the same.

**prove — Prove It** (2 story passages). Cards teach: supporting detail, BEST supports, and why a sentence can be TRUE but not PROOF.
- P1: P01 mc evidence "Which sentence from the passage BEST supports the idea that ___?" (Supporting detail) · P02 mc evidence "Which detail from the passage BEST shows that ___?" (Supporting detail) · P03 hot, whole passage, "Click on the sentence in the passage that BEST supports the idea that ___." (Supporting detail) · P04 mc evidence "The passage shows that ___. Which sentence from the passage BEST supports this idea?" (Supporting detail)
- P2: P05–P08, the same.

**twopart — Part A and Part B** (2 story passages). Cards teach: what Part A and Part B are, that Part B proves Part A, answering Part A first and then going back to find the proof, and that Part B is your R.A.D. Detail.
- P1: T01 ebsr ['Character inference', 'Supporting detail'] Part A "What can you infer about ___?" · T02 ebsr ['Feeling change', 'Supporting detail'] Part A "How does ___ feel at the end of the passage?"
- P2: T03 ebsr ['Drawing conclusions', 'Supporting detail'] Part A "What conclusion can be drawn about ___?" · T04 ebsr ['Theme', 'Supporting detail'] Part A "Which statement BEST describes a lesson in the passage?" with choices "It is important to…"

**nonfiction — Nonfiction Inferences** (2 nonfiction passages). Cards teach: nonfiction = true, an author can still leave things for you to infer, main idea, and author's point of view (the words the author picks show what the author thinks).
- P1 (an animal, plant or science topic): N01 ebsr ['Main idea', 'Supporting detail'] Part A "What is the main idea of the passage?" · N02 mc evidence "Which detail from the passage BEST supports the idea that ___?" (Supporting detail) · N03 mc "What is the author's point of view about ___?" (Author's point of view)
- P2 (a person or job: scientists, helpers, inventors): N04 ebsr ['Inference about a person', 'Supporting detail'] Part A "Which inference about ___ is supported by the passage?" · N05 mc "What is the main problem in the passage?" (Problem) · N06 mc evidence "Which sentence from the passage BEST supports the idea that ___?" (Supporting detail)

**together — Put It Together** (P1 story, P2 nonfiction). Cards: a short reminder of the whole process (read the passage, read the question, look back, Part A then Part B, BEST). No new words.
- P1: X01 ebsr ['Drawing conclusions', 'Supporting detail'] Part A "What conclusion can be drawn about ___?" · X02 mc evidence "Which sentence from the passage BEST supports the idea that ___?" (Supporting detail) · X03 hot, whole passage, "Click on the sentence in the passage that BEST shows ___." (Supporting detail)
- P2: X04 ebsr ['Main idea', 'Supporting detail'] Part A "What is the main idea of the passage?" · X05 mc "What is the author's point of view about ___?" (Author's point of view) · X06 mc evidence "Which sentence from the passage BEST supports the idea that ___?" (Supporting detail)

## Done means
`node tools/check-levels.js <kind>` prints "✓ all checks passed". Then reread every passage as a 9-year-old would:
- Is each inference truly figure-out-able?
- Is exactly one choice right? Could a careful reader defend a "wrong" choice? If so, fix it.
- Is every Part B right answer the best proof, and are the other three real sentences that do not prove Part A?
