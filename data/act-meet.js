/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE — activity 1: Meet Inference (kind: meet)
   The first activity a student sees. The lesson cards carry the core test words:
   passage, clue, infer, inference, BEST supports, the chart (Facts From the Text +
   Things We Know = Conclusions We Draw), and inference vs. fact.
   Slots per passage (tools/CONTENT-SPEC.md):
     M01/M05 mc chart    "What can you infer about ___?"                              Making inferences
     M02/M06 mc evidence "Which sentence from the passage BEST supports the idea that ___?"  Supporting detail
     M03/M07 mc          "Which sentence is an inference about ___, not a fact from the passage?"  Inference or fact
     M04/M08 mc          "What do you already know that helps you infer that ___?"   Things we know
   Two story passages per level, new stories at every level.
═══════════════════════════════════════════════════════ */
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.meet = {
  cards: [
    { title: 'Passage and clue', blocks: [
      { p: 'On a reading test, you read a passage. Then you answer questions about it.' },
      { term: 'passage', means: 'the story or article you read on a test', ex: 'Here is a short passage about a boy named Sam.' },
      { quote: 'Sam sat at his desk. He yawned a big yawn. His eyes kept closing. Soon his head was down on his arms.' },
      { term: 'clue', means: 'a detail that helps you figure something out', ex: 'The big yawn is a clue. So are his closing eyes.' }
    ]},
    { title: 'Infer and inference', blocks: [
      { p: 'The passage never says Sam is tired. But the clues show it.' },
      { term: 'infer', means: 'to figure out something the author does not say', ex: 'We can infer Sam is tired.' },
      { term: 'inference', means: 'something you figure out from clues and what you know', ex: 'Sam is tired. That is an inference.' },
      { p: 'An inference is not a wild guess. Clues from the passage prove it.' },
      { term: 'BEST supports', means: 'proves the answer the most', ex: '"His eyes kept closing" BEST supports the idea that Sam is tired. "Sam sat at his desk" does not prove it.' }
    ]},
    { title: 'The inference chart', blocks: [
      { p: 'Use this chart to make an inference. It has three parts.' },
      { rows: [['1', 'Facts From the Text: what the passage says.'],
               ['2', 'Things We Know: what you already know from your own life.'],
               ['3', 'Conclusions We Draw: the inference you make.']] },
      { chart: { facts: 'Sam yawns, and his eyes keep closing.', know: 'People yawn when they are tired.', conclusion: 'Sam is tired.' } },
      { p: 'Facts From the Text plus Things We Know equal the Conclusions We Draw.' }
    ]},
    { title: 'Inference or fact?', blocks: [
      { p: 'A fact is something the passage says right out. An inference is something you figure out from clues.' },
      { ask: 'Which sentence is an inference about Sam, not a fact from the passage?' },
      { good: 'Sam is tired.', why: 'This is an inference. The passage never says it, but the clues show it.' },
      { bad: 'Sam yawned a big yawn.', why: 'This is a fact. The passage says it right out.' },
      { p: 'On a test, pick the one the clues show, but the passage does not say right out.' }
    ]}
  ],

  levels: {
    /* ── LEVEL 1 · FK 2.0 ───────────────────────────── */
    1: [
      { title: 'A Napkin Under the Pillow', genre: 'story',
        paragraphs: [
          'Zoe sat with her friends at lunch on Friday. She took a big bite of a crunchy red apple. Then she stopped chewing. Something small and hard was on her tongue.',
          'Zoe spit it into her hand. It was tiny, white, and smooth. Her friend Ivan looked at her and grinned. There was a new gap in the front of her smile.',
          'Zoe wrapped the tiny white thing in a napkin. She zipped the napkin into a small pocket of her backpack. On the bus ride home, she checked that pocket two times.',
          'That night, Zoe slid the napkin under her pillow and turned off the light.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Zoe?',
            choices: ['Zoe lost a tooth when she bit the apple.', 'Zoe found a little white rock in her apple.', 'Zoe is too sick to eat the rest of her lunch.', 'Zoe wants to give the napkin to Ivan.'],
            notes: [null, 'Too far. Apples do not have rocks inside them. The clues point to something else.', 'The passage gives no clue that Zoe is sick.', 'Paragraph 4 says Zoe put the napkin under her pillow. She did not give it to Ivan.'],
            why: 'Paragraph 1 says Zoe felt something small and hard on her tongue. Paragraph 2 says it was tiny and white. Kids your age lose their baby teeth. So Zoe lost a tooth.',
            chart: { facts: 'Zoe bites an apple and spits out something tiny, hard, and white.', know: 'Kids your age lose their baby teeth.', conclusion: 'Zoe lost a tooth when she bit the apple.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Zoe lost a tooth?',
            choices: ['There was a new gap in the front of her smile.', 'Zoe sat with her friends at lunch on Friday.', 'Her friend Ivan looked at her and grinned.', 'On the bus ride home, she checked that pocket two times.'],
            notes: [null, 'This tells where Zoe sat. It does not show that she lost a tooth.', 'This tells what Ivan did. It does not prove that Zoe lost a tooth.', 'This tells what Zoe did on the bus. It does not show that she lost a tooth.'],
            why: 'Paragraph 2 says there was a new gap in the front of her smile. A gap shows that a tooth came out. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Zoe, not a fact from the passage?',
            choices: ['Zoe wants to keep the tiny white thing safe.', 'Zoe took a big bite of a crunchy red apple.', 'Zoe wrapped the tiny white thing in a napkin.', 'Zoe put the napkin under her pillow that night.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Zoe checked her pocket. But paragraph 3 says she zipped the napkin into a small pocket. She checked it two times. So Zoe wants to keep it safe.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Zoe lost a tooth?',
            choices: ['A loose tooth can come out when you bite.', 'Apples can be red, green, or yellow.', 'Kids eat lunch with their friends at school.', 'A napkin can wipe off a messy face.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 2 says Zoe spit out something tiny and white after she bit the apple. We know a loose tooth can come out when you bite. That helps us infer that Zoe lost a tooth.' }
        ] },
      { title: 'Mateo and the New Backpack', genre: 'story',
        paragraphs: [
          'Mateo woke up before his alarm rang. He put on his new shoes and his new blue shirt. Then he put pencils and a notebook in his new backpack.',
          'Dad made toast for breakfast. But Mateo could only eat two bites of it. His tummy felt funny. He kept looking at the clock on the wall.',
          'Dad took a picture of Mateo by the front door. "You will meet your new teacher today," Dad said.',
          'Mateo held Dad\'s hand tight all the way to the bus stop.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Mateo?',
            choices: ['Mateo is going to his first day of school.', 'Mateo is staying home sick from school today.', 'Mateo is going on a trip to visit his grandma.', 'Mateo woke up late and had to rush to school.'],
            notes: [null, 'Paragraph 4 says Mateo went to the bus stop. He is not staying home.', 'The passage gives no clue about a trip to see his grandma.', 'Paragraph 1 says Mateo woke up before his alarm. He did not wake up late.'],
            why: 'Paragraph 1 says Mateo has new shoes and a new backpack. Paragraph 3 says he will meet his new teacher. Kids get new things when school starts. So it is his first day of school.',
            chart: { facts: 'Mateo has a new backpack, and he will meet a new teacher.', know: 'Kids get new things and a new teacher when school starts.', conclusion: 'It is Mateo\'s first day of school.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Mateo is nervous?',
            choices: ['His tummy felt funny.', 'He put on his new shoes and his new blue shirt.', 'Then he put pencils and a notebook in his new backpack.', 'Dad took a picture of Mateo by the front door.'],
            notes: [null, 'This tells what Mateo wore. It does not show how he feels.', 'This tells what Mateo packed. It does not show how he feels.', 'This tells what Dad did. It does not show how Mateo feels.'],
            why: 'Paragraph 2 says his tummy felt funny. Many kids get a funny feeling inside before a big day. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Dad, not a fact from the passage?',
            choices: ['Dad thinks today is a special day for Mateo.', 'Dad made toast for Mateo\'s breakfast.', 'Dad took a picture of Mateo by the front door.', 'Dad said Mateo would meet his new teacher today.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says what Dad thinks. But paragraph 3 says Dad took a picture of Mateo. People take pictures on special days. So Dad thinks today is special.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Mateo is nervous?',
            choices: ['A nervous tummy can make it hard to eat.', 'Toast is made from bread that is heated up.', 'Most kids take a backpack to school.', 'A clock on the wall tells you the time.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 2 says Mateo could only eat two bites. We know a nervous tummy can make it hard to eat. That helps us infer that Mateo is nervous.' }
        ] }
    ],

    /* ── LEVEL 2 · FK 2.5 ───────────────────────────── */
    2: [
      { title: 'Cocoa for Grandpa', genre: 'story',
        paragraphs: [
          'Kai looked out the window of their apartment. The cars on the street were covered in white. A big truck with a plow was pushing piles to the side of the road.',
          'Grandpa was outside shoveling the front steps. His cheeks and nose were bright red. Every few minutes, he stopped and rubbed his hands together.',
          'Kai went to the kitchen and warmed up a mug of milk. He stirred in two big spoons of cocoa. Then he put on his boots and his coat.',
          'Kai carried the mug down the stairs very carefully. "This is for you," he said. Grandpa smiled and held the warm mug with both hands.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Grandpa?',
            choices: ['Grandpa feels very cold while he shovels.', 'Grandpa is too tired to finish shoveling the steps.', 'Grandpa is upset that Kai came outside.', 'Grandpa wants Kai to help him shovel.'],
            notes: [null, 'Too far. Paragraph 2 says Grandpa stopped to rub his hands. That shows cold hands, not that he cannot finish.', 'Paragraph 4 says Grandpa smiled at Kai. He is not upset.', 'The passage gives no clue that Grandpa wants help.'],
            why: 'Paragraph 2 says Grandpa\'s nose was red. It says he rubbed his hands together. People rub their hands when they are cold. So Grandpa feels very cold.',
            chart: { facts: 'Grandpa has a red nose, and he rubs his hands together.', know: 'People rub their hands when their hands are cold.', conclusion: 'Grandpa feels very cold.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that it snowed a lot?',
            choices: ['The cars on the street were covered in white.', 'Kai looked out the window of their apartment.', 'He stirred in two big spoons of cocoa.', 'Kai carried the mug down the stairs very carefully.'],
            notes: [null, 'This tells where Kai looked. It does not tell what he saw.', 'This tells how Kai made the cocoa. It does not show snow.', 'This tells how Kai carried the mug. It does not show snow.'],
            why: 'Paragraph 1 says the cars were covered in white. Snow is white, and it covers cars. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Kai, not a fact from the passage?',
            choices: ['Kai made the cocoa to help Grandpa warm up.', 'Kai warmed up a mug of milk in the kitchen.', 'Kai put on his boots and his coat.', 'Kai looked out the window of the apartment.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Kai made the cocoa. But paragraph 2 shows that Grandpa was cold. Paragraph 4 says Kai gave him a warm mug. So Kai made it to help Grandpa warm up.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that it snowed a lot?',
            choices: ['Plows push snow off the road after a big snow.', 'Cocoa tastes sweet because it has sugar in it.', 'Many people in a city live in apartments.', 'Grandpas like to spend time with their family.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 1 says a truck with a plow pushed piles off the road. We know plows push snow after a big snow. That helps us infer that it snowed a lot.' }
        ] },
      { title: 'The Paper Crown', genre: 'story',
        paragraphs: [
          'Priya stood in front of the mirror in her room. She wore a gold paper crown and a long purple cape. "I am the queen of this land!" she said in a big, strong voice.',
          'Then she looked down at the paper in her hand, and her eyes moved along each line. She said the same lines again and again until she did not need the paper.',
          'Her little brother knocked on her door. "Can you play blocks with me?" he asked. "Not now," Priya said. "The show is tomorrow night, and I want to get every word right."',
          'After dinner, Mom sat down on the couch to listen. Priya said all of her lines perfectly, without looking at the paper even once. Mom clapped and gave her a big hug.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Priya?',
            choices: ['Priya is going to be a queen in a play.', 'Priya is playing a dress-up game with her brother.', 'Priya is reading a book about a real queen.', 'Priya wants to be a real queen when she grows up.'],
            notes: [null, 'Paragraph 3 says Priya told her brother "Not now." She is not playing with him.', 'Too far. Priya reads lines from a paper, not a book about a real queen.', 'The passage gives no clue about what Priya wants to be when she grows up.'],
            why: 'Paragraph 1 says Priya wears a crown and a cape. Paragraph 3 says the show is tomorrow night. People in a play wear costumes for the show. So Priya will be a queen in a play.',
            chart: { facts: 'Priya wears a crown and a cape, and she has a show tomorrow night.', know: 'People in a play wear costumes and learn their lines.', conclusion: 'Priya is going to be a queen in a play.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Priya works hard?',
            choices: ['She said the same lines again and again until she did not need the paper.', 'She wore a gold paper crown and a long purple cape.', 'Her little brother knocked on her door.', 'Mom clapped and gave her a big hug.'],
            notes: [null, 'This tells what Priya wore. It does not show hard work.', 'This tells what her brother did. It is about someone else.', 'This tells what Mom did. It does not show how hard Priya worked.'],
            why: 'Paragraph 2 says Priya said her lines again and again. People who do that are working hard. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Mom, not a fact from the passage?',
            choices: ['Mom is proud of how well Priya did.', 'Mom sat down on the couch to listen.', 'Mom clapped her hands for Priya.', 'Mom gave Priya a big hug after dinner.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Mom feels. But paragraph 4 says Mom clapped. It says she gave Priya a big hug. So Mom is proud of Priya.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Mom is proud of Priya?',
            choices: ['People clap and hug to show they are proud.', 'Little kids like to build towers with blocks.', 'A cape is a long piece of cloth that you wear.', 'A mirror lets you see what you look like.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 4 says Mom clapped and hugged Priya. We know people clap and hug to show they are proud. That helps us infer that Mom is proud.' }
        ] }
    ],

    /* ── LEVEL 3 · FK 3.0 ───────────────────────────── */
    3: [
      { title: 'The Stopwatch at the Gate', genre: 'story',
        paragraphs: [
          'Amara was working on a math problem when a loud alarm began to ring. White lights flashed above the door. Mr. Cole did not look surprised. He picked up a red folder. "Leave your things and line up, please," he said.',
          'The class walked down the hall in a quiet line. Nobody ran, and nobody stopped to grab a coat. Outside, each class went to its own spot along the fence at the edge of the field.',
          'Ms. Reyes, the principal, stood by the gate. She held a stopwatch in one hand and a clipboard in the other. When the last class got to the fence, she pressed a button on the stopwatch. She looked at it, wrote something on her clipboard, and smiled.',
          'A few minutes later, everyone walked back inside. Amara sat down at her desk. Her math problem was waiting right where she had left it.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about the alarm?',
            choices: ['The alarm was only for practice.', 'The alarm meant the school day was over.', 'The alarm rang because there was a real fire.', 'The alarm meant it was time for recess.'],
            notes: [null, 'Paragraph 4 says everyone went back inside to work. The school day was not over.', 'Too far. The passage never tells about smoke or fire. Everyone went back inside a few minutes later.', 'Paragraph 2 says each class went to its own spot by the fence. Nobody played, and they went back inside soon.'],
            why: 'Paragraph 3 says the principal held a stopwatch. Paragraph 4 says everyone went back inside a few minutes later. Schools practice what to do when an alarm rings. So the alarm was only for practice.',
            chart: { facts: 'The principal holds a stopwatch, and everyone goes back inside a few minutes later.', know: 'Schools practice what to do when an alarm rings.', conclusion: 'The alarm was only for practice.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Mr. Cole knew the alarm was coming?',
            choices: ['Mr. Cole did not look surprised.', 'White lights flashed above the door.', 'The class walked down the hall in a quiet line.', 'A few minutes later, everyone walked back inside.'],
            notes: [null, 'This tells what the lights did. It does not show what Mr. Cole knew.', 'This tells how the class walked. It does not show what Mr. Cole knew.', 'This tells what happened later. It does not show that Mr. Cole knew ahead of time.'],
            why: 'Paragraph 1 says Mr. Cole did not look surprised. People are not surprised when they know something is coming. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Ms. Reyes, not a fact from the passage?',
            choices: ['Ms. Reyes is timing how fast the classes get out.', 'Ms. Reyes stood by the gate while the classes came out.', 'Ms. Reyes held a stopwatch in one hand and a clipboard.', 'Ms. Reyes wrote something on her clipboard and smiled.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Ms. Reyes held a stopwatch. But paragraph 3 says she pressed the button. She did it when the last class got to the fence. Then she wrote on her clipboard. So she is timing how fast the classes get out.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Ms. Reyes is timing the classes?',
            choices: ['People use a stopwatch to see how long something takes.', 'A clipboard holds paper so that you can write on it.', 'A fence goes around the edge of a big field.', 'White lights can flash when an alarm goes off.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 3 says Ms. Reyes pressed the button on her stopwatch. We know people use a stopwatch to see how long something takes. That helps us infer that she is timing the classes.' }
        ] },
      { title: 'Checkers on the Couch', genre: 'story',
        paragraphs: [
          'Dev was stuck on the couch on a school day. He was wrapped in a fuzzy blanket, and a box of tissues sat on the floor next to him. Mom pressed her hand to his forehead and frowned. "Still warm," she said quietly.',
          'After lunch, Grandpa came over with his old checkers board tucked under his arm. All summer long, Grandpa had won every single game they played, and he always laughed his big, booming laugh when he won.',
          'Today, the game was different. Grandpa kept sliding his red pieces right next to the black ones, where Dev could easily jump them. Dev jumped one, then two, then three of them. Grandpa shook his head and said, "Oh no, how did that happen?" But when Mom walked past, Grandpa gave her a little wink.',
          'When Dev won the game, he sat up straight and smiled for the first time all day. "Can we play again?" he asked. Grandpa was already setting up the board.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Grandpa?',
            choices: ['Grandpa let Dev win the game on purpose.', 'Grandpa does not know how to play checkers well.', 'Grandpa is upset that he lost the game to Dev.', 'Grandpa wants to stop playing and go back home.'],
            notes: [null, 'Paragraph 2 says Grandpa won every game all summer. He plays very well.', 'Paragraph 3 says Grandpa gave Mom a little wink. He is not really upset.', 'Paragraph 4 says Grandpa was already setting up the board again.'],
            why: 'Paragraph 2 says Grandpa won every game all summer. Paragraph 3 says he kept putting his pieces where Dev could jump them. Then he winked at Mom. So Grandpa let Dev win on purpose.',
            chart: { facts: 'Grandpa always wins, but today he slides his pieces where Dev can jump them.', know: 'A very good player does not lose that easily by mistake.', conclusion: 'Grandpa let Dev win the game on purpose.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Dev is sick?',
            choices: ['Mom pressed her hand to his forehead and frowned.', 'After lunch, Grandpa came over with his old checkers board tucked under his arm.', 'Dev jumped one, then two, then three of them.', 'Grandpa was already setting up the board.'],
            notes: [null, 'This tells what Grandpa brought. It does not show that Dev is sick.', 'This tells about the game. It does not show that Dev is sick.', 'This tells what Grandpa did. It does not show that Dev is sick.'],
            why: 'Paragraph 1 says Mom pressed her hand to Dev\'s forehead and frowned. Parents feel your forehead to check if you are sick. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Dev, not a fact from the passage?',
            choices: ['Dev feels happier after he wins the game.', 'Dev was wrapped in a fuzzy blanket on the couch.', 'Dev jumped three of Grandpa\'s red pieces.', 'Dev asked Grandpa if they could play again.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Dev feels. But paragraph 4 says he sat up and smiled for the first time all day. He asked to play again. So Dev feels happier after he wins.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Dev is sick?',
            choices: ['People use tissues when they have a cold.', 'Checkers is a board game for two players.', 'A fuzzy blanket feels soft when you touch it.', 'Grandpas like to visit their grandkids after lunch.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 1 says a box of tissues sat next to Dev. We know people use tissues when they have a cold. That helps us infer that Dev is sick.' }
        ] }
    ],

    /* ── LEVEL 4 · FK 3.5 ───────────────────────────── */
    4: [
      { title: 'Flour on Her Sleeves', genre: 'story',
        paragraphs: [
          'The street was still dark when June and her grandma walked to the little shop on the corner. Grandma pulled a ring of keys from her pocket and unlocked the front door. She flipped on the lights and turned the big ovens up high.',
          'June tied on a small apron. Grandma showed her how to fold the soft dough into twists and brush the tops with melted butter. June\'s first twist came out lumpy and flat. Grandma just smiled and said, "Try again, but go slower this time."',
          'By the time the sun came up, June had finished a whole tray of twists. Each one was golden brown and perfectly puffy. Her arms ached, and there was flour all over her sleeves.',
          'At seven o\'clock, Grandma turned the sign on the door around. Soon a line of hungry people stretched out to the sidewalk. A man in a business suit bought six twists and said, "These are even better than last week." Grandma winked at June, and June could not stop grinning.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Grandma?',
            choices: ['Grandma is the one in charge of the bakery.', 'Grandma is waiting in line to buy some twists.', 'Grandma is upset that June\'s twist came out flat.', 'Grandma only bakes on special holidays.'],
            notes: [null, 'Paragraph 1 says Grandma unlocked the door and turned on the ovens. She is not a shopper in line.', 'Paragraph 2 says Grandma showed June how to make the twists. Nothing shows that she is upset.', 'The passage gives no clue about holidays.'],
            why: 'Paragraph 1 says Grandma has the keys and turns on the ovens. Paragraph 4 says she turns the sign on the door. The person in charge of a shop does these things. So Grandma is in charge of the bakery.',
            chart: { facts: 'Grandma has the keys, turns on the ovens, and turns the sign.', know: 'The person in charge of a shop opens it each day.', conclusion: 'Grandma is in charge of the bakery.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Grandma is kind when June makes a mistake?',
            choices: ['Grandma just smiled and said, "Try again, but go slower this time."', 'Grandma pulled a ring of keys from her pocket and unlocked the front door.', 'At seven o\'clock, Grandma turned the sign on the door around.', 'She flipped on the lights and turned the big ovens up high.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 2 says June\'s twist came out flat. Then Grandma just smiled and told her to try again. She did not get upset. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about June, not a fact from the passage?',
            choices: ['June feels proud of the twists she made.', 'June tied on a small apron.', 'June made a whole tray of twists.', 'June\'s arms ached after she made the twists.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how June feels. But paragraph 4 says a man loved the twists. Grandma winked at June, and June could not stop grinning. So June feels proud of her twists.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that the shop is open now?',
            choices: ['Shops turn a sign on the door to show they are open.', 'Twists and bread are made from soft dough.', 'Some people wear a suit and tie when they go to work.', 'Ovens get very hot when they are turned up high.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 4 says Grandma turned the sign on the door. Then people lined up. We know shops turn a sign to show they are open. That helps us infer the shop is open now.' }
        ] },
      { title: 'The Note in the Lunchbox', genre: 'story',
        paragraphs: [
          'When Elias came home from school, the apartment was very quiet. Dad\'s work boots were by the door, and his blue uniform hung on a hook. The bedroom door was shut tight.',
          'Elias tiptoed into the kitchen. He set his backpack down gently. He did not drop it on the floor like he usually did. He even poured his juice slowly so the glass would not clink.',
          'At six o\'clock, the bedroom door opened. Dad came out yawning and stretching his arms. He made a big pot of rice and beans, and they ate dinner together. Then Dad put on his uniform and his boots. "Lock the door behind me, and listen to Abuela until I get home in the morning," he said.',
          'The next day at lunch, Elias opened his lunchbox. Inside was a sandwich and a note in Dad\'s writing. "Thanks for being so quiet yesterday," the note said. Elias smiled and tucked the note into his pocket.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Dad?',
            choices: ['Dad works at night and sleeps during the day.', 'Dad is sick and has to stay in his bed all day long.', 'Dad is angry that Elias came home so late.', 'Dad works at a store very close to home.'],
            notes: [null, 'Paragraph 3 says Dad put on his uniform and left. He is not sick in bed.', 'The passage gives no clue that Dad is angry or that Elias came home late.', 'The passage gives no clue about where Dad works.'],
            why: 'Paragraph 1 says the bedroom door was shut tight after school. Paragraph 3 says Dad put on his uniform after dinner. He said he will get home in the morning. People wear a uniform to work. So Dad works at night and sleeps in the day.',
            chart: { facts: 'Dad puts on his uniform after dinner, and he will get home in the morning.', know: 'People wear a uniform when they go to work.', conclusion: 'Dad works at night and sleeps during the day.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Dad was asleep when Elias got home?',
            choices: ['Dad came out yawning and stretching his arms.', 'He made a big pot of rice and beans, and they ate dinner together.', 'Elias smiled and tucked the note into his pocket.', 'The next day at lunch, Elias opened his lunchbox.'],
            notes: [null, 'This tells what Dad made for dinner. It does not show he was asleep.', 'This tells what Elias did the next day. It is about a different part of the passage.', 'This tells about lunch the next day. It does not show that Dad was asleep.'],
            why: 'Paragraph 3 says Dad came out yawning and stretching. People yawn and stretch when they wake up. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Elias, not a fact from the passage?',
            choices: ['Elias is being quiet so that Dad can sleep.', 'Elias tiptoed into the kitchen after school.', 'Elias poured his juice slowly into a glass.', 'Elias found a note from Dad in his lunchbox.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Elias is so quiet. But paragraph 1 says the bedroom door was shut. Paragraph 3 says Dad came out yawning. So Elias is quiet so that Dad can sleep.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Elias is being quiet for Dad?',
            choices: ['Loud sounds can wake up a person who is sleeping.', 'Rice and beans make a good, warm dinner for a family.', 'Kids carry their lunch to school in a lunchbox.', 'Boots keep your feet warm and dry outside.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 2 says Elias set his bag down gently and poured slowly. We know loud sounds can wake a sleeping person. That helps us infer Elias is being quiet for Dad.' }
        ] }
    ],

    /* ── LEVEL 5 · FK 4.0 ───────────────────────────── */
    5: [
      { title: 'The Hole Under the Fence', genre: 'story',
        paragraphs: [
          'Ana and her neighbor, Miss Bea, shared a small garden behind their building. In the spring, Ana planted lettuce, carrots, and a long row of strawberries. By early summer, the strawberries were finally turning red, and Ana planned to pick them on Saturday.',
          'But on Saturday morning, the strawberry plants were almost bare. Only a few green berries were left. The lettuce leaves had round bites taken out of their edges. Ana kneeled down to look closer. Near the corner of the fence, a hole had been dug in the soft dirt, just big enough to squeeze through. A clump of soft gray fur was caught on the bottom of the wire.',
          'Ana frowned and crossed her arms. "All that work," she muttered, kicking a pebble across the path.',
          'Miss Bea came out with her watering can and studied the hole. "I have seen this before," she said. "We need to keep our hungry visitor out." That afternoon, the two of them pushed flat stones into the hole. They bent a piece of wire across the bottom of the fence. Before she went inside, Ana set one carrot on the far side of the fence, away from the garden.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about the hungry visitor?',
            choices: ['The visitor is an animal that dug under the fence.', 'The visitor is a kid who picked the berries to eat.', 'The visitor is a bird that flew over the fence.', 'The visitor is Miss Bea, who wanted the berries.'],
            notes: [null, 'Too far. The hole was small, and gray fur was on the wire. The clues do not point to a kid.', 'Paragraph 2 says gray fur was caught on the wire. Birds have feathers, not fur.', 'Paragraph 4 says Miss Bea helped block the hole. She is not the visitor.'],
            why: 'Paragraph 2 says a hole was dug under the fence. It says gray fur was caught on the wire. Many small animals have fur and dig. So the visitor is an animal that dug under the fence.',
            chart: { facts: 'There is a hole under the fence and gray fur on the wire.', know: 'Many small animals have fur, and some of them dig.', conclusion: 'An animal dug under the fence to get into the garden.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Ana is upset?',
            choices: ['Ana frowned and crossed her arms.', 'Ana kneeled down to look closer.', 'In the spring, Ana planted lettuce, carrots, and a long row of strawberries.', 'Miss Bea came out with her watering can and studied the hole.'],
            notes: [null, 'This tells how Ana looked at the garden. It does not show how she feels.', 'This tells what Ana planted. It does not show that she is upset.', 'This tells what Miss Bea did. It is about someone else.'],
            why: 'Paragraph 3 says Ana frowned and crossed her arms. People do that when they are upset. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Ana, not a fact from the passage?',
            choices: ['Ana does not want the animal to go hungry.', 'Ana planted strawberries in the spring.', 'Ana kneeled down to take a closer look.', 'Ana set a carrot on the far side of the fence.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Ana left the carrot. But paragraph 4 says she set it outside the fence, away from the garden. So Ana does not want the animal to go hungry.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that an animal ate the lettuce?',
            choices: ['Animals leave bite marks in the food they eat.', 'Lettuce is green and grows in leafy bunches.', 'Strawberries turn red when they are ready to pick.', 'People use a watering can to water plants.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 2 says the lettuce had round bites in the edges. We know animals leave bite marks in the food they eat. That helps us infer an animal ate the lettuce.' }
        ] },
      { title: 'A Sign in Jonah\'s Yard', genre: 'story',
        paragraphs: [
          'Nate and Jonah had lived across the street from each other since they were babies. Every day after school, they kicked a soccer ball back and forth in Jonah\'s front yard.',
          'One afternoon in June, Nate saw a new sign in the grass in front of Jonah\'s house. It said "For Sale" in big red letters. A few days later, a woman in a blue jacket led a family through every room of Jonah\'s house.',
          'Soon, boxes began piling up on Jonah\'s porch. Jonah\'s mom wrapped plates in newspaper and taped the boxes shut. Jonah stopped asking to play soccer. Most days, Jonah just sat on his front steps and stared at the boxes.',
          'On Friday night, Nate sat at the kitchen table with paper, a stapler, and markers. He drew Jonah scoring a goal. He drew the two of them eating ice pops on the steps. On the last page, Nate wrote his own address in his neatest letters.',
          'Early the next morning, a big truck pulled up in front of Jonah\'s house. Nate walked across the street and handed Jonah the little book. Jonah slowly turned every page. Then he tucked the book inside his jacket, right next to his heart.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Jonah?',
            choices: ['Jonah and his family are moving away.', 'Jonah\'s family is getting ready for a yard sale.', 'Jonah is angry at Nate and does not want to play.', 'Jonah is going away to summer camp for a week.'],
            notes: [null, 'Too far. Paragraph 2 says a family walked through every room. They came to see the house, not a yard sale.', 'Paragraph 5 says Jonah tucked Nate\'s book next to his heart. The clues show the opposite.', 'Paragraph 2 says Jonah\'s house is for sale. People do not sell their house to go to camp.'],
            why: 'Paragraph 2 says Jonah\'s house has a For Sale sign. Paragraph 3 says his mom packed plates in boxes. People sell their home when they move away. So Jonah\'s family is moving away.',
            chart: { facts: 'Jonah\'s house has a For Sale sign, and his mom packs plates in boxes.', know: 'People sell their home when they move away.', conclusion: 'Jonah and his family are moving away.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Jonah is sad about moving?',
            choices: ['Most days, Jonah just sat on his front steps and stared at the boxes.', 'Jonah\'s mom wrapped plates in newspaper and taped the boxes shut.', 'It said "For Sale" in big red letters.', 'Early the next morning, a big truck pulled up in front of Jonah\'s house.'],
            notes: [null, 'This tells what Jonah\'s mom did. It does not show how Jonah feels.', 'This tells about the sign. It does not show how Jonah feels.', 'This tells about the truck. It does not show how Jonah feels.'],
            why: 'Paragraph 3 says Jonah just sat and stared at the boxes. He stopped asking to play. People act this way when they are sad. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Nate, not a fact from the passage?',
            choices: ['Nate hopes to stay friends with Jonah.', 'Nate drew a picture of Jonah scoring a goal.', 'Nate wrote his address on the last page.', 'Nate handed Jonah a little book in the morning.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says what Nate hopes. But paragraph 4 says he wrote his own address in the book. Friends send letters to an address. So Nate hopes to stay friends with Jonah.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Jonah\'s family is moving?',
            choices: ['People pack their things in boxes before they move.', 'Soccer is a game that you play with your feet.', 'Markers come in lots of bright colors.', 'Kids like to eat cold ice pops on a hot summer day.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 3 says boxes piled up on Jonah\'s porch. We know people pack their things in boxes before they move. That helps us infer that Jonah\'s family is moving.' }
        ] }
    ],

    /* ── LEVEL 6 · FK 4.5 ───────────────────────────── */
    6: [
      { title: 'A Patch on the Back Tire', genre: 'story',
        paragraphs: [
          'All week, Jada\'s bike had leaned against the wall in the hallway with a flat back tire. Every afternoon, she pressed the tire with her thumb. Every afternoon, it was still as soft as a pillow. Her friends were planning to ride to the lake on Saturday. Jada told them, in a small, quiet voice, that she would probably stay home.',
          'Her older brother, Andre, was always busy. He had basketball practice after school, homework every night, and a job bagging groceries on the weekends. On Thursday, Jada asked if he could look at her tire. "Maybe," he said, without looking up from his math book.',
          'On Saturday morning, Jada walked into the hallway and stopped. The back tire was round and firm. When she squeezed it, it pushed back against her fingers. On the floor next to the bike sat an open box. Inside it were tiny rubber patches, a tube of glue, and a small pump.',
          'Jada hurried into the living room. Andre was asleep on the couch, still wearing yesterday\'s clothes. His fingers were covered with black smudges. A flashlight lay on the rug beside him, still glowing faintly. Jada gently pulled a blanket over her brother\'s shoulders. Then she tiptoed out the door, grinning, and rode toward the lake.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Andre?',
            choices: ['Andre stayed up late to fix his sister\'s bike.', 'Andre was too busy to help Jada with her bike.', 'Andre fell asleep while doing his math homework.', 'Andre bought Jada a brand-new tire for her bike.'],
            notes: [null, 'Paragraph 3 says the flat tire was now round and firm. Paragraph 4 says Andre had black smudges on his fingers. The clues show the opposite.', 'Too far. Paragraph 4 shows black smudges on his fingers, not a math book. The clues do not prove this.', 'Paragraph 3 says a box of patches and glue was by the bike. That shows the old tire was fixed. He did not buy a new one.'],
            why: 'Paragraph 3 says the flat tire was now round and firm. A box of patches and glue sat by the bike. Paragraph 4 says Andre had black smudges on his fingers. He was asleep in yesterday\'s clothes. So Andre stayed up late to fix the bike.',
            chart: { facts: 'The tire is round and firm, and Andre is asleep with black smudges on his fingers.', know: 'Fixing a bike can leave black marks on your hands.', conclusion: 'Andre stayed up late to fix Jada\'s bike.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Jada was sad about her bike at the start?',
            choices: ['Jada told them, in a small, quiet voice, that she would probably stay home.', 'He had basketball practice after school, homework every night, and a job bagging groceries on the weekends.', 'The back tire was round and firm.', 'Jada hurried into the living room.'],
            notes: [null, 'This tells about Andre. It does not show how Jada feels.', 'This tells about the tire on Saturday. It is from a different part of the passage.', 'This tells what Jada did on Saturday. It does not show she was sad at the start.'],
            why: 'Paragraph 1 says Jada spoke in a small, quiet voice. She said she would stay home. People talk that way when they are sad. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Jada, not a fact from the passage?',
            choices: ['Jada is thankful for what her brother did.', 'Jada pressed the flat tire with her thumb each afternoon.', 'Jada asked Andre to look at her bike tire.', 'Jada pulled a blanket over her brother.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Jada feels about Andre. But paragraph 4 says she pulled a blanket over him. She tiptoed out so he could sleep. So Jada is thankful for what he did.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Andre fixed the tire at night?',
            choices: ['A flashlight helps you see when it is dark.', 'A bike tire needs air inside it to roll well.', 'A grocery store sells food and other things.', 'Basketball players often practice after school.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 4 says a flashlight lay next to Andre, still glowing. We know a flashlight helps you see in the dark. That helps us infer Andre fixed the tire at night.' }
        ] },
      { title: 'Toast on a Tray', genre: 'story',
        paragraphs: [
          'Mom had worked late at the hospital every day that week. On Friday night, she fell asleep on the couch before dinner was even over. Early on Saturday morning, Ruby walked into the kitchen while the sky outside was still gray. Ruby had a plan, and she had written it on a sticky note: toast, orange juice, and a flower from the window box.',
          'Ruby\'s little brother, Milo, shuffled in wearing his dinosaur pajamas. He read the sticky note and grinned. Right away, he climbed onto a chair and slowly poured the juice, holding the heavy jug with both hands. Then he picked the reddest flower from the window box.',
          'Ruby dropped two slices of bread into the toaster. She turned the dial all the way up, because she wanted the toast to be extra crispy. A few minutes later, a burning smell filled the kitchen. When the toast popped up, both slices were black around the edges. Ruby groaned. There was no more bread, so she scraped off what she could and spread on a thick layer of jam.',
          'Ruby carried the tray down the hall while Milo held the door open. Mom sat up slowly and blinked at the tray. She looked at the dark toast for a moment. Then she took a big, crunchy bite. "This is the best breakfast anyone has ever made me," she said. She ate every last crumb, and then she pulled both of her kids under the blanket for a long hug.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Mom?',
            choices: ['Mom loves the surprise, even with burnt toast.', 'Mom is angry that Ruby burned the toast.', 'Mom did not even notice that the toast was burnt.', 'Mom wanted to make her own breakfast today.'],
            notes: [null, 'Paragraph 4 says Mom hugged her kids for a long time. The clues show the opposite.', 'Paragraph 4 says Mom looked at the dark toast for a moment. She did notice it.', 'The passage gives no clue that Mom wanted to cook.'],
            why: 'Paragraph 4 says Mom looked at the dark toast. Then she ate every last crumb and said it was the best breakfast. She hugged her kids. A gift made with love matters more than how it turns out. So Mom loves the surprise, even with burnt toast.',
            chart: { facts: 'Mom sees the dark toast, but she eats every crumb and hugs her kids.', know: 'A gift made with love matters more than how it turns out.', conclusion: 'Mom loves the surprise, even with burnt toast.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Ruby planned the surprise ahead of time?',
            choices: ['Ruby had a plan, and she had written it on a sticky note: toast, orange juice, and a flower from the window box.', 'When the toast popped up, both slices were black around the edges.', 'Mom sat up slowly and blinked at the tray.', 'Ruby carried the tray down the hall while Milo held the door open.'],
            notes: [null, 'This tells about the toast. It does not show that Ruby planned ahead.', 'This tells what Mom did. It is about someone else.', 'This tells how Ruby brought the tray to Mom. It does not show that she planned ahead.'],
            why: 'Paragraph 1 says Ruby wrote her plan on a sticky note. People write a plan down before they start. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Milo, not a fact from the passage?',
            choices: ['Milo wants to help with the surprise.', 'Milo wore his dinosaur pajamas.', 'Milo poured the juice with both hands.', 'Milo held the door open for Ruby.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Milo poured the juice. But paragraph 2 says he grinned at the plan and poured the juice right away. Paragraph 4 says he held the door open. So Milo wants to help with the surprise.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Mom is very tired?',
            choices: ['Working long hours can make a person very tired.', 'Jam tastes sweet when you spread it on warm bread.', 'Orange juice is made by squeezing ripe oranges.', 'A toaster has a dial that makes toast darker.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 1 says Mom worked late every day that week. She fell asleep before dinner was over. We know working long hours can make a person very tired. That helps us infer that Mom is very tired.' }
        ] }
    ]
  }
};
