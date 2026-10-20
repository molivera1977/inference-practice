/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE — TWOPART: Part A and Part B (the SBAC "EBSR" question)
   The class's hardest question type on the SBAC FIABs. Every passage has two
   Part A + Part B questions, so 2 passages × 2 questions × 2 parts = 8 scored
   per level. The lesson cards teach the process: Part A asks for an
   inference, Part B asks for the sentence that proves it, answer Part A first
   and then go back to the passage for the proof, and Part B is your R.A.D.
   Detail. Every item's model is a R.A.D. answer whose D is the Part B sentence.
   Slot plan (tools/CONTENT-SPEC.md):
     P1: T01 Character inference · T02 Feeling change
     P2: T03 Drawing conclusions · T04 Theme ("It is important to…")
   All stories are original. Part B wrong sentences are real sentences of the
   passage that do not prove the Part A answer; each has a note that names
   its paragraph.
═══════════════════════════════════════════════════════ */
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.twopart = {
  cards: [
    { title: 'Part A and Part B', blocks: [
      { p: 'Some test questions have two parts. Both parts are about the same passage.' },
      { term: 'Part A', means: 'the first part. Part A asks you to infer. It may ask for an inference, a conclusion, or a lesson.', ex: 'What can you infer about Nia?' },
      { term: 'Part B', means: 'the second part. Part B asks for the sentence that proves your Part A answer.', ex: 'Which sentence from the passage BEST supports the answer in Part A?' }
    ]},
    { title: 'Answer first. Then find the proof.', blocks: [
      { rows: [
        ['1', 'Read the passage.'],
        ['2', 'Read Part A. Use the clues to pick your answer.'],
        ['3', 'Go back to the passage. Find the sentence that proves your Part A answer.'],
        ['4', 'Read Part B. Pick that sentence.']
      ]},
      { term: 'BEST supports', means: 'proves the answer the most.', ex: 'Many sentences are true. Only one BEST supports your answer.' }
    ]},
    { title: 'Try it', blocks: [
      { quote: 'Nia saw a boy drop his books. Nia stopped and helped him pick up every book. Then the bell rang.' },
      { ask: 'Part A: What can you infer about Nia?' },
      { good: 'Nia is helpful.', why: 'Nia helped the boy.' },
      { ask: 'Part B: Which sentence from the passage BEST supports the answer in Part A?' },
      { good: 'Nia stopped and helped him pick up every book.', why: 'It shows Nia helping. It proves Part A.' },
      { bad: 'Nia saw a boy drop his books.', why: 'True, and it is about Nia. But seeing is not helping. It does not prove Part A.' }
    ]},
    { title: 'Part B is your Detail', blocks: [
      { p: 'You already know R.A.D.: Restate, Answer, Detail. Part A and Part B make a R.A.D. answer.' },
      { rows: [
        ['R', 'Restate the Part A question.'],
        ['A', 'Your Part A answer is your Answer.'],
        ['D', 'Your Part B sentence is your Detail.']
      ]},
      { rad: { R: 'I can infer that Nia is', A: 'helpful.', D: 'Nia stopped and helped him pick up every book.' } },
      { p: 'The Detail proves the Answer. So Part B must prove Part A.' }
    ]}
  ],

  levels: {

    /* ═══ LEVEL 1 · FK 2.0 ═══════════════════════════════ */
    1: [
      { title: 'The Blue Wallet on the Bus', genre: 'story',
        paragraphs: [
          'Gus rode the city bus home with his dad. On the seat next to him, Gus found a blue wallet. Inside the wallet were ten dollars and a library card.',
          'Gus really wanted a new toy truck. The truck at the store cost ten dollars. Gus looked at the money for a long time.',
          'Gus got up and gave the wallet to the bus driver.',
          'At the next stop, a woman ran onto the bus. She looked under every seat. The driver gave her the wallet, and she thanked Gus.',
          'Gus went back to his seat next to Dad. Gus sat up tall and smiled all the way home.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Gus?',
              choices: ['Gus is honest.', 'Gus keeps things that are not his.', 'Gus is afraid of the bus driver.', 'Gus knows the woman from the library.'],
              kinds: [null, 'opposite', 'noclue', 'noclue'],
              notes: [null, 'This says Gus keeps the wallet. The clues show the opposite.', null, 'The wallet had a library card. But no clue says Gus knows the woman.'],
              why: 'Paragraph 2 says Gus wanted a truck that cost ten dollars. Paragraph 3 says Gus gave the wallet to the driver. He did not keep the money. So Gus is honest.' },
            b: { choices: ['Gus got up and gave the wallet to the bus driver.', 'Gus really wanted a new toy truck.', 'Inside the wallet were ten dollars and a library card.', 'Gus rode the city bus home with his dad.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 says Gus wanted a truck. That does not show he is honest.', 'Paragraph 1 tells what was in the wallet. It does not tell what Gus did.', 'Paragraph 1 tells where Gus was. It does not show he is honest.'],
              why: 'Paragraph 3 says Gus gave the wallet to the driver. That is what an honest kid does. It proves Part A.' },
            model: { R: 'I can infer that Gus is', A: 'honest.', D: 'Gus got up and gave the wallet to the bus driver.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Gus feel at the end of the passage?',
              choices: ['Gus feels proud of what he did.', 'Gus feels sad that he has no truck.', 'Gus feels worried that he lost his wallet.', 'Gus feels unsure about what to do.'],
              kinds: [null, 'opposite', 'wrongwho', 'wrongtime'],
              notes: [null, 'This says Gus is sad about the truck. The clues at the end show the opposite.', 'The woman lost the wallet, not Gus.', 'Gus was unsure in paragraph 2. That was not the end.'],
              why: 'Paragraph 5 says Gus sat up tall and smiled. Kids sit up tall when they feel good about what they did. So Gus feels proud.' },
            b: { choices: ['Gus sat up tall and smiled all the way home.', 'Gus looked at the money for a long time.', 'She looked under every seat.', 'The truck at the store cost ten dollars.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 is before Gus gave the wallet back. It is not the end.', 'Paragraph 4 is about the woman, not Gus.', 'Paragraph 2 tells the cost of the truck. It does not show a feeling.'],
              why: 'Paragraph 5 is the end. Gus sat up tall and smiled. It proves Gus feels proud at the end.' },
            model: { R: 'At the end of the passage, Gus feels', A: 'proud of what he did.', D: 'Gus sat up tall and smiled all the way home.' } }
        ] },

      { title: 'Ten Math Problems', genre: 'story',
        paragraphs: [
          'Kim had ten math problems for homework. Mom said Kim could go out to play when she was done. Her friends were already playing tag in the yard.',
          'Kim kept looking out the window at her friends. She wrote her answers as fast as she could. She did not check her work. Then Kim grabbed her jacket and ran to the door.',
          'Mom looked over the paper and shook her head. Five of the answers were wrong. Kim had to sit back down and fix every one.',
          'This time, Kim went slowly, and all ten answers were right. The next day, Kim did her homework slowly from the start.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Kim?',
              choices: ['Kim wants to play with her friends.', 'Kim does not like to play tag.', 'Kim wants to stay inside all day.', 'Kim is mad at her friends in the yard.'],
              kinds: [null, 'opposite', 'opposite', 'noclue'],
              notes: [null, 'This says Kim does not like tag. The clues show the opposite.', 'This says Kim wants to stay inside. The clues show the opposite.', null],
              why: 'Paragraph 2 says Kim kept looking out at her friends. It says she grabbed her jacket and ran to the door. Kids do that when they want to go play. So Kim wants to play with her friends.' },
            b: { choices: ['Kim kept looking out the window at her friends.', 'Kim had ten math problems for homework.', 'Mom looked over the paper and shook her head.', 'Mom said Kim could go out to play when she was done.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells about the homework. It does not show what Kim wants.', 'Paragraph 3 is about Mom, not Kim.', 'Paragraph 1 tells what Mom said. It does not show what Kim wants.'],
              why: 'Paragraph 2 says Kim kept looking out the window at her friends. She wanted to be out there with them. It proves Part A.' },
            model: { R: 'I can conclude that Kim', A: 'wants to play with her friends.', D: 'Kim kept looking out the window at her friends.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to take your time.', 'It is important to do your work as fast as you can.', 'It is important to play tag with your friends.', 'It is important to look out the window.'],
              kinds: [null, 'opposite', 'onedetail', 'onedetail'],
              notes: [null, 'This says to work as fast as you can. The clues show the opposite.', 'Paragraph 1 says Kim’s friends played tag. That is a detail, not a lesson.', 'Paragraph 2 says Kim looked out the window. That is a detail, not a lesson.'],
              why: 'Paragraph 2 says Kim went fast and did not check her work. Paragraph 3 says five answers were wrong. Paragraph 4 says she went slowly, and all ten were right. So the lesson is to take your time.' },
            b: { choices: ['This time, Kim went slowly, and all ten answers were right.', 'Her friends were already playing tag in the yard.', 'Then Kim grabbed her jacket and ran to the door.', 'Kim had ten math problems for homework.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells what Kim’s friends were doing. It is not a lesson.', 'Paragraph 2 shows Kim rushing. It does not show what going slowly did.', 'Paragraph 1 tells about the homework. It does not show the lesson.'],
              why: 'Paragraph 4 says Kim went slowly, and all ten answers were right. Taking her time worked. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to take your time.', D: 'This time, Kim went slowly, and all ten answers were right.' } }
        ] }
    ],

    /* ═══ LEVEL 2 · FK 2.5 ═══════════════════════════════ */
    2: [
      { title: 'Grandma’s Train Is Late', genre: 'story',
        paragraphs: [
          'Kai’s grandma was coming to visit on the noon train. That morning, Kai cleaned his whole room without being asked. Kai also made Grandma a card with a big red heart on the front.',
          'Snow fell hard all morning. At the station, a sign said the train would be one hour late. Kai sat on a bench and bounced his knee up and down. Every few minutes, he asked his mother what time it was.',
          'At last, a long silver train pulled into the station. Travelers with heavy bags stepped off. Kai stood on his tiptoes and looked at every face.',
          'Then Kai noticed a purple hat in the crowd. Kai let out a big breath and ran to Grandma. He hugged her so tight that her hat fell off.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Kai?',
              choices: ['Kai loves his grandma very much.', 'Kai wishes Grandma would stay home.', 'Kai is the best artist in his class.', 'Kai wants to ride on the silver train.'],
              kinds: [null, 'opposite', 'toofar', 'noclue'],
              notes: [null, 'This says Kai does not want Grandma to come. The clues show the opposite.', 'No clue tells about the other kids in Kai’s class. The clues do not prove he is the best artist.', null],
              why: 'Paragraph 1 says Kai cleaned his room and made Grandma a card. Paragraph 4 says Kai hugged her tight. We do these things for people we love. So Kai loves his grandma.' },
            b: { choices: ['Kai also made Grandma a card with a big red heart on the front.', 'Snow fell hard all morning.', 'At the station, a sign said the train would be one hour late.', 'Travelers with heavy bags stepped off.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells about the snow. It does not show how Kai feels about Grandma.', 'Paragraph 2 tells that the train was late. It does not show love.', 'Paragraph 3 is about other people, not Kai.'],
              why: 'Paragraph 1 says Kai made Grandma a card with a big red heart. A heart is a sign of love. It proves Part A.' },
            model: { R: 'I can infer that Kai', A: 'loves his grandma very much.', D: 'Kai also made Grandma a card with a big red heart on the front.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Kai feel at the end of the passage?',
              choices: ['Kai feels glad that Grandma is finally there.', 'Kai feels worried that the train is late.', 'Kai feels upset that Grandma’s hat fell off.', 'Kai feels afraid of the crowd at the station.'],
              kinds: [null, 'wrongtime', 'noclue', 'noclue'],
              notes: [null, 'Kai was worried in paragraph 2, while he waited. That was not the end.', 'The hat fell off when Kai hugged Grandma. No clue shows Kai was upset.', null],
              why: 'Paragraph 4 says Kai let out a big breath and ran to Grandma. A big breath means the worry is over. Running to her shows he is happy. So Kai feels glad.' },
            b: { choices: ['Kai let out a big breath and ran to Grandma.', 'Kai sat on a bench and bounced his knee up and down.', 'Kai stood on his tiptoes and looked at every face.', 'At last, a long silver train pulled into the station.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows Kai while he waited. That is not the end.', 'Paragraph 3 shows Kai still looking. He has not found Grandma yet.', 'Paragraph 3 tells about the train. It does not show how Kai feels.'],
              why: 'Paragraph 4 is the end. Kai let out a big breath and ran to Grandma. It proves Kai feels glad at the end.' },
            model: { R: 'At the end of the passage, Kai feels', A: 'glad that Grandma is finally there.', D: 'Kai let out a big breath and ran to Grandma.' } }
        ] },

      { title: 'June and the Red Kite', genre: 'story',
        paragraphs: [
          'June had a shiny new red kite with a long tail. She ran across the park as fast as she could, but the kite just bumped along the grass. June tried again and again until her legs were tired.',
          'Her neighbor Hal was sitting on a bench nearby. Hal wore an old cap with tiny kites printed all over it. He watched June closely and smiled.',
          'At last, June walked over to the bench and asked Hal for help. Hal stood up and held one finger in the air to feel the wind.',
          '“Stand with your back to the wind,” Hal told her. “Then let the string out slowly.” June did exactly what Hal said, and in a few seconds the red kite climbed high into the sky. June laughed and waved at Hal with her free hand.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Hal?',
              choices: ['Hal knows a lot about flying kites.', 'Hal does not like kites at all.', 'Hal wants June to go home and leave the park.', 'Hal is too tired to help June.'],
              kinds: [null, 'opposite', 'noclue', 'opposite'],
              notes: [null, 'Hal wears a cap with kites on it. The clues show the opposite.', null, 'This says Hal is too tired. But paragraph 3 says Hal stood up. The clues show the opposite.'],
              why: 'Paragraph 2 says Hal wore a cap with kites on it. Paragraph 3 says Hal held up a finger to feel the wind. People who fly kites check the wind. So Hal knows a lot about kites.' },
            b: { choices: ['“Stand with your back to the wind,” Hal told her.', 'June had a shiny new red kite with a long tail.', 'June tried again and again until her legs were tired.', 'June laughed and waved at Hal with her free hand.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 is about June’s kite. It does not tell about Hal.', 'Paragraph 1 is about June trying. It does not tell what Hal knows.', 'Paragraph 4 shows how June feels. It does not show what Hal knows.'],
              why: 'Paragraph 4 says Hal told June to stand with her back to the wind. That is a kite trick. Only someone who knows kites would say it. It proves Part A.' },
            model: { R: 'I can conclude that Hal', A: 'knows a lot about flying kites.', D: '“Stand with your back to the wind,” Hal told her.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to ask for help when you need it.', 'It is important to run as fast as you can.', 'It is important to keep doing things the same way.', 'It is important to sit on a bench and watch others.'],
              kinds: [null, 'opposite', 'opposite', 'wrongwho'],
              notes: [null, 'Paragraph 1 says June ran fast, but the kite did not fly. The clues show the opposite.', 'June tried the same way again and again. It did not work.', 'Hal sat on the bench. That is not what June learns.'],
              why: 'Paragraph 1 says June tried and tried, but the kite did not fly. Paragraph 3 says June asked Hal for help. Then the kite flew. So the lesson is to ask for help.' },
            b: { choices: ['June did exactly what Hal said, and in a few seconds the red kite climbed high into the sky.', 'She ran across the park as fast as she could, but the kite just bumped along the grass.', 'Hal wore an old cap with tiny kites printed all over it.', 'Her neighbor Hal was sitting on a bench nearby.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 shows what did not work. It does not show what helped.', 'Paragraph 2 tells about Hal’s cap. It is not a lesson.', 'Paragraph 2 tells where Hal sat. It is not a lesson.'],
              why: 'Paragraph 4 says June did what Hal said, and the kite flew. Asking for help worked. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to ask for help when you need it.', D: 'June did exactly what Hal said, and in a few seconds the red kite climbed high into the sky.' } }
        ] }
    ],

    /* ═══ LEVEL 3 · FK 3.0 ═══════════════════════════════ */
    3: [
      { title: 'The Dragon in the Notebook', genre: 'story',
        paragraphs: [
          'On his first day at his new school, Dev sat by himself at the end of a long lunch table. He kept his eyes on his tray and ate his sandwich in tiny bites. When the other kids laughed, he did not look up.',
          'After lunch, Dev opened his notebook and began to draw. He drew a green dragon with wide wings and sharp silver claws. Every scale on its back was shaded in with care.',
          'A boy named Rafi leaned over to look. Rafi said the dragon looked like it could fly right off the page. Then Rafi called two more kids over to see it.',
          'The next day, Dev did not sit at the end of the table. Rafi saved him a seat in the middle. Three kids asked Dev to draw dragons in their notebooks, too. Dev laughed and talked with the other kids until the bell rang.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Dev?',
              choices: ['Dev is good at drawing.', 'Dev does not like dragons.', 'Dev wants to sit alone every day.', 'Dev was friends with Rafi before.'],
              kinds: [null, 'opposite', 'opposite', 'opposite'],
              notes: [null, 'Dev drew a dragon with great care. The clues show the opposite.', 'Paragraph 4 says Dev did not sit at the end. Rafi saved him a seat in the middle. The clues show the opposite.', 'It was Dev’s first day, and he sat by himself. The clues show the opposite.'],
              why: 'Paragraph 3 says Rafi thought the dragon could fly off the page. Paragraph 4 says three kids asked Dev to draw for them. Kids ask a good artist to draw. So Dev is good at drawing.' },
            b: { choices: ['Rafi said the dragon looked like it could fly right off the page.', 'He kept his eyes on his tray and ate his sandwich in tiny bites.', 'Rafi saved him a seat in the middle.', 'On his first day at his new school, Dev sat by himself at the end of a long lunch table.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 shows Dev was quiet. It does not show he can draw.', 'Paragraph 4 shows Rafi is kind. It does not show Dev can draw.', 'Paragraph 1 tells where Dev sat. It does not show he can draw.'],
              why: 'Paragraph 3 says the dragon looked like it could fly off the page. It must look real. That shows Dev draws well. It proves Part A.' },
            model: { R: 'I can infer that Dev is', A: 'good at drawing.', D: 'Rafi said the dragon looked like it could fly right off the page.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Dev feel at the end of the passage?',
              choices: ['Dev feels happy to have new friends.', 'Dev feels lonely at his new school.', 'Dev feels upset that kids want his dragons.', 'Dev feels nervous about drawing in class.'],
              kinds: [null, 'wrongtime', 'opposite', 'noclue'],
              notes: [null, 'Dev was lonely in paragraph 1. That was the start, not the end.', 'This says Dev is upset. The clues at the end show the opposite.', null],
              why: 'Paragraph 4 says Rafi saved Dev a seat in the middle. It says Dev laughed and talked with the kids. Kids do that with friends. So Dev feels happy to have new friends.' },
            b: { choices: ['Dev laughed and talked with the other kids until the bell rang.', 'When the other kids laughed, he did not look up.', 'He drew a green dragon with wide wings and sharp silver claws.', 'Then Rafi called two more kids over to see it.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 shows Dev at the start. It does not show the end.', 'Paragraph 2 tells about the dragon. It does not show a feeling.', 'Paragraph 3 tells what Rafi did, not how Dev feels.'],
              why: 'Paragraph 4 is the end. Dev laughed and talked with the kids. It proves Dev feels happy at the end.' },
            model: { R: 'At the end of the passage, Dev feels', A: 'happy to have new friends.', D: 'Dev laughed and talked with the other kids until the bell rang.' } }
        ] },

      { title: 'The Snapped Headphones', genre: 'story',
        paragraphs: [
          'Lin’s big sister, Grace, had a pair of purple headphones. Grace always said, “Please do not touch my headphones.” One afternoon, while Grace was at soccer practice, Lin tried them on to hear just one song.',
          'Lin danced around the bedroom with the music on loud. Then the cord caught on the bedpost, and one side of the headphones snapped off. Lin quickly pushed the headphones under her bed.',
          'At dinner, Lin pushed her rice around her plate and did not eat a bite. When Grace asked her to pass the salt, Lin would not look at her. That night, Lin lay awake for a long time.',
          'The next morning, Lin held out the broken headphones. “I broke them,” she said. “I am really sorry.” Grace was quiet for a moment. Then Grace gave Lin a hug and said they could glue the headphones together after school. For the first time since the day before, Lin smiled.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Lin?',
              choices: ['Lin knows she did something wrong.', 'Lin does not care about the headphones.', 'Lin wants to buy her own headphones.', 'Lin is sick and needs to see a doctor.'],
              kinds: [null, 'opposite', 'noclue', 'toofar'],
              notes: [null, 'This says Lin does not care. The clues show the opposite.', null, 'Lin did not eat or sleep. But the clues show she was upset, not sick.'],
              why: 'Paragraph 2 says Lin hid the broken headphones. Paragraph 3 says she would not look at Grace. People hide things when they know they did wrong. So Lin knows she did something wrong.' },
            b: { choices: ['Lin quickly pushed the headphones under her bed.', 'Lin danced around the bedroom with the music on loud.', 'Grace was quiet for a moment.', 'Lin’s big sister, Grace, had a pair of purple headphones.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows Lin having fun before the headphones broke.', 'Paragraph 4 is about Grace, not Lin.', 'Paragraph 1 tells whose headphones they were. It does not show what Lin knows.'],
              why: 'Paragraph 2 says Lin hid the headphones under her bed. She hid them so Grace would not see. It proves Part A.' },
            model: { R: 'I can conclude that Lin', A: 'knows she did something wrong.', D: 'Lin quickly pushed the headphones under her bed.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to tell the truth.', 'It is important to hide your mistakes.', 'It is important to play soccer after school.', 'It is important to dance when you hear music.'],
              kinds: [null, 'opposite', 'noclue', 'onedetail'],
              notes: [null, 'Hiding the headphones made Lin feel awful. The clues show the opposite.', null, 'Paragraph 2 says Lin danced. That is a detail, not a lesson.'],
              why: 'Paragraph 3 says Lin did not eat, and she lay awake. Hiding the truth made her feel bad. Paragraph 4 says she told Grace, and Grace hugged her. Then Lin smiled. So the lesson is to tell the truth.' },
            b: { choices: ['Then Grace gave Lin a hug and said they could glue the headphones together after school.', 'Lin danced around the bedroom with the music on loud.', 'Then the cord caught on the bedpost, and one side of the headphones snapped off.', 'Grace always said, “Please do not touch my headphones.”'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows Lin having fun. It is not a lesson.', 'Paragraph 2 tells how the headphones broke. It does not show what happens when you tell the truth.', 'Paragraph 1 tells Grace’s rule. It does not show the lesson.'],
              why: 'Paragraph 4 says Lin told the truth, and Grace hugged her. Telling the truth made things better. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to tell the truth.', D: 'Then Grace gave Lin a hug and said they could glue the headphones together after school.' } }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 ═══════════════════════════════ */
    4: [
      { title: 'Ten Seconds Left', genre: 'story',
        paragraphs: [
          'The night before the big soccer game, Mateo could hardly sleep. He set out his blue jersey, his shin guards, and his lucky green socks. In the morning, Mateo was dressed and waiting by the door before anyone else was awake.',
          'The game was close the whole time. Mateo was the goalie, and he blocked shot after shot. With ten seconds left, the score was tied. The crowd was on its feet.',
          'Then a tall player on the other team kicked the ball hard toward the corner of the net. Mateo dove for it, but the ball slid past his fingertips. The whistle blew. The other team cheered and jumped on each other.',
          'Mateo stood up slowly and wiped the mud off his knees. Then Mateo walked across the field to the other team’s goalie and said, “Nice game.” He shook hands with every player on the other team, too.',
          'On the ride home, Mateo leaned his head against the car window and did not say a word.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Mateo?',
              choices: ['Mateo is kind to others, even after he loses.', 'Mateo does not care much about soccer.', 'Mateo is the best player on his team.', 'Mateo thinks the other team did not play fair.'],
              kinds: [null, 'opposite', 'toofar', 'opposite'],
              notes: [null, 'Mateo could hardly sleep before the game. The clues show the opposite.', 'Mateo blocked many shots. That does not prove he is the best player.', 'This says Mateo thinks the game was not fair. The clues show the opposite.'],
              why: 'Paragraph 3 says the other team cheered at the end, so they won. Paragraph 4 says Mateo told their goalie “Nice game.” He shook every player’s hand. So Mateo is kind, even after he loses.' },
            b: { choices: ['Then Mateo walked across the field to the other team’s goalie and said, “Nice game.”', 'Mateo was the goalie, and he blocked shot after shot.', 'He set out his blue jersey, his shin guards, and his lucky green socks.', 'The game was close the whole time.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows Mateo plays well. It does not show he is kind.', 'Paragraph 1 tells what Mateo got ready. It does not show he is kind.', 'Paragraph 2 tells about the game, not about Mateo.'],
              why: 'Paragraph 4 says Mateo said “Nice game” to the goalie who beat him. That is kind, even when you lose. It proves Part A.' },
            model: { R: 'I can infer that Mateo is', A: 'kind to others, even after he loses.', D: 'Then Mateo walked across the field to the other team’s goalie and said, “Nice game.”' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Mateo feel at the end of the passage?',
              choices: ['Mateo feels disappointed that his team lost.', 'Mateo feels excited about the big game.', 'Mateo feels proud that his team won the game.', 'Mateo feels angry at the other team’s goalie.'],
              kinds: [null, 'wrongtime', 'opposite', 'opposite'],
              notes: [null, 'Mateo was excited in paragraph 1. That was the start, not the end.', 'The ball slid past Mateo, and the other team cheered. Mateo’s team lost.', 'Mateo told the goalie “Nice game.” The clues show the opposite.'],
              why: 'Paragraph 3 says the ball slid past Mateo, and the other team cheered. So Mateo’s team lost. Paragraph 5 says Mateo did not say a word on the ride home. So Mateo feels disappointed.' },
            b: { choices: ['On the ride home, Mateo leaned his head against the car window and did not say a word.', 'In the morning, Mateo was dressed and waiting by the door before anyone else was awake.', 'The other team cheered and jumped on each other.', 'With ten seconds left, the score was tied.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 shows Mateo at the start. It is not the end.', 'Paragraph 3 shows how the other team feels, not Mateo.', 'Paragraph 2 tells about the game. It does not show Mateo’s feeling at the end.'],
              why: 'Paragraph 5 is the end. Mateo leaned on the window and did not say a word. Kids get quiet when they feel let down. It proves Part A.' },
            model: { R: 'At the end of the passage, Mateo feels', A: 'disappointed that his team lost.', D: 'On the ride home, Mateo leaned his head against the car window and did not say a word.' } }
        ] },

      { title: 'The Hard Part of the Song', genre: 'story',
        paragraphs: [
          'At the spring concert last year, Ana played a song on her violin. In the middle of the song, she hit three wrong notes in a row. Some kids in the front row giggled, and Ana’s cheeks turned bright pink.',
          'This year, Ana’s teacher asked her to play a song by herself again. For a long moment, Ana did not answer. Ana stared at the floor and twisted the end of her braid. Then she took a deep breath and nodded.',
          'Every day after school, Ana’s little brother heard the same hard part of the song coming from her room. Some days he heard it twenty times before dinner. Ana’s fingers grew sore, so she wrapped tape around two of them.',
          'On the night of the concert, Ana walked onto the stage and lifted her violin. This time, Ana played the hard part without missing a single note. When the song ended, the whole room clapped, and Ana took a long, slow bow.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Ana?',
              choices: ['Ana was afraid she would make a mistake again.', 'Ana did not want to play the violin ever again.', 'Ana thought the kids were laughing at someone else.', 'Ana forgot how to play the song.'],
              kinds: [null, 'toofar', 'opposite', 'noclue'],
              notes: [null, 'Ana was scared, but she nodded yes. The clues do not prove this.', 'Paragraph 1 says Ana’s cheeks turned pink when the kids giggled. She knew they were laughing at her.', 'This says Ana forgot how to play the song. No clue in the passage shows that.'],
              why: 'Paragraph 1 says kids giggled when Ana made mistakes. Paragraph 2 says Ana stared at the floor when she was asked to play again. So Ana was afraid of making a mistake again.' },
            b: { choices: ['Ana stared at the floor and twisted the end of her braid.', 'At the spring concert last year, Ana played a song on her violin.', 'Ana’s fingers grew sore, so she wrapped tape around two of them.', 'When the song ended, the whole room clapped, and Ana took a long, slow bow.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells what Ana played. It does not show she was afraid.', 'Paragraph 3 shows how much Ana practiced. It does not show she was afraid.', 'Paragraph 4 tells what happened when the song ended. It does not show she was afraid.'],
              why: 'Paragraph 2 says Ana stared at the floor and twisted her braid. Kids do that when they are scared. It proves Part A.' },
            model: { R: 'I can conclude that Ana', A: 'was afraid she would make a mistake again.', D: 'Ana stared at the floor and twisted the end of her braid.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to keep trying after a mistake.', 'It is important to play only easy songs.', 'It is important to laugh when others make mistakes.', 'It is important to wrap tape on sore fingers.'],
              kinds: [null, 'opposite', 'opposite', 'onedetail'],
              notes: [null, 'This says to play only easy songs. The clues show the opposite.', 'The kids who giggled made Ana feel bad. That is not the lesson.', 'Paragraph 3 says Ana taped her fingers. That is a detail, not a lesson.'],
              why: 'Paragraph 1 says Ana made mistakes. Paragraph 3 shows she played the hard part every day. Paragraph 4 says she did not miss a note. So the lesson is to keep trying.' },
            b: { choices: ['This time, Ana played the hard part without missing a single note.', 'Some kids in the front row giggled, and Ana’s cheeks turned bright pink.', 'This year, Ana’s teacher asked her to play a song by herself again.', 'Ana stared at the floor and twisted the end of her braid.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 shows the mistake. It does not show what trying again did.', 'Paragraph 2 tells what the teacher asked. It is not a lesson.', 'Paragraph 2 shows Ana was scared. It does not show the lesson.'],
              why: 'Paragraph 4 says Ana played the hard part without a mistake. Ana kept trying, and it worked. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to keep trying after a mistake.', D: 'This time, Ana played the hard part without missing a single note.' } }
        ] }
    ],

    /* ═══ LEVEL 5 · FK 4.0 ═══════════════════════════════ */
    5: [
      { title: 'Free Water for Dogs', genre: 'story',
        paragraphs: [
          'Tomas and his friend Wade set up a lemonade stand on the corner of Maple Street. They hoped to earn enough money to buy a brand-new soccer ball. But the day was gray and chilly, and hardly anyone stopped. By noon, the boys had sold only two cups.',
          'Wade slumped in his folding chair and grumbled that they should pack up and go home. Tomas did not answer, because he was busy watching the people who walked past the stand. Almost every person was walking a dog.',
          'Tomas raced inside his house and returned with a big metal bowl and a jug of cold water. He filled the bowl and placed it beside the table. Then Tomas made a new sign that said, “Free Water for Dogs!”',
          'Soon, a woman with a spotted dog stopped so her dog could get a drink. While she waited, she bought a cup of lemonade. Next, a man with two little poodles stopped and bought two cups. By three o’clock, a long line of dogs and their owners stretched down the sidewalk.',
          'At the end of the day, the boys emptied their money jar and counted every coin. Tomas grinned and gave Wade a high five. Then Tomas tucked the jar under his arm and ran all the way to the sports store.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Tomas?',
              choices: ['Tomas is good at solving problems.', 'Tomas gives up when things get hard.', 'Tomas does not like dogs at all.', 'Tomas has a dog of his own at home.'],
              kinds: [null, 'wrongwho', 'opposite', 'noclue'],
              notes: [null, 'Wade wanted to give up, not Tomas.', 'This says Tomas does not like dogs. The clues show the opposite.', null],
              why: 'Paragraph 1 says hardly anyone stopped. Paragraph 3 says Tomas set out water for dogs. Paragraph 4 says dog owners stopped and bought lemonade. So Tomas is good at solving problems.' },
            b: { choices: ['Then Tomas made a new sign that said, “Free Water for Dogs!”', 'Wade slumped in his folding chair and grumbled that they should pack up and go home.', 'They hoped to earn enough money to buy a brand-new soccer ball.', 'But the day was gray and chilly, and hardly anyone stopped.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 is about Wade, not Tomas.', 'Paragraph 1 tells what the boys wanted. It does not show Tomas solving a problem.', 'Paragraph 1 tells the problem. It does not show how Tomas fixed it.'],
              why: 'Paragraph 3 says Tomas made a sign for free dog water. That was his plan to get people to stop. It proves Part A.' },
            model: { R: 'I can infer that Tomas is', A: 'good at solving problems.', D: 'Then Tomas made a new sign that said, “Free Water for Dogs!”' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Tomas feel at the end of the passage?',
              choices: ['Tomas feels excited about how the day ended.', 'Tomas feels worried that no one will stop.', 'Tomas feels ready to pack up and go home.', 'Tomas feels upset that the dogs drank the water.'],
              kinds: [null, 'wrongtime', 'wrongwho', 'noclue'],
              notes: [null, 'In paragraph 1, hardly anyone stopped. That was the start, not the end.', 'Wade wanted to go home in paragraph 2. That is someone else.', 'The water was for the dogs. No clue shows Tomas was upset.'],
              why: 'Paragraph 5 says Tomas grinned and gave Wade a high five. Then he ran to the sports store. People do that when they are excited. So Tomas feels excited.' },
            b: { choices: ['Tomas grinned and gave Wade a high five.', 'By noon, the boys had sold only two cups.', 'While she waited, she bought a cup of lemonade.', 'Tomas did not answer, because he was busy watching the people who walked past the stand.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 is the start of the day, not the end.', 'Paragraph 4 is about a woman, not Tomas.', 'Paragraph 2 shows what Tomas saw. It does not show how he feels at the end.'],
              why: 'Paragraph 5 is the end. Tomas grinned and gave Wade a high five. A grin and a high five show he is excited. It proves Part A.' },
            model: { R: 'At the end of the passage, Tomas feels', A: 'excited about how the day ended.', D: 'Tomas grinned and gave Wade a high five.' } }
        ] },

      { title: 'Picking Teams at Recess', genre: 'story',
        paragraphs: [
          'Every day at recess, the fourth graders played kickball on the big field behind the school. On Monday, Jada and Felix were the captains, so they took turns choosing players for their teams. Soon, only one girl was left, a new student named Wren who had just moved to town.',
          'Wren stood by the fence with her hands stuffed in her pockets. Nobody knew if she could play, and some kids were already looking away. Felix rolled his eyes and whispered, “Not her.”',
          'Jada looked at Wren for a moment. She remembered how lonely it felt to be the new kid last year. Then Jada smiled, waved, and called out that Wren was on her team.',
          'When it was Wren’s turn to kick, she backed up three big steps. Wren ran at the ball and kicked it high over the heads of every player in the field. She raced around all four bases before anyone could throw the ball back. Later, Wren showed her teammates exactly where to stand to catch the other team’s kicks.',
          'At the end of recess, Felix asked Wren if she could be on his team tomorrow. Jada just laughed.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Wren?',
              choices: ['Wren has played kickball many times before.', 'Wren does not know how to play kickball.', 'Wren wants to be on Felix’s team instead.', 'Wren is the fastest runner in the whole school.'],
              kinds: [null, 'opposite', 'noclue', 'toofar'],
              notes: [null, 'In paragraph 2, nobody knew if Wren could play. But paragraph 4 shows the opposite.', null, 'Wren ran fast. But the clues do not prove she is the fastest in the whole school.'],
              why: 'Paragraph 4 says Wren kicked the ball over every player’s head. It says she showed her team where to stand. Kids learn these things by playing a lot. So Wren has played kickball many times.' },
            b: { choices: ['Later, Wren showed her teammates exactly where to stand to catch the other team’s kicks.', 'Wren stood by the fence with her hands stuffed in her pockets.', 'Soon, only one girl was left, a new student named Wren who had just moved to town.', 'Jada looked at Wren for a moment.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows Wren was shy. It does not show she can play.', 'Paragraph 1 says Wren was new and picked last. It does not show how well she plays.', 'Paragraph 3 is about Jada, not what Wren can do.'],
              why: 'Paragraph 4 says Wren showed her team where to stand. She knows the game well. Kids learn that by playing a lot. It proves Part A.' },
            model: { R: 'I can conclude that Wren', A: 'has played kickball many times before.', D: 'Later, Wren showed her teammates exactly where to stand to catch the other team’s kicks.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to give everyone a chance.', 'It is important to pick only kids you know.', 'It is important to kick the ball as hard as you can.', 'It is important to be the captain of the team.'],
              kinds: [null, 'opposite', 'onedetail', 'noclue'],
              notes: [null, 'Jada picked Wren, and no one knew her yet. The clues show the opposite.', 'Paragraph 4 says Wren kicked hard. That is a detail, not a lesson.', null],
              why: 'Paragraph 3 says Jada picked Wren when no one knew her. Paragraph 4 says Wren played well. Paragraph 5 says even Felix wanted her. So the lesson is to give everyone a chance.' },
            b: { choices: ['At the end of recess, Felix asked Wren if she could be on his team tomorrow.', 'Every day at recess, the fourth graders played kickball on the big field behind the school.', 'On Monday, Jada and Felix were the captains, so they took turns choosing players for their teams.', 'Felix rolled his eyes and whispered, “Not her.”'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells when the kids play. It is not a lesson.', 'Paragraph 1 tells who the captains were. It is not a lesson.', 'Paragraph 2 shows Felix did not give Wren a chance. It does not show the lesson.'],
              why: 'Paragraph 5 says Felix wanted Wren on his team. Felix did not want her at first. Once Wren got a chance, he changed his mind. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to give everyone a chance.', D: 'At the end of recess, Felix asked Wren if she could be on his team tomorrow.' } }
        ] }
    ],

    /* ═══ LEVEL 6 · FK 4.5 ═══════════════════════════════ */
    6: [
      { title: 'The Secret in the Garden Shed', genre: 'story',
        paragraphs: [
          'Grandma’s gray cat, Pepper, had not come home for two whole days. Every evening, Grandma set out a dish of food on the back step, but each morning the food was still untouched. She stood at the kitchen window for a long time, twisting a dish towel in her hands.',
          'Ravi decided to search the yard one more time. This time, instead of calling Pepper’s name, he walked slowly and studied the ground. Near the fence, Ravi spotted a trail of tiny, muddy paw prints in the soft dirt. The prints led straight to the old garden shed, where the door was open just a crack.',
          'Ravi pressed his ear against the wooden door and held his breath. From somewhere inside came a faint, high squeaking sound, like a tiny rusty hinge. He also noticed a few gray hairs caught on the rough edge of the door frame.',
          'Ravi slowly pulled the door open and waited for his eyes to get used to the dim light. Behind a stack of old flower pots, Pepper lay curled on a pile of soft rags. Pressed against her side were four tiny kittens with their eyes still closed.',
          'Ravi’s mouth dropped open. He tiptoed back across the yard as quietly as he could. Then Ravi burst through the kitchen door, grinning from ear to ear. “Grandma, you have to come see what I found in the shed,” he whispered.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Ravi?',
              choices: ['Ravi pays close attention to small details.', 'Ravi is afraid to go near the old shed.', 'Ravi does not care about Grandma’s cat.', 'Ravi knew all along where Pepper was hiding.'],
              kinds: [null, 'opposite', 'opposite', 'opposite'],
              notes: [null, 'Ravi pressed his ear to the shed door and opened it. The clues show the opposite.', 'Ravi searched the yard for Pepper. The clues show the opposite.', 'Ravi searched “one more time.” He did not know where Pepper was.'],
              why: 'Paragraph 2 says Ravi spotted tiny paw prints. Paragraph 3 says he noticed gray hairs on the door. Those are small things most people miss. So Ravi pays close attention to details.' },
            b: { choices: ['Near the fence, Ravi spotted a trail of tiny, muddy paw prints in the soft dirt.', 'Ravi decided to search the yard one more time.', 'Every evening, Grandma set out a dish of food on the back step, but each morning the food was still untouched.', 'Ravi’s mouth dropped open.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 says Ravi kept looking. It does not show he sees small things.', 'Paragraph 1 is about Grandma, not Ravi.', 'Paragraph 5 tells how Ravi’s face looked. It does not show he notices details.'],
              why: 'Paragraph 2 says Ravi spotted tiny paw prints in the dirt. Tiny prints are easy to miss. It proves Part A.' },
            model: { R: 'I can infer that Ravi', A: 'pays close attention to small details.', D: 'Near the fence, Ravi spotted a trail of tiny, muddy paw prints in the soft dirt.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Ravi feel at the end of the passage?',
              choices: ['Ravi feels thrilled about what he found.', 'Ravi feels worried that Pepper is lost for good.', 'Ravi feels afraid of the sounds in the dark shed.', 'Ravi feels angry that Pepper hid in the shed.'],
              kinds: [null, 'wrongtime', 'wrongtime', 'noclue'],
              notes: [null, 'At the start, Pepper was lost. At the end, Ravi found her.', 'Paragraph 3 is before Ravi found the kittens. It is not the end.', 'This says Ravi is angry. No clue shows that.'],
              why: 'Paragraph 5 says Ravi’s mouth dropped open. It says he burst through the door with a big grin. So Ravi feels thrilled about what he found.' },
            b: { choices: ['Then Ravi burst through the kitchen door, grinning from ear to ear.', 'She stood at the kitchen window for a long time, twisting a dish towel in her hands.', 'Ravi pressed his ear against the wooden door and held his breath.', 'Grandma’s gray cat, Pepper, had not come home for two whole days.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 shows how Grandma feels, not Ravi.', 'Paragraph 3 is before Ravi found the kittens. It is not the end.', 'Paragraph 1 is the start of the passage, not the end.'],
              why: 'Paragraph 5 is the end. Ravi burst through the door with a big grin. That shows he is thrilled. It proves Part A.' },
            model: { R: 'At the end of the passage, Ravi feels', A: 'thrilled about what he found.', D: 'Then Ravi burst through the kitchen door, grinning from ear to ear.' } }
        ] },

      { title: 'The Penny Bridge Contest', genre: 'story',
        paragraphs: [
          'On Friday, the fourth graders held a contest to see which group could build the strongest bridge out of craft sticks and glue. The bridge that held the most pennies would win a small trophy shaped like a golden hammer.',
          'As soon as the sticks were passed out, Lucia grabbed the glue bottle. “We’ll make it long and flat,” she announced. Lucia told Bea to snap the sticks and told Owen to hand her the pieces. When Owen held up a drawing he had made, Lucia was too busy gluing to look at it.',
          'Owen’s drawing showed a bridge with rows of triangles along both sides. He set the drawing on the table and quietly went back to handing out sticks.',
          'At test time, the class stacked pennies on the flat bridge one by one. At twenty pennies, the middle began to sag. At twenty-five, the bridge cracked in half, and pennies rolled across the floor. Lucia stared at the broken sticks for a long time, and then she picked up Owen’s drawing and studied it.',
          'The teacher let every group try again the next week. This time, Lucia asked Owen to show the group how to build his design. The new bridge with Owen’s triangles held three hundred pennies before it even began to bend. Lucia let Owen hold the golden hammer first.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Lucia?',
              choices: ['Lucia likes to be the one in charge.', 'Lucia is too shy to talk to her group.', 'Lucia already knew that triangles make bridges strong.', 'Lucia wants Bea to be the leader of the group.'],
              kinds: [null, 'opposite', 'opposite', 'opposite'],
              notes: [null, 'This says Lucia is shy. The clues show the opposite.', 'Lucia wanted a long, flat bridge. She did not plan any triangles. The clues show the opposite.', 'This says Lucia wants Bea to lead. The clues show the opposite.'],
              why: 'Paragraph 2 says Lucia grabbed the glue. It says she told Bea and Owen what to do. People who like to be in charge do that. So Lucia likes to be the one in charge.' },
            b: { choices: ['Lucia told Bea to snap the sticks and told Owen to hand her the pieces.', 'Owen’s drawing showed a bridge with rows of triangles along both sides.', 'At twenty pennies, the middle began to sag.', 'The teacher let every group try again the next week.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 3 is about Owen’s drawing, not Lucia.', 'Paragraph 4 tells about the bridge. It does not show Lucia in charge.', 'Paragraph 5 tells what the teacher did. It is not about Lucia.'],
              why: 'Paragraph 2 says Lucia told Bea and Owen what to do. Giving out the jobs shows she is in charge. It proves Part A.' },
            model: { R: 'I can conclude that Lucia', A: 'likes to be the one in charge.', D: 'Lucia told Bea to snap the sticks and told Owen to hand her the pieces.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to listen to other people’s ideas.', 'It is important to build bridges long and flat.', 'It is important to do every job by yourself.', 'It is important to win a trophy shaped like a hammer.'],
              kinds: [null, 'opposite', 'opposite', 'noclue'],
              notes: [null, 'The flat bridge broke at twenty-five pennies. The clues show the opposite.', 'This says to do every job alone. The clues show the opposite.', 'The trophy is a detail. It is not what Lucia learns.'],
              why: 'Paragraph 2 says Lucia did not look at Owen’s idea. Paragraph 4 says her bridge broke. Paragraph 5 says Owen’s triangles held three hundred pennies. So the lesson is to listen to other people’s ideas.' },
            b: { choices: ['The new bridge with Owen’s triangles held three hundred pennies before it even began to bend.', 'The bridge that held the most pennies would win a small trophy shaped like a golden hammer.', 'He set the drawing on the table and quietly went back to handing out sticks.', 'Lucia told Bea to snap the sticks and told Owen to hand her the pieces.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells the prize. It is not a lesson.', 'Paragraph 3 shows Owen being quiet. It does not show what listening did.', 'Paragraph 2 shows Lucia not listening yet. It does not show the lesson.'],
              why: 'Paragraph 5 says the bridge with Owen’s idea held three hundred pennies. Listening to Owen made the bridge strong. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to listen to other people’s ideas.', D: 'The new bridge with Owen’s triangles held three hundred pennies before it even began to bend.' } }
        ] }
    ]
  }
};
