/* Prove It, version 2 of Levels 1–6 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-prove.js; try 2 gets these. Same question slots as version 1.
   Level 1 written 11/10; Levels 2–6 added 11/11 (lane: outdoor days, weather, seasons, nature,
   jobs around town). No v2 passage reuses its level's v1 answer ideas or any premise in the class's sites. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.prove = {
  2: {
    1: [
      { title: 'The Day Dad Voted', genre: 'story',
        paragraphs: [
          'On Tuesday, Dad went to vote for the next mayor. Sofia went with him. Dad had circled the day on the calendar with a red marker.',
          'The vote was in the gym at Sofia\'s school. The line went all the way around the gym and out the door. Dad waited and read the signs on the wall.',
          'Small booths with curtains stood at the back of the gym. Sofia asked Dad who counted the votes and how long it took.',
          'That night, Sofia cut paper into little squares. Then she had her family vote on what to eat for dinner.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that voting was important to Dad?',
            choices: [
              'Dad had circled the day on the calendar with a red marker.',
              'The vote was in the gym at Sofia\'s school.',
              'Small booths with curtains stood at the back of the gym.',
              'That night, Sofia cut paper into little squares.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 2 tells where the vote was. It does not show how Dad felt about voting.',
              'Paragraph 3 tells what was in the gym. It does not show how Dad felt about voting.',
              'Paragraph 4 tells what Sofia did. The idea is about Dad.'],
            why: 'Paragraph 1 says Dad circled the day on the calendar with a red marker. People mark a day like that when it matters to them. So voting was important to Dad.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that many people came to vote?',
            choices: [
              'The line went all the way around the gym and out the door.',
              'Dad had circled the day on the calendar with a red marker.',
              'The vote was in the gym at Sofia\'s school.',
              'On Tuesday, Dad went to vote for the next mayor.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 is about Dad and the calendar. It does not show how many people came.',
              'Paragraph 2 tells where the vote was. It does not show how many people came.',
              'Paragraph 1 tells when Dad went and why. It does not show how many people came.'],
            why: 'Paragraph 2 says the line went all the way around the gym and out the door. A line gets that long only when lots of people come. So many people came to vote.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Sofia was curious about voting.',
            answer: 'Sofia asked Dad who counted the votes and how long it took.',
            notes: {
              'Small booths with curtains stood at the back of the gym.': 'Paragraph 3 tells what was in the gym. It does not show what Sofia wanted to know.',
              'Sofia went with him.': 'Paragraph 1 tells who went with Dad. It does not show what Sofia wanted to know.',
              'Dad waited and read the signs on the wall.': 'This sentence is about Dad, not Sofia.',
              'Then she had her family vote on what to eat for dinner.': 'This tells what Sofia did that night at home. Look for what Sofia wanted to know at the gym.'
            },
            why: 'Paragraph 3 says Sofia asked who counted the votes and how long it took. People ask questions when they want to know more. So Sofia was curious about voting.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Sofia wanted to try voting herself. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Then she had her family vote on what to eat for dinner.',
              'Small booths with curtains stood at the back of the gym.',
              'Dad waited and read the signs on the wall.',
              'The line went all the way around the gym and out the door.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 3 tells what was in the gym. It does not show Sofia voting.',
              'Paragraph 2 tells what Dad did. The idea is about Sofia.',
              'Paragraph 2 tells about the line at the gym. It does not show Sofia voting.'],
            why: 'Paragraph 4 says Sofia cut paper into squares. Then she had her family vote on dinner. She made her own vote at home. So Sofia wanted to try voting herself.' }
        ] },

      { title: 'Picking Tomatoes With Grandpa', genre: 'story',
        paragraphs: [
          'Felix spent the day at Grandpa\'s house. Grandpa had a big patch of red tomatoes out back.',
          'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink. Then they each took a box out to the garden.',
          'Felix tiptoed between the rows and did not step on a plant. He picked and picked, and soon his box was full. Then he wiped the sweat off his face.',
          'Grandpa washed some tomatoes with the hose. Felix ate two of them right there and licked his lips.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that it was hot in the garden?',
            choices: [
              'Then he wiped the sweat off his face.',
              'Felix spent the day at Grandpa\'s house.',
              'Grandpa had a big patch of red tomatoes out back.',
              'He picked and picked, and soon his box was full.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Felix was. It does not tell how hot it was.',
              'Paragraph 1 tells about Grandpa\'s tomatoes. It does not tell about the heat.',
              'Paragraph 3 tells how much Felix picked. It does not show that it was hot.'],
            why: 'Paragraph 3 says Felix wiped the sweat off his face. People sweat when it is hot. So it was hot in the garden.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Grandpa wanted Felix to stay cool?',
            choices: [
              'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink.',
              'Grandpa washed some tomatoes with the hose.',
              'Then he wiped the sweat off his face.',
              'Then they each took a box out to the garden.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 4 says Grandpa washed the tomatoes. That is not about keeping Felix cool.',
              'Paragraph 3 tells what Felix did. The idea is about Grandpa.',
              'Paragraph 2 tells what they took to the garden. It does not show Grandpa keeping Felix cool.'],
            why: 'Paragraph 2 says Grandpa put a straw hat on Felix and gave him a cold drink. A hat keeps the sun off your head. A cold drink cools you down. So Grandpa wanted Felix to stay cool.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Felix was careful in the garden.',
            answer: 'Felix tiptoed between the rows and did not step on a plant.',
            notes: {
              'He picked and picked, and soon his box was full.': 'Paragraph 3 tells how much Felix picked. It does not show that he was careful.',
              'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink.': 'Paragraph 2 tells what Grandpa did. The idea is about Felix.'
            },
            why: 'Paragraph 3 says Felix tiptoed between the rows. He did not step on a plant. Plants can break if you step on them. So Felix was careful in the garden.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Felix liked the tomatoes. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Felix ate two of them right there and licked his lips.',
              'Grandpa washed some tomatoes with the hose.',
              'Grandpa had a big patch of red tomatoes out back.',
              'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink.'
            ],
            kinds: [null, 'wrongwho', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 4 tells what Grandpa did with the tomatoes. It does not show how Felix felt about them.',
              'Paragraph 1 says Grandpa had tomatoes. It does not show that Felix liked them.',
              'Paragraph 2 tells what Grandpa did. The idea is about Felix and the tomatoes.'],
            why: 'Paragraph 4 says Felix ate two tomatoes right there and licked his lips. People lick their lips when food tastes good. So Felix liked the tomatoes.' }
        ] }
    ],

    /* ─────────────── Level 2 · FK 2.5 · 90–140 words ─────────────── */
    2: [
      // FACTS: robins often build nests in door wreaths; robin eggs are blue; a robin usually lays 3–5 eggs;
      // a robin calls out and flies off when people come near its nest; the babies hatch from the eggs.
      { title: 'The Nest in the Door Wreath',
        genre: 'story',
        paragraphs: [
          'In April, Ruthie\'s mom hung a green wreath on the front door. A week later, a robin flew into it. She had a long piece of grass in her beak.',
          'Soon there was a nest in the wreath. It held four small blue eggs. Each time Ruthie opened the front door, the robin flew to a tree and chirped at her.',
          'Dad put a note on the door that said, "Please use the back door." From then on, everyone went in and out the back way.',
          'Every morning, Ruthie stood on a chair by the window to look at the nest. Then one day, four tiny beaks poked up over the top of the nest.'
        ],
        items: [
          { id: 'P01',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the robin did not want people near her nest?',
            choices: [
              'Each time Ruthie opened the front door, the robin flew to a tree and chirped at her.',
              'It held four small blue eggs.',
              'She had a long piece of grass in her beak.',
              'From then on, everyone went in and out the back way.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [
              null,
              'Paragraph 2 tells what was in the nest. It does not show how the robin felt about people.',
              'Paragraph 1 tells what the robin carried. It does not show how she felt about people.',
              'Paragraph 3 tells what the family did. The idea is about the robin.'
            ],
            why: 'Paragraph 2 says the robin flew off and chirped each time Ruthie opened the door. Birds chirp at people who come too close to their nest. So the robin did not want people near her nest.' },
          { id: 'P02',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which detail from the passage BEST shows that Dad did not want to scare the robin away?',
            choices: [
              'Dad put a note on the door that said, "Please use the back door."',
              'Every morning, Ruthie stood on a chair by the window to look at the nest.',
              'Soon there was a nest in the wreath.',
              'A week later, a robin flew into it.'
            ],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [
              null,
              'Paragraph 4 tells what Ruthie did. The idea is about Dad.',
              'Paragraph 2 tells about the nest. It does not show what Dad did.',
              'Paragraph 1 tells when the robin came. It does not show what Dad did.'
            ],
            why: 'Paragraph 2 says the robin flew away each time the front door opened. Paragraph 3 says Dad asked everyone to use the back door. Then no one would open the door by the nest. So Dad did not want to scare the robin away.' },
          { id: 'P03',
            type: 'hot',
            skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Ruthie was curious about the nest.',
            answer: 'Every morning, Ruthie stood on a chair by the window to look at the nest.',
            notes: { 'Each time Ruthie opened the front door, the robin flew to a tree and chirped at her.': 'Paragraph 2 tells what the robin did. It does not show how Ruthie felt about the nest.',
              'It held four small blue eggs.': 'Paragraph 2 tells what was in the nest. It does not show what Ruthie wanted to know.' },
            why: 'Paragraph 4 says Ruthie stood on a chair every morning to look at the nest. We look again and again at things we want to know about. So Ruthie was curious about the nest.' },
          { id: 'P04',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'The passage shows that the eggs hatched. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Then one day, four tiny beaks poked up over the top of the nest.',
              'It held four small blue eggs.',
              'In April, Ruthie\'s mom hung a green wreath on the front door.',
              'Dad put a note on the door that said, "Please use the back door."'
            ],
            kinds: [null, 'wrongtime', 'notproof', 'notproof'],
            notes: [
              null,
              'Paragraph 2 tells about the eggs at the start. It does not show that anything came out of them.',
              'Paragraph 1 tells about the wreath. It does not show what was in the nest at the end.',
              'Paragraph 3 tells about Dad\'s note. It does not show what was in the nest.'
            ],
            why: 'Paragraph 4 says four tiny beaks poked up over the top of the nest. Baby birds come out of eggs. There were four eggs, and now there were four beaks. So the eggs hatched.' }
        ] },

      { title: 'Paint Before the Rain', genre: 'story',
        paragraphs: [
          'Tate\'s dad paints houses for his job. On Saturday morning, Tate went along to help him paint Mrs. Lin\'s long wooden fence.',
          'First, Dad showed Tate how to dip just the tip of the brush into the paint. Then they painted side by side, one board at a time, all morning long.',
          'After lunch, the sky in the west turned dark gray, and the wind began to blow. Dad looked up and started to paint twice as fast. They closed the last can of paint just as the first raindrops hit the sidewalk.',
          'That night, Tate fell asleep on the couch before dinner. Dad put a warm quilt on him.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a storm was on the way?',
            choices: [
              'After lunch, the sky in the west turned dark gray, and the wind began to blow.',
              'On Saturday morning, Tate went along to help him paint Mrs. Lin\'s long wooden fence.',
              'Then they painted side by side, one board at a time, all morning long.',
              'That night, Tate fell asleep on the couch before dinner.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 1 tells where Tate went. It does not tell about the weather.',
              'Paragraph 2 tells how they painted. It does not tell about the weather.',
              'Paragraph 4 is about that night. It does not show a storm was coming.'],
            why: 'Paragraph 3 says the sky turned dark gray, and the wind began to blow. Dark clouds and wind often come before a storm. So a storm was on the way.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Dad wanted to finish before the rain came?',
            choices: [
              'Dad looked up and started to paint twice as fast.',
              'Tate\'s dad paints houses for his job.',
              'First, Dad showed Tate how to dip just the tip of the brush into the paint.',
              'After lunch, the sky in the west turned dark gray, and the wind began to blow.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'notproof'],
            notes: [null,
              'Paragraph 1 tells about Dad\'s job. It does not show he was in a hurry.',
              'Paragraph 2 is about the morning. It does not show Dad trying to beat the rain.',
              'Paragraph 3 tells about the sky. It does not show what Dad did.'],
            why: 'Paragraph 3 says Dad looked up and painted twice as fast. He saw the dark sky. We hurry when we want to get done before something comes. So Dad wanted to finish before the rain.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Tate was tired after the long day.',
            answer: 'That night, Tate fell asleep on the couch before dinner.',
            notes: {
              'Then they painted side by side, one board at a time, all morning long.': 'Paragraph 2 tells how long they painted. It does not show how Tate felt.',
              'Dad put a warm quilt on him.': 'This tells what Dad did. The idea is about how Tate felt.',
              'They closed the last can of paint just as the first raindrops hit the sidewalk.': 'Paragraph 3 tells when they finished. It does not show how Tate felt.'
            },
            why: 'Paragraph 4 says Tate fell asleep on the couch before dinner. Kids fall asleep early when they are very tired. So Tate was tired after the long day.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Tate was just learning how to paint. Which sentence from the passage BEST supports this idea?',
            choices: [
              'First, Dad showed Tate how to dip just the tip of the brush into the paint.',
              'On Saturday morning, Tate went along to help him paint Mrs. Lin\'s long wooden fence.',
              'Dad looked up and started to paint twice as fast.',
              'They closed the last can of paint just as the first raindrops hit the sidewalk.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Tate went. It does not show he was learning.',
              'Paragraph 3 tells what Dad did. The idea is about Tate.',
              'Paragraph 3 tells when they finished. It does not show Tate was learning.'],
            why: 'Paragraph 2 says Dad showed Tate how to dip the brush. We show people how to do a thing when they are new at it. So Tate was just learning how to paint.' }
        ] }
    ],

    /* ─────────────── Level 3 · FK 3.0 · 110–170 words ─────────────── */
    3: [
      // FACTS: roots poking out of the holes in the bottom of a pot show a plant has outgrown its pot;
      // tipping a pot upside down and tapping the bottom slides a plant out in one piece; roots that grow
      // around and around in a ball can be gently pulled apart before repotting; spider plants have green
      // leaves with white stripes and grow small baby plants that hang down on long, thin stems.
      { title: 'A Bigger Pot for the Spider Plant',
        genre: 'story',
        paragraphs: [
          'Aunt Pilar kept a spider plant on her kitchen windowsill. It sat in a small clay pot. Its leaves were green with white stripes. White roots poked out of the holes in the bottom of the pot.',
          'On Saturday, Tobin came over to help her give the plant a new home. Aunt Pilar spread newspaper on the table and set out a bigger pot and a bag of soil. She turned the small pot upside down and tapped the bottom. The whole plant slid out in one piece.',
          'The roots had grown around and around in a tight ball. Tobin pulled the roots apart slowly, one at a time. Then he set the plant in the new pot. He filled the space around it with fresh soil.',
          'Aunt Pilar watered the plant and set it back in the sunny window. A month later, she sent Tobin a photo. Long green leaves spilled over the sides of the new pot, and three baby plants dangled on thin stems.'
        ],
        items: [
          { id: 'P01',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the plant had grown too big for its pot?',
            choices: [
              'White roots poked out of the holes in the bottom of the pot.',
              'Its leaves were green with white stripes.',
              'On Saturday, Tobin came over to help her give the plant a new home.',
              'Aunt Pilar watered the plant and set it back in the sunny window.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [
              null,
              'Paragraph 1 tells what the leaves looked like. It does not show the plant was too big.',
              'Paragraph 2 tells when Tobin came to help. It does not show the plant was too big.',
              'Paragraph 4 is after the plant was in its new pot.'
            ],
            why: 'Paragraph 1 says white roots poked out of the holes in the bottom of the pot. Roots grow out when there is no more room inside. So the plant had grown too big for its pot.' },
          { id: 'P02',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which detail from the passage BEST shows that Aunt Pilar knew how to get a plant out of its pot?',
            choices: [
              'She turned the small pot upside down and tapped the bottom.',
              'Aunt Pilar spread newspaper on the table and set out a bigger pot and a bag of soil.',
              'Aunt Pilar kept a spider plant on her kitchen windowsill.',
              'A month later, she sent Tobin a photo.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [
              null,
              'Paragraph 2 tells how Aunt Pilar got ready. It does not show how she got the plant out.',
              'Paragraph 1 tells where the plant was. It does not show what Aunt Pilar knew.',
              'Paragraph 4 is a month later. It does not show how the plant came out of the pot.'
            ],
            why: 'Paragraph 2 says Aunt Pilar turned the pot upside down and tapped the bottom. Then the whole plant slid out in one piece. She did not pull or tug on it. So Aunt Pilar knew how to get a plant out of its pot.' },
          { id: 'P03',
            type: 'hot',
            skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Tobin was careful with the roots.',
            answer: 'Tobin pulled the roots apart slowly, one at a time.',
            notes: { 'The roots had grown around and around in a tight ball.': 'Paragraph 3 tells how the roots looked. It does not show what Tobin did.',
              'Then he set the plant in the new pot.': 'Paragraph 3 tells where Tobin put the plant. It does not show how he held the roots.',
              'She turned the small pot upside down and tapped the bottom.': 'This sentence is about Aunt Pilar, not Tobin.' },
            why: 'Paragraph 3 says Tobin pulled the roots apart slowly, one at a time. We go slowly when we do not want to break something. So Tobin was careful with the roots.' },
          { id: 'P04',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'The passage shows that the plant grew well in its new pot. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Long green leaves spilled over the sides of the new pot, and three baby plants dangled on thin stems.',
              'He filled the space around it with fresh soil.',
              'Aunt Pilar watered the plant and set it back in the sunny window.',
              'The roots had grown around and around in a tight ball.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [
              null,
              'Paragraph 3 tells how Tobin filled the new pot. It does not show the plant growing.',
              'Paragraph 4 tells how Aunt Pilar took care of the plant. It does not show that it grew.',
              'Paragraph 3 tells about the roots in the old pot, not the new one.'
            ],
            why: 'Paragraph 4 says long green leaves spilled over the new pot. Three baby plants grew, too. A plant gets bigger when it is doing well. So the plant grew well in its new pot.' }
        ] },

      { title: 'Logs for Gran\'s Stove', genre: 'story',
        paragraphs: [
          'Kip spent a week at Gran\'s little house in the woods. Her house had no heater, just an old iron stove that burned wood. That week, frost covered the grass each morning, and the big tree by the porch was almost bare.',
          'A huge pile of logs sat in the driveway. Kip could carry just two logs at a time, and he had to hug them tight to his chest. He and Gran stacked the logs in neat rows in the shed.',
          'Near the bottom of the pile, something small and striped ran out. A chipmunk had made a nest of dry leaves between two logs. Kip set his log back down and left that part of the pile alone.',
          'When the shed was full, Gran gave Kip a high five and a big slice of pie.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the logs were heavy?',
            choices: [
              'Kip could carry just two logs at a time, and he had to hug them tight to his chest.',
              'A huge pile of logs sat in the driveway.',
              'He and Gran stacked the logs in neat rows in the shed.',
              'Kip spent a week at Gran\'s little house in the woods.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 2 tells where the logs were. It does not show how heavy they were.',
              'Paragraph 2 tells where they put the logs. It does not show how heavy they were.',
              'Paragraph 1 tells where Kip stayed. It does not tell about the logs.'],
            why: 'Paragraph 2 says Kip could carry just two logs at a time. He had to hug them tight. We hug a thing tight when it is hard to hold up. So the logs were heavy.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Kip did not want to bother the chipmunk?',
            choices: [
              'Kip set his log back down and left that part of the pile alone.',
              'Near the bottom of the pile, something small and striped ran out.',
              'A chipmunk had made a nest of dry leaves between two logs.',
              'He and Gran stacked the logs in neat rows in the shed.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 3 tells that something ran out. It does not show what Kip did.',
              'Paragraph 3 tells about the chipmunk\'s nest. It does not show what Kip did.',
              'Paragraph 2 tells about stacking logs. It is not about the chipmunk.'],
            why: 'Paragraph 3 says Kip put his log back down. He left that part of the pile alone. The chipmunk\'s nest was there. So Kip did not want to bother the chipmunk.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Gran needed the wood to keep her house warm.',
            answer: 'Her house had no heater, just an old iron stove that burned wood.',
            notes: {
              'He and Gran stacked the logs in neat rows in the shed.': 'Paragraph 2 tells where they put the logs. It does not show why Gran needs them.',
              'A huge pile of logs sat in the driveway.': 'Paragraph 2 tells where the logs were. It does not show why Gran needs them.',
              'When the shed was full, Gran gave Kip a high five and a big slice of pie.': 'Paragraph 4 tells what Gran gave Kip. It is not about how Gran heats her house.'
            },
            why: 'Paragraph 1 says Gran\'s house had no heater. It had only a stove that burned wood. With no wood, the house would get cold. So Gran needed the wood to keep her house warm.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that winter was coming soon. Which sentence from the passage BEST supports this idea?',
            choices: [
              'That week, frost covered the grass each morning, and the big tree by the porch was almost bare.',
              'Kip spent a week at Gran\'s little house in the woods.',
              'Near the bottom of the pile, something small and striped ran out.',
              'When the shed was full, Gran gave Kip a high five and a big slice of pie.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Kip stayed. It does not tell about the time of year.',
              'Paragraph 3 tells about something that ran out of the pile. It does not tell about the time of year.',
              'Paragraph 4 tells what Gran gave Kip. It does not tell about the time of year.'],
            why: 'Paragraph 1 says frost covered the grass. The big tree was almost bare. Frost and bare trees come in late fall, just before winter. So winter was coming soon.' }
        ] }
    ],

    /* ─────────────── Level 4 · FK 3.5 · 140–200 words ─────────────── */
    4: [
      { title: 'Pine Trees on Clark Street', genre: 'story',
        paragraphs: [
          'Every December, Grandpa Walt sold pine trees on the corner of Clark Street. The trees leaned against a long wooden fence, and the whole block smelled like a forest. After school each day, Elena helped him.',
          'People walking by waved and called out, "Welcome back, Walt!" Elena swept up the fallen needles and sold rolls of string for tying the trees to car roofs.',
          'Late on Friday, a girl and her mom stopped at the stand. The girl walked down the row and stopped in front of the tallest tree. Her mom looked at its price tag, shook her head, and pointed to a small tree in the corner. The girl nodded, but she kept looking back at the tall tree.',
          'Grandpa tied the tall tree to the top of their car, but he charged them only the price of the small one. Then he winked at Elena.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that people on Clark Street knew Grandpa Walt?',
            choices: [
              'People walking by waved and called out, "Welcome back, Walt!"',
              'The trees leaned against a long wooden fence, and the whole block smelled like a forest.',
              'After school each day, Elena helped him.',
              'Late on Friday, a girl and her mom stopped at the stand.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 1 tells about the trees and the smell. It does not show that people knew Grandpa.',
              'Paragraph 1 tells that Elena helped. It does not show what people on the street knew.',
              'Paragraph 3 tells about one family stopping. It does not show they knew Grandpa.'],
            why: 'Paragraph 2 says people waved and called, "Welcome back, Walt!" They used his name. They said "back," so they saw him there before. So people on Clark Street knew Grandpa Walt.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that the tall tree cost more than the mom wanted to pay?',
            choices: [
              'Her mom looked at its price tag, shook her head, and pointed to a small tree in the corner.',
              'The girl walked down the row and stopped in front of the tallest tree.',
              'Elena swept up the fallen needles and sold rolls of string for tying the trees to car roofs.',
              'Then he winked at Elena.'
            ],
            kinds: [null, 'wrongwho', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 3 tells what the girl did. It does not show what the mom thought of the price.',
              'Paragraph 2 tells what Elena did. It is not about the price.',
              'A wink does not show what the mom thought of the price.'],
            why: 'Paragraph 3 says the mom looked at the price tag and shook her head. Then she pointed to a small tree. A head shake means no. So the tall tree cost more than she wanted to pay.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Grandpa Walt is generous.',
            answer: 'Grandpa tied the tall tree to the top of their car, but he charged them only the price of the small one.',
            notes: {
              'Then he winked at Elena.': 'A wink does not show what Grandpa gave the family.',
              'Every December, Grandpa Walt sold pine trees on the corner of Clark Street.': 'Paragraph 1 tells about Grandpa\'s job. It does not show that he is generous.',
              'People walking by waved and called out, "Welcome back, Walt!"': 'Paragraph 2 tells what people said to Grandpa. It does not show that he is generous.'
            },
            why: 'Paragraph 4 says Grandpa gave the family the tall tree. But he charged them only the price of the small one. He gave them more than they paid for. So Grandpa Walt is generous.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that the girl still wished she could have the tall tree. Which sentence from the passage BEST supports this idea?',
            choices: [
              'The girl nodded, but she kept looking back at the tall tree.',
              'Late on Friday, a girl and her mom stopped at the stand.',
              'Her mom looked at its price tag, shook her head, and pointed to a small tree in the corner.',
              'Then he winked at Elena.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              'Paragraph 3 tells that the girl and her mom stopped. It does not show what the girl wished for.',
              'Paragraph 3 tells what the mom did. The idea is about the girl.',
              'This tells what Grandpa did. It does not show what the girl wished for.'],
            why: 'Paragraph 3 says the girl nodded, but she kept looking back at the tall tree. We keep looking at a thing we want. So the girl still wished she could have the tall tree.' }
        ] },

      { title: 'After the Wind Storm',
        // FACTS: a tree adds one growth ring each year, so counting the rings tells its age;
        // tree crews wear hard hats, safety glasses and gloves; a chipper grinds branches into wood chips.
        genre: 'story',
        paragraphs: [
          'All night, the wind howled, and the window next to Reid\'s bed rattled in its frame. In the morning, he looked outside. A giant branch from the oak tree was lying across the sidewalk. People walking to the bus had to step into the street to get around it.',
          'At nine o\'clock, a city truck pulled up with a tree crew. A worker named Dot climbed out. Before she started her saw, she put on a hard hat, safety glasses, and thick orange gloves.',
          'Reid sat on the front steps and watched all morning, and he did not even go inside for a snack. The saw roared as it cut the branch into pieces. The crew fed the smaller branches into a noisy machine that chewed them into wood chips.',
          'When the crew was done, Dot handed Reid a round slice from the thick end of the branch. She told him that a tree grows one new ring every year. Reid counted the rings on it, one by one, and got all the way to sixty-two.'
        ],
        items: [
          { id: 'P05',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the storm was very strong?',
            choices: [
              'All night, the wind howled, and the window next to Reid\'s bed rattled in its frame.',
              'In the morning, he looked outside.',
              'At nine o\'clock, a city truck pulled up with a tree crew.',
              'When the crew was done, Dot handed Reid a round slice from the thick end of the branch.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'wrongtime'],
            notes: [
              null,
              'Paragraph 1 says Reid looked outside. It does not show how strong the storm was.',
              'Paragraph 2 tells when the tree crew came. That was after the storm.',
              'Paragraph 4 is about the end of the job. It does not tell about the storm.'
            ],
            why: 'Paragraph 1 says the wind howled all night. It made the window rattle in its frame. Only a strong wind can shake a window like that. So the storm was very strong.' },
          { id: 'P06',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which detail from the passage BEST shows that Dot knew her job could be dangerous?',
            choices: [
              'Before she started her saw, she put on a hard hat, safety glasses, and thick orange gloves.',
              'A worker named Dot climbed out.',
              'People walking to the bus had to step into the street to get around it.',
              'A giant branch from the oak tree was lying across the sidewalk.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [
              null,
              'Paragraph 2 tells Dot\'s name. It does not show what she knew about her job.',
              'Paragraph 1 tells about people on their way to the bus. It is not about Dot.',
              'Paragraph 1 tells where the branch was. It does not show what Dot knew.'
            ],
            why: 'Paragraph 2 says Dot put on a hard hat, safety glasses, and thick gloves before she started her saw. People wear things like that to keep from getting hurt. So Dot knew her job could be dangerous.' },
          { id: 'P07',
            type: 'hot',
            skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that the oak tree was very old.',
            answer: 'Reid counted the rings on it, one by one, and got all the way to sixty-two.',
            notes: { 'When the crew was done, Dot handed Reid a round slice from the thick end of the branch.': 'Paragraph 4 tells what Dot gave Reid. It does not show how old the tree was.',
              'A giant branch from the oak tree was lying across the sidewalk.': 'A giant branch shows the tree was big. It does not tell how many years the tree grew.',
              'She told him that a tree grows one new ring every year.': 'This tells what a ring means. It does not tell how many rings this branch had.' },
            why: 'Paragraph 4 says a tree grows one new ring every year. Reid counted sixty-two rings. So the branch was sixty-two years old, and the tree was even older. The oak tree was very old.' },
          { id: 'P08',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'The passage shows that Reid was very interested in the tree crew\'s work. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Reid sat on the front steps and watched all morning, and he did not even go inside for a snack.',
              'In the morning, he looked outside.',
              'The saw roared as it cut the branch into pieces.',
              'A worker named Dot climbed out.'
            ],
            kinds: [null, 'wrongtime', 'notproof', 'wrongwho'],
            notes: [
              null,
              'Paragraph 1 is about the early morning, before the crew came.',
              'Paragraph 3 tells what the saw did. It does not show how Reid felt.',
              'Paragraph 2 tells about Dot. The idea is about Reid.'
            ],
            why: 'Paragraph 3 says Reid watched all morning. He did not even go inside for a snack. We skip a snack when we do not want to miss a thing. So Reid was very interested in the crew\'s work.' }
        ] }
    ],

    /* ─────────────── Level 5 · FK 4.0 · 170–240 words ─────────────── */
    5: [
      { title: 'Way Up on the Granite Tower', genre: 'story',
        // FACTS: window washers on tall buildings ride a metal platform hung from the roof on cables;
        // they wear a harness clipped to a safety rope and clean the glass with a squeegee.
        paragraphs: [
          'There was no school on Tuesday, so Dad took Greta downtown to see Mom at work. Mom washes the windows of the Granite Tower, a glass building in the middle of the city.',
          'Greta and Dad stood in the plaza across the street. Greta had to tip her head back so far that her hat fell off. Way up high, a narrow metal platform hung from the roof on two thick cables. Mom stood on it in a bright orange vest. Her harness was clipped to a safety rope.',
          'Then a gust of wind made the platform sway. Mom let go with one hand and waved down at them. Next, she pulled a long squeegee across the glass in one smooth stroke. Behind Mom, the glass shone like a mirror, but the windows below her were still gray with dust.',
          'At noon, Mom rode the platform down and ate lunch with them on a bench in the plaza. On the bus ride home, Greta told the driver, the woman beside her, and two kids in the back seat all about her mom\'s job.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the Granite Tower is very tall?',
            choices: [
              'Greta had to tip her head back so far that her hat fell off.',
              'Mom washes the windows of the Granite Tower, a glass building in the middle of the city.',
              'Greta and Dad stood in the plaza across the street.',
              'Next, she pulled a long squeegee across the glass in one smooth stroke.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells what the building is made of. It does not show how tall it is.',
              'Paragraph 2 tells where Greta and Dad stood. It does not show how tall the building is.',
              'Paragraph 3 tells how Mom cleaned the glass. It does not show how tall the building is.'],
            why: 'Paragraph 2 says Greta tipped her head back so far that her hat fell off. You only do that to see a thing that is very high up. So the tower is very tall.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Mom was used to working up high?',
            choices: [
              'Mom let go with one hand and waved down at them.',
              'Then a gust of wind made the platform sway.',
              'There was no school on Tuesday, so Dad took Greta downtown to see Mom at work.',
              'Greta and Dad stood in the plaza across the street.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 3 tells what the wind did. It does not show how Mom felt up high.',
              'Paragraph 1 tells why Greta went downtown. It does not show how Mom felt up high.',
              'Paragraph 2 tells where Greta and Dad stood. The idea is about Mom.'],
            why: 'Paragraph 3 says the platform swayed in the wind. Mom still let go with one hand to wave. A person who is not used to being up high would hold on tight. So Mom was used to working up high.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Greta was proud of her mom.',
            answer: 'On the bus ride home, Greta told the driver, the woman beside her, and two kids in the back seat all about her mom\'s job.',
            notes: {
              'At noon, Mom rode the platform down and ate lunch with them on a bench in the plaza.': 'Paragraph 4 tells where they ate lunch. It does not show how Greta felt.',
              'Mom let go with one hand and waved down at them.': 'Paragraph 3 tells what Mom did. The idea is about how Greta felt.',
              'Greta had to tip her head back so far that her hat fell off.': 'Paragraph 2 is about the tall building. It does not show how Greta felt about her mom.'
            },
            why: 'Paragraph 4 says Greta told four people on the bus all about her mom\'s job. We tell lots of people about someone we are proud of. So Greta was proud of her mom.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Mom\'s work made a big difference to the windows. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Behind Mom, the glass shone like a mirror, but the windows below her were still gray with dust.',
              'Next, she pulled a long squeegee across the glass in one smooth stroke.',
              'Way up high, a narrow metal platform hung from the roof on two thick cables.',
              'On the bus ride home, Greta told the driver, the woman beside her, and two kids in the back seat all about her mom\'s job.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 3 tells how Mom used her squeegee. It does not show how the windows looked before and after.',
              'Paragraph 2 tells about the platform. It does not show the windows.',
              'Paragraph 4 is about the bus ride home. It does not tell about the windows.'],
            why: 'Paragraph 3 says the glass behind Mom shone like a mirror. The glass below her was still gray with dust. Clean glass and dirty glass look very different. So Mom\'s work made a big difference.' }
        ] },

      { title: 'Big Night on Brook Road', genre: 'story',
        // FACTS: on the first warm, rainy nights of early spring, spotted salamanders leave the woods
        // and walk to small ponds to lay eggs, and some must cross roads; volunteers help carry them
        // across; you wet your hands before you hold one and carry it the way it was going;
        // spotted salamanders have dark bodies (with yellow spots) and move slowly.
        paragraphs: [
          'On the first warm, rainy night of spring, Gwen grabbed her raincoat and a flashlight. Mom said that on nights like this, spotted salamanders leave the woods. They walk across Brook Road to lay eggs in a pond on the other side.',
          'At the road, a group of helpers in bright vests was waiting. Gwen swept her light back and forth over the wet road. The salamanders\' dark, shiny backs looked just like the wet leaves all around them.',
          'Gwen\'s little brother, Zeke, stuffed his hands deep in his pockets and stepped back. Mom showed Gwen how to wet her hands in a puddle first. Gwen cupped one in her hands as softly as if it were a bird\'s egg. She carried it across the road, the same way it had been going.',
          'Gwen watched another one for a whole minute, and it crawled only as far as the toe of her boot. Then a car came around the bend. The driver stopped and waited until the helpers were done.',
          'By the end of the night, Zeke held a salamander in his own wet hands, named it Speedy, and whispered goodbye to it at the pond.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the salamanders were hard to see?',
            choices: [
              'The salamanders\' dark, shiny backs looked just like the wet leaves all around them.',
              'On the first warm, rainy night of spring, Gwen grabbed her raincoat and a flashlight.',
              'Mom said that on nights like this, spotted salamanders leave the woods.',
              'At the road, a group of helpers in bright vests was waiting.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells what Gwen took with her. It does not show the salamanders were hard to see.',
              'Paragraph 1 tells what Mom said. It does not show the salamanders were hard to see.',
              'Paragraph 2 tells who was at the road. It is not about the salamanders.'],
            why: 'Paragraph 2 says their dark backs looked just like the wet leaves. When an animal looks like the things around it, it is hard to spot. So the salamanders were hard to see.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that the salamanders moved very slowly?',
            choices: [
              'Gwen watched another one for a whole minute, and it crawled only as far as the toe of her boot.',
              'They walk across Brook Road to lay eggs in a pond on the other side.',
              'The driver stopped and waited until the helpers were done.',
              'She carried it across the road, the same way it had been going.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null,
              'Paragraph 1 tells where the salamanders go. It does not show how fast they move.',
              'Paragraph 4 tells what the driver did. It is not about how fast the salamanders move.',
              'Paragraph 3 tells what Gwen did. It does not show how fast the salamanders move.'],
            why: 'Paragraph 4 says Gwen watched one for a whole minute. In all that time, it got only as far as the toe of her boot. That is not far at all. So the salamanders moved very slowly.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Zeke came to like the salamanders.',
            answer: 'By the end of the night, Zeke held a salamander in his own wet hands, named it Speedy, and whispered goodbye to it at the pond.',
            notes: {
              'Gwen\'s little brother, Zeke, stuffed his hands deep in his pockets and stepped back.': 'Paragraph 3 shows how Zeke felt at the start of the night. The idea is about how he felt later.',
              'The driver stopped and waited until the helpers were done.': 'Paragraph 4 is about the driver, not Zeke.'
            },
            why: 'Paragraph 5 says Zeke named his salamander Speedy. He whispered goodbye to it. We give names to pets and animals we care about. So Zeke came to like the salamanders.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Gwen was gentle with the salamander. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Gwen cupped one in her hands as softly as if it were a bird\'s egg.',
              'On the first warm, rainy night of spring, Gwen grabbed her raincoat and a flashlight.',
              'Gwen swept her light back and forth over the wet road.',
              'Then a car came around the bend.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells what Gwen took with her. It does not show how she held a salamander.',
              'Paragraph 2 tells how Gwen looked for salamanders. It does not show how she held one.',
              'Paragraph 4 tells about a car. It is not about Gwen.'],
            why: 'Paragraph 3 says Gwen held it as softly as if it were a bird\'s egg. An egg can break, so we hold it with care. So Gwen was gentle with it.' }
        ] }
    ],

    /* ─────────────── Level 6 · FK 4.5 · 200–280 words ─────────────── */
    6: [
      { title: 'A Bog Full of Red', genre: 'story',
        // FACTS: cranberries grow on low vines in bogs and are picked in the fall; for a wet harvest the
        // bog is flooded, a machine with spinning paddles shakes the berries loose, and they float up;
        // workers in chest-high waders push the floating berries with long floating booms toward a pump
        // that loads them into trucks; a cranberry has four small pockets of air inside, so it floats.
        paragraphs: [
          'In October, Malik spent a weekend at Uncle Ned\'s cranberry farm. On the drive there, he held an empty basket on his lap, ready to pick berries off bushes.',
          'But when they reached the bog, there were no bushes at all. The night before, workers had flooded the whole field with water from a nearby pond. Now it looked like a brown lake, with the low vines hidden under the water.',
          'Uncle Ned climbed onto a machine with big spinning paddles and drove it through the water. He steered in straight, even rows, and he hardly ever looked down. Behind him, thousands of berries popped up and bobbed on top. Soon the whole bog was a sheet of shining red. Malik\'s mouth fell open, and for a long time he forgot all about his basket.',
          'Next, Malik pulled on rubber boots that came up to his chest. He and five workers stood in a line and pushed a long floating fence. It swept the berries toward a pump that sucked them into a truck.',
          'At lunch, Malik wondered why the berries floated instead of sinking. Uncle Ned cut a berry in half with his pocketknife. Inside were four tiny pockets of air.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Malik did not know how cranberries are picked?',
            choices: [
              'On the drive there, he held an empty basket on his lap, ready to pick berries off bushes.',
              'In October, Malik spent a weekend at Uncle Ned\'s cranberry farm.',
              'Next, Malik pulled on rubber boots that came up to his chest.',
              'Uncle Ned climbed onto a machine with big spinning paddles and drove it through the water.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'wrongwho'],
            notes: [null,
              'Paragraph 1 tells where Malik went. It does not show what he knew about picking cranberries.',
              'Paragraph 4 tells what Malik put on later. It does not show what he knew before.',
              'Paragraph 3 tells what Uncle Ned did. The idea is about Malik.'],
            why: 'Paragraph 1 says Malik brought a basket to pick berries off bushes. But cranberries are not picked that way. Malik planned the wrong way. So he did not know how cranberries are picked.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Uncle Ned had driven the machine many times before?',
            choices: [
              'He steered in straight, even rows, and he hardly ever looked down.',
              'Uncle Ned climbed onto a machine with big spinning paddles and drove it through the water.',
              'The night before, workers had flooded the whole field with water from a nearby pond.',
              'Behind him, thousands of berries popped up and bobbed on top.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 3 tells what Uncle Ned drove. It does not show how many times he had done it.',
              'Paragraph 2 tells what the workers did the night before. It is not about Uncle Ned.',
              'Paragraph 3 tells what the berries did. It does not show how well Uncle Ned drove.'],
            why: 'Paragraph 3 says Uncle Ned drove in straight rows. He hardly ever looked down. It takes a lot of practice to do that. So he had driven the machine many times before.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Malik was amazed by the red bog.',
            answer: 'Malik\'s mouth fell open, and for a long time he forgot all about his basket.',
            notes: {
              'Soon the whole bog was a sheet of shining red.': 'This tells how the bog looked. It does not show how Malik felt.',
              'But when they reached the bog, there were no bushes at all.': 'Paragraph 2 tells about the bog. It does not show how Malik felt.'
            },
            why: 'Paragraph 3 says Malik\'s mouth fell open. For a long time, he forgot his basket. Our mouths fall open when we see something amazing. So Malik was amazed by the red bog.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that the air inside a cranberry helps it float. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Inside were four tiny pockets of air.',
              'At lunch, Malik wondered why the berries floated instead of sinking.',
              'Behind him, thousands of berries popped up and bobbed on top.',
              'Uncle Ned cut a berry in half with his pocketknife.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 5 says Malik wondered why. It does not give the reason.',
              'Paragraph 3 shows the berries float. It does not show why they float.',
              'Paragraph 5 tells what Uncle Ned did. It does not show what was inside the berry.'],
            why: 'Paragraph 5 says there were four tiny pockets of air inside the berry. We know air helps things float, like a beach ball. So the air inside a cranberry helps it float.' }
        ] },

      { title: 'The Last Ice on the Pond', genre: 'story',
        // FACTS: in spring, pond ice turns dark gray and gets puddles on top as it melts; melting ice
        // can crack with a loud boom; spring ice is thin and can break under a person.
        paragraphs: [
          'Every spring, Pop and Clara played a guessing game about the big pond behind Pop\'s old house. Each of them wrote down the day they thought the last of the ice would melt. Pop kept every guess in a green notebook, and the first page was from when he was ten years old.',
          'This year, Clara guessed April 2, and Pop guessed April 9. All through March, Clara ran to the kitchen window every morning before she even brushed her teeth.',
          'Slowly, the white ice turned a dull, dark gray, and puddles of water spread across its top. One afternoon, a loud boom echoed across the pond as a long crack split the ice. Clara started down the bank toward the edge of the ice to get a closer look. Pop grabbed the back of her hood and gently pulled her back.',
          'April 2 came and went, and the ice was still there. Then, on the morning of April 8, open blue water stretched from shore to shore, and two geese paddled in the middle.',
          'Pop\'s guess was just one day off, so he won. He opened the green notebook to a fresh page. Then he handed Clara the pencil and asked her to write down this year\'s date herself.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Pop had played the guessing game for many years?',
            choices: [
              'Pop kept every guess in a green notebook, and the first page was from when he was ten years old.',
              'This year, Clara guessed April 2, and Pop guessed April 9.',
              'He opened the green notebook to a fresh page.',
              'Then, on the morning of April 8, open blue water stretched from shore to shore, and two geese paddled in the middle.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 2 tells the guesses for this year. It does not show how many years Pop played.',
              'Paragraph 5 says Pop opened to a fresh page. It does not show how long he had played.',
              'Paragraph 4 tells about the day the ice was gone. It does not show how long Pop had played.'],
            why: 'Paragraph 1 says Pop kept every guess in a notebook. The first page was from when he was ten. Pop is a grown-up now. So he had played the guessing game for many years.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that the ice was melting?',
            choices: [
              'Slowly, the white ice turned a dull, dark gray, and puddles of water spread across its top.',
              'April 2 came and went, and the ice was still there.',
              'Clara started down the bank toward the edge of the ice to get a closer look.',
              'Every spring, Pop and Clara played a guessing game about the big pond behind Pop\'s old house.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 4 says the ice was still there. It does not show what the ice was doing.',
              'Paragraph 3 tells what Clara did. It does not show what the ice was doing.',
              'Paragraph 1 tells about the game. It does not show the ice was melting.'],
            why: 'Paragraph 3 says the white ice turned dark gray. Puddles of water spread on top. Water on top of ice means the ice is turning back into water. So the ice was melting.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Clara could hardly wait for the ice to melt.',
            answer: 'All through March, Clara ran to the kitchen window every morning before she even brushed her teeth.',
            notes: {
              'Clara started down the bank toward the edge of the ice to get a closer look.': 'Paragraph 3 shows Clara wanted to see the crack. It does not show how she felt while she waited.',
              'This year, Clara guessed April 2, and Pop guessed April 9.': 'Paragraph 2 tells the guesses. It does not show how Clara felt while she waited.'
            },
            why: 'Paragraph 2 says Clara ran to the window every morning. She did it even before she brushed her teeth. We rush to check on a thing we want to see. So Clara could hardly wait for the ice to melt.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Pop thought the spring ice was not safe. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Pop grabbed the back of her hood and gently pulled her back.',
              'Clara started down the bank toward the edge of the ice to get a closer look.',
              'He opened the green notebook to a fresh page.',
              'Then he handed Clara the pencil and asked her to write down this year\'s date herself.'
            ],
            kinds: [null, 'wrongwho', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 3 tells what Clara did. The idea is about what Pop thought.',
              'Paragraph 5 is about the notebook. It does not show what Pop thought about the ice.',
              'Paragraph 5 is about writing the date. It does not show what Pop thought about the ice.'],
            why: 'Paragraph 3 says Clara went toward the edge of the ice. Pop grabbed her hood and pulled her back. Spring ice can break when you step on it. So Pop thought the spring ice was not safe.' }
        ] }
    ]
  }
};
