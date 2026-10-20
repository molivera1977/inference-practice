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

      { title: 'The Line for Face Paint', genre: 'story',
        paragraphs: [
          `The block party on Quinn's street had music, games and a face-painting table. Quinn wanted a tiger face more than anything, but the line for face paint stretched all the way to the corner.`,
          'Quinn tapped his foot and groaned. Then he noticed a little girl in a pink hat near the front, and he slipped in front of her. The kids behind her frowned.',
          `The face painter looked at Quinn and then at the little girl. She pointed her brush at the end of the line. Quinn's cheeks felt hot as he walked back to the corner.`,
          'By the time it was his turn, the orange paint was gone, so Quinn got gray mouse whiskers. Later, he noticed a long line for the bounce house. He stepped toward the front. Then he touched his whiskers and stopped.'
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Quinn?',
            choices: ['Quinn did not want to wait in the long line.', 'Quinn did not care what his face looked like.', 'Quinn was good friends with the girl in the pink hat.', 'Quinn wanted to paint faces at the block party.'],
            kinds: [null, 'opposite', 'noclue', 'wrongwho'],
            notes: [null, 'Paragraph 1 says Quinn wanted a tiger face more than anything.', 'Paragraph 2 tells about the girl in the pink hat. It never says Quinn knew her.', 'Paragraph 3 tells about the face painter. Quinn wanted his own face painted.'],
            chart: { facts: 'The line went to the corner, and Quinn tapped his foot and groaned.', know: 'People tap their feet and groan when they do not want to wait.', conclusion: 'Quinn did not want to wait in the long line.' },
            why: 'Paragraph 1 says the line went all the way to the corner. Paragraph 2 says Quinn tapped his foot and groaned. So Quinn did not want to wait in the long line.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Quinn most likely do next?',
            choices: ['He will wait at the end of the bounce house line.', 'He will slip in at the front of the bounce house line.', 'He will get back in line for a tiger face.', 'He will go home and wash off his gray whiskers.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 4 says Quinn stepped toward the front, but then he stopped.', 'Paragraph 4 says the orange paint was gone. Quinn cannot get a tiger face now.', 'Paragraph 4 says Quinn is at the bounce house. Nothing says he is going home.'],
            why: 'Paragraph 4 says Quinn got mouse whiskers, not a tiger face. Then he stepped toward the front of the bounce house line, touched his whiskers and stopped. So he will most likely wait at the end of the line.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does the face painter point to the end of the line?',
            choices: ['She saw Quinn sneak in front of the little girl.', 'She ran out of the orange paint for tigers.', 'She wants Quinn to go and help the kids at the back.', 'She thinks Quinn wants gray mouse whiskers.'],
            kinds: [null, 'wrongtime', 'noclue', 'opposite'],
            notes: [null, 'The orange paint ran out later, in paragraph 4.', 'Paragraph 3 says the painter pointed her brush. No clue says she needs help.', 'Paragraph 1 says Quinn wanted a tiger face.'],
            why: 'The passage does not say why. Paragraph 2 says Quinn slipped in front of a little girl, and the kids frowned. Paragraph 3 says the painter looked at Quinn and then at the girl. So she saw Quinn sneak in front of her.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Quinn learns in the passage?',
            choices: ['It is important to wait your turn.', 'It is important to get to the front of a line fast.', 'It is important to wear a pink hat to a block party.', 'It is important to use orange paint for a tiger face.'],
            kinds: [null, 'opposite', 'wrongwho', 'onedetail'],
            notes: [null, 'In paragraph 2, Quinn slipped in near the front. Then he lost his tiger face. The story shows the opposite.', 'The girl in paragraph 2 wore the pink hat. That is not what Quinn learns.', 'The orange paint is one detail in paragraph 4. It is not the lesson.'],
            why: 'In paragraph 2, Quinn slips in front of a little girl. In paragraph 3, he has to go to the back. In paragraph 4, he misses the tiger face, and then he stops at the bounce house line. Quinn learns to wait his turn.' }
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

      { title: 'The Zoo in the Living Room', genre: 'story',
        paragraphs: [
          `On Saturday, Lupe's big sister, Opal, was taking her to the city zoo. Lupe put on her lion shirt and packed a zoo map. By seven o'clock, she was sitting by the front door, ready to go.`,
          'Then thunder boomed, and heavy rain poured down. Opal looked out the window and shook her head. Lupe stomped to her room and flopped onto her bed.',
          'Soon, Lupe heard thumps in the living room. She peeked out and saw a red blanket on the floor. Her stuffed animals sat in a row on the couch, even the lion with one ear. Opal had taped up a sign that said CITY ZOO.',
          'Opal handed Lupe a paper ticket and some crackers. They sat on the blanket and took turns acting like animals. Opal flapped her arms and squawked like a parrot until Lupe fell over laughing.',
          'Rain still drummed on the window as Opal said, "Your turn." Lupe jumped up and looked at the lion with one ear.'
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Lupe?',
            choices: ['Lupe was excited to go to the zoo.', 'Lupe did not want to go to the zoo.', 'Lupe was scared of the loud thunder.', 'Lupe had been to the city zoo many times.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null, `Paragraph 1 says Lupe was ready to go by seven o'clock.`, 'Paragraph 2 says Lupe stomped to her room. No clue says the thunder scared her.', 'Paragraph 1 tells about this trip. It never says she went before.'],
            chart: { facts: `Lupe put on her lion shirt and was ready by seven o'clock.`, know: 'People get ready early when they cannot wait to go.', conclusion: 'Lupe was excited to go to the zoo.' },
            why: `Paragraph 1 says Lupe put on her lion shirt and packed a zoo map. She was ready to go by seven o'clock. So Lupe was excited to go to the zoo.` },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Lupe most likely do next?',
            choices: ['She will act like a lion for Opal.', 'She will stomp back to her room and shut the door.', 'She will walk to the city zoo in the rain.', 'She will put all of her stuffed animals away.'],
            kinds: [null, 'wrongtime', 'opposite', 'noclue'],
            notes: [null, 'That happened in paragraph 2. In paragraph 5, Lupe jumps up when it is her turn.', 'Paragraph 5 says rain still drummed on the window.', 'Paragraph 5 says Opal said, "Your turn." Nothing says the game is over.'],
            why: 'Paragraph 4 says Lupe and Opal took turns acting like animals. Paragraph 5 says Opal said, "Your turn." Then Lupe looked at the lion. So she will most likely act like a lion.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Opal set up the stuffed animals in the living room?',
            choices: ['She wants to cheer Lupe up on a rainy day.', 'Lupe asked Opal to play zoo with her.', 'She wants to clean the toys out of the room.', 'She thinks the city zoo is closed for good.'],
            kinds: [null, 'opposite', 'noclue', 'toofar'],
            notes: [null, 'Paragraph 3 says Lupe heard thumps and peeked out. She did not know what Opal was doing.', 'Paragraph 3 says the toys sat on the couch by a sign. No clue tells about cleaning.', 'Paragraph 2 says it was raining hard. No clue says the zoo is closed for good.'],
            why: 'The passage does not say why. Paragraph 2 says Lupe stomped to her room when the rain came. Paragraph 3 says Opal made a zoo with a sign. So Opal wanted to cheer Lupe up.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Lupe learns in the passage?',
            choices: ['It is important to find a new way to have fun when plans change.', 'It is important to stay in your room by yourself when things go wrong.', 'It is important to pack a map every time you go to the zoo.', 'It is important to wear your lion shirt on a rainy Saturday.'],
            kinds: [null, 'opposite', 'onedetail', 'onedetail'],
            notes: [null, 'Lupe flopped on her bed in paragraph 2, but the fun came when she came out. The story shows the opposite.', 'The zoo map is one detail in paragraph 1. It is not the lesson.', 'The lion shirt is one detail in paragraph 1. It is not what Lupe learns.'],
            why: 'In paragraph 2, the rain stops the zoo trip, and Lupe stomps off. In paragraphs 3 and 4, Opal makes a zoo at home, and Lupe laughs. Lupe learns to find a new way to have fun when plans change.' }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 ═══════════════════════════════ */
    4: [
      { title: `Pupusas at Luna's House`, genre: 'story',
        paragraphs: [
          'At home, Kenji ate the same dinner almost every night: plain noodles with butter. When his friend Luna asked him to dinner on Friday, he asked her three times what they would eat.',
          `Kenji had soccer practice after school, and there was no time for a snack. When he got to Luna's house, his stomach was growling. Luna's dad set down a plate with two round, flat corn cakes and some cabbage. "Pupusas," Luna said. "They're stuffed with cheese and beans."`,
          `Kenji poked a corn cake with his fork. "I'm not very hungry," he said quietly. Just then, his stomach let out a long, loud growl. Luna's little brother, Beto, giggled and gobbled up his third pupusa in four bites.`,
          'Kenji took the tiniest bite he could. Then his eyes opened wide. The corn cake was crispy on the outside, and warm cheese stretched from the middle. He ate both pupusas and asked for one more.',
          `A week later, Kenji's mom made something new for dinner. It was orange soup with tiny green leaves on top. Kenji stared at the bowl for a long moment. Then he thought about Friday night at Luna's house.`
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Kenji?',
            choices: ['Kenji was very hungry when he sat down to eat.', 'Kenji ate a big snack right after soccer practice.', 'Kenji hurt his leg at soccer practice that day.', `Kenji had eaten at Luna's house many times.`],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 2 says there was no time for a snack.', 'Paragraph 2 tells about soccer practice. It never says Kenji got hurt.', 'Paragraph 1 says Luna asked Kenji to dinner. It never says he ate there before.'],
            chart: { facts: 'Kenji had no time for a snack, and his stomach was growling.', know: 'Your stomach growls when your body needs food.', conclusion: 'Kenji was very hungry when he sat down to eat.' },
            why: 'Paragraph 2 says Kenji had no time for a snack after soccer. It says his stomach was growling. So Kenji was very hungry when he sat down to eat.' },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Kenji most likely do next?',
            choices: ['He will taste the orange soup.', 'He will ask his mom for plain noodles.', `He will go to Luna's house for dinner.`, 'He will give the bowl of soup to Beto.'],
            kinds: [null, 'opposite', 'wrongtime', 'wrongwho'],
            notes: [null, 'Paragraph 5 says Kenji thought about Friday night. He did not ask for noodles.', `Kenji went to Luna's house a week before. Paragraph 5 is at his own home.`, `Paragraph 3 says Beto is Luna's little brother. He is not at Kenji's house.`],
            why: 'Paragraph 4 says Kenji ate both pupusas and asked for one more. Paragraph 5 says he stared at the new soup and thought about that night. So he will most likely taste the orange soup.' },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Kenji say he is not very hungry?',
            choices: ['He does not want to eat a food he has never had.', `He already ate too many pupusas at Luna's house.`, 'His stomach hurts after running at soccer practice.', 'He wants to save room for a big dessert.'],
            kinds: [null, 'wrongtime', 'toofar', 'noclue'],
            notes: [null, 'Kenji says this before his first bite. He eats the pupusas later, in paragraph 4.', 'Paragraph 3 says his stomach growled. That is a hungry sound, not a hurt one.', 'The passage never tells about dessert.'],
            why: 'The passage does not say why. Paragraph 1 says Kenji eats plain noodles almost every night. Paragraph 3 says he poked the new food, but his stomach growled. So he did not want to eat a food he had never had.' },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Kenji learns in the passage?',
            choices: ['It is important to try new things.', 'It is important to eat the same dinner every night.', 'It is important to eat a snack before soccer practice.', 'It is important to eat your food as fast as Beto.'],
            kinds: [null, 'opposite', 'onedetail', 'wrongwho'],
            notes: [null, 'Paragraph 1 says Kenji ate the same dinner almost every night. Then he found a new food he loved. The story shows the opposite.', 'The snack is one detail in paragraph 2. It is not the lesson.', 'Beto ate fast in paragraph 3. That is not what Kenji learns.'],
            why: 'In paragraph 1, Kenji eats the same dinner almost every night. In paragraph 4, he tries a pupusa and loves it. In paragraph 5, he is ready to try a new soup. Kenji learns to try new things.' }
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

      { title: 'No Recess on Friday', genre: 'story',
        paragraphs: [
          `On Tuesday morning, Desmond carried the attendance folder down the hall to the office. As he passed the principal's door, he heard Ms. Haskins talking on the phone. "Yes," she said, "there will be no recess for the fourth grade this Friday." Then the door swung shut, and Desmond hurried on to the office.`,
          'At lunch, Desmond stood up at his table and shared the news. By the end of lunch, every fourth grader had heard it. Some kids groaned and put their heads down. A girl named Talia said it was the worst week of her whole life. Three boys made signs that said SAVE OUR RECESS and taped them to their desks.',
          'All afternoon, kids crowded around Desmond and begged for more news. Desmond liked being the one who knew things. By the end of the day, he was telling everyone that recess was canceled because the fourth graders were too noisy in the hallway.',
          'On Thursday afternoon, the loudspeaker crackled. "Tomorrow there will be no recess," said Ms. Haskins, "because the fourth grade is going on a surprise trip to the science museum!" The classroom exploded with cheers, and the three boys peeled the signs off their desks. Desmond slid down low in his seat, and his ears burned.',
          'On Friday morning, as the class lined up for the bus, Talia whispered that she had heard two teachers talking about something big next week. A few kids turned to stare at Desmond. He opened his mouth and then closed it again. Then he glanced toward the front of the line, where his teacher, Mr. Pruitt, was counting heads.'
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Desmond?',
            choices: ['Desmond heard only part of what Ms. Haskins said.', 'Desmond heard all of the phone call from the hall.', 'Desmond knew about the museum trip all along.', 'Desmond wanted to keep the news a secret.'],
            kinds: [null, 'opposite', 'noclue', 'opposite'],
            notes: [null, 'Paragraph 1 says the door swung shut after one sentence.', 'No clue says he knew about the trip before paragraph 4.', 'Paragraph 2 says Desmond stood up at lunch and shared the news.'],
            chart: { facts: 'The door shut after Desmond heard "no recess," and the reason came later.', know: 'If you hear only part of something, you can miss the most important part.', conclusion: 'Desmond heard only part of what Ms. Haskins said.' },
            why: 'Paragraph 1 says the door swung shut after one sentence. Paragraph 4 tells why there is no recess. Desmond never heard that part. So he heard only part of what Ms. Haskins said.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Desmond most likely do next?',
            choices: ['He will ask Mr. Pruitt what is coming next week.', 'He will tell the whole class that the school is closing.', 'He will make a sign and tape it to his desk.', 'He will run back to listen at the office door.'],
            kinds: [null, 'noclue', 'wrongwho', 'opposite'],
            notes: [null, 'Paragraph 5 says Desmond opened his mouth and then closed it. He did not tell the class anything.', 'The three boys made signs in paragraph 2. Desmond did not.', 'Paragraph 5 says Desmond looked at Mr. Pruitt, not at the office.'],
            why: 'Paragraph 5 says kids stared at Desmond. He opened his mouth and then closed it. Then he looked at his teacher, Mr. Pruitt. So he will most likely ask Mr. Pruitt about next week.' },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Desmond slide down low in his seat?',
            choices: ['He feels silly that the story he told was wrong.', 'He is sad that there will be no recess tomorrow.', 'He does not want to go to the science museum.', 'He is tired from carrying the folder to the office.'],
            kinds: [null, 'opposite', 'noclue', 'wrongtime'],
            notes: [null, 'Paragraph 4 says the class cheered. No recess is good news now.', 'Paragraph 4 never says he does not want to go.', 'He carried the folder on Tuesday, in paragraph 1.'],
            why: 'The passage does not say why. Paragraph 3 says Desmond told kids the class was too loud. Paragraph 4 says the real reason was a trip. His ears burned. So he feels silly that his story was wrong.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Desmond learns in the passage?',
            choices: ['It is important to get all the facts before you share news.', 'It is important to make signs when something seems unfair.', 'It is important to be the first one to tell everyone the news.', 'It is important to carry folders to the office for your teacher.'],
            kinds: [null, 'wrongwho', 'opposite', 'onedetail'],
            notes: [null, 'The three boys made signs in paragraph 2. That is not what he learns.', 'In paragraph 2, Desmond rushed to tell the news. In paragraph 3, the reason he told was wrong. The story shows the opposite.', 'The folder is one detail in paragraph 1. It is not the lesson.'],
            why: 'In paragraph 1, Desmond hears only part of the news. In paragraph 3, he tells a story that is not true. In paragraph 5, he stops and looks at his teacher. Desmond learns to get all the facts first.' }
        ] }
    ]
  }
};
