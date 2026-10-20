/* ═══════════════════════════════════════════════════════
   PROVE IT — evidence selection (window.INF_SETS.prove)
   "Which sentence from the passage BEST supports the idea that…"
   Every choice of an evidence question is an EXACT sentence of the passage
   (INF_SPLIT). The three wrong ones are true in the story and nearby, but
   they do not PROVE the idea; each note names the paragraph and says why.
   Slots per level: P1 = P01 mc · P02 mc · P03 hot · P04 mc; P2 = P05–P08.
═══════════════════════════════════════════════════════ */
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.prove = {
  cards: [
    { title: 'Prove It', blocks: [
      { term: 'passage', means: 'the story or article you read on a test',
        ex: 'A question may give you an idea about the passage. Then it asks you to prove it.' },
      { term: 'supporting detail', means: 'a sentence from the passage that proves your answer',
        ex: 'The idea: Ben is cold. The detail: "Ben rubbed his hands, and his teeth chattered."' },
      { p: 'A detail holds up an idea, the way bricks hold up a wall. In R.A.D., it is your D, the Detail.' }
    ] },
    { title: 'BEST Supports', blocks: [
      { term: 'BEST supports', means: 'proves the answer the most',
        ex: 'Which sentence from the passage BEST supports the idea that Ben is cold?' },
      { p: 'All four choices are real sentences from the passage. All four can be true. Only one proves the idea the most.' }
    ] },
    { title: 'True, But Not Proof', blocks: [
      { quote: 'Ben walked to the bus stop. The bus was late. Ben rubbed his hands, and his teeth chattered.' },
      { ask: 'Which sentence from the passage BEST supports the idea that Ben is cold?' },
      { good: 'Ben rubbed his hands, and his teeth chattered.', why: 'Teeth chatter when you are cold. That is proof.' },
      { bad: 'Ben walked to the bus stop.', why: 'This is true. But walking does not prove Ben is cold.' },
      { bad: 'The bus was late.', why: 'This is true too. But it is about the bus.' }
    ] },
    { title: 'How to Prove It', blocks: [
      { rows: [
        ['1', 'Read the idea in the question.'],
        ['2', 'Look back at the passage.'],
        ['3', 'Read each sentence. Ask: Does this prove the idea?'],
        ['4', 'A true sentence is not always proof. Pick the one that proves it the most.']
      ] },
      { p: 'Some questions say "Click on the sentence." Tap the sentence that proves the idea. Then tap "That\'s My Answer!"' }
    ] }
  ],

  levels: {
    /* ─────────────── Level 1 · FK 2.0 · 70–110 words ─────────────── */
    1: [
      { title: 'The Castle Near the Waves', genre: 'story',
        paragraphs: [
          'Lila went to the beach with Dad one hot day. She built a sand castle right next to the water.',
          'For an hour, Lila dug a moat around the castle and pressed shells into each wall. Then a big wave rushed up the sand. When the water slid back, the castle was a flat, wet lump.',
          'Lila sat down in the sand, and her lip shook. Dad pointed to the dry sand far from the waves. Lila picked up her bucket and walked up the beach.',
          'She built a new castle there, and the waves did not reach it. Lila grinned and called her dad over to see her castle.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Lila worked hard on her first castle?',
            choices: [
              'For an hour, Lila dug a moat around the castle and pressed shells into each wall.',
              'She built a sand castle right next to the water.',
              'Then a big wave rushed up the sand.',
              'She built a new castle there, and the waves did not reach it.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 1 tells where Lila built the castle. It does not show how hard she worked.',
              'Paragraph 2 tells about a big wave. It does not show what Lila did.',
              'Paragraph 4 is about the new castle. The idea is about the first one.'],
            why: 'Paragraph 2 says Lila worked for an hour. She dug a moat and put shells on each wall. That is a lot of work. So Lila worked hard on her first castle.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that the wave knocked down Lila\'s castle?',
            choices: [
              'When the water slid back, the castle was a flat, wet lump.',
              'Then a big wave rushed up the sand.',
              'For an hour, Lila dug a moat around the castle and pressed shells into each wall.',
              'Dad pointed to the dry sand far from the waves.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 2 says a big wave came. It does not show what the wave did to the castle.',
              'Paragraph 2 tells how Lila made the castle. It does not show what the wave did.',
              'Paragraph 3 tells what Dad did. It does not show what happened to the castle.'],
            why: 'Paragraph 2 says a big wave rushed up. When the water slid back, the castle was a flat lump. Waves can push sand flat. So the wave knocked down the castle.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Lila was sad when her castle was gone.',
            answer: 'Lila sat down in the sand, and her lip shook.',
            notes: {
              'When the water slid back, the castle was a flat, wet lump.': 'Paragraph 2 tells what happened to the castle. It does not show how Lila felt.',
              'Lila picked up her bucket and walked up the beach.': 'Paragraph 3 tells where Lila went. It does not show how she felt.'
            },
            why: 'Paragraph 3 says Lila sat down and her lip shook. A lip can shake when someone is about to cry. So Lila was sad when her castle was gone.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Lila was proud of her new castle. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Lila grinned and called her dad over to see her castle.',
              'She built a new castle there, and the waves did not reach it.',
              'Dad pointed to the dry sand far from the waves.',
              'Lila picked up her bucket and walked up the beach.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 4 tells what happened to the new castle. It does not show how Lila felt.',
              'Paragraph 3 tells what Dad did. The idea is about Lila.',
              'Paragraph 3 tells where Lila went. It does not show how she felt.'],
            why: 'Paragraph 4 says Lila grinned and called her dad over to see her castle. We show people the things we are proud of. So Lila was proud of her new castle.' }
        ] },

      { title: 'A Windy Walk Home', genre: 'story',
        paragraphs: [
          'Dev walked home from school with his little sister, Nia. The wind blew hard down the busy city street.',
          'Nia\'s nose was red, and she pulled her coat up to her chin. Dev took off his own scarf and wrapped it around her neck.',
          'At the corner, Dev held Nia\'s hand until the light turned green. A big bus rushed past and splashed slush on the curb.',
          'When they got home, Mom had hot cocoa waiting on the table. Nia drank her cocoa fast and asked for more.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Nia was cold?',
            choices: [
              'Nia\'s nose was red, and she pulled her coat up to her chin.',
              'The wind blew hard down the busy city street.',
              'Dev walked home from school with his little sister, Nia.',
              'When they got home, Mom had hot cocoa waiting on the table.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 1 tells about the wind. It does not tell how Nia felt.',
              'Paragraph 1 tells who walked home. It does not show that Nia was cold.',
              'Paragraph 4 tells what Mom made. It does not show how Nia felt on the walk.'],
            why: 'Paragraph 2 says Nia\'s nose was red. She pulled her coat up to her chin. People do that when they are cold. So Nia was cold.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Dev wanted Nia to stay warm?',
            choices: [
              'Dev took off his own scarf and wrapped it around her neck.',
              'At the corner, Dev held Nia\'s hand until the light turned green.',
              'Nia\'s nose was red, and she pulled her coat up to her chin.',
              'When they got home, Mom had hot cocoa waiting on the table.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              'Paragraph 3 is about the street corner. It does not show Dev keeping Nia warm.',
              'Paragraph 2 tells what Nia did. The idea is about Dev.',
              'Paragraph 4 is about Mom, not Dev.'],
            why: 'Paragraph 2 says Dev gave Nia his own scarf. A scarf keeps your neck warm. So Dev wanted Nia to stay warm.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Dev was careful when they crossed the street.',
            answer: 'At the corner, Dev held Nia\'s hand until the light turned green.',
            notes: {
              'A big bus rushed past and splashed slush on the curb.': 'Paragraph 3 tells about the bus. It does not show what Dev did.',
              'Dev took off his own scarf and wrapped it around her neck.': 'Paragraph 2 shows Dev kept Nia warm. It is not about the street.'
            },
            why: 'Paragraph 3 says Dev held Nia\'s hand until the light turned green. We wait for the green light so we cross safely. So Dev was careful.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Nia liked the cocoa. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Nia drank her cocoa fast and asked for more.',
              'When they got home, Mom had hot cocoa waiting on the table.',
              'A big bus rushed past and splashed slush on the curb.',
              'Dev took off his own scarf and wrapped it around her neck.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'wrongtime'],
            notes: [null,
              'Paragraph 4 says there was cocoa. It does not show that Nia liked it.',
              'Paragraph 3 tells about a bus on the street. It does not tell about the cocoa.',
              'Paragraph 2 tells what Dev did on the walk. It does not tell about the cocoa.'],
            why: 'Paragraph 4 says Nia drank her cocoa fast and asked for more. We ask for more of things we like. So Nia liked the cocoa.' }
        ] }
    ],

    /* ─────────────── Level 2 · FK 2.5 · 90–140 words ─────────────── */
    2: [
      { title: 'Tomas Runs the Last Lap', genre: 'story',
        paragraphs: [
          'On field day, Tomas was the last runner for the Blue Team. He stood at the white line and waited for his turn. His knees shook, and his mouth felt as dry as sand.',
          'His friend Ivy raced toward him with the baton. The Blue Team was a few steps behind the Red Team. Tomas grabbed the baton and began to run.',
          'He pumped his arms and passed one runner, then another. At the finish line, he leaned forward with all his might.',
          'The whole Blue Team cheered and lifted Tomas up on their shoulders. Coach Bell gave each runner a shiny blue ribbon. Tomas smiled at his ribbon the whole bus ride home.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Tomas was nervous before his turn?',
            choices: [
              'His knees shook, and his mouth felt as dry as sand.',
              'He stood at the white line and waited for his turn.',
              'On field day, Tomas was the last runner for the Blue Team.',
              'His friend Ivy raced toward him with the baton.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 1 tells where Tomas stood. It does not show how he felt.',
              'Paragraph 1 tells what job Tomas had. It does not show how he felt.',
              'Paragraph 2 tells what Ivy did. It is not about how Tomas felt.'],
            why: 'Paragraph 1 says his knees shook. His mouth was dry. Our bodies do that when we are nervous. So Tomas was nervous before his turn.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Tomas is a fast runner?',
            choices: [
              'He pumped his arms and passed one runner, then another.',
              'Tomas grabbed the baton and began to run.',
              'At the finish line, he leaned forward with all his might.',
              'His friend Ivy raced toward him with the baton.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 2 says Tomas began to run. It does not show how fast he ran.',
              'Paragraph 3 shows Tomas tried hard at the end. It does not show he was faster than the others.',
              'Paragraph 2 is about Ivy, not Tomas.'],
            why: 'Paragraph 3 says Tomas passed one runner, then another. To pass a kid, you have to run faster. So Tomas is a fast runner.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Tomas was proud of his ribbon.',
            answer: 'Tomas smiled at his ribbon the whole bus ride home.',
            notes: {
              'Coach Bell gave each runner a shiny blue ribbon.': 'Paragraph 4 says Tomas got a ribbon. It does not show how he felt about it.',
              'The whole Blue Team cheered and lifted Tomas up on their shoulders.': 'Paragraph 4 tells what the team did. It does not show how Tomas felt about his ribbon.'
            },
            why: 'Paragraph 4 says Tomas smiled at his ribbon the whole ride home. We like to look at things we are proud of. So Tomas was proud of his ribbon.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that the Blue Team was happy with Tomas. Which sentence from the passage BEST supports this idea?',
            choices: [
              'The whole Blue Team cheered and lifted Tomas up on their shoulders.',
              'Coach Bell gave each runner a shiny blue ribbon.',
              'Tomas smiled at his ribbon the whole bus ride home.',
              'The Blue Team was a few steps behind the Red Team.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              'Paragraph 4 says every runner got a ribbon. It does not show how the team felt about Tomas.',
              'Paragraph 4 shows how Tomas felt. The idea is about the team.',
              'Paragraph 2 tells about the race before Tomas ran. It does not show how the team felt about him.'],
            why: 'Paragraph 4 says the team cheered and lifted Tomas up. We cheer for a friend who did well. So the Blue Team was happy with Tomas.' }
        ] },

      { title: 'The Coin Jar', genre: 'story',
        paragraphs: [
          'Jada kept a glass jar on the shelf in her room. Each week, Jada put in the coins she got for doing chores. Her brother spent his coins on candy, but Jada kept hers.',
          'One Saturday, Jada poured the coins on her bed and counted them. Then she walked to the flower shop with her dad.',
          'Jada picked out yellow roses, the color Grandma likes best. A man at the shop wrapped the roses in pink paper.',
          'When Grandma opened the door, she gasped and put a hand over her mouth. She hugged Jada for a long time. That night, the roses sat in a vase on her table.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Jada worked to earn her money?',
            choices: [
              'Each week, Jada put in the coins she got for doing chores.',
              'Jada kept a glass jar on the shelf in her room.',
              'One Saturday, Jada poured the coins on her bed and counted them.',
              'Her brother spent his coins on candy, but Jada kept hers.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Jada kept her money. It does not tell how she got it.',
              'Paragraph 2 shows Jada counted her money. It does not tell how she got it.',
              'Paragraph 1 tells what Jada and her brother did with their coins. It does not tell how Jada got them.'],
            why: 'Paragraph 1 says Jada got coins for doing chores. Chores are jobs, like making your bed. So Jada worked to earn her money.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Jada knew what Grandma likes?',
            choices: [
              'Jada picked out yellow roses, the color Grandma likes best.',
              'Then she walked to the flower shop with her dad.',
              'A man at the shop wrapped the roses in pink paper.',
              'One Saturday, Jada poured the coins on her bed and counted them.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 2 tells where Jada went. It does not show what she knew about Grandma.',
              'Paragraph 3 tells what the man at the shop did. It is not about Jada.',
              'Paragraph 2 is about the money. It does not show what Jada knew about Grandma.'],
            why: 'Paragraph 3 says Jada picked yellow roses. Yellow is the color Grandma likes best. Jada chose it on purpose. So she knew what Grandma likes.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Grandma was surprised.',
            answer: 'When Grandma opened the door, she gasped and put a hand over her mouth.',
            notes: {
              'She hugged Jada for a long time.': 'Paragraph 4 shows Grandma loves Jada. A hug does not show she was surprised.',
              'That night, the roses sat in a vase on her table.': 'Paragraph 4 tells where the roses went later. It does not show Grandma was surprised.'
            },
            why: 'Paragraph 4 says Grandma gasped and put a hand over her mouth. We do that when we did not see something coming. So Grandma was surprised.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Jada saved her money instead of spending it. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Her brother spent his coins on candy, but Jada kept hers.',
              'Jada kept a glass jar on the shelf in her room.',
              'Jada picked out yellow roses, the color Grandma likes best.',
              'Then she walked to the flower shop with her dad.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells about the jar. It does not show Jada chose not to spend.',
              'Paragraph 3 tells what Jada picked out at the shop. It does not show she kept her coins.',
              'Paragraph 2 tells where Jada went. It does not show she saved.'],
            why: 'Paragraph 1 says her brother spent his coins on candy. Jada kept hers. She could spend them, but she did not. So Jada saved her money.' }
        ] }
    ],

    /* ─────────────── Level 3 · FK 3.0 · 110–170 words ─────────────── */
    3: [
      { title: 'A Song for Max', genre: 'story',
        paragraphs: [
          'On a snowy Tuesday, Dad picked Hana up early from school. He told her that her baby brother had just been born. Hana raced down the hospital hall so fast that Dad had to jog to keep up.',
          'In the room, Mom held a tiny baby in a blue blanket. Hana sat in the big chair, and Dad set her new brother, Max, in her arms. Hana held her arms stiff and did not move an inch.',
          'Then Max scrunched up his red face and began to wail. Hana thought of the song Dad used to sing to her at bedtime. She hummed it soft and low, just the way Dad did. Max stopped crying and curled his tiny hand around her thumb.',
          'Hana grinned at Dad and sat up a little taller.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Hana was excited to meet the baby?',
            choices: [
              'Hana raced down the hospital hall so fast that Dad had to jog to keep up.',
              'On a snowy Tuesday, Dad picked Hana up early from school.',
              'He told her that her baby brother had just been born.',
              'In the room, Mom held a tiny baby in a blue blanket.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells when Dad came to get Hana. It does not show how she felt.',
              'Paragraph 1 tells what Dad said. It does not show how Hana felt.',
              'Paragraph 2 tells what Hana saw in the room. It does not show how she felt.'],
            why: 'Paragraph 1 says Hana raced down the hall so fast that Dad had to jog. We hurry when we cannot wait to see someone. So Hana was excited to meet the baby.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Hana was nervous to hold Max?',
            choices: [
              'Hana held her arms stiff and did not move an inch.',
              'Hana sat in the big chair, and Dad set her new brother, Max, in her arms.',
              'In the room, Mom held a tiny baby in a blue blanket.',
              'Then Max scrunched up his red face and began to wail.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 2 tells how Max got into Hana\'s arms. It does not show how she felt.',
              'Paragraph 2 tells what Hana saw. It does not show how she felt.',
              'Paragraph 3 is about Max. The idea is about how Hana felt.'],
            why: 'Paragraph 2 says Hana held her arms stiff and did not move an inch. People hold very still when they are afraid to drop something. So Hana was nervous to hold Max.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Hana was proud of herself at the end.',
            answer: 'Hana grinned at Dad and sat up a little taller.',
            notes: {
              'She hummed it soft and low, just the way Dad did.': 'Paragraph 3 tells what Hana did. It does not show how she felt.',
              'Hana raced down the hospital hall so fast that Dad had to jog to keep up.': 'Paragraph 1 is about the start. The idea is about the end.'
            },
            why: 'Paragraph 4 says Hana grinned at Dad and sat up a little taller. We sit up tall when we feel good about what we did. So Hana was proud of herself at the end.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Hana\'s humming helped Max calm down. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Max stopped crying and curled his tiny hand around her thumb.',
              'She hummed it soft and low, just the way Dad did.',
              'Hana thought of the song Dad used to sing to her at bedtime.',
              'Hana sat in the big chair, and Dad set her new brother, Max, in her arms.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 3 says Hana hummed. It does not show what happened to Max.',
              'Paragraph 3 tells what Hana thought of. It does not show what happened to Max.',
              'Paragraph 2 tells how Hana got to hold Max. It does not show the humming helped.'],
            why: 'Paragraph 3 says Hana hummed. Right after that, Max stopped crying and held her thumb. A baby stops crying when it feels calm. So Hana\'s humming helped Max calm down.' }
        ] },

      { title: 'Hector on the Ice', genre: 'story',
        paragraphs: [
          'Hector had never been ice skating before. At the city rink, he held on to the wall with both hands and took tiny, slow steps.',
          'Kids zoomed past him, laughing and spinning in circles. His big sister, Lucia, skated over and held out her hand. Loud music was playing, and the cold air turned his cheeks bright pink.',
          'Hector let go of the wall and fell right away. His pants got soaked from the wet ice. His knee hurt, but he stood back up and tried again.',
          'By the end of the day, Hector could glide all the way around the rink by himself. On the drive home, he asked Mom if they could come back next Saturday.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Hector was afraid of falling at first?',
            choices: [
              'At the city rink, he held on to the wall with both hands and took tiny, slow steps.',
              'Hector had never been ice skating before.',
              'Kids zoomed past him, laughing and spinning in circles.',
              'Hector let go of the wall and fell right away.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 1 says Hector was new at skating. It does not show how he felt.',
              'Paragraph 2 tells about other kids, not Hector.',
              'Paragraph 3 says Hector fell. It does not show he was afraid before he fell.'],
            why: 'Paragraph 1 says Hector held the wall with both hands. He took tiny, slow steps. People hold on tight when they are afraid of falling. So Hector was afraid at first.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Lucia wanted to help her brother?',
            choices: [
              'His big sister, Lucia, skated over and held out her hand.',
              'Hector let go of the wall and fell right away.',
              'Loud music was playing, and the cold air turned his cheeks bright pink.',
              'By the end of the day, Hector could glide all the way around the rink by himself.'
            ],
            kinds: [null, 'wrongwho', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 3 tells what Hector did. It does not show what Lucia did.',
              'Paragraph 2 tells about the music and the cold air. It does not show what Lucia did.',
              'Paragraph 4 tells what Hector could do at the end. It does not show Lucia helping.'],
            why: 'Paragraph 2 says Lucia skated over and held out her hand. You hold out your hand so someone can hold on. So Lucia wanted to help her brother.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Hector did not give up.',
            answer: 'His knee hurt, but he stood back up and tried again.',
            notes: {
              'Hector let go of the wall and fell right away.': 'Paragraph 3 says Hector fell. Falling does not show he kept trying.',
              'By the end of the day, Hector could glide all the way around the rink by himself.': 'Paragraph 4 tells what Hector could do at the end. Paragraph 3 shows the moment he got up and tried again.'
            },
            why: 'Paragraph 3 says Hector was hurt, but he got up and tried again. Getting up after you fall means you do not quit. So Hector did not give up.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Hector had fun skating in the end. Which sentence from the passage BEST supports this idea?',
            choices: [
              'On the drive home, he asked Mom if they could come back next Saturday.',
              'By the end of the day, Hector could glide all the way around the rink by himself.',
              'Kids zoomed past him, laughing and spinning in circles.',
              'His pants got soaked from the wet ice.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              'Paragraph 4 shows Hector learned to skate. Being able to do something does not prove it was fun.',
              'Paragraph 2 shows other kids having fun. The idea is about Hector.',
              'Paragraph 3 tells about Hector\'s wet pants. It does not show he had fun at the end.'],
            why: 'Paragraph 4 says Hector asked to come back next Saturday. We want to do fun things again. So Hector had fun skating in the end.' }
        ] }
    ],

    /* ─────────────── Level 4 · FK 3.5 · 140–200 words ─────────────── */
    4: [
      { title: 'A Call Across the Sea', genre: 'story',
        paragraphs: [
          'Ezra\'s grandma, Nana, lived down the hall from him. Nana\'s sister, Ruth, lived far away across the sea. When Ruth sent a letter, it took two whole weeks to get to Nana\'s mailbox. Some nights, Nana stared at an old photo of herself and Ruth as girls.',
          'For her birthday, Ezra\'s mom and dad gave Nana a tablet. Now she could call Ruth and see her face. Ezra took the tablet out of the box and plugged it in. Nana tapped the wrong button again and again.',
          'That night, Ezra wrote each step on a card in big, dark letters. The next day, Nana practiced with the card three times while Ezra sat next to her.',
          'On Saturday, Ruth\'s face filled the screen. Nana pressed a hand to her heart and laughed. The two sisters talked and talked for an hour. The next Sunday, Ezra\'s phone buzzed with a call from Nana\'s tablet.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Nana missed her sister?',
            choices: [
              'Some nights, Nana stared at an old photo of herself and Ruth as girls.',
              'Nana\'s sister, Ruth, lived far away across the sea.',
              'When Ruth sent a letter, it took two whole weeks to get to Nana\'s mailbox.',
              'For her birthday, Ezra\'s mom and dad gave Nana a tablet.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Ruth lived. Living far away does not show how Nana felt.',
              'Paragraph 1 tells how long a letter took. It does not show how Nana felt.',
              'Paragraph 2 tells about a gift. It does not show how Nana felt about her sister.'],
            why: 'Paragraph 1 says Nana stared at an old photo of herself and her sister. She did this on many nights. We look at photos of people we miss. So Nana missed her sister.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that the tablet was hard for Nana to use?',
            choices: [
              'Nana tapped the wrong button again and again.',
              'Ezra took the tablet out of the box and plugged it in.',
              'For her birthday, Ezra\'s mom and dad gave Nana a tablet.',
              'On Saturday, Ruth\'s face filled the screen.'
            ],
            kinds: [null, 'wrongwho', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 2 tells what Ezra did. It does not show how Nana did with the tablet.',
              'Paragraph 2 tells who gave Nana the tablet. It does not show what happened when she used it.',
              'Paragraph 4 tells about a call later on. It does not show any trouble.'],
            why: 'Paragraph 2 says Nana tapped the wrong button again and again. People tap the wrong button when they do not know how a thing works. So the tablet was hard for Nana to use.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Ezra found a way to make the tablet easier for Nana.',
            answer: 'That night, Ezra wrote each step on a card in big, dark letters.',
            notes: {
              'Ezra took the tablet out of the box and plugged it in.': 'Paragraph 2 tells how Ezra set up the tablet. Nana had not tried it yet.',
              'The next day, Nana practiced with the card three times while Ezra sat next to her.': 'Paragraph 3 tells what Nana did. The idea is about what Ezra made.'
            },
            why: 'Paragraph 3 says Ezra wrote each step on a card in big, dark letters. Big letters are easy to read. The steps tell what to do next. So Ezra found a way to make the tablet easier for Nana.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Nana learned to use the tablet by herself. Which sentence from the passage BEST supports this idea?',
            choices: [
              'The next Sunday, Ezra\'s phone buzzed with a call from Nana\'s tablet.',
              'The next day, Nana practiced with the card three times while Ezra sat next to her.',
              'On Saturday, Ruth\'s face filled the screen.',
              'Nana pressed a hand to her heart and laughed.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 3 shows Nana practiced. But Ezra sat next to her, so she was not by herself.',
              'Paragraph 4 says the call to Ruth worked. It does not say who made the call.',
              'Paragraph 4 shows how Nana felt on the call. It does not show she made a call by herself.'],
            why: 'Paragraph 4 says Ezra\'s phone got a call from Nana\'s tablet. Nana called Ezra, so Ezra was not there to help her. So Nana learned to use the tablet by herself.' }
        ] },

      { title: 'The Paper Plane Contest', genre: 'story',
        paragraphs: [
          'On Monday, Mr. Ford told the class about a paper plane contest in the gym. Every night that week, Yara folded planes at the kitchen table and threw each one down the long hall.',
          'On Friday, the class sat in a row along the gym wall. Yara\'s friend Otis threw his plane first. His plane flipped over and dove straight into the floor. Otis stared at his shoes and crumpled the plane in his fist.',
          'Yara knelt beside Otis and showed him how to fold a new plane with even wings. This time, his plane flew halfway across the gym, and Otis cheered.',
          'When it was Yara\'s turn, she gave her plane a soft push. Her plane sailed past all the rest and landed by the far wall.',
          'After the last throw, Mr. Ford walked over to the far wall with his tape measure. He picked up Yara\'s plane and asked her to teach the class how to fold it.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Yara worked hard to get ready for the contest?',
            choices: [
              'Every night that week, Yara folded planes at the kitchen table and threw each one down the long hall.',
              'On Monday, Mr. Ford told the class about a paper plane contest in the gym.',
              'When it was Yara\'s turn, she gave her plane a soft push.',
              'Her plane sailed past all the rest and landed by the far wall.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'wrongtime'],
            notes: [null,
              'Paragraph 1 tells about the contest. It does not show what Yara did to get ready.',
              'Paragraph 4 shows Yara on the day of the contest. It does not show how she got ready.',
              'Paragraph 4 tells how far her plane went. It does not show how she got ready.'],
            why: 'Paragraph 1 says Yara folded planes every night that week. She threw each one to test it. Doing a thing again and again is hard work. So Yara worked hard to get ready.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Otis was upset when his plane fell?',
            choices: [
              'Otis stared at his shoes and crumpled the plane in his fist.',
              'His plane flipped over and dove straight into the floor.',
              'Yara\'s friend Otis threw his plane first.',
              'This time, his plane flew halfway across the gym, and Otis cheered.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 2 tells what happened to the plane. It does not show how Otis felt.',
              'Paragraph 2 tells who went first. It does not show how Otis felt.',
              'Paragraph 3 is about a later throw. The idea is about how Otis felt when his plane fell.'],
            why: 'Paragraph 2 says Otis stared at his shoes. He crumpled the plane in his fist. People look down and squeeze things when they are upset. So Otis was upset when his plane fell.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Yara is a caring friend.',
            answer: 'Yara knelt beside Otis and showed him how to fold a new plane with even wings.',
            notes: {
              'Otis stared at his shoes and crumpled the plane in his fist.': 'Paragraph 2 tells what Otis did. It does not show what Yara did.',
              'This time, his plane flew halfway across the gym, and Otis cheered.': 'Paragraph 3 tells how the new plane flew. It does not show what Yara did.'
            },
            why: 'Paragraph 3 says Yara knelt by Otis and showed him how to fold a new plane. Otis was upset, and Yara helped him. A caring friend helps when a friend is sad. So Yara is a caring friend.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Mr. Ford thought Yara made a great plane. Which sentence from the passage BEST supports this idea?',
            choices: [
              'He picked up Yara\'s plane and asked her to teach the class how to fold it.',
              'After the last throw, Mr. Ford walked over to the far wall with his tape measure.',
              'Her plane sailed past all the rest and landed by the far wall.',
              'Yara knelt beside Otis and showed him how to fold a new plane with even wings.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 5 tells where Mr. Ford walked. It does not show what he thought of the plane.',
              'Paragraph 4 shows how far the plane went. But it does not show what Mr. Ford thought.',
              'Paragraph 3 tells what Yara did for Otis. It does not show what Mr. Ford thought.'],
            why: 'Paragraph 5 says Mr. Ford asked Yara to teach the class how to fold her plane. A teacher asks you to teach others when you did something well. So Mr. Ford thought Yara made a great plane.' }
        ] }
    ],

    /* ─────────────── Level 5 · FK 4.0 · 170–240 words ─────────────── */
    5: [
      { title: 'Grandpa\'s Red Bicycle', genre: 'story',
        paragraphs: [
          'It was a warm spring afternoon, and Mateo was helping Grandpa clean out his garage. In the back corner, under a blue tarp, he found a red bike. The tires were flat, the chain was brown with rust, and a spider had spun a web between the spokes.',
          '"That was my bike when I was your age," Grandpa said quietly. He touched the handlebars and smiled at something far away. Then he went back to sweeping the floor. Mateo had an idea.',
          'Every day after school that week, Mateo worked on the bike. He scrubbed the rusty chain with an old toothbrush and dish soap. He pumped air into the tires and wiped the dust off the seat. When a bolt would not turn, he sprayed it with oil, waited an hour, and tried again.',
          'On Saturday, Mateo rolled the bike into the driveway and rang its new silver bell. Grandpa stepped onto the porch, and his eyes grew wide. Then he laughed, grabbed his helmet from a hook by the door, and asked if he could take the first ride.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that nobody had ridden the bike in a long time?',
            choices: [
              'The tires were flat, the chain was brown with rust, and a spider had spun a web between the spokes.',
              'In the back corner, under a blue tarp, he found a red bike.',
              '"That was my bike when I was your age," Grandpa said quietly.',
              'Every day after school that week, Mateo worked on the bike.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 1 tells where the bike was. A tarp could cover a bike for one night. It does not show how long the bike sat there.',
              'Paragraph 2 tells whose bike it was long ago. It does not show that no one rode it since then.',
              'Paragraph 3 tells what Mateo did later. It does not show how the bike was before.'],
            why: 'Paragraph 1 says the tires were flat and the chain was rusty. A spider had spun a web in the spokes. A ride would break the web. So nobody had ridden the bike in a long time.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Grandpa has happy memories of the bike?',
            choices: [
              'He touched the handlebars and smiled at something far away.',
              '"That was my bike when I was your age," Grandpa said quietly.',
              'Grandpa stepped onto the porch, and his eyes grew wide.',
              'It was a warm spring afternoon, and Mateo was helping Grandpa clean out his garage.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'notproof'],
            notes: [null,
              'Paragraph 2 tells that the bike was Grandpa\'s. It does not show how he feels about it.',
              'Paragraph 4 shows Grandpa was surprised later. It is not about his memories.',
              'Paragraph 1 tells what Mateo was doing. It does not show how Grandpa feels.'],
            why: 'Paragraph 2 says Grandpa smiled at something far away. That means he was thinking about the past. He smiled, so the memory was a happy one.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Mateo is patient.',
            answer: 'When a bolt would not turn, he sprayed it with oil, waited an hour, and tried again.',
            notes: {
              'Every day after school that week, Mateo worked on the bike.': 'Paragraph 3 shows Mateo worked hard all week. That is true. But it does not show him waiting calmly.',
              'He scrubbed the rusty chain with an old toothbrush and dish soap.': 'Paragraph 3 shows Mateo cleaned the chain. It does not show him waiting.'
            },
            why: 'Paragraph 3 says Mateo waited an hour and then tried the bolt again. Patient means you can wait calmly and not get upset. So Mateo is patient.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Grandpa was excited to ride the bike again. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Then he laughed, grabbed his helmet from a hook by the door, and asked if he could take the first ride.',
              'Grandpa stepped onto the porch, and his eyes grew wide.',
              'On Saturday, Mateo rolled the bike into the driveway and rang its new silver bell.',
              'He touched the handlebars and smiled at something far away.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongtime'],
            notes: [null,
              'Paragraph 4 shows Grandpa was surprised. It does not show he wanted to ride.',
              'Paragraph 4 tells what Mateo did. It does not show how Grandpa felt.',
              'Paragraph 2 happened before the bike was fixed. It shows a memory, not a wish to ride.'],
            why: 'Paragraph 4 says Grandpa grabbed his helmet and asked to take the first ride. He did not want to wait. So Grandpa was excited to ride the bike again.' }
        ] },

      { title: 'The Blackout on Elm Street', genre: 'story',
        paragraphs: [
          'Snow fell all afternoon. By dinnertime, the wind was howling between the tall buildings on Elm Street. Suddenly, the lights in the apartment blinked twice and went out.',
          'Ana\'s little brother, Luis, grabbed her arm and squeezed it tight. Ana found a flashlight in the kitchen drawer. She made shadow animals on the wall until Luis started to giggle. First she made a dog, then a duck, and then a bunny with big ears.',
          'Mom lit two candles and set them on the table. Then she looked out the frosty window. "Miss Hattie lives alone downstairs," she said, frowning. Mom picked up a wool blanket and a thermos of hot soup and headed for the door.',
          'Ana and Luis followed her down the dark stairs with the flashlight. Miss Hattie opened her door wrapped in three sweaters, and her hands were shaking. Miss Hattie hugged the thermos and said, "I was hoping someone would remember me."',
          'The four of them ate soup by candlelight in Miss Hattie\'s kitchen until the lights came back on.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Luis was afraid of the dark?',
            choices: [
              'Ana\'s little brother, Luis, grabbed her arm and squeezed it tight.',
              'Suddenly, the lights in the apartment blinked twice and went out.',
              'She made shadow animals on the wall until Luis started to giggle.',
              'Ana and Luis followed her down the dark stairs with the flashlight.'
            ],
            kinds: [null, 'notproof', 'opposite', 'notproof'],
            notes: [null,
              'Paragraph 1 tells what happened to the lights. It does not show how Luis felt.',
              'Paragraph 2 tells about the shadow animals. Kids do not giggle when they are afraid.',
              'Paragraph 4 tells where Luis went. It does not show he was afraid.'],
            why: 'Paragraph 2 says Luis grabbed Ana\'s arm and squeezed it tight. The lights had just gone out. Kids hold on tight when they are scared. So Luis was afraid of the dark.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Ana knew how to help her brother feel better?',
            choices: [
              'She made shadow animals on the wall until Luis started to giggle.',
              'Ana found a flashlight in the kitchen drawer.',
              'Ana\'s little brother, Luis, grabbed her arm and squeezed it tight.',
              'Mom lit two candles and set them on the table.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              'Paragraph 2 says Ana found a flashlight. Finding it does not show she made Luis feel better.',
              'Paragraph 2 shows how Luis felt. It does not show what Ana did.',
              'Paragraph 3 tells what Mom did, not Ana.'],
            why: 'Paragraph 2 says Ana made shadow animals until Luis giggled. Giggling means Luis felt better. So Ana knew how to help him.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Mom wanted to help Miss Hattie.',
            answer: 'Mom picked up a wool blanket and a thermos of hot soup and headed for the door.',
            notes: {
              '"Miss Hattie lives alone downstairs," she said, frowning.': 'Paragraph 3 shows Mom was worried. The next sentence shows what she did to help.',
              'Ana and Luis followed her down the dark stairs with the flashlight.': 'Paragraph 4 tells what Ana and Luis did. The idea is about Mom.',
              'The four of them ate soup by candlelight in Miss Hattie\'s kitchen until the lights came back on.': 'Paragraph 5 tells what all four of them did at the end. The proof is what Mom chose to do in paragraph 3.'
            },
            why: 'Paragraph 3 says Mom took a blanket and hot soup to the door. A blanket and soup help someone stay warm. So Mom wanted to help Miss Hattie.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Miss Hattie was glad her neighbors came. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Miss Hattie hugged the thermos and said, "I was hoping someone would remember me."',
              'Miss Hattie opened her door wrapped in three sweaters, and her hands were shaking.',
              '"Miss Hattie lives alone downstairs," she said, frowning.',
              'Mom picked up a wool blanket and a thermos of hot soup and headed for the door.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              'Paragraph 4 shows Miss Hattie was cold. It does not show she was glad.',
              'Paragraph 3 is what Mom said. It does not show how Miss Hattie felt.',
              'Paragraph 3 tells what Mom did. It does not show how Miss Hattie felt.'],
            why: 'Paragraph 4 says Miss Hattie hugged the thermos of soup. She said she hoped someone would remember her. Someone did. So Miss Hattie was glad her neighbors came.' }
        ] }
    ],

    /* ─────────────── Level 6 · FK 4.5 · 200–280 words ─────────────── */
    6: [
      { title: 'The Wall on Baker Street', genre: 'story',
        paragraphs: [
          'The brick wall beside the corner store on Baker Street was covered in peeling paint and scribbles. People hurried past it with their eyes on the sidewalk.',
          'One Saturday, Leo rolled up on his skateboard. Dora, who owned the corner store, was scrubbing the wall with a stiff brush. Her forehead was wet with sweat, and she kept stopping to rub her back. Leo set down his skateboard, grabbed a second brush, and began to scrub beside her.',
          'By noon, the wall was clean, but it was still plain and gray. Leo ran home to get his notebook. Leo showed Dora a sketch of the city skyline that he had drawn. Dora held the notebook up to the wall, squinted, and slowly began to nod.',
          'The next weekend, a dozen neighbors arrived with paint cans, rollers, and ladders. Leo\'s sketch was taped to the wall so that everyone could follow it. Kids painted the bottom, and grown-ups on ladders painted the tall buildings at the top. When the last window was painted, Leo stood across the street with his hands on his hips and grinned at the wall.',
          'Now people slow down when they pass the corner. Some even stop to take pictures in front of the bright wall.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that people did not like the wall at first?',
            choices: [
              'People hurried past it with their eyes on the sidewalk.',
              'The brick wall beside the corner store on Baker Street was covered in peeling paint and scribbles.',
              'By noon, the wall was clean, but it was still plain and gray.',
              'Now people slow down when they pass the corner.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 1 tells how the wall looked. It does not show what people did or felt.',
              'Paragraph 3 tells how the wall looked after it was cleaned. It is not about how people felt.',
              'Paragraph 5 tells how people act now, at the end. The idea is about the start.'],
            why: 'Paragraph 1 says people hurried past the wall and looked down at the sidewalk. We do not stop to look at things we do not like. So people did not like the wall at first.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Leo is a helpful person?',
            choices: [
              'Leo set down his skateboard, grabbed a second brush, and began to scrub beside her.',
              'Dora, who owned the corner store, was scrubbing the wall with a stiff brush.',
              'Her forehead was wet with sweat, and she kept stopping to rub her back.',
              'Kids painted the bottom, and grown-ups on ladders painted the tall buildings at the top.'
            ],
            kinds: [null, 'wrongwho', 'wrongwho', 'wrongwho'],
            notes: [null,
              'Paragraph 2 tells what Dora was doing. It does not show what Leo did.',
              'Paragraph 2 shows Dora was tired. It is about Dora, not Leo.',
              'Paragraph 4 shows the neighbors helped. The idea is about Leo.'],
            why: 'Paragraph 2 says Leo grabbed a brush and scrubbed beside Dora. Dora was tired, so Leo stopped what he was doing to help her. So Leo is a helpful person.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Leo was proud of the finished wall.',
            answer: 'When the last window was painted, Leo stood across the street with his hands on his hips and grinned at the wall.',
            notes: {
              'Leo\'s sketch was taped to the wall so that everyone could follow it.': 'Paragraph 4 shows the neighbors used Leo\'s sketch. It does not show how Leo felt.',
              'Some even stop to take pictures in front of the bright wall.': 'Paragraph 5 tells what other people do now. It does not show how Leo felt.'
            },
            why: 'Paragraph 4 says Leo stood with his hands on his hips and grinned at the wall. People stand and smile like that when they are proud. So Leo was proud of the wall.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Dora liked Leo\'s idea for the wall. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Dora held the notebook up to the wall, squinted, and slowly began to nod.',
              'Leo showed Dora a sketch of the city skyline that he had drawn.',
              'By noon, the wall was clean, but it was still plain and gray.',
              'Dora, who owned the corner store, was scrubbing the wall with a stiff brush.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 3 says Leo showed Dora his sketch. It does not show what Dora thought of it.',
              'Paragraph 3 tells how the wall looked. It does not show what Dora thought of the idea.',
              'Paragraph 2 tells what Dora did before she saw the sketch. It does not show what she thought of it.'],
            why: 'Paragraph 3 says Dora held the sketch up to the wall and began to nod. A nod means yes. So Dora liked Leo\'s idea.' }
        ] },

      { title: 'The Dog With the Green Collar', genre: 'story',
        paragraphs: [
          'On her way home from the library, Nadia spotted a small brown dog sitting under a bench in the park. The dog wore a green collar with a tiny silver bell, and its fur was clean and neatly brushed.',
          'When Nadia knelt down, the dog crept out from under the bench and wagged its tail. She broke off half of her leftover turkey sandwich, and the dog gulped it down in two bites. Nadia waited on the bench for a long time. No one came to look for the dog.',
          'Nadia carried the dog home and named him Pickles. She had always wanted a dog, and Pickles curled up on her lap as if he had lived there forever. But that night, she lay awake for hours, staring at the ceiling and thinking about the green collar.',
          'The next morning, Nadia and her father taped signs to the light poles near the park. Before lunch, the phone rang. An hour later, a boy about Nadia\'s age came running up the front steps. The dog leaped out of Nadia\'s arms and licked the boy\'s face again and again.',
          'Nadia\'s eyes stung as she waved goodbye. Still, when her father squeezed her shoulder, she nodded and gave a small smile.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the dog had an owner who cared for it?',
            choices: [
              'The dog wore a green collar with a tiny silver bell, and its fur was clean and neatly brushed.',
              'On her way home from the library, Nadia spotted a small brown dog sitting under a bench in the park.',
              'When Nadia knelt down, the dog crept out from under the bench and wagged its tail.',
              'She broke off half of her leftover turkey sandwich, and the dog gulped it down in two bites.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Nadia found the dog. It does not show that someone cared for it.',
              'Paragraph 2 shows the dog was friendly. It does not show that it had an owner.',
              'Paragraph 2 shows Nadia fed the dog. Nadia is not the owner.'],
            why: 'Paragraph 1 says the dog wore a collar, and its fur was clean and brushed. Someone has to buy a collar and brush a dog. So the dog had an owner who cared for it.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that the dog was very hungry?',
            choices: [
              'She broke off half of her leftover turkey sandwich, and the dog gulped it down in two bites.',
              'When Nadia knelt down, the dog crept out from under the bench and wagged its tail.',
              'The dog wore a green collar with a tiny silver bell, and its fur was clean and neatly brushed.',
              'Nadia carried the dog home and named him Pickles.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 2 shows the dog was friendly. Wagging its tail does not show it was hungry.',
              'Paragraph 1 tells how the dog looked. It does not show it was hungry.',
              'Paragraph 3 tells what Nadia did. It does not show the dog was hungry.'],
            why: 'Paragraph 2 says the dog gulped down half a sandwich in two bites. Animals eat fast when they are very hungry. So the dog was very hungry.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Nadia was not sure she should keep the dog.',
            answer: 'But that night, she lay awake for hours, staring at the ceiling and thinking about the green collar.',
            notes: {
              'The next morning, Nadia and her father taped signs to the light poles near the park.': 'Paragraph 4 shows what Nadia did after she made up her mind. The idea is about the night before, when she was not sure.',
              'Nadia\'s eyes stung as she waved goodbye.': 'Paragraph 5 shows Nadia was sad to say goodbye. It does not show she was not sure.',
              'She had always wanted a dog, and Pickles curled up on her lap as if he had lived there forever.': 'Paragraph 3 shows why Nadia wanted to keep the dog. It does not show she was not sure.'
            },
            why: 'Paragraph 3 says Nadia lay awake for hours thinking about the green collar. A collar means the dog has an owner. She could not sleep, so she was not sure she should keep him.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that the dog knew the boy. Which sentence from the passage BEST supports this idea?',
            choices: [
              'The dog leaped out of Nadia\'s arms and licked the boy\'s face again and again.',
              'An hour later, a boy about Nadia\'s age came running up the front steps.',
              'Before lunch, the phone rang.',
              'The next morning, Nadia and her father taped signs to the light poles near the park.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 4 says a boy came running. It does not show what the dog did.',
              'Paragraph 4 says the phone rang. It does not show that the dog knew anyone.',
              'Paragraph 4 tells about the signs. It does not show the dog knew the boy.'],
            why: 'Paragraph 4 says the dog leaped to the boy and licked his face again and again. Dogs act like that with people they love. So the dog knew the boy.' }
        ] }
    ]
  }
};
