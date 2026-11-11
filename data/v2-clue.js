/* Find the Clue, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-clue.js; try 2 gets these. Same question slots as version 1. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.clue = {
  2: {
    1: [
      { title: 'The Empty Bird Feeder', genre: 'story',
        paragraphs: [
          'Hana kept a bird book by the window. Every morning, she counted the birds at the feeder. One snowy night, she and Dad filled the feeder with seeds.',
          'The next morning, Hana ran to the window. The feeder was empty, and cracked seed shells were all over the deck. The lid of the feeder was pushed open. Hana called, "Dad, come and look!"',
          'Hana and Dad went out on the deck. Small tracks led across the snow from the woods. Each track looked like a tiny hand with five fingers.',
          'Dad tied the lid shut with a strong rope. Then Hana drew a track in her bird book.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows the seeds were eaten.',
            para: 2,
            answer: 'The feeder was empty, and cracked seed shells were all over the deck.',
            notes: {
              'The next morning, Hana ran to the window.': 'This tells where Hana went. It is not a clue about the seeds.',
              'The lid of the feeder was pushed open.': 'This tells about the lid. It does not show that the seeds were eaten.',
              'Hana called, "Dad, come and look!"': 'This tells what Hana said. It is not a clue about the seeds.'
            },
            why: 'Paragraph 1 says they filled the feeder at night. Paragraph 2 says the next morning it was empty, with cracked shells all over the deck. Animals crack seeds to eat them and drop the shells. So the seeds were eaten in the night.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows the animal was not a bird.',
            answer: 'Each track looked like a tiny hand with five fingers.',
            notes: {
              'Small tracks led across the snow from the woods.': 'This shows that an animal walked in the snow. It does not show what kind of animal it was.',
              'The lid of the feeder was pushed open.': 'This tells about the lid. It does not show what kind of animal came.'
            },
            why: 'Paragraph 3 says each track looked like a tiny hand with five fingers. Birds do not have feet like hands. So the animal was not a bird.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Dad wants to keep the animal out of the feeder?',
            choices: [
              'Dad tied the lid shut with a strong rope.',
              'Hana and Dad went out on the deck.',
              'One snowy night, she and Dad filled the feeder with seeds.',
              'The lid of the feeder was pushed open.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 3 tells where Hana and Dad went. It does not show Dad keeping the animal out.',
              'Paragraph 1 tells how they filled the feeder. That does not keep an animal out.',
              'Paragraph 2 tells what the animal did to the lid. It does not show what Dad did.'],
            why: 'Paragraph 4 says Dad tied the lid shut with a rope. An animal cannot get into a feeder that is tied shut. So Dad wants to keep the animal out.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'Hana likes to watch the birds.',
              'Hana is afraid of the birds at the feeder.',
              'Hana wants a pet bird to keep in her room.',
              'Dad keeps a bird book by the window.'
            ],
            kinds: [null, 'opposite', 'noclue', 'wrongwho'],
            notes: [null,
              'Paragraph 1 says Hana counts the birds every morning. People do not look at a thing every day if it scares them.',
              'Paragraph 1 does not say anything about a pet bird.',
              'Paragraph 1 says the bird book is Hana\'s, not Dad\'s.'],
            why: 'Paragraph 1 says Hana keeps a bird book by the window. It says she counts the birds every morning. People spend time on the things they like. So Hana likes to watch the birds.',
            chart: { facts: 'Hana keeps a bird book and counts the birds every morning.', know: 'People spend time on the things they like.', conclusion: 'Hana likes to watch the birds.' } }
        ] },

      { title: 'Saturday on Main Street', genre: 'story',
        paragraphs: [
          'On Saturday, Kofi and Grandma walked to Main Street. People sat in chairs on both sides of the road, and kids waved little flags. Police cars blocked each end, so no cars could drive in.',
          'Kofi sat on the curb by Grandma\'s chair. He stood up to look down the street ten times. Grandma laughed and sipped her tea. A man sold red balloons nearby.',
          'At last, a band in red hats marched down the street. Kofi put his hands over his ears, but he kept smiling.',
          'A little girl behind Kofi was too short to see. Kofi stepped back and gave the girl his spot.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Kofi is excited.',
            para: 2,
            answer: 'He stood up to look down the street ten times.',
            notes: {
              'Kofi sat on the curb by Grandma\'s chair.': 'This tells where Kofi sat. It does not show how he feels.',
              'Grandma laughed and sipped her tea.': 'This sentence is about Grandma, not Kofi.',
              'A man sold red balloons nearby.': 'This sentence is about a man with balloons. It does not show how Kofi feels.'
            },
            why: 'Paragraph 2 says Kofi stood up to look down the street ten times. People keep looking when they can hardly wait. So Kofi is excited.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Kofi is kind.',
            answer: 'Kofi stepped back and gave the girl his spot.',
            notes: {
              'A little girl behind Kofi was too short to see.': 'This tells about the girl. Look for what Kofi does.',
              'He stood up to look down the street ten times.': 'This shows Kofi waiting. It does not show him helping someone.'
            },
            why: 'Paragraph 4 says a little girl was too short to see. Kofi stepped back and gave her his spot. Helping someone like that is kind. So Kofi is kind.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that the band was very loud?',
            choices: [
              'Kofi put his hands over his ears, but he kept smiling.',
              'At last, a band in red hats marched down the street.',
              'Grandma laughed and sipped her tea.',
              'Kofi stepped back and gave the girl his spot.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'notproof'],
            notes: [null,
              'Paragraph 3 tells who came down the street. It does not tell how loud the band was.',
              'Paragraph 2 is before the band came. It does not tell about the sound.',
              'Paragraph 4 shows Kofi helping the girl. It does not tell about the sound.'],
            why: 'Paragraph 3 says Kofi put his hands over his ears. People cover their ears when a sound is very loud. So the band was very loud.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'A parade is going to come down the street.',
              'Kofi and Grandma are going shopping on Main Street.',
              'The people are waiting for a bus to pick them up.',
              'Workers are going to fix the road today.'
            ],
            kinds: [null, 'noclue', 'opposite', 'toofar'],
            notes: [null,
              'Paragraph 1 does not say anything about shopping.',
              'Paragraph 1 says no cars could drive in. So a bus could not come either.',
              'Paragraph 1 says people sat in chairs and kids waved flags. People do not do that to watch road work.'],
            why: 'Paragraph 1 says people sat in chairs on both sides of the road. Kids waved flags, and police kept the cars out. People do that when a parade is coming. So a parade is going to come down the street.',
            chart: { facts: 'People sit in chairs by the road, kids wave flags, and police keep the cars out.', know: 'People line up along a street to watch a parade.', conclusion: 'A parade is going to come down the street.' } }
        ] }
    ]
  }
};
