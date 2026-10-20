/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE — together · Put It Together
   The last page: built like a real SBAC FIAB passage page. Passage 1 is a
   story, passage 2 is nonfiction. 8 scored questions per level:
     P1  X01 Part A + Part B (Drawing conclusions / Supporting detail)
         X02 "Which sentence … BEST supports the idea that …" (Supporting detail)
         X03 click a sentence, whole passage (Supporting detail)
     P2  X04 Part A + Part B (Main idea / Supporting detail)
         X05 "What is the author's point of view about …" (Author's point of view)
         X06 "Which sentence … BEST supports the idea that …" (Supporting detail)
   The cards only remind the class of the whole process. No new words.
   Topics and names were picked so they do not repeat the other activities
   (no class hamster, no shoveling for a neighbor, no monarchs, no bees,
   no firefighters, no plows).
   Spec: tools/CONTENT-SPEC.md · Check: node tools/check-levels.js together
═══════════════════════════════════════════════════════ */
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.together = {

  cards: [
    { title: 'A Practice Test Page',
      blocks: [
        { p: 'This page is like a real test page. You will read two passages. One is a story. One is nonfiction.' },
        { p: 'Use the steps you already know.' },
        { rows: [
          ['1', 'Read the passage.'],
          ['2', 'Read the question.'],
          ['3', 'Look back in the passage for clues.'],
          ['4', 'Pick the answer that the clues prove.']
        ] }
      ] },
    { title: 'Part A, Then Part B',
      blocks: [
        { p: 'Some questions have a Part A and a Part B. Do Part A first.' },
        { p: 'Then go back to the passage. In Part B, find the sentence that proves your Part A answer. Part B is your R.A.D. Detail.' },
        { quote: 'Sam rubbed his hands and pulled up his hood. Snow fell on the bus stop.' },
        { rad: { R: 'I can infer that Sam', A: 'is cold.', D: 'Sam rubbed his hands and pulled up his hood.' } }
      ] },
    { title: 'Look for BEST',
      blocks: [
        { p: 'Many sentences in a passage are true. BEST supports means the sentence proves the answer the most.' },
        { quote: 'Kai yawned and rubbed his eyes. It was a sunny day.' },
        { ask: 'Which sentence from the passage BEST supports the idea that Kai is tired?' },
        { good: 'Kai yawned and rubbed his eyes.', why: 'Yawns and rubbed eyes are clues that a person is tired.' },
        { bad: 'It was a sunny day.', why: 'This is true. But it does not prove that Kai is tired.' },
        { p: 'To click a sentence, tap it. It turns yellow. Then tap "That\'s My Answer!"' }
      ] }
  ],

  levels: {

    /* ═══ LEVEL 1 · FK 2.0 ═══════════════════════════════ */
    1: [
      { title: 'Bean and the Missing Red Cap', genre: 'story',
        paragraphs: [
          'Nate had a soccer game at ten, and his red cap was missing. He looked under his bed and behind the big couch. He kept looking at the clock on the kitchen wall.',
          'Then Nate saw his puppy, Bean, curled up in the dog bed. Bean was lying on something red. Bean\'s tail thumped on the blanket, but Bean did not get up.',
          'Nate pulled the cap out from under Bean. The cap was wet, and it had tiny holes in the brim.',
          'Nate laughed and scratched Bean behind the ears. Then he put on the cap and ran out the door to his game.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Bean?',
                 choices: ['Bean took the cap and chewed on it.',
                           'Bean found the cap out in the yard.',
                           'Bean wanted to go to the soccer game.',
                           'Bean was too sick to get out of bed.'],
                 kinds: [null, 'noclue', 'noclue', 'opposite'],
                 notes: [null,
                         'The passage gives no clue about the yard. The cap was in the dog bed.',
                         'The passage gives no clue that Bean wanted to go to the game.',
                         'Paragraph 2 says Bean\'s tail thumped. That is a happy puppy, not a sick one.'],
                 why: 'Paragraph 2 says Bean was lying on something red. Paragraph 3 says the cap was wet and had holes. Puppies chew things. So Bean took the cap and chewed on it.' },
            b: { choices: ['The cap was wet, and it had tiny holes in the brim.',
                           'Nate had a soccer game at ten, and his red cap was missing.',
                           'He kept looking at the clock on the kitchen wall.',
                           'Nate laughed and scratched Bean behind the ears.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 3 says the cap was wet and had tiny holes. A puppy\'s teeth make wet spots and holes. This sentence proves that Bean chewed the cap.' },
            model: { R: 'I can conclude that Bean', A: 'took the cap and chewed on it.', D: 'The cap was wet, and it had tiny holes in the brim.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Nate was in a hurry?',
            choices: ['He kept looking at the clock on the kitchen wall.',
                      'He looked under his bed and behind the big couch.',
                      'Bean was lying on something red.',
                      'Nate pulled the cap out from under Bean.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 1 says Nate looked under his bed. That shows he was looking for the cap. It does not show he was in a hurry.', null, null],
            why: 'Paragraph 1 says Nate kept looking at the clock. People look at the clock when they do not want to be late. So Nate was in a hurry.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Nate was not angry at Bean.',
            answer: 'Nate laughed and scratched Bean behind the ears.',
            notes: { 'Nate pulled the cap out from under Bean.': 'This tells what Nate did. It does not show how Nate felt about Bean.' },
            why: 'Paragraph 4 says Nate laughed and scratched Bean. People do not laugh and pet a dog when they are mad. So Nate was not angry at Bean.' }
        ] },

      // FACTS:
      // - In the fall, many squirrels (tree squirrels such as gray squirrels) gather (pick up) nuts and acorns.
      //   ("many": some squirrels store food in one pile instead, and many ground squirrels sleep through the winter.)
      // - These squirrels dig small holes and bury nuts, one at a time.
      // - A squirrel hides its nuts in many different spots.
      // - Food is hard to find when the ground is cold and snowy.
      // - In winter, squirrels use their strong sense of smell to find nuts they buried.
      // - Squirrels do not find every nut they bury.
      // - Some acorns that squirrels never dig up grow into new oak trees.
      { title: 'Squirrels Plan for Winter', genre: 'nonfiction',
        paragraphs: [
          'In the fall, many squirrels get very busy. They pick up nuts and acorns from the ground. Then they dig small holes and bury the nuts one by one.',
          'A squirrel hides its nuts in lots of spots. Food is hard to find when the ground is cold and white with snow. In the winter, the squirrel uses its strong nose to find the nuts it hid.',
          'Squirrels do not find each nut they hide. Some of the lost acorns grow into new oak trees. So these smart little planners help the woods grow!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Squirrels hide food in the fall so they can eat in winter.',
                           'Squirrels have strong noses that help them smell things.',
                           'Squirrels plant oak trees on purpose to help the woods.',
                           'Squirrels sleep all winter long and do not need any food.'],
                 kinds: [null, 'onedetail', 'toofar', 'opposite'],
                 notes: [null, null, 'Too far. The passage never says squirrels plant trees on purpose.', 'Paragraph 2 says the squirrel finds its nuts in the winter. So these squirrels do need food in winter.'],
                 why: 'Paragraph 1 says squirrels bury nuts in the fall. Paragraph 2 says they find the nuts in the winter. The whole passage is mostly about saving food for winter.' },
            b: { choices: ['In the winter, the squirrel uses its strong nose to find the nuts it hid.',
                           'In the fall, many squirrels get very busy.',
                           'Some of the lost acorns grow into new oak trees.',
                           'So these smart little planners help the woods grow!'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 2 says the squirrel finds the nuts it hid in the winter. That shows why squirrels hide food in the fall. They hide it so they can eat it later.' },
            model: { R: 'The main idea of the passage is that', A: 'squirrels hide food in the fall so they can eat in winter.', D: 'In the winter, the squirrel uses its strong nose to find the nuts it hid.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about squirrels?',
            choices: ['Squirrels are smart animals that plan ahead.',
                      'Squirrels are pests that make a mess of yards.',
                      'Squirrels are lazy animals that waste their food.',
                      'Squirrels are scary animals that people should avoid.'],
            kinds: [null, 'noclue', 'opposite', 'noclue'],
            notes: [null, 'The author never says squirrels make a mess of yards. Look at the words the author picks for squirrels.', 'Paragraph 1 says squirrels get very busy. That is the opposite of lazy.', null],
            why: 'Paragraph 3 calls squirrels smart little planners. The author picked these words to show that squirrels are smart and plan ahead.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that squirrels help new trees grow?',
            choices: ['Some of the lost acorns grow into new oak trees.',
                      'They pick up nuts and acorns from the ground.',
                      'A squirrel hides its nuts in lots of spots.',
                      'Food is hard to find when the ground is cold and white with snow.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 3 says some lost acorns grow into new oak trees. The squirrels buried those acorns. So squirrels help new trees grow.' }
        ] }
    ],

    /* ═══ LEVEL 2 · FK 2.5 ═══════════════════════════════ */
    2: [
      { title: 'Picture Day Puddles', genre: 'story',
        paragraphs: [
          'Today was picture day at school. Mom ironed Eli\'s blue shirt and combed his hair two times. At the door, Mom said, "Please stay clean until your picture is taken."',
          'It rained hard all morning. Eli\'s class had their pictures taken right after lunch. After school, the sun came out, and the sidewalks were full of big brown puddles. Eli walked home with his friend Jamal.',
          'When Eli got home, his sneakers made a squishing sound with every step. His pants were brown and wet up to his knees. Eli had the biggest grin on his face.',
          'Mom looked at his pants and raised one eyebrow. Eli stopped smiling and slid his muddy shoes behind the door. Mom asked, "Did you get your picture taken first?"',
          'Eli nodded, and Mom began to laugh.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Eli?',
                 choices: ['Eli jumped in puddles on the way home.',
                           'Eli slipped and fell in the mud at recess.',
                           'Eli forgot to get his school picture taken.',
                           'Eli did not like his new blue shirt at all.'],
                 kinds: [null, 'noclue', 'opposite', 'noclue'],
                 notes: [null, 'The passage never tells about recess. The puddles were on the walk home.', 'Paragraph 5 says Eli nodded when Mom asked about his picture. He did get it taken.', null],
                 why: 'Paragraph 2 says there were big puddles after school. Paragraph 3 says his shoes squished. His pants were wet up to his knees, and he had a big grin. So Eli jumped in puddles on the way home.' },
            b: { choices: ['His pants were brown and wet up to his knees.',
                           'It rained hard all morning.',
                           'Eli\'s class had their pictures taken right after lunch.',
                           'Eli walked home with his friend Jamal.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 3 says his pants were brown and wet up to his knees. Kids get that wet when they splash in puddles. This sentence BEST proves that Eli jumped in puddles.' },
            model: { R: 'I can conclude that Eli', A: 'jumped in puddles on the way home.', D: 'His pants were brown and wet up to his knees.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that picture day was important to Mom?',
            choices: ['Mom ironed Eli\'s blue shirt and combed his hair two times.',
                      'Today was picture day at school.',
                      'Eli walked home with his friend Jamal.',
                      'Eli nodded, and Mom began to laugh.'],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null, 'Paragraph 1 says it was picture day. It does not show how Mom felt about it.', null, 'Paragraph 5 is the end of the story. It does not show why picture day mattered to Mom.'],
            why: 'Paragraph 1 says Mom ironed his shirt and combed his hair two times. People do that for a big day. So picture day was important to Mom.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Eli thought he might be in trouble.',
            answer: 'Eli stopped smiling and slid his muddy shoes behind the door.',
            notes: { 'Mom looked at his pants and raised one eyebrow.': 'This shows what Mom did. Look for what Eli did.' },
            why: 'Paragraph 4 says Eli stopped smiling and hid his muddy shoes. People hide things when they think they will get in trouble. So Eli thought he might be in trouble.' }
        ] },

      // FACTS:
      // - Beavers build with sticks and mud. They do not use tools like hammers or nails.
      // - Beavers build their homes in or at the edge of the water.
      // - A beaver cuts down small trees by chewing through them with its big front teeth.
      // - A beaver drags (or floats) the branches into the water.
      // - Beavers build dams across streams out of sticks, mud, and stones.
      // - A dam holds back the water of a stream, and a pond forms behind it.
      // - Many beavers build a home called a lodge in the pond ("many": some dig dens in a bank instead).
      // - A lodge is a big pile of sticks and mud with a dry room inside, above the water.
      // - The way into a lodge is under the water, which makes it hard for hunting animals
      //   (such as wolves and coyotes) to get in.
      // - A beaver's front teeth never stop growing.
      // - Chewing on wood wears the teeth down, which helps keep them from getting too long.
      // - Opinion, not a fact claim (the author's point of view): beavers are some of the best
      //   builders in nature, hard workers, and amazing to watch.
      { title: 'Builders of the Pond', genre: 'nonfiction',
        paragraphs: [
          'Beavers are some of the best builders in nature. A beaver does not need a hammer or nails. Beavers make safe homes in the water with sticks and mud.',
          'First, a beaver chews down small trees with its big front teeth. Then it drags the sticks into a stream. Beavers pile up sticks, mud, and stones to make a dam. The dam holds back the stream, and a pond fills up.',
          'In the pond, many beavers build a home called a lodge. A lodge is a big pile of sticks and mud with a dry room inside. The door is under the water, so hungry animals have a hard time getting in.',
          'A beaver\'s front teeth never stop growing. Chewing on wood helps keep the teeth short. These hard workers are amazing to watch!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Beavers build dams and lodges to make safe homes.',
                           'Beavers have front teeth that never stop growing.',
                           'Beavers use hammers and nails to build their homes.',
                           'Beavers are the only animals that build their own homes.'],
                 kinds: [null, 'onedetail', 'opposite', 'toofar'],
                 notes: [null, null, 'Paragraph 1 says a beaver does not need a hammer or nails.', 'Too far. The passage never says beavers are the only animals that build homes.'],
                 why: 'Paragraph 2 tells how beavers build a dam. Paragraph 3 tells about their home, the lodge. The whole passage is mostly about how beavers build safe homes. So that is the main idea.' },
            b: { choices: ['Beavers make safe homes in the water with sticks and mud.',
                           'A beaver does not need a hammer or nails.',
                           'First, a beaver chews down small trees with its big front teeth.',
                           'A beaver\'s front teeth never stop growing.'],
                 kinds: [null, 'notproof', 'onedetail', 'notproof'],
                 notes: [null, null, 'Paragraph 2 tells only the first step. That is just one detail, not the main idea.', null],
                 why: 'Paragraph 1 says beavers make safe homes in the water with sticks and mud. The rest of the passage tells how they build them. So this sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'beavers build dams and lodges to make safe homes.', D: 'Beavers make safe homes in the water with sticks and mud.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about beavers?',
            choices: ['Beavers are amazing builders and hard workers.',
                      'Beavers are pests that ruin streams and trees.',
                      'Beavers are lazy animals that do not like to work.',
                      'Beavers build weak homes that fall apart fast.'],
            kinds: [null, 'noclue', 'opposite', 'opposite'],
            notes: [null, 'The author never calls beavers pests. Look at the words the author picks for beavers.', 'Paragraph 4 calls beavers hard workers. That is the opposite of lazy.', 'Paragraph 1 calls beavers some of the best builders. The author does not think their homes are weak.'],
            why: 'Paragraph 1 calls beavers some of the best builders. Paragraph 4 calls them hard workers. It says they are amazing to watch. These words show that the author thinks beavers are amazing builders and hard workers.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a lodge keeps beavers safe?',
            choices: ['The door is under the water, so hungry animals have a hard time getting in.',
                      'A lodge is a big pile of sticks and mud with a dry room inside.',
                      'Beavers pile up sticks, mud, and stones to make a dam.',
                      'Chewing on wood helps keep the teeth short.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 3 tells what a lodge is made of. It does not tell how the lodge keeps beavers safe.', 'Paragraph 2 is about the dam. It does not tell about the lodge.', null],
            why: 'Paragraph 3 says the door is under the water. That makes it hard for hungry animals to get in. So the lodge keeps the beavers safe.' }
        ] }
    ],

    /* ═══ LEVEL 3 · FK 3.0 ═══════════════════════════════ */
    3: [
      { title: 'Three Papers on the Step', genre: 'story',
        paragraphs: [
          'Every morning, Arlo walked past Mrs. Park\'s yellow house on his way to school. Mrs. Park always waved from her porch swing. She held a cup of tea in her hand.',
          'On Monday, the porch swing was empty. By Wednesday, three newspapers sat on her step, and her mailbox was stuffed full. The roses by her fence were drooping in the hot sun.',
          'Arlo frowned and told his dad what he had seen. That afternoon, they stacked the papers by her door. Arlo filled a watering can and gave each rose a long, cool drink.',
          'On Sunday night, the porch light was on again. Mrs. Park hugged Arlo and handed him a warm loaf of banana bread. Arlo\'s dad laughed and said the bread smelled like a bakery.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Mrs. Park?',
                 choices: ['Mrs. Park had been away from home for days.',
                           'Mrs. Park had stopped reading the newspaper.',
                           'Mrs. Park did not care about her roses anymore.',
                           'Mrs. Park was upset that Arlo touched her things.'],
                 kinds: [null, 'toofar', 'toofar', 'noclue'],
                 notes: [null, 'Too far. The papers piled up because no one was home to pick them up.', 'Too far. The roses drooped because no one was home to water them.', 'The passage gives no clue that Mrs. Park was upset with Arlo.'],
                 why: 'Paragraph 2 says the papers piled up and the mailbox was full. The roses were drooping too. When no one is home, no one gets the mail or waters the plants. So Mrs. Park was away for days.' },
            b: { choices: ['By Wednesday, three newspapers sat on her step, and her mailbox was stuffed full.',
                           'Every morning, Arlo walked past Mrs. Park\'s yellow house on his way to school.',
                           'Arlo frowned and told his dad what he had seen.',
                           'Mrs. Park hugged Arlo and handed him a warm loaf of banana bread.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 2 says the papers and the mail piled up. That only happens when no one picks them up for days. This sentence BEST proves Mrs. Park was away.' },
            model: { R: 'I can conclude that Mrs. Park', A: 'had been away from home for days.', D: 'By Wednesday, three newspapers sat on her step, and her mailbox was stuffed full.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Arlo was worried about Mrs. Park?',
            choices: ['Arlo frowned and told his dad what he had seen.',
                      'Mrs. Park always waved from her porch swing.',
                      'The roses by her fence were drooping in the hot sun.',
                      'On Sunday night, the porch light was on again.'],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null, null, 'Paragraph 2 tells about the roses. It does not show how Arlo felt.', 'Paragraph 4 is about the end, when Mrs. Park came home.'],
            why: 'Paragraph 3 says Arlo frowned and told his dad. People frown when something seems wrong. So Arlo was worried about Mrs. Park.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Mrs. Park is thankful for Arlo\'s help.',
            answer: 'Mrs. Park hugged Arlo and handed him a warm loaf of banana bread.',
            notes: { 'On Sunday night, the porch light was on again.': 'This shows that Mrs. Park came home. It does not show that she was thankful.' },
            why: 'Paragraph 4 says Mrs. Park hugged Arlo and gave him banana bread. People give hugs and gifts to say thank you. So she is thankful for his help.' }
        ] },

      // FACTS:
      // - Plants cannot walk, but their seeds can travel to new places.
      // - Seeds that all land under the parent plant are crowded and must share the same water and sunlight.
      // - A dandelion seed has a fluffy top that works like a tiny parachute, so the wind carries it.
      // - Burrs are prickly seed pods with tiny hooks that grab onto animal fur.
      // - Burrs later fall off in a new place.
      // - A bird eats a berry, the seeds pass through its body, and the bird often drops them far from the bush.
      //   ("often": a bird can also drop the seeds close by.)
      { title: 'Seeds on the Move', genre: 'nonfiction',
        paragraphs: [
          'A plant cannot walk, but its seeds can still go on a trip. If every seed fell right under its parent plant, the seeds would be too crowded. They would have to share the same water and sunlight. That is why many plants have clever ways to send their seeds far away.',
          'Some seeds ride the wind. A dandelion seed has a fluffy top that works like a tiny parachute. When the wind blows, the seed floats away, sometimes over a whole field.',
          'Other seeds hitch a ride on animals. Burrs are prickly seed pods covered in tiny hooks. When a dog runs through the weeds, burrs grab onto its fur. Later, the burrs fall off in a brand-new spot.',
          'Birds help too. A bird eats a juicy berry, and the seeds inside pass through its body. The bird often drops the seeds far from the bush where the berry grew.',
          'Plants may not have legs, but they are smart travelers after all!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Plants have many ways to send their seeds to new places.',
                           'Dandelion seeds have fluffy tops that work like parachutes.',
                           'Birds like to eat juicy berries that grow on bushes.',
                           'Seeds grow best when they land right under the parent plant.'],
                 kinds: [null, 'onedetail', 'onedetail', 'opposite'],
                 notes: [null, null, null, 'The clues show the opposite. Paragraphs 2, 3, and 4 tell how seeds travel far away from the parent plant.'],
                 why: 'Paragraph 1 says many plants have ways to send their seeds far away. Paragraphs 2, 3, and 4 each tell one way. So the main idea is that plants have many ways to send their seeds to new places.' },
            b: { choices: ['That is why many plants have clever ways to send their seeds far away.',
                           'When a dog runs through the weeds, burrs grab onto its fur.',
                           'A bird eats a juicy berry, and the seeds inside pass through its body.',
                           'Some seeds ride the wind.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 1 says many plants have ways to send their seeds far away. The rest of the passage tells about those ways. This sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'plants have many ways to send their seeds to new places.', D: 'That is why many plants have clever ways to send their seeds far away.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about plants?',
            choices: ['Plants are clever at moving their seeds.',
                      'Plants are boring because they cannot move.',
                      'Plants should keep all their seeds close to home.',
                      'Plants need people to plant every one of their seeds.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 5 calls plants smart travelers. The author does not think they are boring.', 'Paragraphs 2, 3, and 4 tell how seeds go far away. The author thinks that is clever.', 'The passage tells how wind, animals, and birds move seeds. It gives no clue that people must plant them.'],
            why: 'Paragraph 1 says plants have clever ways to move seeds. Paragraph 5 calls plants smart travelers. These words show that the author thinks plants are clever at moving their seeds.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that seeds need space to grow?',
            choices: ['If every seed fell right under its parent plant, the seeds would be too crowded.',
                      'When the wind blows, the seed floats away, sometimes over a whole field.',
                      'Burrs are prickly seed pods covered in tiny hooks.',
                      'The bird often drops the seeds far from the bush where the berry grew.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 1 says seeds under the parent plant would be too crowded. Crowded seeds must share water and sunlight. So seeds need space to grow.' }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 ═══════════════════════════════ */
    4: [
      { title: 'The Saved Seat in Row Two', genre: 'story',
        paragraphs: [
          'Paige\'s piano recital started at two o\'clock. Her big sister, Brooke, had a soccer game at noon on the other side of town. Brooke had promised to make it in time, so Paige saved a seat in row two with her blue sweater.',
          'While the other students played, Paige kept peeking at the doors in the back of the room. Each time the doors opened, she sat up tall. Each time, it was someone else, and her shoulders sank a little lower.',
          'Finally, the teacher called out Paige\'s name. Paige walked slowly to the piano and glanced one last time at row two. The blue sweater was still resting on an empty chair.',
          'Just as Paige lifted her hands, the back doors swung open. In rushed Brooke, breathing hard, with grass stains on both knees and her cleats in her hand. Paige\'s face lit up, and she played her song without a single mistake.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Brooke?',
                 choices: ['Brooke hurried to the recital right after her game.',
                           'Brooke forgot all about Paige\'s piano recital that day.',
                           'Brooke\'s soccer team lost the big game that afternoon.',
                           'Brooke wanted to play the piano at the recital.'],
                 kinds: [null, 'opposite', 'noclue', 'noclue'],
                 notes: [null, 'Paragraph 1 says Brooke promised to make it in time. No clue says she forgot.', 'The passage gives no clue about who won the game.', null],
                 why: 'Paragraph 1 says Brooke had a game at noon. Paragraph 4 says she rushed in with grass stains and her cleats. She did not stop to change. So Brooke hurried to the recital right after her game.' },
            b: { choices: ['In rushed Brooke, breathing hard, with grass stains on both knees and her cleats in her hand.',
                           'Paige walked slowly to the piano and glanced one last time at row two.',
                           'Finally, the teacher called out Paige\'s name.',
                           'The blue sweater was still resting on an empty chair.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says Brooke was breathing hard. She still had grass stains and her cleats. That shows she came straight from the game in a hurry. This sentence BEST proves it.' },
            model: { R: 'I can conclude that Brooke', A: 'hurried to the recital right after her game.', D: 'In rushed Brooke, breathing hard, with grass stains on both knees and her cleats in her hand.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Paige was hoping Brooke would come?',
            choices: ['While the other students played, Paige kept peeking at the doors in the back of the room.',
                      'Paige\'s piano recital started at two o\'clock.',
                      'Her big sister, Brooke, had a soccer game at noon on the other side of town.',
                      'Finally, the teacher called out Paige\'s name.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, null, 'Paragraph 1 tells where Brooke was. It does not show what Paige was hoping.', null],
            why: 'Paragraph 2 says Paige kept peeking at the doors. She was looking for someone to come in. So Paige was hoping Brooke would come.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Paige was happy to see Brooke.',
            answer: 'Paige\'s face lit up, and she played her song without a single mistake.',
            notes: { 'Each time the doors opened, she sat up tall.': 'This shows Paige was hoping. It happens before Brooke came in.' },
            why: 'Paragraph 4 says Paige\'s face lit up when Brooke rushed in. A face lights up when a person is happy. So Paige was happy to see Brooke.' }
        ] },

      // FACTS:
      // - A thunderstorm can make a sunny sky dark quickly.
      // - Lightning is a giant spark of electricity.
      // - Lightning heats the air around it very fast.
      // - The hot air pushes outward so fast that it makes a loud boom. That boom is thunder.
      // - Light moves much faster than sound, so you usually see lightning before you hear thunder.
      //   ("usually": when lightning is very close, the flash and the boom come at almost the same time.)
      // - Lightning often strikes the tallest thing around, like a tree or a pole.
      // - A house, or a car with a hard metal roof, is a safer place in a storm.
      // - "When thunder roars, go indoors" is a weather safety rule.
      // - If you can hear thunder, you are close enough for lightning to strike you.
      { title: 'When Thunder Roars', genre: 'nonfiction',
        paragraphs: [
          'A thunderstorm can turn a sunny day dark in just a few minutes. Clouds pile up high, and the wind picks up. Then a bright flash cuts across the sky. That flash is lightning, a giant spark of electricity.',
          'Lightning heats the air around it faster than you can blink. The hot air pushes out so fast that it makes a loud boom. That boom is thunder. Light moves much faster than sound, so you usually see the flash before you hear the boom.',
          'Lightning often strikes the tallest thing around, like a tree or a pole. A house or a car with a hard metal roof is a much safer place to be.',
          'Here is an easy rule to know: when thunder roars, go indoors. If you can hear thunder, you are close enough for lightning to reach you. Wise kids head inside right away and stay there until the storm has passed.'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Lightning is dangerous, so people should go inside during storms.',
                           'Thunder is the loud boom that happens when lightning heats the air.',
                           'Light moves faster than sound, so we usually see lightning first.',
                           'A tall tree is the safest place to stand during a thunderstorm.'],
                 kinds: [null, 'onedetail', 'onedetail', 'opposite'],
                 notes: [null, null, null, 'The clues show the opposite. Paragraph 4 says to go indoors when thunder roars. A tree is not indoors.'],
                 why: 'Paragraph 4 says lightning can reach you if you can hear thunder. It gives an easy rule: when thunder roars, go indoors. So the main idea is that lightning is dangerous, and people should go inside.' },
            b: { choices: ['If you can hear thunder, you are close enough for lightning to reach you.',
                           'That boom is thunder.',
                           'Clouds pile up high, and the wind picks up.',
                           'The hot air pushes out so fast that it makes a loud boom.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says lightning can reach you if you can hear thunder. That shows lightning is a danger. It is the reason people should go inside.' },
            model: { R: 'The main idea of the passage is that', A: 'lightning is dangerous, so people should go inside during storms.', D: 'If you can hear thunder, you are close enough for lightning to reach you.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about staying safe in a thunderstorm?',
            choices: ['Going inside right away is the smart thing to do.',
                      'Watching a storm from under a tree is a fun idea.',
                      'Thunder is too far away to ever be a real danger.',
                      'Staying safe in a storm is too hard for kids to learn.'],
            kinds: [null, 'opposite', 'opposite', 'opposite'],
            notes: [null, 'Paragraph 4 says to go indoors when thunder roars. The author does not want you outside under a tree.', 'Paragraph 4 says if you can hear thunder, lightning can reach you.', 'Paragraph 4 calls it an easy rule to know. The author thinks kids can learn it.'],
            why: 'Paragraph 4 says wise kids head inside right away. Wise means smart. The author picked this word to show that going inside right away is the smart thing to do.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a tree is not a safe place in a storm?',
            choices: ['Lightning often strikes the tallest thing around, like a tree or a pole.',
                      'Lightning heats the air around it faster than you can blink.',
                      'A thunderstorm can turn a sunny day dark in just a few minutes.',
                      'Light moves much faster than sound, so you usually see the flash before you hear the boom.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 3 says lightning often strikes tall things, like a tree. If you stand under a tree, the lightning could hit near you. So a tree is not a safe place in a storm.' }
        ] }
    ],

    /* ═══ LEVEL 5 · FK 4.0 ═══════════════════════════════ */
    5: [
      { title: 'The Last Ride on Bus 9', genre: 'story',
        paragraphs: [
          'For six years, Miss Pat had driven Bus 9 through the busy city streets to Maple Street School. Miss Pat knew the name of every rider and the birthday of almost every one. Every Friday afternoon, she played the same silly song on the radio, and everyone sang along.',
          'On the last day of the school year, Miss Pat did something new. As each child climbed on, she handed out a pencil with the child\'s name on it in shiny gold letters.',
          'At the last stop, the door stayed closed for a long moment. Miss Pat took off her sunglasses and wiped her eyes with the back of her hand. Then Miss Pat said softly, "Be good for whoever drives you next year."',
          'The riders looked at one another. Then Cole pulled a giant card out of his backpack. Every rider on Bus 9 had signed the card. Some kids had drawn Miss Pat waving from the bus window.',
          'Miss Pat read every name out loud. As the kids walked away, she honked the horn three times and waved until they turned the corner.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Miss Pat?',
                 choices: ['Miss Pat would not be driving Bus 9 next year.',
                           'Miss Pat was happy the riders were finally leaving.',
                           'Miss Pat could not remember the riders\' names.',
                           'Miss Pat was going to get a brand-new bus.'],
                 kinds: [null, 'opposite', 'opposite', 'noclue'],
                 notes: [null, 'The clues show the opposite. Paragraph 2 says Miss Pat gave each rider a pencil with the rider\'s name on it.', 'Paragraph 1 says Miss Pat knew the name of every rider. Paragraph 2 says she put their names on pencils.', 'The passage gives no clue about a new bus.'],
                 why: 'Paragraph 2 says it was the last day of the school year, and Miss Pat gave gifts. Paragraph 3 says she told the kids to be good for whoever drives them next year. So Miss Pat would not be driving Bus 9 next year.' },
            b: { choices: ['Then Miss Pat said softly, "Be good for whoever drives you next year."',
                           'For six years, Miss Pat had driven Bus 9 through the busy city streets to Maple Street School.',
                           'Every rider on Bus 9 had signed the card.',
                           'Miss Pat read every name out loud.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, 'Paragraph 1 tells how long Miss Pat drove the bus. It does not show that she is leaving.', null, null],
                 why: 'Paragraph 3 says Miss Pat told the kids to be good for whoever drives them next year. That means someone else will drive them. This sentence BEST proves that she will not drive Bus 9 next year.' },
            model: { R: 'I can conclude that Miss Pat', A: 'would not be driving Bus 9 next year.', D: 'Then Miss Pat said softly, "Be good for whoever drives you next year."' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the riders liked Miss Pat?',
            choices: ['Every rider on Bus 9 had signed the card.',
                      'The riders looked at one another.',
                      'Miss Pat read every name out loud.',
                      'Miss Pat knew the name of every rider and the birthday of almost every one.'],
            kinds: [null, 'notproof', 'wrongwho', 'wrongwho'],
            notes: [null, 'Paragraph 4 says the riders looked at one another. That does not show how they felt about Miss Pat.', 'This tells what Miss Pat did. It does not show how the riders felt.', 'This shows that Miss Pat cared about the riders. It does not show how the riders felt about her.'],
            why: 'Paragraph 4 says every rider on Bus 9 signed the card. Kids make cards for people they like. So the riders liked Miss Pat.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Miss Pat was sad to say goodbye.',
            answer: 'Miss Pat took off her sunglasses and wiped her eyes with the back of her hand.',
            notes: { 'At the last stop, the door stayed closed for a long moment.': 'This shows that Miss Pat waited. The next sentence shows how she felt.',
                     'As the kids walked away, she honked the horn three times and waved until they turned the corner.': 'This is a happy goodbye. It does not show that Miss Pat was sad.' },
            why: 'Paragraph 3 says Miss Pat wiped her eyes. People wipe tears from their eyes when they are sad. So Miss Pat was sad to say goodbye.' }
        ] },

      // FACTS:
      // - In fall, the leaves of many trees turn yellow, orange, and red.
      // - A leaf uses sunlight, water, and air to make food for the tree.
      // - A green material in the leaf (chlorophyll) does this job and makes the leaf look green.
      // - Leaves also have yellow and orange colors in them all summer, but the green covers them up.
      // - In fall, the days get shorter and the nights get cooler, and many trees stop making the green material.
      // - When the green fades, the yellow and orange colors show.
      // - Some trees, like many maples, make new red colors in the fall.
      // - Many trees drop their leaves in fall and rest until spring.
      { title: 'Why Leaves Change Color', genre: 'nonfiction',
        paragraphs: [
          'Every fall, many trees trade their green leaves for bright shades of yellow, orange, and red. It looks like magic, but there is a simple reason behind the change.',
          'All summer long, a leaf works like a tiny kitchen. It uses sunlight, water, and air to make food for the tree. A green material in the leaf does this job. It also gives the leaf its green color.',
          'The leaf has yellow and orange colors hiding inside it all summer, too. But there is so much green that it covers them up. You cannot see them at all.',
          'When fall comes, the days get shorter and the nights get cooler. Many trees stop making the green material. As the green fades away, the yellow and orange colors finally show. Some trees, like many maples, also make brand-new red colors in the fall.',
          'Soon the leaves drop to the ground, and the trees rest until spring. A walk under all those bright leaves is one of the best treats of the whole year.'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Leaves change color in fall when their green color fades.',
                           'A leaf uses sunlight, water, and air to make food for the tree.',
                           'Maple trees make brand-new red colors in the fall.',
                           'Leaves turn green again when the fall days get shorter.'],
                 kinds: [null, 'onedetail', 'onedetail', 'opposite'],
                 notes: [null, null, null, 'Paragraph 4 says the green fades away in the fall. The leaves do not turn green again.'],
                 why: 'Paragraph 1 says there is a simple reason leaves change color. Paragraph 3 and paragraph 4 tell the reason. The green fades, and the other colors show. That is the main idea.' },
            b: { choices: ['As the green fades away, the yellow and orange colors finally show.',
                           'Every fall, many trees trade their green leaves for bright shades of yellow, orange, and red.',
                           'All summer long, a leaf works like a tiny kitchen.',
                           'Soon the leaves drop to the ground, and the trees rest until spring.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, 'Paragraph 1 tells that leaves change color. It does not tell why.', null, null],
                 why: 'Paragraph 4 says that as the green fades, the yellow and orange colors show. That is why leaves change color. This sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'leaves change color in fall when their green color fades.', D: 'As the green fades away, the yellow and orange colors finally show.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about fall leaves?',
            choices: ['Fall leaves are a special treat to enjoy.',
                      'Fall leaves are a mess that should be cleaned up fast.',
                      'Fall leaves are boring because they all look the same.',
                      'Fall leaves only matter to scientists who study trees.'],
            kinds: [null, 'noclue', 'opposite', 'noclue'],
            notes: [null, 'The author never says the leaves are a mess. Paragraph 5 calls a walk under them a treat.', 'Paragraph 1 says the leaves turn yellow, orange, and red. They do not all look the same.', null],
            why: 'Paragraph 1 says the change looks like magic. Paragraph 5 says a walk under bright leaves is one of the best treats of the year. These words show the author thinks fall leaves are a special treat.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the yellow and orange colors are in the leaf even in summer?',
            choices: ['The leaf has yellow and orange colors hiding inside it all summer, too.',
                      'Some trees, like many maples, also make brand-new red colors in the fall.',
                      'Every fall, many trees trade their green leaves for bright shades of yellow, orange, and red.',
                      'When fall comes, the days get shorter and the nights get cooler.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 4 says red colors are brand-new in the fall. It is not about yellow and orange in summer.', 'Paragraph 1 is about the fall. It does not tell about summer.', null],
            why: 'Paragraph 3 says the yellow and orange colors hide inside the leaf all summer. The green just covers them up. So those colors are in the leaf even in summer.' }
        ] }
    ],

    /* ═══ LEVEL 6 · FK 4.5 ═══════════════════════════════ */
    6: [
      { title: 'The Reading Buddy', genre: 'story',
        paragraphs: [
          'Every Thursday, the fourth graders at Lincoln School read to the kids in kindergarten. Each big kid had a little buddy. Nell\'s buddy was a small, wiggly boy named Benji, and he did not like to sit still.',
          'Each week, Nell opened a book about princesses, puppies, or the ABCs. Each week, Benji rolled across the rug, untied his shoes, and stared at the ceiling. Nell tried funny voices and silly faces, but nothing worked. Nell sighed so loudly that her friends turned to look at her.',
          'One Thursday, Nell noticed something on Benji\'s paper. While the class cleaned up, he had drawn a dump truck, a crane, and a bulldozer. Each one had careful little wheels. Nell looked at the drawing for a long time.',
          'The next week, Nell walked in with a fat library book that had a giant yellow digger on the cover. Benji stopped rolling. He crawled over, pointed at the cover, and shouted the name of every machine before Nell could read a word.',
          'By the last page, Benji was sitting so close that his nose almost touched the pictures. When the visit ended, Benji tugged on Nell\'s sleeve and asked, "Can we read about garbage trucks next time?"'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Nell?',
                 choices: ['Nell picked the new book because of Benji\'s drawing.',
                           'Nell wanted the teacher to give her a new buddy.',
                           'Nell liked reading books about trucks more than Benji did.',
                           'Nell was too upset to ever read to Benji again.'],
                 kinds: [null, 'noclue', 'wrongwho', 'opposite'],
                 notes: [null, 'Nell sighed, but she kept coming back. The passage gives no clue that she wanted a new buddy.', 'Paragraph 3 says Benji drew the trucks. Benji is the one who likes machines.', 'Paragraph 3 says Nell looked at Benji\'s drawing for a long time. She did not give up on him.'],
                 why: 'Paragraph 3 says Nell looked at Benji\'s truck drawing for a long time. Paragraph 4 says she came back with a book about a digger. So Nell picked the new book because of Benji\'s drawing.' },
            b: { choices: ['The next week, Nell walked in with a fat library book that had a giant yellow digger on the cover.',
                           'Each week, Nell opened a book about princesses, puppies, or the ABCs.',
                           'Nell sighed so loudly that her friends turned to look at her.',
                           'Every Thursday, the fourth graders at Lincoln School read to the kids in kindergarten.'],
                 kinds: [null, 'wrongtime', 'notproof', 'notproof'],
                 notes: [null, 'Paragraph 2 tells about the books from before. It does not show why Nell picked the new one.', null, null],
                 why: 'Paragraph 4 says Nell brought a book with a digger on the cover. Benji had drawn trucks and a crane. This sentence BEST proves that she picked the book because of his drawing.' },
            model: { R: 'I can conclude that Nell', A: 'picked the new book because of Benji\'s drawing.', D: 'The next week, Nell walked in with a fat library book that had a giant yellow digger on the cover.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Benji did not like the first books?',
            choices: ['Each week, Benji rolled across the rug, untied his shoes, and stared at the ceiling.',
                      'He crawled over, pointed at the cover, and shouted the name of every machine before Nell could read a word.',
                      'Each week, Nell opened a book about princesses, puppies, or the ABCs.',
                      'One Thursday, Nell noticed something on Benji\'s paper.'],
            kinds: [null, 'wrongtime', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 4 tells what Benji did with the new book. It is not about the first books.', 'Paragraph 2 tells which books Nell read. It does not show how Benji felt about them.', null],
            why: 'Paragraph 2 says Benji rolled on the rug and stared at the ceiling. Kids do that when they are bored. So Benji did not like the first books.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Benji wants to read with Nell again.',
            answer: 'When the visit ended, Benji tugged on Nell\'s sleeve and asked, "Can we read about garbage trucks next time?"',
            notes: { 'By the last page, Benji was sitting so close that his nose almost touched the pictures.': 'This shows Benji liked the book that day. It does not show that he wants to read again.' },
            why: 'Paragraph 5 says Benji asked to read about trucks next time. He is asking for a next time. So Benji wants to read with Nell again.' }
        ] },

      // FACTS:
      // - Bats are mammals, and they are the only mammals that can truly fly.
      // - During the day, most bats sleep hanging upside down in caves, hollow trees, or under bridges.
      // - Most bats come out to eat when the sun goes down.
      // - Many bats hunt insects (such as moths and beetles) in the dark.
      // - These bats make high sounds and listen for the echoes to find the insects.
      // - By eating insects, bats protect farmers' crops.
      // - Some fruit-eating bats drop seeds, which helps new plants grow.
      // - Some bats drink nectar and carry pollen from flower to flower.
      // - Most bats eat insects. A bat flying near a person is not after the person.
      //   ("most": a few kinds, such as vampire bats, drink blood, mostly from sleeping animals.
      //   The old line "It is only hunting bugs, not people" was replaced for that reason.)
      // - A wild bat should never be touched.
      { title: 'The Truth About Bats', genre: 'nonfiction',
        paragraphs: [
          'Many people feel nervous when they see a bat swooping through the evening sky. Movies and Halloween pictures often make bats look spooky. But bats are not monsters. In fact, bats help people and plants in many ways.',
          'Bats are mammals, just like dogs, horses, and people, and they are the only mammals that can truly fly. During the day, most bats sleep while hanging upside down in caves, in hollow trees, or even under bridges. When the sun goes down, they wake up hungry.',
          'Many bats hunt insects in total darkness. A bat makes high squeaks that bounce off moths and beetles, and then it listens for the echoes. The echoes tell the bat exactly where its dinner is flying, even on the darkest night.',
          'By gobbling up insects, bats protect farmers\' crops from hungry bugs. Some bats that eat fruit drop seeds as they fly, which helps new plants grow. Other bats sip nectar and carry pollen from flower to flower.',
          'So the next time a bat flutters past at dusk, there is no need to scream. Most bats eat insects, and a bat flying near you is not after you. Like any wild animal, a bat should never be touched. But bats deserve our thanks, not our fear.'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Bats help people and plants in many ways.',
                           'Bats sleep upside down in caves during the day.',
                           'Bats are the only mammals that can truly fly.',
                           'Bats harm farmers by eating up their crops.'],
                 kinds: [null, 'onedetail', 'onedetail', 'opposite'],
                 notes: [null, null, null, 'Paragraph 4 says bats protect crops by eating the bugs.'],
                 why: 'Paragraph 1 says bats help people and plants in many ways. Paragraph 4 tells how bats eat bugs, drop seeds, and carry pollen. So that is the main idea.' },
            b: { choices: ['In fact, bats help people and plants in many ways.',
                           'Movies and Halloween pictures often make bats look spooky.',
                           'During the day, most bats sleep while hanging upside down in caves, in hollow trees, or even under bridges.',
                           'Many bats hunt insects in total darkness.'],
                 kinds: [null, 'notproof', 'onedetail', 'onedetail'],
                 why: 'Paragraph 1 says bats help people and plants in many ways. The rest of the passage shows how. This sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'bats help people and plants in many ways.', D: 'In fact, bats help people and plants in many ways.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about being afraid of bats?',
            choices: ['People do not need to be afraid of bats.',
                      'Everyone should run inside when a bat flies by.',
                      'Bats are scary monsters, just like in the movies.',
                      'Only little kids are afraid of bats at night.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 5 says there is no need to scream. A bat flying near you is not after you.', 'Paragraph 1 says bats are not monsters.', 'Paragraph 1 says many people feel nervous. It does not say only little kids.'],
            why: 'Paragraph 5 says there is no need to scream when a bat flies past. It says bats deserve our thanks, not our fear. So the author thinks people do not need to be afraid of bats.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that bats can find insects without seeing them?',
            choices: ['The echoes tell the bat exactly where its dinner is flying, even on the darkest night.',
                      'Bats are mammals, just like dogs, horses, and people, and they are the only mammals that can truly fly.',
                      'Movies and Halloween pictures often make bats look spooky.',
                      'Some bats that eat fruit drop seeds as they fly, which helps new plants grow.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 3 says the echoes tell the bat where its dinner is, even on the darkest night. In the dark, the bat cannot see the bug. So bats can find insects without seeing them.' }
        ] }
    ]
  }
};
