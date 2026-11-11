/* Put It Together, version 2 of Levels 1–6 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-together.js; try 2 gets these. Same question slots as version 1.
   Levels 2–6 (11/11): passage 1 = a city / community story, passage 2 = earth-and-space or
   how-things-work nonfiction. Premises checked against the class sites (QPS hub, The Lab,
   R.A.D. Practice, Inference Practice, vocab, sub packets, SBAC reviews) before writing. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.together = {
  2: {
    1: [
      { title: 'Ray Waits for Hugo', genre: 'story',
        paragraphs: [
          'Ray was meeting his friend Hugo at the park at three o\'clock. Ray did not even stop to tie his shoes, and he ran all the way there.',
          'At the park, Ray sat down on a green bench to wait. A little sign was taped to the bench, but Ray was busy looking for Hugo.',
          'Soon Hugo came, and the boys played catch until it was time to go home.',
          'Then Hugo pointed at Ray\'s shorts. Ray\'s shorts had green stripes across the back! Hugo pointed at the little sign and laughed. The sign said "Wet Paint." Ray looked at his striped shorts and laughed, too.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Ray?',
                 choices: ['Ray sat on the bench while the paint was still wet.',
                           'Ray got green paint on his shorts before he left home.',
                           'Hugo painted the green stripes on Ray\'s shorts as a joke.',
                           'Ray did not want to play catch with Hugo at the park.'],
                 kinds: [null, 'noclue', 'noclue', 'opposite'],
                 notes: [null,
                         'The passage gives no clue about paint at home. Look at what Ray did at the park.',
                         'The passage gives no clue that Hugo painted anything.',
                         'Paragraph 3 says the boys played catch until it was time to go home.'],
                 why: 'Paragraph 2 says Ray sat on a green bench. Paragraph 4 says his shorts had green stripes, and the sign said Wet Paint. So Ray sat on the bench while the paint was still wet.' },
            b: { choices: ['Ray\'s shorts had green stripes across the back!',
                           'Ray was meeting his friend Hugo at the park at three o\'clock.',
                           'Then Hugo pointed at Ray\'s shorts.',
                           'Soon Hugo came, and the boys played catch until it was time to go home.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, null, 'Paragraph 4 tells what Hugo did. It does not show what got on Ray\'s shorts.', null],
                 why: 'Paragraph 4 says Ray\'s shorts had green stripes on the back. The bench was green, and the paint was wet. The back of your shorts is what sits on a bench. This sentence BEST proves that Ray sat in the wet paint.' },
            model: { R: 'I can conclude that Ray', A: 'sat on the bench while the paint was still wet.', D: 'Ray\'s shorts had green stripes across the back!' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Ray was in a hurry?',
            choices: ['Ray did not even stop to tie his shoes, and he ran all the way there.',
                      'Ray was meeting his friend Hugo at the park at three o\'clock.',
                      'At the park, Ray sat down on a green bench to wait.',
                      'Hugo pointed at the little sign and laughed.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 1 tells when Ray would meet Hugo. It does not show that Ray was rushing.', null, null],
            why: 'Paragraph 1 says Ray did not stop to tie his shoes. He ran all the way. People skip things and run when they do not want to be late. So Ray was in a hurry.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Ray was not upset.',
            answer: 'Ray looked at his striped shorts and laughed, too.',
            notes: { 'Hugo pointed at the little sign and laughed.': 'This shows that Hugo laughed. The question asks about Ray.',
                     'Ray\'s shorts had green stripes across the back!': 'This tells what happened to the shorts. It does not show how Ray felt.' },
            why: 'Paragraph 4 says Ray looked at his shorts and laughed. People do not laugh when they are upset. So Ray was not upset about his shorts.' }
        ] },

      // FACTS:
      // - Koalas are furry animals from Australia (wild koalas live only in Australia).
      // - Koalas live high up in eucalyptus trees.
      // - Sharp claws help a koala climb.
      // - A koala eats eucalyptus leaves (the leaves of its tree) and not much else.
      // - These tough leaves do not give a koala much energy.
      // - So a koala sleeps most of the day (about 18-22 hours of sleep and rest).
      // - A koala naps up where two branches meet (in the fork of a tree).
      // - A baby koala is called a joey.
      // - The joey grows in a pouch on its mother's belly.
      // - Then the joey rides on its mother's back as she climbs.
      // - A koala eats, sleeps, and raises its baby up in the trees (koalas live almost all their lives in trees).
      // (Word choice, not fact claims: "cute", "What a sweet sight!")
      { title: 'Koalas in the Treetops', genre: 'nonfiction',
        paragraphs: [
          'Koalas are cute, furry animals from Australia. They live high up in eucalyptus trees. Sharp claws help a koala climb.',
          'A koala eats the leaves of its tree, and not much else. The tough leaves do not give a koala much energy.',
          'So a koala sleeps most of the day. It naps up where two branches meet.',
          'A baby koala is called a joey. The joey grows in a pouch on its mom\'s belly. Then the joey rides on its mom\'s back as she climbs. A koala eats, sleeps, and raises its baby up in the trees. What a sweet sight!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Koalas spend almost all their time up in the trees.',
                           'Koalas eat leaves from eucalyptus trees and not much else.',
                           'Koalas sleep for most of the day.',
                           'Koalas live on the ground and climb trees only to eat.'],
                 kinds: [null, 'onedetail', 'onedetail', 'opposite'],
                 notes: [null, null, null, 'Paragraph 3 says a koala naps up in the tree, too.'],
                 why: 'Paragraph 1 says koalas live high up in trees. Paragraph 2 says they eat the leaves of their tree. Paragraph 3 says they nap in the branches. Paragraph 4 says a koala even raises its baby up in the trees. So koalas spend almost all their time in trees.' },
            b: { choices: ['A koala eats, sleeps, and raises its baby up in the trees.',
                           'Koalas are cute, furry animals from Australia.',
                           'A baby koala is called a joey.',
                           'The tough leaves do not give a koala much energy.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says a koala eats, sleeps, and raises its baby up in the trees. That sentence tells about the whole passage. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'koalas spend almost all their time up in the trees.', D: 'A koala eats, sleeps, and raises its baby up in the trees.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about koalas?',
            choices: ['The author thinks koalas are cute and sweet.',
                      'The author thinks koalas are lazy because they sleep so much.',
                      'The author thinks koalas are mean and scary animals.',
                      'The author thinks koalas should live in a zoo.'],
            kinds: [null, 'noclue', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 2 says the leaves do not give a koala much energy. That is why it sleeps. The author never calls koalas lazy.', 'The author never says koalas are mean. Look at the words the author picks.', null],
            why: 'Paragraph 1 calls koalas cute and furry. Paragraph 4 says, What a sweet sight! The words cute and sweet show what the author thinks.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a joey is very small at first?',
            choices: ['The joey grows in a pouch on its mom\'s belly.',
                      'So a koala sleeps most of the day.',
                      'A koala eats the leaves of its tree, and not much else.',
                      'Sharp claws help a koala climb.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 4 says the joey grows in a pouch on its mom\'s belly. A pouch is small, like a pocket. So a joey must be very small at first.' }
        ] }
    ],

    /* ═══ LEVEL 2 · FK 2.5 ═══════════════════════════════ */
    2: [
      { title: 'A Parade of Pigeons', genre: 'story',
        paragraphs: [
          'After school, Wade and his mom sat on a bench in the park. Wade was so hungry that he ate a big blueberry muffin in six fast bites.',
          'When they got up to walk home, a gray pigeon hopped after Wade. Then two more pigeons came. Soon, five pigeons were marching after Wade like a little parade.',
          'Wade walked faster and faster, but the pigeons kept up. Mom laughed and pointed at Wade\'s coat. Bits of muffin were stuck all over the front.',
          'Wade brushed off his coat, and the pigeons stopped to peck at the ground. Then Wade and Mom walked home all by themselves.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about the pigeons?',
                 choices: ['The pigeons wanted the bits of muffin on Wade\'s coat.',
                           'The pigeons were following Mom home to her building.',
                           'The pigeons were scared of Wade and ran away from him.',
                           'The pigeons wanted Wade to play a game of tag.'],
                 kinds: [null, 'wrongwho', 'opposite', 'toofar'],
                 notes: [null,
                         'Paragraph 2 says the pigeons hopped after Wade, not Mom.',
                         'Paragraph 2 says the pigeons followed Wade. They did not run away.',
                         'Too far. No clue shows that the pigeons wanted to play.'],
                 why: 'Paragraph 1 says Wade ate a muffin in six fast bites. Paragraph 3 says bits of muffin were stuck on his coat. Pigeons look for crumbs to eat. So the pigeons wanted the bits of muffin.' },
            b: { choices: ['Bits of muffin were stuck all over the front.',
                           'After school, Wade and his mom sat on a bench in the park.',
                           'Then two more pigeons came.',
                           'Mom laughed and pointed at Wade\'s coat.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, null, null, 'This shows that Mom saw something on the coat. It does not tell what it was.'],
                 why: 'Paragraph 3 says bits of muffin were stuck all over Wade\'s coat. Pigeons eat crumbs and bits of food. So this sentence BEST proves what the pigeons wanted.' },
            model: { R: 'I can conclude that the pigeons', A: 'wanted the bits of muffin on Wade\'s coat.', D: 'Bits of muffin were stuck all over the front.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Wade tried to get away from the pigeons?',
            choices: ['Wade walked faster and faster, but the pigeons kept up.',
                      'When they got up to walk home, a gray pigeon hopped after Wade.',
                      'Wade was so hungry that he ate a big blueberry muffin in six fast bites.',
                      'Then Wade and Mom walked home all by themselves.'],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null, 'Paragraph 2 tells what the pigeon did. It does not show what Wade did.', null, 'Paragraph 4 is the end of the story. It does not show Wade trying to get away.'],
            why: 'Paragraph 3 says Wade walked faster and faster. People walk fast when they want to get away. So Wade tried to get away from the pigeons.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows the pigeons got what they wanted.',
            answer: 'Wade brushed off his coat, and the pigeons stopped to peck at the ground.',
            notes: { 'Then Wade and Mom walked home all by themselves.': 'This shows the pigeons did not follow anymore. The sentence before it shows why.' },
            why: 'Paragraph 4 says Wade brushed off his coat. Then the pigeons stopped to peck at the ground. They were eating the bits of muffin. So the pigeons got what they wanted.' }
        ] },

      // FACTS:
      // - A magnet can push or pull some things without touching them.
      // - A magnet held near a paper clip pulls the clip onto it (paper clips are steel).
      // - Magnets pull on things made of iron or steel, like (steel) nails and pins.
      // - Magnets do not pull on wood, paper, or plastic.
      // - Magnets do not pull on all kinds of metal: a soda can will not stick (US soda cans are aluminum).
      // - Every magnet has two ends called poles: a north pole and a south pole.
      // - A north pole next to a south pole pulls together; two north poles push each other away.
      // - A magnet can hold a picture (art) on a fridge door; the pull goes right through the paper
      //   (fridge doors are steel).
      // (Word choice, not a fact claim: "full of fun surprises".)
      { title: 'The Push and Pull of Magnets', genre: 'nonfiction',
        paragraphs: [
          'A magnet can push or pull some things without even touching them. Hold a magnet near a paper clip. The clip will jump right onto it!',
          'Magnets pull on things made of iron or steel, like nails and pins. They do not pull on wood, paper, or plastic. They do not even pull on all metal. A soda can will not stick at all.',
          'Each magnet has two ends called poles. One end is the north pole. The other end is the south pole. Put a north pole next to a south pole, and the magnets snap together. But two north poles push each other away!',
          'Magnets are full of fun surprises! A magnet can even hold your art on the fridge. The pull goes right through the paper.'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Magnets can push or pull some things without touching them.',
                           'Magnets only work when they touch the things they pull.',
                           'Every magnet has a north pole and a south pole.',
                           'Magnets snap together when two north poles touch.'],
                 kinds: [null, 'opposite', 'onedetail', 'opposite'],
                 notes: [null, null, null, 'Paragraph 3 says two north poles push each other away.'],
                 why: 'Paragraph 1 says a magnet can push or pull without touching. Paragraph 2 tells what magnets pull. Paragraph 3 tells how two magnets push and pull. So the passage is mostly about how magnets push and pull.' },
            b: { choices: ['A magnet can push or pull some things without even touching them.',
                           'Hold a magnet near a paper clip.',
                           'One end is the north pole.',
                           'A soda can will not stick at all.'],
                 kinds: [null, 'onedetail', 'notproof', 'onedetail'],
                 why: 'Paragraph 1 says a magnet can push or pull without touching. The rest of the passage tells more about that. So this sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'magnets can push or pull some things without touching them.', D: 'A magnet can push or pull some things without even touching them.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about magnets?',
            choices: ['Magnets are fun to test and full of surprises.',
                      'Magnets are boring because they only hold up drawings.',
                      'Magnets are too hard for kids to understand.',
                      'Magnets should only be used by scientists.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 4 says magnets are full of fun surprises. The author does not think they are boring.', 'The author never says magnets are hard. Look at the words the author picks.', null],
            why: 'Paragraph 4 says magnets are full of fun surprises. Paragraph 1 says a clip will jump right onto a magnet! These words show that the author thinks magnets are fun.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a magnet could not pick up a plastic toy?',
            choices: ['They do not pull on wood, paper, or plastic.',
                      'Each magnet has two ends called poles.',
                      'But two north poles push each other away!',
                      'The clip will jump right onto it!'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, null, 'Paragraph 3 is about two magnets pushing each other. It is not about plastic.', null],
            why: 'Paragraph 2 says magnets do not pull on plastic. A plastic toy is made of plastic. So a magnet could not pick it up.' }
        ] }
    ],

    /* ═══ LEVEL 3 · FK 3.0 ═══════════════════════════════ */
    3: [
      { title: 'Two Sweaters in July', genre: 'story',
        paragraphs: [
          'It was so hot outside that the sidewalk felt like a stove. Femi lay on the cool kitchen floor all morning. Even the crayons on his windowsill had gone soft and bendy.',
          'After lunch, Grandpa packed a bag. He put in two library books, a bottle of water, and two thick sweaters. Femi laughed and asked why anyone would need a sweater on such a hot day. Grandpa just winked and picked up the bag.',
          'They walked three blocks to the big brick library on Dean Street. When the glass doors slid open, cool air rushed out to meet them. Femi let out a happy sigh.',
          'They found two soft chairs and read for a long time. After an hour, Femi had goosebumps on his arms, so he pulled on a sweater. Grandpa just smiled.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Grandpa?',
                 choices: ['Grandpa knew the library would be cold inside.',
                           'Grandpa packed the sweaters by mistake.',
                           'Grandpa wanted to give the sweaters to the library.',
                           'Grandpa did not want to go to the library.'],
                 kinds: [null, 'opposite', 'noclue', 'opposite'],
                 notes: [null,
                         'Paragraph 2 says Grandpa winked. A wink means he had a plan. It was not a mistake.',
                         'The passage gives no clue that Grandpa wanted to give the sweaters away.',
                         'Paragraph 4 says Grandpa just smiled. No clue shows that he did not want to go.'],
                 why: 'Paragraph 2 says Grandpa packed two thick sweaters. Paragraph 1 says it was very hot outside. Paragraph 3 says cool air rushed out of the library doors. Big buildings are often kept cool inside. So Grandpa knew it would be cold there.' },
            b: { choices: ['He put in two library books, a bottle of water, and two thick sweaters.',
                           'They walked three blocks to the big brick library on Dean Street.',
                           'Femi lay on the cool kitchen floor all morning.',
                           'They found two soft chairs and read for a long time.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 2 says Grandpa packed two thick sweaters. It was a very hot day. You pack a sweater when you think you will be cold. So this sentence BEST proves that Grandpa knew.' },
            model: { R: 'I can conclude that Grandpa', A: 'knew the library would be cold inside.', D: 'He put in two library books, a bottle of water, and two thick sweaters.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Femi did not know why Grandpa packed the sweaters?',
            choices: ['Femi laughed and asked why anyone would need a sweater on such a hot day.',
                      'Grandpa just winked and picked up the bag.',
                      'It was so hot outside that the sidewalk felt like a stove.',
                      'Femi let out a happy sigh.'],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null, 'This tells what Grandpa did. Look for what Femi did.', null, 'Paragraph 3 is about the library. It does not show what Femi thought about the sweaters.'],
            why: 'Paragraph 2 says Femi laughed. He asked why anyone would need a sweater on a hot day. People ask why when they do not know. So Femi did not know why Grandpa packed them.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Femi got cold in the library.',
            answer: 'After an hour, Femi had goosebumps on his arms, so he pulled on a sweater.',
            notes: { 'When the glass doors slid open, cool air rushed out to meet them.': 'This tells about the air at the door. It does not show how Femi felt after an hour.' },
            why: 'Paragraph 4 says Femi got goosebumps. Then he put on a sweater. Goosebumps are a sign that you are cold. So Femi got cold in the library.' }
        ] },

      // FACTS:
      // - A rainbow often shows up when the sun comes out after rain.
      // - A rainbow is made when sunlight shines through drops of water.
      // - Sunlight looks white, but it is made of many colors mixed together.
      // - A raindrop bends the light that shines into it, and this splits the light into its colors.
      // - Millions of drops do this at the same time to make a rainbow.
      // - A rainbow is really a whole circle; from the ground we can only see the top part.
      // - People in airplanes can sometimes see a rainbow as a full circle.
      // - To see a rainbow, the sun must be behind you and the drops of water in front of you.
      // - On a sunny day, the spray from a garden hose can make a rainbow if you stand with your back to the sun.
      // (Word choice, not fact claims: "one of the prettiest sights in nature", "a wonderful burst of color".)
      { title: 'Where Rainbows Come From', genre: 'nonfiction',
        paragraphs: [
          'After a rain shower, the sun peeks out. A rainbow stretches across the sky. It is one of the prettiest sights in nature! A rainbow is made when sunlight shines through drops of water.',
          'Sunlight looks white, but it is really made of many colors mixed together. When sunlight shines into a raindrop, the drop bends the light. This splits the light into all of its colors. Millions of drops do this at once, and a rainbow appears.',
          'A rainbow is really a whole circle. From the ground, we can only see the top part. People in airplanes can sometimes see the full circle!',
          'To see a rainbow, the sun must be behind you. The drops of water must be in front of you. On a sunny day, you can make your own rainbow with the spray from a garden hose. Just stand with your back to the sun. Then look for a wonderful burst of color!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Rainbows are made when sunlight shines through drops of water.',
                           'Rainbows are really whole circles that people see from airplanes.',
                           'Sunlight is made of only one color, and that color is white.',
                           'Rainbows show up when the sun is right in front of you.'],
                 kinds: [null, 'onedetail', 'opposite', 'opposite'],
                 notes: [null, null, 'Paragraph 2 says sunlight is really made of many colors.', 'Paragraph 4 says the sun must be behind you.'],
                 why: 'Paragraph 1 tells what makes a rainbow. Paragraph 2 tells how the drops split the light. Paragraph 4 tells how to see one. So the passage is mostly about how rainbows are made.' },
            b: { choices: ['A rainbow is made when sunlight shines through drops of water.',
                           'A rainbow stretches across the sky.',
                           'From the ground, we can only see the top part.',
                           'Just stand with your back to the sun.'],
                 kinds: [null, 'notproof', 'onedetail', 'onedetail'],
                 why: 'Paragraph 1 says a rainbow is made when sunlight shines through drops of water. The rest of the passage tells more about this. So this sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'rainbows are made when sunlight shines through drops of water.', D: 'A rainbow is made when sunlight shines through drops of water.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about rainbows?',
            choices: ['Rainbows are beautiful sights worth looking for.',
                      'Rainbows are boring because every one looks the same.',
                      'Rainbows are scary because they come after storms.',
                      'Rainbows only matter to scientists who study light.'],
            kinds: [null, 'noclue', 'noclue', 'noclue'],
            notes: [null, 'The author never calls rainbows boring. Look at the words the author picks.', 'Paragraph 1 says the sun peeks out after the rain. The author is not scared.', null],
            why: 'Paragraph 1 calls a rainbow one of the prettiest sights in nature. Paragraph 4 calls it a wonderful burst of color. These words show what the author thinks. Rainbows are worth looking for.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that you can see a rainbow on a day with no rain?',
            choices: ['On a sunny day, you can make your own rainbow with the spray from a garden hose.',
                      'After a rain shower, the sun peeks out.',
                      'Sunlight looks white, but it is really made of many colors mixed together.',
                      'People in airplanes can sometimes see the full circle!'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 1 is about a day with rain.', null, null],
            why: 'Paragraph 4 says you can make a rainbow with a garden hose on a sunny day. The spray from the hose takes the place of rain. So you can see a rainbow with no rain.' }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 ═══════════════════════════════ */
    4: [
      { title: 'Nana and the Walk Sign', genre: 'story',
        paragraphs: [
          'Every Saturday, Inez walked with Nana to the bakery across Broad Street. Broad Street was six lanes wide. Trucks and buses rumbled past all day long. Nana walked with a cane, and she took small, careful steps.',
          'When they reached the corner, the walk sign was already blinking. Big orange numbers on the sign across the street were counting down: eight, seven, six. Nana started to step off the curb, but Inez gently held her arm and shook her head.',
          'So they waited. The numbers ran down to zero, and a red hand lit up. Cars and trucks roared past them. Nana leaned on her cane and tapped her foot.',
          'At last, the white walking man lit up again, and the numbers started over at thirty. Inez took Nana\'s arm, and they stepped off the curb right away. They reached the other side with just four seconds left. Nana squeezed Inez\'s hand and called her the smartest helper on Broad Street.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Inez?',
                 choices: ['Inez waited so Nana would have enough time to cross.',
                           'Inez did not know how to read the walk sign.',
                           'Inez wanted Nana to cross the street by herself.',
                           'Inez wanted to walk to a different bakery on another street.'],
                 kinds: [null, 'opposite', 'opposite', 'noclue'],
                 notes: [null,
                         'Paragraph 2 shows Inez watched the numbers. She knew what they meant.',
                         'Paragraph 4 says Inez took Nana\'s arm to cross.',
                         'The passage gives no clue about a different bakery.'],
                 why: 'Paragraph 2 says the numbers were down to six. Paragraph 4 says they got a whole new light. Still, they made it with just a few seconds left. So Inez waited to give Nana enough time to cross.' },
            b: { choices: ['They reached the other side with just four seconds left.',
                           'Every Saturday, Inez walked with Nana to the bakery across Broad Street.',
                           'Trucks and buses rumbled past all day long.',
                           'Cars and trucks roared past them.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, null, null, 'Paragraph 3 tells about the cars while they waited. It does not show how much time Nana needed to cross.'],
                 why: 'Paragraph 4 says they made it with just four seconds left. That was with a whole new light. Six seconds would not have been enough. So this sentence BEST proves why Inez waited.' },
            model: { R: 'I can conclude that Inez', A: 'waited so Nana would have enough time to cross.', D: 'They reached the other side with just four seconds left.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Nana walks slowly?',
            choices: ['Nana walked with a cane, and she took small, careful steps.',
                      'So they waited.',
                      'Cars and trucks roared past them.',
                      'At last, the white walking man lit up again, and the numbers started over at thirty.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 3 says they waited. It does not show how Nana walks.', null, 'Paragraph 4 tells about the new light. It does not show how Nana walks.'],
            why: 'Paragraph 1 says Nana walked with a cane and took small, careful steps. Small steps are slow steps. So Nana walks slowly.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Nana was proud of Inez.',
            answer: 'Nana squeezed Inez\'s hand and called her the smartest helper on Broad Street.',
            notes: { 'Nana leaned on her cane and tapped her foot.': 'This shows Nana was waiting. It does not show how she felt about Inez.' },
            why: 'Paragraph 4 says Nana squeezed Inez\'s hand. She called Inez the smartest helper on Broad Street. People say kind words like that when they are proud. So Nana was proud of Inez.' }
        ] },

      // FACTS:
      // - The sun seems to rise in the east every morning and to sink (set) in the west every evening.
      // - The sun is not circling (traveling around) Earth; Earth spins (rotates) like a top.
      // - Earth's spinning is why we have day and night.
      // - Earth turns all the way around about once a day, which takes about 24 hours.
      // - The sun can light only one half of Earth at a time: the half facing the sun has day,
      //   and the half facing away has night.
      // - As Earth turns, a place moves into sunlight (morning) and later turns away from it (night).
      // - When it is lunchtime (noon) in New York, it is about midnight to 1 a.m. in China
      //   (China is 12 or 13 hours ahead of New York).
      // - Near the middle of Earth (the equator), the ground moves about 1,000 miles an hour as Earth spins.
      // - We do not feel Earth spin because it turns smoothly and steadily, and everything on it,
      //   even the air, moves along with it.
      // (Word choice, not a fact claim: "What an amazing ride".)
      { title: 'Why We Have Day and Night', genre: 'nonfiction',
        paragraphs: [
          'Every morning, the sun seems to rise in the east. Every evening, it seems to sink in the west. It looks like the sun is moving across the sky. But the sun is not circling around Earth. We have day and night because Earth is always spinning like a giant top.',
          'Earth turns all the way around one time each day. That takes about 24 hours. The sun can shine on only one half of Earth at a time. The half that faces the sun has daytime. The half that faces away from the sun has nighttime.',
          'As Earth turns, your side of it slowly moves into the sunlight, and morning comes. Later, your side turns away from the sun, and night falls. When it is lunchtime in New York, it is the middle of the night in China.',
          'Near the middle of Earth, the ground is moving about 1,000 miles an hour! So why don\'t we feel dizzy? Earth spins smoothly and steadily, and everything on it, even the air, moves right along with it. What an amazing ride we are all on, every single day!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Day and night happen because Earth is always spinning.',
                           'The sun travels all the way around Earth once a day.',
                           'When it is lunchtime in New York, it is night in China.',
                           'People feel dizzy because Earth spins around so fast.'],
                 kinds: [null, 'opposite', 'onedetail', 'opposite'],
                 notes: [null, 'Paragraph 1 says the sun is not circling around Earth.', null, 'Paragraph 4 says Earth spins smoothly. That is why we do not feel dizzy.'],
                 why: 'Paragraph 1 says Earth is always spinning. Paragraph 2 tells how half of Earth faces the sun. Paragraph 3 tells how day and night come. So the passage is mostly about why we have day and night.' },
            b: { choices: ['We have day and night because Earth is always spinning like a giant top.',
                           'It looks like the sun is moving across the sky.',
                           'The half that faces the sun has daytime.',
                           'So why don\'t we feel dizzy?'],
                 kinds: [null, 'notproof', 'onedetail', 'notproof'],
                 why: 'Paragraph 1 says we have day and night because Earth is spinning. The rest of the passage tells how that works. So this sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'day and night happen because Earth is always spinning.', D: 'We have day and night because Earth is always spinning like a giant top.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about Earth\'s spinning?',
            choices: ['Earth\'s spinning is an amazing thing to think about.',
                      'Earth\'s spinning is boring because it happens every day.',
                      'Earth\'s spinning is dangerous, so people should stay inside.',
                      'Earth\'s spinning only matters to scientists in New York.'],
            kinds: [null, 'noclue', 'noclue', 'noclue'],
            notes: [null, 'The author never calls it boring. Look at the words the author picks.', 'Paragraph 4 says Earth spins smoothly. The author does not say it is dangerous.', null],
            why: 'Paragraph 4 says, What an amazing ride we are all on! The word amazing shows what the author thinks. So the author thinks Earth\'s spin is amazing.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Earth spins very fast?',
            choices: ['Near the middle of Earth, the ground is moving about 1,000 miles an hour!',
                      'Every morning, the sun seems to rise in the east.',
                      'The sun can shine on only one half of Earth at a time.',
                      'When it is lunchtime in New York, it is the middle of the night in China.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, null, null, 'Paragraph 3 tells that it is day in one place and night in another. It does not show how fast Earth spins.'],
            why: 'Paragraph 4 says the ground near the middle of Earth moves about 1,000 miles an hour. A car on the highway goes about 60 miles an hour. So Earth spins very fast.' }
        ] }
    ],

    /* ═══ LEVEL 5 · FK 4.0 ═══════════════════════════════ */
    5: [
      { title: 'The Piano in Garnet Park', genre: 'story',
        paragraphs: [
          'In June, the city rolled an old piano into the middle of Garnet Park. Someone had painted it with yellow sunflowers. A sign on top said that anyone could play it. Every day after school, kids crowded around the bench to take turns. Most of their songs sounded like a cat running across the keys.',
          'Mr. Petrov sold newspapers and gum at a little stand by the park gate. He was a quiet man with a gray mustache, and he hardly ever said more than good morning. Della stopped at his stand every day on her way home. Lately, she had seen something odd. When the kids played the piano, Mr. Petrov\'s fingers moved on his counter as if they were pressing keys.',
          'One night, Della stayed late on a bench to finish her book. The park was almost empty. Mr. Petrov pulled down the metal door of his stand and locked it. He walked slowly to the piano and sat down. Then he closed his eyes and played a long, fast song without any music in front of him.',
          'People walking home from work stopped to listen. A woman with a stroller stood still, and a man set down his heavy bags. When the song ended, everyone clapped and cheered. Mr. Petrov\'s cheeks turned bright pink, and he hurried away without a word.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Mr. Petrov?',
                 choices: ['Mr. Petrov knew how to play the piano very well.',
                           'Mr. Petrov was learning the piano by watching the kids.',
                           'Mr. Petrov wanted the city to take the piano out of the park.',
                           'Mr. Petrov was the one who painted the sunflowers on the piano.'],
                 kinds: [null, 'toofar', 'noclue', 'noclue'],
                 notes: [null,
                         'Too far. No clue says Mr. Petrov was just learning. Think about how he played.',
                         'The passage gives no clue that Mr. Petrov wanted the piano gone.',
                         'Paragraph 1 says someone painted the piano. It never says who.'],
                 why: 'Paragraph 2 says Mr. Petrov\'s fingers moved like he was pressing keys. Paragraph 3 says he played a long, fast song. His eyes were closed. So he knew how to play the piano very well.' },
            b: { choices: ['Then he closed his eyes and played a long, fast song without any music in front of him.',
                           'Mr. Petrov pulled down the metal door of his stand and locked it.',
                           'Della stopped at his stand every day on her way home.',
                           'In June, the city rolled an old piano into the middle of Garnet Park.'],
                 kinds: [null, 'notproof', 'wrongwho', 'notproof'],
                 notes: [null, null, 'This tells what Della did. It does not show how Mr. Petrov plays.', null],
                 why: 'Paragraph 3 says Mr. Petrov played a long, fast song with his eyes closed. He did not need any music. Only a person who knows the piano well can do that. So this sentence BEST proves it.' },
            model: { R: 'I can conclude that Mr. Petrov', A: 'knew how to play the piano very well.', D: 'Then he closed his eyes and played a long, fast song without any music in front of him.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that most of the kids did not know how to play the piano?',
            choices: ['Most of their songs sounded like a cat running across the keys.',
                      'Every day after school, kids crowded around the bench to take turns.',
                      'A sign on top said that anyone could play it.',
                      'People walking home from work stopped to listen.'],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null, 'Paragraph 1 says the kids took turns. It does not show how well they played.', null, 'This is about the people who heard Mr. Petrov. It is not about the kids.'],
            why: 'Paragraph 1 says the kids\' songs sounded like a cat running across the keys. A cat on the keys makes a mess of notes, not a song. So most of the kids did not know how to play.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows Mr. Petrov was shy about playing in front of people.',
            answer: 'Mr. Petrov\'s cheeks turned bright pink, and he hurried away without a word.',
            notes: { 'He was a quiet man with a gray mustache, and he hardly ever said more than good morning.': 'This shows Mr. Petrov was quiet. It does not show how he felt about playing for people.',
                     'When the song ended, everyone clapped and cheered.': 'This tells what the people did. Look at what Mr. Petrov did next.',
                     'The park was almost empty.': 'This tells about the park. It does not show how Mr. Petrov felt.',
                     'He walked slowly to the piano and sat down.': 'This tells how Mr. Petrov got to the piano. Look at what he did when people clapped.' },
            why: 'Paragraph 4 says Mr. Petrov\'s cheeks turned pink when people clapped. Then he hurried away. He did not say a word. People blush and rush off when they are shy. So he was shy about playing for people.' }
        ] },

      // FACTS:
      // - When you hum, you can feel your throat buzz (your vocal cords vibrate).
      // - That shaking is called a vibration: a very fast back-and-forth movement.
      // - Every sound begins with something vibrating (shaking).
      // - A plucked guitar string shakes so fast that it looks blurry, and it makes a sound.
      // - When a drum is hit, the top of the drum (the drumhead) shakes up and down.
      // - Vibrations travel through the air in waves (sound waves), a little like ripples on a pond.
      // - When sound waves reach your ear, they make the eardrum shake; the eardrum is a thin,
      //   tight piece of skin (a thin membrane) inside the ear.
      // - The ear sends messages (nerve signals) to the brain, and the brain tells you what you hear.
      // - Sound can also travel through water and through solid things, so you can hear
      //   music through a wall.
      // - Out in space there is no air to carry the vibrations, so there is no sound.
      // (Word choice, not a fact claim: "It is amazing that…", "the secret behind every sound".)
      { title: 'Every Sound Starts with a Shake', genre: 'nonfiction',
        paragraphs: [
          'Put your fingers gently on the front of your throat and hum a tune. Do you feel a buzzing? That tiny shaking is called a vibration. It is the secret behind every sound you hear.',
          'A vibration is a very fast back-and-forth movement. When you pluck a guitar string, it shakes so fast that it looks blurry, and you hear a twang. When someone bangs a drum, the top of the drum shakes up and down. Every sound in the world, from a whisper to a roar, begins with something shaking.',
          'Vibrations travel through the air in waves, a little like ripples spreading across a pond. When the waves reach your ear, they make a thin, tight piece of skin inside it shake too. This piece is called the eardrum. Your ear sends messages to your brain. Then your brain tells you what you hear.',
          'Sound can travel through water and solid things too. That is why you can hear a neighbor\'s music through a wall. But out in space, there is no air to carry the vibrations, so there is no sound at all.',
          'It is amazing that all the music, voices, and noise in the world come from tiny shakes!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Every sound is made by something shaking back and forth.',
                           'Sound can only travel through the air around us.',
                           'Your eardrum is a thin piece of skin deep inside your ear.',
                           'A drum is the loudest thing that can make a sound.'],
                 kinds: [null, 'opposite', 'onedetail', 'noclue'],
                 notes: [null, 'Paragraph 4 says sound can travel through water and walls, too.', null, 'The passage never says which sound is the loudest.'],
                 why: 'Paragraph 2 says each sound starts with a shake. Paragraph 3 tells how the shakes get to your ear. Paragraph 4 tells what sound can move through. So the passage is mostly about how shakes make sound.' },
            b: { choices: ['Every sound in the world, from a whisper to a roar, begins with something shaking.',
                           'Do you feel a buzzing?',
                           'When someone bangs a drum, the top of the drum shakes up and down.',
                           'That is why you can hear a neighbor\'s music through a wall.'],
                 kinds: [null, 'notproof', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 says each sound starts when a thing shakes. The rest of the passage tells more about it. So this sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'every sound is made by something shaking back and forth.', D: 'Every sound in the world, from a whisper to a roar, begins with something shaking.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about sound?',
            choices: ['Sound is amazing because it all comes from tiny shakes.',
                      'Sound is a problem because the world is much too noisy.',
                      'Sound is too hard for kids to learn about or test.',
                      'Sound is not important because no one can see it.'],
            kinds: [null, 'noclue', 'opposite', 'noclue'],
            notes: [null, 'The author never says the world is too noisy. Look at the words the author picks.', 'Paragraph 1 shows an easy way to feel a vibration yourself.', null],
            why: 'Paragraph 5 says it is amazing that all sounds come from tiny shakes. The word amazing shows what the author thinks. So the author thinks sound is amazing.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a bell ringing in outer space would make no sound?',
            choices: ['But out in space, there is no air to carry the vibrations, so there is no sound at all.',
                      'Sound can travel through water and solid things too.',
                      'Vibrations travel through the air in waves, a little like ripples spreading across a pond.',
                      'This piece is called the eardrum.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, null, 'Paragraph 3 tells how sound moves through air. It does not tell about space.', null],
            why: 'Paragraph 4 says there is no air in space to carry the shakes. A bell would shake, but no sound could get to you. So a bell in outer space would make no sound.' }
        ] }
    ],

    /* ═══ LEVEL 6 · FK 4.5 ═══════════════════════════════ */
    6: [
      { title: 'A Windy Tuesday on Tenth Street', genre: 'story',
        paragraphs: [
          'Karim lived right above Mr. Nasser\'s market on Tenth Street, and he stopped in almost every day. The market was tiny, but its shelves were packed from the floor to the ceiling. It sold rice, beans, spices, and fruit from all over the world.',
          'One windy Tuesday, while Karim was picking out a pear, a woman he had never seen before came in with two little boys. She walked slowly down every aisle, reading each label. Then she walked down every aisle again. At last, she came to the counter and asked for injera, a soft, round bread from Ethiopia. Mr. Nasser shook his head sadly. The woman smiled, paid for some milk, and walked back out into the wind.',
          'As soon as she left, Mr. Nasser picked up the phone and made a long call. Then he asked Karim how to spell injera and wrote the word on his order pad.',
          'Nine days later, a van parked outside. The driver carried in a flat brown box from a bakery across the city. Mr. Nasser cleared the shelf right next to the cash register, and Karim made a sign in big green letters.',
          'On Friday, the woman came back for more milk. When she got to the counter, she stopped and stared at the shelf. Then she pressed her hand over her heart, and her eyes filled with tears. The next day, she came back with her whole family to meet Mr. Nasser.'
        ],
        items: [
          { id: 'X01', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Mr. Nasser?',
                 choices: ['Mr. Nasser ordered injera so the woman could buy it at his market.',
                           'Mr. Nasser was upset that the woman bought only some milk.',
                           'Mr. Nasser wanted Karim to practice spelling hard words for school.',
                           'Mr. Nasser was planning to close the market and move far away.'],
                 kinds: [null, 'noclue', 'toofar', 'noclue'],
                 notes: [null,
                         'Paragraph 2 says Mr. Nasser shook his head sadly. He was sad that he had no injera. He was not upset about the milk.',
                         'Too far. No clue says this was a spelling lesson for school.',
                         'The passage gives no clue that Mr. Nasser was closing his market.'],
                 why: 'Paragraph 2 says the woman asked for a bread. The market had none. Paragraph 3 says Mr. Nasser wrote its name on his order pad. Then a box came. So he ordered the bread for the woman.' },
            b: { choices: ['Then he asked Karim how to spell injera and wrote the word on his order pad.',
                           'One windy Tuesday, while Karim was picking out a pear, a woman he had never seen before came in with two little boys.',
                           'Mr. Nasser shook his head sadly.',
                           'On Friday, the woman came back for more milk.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, null, 'Paragraph 2 shows that the market had no injera. It does not show what Mr. Nasser did next.', null],
                 why: 'Paragraph 3 says Mr. Nasser wrote the word on his order pad. Store owners use an order pad to get new things to sell. So this sentence BEST proves he ordered it.' },
            model: { R: 'I can conclude that Mr. Nasser', A: 'ordered injera so the woman could buy it at his market.', D: 'Then he asked Karim how to spell injera and wrote the word on his order pad.' } },
          { id: 'X02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Mr. Nasser wanted the woman to see the injera right away?',
            choices: ['Mr. Nasser cleared the shelf right next to the cash register, and Karim made a sign in big green letters.',
                      'The driver carried in a flat brown box from a bakery across the city.',
                      'The market was tiny, but its shelves were packed from the floor to the ceiling.',
                      'She walked slowly down every aisle, reading each label.'],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null, 'Paragraph 4 says a box came. It does not show where Mr. Nasser put the bread.', null, 'This tells what the woman did on Tuesday. It does not show what Mr. Nasser wanted.'],
            why: 'Paragraph 4 says Mr. Nasser cleared the shelf by the cash register. Karim made a big sign, too. All shoppers go to the register to pay. So he wanted the woman to see the bread right away.' },
          { id: 'X03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST shows the injera meant a lot to the woman when she first saw it.',
            answer: 'Then she pressed her hand over her heart, and her eyes filled with tears.',
            notes: { 'When she got to the counter, she stopped and stared at the shelf.': 'This shows the woman saw the shelf. The next sentence shows how she felt.',
                     'The woman smiled, paid for some milk, and walked back out into the wind.': 'This is from her first visit, before the injera came.',
                     'The next day, she came back with her whole family to meet Mr. Nasser.': 'This is from the next day. Look for what she did when she first saw the shelf.' },
            why: 'Paragraph 5 says the woman pressed her hand over her heart. Her eyes filled with tears. People do that when something means a lot to them. So the injera meant a lot to the woman.' }
        ] },

      // FACTS:
      // - Popcorn is a special kind of corn (popcorn kernels pop; a heated pan makes them pop in a few minutes).
      // - Each kernel has a hard outer shell (the hull); inside is soft starch with a tiny bit of water.
      // - When the kernel gets very hot, that water turns into steam.
      // - Steam takes up much more space than water, so it presses harder and harder on the inside of the shell.
      // - When the shell can no longer hold the steam in, it bursts open with a pop.
      // - The soft starch puffs out into a white foam, which cools into the crunchy popcorn we eat.
      // - A popped kernel can end up many times bigger than it was before.
      // - If a shell has a crack, the steam leaks out instead of building up (so the kernel may not pop).
      // - A kernel that has dried out has too little water to make enough steam (so it may not pop).
      // - People store popcorn kernels in a tightly closed jar (so they do not dry out).
      // (Word choice, not fact claims: "a delicious bit of science that you can eat".)
      { title: 'Why Popcorn Pops', genre: 'nonfiction',
        paragraphs: [
          'Pour some hard, yellow kernels into a hot pan, and soon you will hear a pop. Then you hear another pop, and then dozens more. In a few minutes, the pan is full of fluffy white popcorn. How can a tiny, hard kernel turn into a fluffy snack? The answer is a little drop of water hidden inside each kernel.',
          'Popcorn is a special kind of corn. Each kernel has a hard outer shell, and inside the shell is soft starch with a tiny bit of water. When the kernel gets very hot, that water turns into steam. Steam takes up much more space than water, so it pushes harder and harder against the inside of the shell.',
          'At last, the shell cannot hold the steam in any longer, and it bursts open with a pop! The soft starch puffs out into a white foam. Then the foam cools into the crunchy shape we eat. A popped kernel can end up many times bigger than it was before.',
          'Not every kernel pops. If a shell has a tiny crack, the steam slowly leaks out instead of building up. A kernel that has dried out has too little water to make enough steam. That is why people store popcorn kernels in a tightly closed jar.',
          'So the next time you munch a handful of popcorn, remember the tiny drop of water that made each piece burst open. Popcorn is a delicious bit of science that you can eat!'
        ],
        items: [
          { id: 'X04', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Popcorn pops because of the water hidden inside each kernel.',
                           'Popcorn is a special kind of corn with a hard outer shell.',
                           'Popcorn kernels pop best when they are kept very cold.',
                           'People should store their popcorn kernels in a tightly closed jar.'],
                 kinds: [null, 'onedetail', 'opposite', 'onedetail'],
                 notes: [null, null, 'Paragraph 2 says the kernel has to get very hot.', null],
                 why: 'Paragraph 1 says a drop of water is the answer. Paragraph 2 says the water turns to steam. Paragraph 3 says the steam makes the shell pop. So the passage is mostly about why popcorn pops.' },
            b: { choices: ['The answer is a little drop of water hidden inside each kernel.',
                           'Popcorn is a special kind of corn.',
                           'A popped kernel can end up many times bigger than it was before.',
                           'In a few minutes, the pan is full of fluffy white popcorn.'],
                 kinds: [null, 'onedetail', 'onedetail', 'notproof'],
                 why: 'Paragraph 1 says a drop of water in each kernel is the answer. The rest of the passage tells how the water makes it pop. So this sentence BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'popcorn pops because of the water hidden inside each kernel.', D: 'The answer is a little drop of water hidden inside each kernel.' } },
          { id: 'X05', type: 'mc', skill: 'Author\'s point of view',
            q: 'What is the author\'s point of view about popcorn?',
            choices: ['Popcorn is a tasty snack with fun science inside.',
                      'Popcorn is a boring snack that is not worth learning about.',
                      'Popcorn should only be made by scientists in a lab.',
                      'Popcorn is only fun to eat when you are at the movies.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 5 calls popcorn a delicious bit of science. The author does not think it is boring.', null, 'The passage never talks about the movies. Look at the words the author picks.'],
            why: 'Paragraph 5 says popcorn is a delicious bit of science. Delicious means it tastes very good. So the author thinks popcorn is a tasty snack with fun science inside.' },
          { id: 'X06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a kernel with a cracked shell will most likely not pop?',
            choices: ['If a shell has a tiny crack, the steam slowly leaks out instead of building up.',
                      'Each kernel has a hard outer shell, and inside the shell is soft starch with a tiny bit of water.',
                      'The soft starch puffs out into a white foam.',
                      'Pour some hard, yellow kernels into a hot pan, and soon you will hear a pop.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 2 tells what is inside a kernel. It does not tell about a crack.', null, null],
            why: 'Paragraph 4 says steam leaks out of a cracked shell. The steam has to build up to make the shell pop. If it leaks out, it cannot build up. So a cracked kernel will most likely not pop.' }
        ] }
    ]
  }
};
