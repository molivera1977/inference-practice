/* ═══════════════════════════════════════════════════════
   INFERENCE PRACTICE — 7 · NONFICTION INFERENCES (kind: nonfiction, letter N)
   Prepares the class for the SBAC Inferences (Informational) FIAB.
   Two nonfiction passages per level:
     P1 — an animal, plant or science topic (the class unit: adaptations and
          survival): N01 Part A/B main idea · N02 detail BEST supports ·
          N03 author's point of view
     P2 — a person or job (generic jobs only, no named people):
          N04 Part A/B inference about the people · N05 main problem ·
          N06 sentence BEST supports
   Every passage carries a // FACTS: list of each fact claim for the reviewer.
   Spec: tools/CONTENT-SPEC.md. Check: node tools/check-levels.js nonfiction
═══════════════════════════════════════════════════════ */
window.INF_SETS = window.INF_SETS || {};
window.INF_SETS.nonfiction = {
  cards: [
    { title: 'Nonfiction Is True', blocks: [
      { term: 'nonfiction', means: 'writing that tells true facts about real things', ex: 'A passage about how owls hunt at night is nonfiction.' },
      { p: 'A nonfiction passage teaches you facts. But the author does not tell you everything.' },
      { term: 'inference', means: 'something you figure out from clues and what you know', ex: 'You can make an inference from a true passage, too.' },
      { chart: { facts: 'The passage says owls hunt at night.', know: 'It is dark at night.', conclusion: 'Owls must see or hear well in the dark.' } }
    ] },
    { title: 'Main Idea', blocks: [
      { term: 'main idea', means: 'what the whole passage is mostly about', ex: 'The main idea tells about the whole passage, not just one part.' },
      { quote: 'Ducks have oily feathers that keep the water off. Their webbed feet push them through the water. Their flat bills scoop up food in ponds.' },
      { ask: 'What is the main idea of the passage?' },
      { good: 'A duck has body parts that help it live on the water.', why: 'This tells about the whole passage.' },
      { bad: 'Ducks have webbed feet.', why: 'This is just one detail.' }
    ] },
    { title: "Author's Point of View", blocks: [
      { term: "author's point of view", means: 'what the author thinks about the topic' },
      { p: 'Look at the words the author picks. Words like amazing, clever, and sadly show what the author thinks. When the author says we should, that shows what the author thinks, too.' },
      { quote: 'Bees are amazing helpers. They help flowers make seeds. We should plant more flowers for the bees.' },
      { ask: "What is the author's point of view about bees?" },
      { good: 'The author thinks bees are amazing and need our help.', why: 'The author calls bees amazing. The author also says we should plant flowers for them.' }
    ] },
    { title: 'The Main Problem', blocks: [
      { term: 'problem', means: 'the big trouble in the passage that people work to fix', ex: 'Trash on the beach is a problem. Helpers pick it up.' },
      { p: 'Some passages tell about people at work. Ask: What is hard about this job? How do the people fix it?' },
      { p: 'The fix is not the problem. The problem comes first.' },
      { term: 'supporting detail', means: 'a sentence from the passage that proves your answer', ex: 'Part B asks for the sentence that BEST supports your answer. That sentence is your R.A.D. Detail.' }
    ] }
  ],

  levels: {

    /* ═══ LEVEL 1 · FK 2.0 · 70–110 words ═══════════════ */
    1: [
      // FACTS: The arctic fox lives in the Arctic. · The Arctic is one of the coldest places on Earth. ·
      //   Snow covers the ground in the Arctic for much of the year. · The arctic fox has thick fur all over. ·
      //   Fur grows on the bottoms of its feet and keeps its feet warm on snow and ice. ·
      //   In winter, many arctic foxes have white fur. · White fur is hard to see in snow. ·
      //   In summer, that fur turns brown or gray. · When it sleeps, the fox wraps its bushy tail around its body.
      { title: 'A Fox Made for the Cold', genre: 'nonfiction',
        paragraphs: [
          'The arctic fox lives in the Arctic, one of the coldest places on Earth. Snow covers the ground for much of the year.',
          'This fox has thick fur all over. The fur even grows on the bottoms of its feet. It keeps the fox\'s feet warm on the ice.',
          'In winter, many arctic foxes have white fur. White fur is hard to see in the snow. In summer, the fur turns brown or gray.',
          'When the fox sleeps, it wraps its bushy tail around its body like a blanket. From its feet to its tail, this fox is made for the cold. What an amazing animal!'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ["The arctic fox's body helps it live in a cold place.", 'The arctic fox has fur on the bottoms of its feet.', 'The arctic fox wraps its tail around its body.', 'The Arctic is covered with snow for much of the year.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'The passage tells about many parts of the fox. Paragraph 2 tells about its fur. Paragraph 3 tells about its color. Paragraph 4 tells about its tail. Each part helps the fox live in the cold. That is the main idea.' },
            b: { choices: ['From its feet to its tail, this fox is made for the cold.', 'The arctic fox lives in the Arctic, one of the coldest places on Earth.', 'In summer, the fur turns brown or gray.', 'Snow covers the ground for much of the year.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says this fox is made for the cold from its feet to its tail. That sentence tells about the whole fox. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: "the arctic fox's body helps it live in a cold place.", D: 'From its feet to its tail, this fox is made for the cold.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that the arctic fox can hide in winter?',
            choices: ['White fur is hard to see in the snow.', 'The arctic fox lives in the Arctic, one of the coldest places on Earth.', 'When the fox sleeps, it wraps its bushy tail around its body like a blanket.', 'The fur even grows on the bottoms of its feet.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 3 says many arctic foxes have white fur in winter. White fur is hard to see in the snow. An animal that is hard to see can hide.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about the arctic fox?",
            choices: ['The author thinks the arctic fox is an amazing animal.', 'The author thinks the arctic fox is a boring animal.', 'The author thinks the Arctic is too cold for this fox.', 'The author thinks the arctic fox would make a good pet.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            why: 'Paragraph 4 says, What an amazing animal! The author picked the word amazing. That word shows the author thinks this fox is great.' }
        ] },

      // FACTS: The streets near a school can be busy with cars and buses in the morning. ·
      //   Many schools have crossing guards to help kids cross the street safely. ·
      //   Crossing guards wear bright vests so drivers can see them. ·
      //   A crossing guard holds up a stop sign, and cars stop; then the guard waves the kids across. ·
      //   Crossing guards work when school starts and when it ends. · They stand outside in rain, snow, and cold.
      { title: 'The Guard on the Corner', genre: 'nonfiction',
        paragraphs: [
          'In the morning, the streets near a school can be very busy. Cars and buses rush by. It can be hard for kids to cross the street safely.',
          'That is why many schools have crossing guards. A crossing guard wears a bright vest so drivers can see the guard. The guard holds up a big stop sign, and all the cars stop. Then the guard waves the kids across.',
          'Crossing guards are there when school starts and when it ends. They stand on the corner in rain, snow, and cold.',
          'Thanks to crossing guards, kids get to school and back home safely.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about crossing guards is supported by the passage?',
                 choices: ['Crossing guards help kids even in bad weather.', 'Crossing guards only work on warm, sunny days.', 'Crossing guards drive the school buses.', 'Crossing guards want kids to cross the street alone.'],
                 kinds: [null, 'opposite', 'noclue', 'opposite'],
                 why: 'Paragraph 2 says the guards help kids cross. Paragraph 3 says they stand outside in rain, snow, and cold. So they help kids even in bad weather.' },
            b: { choices: ['They stand on the corner in rain, snow, and cold.', 'Cars and buses rush by.', 'A crossing guard wears a bright vest so drivers can see the guard.', 'Then the guard waves the kids across.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 3 says the guards stand on the corner in rain, snow, and cold. That is bad weather. They still come to help.' },
            model: { R: 'One inference about crossing guards is that', A: 'they help kids even in bad weather.', D: 'They stand on the corner in rain, snow, and cold.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['Busy streets are hard for kids to cross.', 'Crossing guards wear bright vests so drivers can see them.', 'The guard holds up a big stop sign.', 'Kids do not like to walk to school.'],
            notes: [null, 'Paragraph 2 tells what the guards wear. That is a detail, not the problem.', 'Paragraph 2 tells how the guards fix the problem. The fix is not the problem.', null],
            kinds: [null, null, null, 'noclue'],
            why: 'Paragraph 1 says the streets near a school are busy. It is hard for kids to cross. That is the main problem. The rest tells how crossing guards help.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that drivers listen to the crossing guards?',
            choices: ['The guard holds up a big stop sign, and all the cars stop.', 'In the morning, the streets near a school can be very busy.', 'They stand on the corner in rain, snow, and cold.', 'Crossing guards are there when school starts and when it ends.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 2 says the guard holds up a stop sign. Then all the cars stop. The drivers do what the guard shows. So drivers listen to the guards.' }
        ] }
    ],

    /* ═══ LEVEL 2 · FK 2.5 · 90–140 words ═══════════════ */
    2: [
      // FACTS: Many deserts are hot, dry places with not much water. · Strong winds can blow sand around in a desert. ·
      //   A camel's hump is not full of water; it stores fat. · When food is hard to find, a camel's body can use that fat. ·
      //   A camel can go a long time without drinking. · When a camel finds water, it can drink a lot very fast. ·
      //   Camels have long eyelashes that help keep sand out of their eyes. · Camels can close their nostrils to keep sand out. ·
      //   Camels have wide feet that help them walk on soft sand without sinking.
      { title: 'How a Camel Beats the Heat', genre: 'nonfiction',
        paragraphs: [
          'Many deserts are hot, dry places with not much water. Strong winds can blow sand all around. But a camel is made for the desert in many ways.',
          'Many people think a camel\'s hump is full of water. It is not! The hump stores fat. When food is hard to find, the camel\'s body can use that fat.',
          'A camel can go a long time without a drink. When it does find water, it can drink a lot very fast.',
          'Camels have long eyelashes that help keep sand out of their eyes. They can even close their nostrils to keep the sand out. Their wide feet help them walk on soft sand and not sink.',
          'The camel is one of the toughest animals on Earth. What a wonderful desert traveler!'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ["A camel's body helps it live in the desert.", "A camel's hump stores fat, not water.", 'Camels have long eyelashes to keep out sand.', 'Camels can drink a lot of water very fast.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 tells about the hump. Paragraph 3 tells about water. Paragraph 4 tells about eyes, noses, and feet. All of these help the camel live in the desert. That is the main idea.' },
            b: { choices: ['But a camel is made for the desert in many ways.', 'Many deserts are hot, dry places with not much water.', "Many people think a camel's hump is full of water.", 'Strong winds can blow sand all around.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 1 says a camel is made for the desert in many ways. That sentence tells about the whole passage. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: "a camel's body helps it live in the desert.", D: 'But a camel is made for the desert in many ways.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: "Which detail from the passage BEST supports the idea that a camel's hump helps it when there is not much to eat?",
            choices: ["When food is hard to find, the camel's body can use that fat.", "Many people think a camel's hump is full of water.", 'Camels have long eyelashes that help keep sand out of their eyes.', 'A camel can go a long time without a drink.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 2 says the hump stores fat. When food is hard to find, the body can use that fat. So the hump helps when there is not much to eat.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about camels?",
            choices: ['The author thinks camels are tough and wonderful.', 'The author thinks camels are weak and slow.', "The author thinks a camel's hump is full of water.", 'The author thinks camels should live in the city.'],
            notes: [null, null, 'Paragraph 2 says the hump is not full of water. It stores fat.', null],
            kinds: [null, 'opposite', null, 'noclue'],
            why: 'Paragraph 5 calls the camel one of the toughest animals on Earth. It calls the camel a wonderful traveler. Those words show what the author thinks.' }
        ] },

      // FACTS: A swimmer can get tired or slip into deep water. ·
      //   A swimmer in trouble may not be able to yell or wave for help, so trouble can be hard to spot. ·
      //   Many pools have lifeguards; a lifeguard often sits in a tall chair to see the whole pool. ·
      //   Lifeguards scan back and forth across the water the whole time they are on duty. ·
      //   Lifeguards take turns so they can rest their eyes. · A lifeguard blows a whistle when swimmers run or play rough. ·
      //   A lifeguard jumps in with a float to help a swimmer. · Lifeguards train to swim fast and save people.
      { title: 'Eyes on the Water', genre: 'nonfiction',
        paragraphs: [
          'On a hot day, a pool can be full of happy kids. But a swimmer can get tired or slip into deep water. A swimmer in trouble may not be able to yell or wave for help. So it can be hard to tell when someone needs help.',
          'That is why many pools have lifeguards. A guard often sits in a tall chair to see the whole pool. The guard looks back and forth across the water the whole time. Guards take turns, so each one can rest their eyes.',
          'If kids run or play rough, the guard blows a whistle. If a swimmer needs help, the guard jumps in with a float.',
          'Lifeguards train hard to swim fast and save people. They want to be ready, just in case.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about lifeguards is supported by the passage?',
                 choices: ['Lifeguards must pay close attention at all times.', 'Lifeguards only watch the pool when someone yells.', 'Lifeguards would rather swim than watch the pool.', 'Lifeguards never have to get wet at work.'],
                 kinds: [null, 'opposite', 'noclue', 'opposite'],
                 why: 'Paragraph 1 says a swimmer in trouble may not yell for help. Paragraph 2 says the guard looks at the water the whole time. So the guards must pay close attention.' },
            b: { choices: ['The guard looks back and forth across the water the whole time.', 'On a hot day, a pool can be full of happy kids.', 'If a swimmer needs help, the guard jumps in with a float.', 'Lifeguards train hard to swim fast and save people.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 2 says the guard looks back and forth across the water the whole time. That shows close attention.' },
            model: { R: 'One inference about lifeguards is that', A: 'they must pay close attention at all times.', D: 'The guard looks back and forth across the water the whole time.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['It can be hard to tell when a swimmer needs help.', 'A guard often sits in a tall chair to see the whole pool.', 'The guard blows a whistle when kids play rough.', 'The pool is too cold to swim in.'],
            notes: [null, 'Paragraph 2 tells how guards watch the pool. That is part of the fix, not the problem.', 'Paragraph 3 tells about the whistle. That is a detail, not the problem.', null],
            kinds: [null, null, null, 'noclue'],
            why: 'Paragraph 1 says a swimmer in trouble may not yell or wave. So it is hard to tell when someone needs help. That is the main problem. The rest tells how lifeguards help.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: "Which sentence from the passage BEST supports the idea that lifeguards' eyes can get tired?",
            choices: ['Guards take turns, so each one can rest their eyes.', 'A guard often sits in a tall chair to see the whole pool.', 'If kids run or play rough, the guard blows a whistle.', 'On a hot day, a pool can be full of happy kids.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 2 says guards take turns so they can rest their eyes. People rest things that get tired. So their eyes can get tired from watching.' }
        ] }
    ],

    /* ═══ LEVEL 3 · FK 3.0 · 110–170 words ══════════════ */
    3: [
      // FACTS: In the desert, rain may not fall for many weeks. · Most plants would dry up and die without water. ·
      //   Many cactus roots spread out wide, close to the top of the ground, and soak up rain quickly. ·
      //   A cactus stores water in its thick stem. · After a big rain, a cactus stem can swell and get fatter. ·
      //   A waxy skin covers the stem and helps hold water inside. · Many plants have wide, flat leaves. ·
      //   A cactus has spines instead; spines are a kind of leaf. · Spines lose much less water than wide, flat leaves. ·
      //   Spines help keep animals from biting the cactus.
      { title: 'The Cactus Saves Every Drop', genre: 'nonfiction',
        paragraphs: [
          'In the desert, rain may not fall for many weeks. Most plants would dry up and die without water. The cactus, however, is one of the cleverest plants on Earth. Each part of a cactus helps it live in the dry desert.',
          'When rain finally comes, a cactus must drink fast. Many cactus roots spread out wide, close to the top of the ground. These roots can soak up rainwater quickly.',
          'The cactus stores the water in its thick stem. After a big rain, the stem can swell up and get fatter. A waxy skin covers the stem and helps hold the water inside.',
          'Many plants have wide, flat leaves. A cactus has sharp spines instead. The spines are a kind of leaf, but they lose much less water. The spines also keep thirsty animals from taking a bite.',
          'A cactus may look plain, but it is full of surprises. We should treat this amazing plant with care.'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['A cactus has parts that help it get and save water.', 'A waxy skin covers the stem of a cactus.', 'Cactus spines keep thirsty animals away.', 'Many cactus roots spread out close to the top of the ground.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 tells about the roots. Paragraph 3 tells about the stem and skin. Paragraph 4 tells about the spines. Each part helps the cactus get water or save it. That is the main idea.' },
            b: { choices: ['Each part of a cactus helps it live in the dry desert.', 'In the desert, rain may not fall for many weeks.', 'Many plants have wide, flat leaves.', 'Most plants would dry up and die without water.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 1 says each part of a cactus helps it live in the dry desert. That sentence tells about the whole plant. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'a cactus has parts that help it get and save water.', D: 'Each part of a cactus helps it live in the dry desert.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that a cactus can stay alive for weeks without rain?',
            choices: ['The cactus stores the water in its thick stem.', 'These roots can soak up rainwater quickly.', 'In the desert, rain may not fall for many weeks.', 'When rain finally comes, a cactus must drink fast.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 2 tells how the roots soak up rain. It does not show how the cactus lives with no rain.', null, null],
            why: 'Paragraph 3 says the cactus stores water in its thick stem. Stored water can last a long time. So the cactus can live for weeks without rain.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about the cactus?",
            choices: ['The author thinks the cactus is clever and amazing.', 'The author thinks the cactus is a plain and boring plant.', 'The author thinks cactus spines are a bad idea.', 'The author thinks everyone should grow a cactus at home.'],
            notes: [null, 'Paragraph 5 says a cactus may look plain. But the author says it is full of surprises.', null, null],
            kinds: [null, null, 'opposite', 'noclue'],
            why: 'Paragraph 1 calls the cactus one of the cleverest plants on Earth. Paragraph 5 calls it amazing. The words cleverest and amazing show what the author thinks.' }
        ] },

      // FACTS: Mother sea turtles often crawl out of the ocean onto warm beaches at night. ·
      //   Each mother digs a hole (nest) in the sand, lays her eggs, then goes back to the sea. ·
      //   The baby turtles hatch many weeks later and usually climb out of the nest at night. ·
      //   The babies need to reach the ocean fast. · They find it by crawling toward the brightest light. ·
      //   On a dark, natural beach, the brightest light is the moon and stars shining over the water. ·
      //   Lights from houses, hotels, and streetlights can shine brighter and lead babies toward buildings instead of the sea. ·
      //   Turtle helpers walk the beach in the morning to look for new nests and put stakes and tape around them. ·
      //   Some beach towns ask people to turn off their lights at night.
      { title: 'Lights Out for Baby Sea Turtles', genre: 'nonfiction',
        paragraphs: [
          'Mother sea turtles often crawl out of the ocean onto warm beaches at night. Each mother digs a hole in the sand and lays her eggs. Then she goes back to the sea.',
          'Many weeks later, the baby turtles hatch. They usually climb out of the nest at night. The babies must reach the ocean fast. They find it by crawling toward the brightest light. On a dark beach, that light is the moon and stars shining over the water.',
          'But many beaches now have houses, hotels, and streetlights. These lights can shine brighter than the moon. The babies may crawl toward the buildings instead of the sea.',
          'That is why some people work as turtle helpers. Each morning, they walk the beach looking for new nests. They gently put stakes and tape around each nest so no one steps on the eggs. Some beach towns also ask people to turn off their lights at night.',
          'Thanks to these helpers, more babies make it to the sea.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about the turtle helpers is supported by the passage?',
                 choices: ['They care about keeping the baby turtles safe.', 'They want to keep the baby turtles as pets.', 'They do not mind if people step on the nests.', 'They are afraid to go to the beach at night.'],
                 kinds: [null, 'noclue', 'opposite', 'noclue'],
                 why: 'Paragraph 4 says the helpers look for new nests each morning. They put stakes and tape around the nests. They do this to keep the eggs safe. So they care about the baby turtles.' },
            b: { choices: ['They gently put stakes and tape around each nest so no one steps on the eggs.', 'Many weeks later, the baby turtles hatch.', 'These lights can shine brighter than the moon.', 'Then she goes back to the sea.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says the helpers put stakes and tape around each nest so no one steps on the eggs. That shows they want to keep the turtles safe.' },
            model: { R: 'One inference about the turtle helpers is that', A: 'they care about keeping the baby turtles safe.', D: 'They gently put stakes and tape around each nest so no one steps on the eggs.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['Bright lights lead baby turtles away from the ocean.', 'Helpers put stakes and tape around the nests.', 'Mother sea turtles dig holes in the sand to lay their eggs.', 'The ocean water is too cold for the babies.'],
            notes: [null, 'Paragraph 4 tells how the helpers keep the nests safe. That is not the main problem.', 'Paragraph 1 tells where the eggs are laid. That is a detail, not the problem.', null],
            kinds: [null, null, null, 'noclue'],
            why: 'Paragraph 3 says lights can shine brighter than the moon. The babies may crawl toward the buildings. That is the main problem. Paragraph 4 tells how people help fix it.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that turning off lights can help the baby turtles?',
            choices: ['On a dark beach, that light is the moon and stars shining over the water.', 'Each morning, they walk the beach looking for new nests.', 'They gently put stakes and tape around each nest so no one steps on the eggs.', 'Then she goes back to the sea.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 2 says the babies crawl toward the brightest light. On a dark beach, that light is over the water. So when the lights are off, the babies crawl to the sea.' }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 · 140–200 words ══════════════ */
    4: [
      // FACTS: A stick insect looks like a small twig. · It has a long, thin body and long, thin legs. ·
      //   Its body is often brown or green, like the plants it lives on. · Many birds and lizards eat insects. ·
      //   During the day, most stick insects stay very still. · Some stick insects rock gently from side to side, like a twig in the wind. ·
      //   At night, stick insects climb around and eat leaves. · Hiding by blending in with what is around you is called camouflage. ·
      //   Many stick insects can let go of a leg that a bird has grabbed and escape.
      { title: 'The Insect That Looks Like a Twig', genre: 'nonfiction',
        paragraphs: [
          'Look closely at a branch in a forest. You might see a small brown twig. But what if that twig suddenly began to walk? You may have just found a stick insect.',
          'A stick insect has a long, thin body and long, thin legs. Its body is often brown or green, just like the plant where it lives. Many birds and lizards eat insects, but they cannot eat what they cannot find.',
          'During the day, most stick insects stay very still. Some of them even rock gently from side to side, like a twig blowing in the wind. At night, they climb around and munch on leaves.',
          'Hiding by blending in with the things around you is called camouflage. The stick insect is one of the best hiders in the whole animal world. If a bird grabs one by the leg, the insect may have one more trick. Many stick insects can let go of a leg and escape!',
          'These remarkable insects show us that nature is full of surprises.'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Stick insects are very good at hiding.', 'Stick insects climb around and eat leaves at night.', 'Some stick insects rock gently from side to side.', 'A stick insect can let go of its leg to escape a bird.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 tells how a stick insect looks like a twig. Paragraph 3 tells how it stays still and rocks like a twig. Paragraph 4 gives a name for this kind of hiding. Most of the passage is about hiding.' },
            b: { choices: ['The stick insect is one of the best hiders in the whole animal world.', 'At night, they climb around and munch on leaves.', 'Look closely at a branch in a forest.', 'Many stick insects can let go of a leg and escape!'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says the stick insect is one of the best hiders in the animal world. That sentence sums up most of the passage. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'stick insects are very good at hiding.', D: 'The stick insect is one of the best hiders in the whole animal world.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: "Which detail from the passage BEST supports the idea that a stick insect's color helps it hide?",
            choices: ['Its body is often brown or green, just like the plant where it lives.', 'A stick insect has a long, thin body and long, thin legs.', 'Many stick insects can let go of a leg and escape!', 'Some of them even rock gently from side to side, like a twig blowing in the wind.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 2 tells about the shape of the stick insect. It does not tell about its color.', null, null],
            why: 'Paragraph 2 says the body is brown or green, like the plant where it lives. A bug that is the same color as a plant is hard to see on it. So the color helps it hide.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about stick insects?",
            choices: ['The author thinks stick insects are remarkable.', 'The author thinks stick insects are bad at hiding.', 'The author thinks stick insects are pests.', 'The author thinks birds should stop eating insects.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            why: 'Paragraph 4 says the stick insect is one of the best hiders. Paragraph 5 calls these insects remarkable. Those words show the author thinks they are special.' }
        ] },

      // FACTS: After an earthquake or a big storm, people can be trapped under broken buildings. ·
      //   Hikers sometimes get lost in forests. · Searchers cannot see through piles of bricks or thick trees. ·
      //   Search teams use trained dogs. · A dog's sense of smell is much stronger than a person's. ·
      //   A trained dog can smell a person who is hidden out of sight. ·
      //   Trainers start with easy hide-and-seek games and reward the dog with a favorite toy. ·
      //   The hiding places get harder little by little. · Training a search dog can take many months. ·
      //   When a search dog finds a person, it often barks to tell its trainer.
      { title: 'Dogs That Find Lost People', genre: 'nonfiction',
        paragraphs: [
          'After an earthquake or a big storm, people can be trapped under broken buildings. Other times, a hiker gets lost deep in a forest. Searchers need to find these people fast. But they cannot see through piles of bricks or thick trees.',
          'That is when search teams call on some very special helpers: dogs. A dog\'s nose is much stronger than a person\'s nose. A trained dog can smell a person who is hidden out of sight.',
          'Dog trainers start with easy games. A person hides close by, and the dog runs to find the person. When the dog finds the person, it gets its favorite toy as a prize. To the dog, the search is a fun game of hide-and-seek. Little by little, the hiding places get harder to find.',
          'Training a search dog can take many months. The trainer and the dog practice again and again. When a search dog finds a person, it often barks to tell its trainer.',
          'Together, these teams help bring lost people home.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about the dog trainers is supported by the passage?',
                 choices: ['The trainers are patient with their dogs.', 'The trainers rush to finish the training fast.', 'The trainers want their dogs to search alone.', 'The trainers can smell people better than dogs.'],
                 notes: [null, null, 'Paragraph 4 says the trainer and the dog practice together. They work as a team.', 'Paragraph 2 says a dog\'s nose is much stronger than a person\'s nose.'],
                 kinds: [null, 'opposite', null, null],
                 why: 'Paragraph 3 says a person hides close by at first. The hiding places get harder little by little. Paragraph 4 says training can take many months. A person who works slowly for a long time is patient.' },
            b: { choices: ['Training a search dog can take many months.', 'A dog\'s nose is much stronger than a person\'s nose.', 'Other times, a hiker gets lost deep in a forest.', 'When a search dog finds a person, it often barks to tell its trainer.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says training a search dog can take many months. Working on one job for months takes patience.' },
            model: { R: 'One inference about the dog trainers is that', A: 'they are patient with their dogs.', D: 'Training a search dog can take many months.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['People who are lost or trapped can be hard to find.', 'Trainers give the dog its favorite toy when it finds the person.', 'A search dog may bark to tell its trainer it found a person.', 'Search dogs cannot smell people who are hidden.'],
            notes: [null, 'Paragraph 3 tells how trainers teach the dogs. That is part of the fix, not the problem.', 'Paragraph 4 tells what the dog does. That is a detail, not the problem.', null],
            kinds: [null, null, null, 'opposite'],
            why: 'Paragraph 1 says people can be trapped under buildings or lost in a forest. Searchers cannot see them. That is the main problem. The rest of the passage tells how dogs help.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the dogs enjoy their training?',
            choices: ['To the dog, the search is a fun game of hide-and-seek.', 'Training a search dog can take many months.', 'A dog\'s nose is much stronger than a person\'s nose.', 'But they cannot see through piles of bricks or thick trees.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 3 says the search is a fun game to the dog. Dogs enjoy fun games. So the dogs enjoy their training.' }
        ] }
    ],

    /* ═══ LEVEL 5 · FK 4.0 · 170–240 words ══════════════ */
    5: [
      // FACTS: Antarctica is the coldest place on Earth. · Antarctic winter days are short and dark, with icy winds. ·
      //   Emperor penguins raise their chicks in Antarctica during winter. ·
      //   A thick layer of fat under the skin holds in their body heat. ·
      //   Their short feathers are packed tightly together and keep out the wind. ·
      //   The mother lays a single egg, then walks to the sea to find food. ·
      //   The father rests the egg on top of his feet and covers it with a warm fold of skin. ·
      //   For many weeks, the father does not eat at all. (N02 infers he gets very hungry.) ·
      //   The fathers crowd together in a huddle; birds on the edge feel the wind, and they take turns moving toward the warm center. ·
      //   Around the time the chick hatches, the mother returns with food for it (she is often a few days late).
      { title: 'Penguin Dads in the Dark', genre: 'nonfiction',
        paragraphs: [
          'Antarctica is the coldest place on Earth. In winter, the days are short and dark, and icy winds roar across the snow. Yet this is where emperor penguins raise their chicks. Few animals are as tough as these amazing birds.',
          'Emperor penguins are built for the cold. A thick layer of fat under the skin holds in their body heat. Their short feathers are packed tightly together, like shingles on a roof, to keep out the wind.',
          'The hardest job belongs to the fathers. After the mother lays a single egg, she walks to the sea to find food. The father rests the egg on top of his feet and covers it with a warm fold of skin. For many weeks, he stands in the dark and cold, and he does not eat at all.',
          'To stay warm, the fathers crowd together in a tight group called a huddle. The birds in the middle stay cozy, while the ones on the edge feel the icy wind. Slowly, the birds take turns, so each one gets a chance to move toward the warm center.',
          'Around the time the chick hatches, the mother returns with food for it. With fat, feathers, and teamwork, these caring parents beat the cold.'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Emperor penguins have ways to beat the cold Antarctic winter.', 'The mother penguin walks to the sea to find food after she lays an egg.', 'Emperor penguins have short feathers packed tightly together like shingles.', 'The father keeps the egg warm on top of his feet for many weeks.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 tells about fat and feathers. Paragraph 3 tells how the father keeps the egg warm. Paragraph 4 tells about the huddle. Each one helps them beat the cold. That is the main idea.' },
            b: { choices: ['With fat, feathers, and teamwork, these caring parents beat the cold.', 'Antarctica is the coldest place on Earth.', 'After the mother lays a single egg, she walks to the sea to find food.', 'Around the time the chick hatches, the mother returns with food for it.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 5 names the fat, the feathers, and the teamwork. That one sentence tells about all the ways. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'emperor penguins have ways to beat the cold Antarctic winter.', D: 'With fat, feathers, and teamwork, these caring parents beat the cold.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that penguin fathers get very hungry while they care for the egg?',
            choices: ['For many weeks, he stands in the dark and cold, and he does not eat at all.', 'After the mother lays a single egg, she walks to the sea to find food.', 'The birds in the middle stay cozy, while the ones on the edge feel the icy wind.', 'In winter, the days are short and dark, and icy winds roar across the snow.'],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null, null, null, 'Paragraph 1 tells about the winter weather. It does not show the fathers get hungry.'],
            why: 'Paragraph 3 says the father does not eat for many weeks. Anyone who does not eat for weeks gets very hungry. So the fathers get very hungry.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about emperor penguins?",
            choices: ['The author thinks they are amazing, tough parents.', 'The author thinks penguin fathers are lazy.', 'The author thinks penguins should move somewhere warm.', 'The author thinks Antarctica is a fun place to visit.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            why: 'Paragraph 1 calls them amazing birds. It says few animals are as tough. Paragraph 5 calls them caring parents. These words show what the author thinks.' }
        ] },

      // FACTS: A hurricane is a giant storm that forms over warm ocean water. ·
      //   Its strong winds and heavy rain can tear roofs off houses and flood towns. ·
      //   It is hard to figure out where a hurricane will go and how strong it will get. ·
      //   Satellites take pictures of hurricanes from space; the pictures show size and shape but cannot show everything inside. ·
      //   Hurricane hunters are pilots and scientists who fly special planes into hurricanes. · The ride can be very bumpy. ·
      //   The crew drops small tools on parachutes that measure wind speed and air temperature as they fall. ·
      //   The tools send the information back to the plane, and the crew shares it with weather forecasters. ·
      //   This information helps forecasters give better warnings, so families can get ready or leave.
      { title: 'Flying Into the Storm', genre: 'nonfiction',
        paragraphs: [
          'A hurricane is a giant storm that forms over warm ocean water. Its strong winds and heavy rain can tear roofs off houses and flood whole towns. When one is coming, people need to know where it will go and how strong it will get. But that can be very hard to figure out.',
          'Satellites in space take pictures of these storms from far above. The pictures show the size and shape of a storm. But they cannot show everything going on inside it.',
          'That is where the hurricane hunters come in. These pilots and scientists fly special planes right into the storm. While other people are moving away from the storm, the hunters fly straight toward it. The ride can be very bumpy as the plane pushes through wind and rain.',
          'Inside the storm, the crew drops small tools tied to parachutes. As each tool floats down, it measures how fast the wind blows and how warm the air is. The tools send what they learn back to the plane. Then the crew shares it with weather forecasters on the ground.',
          'With this news, the forecasters can give better warnings. Families can then decide whether to get ready at home or leave for a safer place.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about the hurricane hunters is supported by the passage?',
                 choices: ['They are willing to face danger to help other people.', 'They only like to fly when the sky is clear and calm.', 'They fly into hurricanes just for the fun of it.', 'They are afraid to go anywhere near a hurricane.'],
                 notes: [null, null, 'Paragraph 4 says the crew shares what it learns with weather forecasters. They fly to do a job, not just for fun.', null],
                 kinds: [null, 'opposite', null, 'opposite'],
                 why: 'Paragraph 1 says these storms can tear roofs off houses. Paragraph 3 says the hunters fly straight at the storm. Paragraph 4 says they share what they learn with forecasters. So they face danger to help others.' },
            b: { choices: ['While other people are moving away from the storm, the hunters fly straight toward it.', 'Satellites in space take pictures of these storms from far above.', 'A hurricane is a giant storm that forms over warm ocean water.', 'As each tool floats down, it measures how fast the wind blows and how warm the air is.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 3 says other people move away from the storm. But the hunters fly toward it. That shows they will face danger.' },
            model: { R: 'One inference about the hurricane hunters is that', A: 'they are willing to face danger to help other people.', D: 'While other people are moving away from the storm, the hunters fly straight toward it.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['It is hard to know where a hurricane will go and how strong it will get.', 'The crew drops small tools tied to parachutes into the middle of the storm.', 'The ride inside a hurricane can be very bumpy.', 'Satellites take pictures of hurricanes from space.'],
            notes: [null, 'Paragraph 4 tells how the hunters work on the problem. The fix is not the problem.', 'Paragraph 3 tells about the ride. That is a detail, not the main problem.', 'Paragraph 2 tells about pictures from space. That is a detail, not the main problem.'],
            why: 'Paragraph 1 says people need to know where the storm will go. It says that is hard to figure out. That is the main problem. The rest of the passage tells how the hunters help.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: "Which sentence from the passage BEST supports the idea that the hurricane hunters' work helps keep families safe?",
            choices: ['Families can then decide whether to get ready at home or leave for a safer place.', 'The ride can be very bumpy as the plane pushes through wind and rain.', 'These pilots and scientists fly special planes right into the storm.', 'As each tool floats down, it measures how fast the wind blows and how warm the air is.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, null, 'Paragraph 3 tells what the hunters do. It does not show how families stay safe.', null],
            why: 'Paragraph 5 says the warnings get better. Then families can get ready or leave for a safe place. So the hunters help keep families safe.' }
        ] }
    ],

    /* ═══ LEVEL 6 · FK 4.5 · 200–280 words ══════════════ */
    6: [
      // FACTS: An octopus has a soft body, eight arms, and no shell. · Sharks, eels, and seals eat octopuses. ·
      //   An octopus can change the color of its skin in less than a second to match sand or rocks. ·
      //   Some octopuses can make their skin bumpy so they look like part of a rock. ·
      //   An octopus can squirt a cloud of dark ink into the water. ·
      //   An octopus can shoot water out of its body to jet away. · An octopus has no bones. ·
      //   Because its body is soft, an octopus can squeeze through very small cracks and gaps. ·
      //   Octopuses are known for being smart; some kept in tanks have learned to unscrew jar lids to get food inside.
      { title: 'The Octopus and Its Bag of Tricks', genre: 'nonfiction',
        paragraphs: [
          'An octopus has a soft body, eight long arms, and no shell to protect it. Sharks, eels, and seals all like to eat octopuses. Yet the octopus stays alive, thanks to an amazing set of tricks.',
          'The first trick is hiding. An octopus can change the color of its skin in less than a second. It can turn sandy brown on the sand or speckled gray on the rocks. Some can even make their skin bumpy, so they look like part of a rock. To a fish swimming by, the octopus seems to vanish.',
          'If hiding does not work, the octopus has a second trick. It can squirt a cloud of dark ink into the water. While the hunter is confused, the octopus shoots water out of its body and jets away.',
          'An octopus also has no bones at all. Because its body is so soft, it can squeeze through a crack that seems far too small for it. A hungry eel may chase an octopus into the rocks, only to watch it slip away through a tiny gap.',
          'Octopuses are also known for being very smart. Some octopuses in tanks have learned to unscrew the lids of jars to get the food inside. The octopus is truly one of the cleverest creatures in the sea.'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['The octopus has clever ways to stay safe from hungry animals.', 'An octopus can squirt a cloud of dark ink to confuse an enemy.', 'Some octopuses in tanks have learned to open jars to get food.', 'Sharks, eels, and seals are some of the animals that eat octopuses.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 tells about hiding. Paragraph 3 tells about ink. Paragraph 4 tells about its soft body. Each trick helps it stay safe. That is the main idea.' },
            b: { choices: ['Yet the octopus stays alive, thanks to an amazing set of tricks.', 'An octopus has a soft body, eight long arms, and no shell to protect it.', 'Sharks, eels, and seals all like to eat octopuses.', 'Some octopuses in tanks have learned to unscrew the lids of jars to get the food inside.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 1 says the octopus stays alive thanks to its tricks. That one sentence tells about all the tricks. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'the octopus has clever ways to stay safe from hungry animals.', D: 'Yet the octopus stays alive, thanks to an amazing set of tricks.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that an octopus can escape where a bigger animal cannot follow?',
            choices: ['A hungry eel may chase an octopus into the rocks, only to watch it slip away through a tiny gap.', 'It can squirt a cloud of dark ink into the water.', 'It can turn sandy brown on the sand or speckled gray on the rocks.', 'Sharks, eels, and seals all like to eat octopuses.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 4 says an eel may chase an octopus. But the octopus slips away through a tiny gap. The eel is too big to fit. So the eel cannot follow.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about the octopus?",
            choices: ['The author thinks the octopus is a remarkably clever animal.', 'The author thinks the octopus is helpless without a shell.', 'The author thinks octopuses belong in tanks, not the sea.', 'The author thinks sharks are smarter than octopuses.'],
            notes: [null, 'Paragraph 1 says it has no shell. But the author says it has amazing tricks to stay alive.', null, null],
            kinds: [null, null, 'noclue', 'noclue'],
            why: 'Paragraph 1 calls its tricks amazing. Paragraph 5 says it is one of the cleverest in the sea. Those words show what the author thinks.' }
        ] },

      // FACTS: On a spacewalk, astronauts work outside a spacecraft, floating, in thick gloves. ·
      //   Even simple jobs, like turning a bolt, can be hard on a spacewalk. · Space has no air to breathe. ·
      //   Astronauts wear spacesuits outside; a spacesuit gives them air and protects them from the heat and cold of space. ·
      //   Spacesuits are bulky, and their stiff gloves make it hard to grab small tools. ·
      //   In space, pushing on a tool can push your body the other way. ·
      //   Astronauts clip themselves to the spacecraft with safety lines. ·
      //   Astronauts train for spacewalks in a giant pool that holds life-size models of parts of the space station. ·
      //   Floating in water feels a little like floating in space. ·
      //   They practice each job in the pool, in spacesuits, many times, with divers close by to help.
      { title: 'Practicing for a Spacewalk', genre: 'nonfiction',
        paragraphs: [
          'Imagine trying to fix a machine while you are floating. You are wearing thick gloves, and there is nothing to stand on. That is what working outside a spacecraft can be like. On a spacewalk, even a simple job such as turning a bolt can be hard.',
          'Space has no air to breathe, so astronauts must wear spacesuits when they go outside. A spacesuit gives them air and keeps them safe from the heat and cold of space. But the suit is bulky, and its stiff gloves make it hard to grab small tools.',
          'Floating causes problems too. On Earth, when you push on a tool, your feet keep you in place. In space, pushing on a tool can send your whole body drifting the other way. To stay safe, astronauts clip themselves to the spacecraft with strong safety lines.',
          'To get ready, astronauts train in a giant swimming pool. The pool is so big that it holds life-size models of parts of the space station. Floating in water feels a little like floating in space. Wearing their spacesuits, they practice each job in the pool again and again before they try it in space. Divers stay close by to help.',
          'All those hours of careful practice pay off. When it is time for a real spacewalk, the astronauts already know every step.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about the astronauts is supported by the passage?',
                 choices: ['They care about doing each job the right way.', 'They think one practice in the pool is enough.', 'They would rather work in a pool than in space.', 'They do not need any help when they train.'],
                 notes: [null, null, null, 'Paragraph 4 says divers stay close by to help.'],
                 kinds: [null, 'opposite', 'noclue', null],
                 why: 'Paragraph 4 tells how they practice in the pool. Paragraph 5 says they already know every step. People practice a lot when they want to get a job right. So they care about doing each job the right way.' },
            b: { choices: ['Wearing their spacesuits, they practice each job in the pool again and again before they try it in space.', 'Space has no air to breathe, so astronauts must wear spacesuits when they go outside.', 'On Earth, when you push on a tool, your feet keep you in place.', 'Floating in water feels a little like floating in space.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says they practice each job in the pool again and again. They do this before they try it in space. That shows they care about getting each job right.' },
            model: { R: 'One inference about the astronauts is that', A: 'they care about doing each job the right way.', D: 'Wearing their spacesuits, they practice each job in the pool again and again before they try it in space.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['Working outside a spacecraft is hard and can be dangerous.', 'Astronauts practice each job in a giant swimming pool before going to space.', 'Divers stay close to the astronauts in the pool.', 'Astronauts do not have enough tools to take into space.'],
            notes: [null, 'Paragraph 4 tells how astronauts get ready. That is how they work on the problem. It is not the problem.', 'Paragraph 4 tells about the divers. That is just a detail. It is not the problem.', null],
            kinds: [null, null, null, 'noclue'],
            why: 'Paragraph 1 says even a simple job can be hard on a spacewalk. Paragraph 2 says space has no air to breathe. So the work is hard and can be dangerous. That is the main problem. Paragraph 4 tells how they get ready for it.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that floating can be dangerous for astronauts?',
            choices: ['In space, pushing on a tool can send your whole body drifting the other way.', 'Floating in water feels a little like floating in space.', 'Divers stay close by to help.', 'When it is time for a real spacewalk, the astronauts already know every step.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 3 says a push can send your body drifting away. In space, you could float off. That would not be safe. So floating can be dangerous.' }
        ] }
    ]
  }
};
