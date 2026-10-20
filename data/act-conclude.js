/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE — CONCLUDE · Draw a Conclusion
   Spec: tools/CONTENT-SPEC.md ("conclude"). Checked by
   `node tools/check-levels.js conclude`.

   Every passage (2 stories per level, Levels 1–6, all original):
     D01/D05  mc chart  "What conclusion can be drawn about ___?"   (2+ clues)
     D02/D06  mc        "What will ___ most likely do next?"        (one reasonable answer)
     D03/D07  mc        "Why does ___ ___?"                         (the reason is never stated)
     D04/D08  mc        "Which statement BEST tells a lesson ___ learns in the passage?"
                        (choices "It is important to…"; the right one fits the whole story)
   Choices are written with the RIGHT one first; the site shuffles them.
═══════════════════════════════════════════════════════ */
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.conclude = {
  cards: [
    { title: 'What is a conclusion?', blocks: [
      { term: 'draw a conclusion', means: 'put the clues together and decide what they show', ex: 'Dad has a wet coat and a wet hat. I can draw a conclusion. It is raining.' },
      { p: 'A clue is a detail that helps you figure something out.' },
      { p: 'One clue is not enough. Put two or more clues together.' },
      { rows: [['1', 'Find a clue.'], ['2', 'Find one more clue.'], ['3', 'Add what you know.'], ['4', 'Decide what the clues show.']] }
    ]},
    { title: 'Two clues are better than one', blocks: [
      { quote: 'Lily came in with muddy shoes. Her kite was under her arm, and her cheeks were pink from the wind.' },
      { ask: 'What conclusion can be drawn about Lily?' },
      { chart: { facts: 'Lily has muddy shoes, a kite and pink cheeks.', know: 'People fly kites outside when it is windy.', conclusion: 'Lily was out flying her kite.' } },
      { good: 'Lily was out flying her kite.', why: 'All the clues fit.' },
      { bad: 'Lily fell down in the mud.', why: 'Only the mud fits. That goes too far.' }
    ]},
    { title: 'Why and most likely', blocks: [
      { term: 'most likely', means: 'what will probably happen', ex: 'Sam grabs his bat and his glove. He will most likely play ball.' },
      { quote: 'Jun yawned and rubbed his eyes. He put on his pajamas.' },
      { ask: 'What will Jun most likely do next?' },
      { good: 'Jun will go to bed.', why: 'All the clues point to sleep.' },
      { bad: 'Jun will go out to play.', why: 'No clue points to that.' },
      { p: 'Some questions ask why. Why does Jun rub his eyes? The passage does not say. The clues show that he is sleepy.' }
    ]},
    { title: 'The lesson', blocks: [
      { term: 'theme', means: 'the lesson a character learns that we can learn too', ex: 'It is important to tell the truth.' },
      { p: 'A statement is a sentence that tells something. BEST means the one that fits the most.' },
      { quote: 'Tess would not share her crayons, so no one sat with her. The next day, she shared, and two friends sat down.' },
      { ask: 'Which statement BEST tells a lesson Tess learns in the passage?' },
      { good: 'It is important to share.', why: 'This fits the whole story.' },
      { bad: 'It is important to have crayons.', why: 'This is just one detail.' }
    ]}
  ],

  levels: {

    /* ═══ LEVEL 1 · FK 2.0 ═══════════════════════════════ */
    1: [
      { title: 'Bubbles and the Full Jar', genre: 'story',
        paragraphs: [
          'Nico had a big job this week. He had to feed Bubbles, the class fish, each morning. The fish tank sat by the window.',
          'On Monday, Nico ran to the reading rug to play a word game. He did not look at the tank at all.',
          'On Tuesday, Bubbles swam to the top of the water. He opened his mouth again and again. The jar of fish food was still full.',
          `Nico's face turned red. He shook food into the tank, and Bubbles gobbled it up. Then Nico drew a fish on a sticky note. He stuck it on his cubby, where he hangs his backpack each morning.`
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Nico?',
            choices: ['Nico forgot to feed Bubbles on Monday.', 'Nico does not like the fish in the tank.', 'Nico was not at school on Monday.', 'Nico wants to take Bubbles home.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 4 says Nico fed Bubbles and made a note. He cares about Bubbles.', 'Paragraph 2 says Nico played on the reading rug on Monday. He was at school.', null],
            chart: { facts: 'Nico played on Monday, and the food jar was still full on Tuesday.', know: 'If no one feeds a fish, the food does not get used.', conclusion: 'Nico forgot to feed Bubbles on Monday.' },
            why: 'Paragraph 2 says Nico played and did not look at the tank. Paragraph 3 says the food jar was still full. So Nico forgot to feed Bubbles on Monday.' },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Nico most likely do next?',
            choices: ['He will see his note and feed Bubbles.', 'He will play on the rug and skip the tank again.', 'He will ask for a new fish for the class.', 'He will give his fish job to a friend.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 4 says Nico put a fish note on his cubby. The note will help him remember.', null, 'Nothing in the passage says Nico wants to give up his job.'],
            why: 'Paragraph 4 says Nico put a fish note where he hangs his backpack. He will see it each morning. So he will most likely feed Bubbles.' },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: `Why does Nico's face turn red?`,
            choices: ['He feels bad that he forgot Bubbles.', 'He is hot from the sun by the window.', 'He ran too fast to the reading rug.', 'He is mad that Bubbles ate so fast.'],
            kinds: [null, 'toofar', 'wrongtime', 'noclue'],
            notes: [null, 'Paragraph 1 says the tank is by the window. It does not say Nico is hot.', 'Nico ran to the rug on Monday. His face turned red on Tuesday.', null],
            why: 'The passage does not say why. Paragraph 3 shows Bubbles was hungry. Then Nico got red in the face. A face can get red when you feel bad. So Nico feels bad that he forgot.' },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Nico learns in the passage?',
            choices: ['It is important to do your job every day.', 'It is important to play games with friends.', 'It is important to draw neat pictures.', 'It is important to keep fish food in a jar.'],
            kinds: [null, 'opposite', 'onedetail', 'onedetail'],
            notes: [null, 'Paragraph 2 says Nico played a game. That is how he forgot his job.', 'The fish drawing is one small part of the story. It is not the lesson.', 'The jar is a clue. It is not a lesson Nico learns.'],
            why: 'In paragraph 2, Nico skips his job. In paragraph 3, Bubbles is hungry. In paragraph 4, Nico makes a note so he will not forget. Nico learns to do his job every day.' }
        ] },

      { title: 'Imani and the Apple Bag', genre: 'story',
        paragraphs: [
          'Last week, Mom said Imani was too little to carry the milk. Today, six bags of food sat in the back of the car.',
          `Imani said, "I can carry all six bags!" She hung three bags on each arm. Her arms shook as she climbed the steps. She had to stop on every step.`,
          'On the top step, one bag ripped open. Red apples bounced down the steps and rolled onto the sidewalk.',
          `Mom picked up the apples and smiled at Imani. Then she held out her hand for some of the bags. Imani looked at her tired arms and said, "Yes, please."`
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Imani?',
            choices: ['Imani tried to carry too much at one time.', 'Imani is the strongest kid on her street.', 'Imani does not like to eat apples.', 'Imani wanted to stay in the car.'],
            kinds: [null, 'toofar', 'noclue', 'opposite'],
            notes: [null, 'Paragraph 2 says her arms shook. That does not show she is the strongest.', null, 'Paragraph 2 says Imani wanted to carry the bags. She did not want to stay in the car.'],
            chart: { facts: `Imani's arms shook, and one bag ripped open.`, know: 'Too much weight can make arms shake and bags rip.', conclusion: 'Imani tried to carry too much at one time.' },
            why: 'Paragraph 2 says her arms shook and she had to stop on every step. Paragraph 3 says a bag ripped. So Imani tried to carry too much at one time.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Imani most likely do next?',
            choices: ['She will give some of the bags to Mom.', 'She will carry all the bags by herself.', 'She will run back to the store for more.', 'She will throw the apples in the trash.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 4 says Imani said "Yes, please" when Mom held out her hand for some bags.', null, 'Mom picked up the apples. Nothing says they go in the trash.'],
            why: 'Paragraph 4 says Mom held out her hand for some bags. Imani said, "Yes, please." So Imani will most likely give some bags to Mom.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Imani say she can carry all six bags?',
            choices: ['She wants to show Mom she is not too little.', 'Mom told her she had to carry all of them.', 'She wants to eat the red apples right away.', 'She wants to beat Mom in a race up the steps.'],
            kinds: [null, 'noclue', 'noclue', 'noclue'],
            notes: [null, 'The passage does not say Mom asked. Imani said it herself in paragraph 2.', null, 'No clue in the passage tells about a race.'],
            why: 'The passage does not say why. Paragraph 1 says Mom said Imani was too little to carry the milk. So Imani wants to show Mom she is not too little.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Imani learns in the passage?',
            choices: ['It is important to ask for help with a big job.', 'It is important to carry bags on both arms.', 'It is important to pick up apples that fall down.', 'It is important to do every job by yourself.'],
            kinds: [null, 'onedetail', 'onedetail', 'opposite'],
            notes: [null, 'Paragraph 2 says she hung bags on both arms. That did not work well.', 'Mom picked up the apples in paragraph 4. That is one small part, not the lesson.', 'Imani tried to do it all by herself, and a bag ripped. The story shows the opposite.'],
            why: 'At first, Imani tries to carry all six bags. Her arms shake, and a bag rips. At the end, she says yes to help. Imani learns to ask for help with a big job.' }
        ] }
    ],

    /* ═══ LEVEL 2 · FK 2.5 ═══════════════════════════════ */
    2: [
      { title: 'Rafi at the Free-Throw Line', genre: 'story',
        paragraphs: [
          'At his first basketball game, Rafi missed both of his free throws. On the bus ride home, Rafi sat alone and stared out the window. When his mom asked about the game, he did not say a word.',
          'The next day after school, Rafi walked to the park with his ball. He stood at the free-throw line and shot again and again. He stayed until the streetlights came on. He did this every day that week.',
          'By Friday, his ball was dusty, and his hands were sore. But more and more of his shots went in.',
          'At the next game, a player bumped Rafi, and the ref blew the whistle. The ref handed Rafi the ball and pointed to the line. Rafi took a deep breath. He bent his knees, just like he did at the park.'
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Rafi?',
            choices: ['Rafi was upset that he missed his shots.', 'Rafi was happy with how he played.', 'Rafi does not want to play basketball anymore.', 'Rafi was mad at his mom for asking.'],
            kinds: [null, 'opposite', 'opposite', 'toofar'],
            notes: [null, 'Paragraph 1 says Rafi sat alone and did not say a word. Those are not happy clues.', 'Paragraph 2 says Rafi went to the park and shot every day. He still wants to play.', 'Rafi did not talk. That does not prove he was mad at his mom.'],
            chart: { facts: 'Rafi missed his shots, sat alone and did not say a word.', know: 'People get quiet and sit alone when they are upset.', conclusion: 'Rafi was upset that he missed his shots.' },
            why: 'Paragraph 1 says Rafi missed both shots. Then he sat alone and did not say a word. So Rafi was upset that he missed his shots.' },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Rafi most likely do next?',
            choices: ['He will shoot just like he did at the park.', 'He will give the ball to a different player.', 'He will walk off and sit down on the bench.', 'He will go to the park to practice.'],
            kinds: [null, 'noclue', 'opposite', 'wrongtime'],
            notes: [null, 'Paragraph 4 says the ref handed the ball to Rafi. It is his shot.', null, 'Rafi went to the park in paragraph 2. Now he is at the game.'],
            why: 'Paragraph 4 says the ref handed Rafi the ball. Rafi bent his knees, just like he did at the park. So he will most likely shoot just like he did at the park.' },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Rafi go to the park every day after school?',
            choices: ['He wants to stop missing his free throws.', 'He wants to see the streetlights come on.', 'He does not want to ride the bus.', 'His coach told him he had to go there.'],
            kinds: [null, 'toofar', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 2 says he stayed until the streetlights came on. That tells when he went home, not why he went.', null, 'The passage never says a coach told Rafi to go.'],
            why: 'The passage does not say why. Paragraph 1 says Rafi missed both free throws. Paragraph 2 says he shot again and again at the park. So he wants to stop missing his free throws.' },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Rafi learns in the passage?',
            choices: ['It is important to keep practicing when something is hard.', 'It is important to sit by yourself when you feel sad.', 'It is important to get home before the streetlights.', 'It is important to win every game that you play.'],
            kinds: [null, 'wrongtime', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 1 says Rafi sat alone. That is one part of the story. It is not the lesson.', 'Paragraph 2 says Rafi stayed out until the streetlights came on.', 'The story does not say Rafi wins. It shows him practice.'],
            why: 'In paragraph 1, Rafi misses his shots. In paragraph 2, he practices every day. In paragraph 3, more shots go in. Rafi learns to keep practicing when something is hard.' }
        ] },

      { title: `The Crack in Grandma's Pot`, genre: 'story',
        paragraphs: [
          'Grandma had one big rule in her house: no balls inside. But it was raining, and Wren was bored, so she bounced her red ball off the living room wall again and again.',
          `Then the ball hit the plant table, and Wren heard a loud crack. She looked at Grandma's big blue pot and slowly turned it around. Then she hid her ball under the couch.`,
          `When Grandma came home, she watered her plant. Water dripped out of a long crack in the side of the pot and made a puddle on the floor. Wren's stomach felt tight.`,
          `Wren took a deep breath and said, "Grandma, I need to tell you something." Then she told Grandma the whole story. Grandma hugged her. By then, the rain had stopped. Grandma pointed at the couch and then at the back door.`
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Wren?',
            choices: [`Wren cracked Grandma's pot with her ball.`, 'Wren never plays with her red ball.', `Grandma's cat cracked the big blue pot.`, 'Wren wanted to water the plant for Grandma.'],
            kinds: [null, 'opposite', 'noclue', 'wrongwho'],
            notes: [null, 'Paragraph 1 says Wren bounced her red ball again and again.', 'The passage never tells about a cat.', 'Paragraph 3 says Grandma watered the plant, not Wren.'],
            chart: { facts: 'The ball hit the plant table, and Wren heard a crack.', know: 'A hard hit can crack a pot.', conclusion: `Wren cracked Grandma's pot with her ball.` },
            why: 'Paragraph 2 says the ball hit the plant table, and Wren heard a crack. Paragraph 3 says there was a crack in the pot. So Wren cracked the pot with her ball.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Wren most likely do next?',
            choices: ['She will take her ball out to the yard.', 'She will bounce the ball off the wall again.', 'She will hide the ball under the couch again.', 'She will go buy Grandma a new pot.'],
            kinds: [null, 'opposite', 'wrongtime', 'noclue'],
            notes: [null, 'Grandma pointed at the back door. That means play outside, not inside.', 'Wren hid the ball in paragraph 2. In paragraph 4, Grandma points at the couch and then the back door.', null],
            why: 'Paragraph 1 says the rule is no balls inside. Paragraph 4 says the rain stopped. Grandma pointed at the couch and the back door. So Wren will most likely take her ball outside.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Wren turn the pot around?',
            choices: ['She does not want Grandma to see the crack.', 'She wants the plant to get more sun.', 'Grandma asked her to clean the pot.', 'She wants Grandma to see the crack right away.'],
            kinds: [null, 'toofar', 'noclue', 'opposite'],
            notes: [null, 'Paragraph 1 says it was raining. No clue tells about the sun.', 'Grandma was not home yet. She did not ask Wren to do anything.', 'Wren hid her ball and did not tell Grandma until paragraph 4.'],
            why: 'The passage does not say why. Paragraph 2 says Wren heard a crack. Then she turned the pot around and hid her ball. So she did not want Grandma to see the crack.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Wren learns in the passage?',
            choices: ['It is important to tell the truth, even when it is hard.', 'It is important to hide a mistake so no one gets upset.', 'It is important to water a plant every single day.', 'It is important to play inside on a rainy day.'],
            kinds: [null, 'opposite', 'wrongwho', 'opposite'],
            notes: [null, 'Wren hid her ball, and her stomach felt tight. Then she told the truth and got a hug.', 'Grandma watered the plant. That is not what Wren learns.', 'Playing ball inside is how the pot cracked.'],
            why: 'In paragraph 2, Wren turns the pot and hides her ball. In paragraph 3, her stomach feels tight. In paragraph 4, she tells the truth, and Grandma hugs her. Wren learns to tell the truth.' }
        ] }
    ],

    /* ═══ LEVEL 3 · FK 3.0 ═══════════════════════════════ */
    3: [
      { title: 'The Half-Built Snow Fort', genre: 'story',
        paragraphs: [
          'Snow covered the city on Saturday morning. Hugo pulled on his boots, grabbed his sled and raced for the door. Mom called to him from the kitchen and held up his green gloves, but the door had already slammed shut behind him.',
          'At the park, Hugo and his friend Mei started to build a snow fort. Mei pressed snow into tight, square blocks. Hugo pulled his sleeves down over his hands and tried to help. Soon his fingers turned bright red.',
          `Hugo blew on his fingers and tucked them under his arms, but when he tried to pack the snow again, his hands felt stiff and clumsy. "I'm going home," he told Mei. The fort was only half finished.`,
          'That night, Hugo sat by the heater and wiggled his fingers until they felt warm. The next morning, more snow was falling. Hugo zipped his coat and pulled on his boots. Then he stopped at the door and looked at the basket where Mom keeps the hats and gloves.'
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Hugo?',
            choices: ['Hugo left his gloves at home.', 'Hugo did not want to build a fort.', 'Hugo lost his gloves at the park.', 'Hugo was angry at his friend Mei.'],
            kinds: [null, 'opposite', 'toofar', 'noclue'],
            notes: [null, 'Paragraph 2 says Hugo tried to help build the fort.', 'Paragraph 1 shows his gloves were still in Mom\'s hand at home. He never had them at the park.', null],
            chart: { facts: `Mom held up Hugo's gloves as the door shut behind him.`, know: 'When you rush out, you can forget things.', conclusion: 'Hugo left his gloves at home.' },
            why: 'Paragraph 1 says Mom held up his gloves after he ran out. Paragraph 2 says he pulled his sleeves over his hands. So Hugo left his gloves at home.' },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Hugo most likely do next?',
            choices: ['He will take gloves from the basket.', 'He will run out with bare hands again.', 'He will sit by the heater all day long.', 'He will ask Mom to buy him a new sled.'],
            kinds: [null, 'opposite', 'wrongtime', 'noclue'],
            notes: [null, 'Paragraph 4 says Hugo stopped at the door this time. He looked at the glove basket.', 'Hugo sat by the heater last night. Now he is dressed to go out.', null],
            why: 'Paragraph 2 says Hugo pulled his sleeves over his hands, and his fingers turned bright red. Paragraph 4 says he stopped and looked at the glove basket. So he will most likely take gloves from the basket.' },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Hugo go home before the fort is done?',
            choices: ['His hands are too cold to pack the snow.', 'He and Mei had a fight about the fort.', 'Mom called him to come home for lunch.', 'He wants to get his sled from home.'],
            kinds: [null, 'noclue', 'noclue', 'opposite'],
            notes: [null, 'Paragraph 3 says Hugo told Mei he was going home. No clue shows a fight.', 'Mom called to Hugo in paragraph 1, before he left. She did not call him home.', 'Paragraph 1 says Hugo grabbed his sled. He already had it.'],
            why: 'The passage does not say why. Paragraph 2 says his fingers turned red. Paragraph 3 says his hands felt stiff. So he went home because his hands were too cold.' },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Hugo learns in the passage?',
            choices: ['It is important to get ready before you go out.', 'It is important to build a fort with a friend.', 'It is important to sit by a heater at night.', 'It is important to rush out the door when it snows.'],
            kinds: [null, 'onedetail', 'wrongtime', 'opposite'],
            notes: [null, 'Building the fort is one part of the story. It is not what Hugo learns.', 'Paragraph 4 says Hugo sat by the heater. That is one small part, not the lesson.', 'Hugo rushed out, and his hands got too cold. The story shows the opposite.'],
            why: 'In paragraph 1, Hugo rushes out with no gloves. In paragraph 3, his cold hands make him go home. In paragraph 4, he stops at the gloves. Hugo learns to get ready first.' }
        ] },

      { title: 'Noor and the Pencil Box', genre: 'story',
        paragraphs: [
          `A new girl named Noor joined Pilar's class in March. At lunch, Noor sat at the very end of the long table and did not say a word. Some kids whispered that Noor was not friendly.`,
          `Pilar watched Noor for a few days. Noor looked down at her tray whenever someone walked by. When the teacher called on her, Noor's voice came out as soft as a whisper. Every day, she drew in a small notebook.`,
          'On Thursday, Pilar brought her box of colored pencils to lunch. She sat down next to Noor and set the box on the table between them. Noor looked up and gave a tiny smile.',
          `Noor opened her notebook. Inside were drawings of the class hamster, the school bus and the crossing guard. Each one looked almost real. "These are amazing," Pilar said. Noor's cheeks turned pink, and she slid a blank page over to Pilar.`,
          `When the bell rang, Noor tapped the box of pencils and asked, "Same time tomorrow?"`
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Noor?',
            choices: ['Noor is shy around kids she does not know.', 'Noor thinks she is better than the other kids.', 'Noor does not like to draw pictures.', 'Noor wants to sit by herself all year.'],
            kinds: [null, 'toofar', 'opposite', 'opposite'],
            notes: [null, 'Paragraph 1 says some kids thought Noor was not friendly. But the clues in paragraph 2 show Noor is shy.', 'Paragraph 2 says Noor drew every day.', 'Paragraph 3 says Noor smiled when Pilar sat down next to her.'],
            chart: { facts: 'Noor looks down and talks as soft as a whisper.', know: 'Shy people often look down and talk softly.', conclusion: 'Noor is shy around kids she does not know.' },
            why: 'Paragraph 2 says Noor looked down when kids walked by. It says her voice was as soft as a whisper. So Noor is shy around kids she does not know.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Pilar most likely do next?',
            choices: ['She will sit with Noor at lunch again.', 'She will tell Noor to find a new table.', 'She will tell the kids Noor is not friendly.', 'She will give her pencils to the crossing guard.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Pilar liked sitting with Noor. Paragraph 4 says she called the drawings amazing.', 'Pilar sat with Noor and liked her drawings. No clue says Pilar would say that.', 'The crossing guard is only in a drawing.'],
            why: 'Paragraph 4 says Pilar liked the drawings. Paragraph 5 says Noor asked, "Same time tomorrow?" So Pilar will most likely sit with Noor again.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Pilar bring her colored pencils to lunch?',
            choices: ['She wants a way to make friends with Noor.', 'She has to finish a drawing for class.', 'The teacher told her to share with Noor.', 'She wants to draw the class hamster.'],
            kinds: [null, 'noclue', 'noclue', 'wrongwho'],
            notes: [null, 'The passage never tells about a drawing for class.', 'The passage never says the teacher asked Pilar to do this.', 'Noor is the one who drew the class hamster.'],
            why: 'The passage does not say why. Paragraph 2 says Noor drew every day. Paragraph 3 says Pilar sat by Noor and put the pencils between them. So Pilar wanted a way to make friends.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Pilar learns in the passage?',
            choices: ['It is important to get to know someone before you decide about them.', 'It is important to believe what the other kids whisper about someone.', 'It is important to bring colored pencils to lunch every day.', 'It is important to sit at the very end of a long table.'],
            kinds: [null, 'opposite', 'onedetail', 'noclue'],
            notes: [null, 'The kids whispered that Noor was not friendly. Pilar found out that was not true.', 'The pencils are one detail. They helped, but they are not the lesson.', 'Noor sat at the end of the table. That is not what Pilar learns.'],
            why: 'In paragraph 1, kids say Noor is not friendly. In paragraphs 3 to 5, Pilar gets to know Noor. Noor is shy and kind. Pilar learns to get to know someone first.' }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 ═══════════════════════════════ */
    4: [
      { title: 'The Straw Bridge Test', genre: 'story',
        paragraphs: [
          `The teacher gave each group a pile of straws, a roll of tape and one big job. "Build a bridge that can hold ten pennies," she said. Felix grabbed the pile of straws before Lucia or Odell could touch them.`,
          'Lucia said they should make triangles, because her uncle builds bridges and says triangles make them strong. Felix shook his head. He kept taping straws together in one flat line. When Odell tried to hand him some tape, Felix said he could work faster alone.',
          'At test time, their teacher set the bridge between two desks. She added pennies one at a time. After three pennies, the middle sagged, and the coins slid onto the floor. At the next table, a bridge made of triangles held all ten pennies without bending.',
          `Felix stared at that bridge for a long time. His ears turned hot. Then he turned to Lucia and asked, "Can you show me how to make triangles?" Lucia grinned and taped three straws into a perfect triangle.`,
          `"You may try again tomorrow," their teacher said. Felix scooped up the pile of straws and set it in the middle of the table.`
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Felix?',
            choices: ['At first, Felix wanted to work his own way.', 'Felix did not care about the bridge at all.', 'Felix knew the most about building bridges.', 'Felix wanted Lucia to be the group leader.'],
            kinds: [null, 'opposite', 'toofar', 'opposite'],
            notes: [null, 'Paragraph 2 says Felix kept taping straws. He cared a lot about the bridge.', 'Felix acted sure, but paragraph 3 says his bridge sagged. That does not show he knew the most.', 'Paragraph 1 says Felix grabbed all the straws. He did not let Lucia lead.'],
            chart: { facts: `Felix grabbed all the straws and shook his head at Lucia's idea.`, know: 'People who want their own way say no to other ideas.', conclusion: 'At first, Felix wanted to work his own way.' },
            why: `Paragraph 1 says Felix grabbed all the straws. Paragraph 2 says he shook his head at Lucia's idea and would not take help from Odell. So at first, Felix wanted to work his own way.` },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Felix most likely do next?',
            choices: ['He will build a bridge of triangles tomorrow.', 'He will tape the straws in one flat line again.', 'He will leave and join the group at the next table.', 'He will ask the teacher for a new bag of pennies.'],
            kinds: [null, 'opposite', 'toofar', 'noclue'],
            notes: [null, 'The flat line sagged in paragraph 3. Felix asked Lucia about triangles.', 'Felix looked at the bridge at the next table. That does not mean he will leave his group.', null],
            why: 'Paragraph 3 says the bridge of triangles held all ten pennies. Paragraph 4 says Felix asked Lucia to show him triangles. So he will most likely build a bridge of triangles tomorrow.' },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Felix set the straws in the middle of the table?',
            choices: ['He wants the whole team to help this time.', 'He wants to clean up so he can go home.', 'He is done with the bridge for good.', 'Their teacher told him to put the straws away.'],
            kinds: [null, 'noclue', 'opposite', 'noclue'],
            notes: [null, null, 'Paragraph 5 says they can try again tomorrow. The bridge is not done.', 'The teacher only said they may try again. She did not say to put the straws away.'],
            why: 'The passage does not say why. Paragraph 1 says Felix grabbed all the straws for himself. Now he puts them in the middle. So he wants the whole team to help this time.' },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Felix learns in the passage?',
            choices: ['It is important to listen to the ideas of others.', 'It is important to grab what you need first.', 'It is important to work fast and by yourself.', 'It is important to test a bridge with pennies.'],
            kinds: [null, 'opposite', 'opposite', 'onedetail'],
            notes: [null, 'Felix grabbed the straws first, and his bridge did not work. The story shows the opposite.', 'Felix worked alone, and his bridge sagged. The story shows the opposite.', 'The pennies are one detail. They are not what Felix learns.'],
            why: `In paragraph 2, Felix will not listen to Lucia. In paragraph 3, his bridge sags. In paragraph 4, he asks Lucia for help. Felix learns to listen to the ideas of others.` }
        ] },

      { title: 'Pebble Under the Bed', genre: 'story',
        paragraphs: [
          `Cleo and her dad brought a gray cat home from the animal shelter. The shelter worker said the cat's name was Pebble. As soon as Dad opened the carrier, Pebble shot across the room and under Cleo's bed.`,
          'Cleo got down on her knees and reached for her new pet. Pebble pressed her ears flat and hissed. Her tail puffed up like a bottle brush. Cleo quickly pulled her hand back.',
          'The next day, Cleo tried something different. She sat on the floor across the room and read her library book out loud in a soft voice. She set a small dish of treats near the bed. She did the same thing every afternoon that week.',
          'Each day, Cleo moved the dish a little closer to the spot where she sat. On Monday, Pebble only peeked out from under the bed. By Thursday, Pebble crept all the way to the dish while Cleo kept reading.',
          `On Saturday, Cleo sat very still with her book open. Pebble walked over, sniffed her fingers and rubbed a soft cheek against Cleo's hand, and then Pebble began to purr.`
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Pebble?',
            choices: ['Pebble was scared in her new home at first.', 'Pebble is a mean cat who will never be a pet.', 'Pebble wanted to go back to the animal shelter.', 'Pebble did not like the dish of treats.'],
            kinds: [null, 'opposite', 'toofar', 'opposite'],
            notes: [null, 'Paragraph 5 says Pebble rubbed against Cleo and purred.', 'Pebble hid, but no clue says she wanted to go back.', 'Paragraph 4 says Pebble crept all the way to the dish.'],
            chart: { facts: 'Pebble hid under the bed and hissed with her ears flat.', know: 'Animals hide and hiss when they are scared.', conclusion: 'Pebble was scared in her new home at first.' },
            why: 'Paragraph 1 says Pebble ran under the bed. Paragraph 2 says she hissed, and her tail puffed up. So Pebble was scared in her new home at first.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Cleo most likely do next?',
            choices: ['She will pet Pebble gently.', 'She will grab Pebble and squeeze her tight.', 'She will take Pebble back to the shelter.', 'She will hide her library book under the bed.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 2 shows that reaching for Pebble made her hiss. A tight squeeze would scare her.', 'Pebble is purring now. Cleo has no reason to take her back.', null],
            why: 'Paragraph 5 says Pebble rubbed against Cleo and began to purr. A cat purrs when it feels safe. So Cleo will most likely pet Pebble gently.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Cleo move the dish a little closer each day?',
            choices: ['She wants Pebble to come closer to her bit by bit.', 'She needs more room under the bed for her books.', 'She wants to eat some of the treats as she reads.', 'Dad told her to move the dish every day.'],
            kinds: [null, 'noclue', 'noclue', 'noclue'],
            notes: [null, null, 'The treats are for Pebble. No clue says Cleo eats them.', 'The passage never says Dad told her to do this.'],
            why: 'The passage does not say why. Paragraph 4 says Cleo moved the dish closer to where she sat. By Thursday, Pebble came all the way to it. So Cleo wanted Pebble to come closer, bit by bit.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Cleo learns in the passage?',
            choices: ['It is important to be patient with someone who is scared.', 'It is important to reach for a new pet right away.', 'It is important to read library books out loud.', 'It is important to give a cat a lot of treats.'],
            kinds: [null, 'opposite', 'onedetail', 'onedetail'],
            notes: [null, 'Paragraph 2 says Cleo reached for Pebble, and Pebble hissed.', 'Reading out loud is one thing Cleo did. It is not the lesson.', 'The treats are one detail. They are not the lesson.'],
            why: 'In paragraph 2, Cleo reaches for Pebble too soon, and Pebble hisses. In paragraphs 3 and 4, Cleo waits and goes slow. In paragraph 5, Pebble purrs. Cleo learns to be patient.' }
        ] }
    ],

    /* ═══ LEVEL 5 · FK 4.0 ═══════════════════════════════ */
    5: [
      { title: 'One Letter Short', genre: 'story',
        paragraphs: [
          'For a whole month, Kofi had studied his spelling list every single night. His older sister quizzed him during breakfast, and his grandpa quizzed him on the walk to school. Kofi was sure that he would win the school spelling bee.',
          'On the day of the contest, the gym was packed with parents, grandparents and little brothers and sisters. One by one, the other spellers missed a word and returned to their seats. At last, only Kofi and a girl named Rina were left on the stage.',
          `Kofi's next word was "rhythm." He spelled it slowly and carefully, but he left out the letter h. When the judge rang a little silver bell, Rina stepped up to the microphone. She spelled "rhythm" correctly, and then she spelled one more word to win.`,
          `Kofi's throat felt tight, and he stared at the floor and squeezed his fists. When the audience clapped for Rina, Kofi kept his hands in his lap. Then he looked out at the crowd and noticed his grandpa, who was clapping for Rina and nodding at Kofi.`,
          `Kofi took a deep breath, walked across the stage and held out his hand to Rina. "Great job," he said. Rina shook his hand and grinned. "You almost had me," she said. "Do you want to study together for next year?" A slow smile spread across Kofi's face.`
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Kofi?',
            choices: ['Kofi was very upset that he lost.', 'Kofi did not care if he won or lost.', 'Kofi did not study for the spelling bee.', 'Kofi was angry at Rina for cheating.'],
            kinds: [null, 'opposite', 'opposite', 'toofar'],
            notes: [null, 'Paragraph 4 says his throat felt tight and he squeezed his fists. He cared a lot.', 'Paragraph 1 says Kofi studied every night for a month.', 'Kofi was upset, but no clue says Rina cheated.'],
            chart: { facts: `Kofi's throat felt tight, and he squeezed his fists.`, know: 'When people are upset, their throats can feel tight.', conclusion: 'Kofi was very upset that he lost.' },
            why: 'Paragraph 1 says Kofi was sure he would win. Paragraph 4 says his throat felt tight and he squeezed his fists. So Kofi was very upset that he lost.' },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Kofi most likely do next?',
            choices: ['He will say yes to studying with Rina.', 'He will quit spelling and never study again.', 'He will run off the stage without a word.', 'He will ask the judge for one more turn.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Kofi studied for a whole month, and he smiled when Rina asked. He will not quit.', 'Paragraph 5 says Kofi held out his hand to Rina and smiled. He is not running away.', 'The bee is over. No clue says Kofi will ask for a turn.'],
            why: 'Paragraph 5 says Rina asked Kofi to study with her. Then a smile spread across his face. So Kofi will most likely say yes.' },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: `Why does Kofi walk over and shake Rina's hand?`,
            choices: ['He wants to show Rina she did well, like his grandpa did.', 'He wants Rina to give him her prize.', 'The judge told him to shake her hand.', 'He wants to ask Rina to study with him.'],
            kinds: [null, 'noclue', 'noclue', 'wrongwho'],
            notes: [null, null, 'The passage never says the judge told him to.', 'Rina is the one who asks about studying, in paragraph 5.'],
            why: 'The passage does not say why. Paragraph 4 says his grandpa clapped for Rina and nodded at Kofi. Then Kofi told Rina, "Great job." So he wanted to show Rina she did well, like his grandpa did.' },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Kofi learns in the passage?',
            choices: ['It is important to be kind, even when you lose.', 'It is important to win every contest you enter.', 'It is important to study during breakfast.', 'It is important to keep your hands in your lap.'],
            kinds: [null, 'opposite', 'onedetail', 'wrongtime'],
            notes: [null, 'Kofi does not win. The story is about how he acts when he loses.', 'Studying at breakfast is one detail in paragraph 1. It is not the lesson.', 'Paragraph 4 says Kofi kept his hands in his lap. That is one small part, not the lesson.'],
            why: 'In paragraph 3, Kofi loses. In paragraph 4, he is upset. In paragraph 5, he shakes hands and says "Great job." Kofi learns to be kind, even when he loses.' }
        ] },

      { title: 'The Porcupine Joke', genre: 'story',
        paragraphs: [
          `On Monday morning, Bao walked into class with a big smile and a brand-new haircut that was very short on the sides and spiky on top. Sami pointed at him, laughed and said loudly, "You look like a porcupine!" A few kids at the next table giggled.`,
          `Bao's smile disappeared. He pulled his hood up over his head as he slid into his seat. During reading, he kept his eyes glued to his book. On other days, Bao always asked Sami to play soccer at recess. Today, he sat alone on the bench by the fence instead.`,
          'Sami kicked the soccer ball against the wall by himself. Every time the ball bounced back, he thought about the giggles that morning. His stomach felt heavy, as if he had swallowed a stone.',
          `After recess, Sami walked over to Bao's desk. "I'm sorry I called you a porcupine," he said quietly. "Honestly, your haircut is really cool." Bao looked up at him, and then he slowly pushed back his hood.`,
          'At lunch, Sami picked up the soccer ball and looked over at Bao. He raised his eyebrows and nodded toward the door. Bao grinned and hopped up from his seat.'
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Bao and Sami?',
            choices: ['Bao and Sami are good friends.', 'Bao and Sami just met that morning.', 'Bao and Sami do not like playing soccer.', 'Bao and Sami are brothers who live together.'],
            kinds: [null, 'opposite', 'opposite', 'toofar'],
            notes: [null, 'Paragraph 2 says Bao always asks Sami to play. They are not new to each other.', 'Paragraph 2 says Bao always asked Sami to play soccer at recess.', 'They are close, but no clue says they are brothers.'],
            chart: { facts: 'Bao always asks Sami to play soccer at recess.', know: 'Friends like to play together.', conclusion: 'Bao and Sami are good friends.' },
            why: 'Paragraph 2 says Bao always asks Sami to play soccer at recess. Paragraph 3 says Sami played alone, and his stomach felt heavy. So Bao and Sami are good friends.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Bao most likely do next?',
            choices: ['He will go out and play soccer with Sami.', 'He will sit by himself on the bench again.', 'He will pull his hood back over his head.', `He will make fun of Sami's hair at lunch.`],
            kinds: [null, 'wrongtime', 'opposite', 'noclue'],
            notes: [null, 'Bao sat on the bench in paragraph 2. Now he is grinning at Sami.', 'Paragraph 4 says Bao pushed back his hood after Sami said sorry.', 'No clue says Bao wants to get back at Sami.'],
            why: 'Paragraph 5 says Sami held the ball and nodded at the door. Bao grinned and hopped up. So Bao will most likely go play soccer with Sami.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Bao pull his hood up over his head?',
            choices: ['He wants to hide his new haircut.', 'He feels cold sitting in the classroom.', 'He wants to look more like a porcupine.', 'The teacher told the class to wear hoods.'],
            kinds: [null, 'noclue', 'opposite', 'noclue'],
            notes: [null, 'No clue in the passage says the room is cold.', 'Bao did not like being called a porcupine. His smile went away.', 'The passage never says the teacher told them to.'],
            why: `The passage does not say why. Paragraph 1 says Sami laughed at Bao's haircut. Paragraph 2 says Bao's smile went away. Then he pulled up his hood. So Bao wanted to hide his haircut.` },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Sami learns in the passage?',
            choices: ['It is important to think about how your words make others feel.', 'It is important to make the whole class laugh at your jokes.', 'It is important to kick a ball against the wall at recess.', 'It is important to get a haircut that is short and spiky.'],
            kinds: [null, 'opposite', 'onedetail', 'noclue'],
            notes: [null, 'Sami made kids laugh in paragraph 1, and it hurt Bao.', 'Sami kicked the ball alone in paragraph 3. That is one detail, not the lesson.', 'The haircut is about Bao. It is not what Sami learns.'],
            why: `In paragraphs 1 and 2, Sami's joke makes Bao sad. In paragraph 3, Sami feels bad. In paragraph 4, he says sorry. Sami learns to think about how his words make others feel.` }
        ] }
    ],

    /* ═══ LEVEL 6 · FK 4.5 ═══════════════════════════════ */
    6: [
      { title: `Badger's Lantern`, genre: 'story',
        paragraphs: [
          'Long ago, in a deep pine forest, Badger owned the only lantern. Every evening he polished its glass until it sparkled, then hung it on a hook outside his den. The other animals often stopped to admire its warm glow, but Badger never let anyone touch it.',
          `One windy evening, Rabbit hurried up the path. "My youngest child has wandered off," she said, "and it is too dark to search. May I please borrow your lantern?" Badger hugged the lantern to his chest. "It might get scratched," he grumbled, and he shut the door.`,
          `Later that night, a terrible storm crashed through the forest. Rainwater flooded Badger's den, so he grabbed his lantern and splashed outside. The lantern lit up the dripping trees, but the flood had covered every path he knew. Badger turned in circles, shivering, with no idea which way to go.`,
          `Then he heard voices in the dark. Rabbit, Mole and Fox were huddled under a fallen log, still calling for the little rabbit. "We know these woods by heart," Mole said, "but we cannot see the branches in our way." Badger looked down at his lantern for a long moment.`,
          'At last, Badger stepped forward and raised the lantern high. With his light and their directions, the animals found the little rabbit curled under a fern. Then Mole led everyone to a dry cave on the hill.',
          `A week later, Squirrel knocked on Badger's door at sunset. "My sister lives across the creek, and the trail is so dark," she said. "Could I borrow your lantern?" Badger glanced at the lantern on its hook. Then he thought about the night of the storm.`
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Badger?',
            choices: ['At first, Badger cared more about his lantern than his neighbors.', 'Badger was afraid that the storm would wash his lantern away.', 'Badger did not know how to light his lantern by himself.', 'Badger wanted to help Rabbit find her child right away.'],
            kinds: [null, 'toofar', 'opposite', 'opposite'],
            notes: [null, 'Paragraph 3 says Badger took his lantern out into the storm. No clue says he was afraid it would wash away.', 'Paragraph 1 says Badger hung up his glowing lantern every evening.', 'Paragraph 2 says Badger shut the door on Rabbit.'],
            chart: { facts: 'Badger never let anyone touch his lantern, and he shut the door on Rabbit.', know: 'People who will not help a neighbor in need care more about something else.', conclusion: 'At first, Badger cared more about his lantern than his neighbors.' },
            why: `Paragraph 1 says Badger never let anyone touch his lantern. Paragraph 2 says Rabbit's child was lost, but Badger shut the door. So at first, Badger cared more about his lantern than his neighbors.` },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Badger most likely do next?',
            choices: ['He will lend Squirrel his lantern.', 'He will shut the door on Squirrel.', 'He will hide his lantern in the cave.', 'He will ask Rabbit to go with Squirrel.'],
            kinds: [null, 'wrongtime', 'noclue', 'noclue'],
            notes: [null, 'That is what Badger did to Rabbit in paragraph 2. He has changed since the storm.', 'No clue says Badger wants to hide his lantern now.', 'Squirrel asked Badger for the lantern. No clue tells about Rabbit going.'],
            why: `In paragraph 5, Badger's light helped the animals find the little rabbit. In paragraph 6, Squirrel asks for the lantern, and Badger thinks about the storm. So he will most likely lend it to her.` },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Badger look down at his lantern for a long moment?',
            choices: ['He is deciding if he should help the others.', 'He is checking the glass for scratches.', 'He thinks the rain has put out the little flame.', 'He is too tired to hold the lantern up.'],
            kinds: [null, 'toofar', 'opposite', 'opposite'],
            notes: [null, 'Paragraph 2 says Badger worried about scratches. But in paragraph 4, he just heard Mole say they cannot see.', 'Paragraph 3 says the lantern lit up the trees. The flame is still on.', 'Paragraph 5 says Badger raised the lantern high.'],
            why: 'The passage does not say why. Paragraph 4 says Mole and the others could not see the branches. Badger had the only light. Then he raised it high. So he was deciding if he should help the others.' },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Badger learns in the passage?',
            choices: ['It is important to share what you have with others.', 'It is important to keep your things safe from harm.', 'It is important to polish your things every evening.', 'It is important to find a dry place in a storm.'],
            kinds: [null, 'opposite', 'onedetail', 'onedetail'],
            notes: [null, 'At first, Badger kept his lantern to himself. Sharing it is what helped everyone. The story shows the opposite.', 'Polishing the lantern is one detail in paragraph 1. It is not the lesson.', 'The dry cave is one part of paragraph 5. It is not what Badger learns.'],
            why: 'In paragraph 2, Badger will not share. In paragraph 3, he is lost. In paragraph 5, he shares his light, and the animals help him too. Badger learns to share what he has.' }
        ] },

      { title: 'Twelve Feet Deep', genre: 'story',
        paragraphs: [
          `Every Saturday morning, Zara's swimming class practiced in the shallow end of the city pool, where her feet could easily touch the bottom. This Saturday, however, the coach blew her whistle and pointed to the opposite side of the pool. "Today we are going to try the deep end," she announced. A big black number 12 was painted on the tile. It meant the water was twelve feet deep there.`,
          'The other children lined up along the edge, one behind another. Zara stayed back by the wall and gripped the metal ladder with both hands. Her heart thumped, and her legs felt like wet noodles. When it was finally her turn to jump, she shook her head and stepped away.',
          `The coach knelt down beside her and said gently, "You don't have to jump today. Let's take this one step at a time." First, Zara climbed down the ladder and held on to the side of the pool. Next, she let go with one hand and kicked her legs. Finally, she let go with both hands and floated on her back, exactly the way she had practiced a hundred times in the shallow end.`,
          `When Zara climbed out, she was grinning from ear to ear. "That wasn't so bad," she told her big brother, who had been watching from the bleachers.`,
          'The following Saturday, Zara walked straight to the deep end without stopping. She stood at the very edge with her toes curled over the tile. The coach smiled and gave her a thumbs-up.'
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Zara?',
            choices: ['Zara was scared of the deep water at first.', 'Zara did not know how to float at all.', 'Zara was angry at the coach for making her jump.', 'Zara wanted to quit swim class for good.'],
            kinds: [null, 'opposite', 'noclue', 'toofar'],
            notes: [null, 'Paragraph 3 says Zara had practiced floating a hundred times.', 'The coach said Zara did not have to jump. No clue says Zara was angry.', 'Zara stepped back once, but she came back the next Saturday.'],
            chart: { facts: 'Zara gripped the ladder, and her heart thumped.', know: 'People hold on tight and feel their heart pound when they are afraid.', conclusion: 'Zara was scared of the deep water at first.' },
            why: 'Paragraph 2 says Zara gripped the ladder, and her heart thumped. It says she shook her head and stepped away. So Zara was scared of the deep water at first.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Zara most likely do next?',
            choices: ['She will jump into the deep end.', 'She will hold the ladder and climb back out.', 'She will swim back to the shallow end.', 'She will sit in the bleachers with her brother.'],
            kinds: [null, 'wrongtime', 'opposite', 'wrongwho'],
            notes: [null, 'Zara held the ladder the week before. Now she stands at the very edge.', 'Paragraph 5 says Zara walked straight to the deep end.', 'Her brother watched from the bleachers. Zara is at the edge of the pool.'],
            why: 'Paragraph 4 says Zara was grinning after the deep end. Paragraph 5 says she stood at the edge with her toes curled. The coach gave her a thumbs-up. So Zara will most likely jump in.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does the coach tell Zara she does not have to jump today?',
            choices: ['She can see that Zara is afraid.', 'She thinks Zara is not a good swimmer.', 'The deep end is closed for the day.', 'She wants Zara to go home early.'],
            kinds: [null, 'toofar', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 3 shows Zara can float. No clue says the coach thinks she swims badly.', 'Paragraph 2 says the other kids lined up to jump. The deep end is open.', 'The coach stays with Zara and helps her try the deep end.'],
            why: 'The passage does not say why. Paragraph 2 says Zara gripped the ladder and stepped away. Then the coach knelt beside her. So the coach saw that Zara was afraid and wanted to help.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Zara learns in the passage?',
            choices: ['It is important to face a fear one small step at a time.', 'It is important to stay where your feet can touch the bottom.', `It is important to listen for the coach's whistle.`, 'It is important to float on your back in the pool.'],
            kinds: [null, 'opposite', 'onedetail', 'onedetail'],
            notes: [null, 'Zara went to the deep end, and she was glad. The story shows the opposite.', 'The whistle is one detail in paragraph 1. It is not the lesson.', 'Floating is one step Zara took. It is not the whole lesson.'],
            why: 'In paragraph 2, Zara is scared. In paragraph 3, she goes one step at a time. In paragraph 5, she walks right to the deep end. Zara learns to face a fear one step at a time.' }
        ] }
    ]
  }
};
