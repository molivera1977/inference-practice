/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE — clue · Find the Clue
   Cards teach: passage, clue, infer, BEST, how to look back, and how to click
   a sentence. Every level: 2 story passages × 4 questions =
   C01 hot (paragraph) · C02 hot (whole passage) · C03 mc evidence · C04 mc chart
   C05 hot (paragraph) · C06 hot (whole passage) · C07 mc evidence · C08 mc chart
   Each level has its own new stories (a student who climbs never meets the same
   answers twice). Checked by: node tools/check-levels.js clue
═══════════════════════════════════════════════════════ */
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.clue = {
  cards: [
    { title: 'What Is a Clue?', blocks: [
      { p: 'The author does not tell you everything. The author leaves clues.' },
      { term: 'passage', means: 'the story or article you read on a test' },
      { term: 'clue', means: 'a detail that helps you figure something out', ex: 'The dog has mud on its paws. That is a clue.' },
      { term: 'infer', means: 'to figure out something the author does not say', ex: 'I infer that the dog was outside.' },
      { chart: { facts: 'The dog has mud on its paws.', know: 'Mud is outside in the yard.', conclusion: 'The dog was outside.' } }
    ] },
    { title: 'Look Back in the Passage', blocks: [
      { p: 'The passage stays on the screen. Go back and look!' },
      { rows: [
        ['1', 'Read the question. What does it ask you to show?'],
        ['2', 'Does it say a paragraph number? Look only in that paragraph.'],
        ['3', 'Read the sentences one at a time.'],
        ['4', 'Find the sentence that shows it the most. That is your clue.']
      ] },
      { term: 'BEST supports', means: 'proves the answer the most' },
      { p: 'A question can also say BEST shows. It means the same thing. Pick the sentence that shows it the most.' }
    ] },
    { title: 'Click on the Sentence', blocks: [
      { p: 'Some test questions say "Click on the sentence." You answer right in the passage.' },
      { rows: [
        ['1', 'Tap a sentence in the passage.'],
        ['2', 'The sentence turns yellow.'],
        ['3', 'Read it again. Does it show what the question asks? If not, tap a different sentence.'],
        ['4', 'Tap "That\'s My Answer!"']
      ] }
    ] },
    { title: 'Try It', blocks: [
      { quote: 'Pia came into class. Her hair was dripping wet. She sat down at her desk.' },
      { ask: 'Click on the sentence in the passage that BEST shows it is raining outside.' },
      { good: 'Her hair was dripping wet.', why: 'Wet hair is a clue. Rain makes your hair wet.' },
      { bad: 'She sat down at her desk.', why: 'This sentence is true. But it is not a clue about the rain.' }
    ] }
  ],

  levels: {
    /* ───────── Level 1 · FK 2.0 ───────── */
    1: [
      { title: 'Biscuit and the Red Leash', genre: 'story',
        paragraphs: [
          'When Kai got home from school, his dog Biscuit jumped up and down. Biscuit\'s tail wagged so fast that it looked like a blur.',
          'Kai dropped his heavy backpack on the kitchen table. He got a cold glass of milk from the fridge. Then Biscuit ran over with his red leash in his mouth. Kai drank his milk in three big gulps.',
          'Kai and Biscuit walked down the street to the park. Outside, Kai could see his breath like a little white cloud. They walked two times around the big pond.',
          'When they got back home, Biscuit flopped on his bed and shut his eyes.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Biscuit wants to go for a walk.',
            para: 2,
            answer: 'Then Biscuit ran over with his red leash in his mouth.',
            notes: {
              'Kai drank his milk in three big gulps.': 'This sentence is about Kai and his milk. Look for what Biscuit does.',
              'He got a cold glass of milk from the fridge.': 'This sentence is about Kai and his milk. It is not a clue about a walk.'
            },
            why: 'Paragraph 2 says Biscuit ran over with his leash in his mouth. A dog wears a leash on a walk. So Biscuit wants to go for a walk.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Biscuit is tired after the walk.',
            answer: 'When they got back home, Biscuit flopped on his bed and shut his eyes.',
            notes: {
              'They walked two times around the big pond.': 'This tells how long the walk was. It does not show how Biscuit acts after the walk.',
              'Biscuit\'s tail wagged so fast that it looked like a blur.': 'This is before the walk. A fast tail does not show a tired dog.'
            },
            why: 'Paragraph 4 says Biscuit flopped on his bed and shut his eyes. Dogs do that when they are tired. So Biscuit is tired after the walk.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that it is cold outside?',
            choices: [
              'Outside, Kai could see his breath like a little white cloud.',
              'He got a cold glass of milk from the fridge.',
              'Kai and Biscuit walked down the street to the park.',
              'When they got back home, Biscuit flopped on his bed and shut his eyes.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 2 says the milk was cold. The milk was cold from the fridge. That does not show it is cold outside.',
              'Paragraph 3 says they walked to the park. It does not tell how the air felt.',
              'Paragraph 4 is about Biscuit after the walk. It is not a clue about the cold.'],
            why: 'Paragraph 3 says Kai could see his breath like a little cloud. You can see your breath when the air is cold. So it is cold outside.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'Biscuit is happy that Kai is home.',
              'Biscuit is mad at Kai for coming home late.',
              'Biscuit wants to go to sleep on his bed.',
              'Kai is going to give Biscuit a bath.'
            ],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null,
              'Paragraph 1 says Biscuit jumped and wagged his tail. A mad dog does not act like that.',
              'Paragraph 1 says Biscuit jumped up and down. A sleepy dog does not jump.',
              'Paragraph 1 does not say anything about a bath.'],
            why: 'Paragraph 1 says Biscuit jumped up and down. It says his tail wagged fast. Dogs do that when they are happy. So Biscuit is happy that Kai is home.',
            chart: { facts: 'Biscuit jumps up and down, and his tail wags fast.', know: 'Dogs jump and wag their tails when they are happy.', conclusion: 'Biscuit is happy that Kai is home.' } }
        ] },

      { title: 'Who Took the Pink Cupcake?', genre: 'story',
        paragraphs: [
          'Mom put twelve pink cupcakes and nine candles on the kitchen table. Mom told Ana, "Your friends will be here at noon."',
          'Ana went to her room to put on her new dress. When she came back, one cupcake was gone!',
          'Ana went into the living room to find Mom. Mom was busy folding towels on the couch. Ana\'s little brother, Teo, sat on the floor with a book. Teo had pink frosting all over his chin.',
          'Teo gave Ana a sticky, pink smile. Ana laughed and gave Teo a big hug. Then Ana put the cupcakes up on a high shelf.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 3 that shows Teo ate the missing cupcake.',
            para: 3,
            answer: 'Teo had pink frosting all over his chin.',
            notes: {
              'Ana\'s little brother, Teo, sat on the floor with a book.': 'This tells where Teo is. It does not show what he ate.',
              'Mom was busy folding towels on the couch.': 'This sentence is about Mom, not Teo.'
            },
            why: 'Paragraph 3 says Teo had pink frosting on his chin. The missing cupcake was pink. So Teo ate the missing cupcake.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Ana is not mad at Teo.',
            answer: 'Ana laughed and gave Teo a big hug.',
            notes: {
              'Teo gave Ana a sticky, pink smile.': 'This shows what Teo does. Look for what Ana does.',
              'Then Ana put the cupcakes up on a high shelf.': 'This tells what Ana does with the cupcakes. It does not show how she feels about Teo.'
            },
            why: 'Paragraph 4 says Ana laughed and gave Teo a hug. People do not hug someone they are mad at. So Ana is not mad at Teo.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Ana wants to keep the rest of the cupcakes safe?',
            choices: [
              'Then Ana put the cupcakes up on a high shelf.',
              'Mom put twelve pink cupcakes and nine candles on the kitchen table.',
              'Ana went to her room to put on her new dress.',
              'Ana laughed and gave Teo a big hug.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Mom put the cupcakes. It does not show Ana keeping them safe.',
              'Paragraph 2 is about Ana\'s dress. It is not about keeping the cupcakes safe.',
              'Paragraph 4 says Ana hugged Teo. That shows she is not mad. It does not show her keeping the cupcakes safe.'],
            why: 'Paragraph 4 says Ana put the cupcakes up on a high shelf. A little kid like Teo cannot reach a high shelf. So Ana wants to keep the rest of the cupcakes safe.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'Ana is having a birthday party today.',
              'Ana is going to a party at a friend\'s house.',
              'Mom is going to sell the cupcakes at a store.',
              'Teo is having a birthday party today.'
            ],
            kinds: [null, 'opposite', 'noclue', 'wrongwho'],
            notes: [null,
              'Paragraph 1 says Ana\'s friends will come here. So the party is at Ana\'s house.',
              'Paragraph 1 does not say anything about a store.',
              'Paragraph 1 says Ana\'s friends are coming. So the party is for Ana, not Teo.'],
            why: 'Paragraph 1 says Mom set out cupcakes and nine candles. It says Ana\'s friends will come at noon. Cupcakes, candles, and friends are part of a birthday party. So Ana is having a birthday party.',
            chart: { facts: 'Mom sets out cupcakes and nine candles, and Ana\'s friends are coming.', know: 'People have cupcakes, candles, and friends at a birthday party.', conclusion: 'Ana is having a birthday party today.' } }
        ] }
    ],

    /* ───────── Level 2 · FK 2.5 ───────── */
    2: [
      { title: 'A Fish for Wes', genre: 'story',
        paragraphs: [
          'Grandpa tapped on Wes\'s bedroom door and whispered his name. Wes rubbed his eyes and looked out the window. The sky was still dark, and the stars were shining.',
          'They drove to the lake in Grandpa\'s old pickup truck. Wes carried the bucket of worms down to the wooden dock. Grandpa tied a hook on each line faster than Wes could blink. Then they sat down together and waited.',
          'For a long time, Wes watched his red bobber float on the water. Then the bobber went under with a plop! Wes had to hold on with both hands and pull as hard as he could.',
          'At last, a shiny silver fish came flopping out of the lake. Grandpa grinned and patted Wes on the back. Wes could not stop smiling all the way home.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Grandpa has gone fishing many times before.',
            para: 2,
            answer: 'Grandpa tied a hook on each line faster than Wes could blink.',
            notes: {
              'They drove to the lake in Grandpa\'s old pickup truck.': 'This tells how they got to the lake. It does not show that Grandpa has fished a lot.',
              'Wes carried the bucket of worms down to the wooden dock.': 'This sentence is about Wes, not Grandpa.'
            },
            why: 'Paragraph 2 says Grandpa tied the hooks faster than Wes could blink. You get fast at a job when you do it many times. So Grandpa has gone fishing many times before.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows the fish is big.',
            answer: 'Wes had to hold on with both hands and pull as hard as he could.',
            notes: {
              'Then the bobber went under with a plop!': 'This shows a fish took the hook. It does not show how big the fish is.',
              'At last, a shiny silver fish came flopping out of the lake.': 'This tells what the fish looked like. It does not tell how big it was.'
            },
            why: 'Paragraph 3 says Wes had to use both hands and pull hard. A small fish is easy to pull in. So the fish is big.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Grandpa is proud of Wes?',
            choices: [
              'Grandpa grinned and patted Wes on the back.',
              'Grandpa tied a hook on each line faster than Wes could blink.',
              'Grandpa tapped on Wes\'s bedroom door and whispered his name.',
              'Wes could not stop smiling all the way home.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 2 shows Grandpa is good at fishing. It does not show how he feels about Wes.',
              'Paragraph 1 shows Grandpa tapping on Wes\'s door. That is before Wes catches the fish.',
              'Paragraph 4 says Wes was smiling. That shows how Wes feels, not Grandpa.'],
            why: 'Paragraph 4 says Grandpa grinned and patted Wes on the back. People do that when someone does a good job. So Grandpa is proud of Wes.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'Grandpa woke Wes up before the sun came up.',
              'Wes stayed up all night to look at the stars.',
              'It is the middle of a hot, sunny afternoon.',
              'Grandpa is too sick to get out of bed today.'
            ],
            kinds: [null, 'toofar', 'opposite', 'opposite'],
            notes: [null,
              'Paragraph 1 says Wes rubbed his eyes after Grandpa tapped. That shows Wes was asleep, not up all night.',
              'Paragraph 1 says the sky was dark and the stars were out. That is not a sunny afternoon.',
              'Paragraph 1 says Grandpa tapped on the door. He is up, not sick in bed.'],
            why: 'Paragraph 1 says Grandpa tapped and whispered, and Wes rubbed his eyes. It says the sky was still dark. People rub their eyes when they wake up. The sky is dark before the sun comes up. So Grandpa woke Wes up before the sun came up.',
            chart: { facts: 'Wes rubs his eyes, and the sky is still dark.', know: 'People rub their eyes when they wake up, and it is dark before the sun comes up.', conclusion: 'Grandpa woke Wes up before the sun came up.' } }
        ] },

      { title: 'Miss Ivy\'s Missing Glasses', genre: 'story',
        paragraphs: [
          'Miss Ivy lived across the hall from June. One day, June heard Miss Ivy call her name.',
          'June found Miss Ivy standing in the middle of her living room. Couch pillows were on the floor, and every drawer was wide open. She was still in her fuzzy blue slippers. Miss Ivy held a letter right up to her nose.',
          '"I can\'t find my glasses anywhere," Miss Ivy said. June looked on the kitchen table and under the bed. Then June looked up at Miss Ivy and started to giggle. Something shiny was sitting on top of Miss Ivy\'s gray curls.',
          'Miss Ivy slid her glasses on and read her letter at last. She laughed so hard that her cheeks turned pink. Then she gave June a big hug and a plate of warm cookies.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Miss Ivy cannot see well.',
            para: 2,
            answer: 'Miss Ivy held a letter right up to her nose.',
            notes: {
              'Couch pillows were on the floor, and every drawer was wide open.': 'This tells about the pillows and the drawers. It does not show how well Miss Ivy can see.',
              'She was still in her fuzzy blue slippers.': 'This tells what Miss Ivy was wearing. It is not a clue about how she sees.'
            },
            why: 'Paragraph 2 says Miss Ivy held a letter right up to her nose. People hold things close when they cannot see them well. So Miss Ivy cannot see well.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows where Miss Ivy\'s glasses were the whole time.',
            answer: 'Something shiny was sitting on top of Miss Ivy\'s gray curls.',
            notes: {
              'Then June looked up at Miss Ivy and started to giggle.': 'This shows June saw something funny. The next sentence tells what she saw.',
              'June looked on the kitchen table and under the bed.': 'This tells where June looked. The glasses were not there.',
              'Miss Ivy slid her glasses on and read her letter at last.': 'This shows Miss Ivy found her glasses. It does not show where they were.'
            },
            why: 'Paragraph 3 says something shiny was on top of Miss Ivy\'s curls. Glasses are shiny. People push glasses up on their head and forget. So the glasses were on her head the whole time.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Miss Ivy has looked all over her home?',
            choices: [
              'Couch pillows were on the floor, and every drawer was wide open.',
              'June looked on the kitchen table and under the bed.',
              'June found Miss Ivy standing in the middle of her living room.',
              'One day, June heard Miss Ivy call her name.'
            ],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 3 says June looked in those places. That is about June, not Miss Ivy.',
              'Paragraph 2 tells where Miss Ivy was standing. It does not show that she looked all over.',
              'Paragraph 1 says Miss Ivy called June. It does not show where Miss Ivy looked.'],
            why: 'Paragraph 2 says the pillows were on the floor and every drawer was open. People pull things out like that when they look for something. So Miss Ivy has looked all over her home.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 4,
            q: 'Read paragraph 4. What can you infer from the clues in paragraph 4?',
            choices: [
              'Miss Ivy is thankful that June helped her.',
              'Miss Ivy is upset that June laughed at her.',
              'Miss Ivy wants June to go back home now.',
              'Miss Ivy made the cookies for a big party.'
            ],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null,
              'Paragraph 4 says Miss Ivy laughed too, and she hugged June. She is not upset.',
              'Paragraph 4 says Miss Ivy gave June a hug and cookies. That is not how you tell someone to go.',
              'Paragraph 4 does not say anything about a party.'],
            why: 'Paragraph 4 says Miss Ivy gave June a big hug. It says she gave June warm cookies. People give hugs and treats to say thank you. So Miss Ivy is thankful that June helped her.',
            chart: { facts: 'Miss Ivy hugs June and gives her a plate of cookies.', know: 'People give hugs and treats to say thank you.', conclusion: 'Miss Ivy is thankful that June helped her.' } }
        ] }
    ],

    /* ───────── Level 3 · FK 3.0 ───────── */
    3: [
      { title: 'Halftime for the Tigers', genre: 'story',
        paragraphs: [
          'Dev pulled on his orange Tigers shirt and tied his soccer cleats tight. His big sister, Lily, drove him to the field after lunch. Brown puddles sat all along the edge of the field.',
          'At halftime, the Tigers sat on the bench and drank cold water. Dev wiped his face with the bottom of his shirt. Coach Ray said, "We can still catch up if we pass the ball to each other more." Lily waved to Dev from the very top row of the stands.',
          'In the second half, Dev passed the ball to his friend Noah, and Noah kicked it right back to him. Dev took a big swing with his right foot. The goalie dove for the ball, but her hands only touched the air. All the Tigers ran over and piled on top of Dev.',
          'After the game, Lily gave Dev a high five and a cold juice box. Dev fell asleep in the car before they even got home.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows the Tigers are losing at halftime.',
            para: 2,
            answer: 'Coach Ray said, "We can still catch up if we pass the ball to each other more."',
            notes: {
              'Dev wiped his face with the bottom of his shirt.': 'This shows Dev is hot and sweaty. It does not show who is winning.',
              'At halftime, the Tigers sat on the bench and drank cold water.': 'Teams drink water at halftime when they win and when they lose. This is not a clue about the score.'
            },
            why: 'Paragraph 2 says Coach Ray told the team they can still catch up. You only need to catch up when you are behind. So the Tigers are losing at halftime.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Dev is tired after the game.',
            answer: 'Dev fell asleep in the car before they even got home.',
            notes: {
              'Dev wiped his face with the bottom of his shirt.': 'This happens at halftime, not after the game.',
              'After the game, Lily gave Dev a high five and a cold juice box.': 'This is what Lily does after the game. It does not show that Dev is tired.'
            },
            why: 'Paragraph 4 says Dev fell asleep in the car before they got home. People fall asleep fast when they are very tired. So Dev is tired after the game.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that it rained before the game?',
            choices: [
              'Brown puddles sat all along the edge of the field.',
              'At halftime, the Tigers sat on the bench and drank cold water.',
              'Dev wiped his face with the bottom of his shirt.',
              'His big sister, Lily, drove him to the field after lunch.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 2 says the team drank water. Drinking water does not show that it rained.',
              'Paragraph 2 says Dev wiped his face. That shows he was sweaty, not that it rained.',
              'Paragraph 1 tells how Dev got to the field. It is not a clue about rain.'],
            why: 'Paragraph 1 says brown puddles sat by the field. Puddles are left after it rains. So it rained before the game.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 3,
            q: 'Read paragraph 3. What can you infer from the clues in paragraph 3?',
            choices: [
              'Dev kicked the ball past the goalie for a goal.',
              'The goalie caught the ball with both of her hands.',
              'Noah kicked the ball into the net for a goal.',
              'Dev hurt his foot when he kicked the ball.'
            ],
            kinds: [null, 'opposite', 'wrongwho', 'noclue'],
            notes: [null,
              'Paragraph 3 says the goalie\'s hands only touched the air. She did not catch the ball.',
              'Paragraph 3 says Noah kicked the ball back to Dev. Dev took the last kick.',
              'Paragraph 3 does not say Dev got hurt. The team ran over to cheer, not to help.'],
            why: 'Paragraph 3 says the goalie dove but only touched air. It says the Tigers ran over and piled on Dev. A team does that when a player scores. So Dev kicked the ball past the goalie for a goal.',
            chart: { facts: 'The goalie misses the ball, and the team piles on Dev.', know: 'A team cheers and piles on a player who scores a goal.', conclusion: 'Dev kicked the ball past the goalie for a goal.' } }
        ] },

      { title: 'Under the Front Stairs', genre: 'story',
        paragraphs: [
          'Tess and Gran walked home from the corner store on a gray winter day. Long icicles hung from the roof of their building. Gran held Tess\'s hand tight as they climbed the icy steps.',
          'Under the front stairs, Tess heard a tiny sound. She bent down to look. A small gray kitten peeked out from the shadows. The kitten had no collar, and its fur was wet and dirty.',
          'The kitten shook all over and let out a sad little cry. Tess unzipped her coat and tucked the kitten inside, right next to her warm sweater.',
          'Upstairs, Gran set a small dish of tuna on the kitchen floor. The kitten gobbled up every bite of the tuna in less than a minute.',
          'Gran smiled and handed Tess an old, soft blanket. "I think this kitten is going to need a name," Gran said.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows the kitten might not have a home.',
            para: 2,
            answer: 'The kitten had no collar, and its fur was wet and dirty.',
            notes: {
              'A small gray kitten peeked out from the shadows.': 'This tells what Tess found. It does not show whether the kitten has a home.',
              'Under the front stairs, Tess heard a tiny sound.': 'This tells where Tess was. It is not a clue about a home.'
            },
            why: 'Paragraph 2 says the kitten had no collar. It says its fur was wet and dirty. A pet with a home often wears a collar and is kept clean. So the kitten might not have a home.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Tess wants to keep the kitten warm.',
            answer: 'Tess unzipped her coat and tucked the kitten inside, right next to her warm sweater.',
            notes: {
              'Gran smiled and handed Tess an old, soft blanket.': 'This is what Gran does. Look for what Tess does.',
              'The kitten shook all over and let out a sad little cry.': 'This shows how the kitten feels. It does not show what Tess does.'
            },
            why: 'Paragraph 3 says Tess tucked the kitten inside her coat, next to her sweater. A coat keeps you warm. So Tess wants to keep the kitten warm.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that the kitten was very hungry?',
            choices: [
              'The kitten gobbled up every bite of the tuna in less than a minute.',
              'Upstairs, Gran set a small dish of tuna on the kitchen floor.',
              'Gran held Tess\'s hand tight as they climbed the icy steps.',
              'Tess and Gran walked home from the corner store on a gray winter day.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 4 says Gran put out tuna. That shows the kitten got food. It does not show how hungry the kitten was.',
              'Paragraph 1 is about the icy steps. It is not about the kitten.',
              'Paragraph 1 is about the walk home. It is not about the kitten.'],
            why: 'Paragraph 4 says the kitten ate every bite in less than a minute. Animals eat fast when they are very hungry. So the kitten was very hungry.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 5,
            q: 'Read paragraph 5. What can you infer from the clues in paragraph 5?',
            choices: [
              'Gran is going to let Tess keep the kitten.',
              'Gran wants to give the kitten to a friend.',
              'Gran is afraid that the kitten will bite.',
              'The kitten already has a name from its owner.'
            ],
            kinds: [null, 'opposite', 'noclue', 'opposite'],
            notes: [null,
              'Paragraph 5 says Gran gave Tess a blanket and said the kitten needs a name. People name a pet they keep.',
              'Paragraph 5 says Gran smiled. She is not afraid.',
              'Paragraph 5 says the kitten is going to need a name. So it does not have one yet.'],
            why: 'Paragraph 5 says Gran handed Tess a blanket. It says Gran thinks the kitten needs a name. You give a name and a bed to a pet you keep. So Gran is going to let Tess keep the kitten.',
            chart: { facts: 'Gran gives Tess a blanket and says the kitten needs a name.', know: 'People give a name to a pet they are going to keep.', conclusion: 'Gran is going to let Tess keep the kitten.' } }
        ] }
    ],

    /* ───────── Level 4 · FK 3.5 ───────── */
    4: [
      { title: 'Paw Prints Across the Kitchen', genre: 'story',
        paragraphs: [
          'On Saturday morning, Tomas tiptoed down the stairs in his fuzzy socks. He stopped at the kitchen doorway and stared. A line of small, muddy paw prints went all the way across the floor. Mom had scrubbed that floor until it sparkled the night before.',
          'Tomas looked through the back door at the vegetable garden. The dirt was dark and soft, and water dripped from the leaves of the bean plants. The muddy trail started at the open window above the kitchen sink. The prints went down the counter, across the floor, and into the living room.',
          'Tomas had two pets. Moose was a giant brown dog with paws as wide as pancakes. Pumpkin was a tiny orange cat who loved climbing on everything. Moose was snoring on his bed by the stairs, and his paws were clean and dry.',
          'Tomas followed the prints to the couch. There sat Pumpkin, licking a brown smudge off her front paw. She blinked up at Tomas and gave a small meow.',
          'Tomas grabbed a wet rag and started scrubbing before Mom could wake up. Then he closed the window above the sink.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows it rained during the night.',
            para: 2,
            answer: 'The dirt was dark and soft, and water dripped from the leaves of the bean plants.',
            notes: {
              'The muddy trail started at the open window above the kitchen sink.': 'This shows where the muddy prints came in. It does not show why the dirt was wet.',
              'Tomas looked through the back door at the vegetable garden.': 'This tells where Tomas looked. The next sentence tells what he saw.'
            },
            why: 'Paragraph 2 says the dirt was soft and water dripped from the leaves. Rain makes dirt soft and leaves wet. So it rained during the night.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Pumpkin made the muddy paw prints.',
            answer: 'There sat Pumpkin, licking a brown smudge off her front paw.',
            notes: {
              'Pumpkin was a tiny orange cat who loved climbing on everything.': 'This shows Pumpkin could climb in the window. But it does not show mud on Pumpkin. Look for a sentence that does.',
              'Moose was snoring on his bed by the stairs, and his paws were clean and dry.': 'This sentence is about Moose. It does not show who made the prints.',
              'Tomas followed the prints to the couch.': 'This shows where the prints went. The next sentence shows who was there with mud on her paw.',
              'A line of small, muddy paw prints went all the way across the floor.': 'This shows the prints were small. It does not show whose prints they were.'
            },
            why: 'Paragraph 4 says the prints went to the couch. Pumpkin sat there, licking a brown smudge off her paw. Mud is brown. So Pumpkin made the muddy paw prints.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Tomas does not want Mom to see the mess?',
            choices: [
              'Tomas grabbed a wet rag and started scrubbing before Mom could wake up.',
              'Mom had scrubbed that floor until it sparkled the night before.',
              'Moose was snoring on his bed by the stairs, and his paws were clean and dry.',
              'He stopped at the kitchen doorway and stared.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells what Mom did the night before. It does not show what Tomas wants.',
              'Paragraph 3 is about Moose and his clean paws. It does not show what Tomas wants.',
              'Paragraph 1 shows Tomas was surprised. It does not show that he wants to hide the mess.'],
            why: 'Paragraph 5 says Tomas started cleaning before Mom could wake up. He wants the floor clean before she comes down. So Tomas does not want Mom to see the mess.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 3,
            q: 'Read paragraph 3. What can you infer from the clues in paragraph 3?',
            choices: [
              'Moose did not make the muddy paw prints.',
              'Moose climbed in through the open window.',
              'Pumpkin is afraid of the big brown dog.',
              'Moose was playing in the garden all night.'
            ],
            kinds: [null, 'opposite', 'noclue', 'opposite'],
            notes: [null,
              'Paragraph 3 says Moose is huge and his paws are clean. A huge dog with clean paws did not climb through the window.',
              'Paragraph 3 does not say Pumpkin is afraid of Moose.',
              'Paragraph 3 says Moose was snoring with clean, dry paws. He was not out in the wet garden.'],
            why: 'Paragraph 3 says Moose has paws as wide as pancakes. Paragraph 1 says the prints were small. Paragraph 3 also says his paws are clean and dry. Walking in mud makes paws dirty. So Moose did not make the muddy paw prints.',
            chart: { facts: 'Moose has huge paws, and they are clean and dry.', know: 'Walking in mud makes paws dirty.', conclusion: 'Moose did not make the muddy paw prints.' } }
        ] },

      { title: 'Lemonade on Elm Street', genre: 'story',
        paragraphs: [
          'It was the first day of summer. Jada and her cousin Rafi set up a card table at the end of Elm Street. Rafi taped a big sign to the front of the table. Jada carried out a heavy pitcher full of lemonade and clinking ice.',
          'Their first customer was Mr. Green from the yellow house next door. He paid with a five-dollar bill and told them to keep the change. By noon, all the ice in the pitcher had melted. Jada stacked the paper cups in a neat tower.',
          'Across the street, the park was full of kids playing tag and kickball. Jada had to run home three times to make more lemonade.',
          'At sunset, they counted the money in their jar. Jada pointed at the ice cream truck turning onto their street. Rafi grinned and grabbed two dollars from the jar.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows the day is very hot.',
            para: 2,
            answer: 'By noon, all the ice in the pitcher had melted.',
            notes: {
              'Jada stacked the paper cups in a neat tower.': 'This shows Jada likes things neat. It is not a clue about the weather.',
              'He paid with a five-dollar bill and told them to keep the change.': 'This is about Mr. Green and his money. It is not a clue about the weather.'
            },
            why: 'Paragraph 2 says all the ice melted by noon. Ice melts fast when it is hot. So the day is very hot.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Mr. Green wants to help Jada and Rafi.',
            answer: 'He paid with a five-dollar bill and told them to keep the change.',
            notes: {
              'Their first customer was Mr. Green from the yellow house next door.': 'This tells who Mr. Green is. The next sentence shows what he does to help.'
            },
            why: 'Paragraph 2 says Mr. Green paid with five dollars and told them to keep the change. The change is the extra money you get back. He let them keep it. So Mr. Green wants to help Jada and Rafi.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that a lot of people wanted lemonade?',
            choices: [
              'Jada had to run home three times to make more lemonade.',
              'Across the street, the park was full of kids playing tag and kickball.',
              'Jada carried out a heavy pitcher full of lemonade and clinking ice.',
              'Rafi taped a big sign to the front of the table.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 3 says the park was full of kids. But playing tag does not show that they wanted lemonade.',
              'Paragraph 1 shows how much lemonade they had at the start. It does not show how many people wanted it.',
              'Paragraph 1 is about the sign. It does not show how many people came.'],
            why: 'Paragraph 3 says Jada had to run home three times to make more. You make more when the lemonade keeps running out. So a lot of people wanted lemonade.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 4,
            q: 'Read paragraph 4. What can you infer from the clues in paragraph 4?',
            choices: [
              'Jada and Rafi are going to buy ice cream.',
              'Rafi is going to pay Mr. Green back.',
              'Jada and Rafi are going to make more lemonade.',
              'Rafi is afraid of the ice cream truck.'
            ],
            kinds: [null, 'noclue', 'wrongtime', 'opposite'],
            notes: [null,
              'Paragraph 4 does not talk about Mr. Green. Rafi grabbed the money when Jada pointed at the truck.',
              'Paragraph 3 is when Jada made more lemonade. Paragraph 4 is about the ice cream truck.',
              'Paragraph 4 says Rafi grinned. He is happy, not afraid.'],
            why: 'Paragraph 4 says Jada pointed at the ice cream truck. It says Rafi grinned and grabbed two dollars. You need money to buy from a truck. So Jada and Rafi are going to buy ice cream.',
            chart: { facts: 'Jada points at the ice cream truck, and Rafi grabs two dollars.', know: 'You pay money to buy ice cream from a truck.', conclusion: 'Jada and Rafi are going to buy ice cream.' } }
        ] }
    ],

    /* ───────── Level 5 · FK 4.0 ───────── */
    5: [
      { title: 'Shooting Stars Beyond the City', genre: 'story',
        paragraphs: [
          'The radio said that Saturday night would be the best night of the year to see shooting stars. Ines wrote STARS in purple letters on the calendar and drew tiny stars around the date. She had never seen a shooting star.',
          'On Saturday night, Ines and her mom carried a blanket up to the roof of their building. Above them, the sky glowed a dull orange from the streetlights and store signs below. Ines lay on her back and counted the stars she could see: one, two, three. After a while, she sat up, hugged her knees and let out a long, slow sigh.',
          'Mom looked at Ines and then up at the orange sky before she grabbed the car keys. They drove out of the city, past the last gas station, until dark farm fields stretched along both sides of the road. Mom pulled over, switched off the headlights and spread the blanket on the hood of the car.',
          'Ines leaned back against the windshield. Thousands of stars sparkled over the field. Then a bright streak zipped across the sky, and then another. Ines grabbed Mom\'s arm and squealed so loudly that a cow mooed somewhere in the dark.',
          'Hours later, the car rolled back into the city. Ines\'s head rested against the window, and her eyes were closed. A small smile stayed on her face the whole way home.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Ines is disappointed.',
            para: 2,
            answer: 'After a while, she sat up, hugged her knees and let out a long, slow sigh.',
            notes: {
              'Above them, the sky glowed a dull orange from the streetlights and store signs below.': 'This tells about the sky. It does not show how Ines feels.',
              'Ines lay on her back and counted the stars she could see: one, two, three.': 'This tells what Ines could see. Look for what she does next.',
              'On Saturday night, Ines and her mom carried a blanket up to the roof of their building.': 'This tells where Ines and Mom went. It does not show how Ines feels.'
            },
            why: 'Disappointed means sad that something did not go the way you hoped. Paragraph 2 says Ines hugged her knees and let out a long, slow sigh. People do that when they feel let down. So Ines is disappointed.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Ines is very excited when she sees the shooting stars.',
            answer: 'Ines grabbed Mom\'s arm and squealed so loudly that a cow mooed somewhere in the dark.',
            notes: {
              'Then a bright streak zipped across the sky, and then another.': 'This tells what Ines sees. Look for what Ines does when she sees it.',
              'Ines wrote STARS in purple letters on the calendar and drew tiny stars around the date.': 'This happens days before the big night. Look for what Ines does when she sees the shooting stars.',
              'A small smile stayed on her face the whole way home.': 'This is on the ride home, after the shooting stars. Look for the moment she sees them.',
              'Thousands of stars sparkled over the field.': 'This tells about the sky. It does not show what Ines does.'
            },
            why: 'Paragraph 4 says Ines grabbed Mom\'s arm and squealed so loudly that a cow mooed. People grab and squeal when they are very excited. So Ines is very excited when she sees the shooting stars.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Ines fell asleep on the way home?',
            choices: [
              'Ines\'s head rested against the window, and her eyes were closed.',
              'Hours later, the car rolled back into the city.',
              'A small smile stayed on her face the whole way home.',
              'Ines lay on her back and counted the stars she could see: one, two, three.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 5 tells when they got back. It does not show that Ines was asleep.',
              'Paragraph 5 says Ines was smiling. A smile does not show that she was asleep.',
              'Paragraph 2 is on the roof, not on the way home. Ines was awake and counting.'],
            why: 'Paragraph 5 says Ines\'s head rested on the window, and her eyes were closed. It was very late at night. People close their eyes and rest their heads when they sleep. So Ines fell asleep on the way home.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 3,
            q: 'Read paragraph 3. What can you infer from the clues in paragraph 3?',
            choices: [
              'Mom wanted a darker place to see the stars.',
              'Mom wanted to go home and go to sleep.',
              'The car ran out of gas by the farm fields.',
              'Mom was upset with Ines for sighing so loudly.'
            ],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null,
              'Paragraph 3 says Mom drove out of the city. That is away from home, not toward it.',
              'Paragraph 3 says Mom pulled over and switched off the headlights. She stopped the car on purpose.',
              'Paragraph 3 does not say Mom was upset.'],
            why: 'Paragraph 3 says Mom looked up at the orange sky. Then she drove out to dark farm fields and switched off the headlights. Stars are easier to see where it is dark. So Mom wanted a darker place to see the stars.',
            chart: { facts: 'Mom looked at the orange sky and drove out to dark farm fields.', know: 'Stars are easier to see where there are no bright lights.', conclusion: 'Mom wanted a darker place to see the stars.' } }
        ] },

      { title: 'The Red Mitten on the Fence', genre: 'story',
        paragraphs: [
          'Every morning, Sofia walked four blocks to school with her dad. The sidewalks crunched with salt, and the wind made her eyes water. Everyone waiting at the crosswalk had their hoods pulled up tight around their faces.',
          'On Monday, Sofia spotted a small red mitten on top of a fence. The mitten had a white star on the cuff. Someone must have picked the mitten up off the sidewalk and set it there. "Maybe the owner will come back for it," her dad said. On Tuesday and again on Wednesday, the mitten was still sitting on the fence.',
          'On Thursday, Sofia noticed a little boy waiting at the bus stop with his grandmother. The boy kept blowing on his left hand and rubbing it against his coat. His grandmother was busy reading a bus map.',
          'Sofia looked more closely at the boy. On his right hand was a red mitten with a white star on the cuff. She turned around and looked back at the fence. Then she let go of her dad\'s hand and raced back down the block.',
          'A minute later, Sofia returned with the red mitten. The boy\'s face lit up, and he pulled the mitten on. His grandmother smiled and said, "Thank you for being so kind."'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 4 that shows the mitten on the fence belongs to the boy.',
            para: 4,
            answer: 'On his right hand was a red mitten with a white star on the cuff.',
            notes: {
              'She turned around and looked back at the fence.': 'This shows Sofia is thinking about the fence. The sentence before it shows why.',
              'Then she let go of her dad\'s hand and raced back down the block.': 'This shows what Sofia does next. It does not show whose mitten it is.'
            },
            why: 'Paragraph 4 says the boy wore a red mitten with a white star. Paragraph 2 says the mitten on the fence had a white star too. Mittens come in pairs. So the mitten on the fence belongs to the boy.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows the boy\'s left hand is cold.',
            answer: 'The boy kept blowing on his left hand and rubbing it against his coat.',
            notes: {
              'The sidewalks crunched with salt, and the wind made her eyes water.': 'This is about the sidewalks and Sofia\'s eyes. It does not show how the boy\'s hand feels.',
              'The boy\'s face lit up, and he pulled the mitten on.': 'This shows the boy is happy. It does not show that his hand is cold.',
              'On his right hand was a red mitten with a white star on the cuff.': 'This tells what is on the boy\'s right hand. It does not show how his left hand feels.'
            },
            why: 'Paragraph 3 says the boy kept blowing on his left hand and rubbing it. People blow on their hands to warm them up. So the boy\'s left hand is cold.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that the owner did not come back for the mitten right away?',
            choices: [
              'On Tuesday and again on Wednesday, the mitten was still sitting on the fence.',
              'Someone must have picked the mitten up off the sidewalk and set it there.',
              '"Maybe the owner will come back for it," her dad said.',
              'Everyone waiting at the crosswalk had their hoods pulled up tight around their faces.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 2 shows how the mitten got on the fence. It does not show how long it stayed there.',
              'Paragraph 2 says Dad hoped the owner would come back. That is a guess. It does not show what happened.',
              'Paragraph 1 is about the walk to school. It is not about the mitten.'],
            why: 'Paragraph 2 says the mitten was still on the fence on Tuesday and Wednesday. If the owner came back, the mitten would be gone. So the owner did not come back right away.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'It is a very cold morning in the city.',
              'It is a hot summer morning in the city.',
              'Sofia is late for school with her dad.',
              'It is raining, so everyone takes the bus.'
            ],
            kinds: [null, 'opposite', 'noclue', 'opposite'],
            notes: [null,
              'Paragraph 1 says there is salt on the sidewalks and people have their hoods up. That does not happen on a hot day.',
              'Paragraph 1 does not say Sofia is late.',
              'Paragraph 1 says Sofia walked to school. It does not say it is raining.'],
            why: 'Paragraph 1 says there was salt on the sidewalks. It says the wind made Sofia\'s eyes water, and people had their hoods up tight. Salt is put down when there is ice. People pull up their hoods when it is cold. So it is a very cold morning.',
            chart: { facts: 'There is salt on the sidewalks, and everyone has their hoods up tight.', know: 'People put salt on ice, and they pull up their hoods when it is cold.', conclusion: 'It is a very cold morning in the city.' } }
        ] }
    ],

    /* ───────── Level 6 · FK 4.5 ───────── */
    6: [
      { title: 'Opening Night at Lucky Noodle', genre: 'story',
        paragraphs: [
          'Mei tied a clean apron around her waist and looked around her family\'s restaurant. Bright paper lanterns dangled from the ceiling, and the tables still smelled like fresh paint. Outside, a bunch of red balloons bobbed above the sign that read Lucky Noodle.',
          'Mei\'s job was to fill water glasses and carry steaming bowls of noodles to the customers. In the kitchen, Dad stirred a giant pot of soup. He tasted it again and again, even though it already looked perfect. Mom set out a tall stack of bowls next to the stove.',
          'At five o\'clock, Mom unlocked the front door. By six, a line of people waiting for a table stretched all the way down the sidewalk. Mei carried each bowl with both hands so that the soup would not spill.',
          'Near the window sat a woman in a gray hat who was writing in a small notebook. She took one careful bite of Dad\'s soup and wrote something down. Then she slurped up every last noodle and tipped the bowl to drink the broth. Before she left, she asked Mei for the name of the cook.',
          'The next morning, Dad opened the newspaper at breakfast. Dad read for a minute, then jumped up and hugged Mom so hard that her glasses slid down her nose. Mei peeked at the page and saw a picture of a steaming bowl of Dad\'s soup.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Dad is worried about his soup.',
            para: 2,
            answer: 'He tasted it again and again, even though it already looked perfect.',
            notes: {
              'In the kitchen, Dad stirred a giant pot of soup.': 'This shows Dad is cooking. Stirring soup is normal. It does not show that he is worried.',
              'Mom set out a tall stack of bowls next to the stove.': 'This sentence is about Mom, not Dad.'
            },
            why: 'Paragraph 2 says Dad tasted the soup again and again. It already looked perfect. People check a thing over and over when they are worried. So Dad is worried about his soup.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows the restaurant is very busy.',
            answer: 'By six, a line of people waiting for a table stretched all the way down the sidewalk.',
            notes: {
              'Mei carried each bowl with both hands so that the soup would not spill.': 'This shows Mei is careful. It does not show how many people came.',
              'Mom set out a tall stack of bowls next to the stove.': 'This happens before the door opens. It shows Mom getting ready, not people coming.'
            },
            why: 'Paragraph 3 says a long line of people waited for a table. People wait in line when all the tables are full. So the restaurant is very busy.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that the newspaper said good things about Dad\'s soup?',
            choices: [
              'Dad read for a minute, then jumped up and hugged Mom so hard that her glasses slid down her nose.',
              'Mei peeked at the page and saw a picture of a steaming bowl of Dad\'s soup.',
              'The next morning, Dad opened the newspaper at breakfast.',
              'She took one careful bite of Dad\'s soup and wrote something down.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 5 shows the newspaper wrote about the soup. But a picture does not tell if the words were good or bad.',
              'Paragraph 5 says Dad opened the paper. It does not show what the paper said.',
              'Paragraph 4 is about the woman in the restaurant. It does not show what the paper said the next day.'],
            why: 'Paragraph 5 says Dad read the paper. Then he jumped up and hugged Mom. People jump and hug when they get good news. So the paper said good things about Dad\'s soup.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 4,
            q: 'Read paragraph 4. What can you infer from the clues in paragraph 4?',
            choices: [
              'The woman in the gray hat loved Dad\'s soup.',
              'The woman in the gray hat thought the soup was too salty.',
              'The woman in the gray hat was Mei\'s teacher.',
              'The woman in the gray hat was in a hurry to leave.'
            ],
            kinds: [null, 'opposite', 'noclue', 'opposite'],
            notes: [null,
              'Paragraph 4 says she ate every noodle and drank the broth. People do not finish soup that tastes bad to them.',
              'Paragraph 4 does not say Mei knows the woman.',
              'Paragraph 4 says she ate every bite and asked a question before she left. She was taking her time.'],
            why: 'Paragraph 4 says the woman ate every last noodle. She drank the broth too. Then she asked for the name of the cook. People do that when they love the food. So the woman loved Dad\'s soup.',
            chart: { facts: 'The woman eats every noodle, drinks the broth, and asks who the cook is.', know: 'People finish every drop of food they love.', conclusion: 'The woman in the gray hat loved Dad\'s soup.' } }
        ] },

      { title: 'A Stormy Night at Pine Lake', genre: 'story',
        paragraphs: [
          'Nico and Aunt Rosa parked their car at the edge of Pine Lake. Nico had never slept in a tent before. Aunt Rosa snapped the tent poles together without even glancing at the directions. Then they unpacked their sleeping bags, a lantern, and a cooler full of food.',
          'After dinner, they roasted marshmallows over the crackling campfire. Nico\'s marshmallow caught on fire twice, and he had to blow it out each time. Aunt Rosa told a funny story about a raccoon that once stole her shoe. Nico laughed so hard that he snorted.',
          'Later that night, the wind began to push hard against the sides of the tent. Far away, a low rumble rolled across the lake. Aunt Rosa poked her head out of the tent and studied the sky. The stars that had been sparkling earlier had disappeared.',
          'Soon rain drummed on the roof of the tent. Each time thunder cracked, Nico pulled his sleeping bag over his head and squeezed his eyes shut. Aunt Rosa switched on the lantern and began to hum Nico\'s favorite song.',
          'In the morning, Nico unzipped the tent and blinked in the bright sunshine. Broken branches were scattered all over the campsite, and the fire pit was filled with water. Aunt Rosa handed him a mug of hot cocoa. "You made it through your first big storm," she said with a wink.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 1 that shows Aunt Rosa has set up a tent many times before.',
            para: 1,
            answer: 'Aunt Rosa snapped the tent poles together without even glancing at the directions.',
            notes: {
              'Nico had never slept in a tent before.': 'This sentence is about Nico, not Aunt Rosa. It shows camping is new for Nico.',
              'Then they unpacked their sleeping bags, a lantern, and a cooler full of food.': 'This tells what they brought. It does not show that Aunt Rosa has done this before.'
            },
            why: 'Paragraph 1 says Aunt Rosa put the poles together. She did not look at the directions. You can do that when you have done it a lot. So Aunt Rosa has set up a tent many times before.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Nico is scared of the storm.',
            answer: 'Each time thunder cracked, Nico pulled his sleeping bag over his head and squeezed his eyes shut.',
            notes: {
              'Aunt Rosa switched on the lantern and began to hum Nico\'s favorite song.': 'This is what Aunt Rosa does. Look for what Nico does when the thunder cracks.',
              'Nico had never slept in a tent before.': 'This shows camping is new for Nico. It does not show how he acts in the storm.'
            },
            why: 'Paragraph 4 says Nico pulled his sleeping bag over his head when the thunder cracked. He shut his eyes. People hide like that when they are scared. So Nico is scared of the storm.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Aunt Rosa wants Nico to feel safe?',
            choices: [
              'Aunt Rosa switched on the lantern and began to hum Nico\'s favorite song.',
              'Aunt Rosa poked her head out of the tent and studied the sky.',
              'Aunt Rosa told a funny story about a raccoon that once stole her shoe.',
              'Aunt Rosa snapped the tent poles together without even glancing at the directions.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'notproof'],
            notes: [null,
              'Paragraph 3 shows Aunt Rosa checking the sky. It does not show her helping Nico.',
              'Paragraph 2 is before the storm. The story was for fun, not to help Nico feel safe.',
              'Paragraph 1 shows Aunt Rosa is good at camping. It does not show her helping Nico feel safe.'],
            why: 'Paragraph 4 says Aunt Rosa turned on the light. She hummed Nico\'s favorite song. A light and a song you love can help you calm down. So Aunt Rosa wants Nico to feel safe.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 3,
            q: 'Read paragraph 3. What can you infer from the clues in paragraph 3?',
            choices: [
              'A big storm is coming toward the lake.',
              'A bear is walking around outside the tent.',
              'It is going to be a clear and quiet night.',
              'Aunt Rosa wants to pack up and drive home.'
            ],
            kinds: [null, 'toofar', 'opposite', 'noclue'],
            notes: [null,
              'Paragraph 3 says the rumble was far away, across the lake. A bear would not make the wind push or the stars go away.',
              'Paragraph 3 says the wind is pushing hard and the stars are gone. That is not a clear, quiet night.',
              'Paragraph 3 does not say Aunt Rosa wants to leave. She only looks at the sky.'],
            why: 'Paragraph 3 says the wind pushed hard on the tent. A low rumble rolled across the lake, and the stars were gone. Wind, thunder, and clouds come before a storm. So a big storm is coming.',
            chart: { facts: 'The wind pushes hard, a low rumble rolls by, and the stars disappear.', know: 'Strong wind, thunder, and clouds that hide the stars come before a storm.', conclusion: 'A big storm is coming toward the lake.' } }
        ] }
    ]
  }
};
