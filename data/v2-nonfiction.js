/* Nonfiction Inferences, version 2 of Levels 1–6 — a retry's passages (Marcos 11/10: "New retry passages";
   Level 1 on 11/10, Levels 2–6 on 11/11). Try 1 of a level gets data/act-nonfiction.js; try 2 gets these.
   Same question slots as version 1. P1 = an animal, plant or science topic; P2 = a person or a job.
   Every passage carries a // FACTS: list of each fact claim for the reviewer. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.nonfiction = {
  2: {
    1: [
      // FACTS: A seahorse is a fish. · A seahorse has a long, curly tail and a head shaped like a horse's head;
      //   that is how it got its name. · Most fish swim lying flat; a seahorse swims standing up (upright). ·
      //   A seahorse swims very slowly. · To stay in one spot, a seahorse wraps its tail around sea grass and holds on. ·
      //   A seahorse dad (the male) has a pouch on his belly. · The mom (the female) puts her eggs in his pouch. ·
      //   Later, many baby seahorses swim out of the dad's pouch.
      //   (Word choice, not fact claims: "a special fish", "What a wonderful fish!")
      { title: 'A Fish Called a Seahorse', genre: 'nonfiction',
        paragraphs: [
          'The seahorse is a special fish. It has a long, curly tail and a head shaped like a horse\'s head. That is how it got its name.',
          'Most fish swim lying flat, but a seahorse swims standing up. It swims very slowly. To stay in one spot, a seahorse wraps its tail around sea grass and holds on tight.',
          'A seahorse dad has a pouch on his belly. The mom puts her eggs in his pouch. Later, many baby seahorses swim out of the pouch.',
          'In so many ways, a seahorse is not like other fish. What a wonderful fish!'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['A seahorse is a fish that is not like most fish.', 'A seahorse has a head shaped like a horse\'s head.', 'A seahorse swims standing up and very slowly.', 'A seahorse dad keeps the eggs in a pouch on his belly.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 1 tells how a seahorse looks. Paragraph 2 tells how it swims. Paragraph 3 tells about its babies. In each part, the seahorse is not like most fish. That is the main idea.' },
            b: { choices: ['In so many ways, a seahorse is not like other fish.', 'That is how it got its name.', 'It swims very slowly.', 'Later, many baby seahorses swim out of the pouch.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 4 says that in so many ways, a seahorse is not like other fish. That sentence tells about the whole passage. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'a seahorse is a fish that is not like most fish.', D: 'In so many ways, a seahorse is not like other fish.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that a seahorse can use its tail like a hand?',
            choices: ['To stay in one spot, a seahorse wraps its tail around sea grass and holds on tight.', 'It has a long, curly tail and a head shaped like a horse\'s head.', 'Most fish swim lying flat, but a seahorse swims standing up.', 'The mom puts her eggs in his pouch.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 1 tells what the tail looks like. It does not show the tail holding on.', null, null],
            why: 'Paragraph 2 says a seahorse wraps its tail around sea grass and holds on tight. You hold on to things with your hand. So a seahorse can use its tail like a hand.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about seahorses?",
            choices: ['The author thinks seahorses are special, wonderful fish.', 'The author thinks seahorses are dull fish that do nothing fun.', 'The author thinks a seahorse is not a real fish.', 'The author thinks seahorses should live in fish tanks at home.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, null, 'Paragraph 1 says the seahorse is a fish. It is a real fish.', null],
            why: 'Paragraph 1 calls the seahorse a special fish. Paragraph 4 says, What a wonderful fish! The words special and wonderful show what the author thinks.' }
        ] },

      // FACTS: A veterinarian is a doctor for animals; most people say "vet" for short. ·
      //   Vets help pets that are sick or hurt. · Pets cannot talk, so a dog cannot tell the vet that its leg hurts. ·
      //   A vet checks a pet's whole body ("from nose to tail"). · A vet listens to a pet's heart with a tool called a stethoscope. ·
      //   A vet feels a pet's belly and watches how the pet walks and eats. ·
      //   Vets give shots (vaccines) that help keep pets from getting sick. · Some vets care for cows and horses on farms.
      { title: 'The Animal Doctor', genre: 'nonfiction',
        paragraphs: [
          'A veterinarian is a doctor for animals. Most people say "vet" for short. Vets help pets that are sick or hurt.',
          'A vet\'s job can be hard, because pets cannot talk. A dog cannot tell the vet that its leg hurts.',
          'So the vet checks the pet from nose to tail. The vet listens to the pet\'s heart with a tool called a stethoscope. The vet feels the pet\'s belly and watches how the pet walks and eats.',
          'Vets also give shots that help keep pets from getting sick. Some vets care for cows and horses on farms.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about veterinarians is supported by the passage?',
                 choices: ['Veterinarians must look closely at the whole pet.', 'Veterinarians only take care of small pets like dogs and cats.', 'Veterinarians do not like to touch the animals they help.', 'Veterinarians would rather be doctors for people.'],
                 kinds: [null, null, 'opposite', 'noclue'],
                 notes: [null, 'Paragraph 4 says some vets care for cows and horses on farms.', null, null],
                 why: 'Paragraph 3 says the vet checks the pet from nose to tail. The vet listens to the heart and feels the belly. The vet even watches the pet walk and eat. So vets must look closely at the whole pet.' },
            b: { choices: ['So the vet checks the pet from nose to tail.', 'A veterinarian is a doctor for animals.', 'Most people say "vet" for short.', 'Some vets care for cows and horses on farms.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 3 says the vet checks the pet from nose to tail. That means the vet looks at every part of the pet. That is looking closely.' },
            model: { R: 'One inference about veterinarians is that', A: 'they must look closely at the whole pet.', D: 'So the vet checks the pet from nose to tail.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['Pets cannot tell the vet what is wrong.', 'The vet listens to a pet\'s heart with a stethoscope.', 'Some vets take care of cows and horses.', 'Pets do not like to ride in the car to the vet.'],
            notes: [null, 'Paragraph 3 tells how a vet checks a pet. That is part of the fix, not the problem.', 'Paragraph 4 tells about farm animals. That is a detail, not the problem.', null],
            kinds: [null, null, null, 'noclue'],
            why: 'Paragraph 2 says a vet\'s job is hard because pets cannot talk. A sick dog cannot say what hurts. That is the main problem. The rest tells how vets find out what is wrong.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that vets help pets that are not sick?',
            choices: ['Vets also give shots that help keep pets from getting sick.', 'Vets help pets that are sick or hurt.', 'A dog cannot tell the vet that its leg hurts.', 'The vet listens to the pet\'s heart with a tool called a stethoscope.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 1 tells about pets that are already sick or hurt. The question asks about pets that are not sick.', null, null],
            why: 'Paragraph 4 says vets give shots that keep pets from getting sick. Those pets are not sick yet. So vets help pets that are not sick, too.' }
        ] }
    ],

    /* ═══ LEVEL 2 · FK 2.5 · 90–140 words ═══════════════ */
    2: [
      // FACTS: Most plants get what they need from sunlight, water, and soil. ·
      //   The Venus flytrap grows in wet, boggy places where the soil is poor (low in nutrients). ·
      //   The flytrap catches insects; the insects give it what the poor soil lacks (it still uses sunlight). ·
      //   Each trap is a leaf with two halves (lobes) that open like a mouth. · Stiff spikes (bristles) line the edges. ·
      //   Tiny trigger hairs grow inside the trap. · If the hairs are touched two times, the trap snaps shut in less than a second. ·
      //   The edge spikes lock together like the bars of a cage. · The closed trap squeezes tight, and juices break the insect down. ·
      //   A trap can only close a few times before it dies.
      //   (Word choice, not fact claims: "this clever plant", "So please do not poke a trap just to watch it snap!")
      { title: 'The Plant With a Snapping Trap', genre: 'nonfiction',
        paragraphs: [
          'Most plants get what they need from sunlight, water, and soil. The Venus flytrap grows in wet, boggy places where the soil is poor. So this clever plant catches insects to get what it needs!',
          'Each trap is a leaf with two halves that open like a mouth. Stiff spikes stick out around the edges, and tiny hairs grow inside.',
          'When an insect walks in, it bumps the hairs. If the hairs are touched two times, the trap snaps shut in less than a second. The spikes lock together like the bars of a cage.',
          'Then the trap squeezes tight, and juices break the insect down. The insect gives the plant what the poor soil cannot.',
          'A trap can only close a few times before it dies. So please do not poke a trap just to watch it snap!'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['The Venus flytrap is a plant that traps insects to help it grow.', 'The Venus flytrap grows in wet, boggy places where the soil is poor.', 'The spikes on a trap lock together like the bars of a cage.', 'Each trap on a flytrap can only close a few times.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 1 says this plant catches insects. Paragraphs 2 and 3 tell how the trap works. Paragraph 4 tells how the insect helps the plant. So the whole passage is about a plant that traps insects to help it grow.' },
            b: { choices: ['So this clever plant catches insects to get what it needs!', 'Most plants get what they need from sunlight, water, and soil.', 'Each trap is a leaf with two halves that open like a mouth.', 'Then the trap squeezes tight, and juices break the insect down.'],
                 kinds: [null, 'notproof', 'onedetail', 'onedetail'],
                 notes: [null, 'Paragraph 1 starts with most plants. This sentence is not about the flytrap.', null, null],
                 why: 'Paragraph 1 says this clever plant catches insects to get what it needs. That sentence tells what the whole passage is about. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'the Venus flytrap is a plant that traps insects to help it grow.', D: 'So this clever plant catches insects to get what it needs!' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that an insect has almost no time to get away?',
            choices: ['If the hairs are touched two times, the trap snaps shut in less than a second.', 'When an insect walks in, it bumps the hairs.', 'Stiff spikes stick out around the edges, and tiny hairs grow inside.', 'The insect gives the plant what the poor soil cannot.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 3 says the insect bumps the hairs. It does not say how fast the trap shuts.', null, null],
            why: 'Paragraph 3 says the trap snaps shut in less than a second. That is very fast. So an insect has almost no time to get away.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about the Venus flytrap?",
            choices: ['The author thinks it is a clever plant that people should not poke.', 'The author thinks it is a dull plant that is just like all the others.', 'The author thinks people should poke a trap to watch it snap.', 'The author thinks insects should stay away from all plants.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 1 calls it a clever plant. It is not dull.', 'Paragraph 5 says please do not poke a trap.', null],
            why: 'Paragraph 1 calls the flytrap a clever plant. Paragraph 5 says please do not poke a trap. The words clever and please show what the author thinks.' }
        ] },

      // FACTS: In the wild, many animals spend much of the day looking for food. ·
      //   A bear may dig for roots or tear open a log to find bugs (insects and grubs). ·
      //   At a zoo, keepers bring the food, so zoo animals do not need to search. ·
      //   Zoo animals with nothing to do can get bored (the reason zoos give animals "enrichment"). ·
      //   Zookeepers hide food in boxes, logs, and balls with holes, so the animals must work to get it. ·
      //   On hot days, some keepers freeze fruit or fish in blocks of ice as treats (for tigers, bears and others). ·
      //   Keepers bring new smells (such as spices) for animals to sniff, and they change things often so the animals meet new things.
      { title: 'Ice Treats and Hidden Snacks', genre: 'nonfiction',
        paragraphs: [
          'In the wild, animals spend much of the day looking for food. A bear may dig for roots or tear open a log to find bugs. At a zoo, the keepers bring the food. So zoo animals do not need to search. With nothing to do, they can get bored.',
          'Zookeepers hide food in boxes, logs, and balls with holes. The animals must sniff, dig, and push to get a snack.',
          'On hot days, some keepers freeze fruit or fish in big blocks of ice. A tiger may lick and bite the ice for a long time to get its treat.',
          'Keepers also bring new smells for the animals to sniff. They change things often, so each day feels a bit new.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about zookeepers is supported by the passage?',
                 choices: ['Zookeepers want the animals to look for food like they do in the wild.', 'Zookeepers want the animals to gulp down their food as fast as they can.', 'Zookeepers only care for the animals on hot days.', 'Zookeepers think all zoo animals should go back to the wild.'],
                 kinds: [null, 'opposite', null, 'noclue'],
                 notes: [null, null, 'Paragraph 3 tells about hot days. But the keepers hide food and bring new smells, too.', null],
                 why: 'Paragraph 1 says animals in the wild spend much of the day looking for food. Paragraph 2 says the keepers hide the food, so the animals must sniff and dig for it. So the keepers want the animals to look for food like they do in the wild.' },
            b: { choices: ['The animals must sniff, dig, and push to get a snack.', 'In the wild, animals spend much of the day looking for food.', 'At a zoo, the keepers bring the food.', 'Keepers also bring new smells for the animals to sniff.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, 'Paragraph 1 tells about animals in the wild. It does not show what the keepers do.', null, null],
                 why: 'Paragraph 2 says the animals must sniff, dig, and push to get a snack. The keepers hid the food on purpose. So the animals have to look for it.' },
            model: { R: 'One inference about zookeepers is that', A: 'they want the animals to look for food like they do in the wild.', D: 'The animals must sniff, dig, and push to get a snack.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['Zoo animals can get bored because they do not need to look for food.', 'Some keepers freeze fruit or fish in big blocks of ice for the animals.', 'A bear in the wild may tear open a log to find bugs.', 'Zoo animals do not get enough food to eat each day.'],
            notes: [null, 'Paragraph 3 tells one way keepers help. That is part of the fix, not the problem.', 'Paragraph 1 tells what a bear does in the wild. That is a detail, not the problem.', 'Paragraph 1 says the keepers bring the food. The animals do get food.'],
            kinds: [null, null, null, 'opposite'],
            why: 'Paragraph 1 says zoo animals do not need to search for food. With nothing to do, they can get bored. That is the main problem. The rest tells how keepers help.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that an ice treat keeps an animal busy?',
            choices: ['A tiger may lick and bite the ice for a long time to get its treat.', 'On hot days, some keepers freeze fruit or fish in big blocks of ice.', 'They change things often, so each day feels a bit new.', 'So zoo animals do not need to search.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 3 tells what the keepers make. It does not show what the animal does with it.', null, null],
            why: 'Paragraph 3 says a tiger may lick and bite the ice for a long time. An animal that works at something for a long time is busy. So the ice treat keeps it busy.' }
        ] }
    ],

    /* ═══ LEVEL 3 · FK 3.0 · 110–170 words ══════════════ */
    3: [
      // FACTS: Flamingos are tall birds with long, thin legs and pink feathers. ·
      //   Flamingos are not pink when they hatch; a chick has soft gray and white down (fluff). ·
      //   A flamingo's pink color comes from the food it eats. · Flamingos eat tiny shrimp (such as brine shrimp) and algae. ·
      //   These foods have pink and orange coloring (pigments called carotenoids) in them. ·
      //   To eat, a flamingo puts its head upside down in the water; its bill strains food from the water and mud. ·
      //   The color from the food slowly turns the feathers pink; a young flamingo can take two or three years to turn all pink. ·
      //   In zoos, keepers add coloring to flamingo food so the birds stay bright pink (without it, their new feathers grow in pale).
      //   (Word choice, not fact claims: "some of the prettiest birds on Earth", "a surprising place")
      { title: "The Flamingo's Pink Secret", genre: 'nonfiction',
        paragraphs: [
          'Flamingos are tall birds with long, thin legs and bright pink feathers. But a flamingo is not pink when it hatches. A baby flamingo has soft gray and white fluff.',
          "So where does the pink come from? A flamingo's pink color comes from the food it eats. These birds eat tiny shrimp and tiny living things called algae. The food has pink and orange color inside it.",
          'To eat, a flamingo puts its head upside down in the water. Its bill works like a strainer. The water and mud flow out, but the food stays in.',
          "Bit by bit, the color from the food turns the bird's feathers pink. A young flamingo can take two or three years to turn all pink. In zoos, keepers add color to the birds' food so they stay bright pink.",
          'Flamingos are some of the prettiest birds on Earth. And their color comes from a surprising place!'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['The food a flamingo eats is what turns it pink.', 'A flamingo puts its head upside down in the water to eat.', 'A baby flamingo has soft gray and white fluff when it hatches.', 'A young flamingo can take two or three years to turn all pink.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 1 says a flamingo is not pink when it hatches. Paragraph 2 tells what it eats. Paragraph 4 tells how the food turns it pink. Most of the passage is about where the pink comes from. That is the main idea.' },
            b: { choices: ["A flamingo's pink color comes from the food it eats.", 'Its bill works like a strainer.', 'Flamingos are some of the prettiest birds on Earth.', 'So where does the pink come from?'],
                 kinds: [null, 'onedetail', 'notproof', 'notproof'],
                 notes: [null, null, null, 'Paragraph 2 asks a question here. The question does not give the answer.'],
                 why: "Paragraph 2 says a flamingo's pink color comes from the food it eats. That sentence tells what most of the passage is about. So it BEST supports the main idea." },
            model: { R: 'The main idea of the passage is that', A: 'the food a flamingo eats is what turns it pink.', D: "A flamingo's pink color comes from the food it eats." } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that a flamingo could lose its pink color?',
            choices: ["In zoos, keepers add color to the birds' food so they stay bright pink.", 'To eat, a flamingo puts its head upside down in the water.', 'Flamingos are tall birds with long, thin legs and bright pink feathers.', 'The water and mud flow out, but the food stays in.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 4 says zoo keepers add color to the food so the birds stay pink. If the birds need help to stay pink, the pink can fade. So a flamingo could lose its color without the right food.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about flamingos?",
            choices: ['The author thinks flamingos are pretty birds with a surprising secret.', 'The author thinks flamingos are ugly birds that are hard to look at.', 'The author thinks flamingos should stop eating shrimp.', 'The author thinks zoos should not keep flamingos.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            why: 'Paragraph 5 says flamingos are some of the prettiest birds on Earth. It says their color comes from a surprising place. The words prettiest and surprising show what the author thinks.' }
        ] },

      // FACTS: When someone is badly hurt or very sick, fast help matters. · The hospital may be far away. ·
      //   In the United States, people call 911, and an ambulance comes. ·
      //   An ambulance carries a bed (stretcher), bandages, oxygen ("air to help people breathe"), and tools to check the heart. ·
      //   The helpers who ride in an ambulance are called EMTs (emergency medical technicians). ·
      //   EMTs start helping as soon as they arrive; they check breathing and how fast the heart is beating. ·
      //   On the way to the hospital, one EMT drives while another cares for the patient in the back. ·
      //   EMTs call (radio) the hospital ahead so the doctors are ready. ·
      //   Drivers who hear the siren and see the flashing lights pull over to the side of the road so the ambulance can get through.
      { title: 'A Hospital on Wheels', genre: 'nonfiction',
        paragraphs: [
          'When someone is badly hurt or very sick, there is no time to waste. But the hospital may be far away. So people call 911, and an ambulance comes to help.',
          "An ambulance is like a small hospital on wheels. It holds a bed, bandages, and air to help people breathe. It also has tools to check a person's heart. The helpers who ride in it are called EMTs.",
          'EMTs start to help as soon as they get there. They check if the person is breathing. They check how fast the heart is beating. On the way to the hospital, one EMT drives while the other cares for the person in the back. They also call ahead, so the doctors are ready.',
          'When drivers hear the siren and see the flashing lights, they pull over to the side of the road. That way, the ambulance can get through fast.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about EMTs is supported by the passage?',
                 choices: ['EMTs work as a team to take care of a person.', 'EMTs wait until they reach the hospital to help.', 'EMTs only help people who have small cuts.', 'EMTs drive slowly so the ride is calm.'],
                 kinds: [null, 'opposite', 'opposite', 'opposite'],
                 notes: [null, 'Paragraph 3 says EMTs start to help as soon as they get there.', null, null],
                 why: 'Paragraph 3 says one EMT drives while the other cares for the person. Each one has a job. They also call the doctors ahead. So EMTs work as a team.' },
            b: { choices: ['On the way to the hospital, one EMT drives while the other cares for the person in the back.', 'An ambulance is like a small hospital on wheels.', 'But the hospital may be far away.', 'They check if the person is breathing.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 3 says one EMT drives while the other cares for the person in the back. They split up the work. That is how a team works.' },
            model: { R: 'One inference about EMTs is that', A: 'they work as a team to take care of a person.', D: 'On the way to the hospital, one EMT drives while the other cares for the person in the back.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['A person who is badly hurt needs help fast, but the hospital may be far.', 'Drivers pull over when they hear the siren of an ambulance.', 'EMTs call the hospital ahead so the doctors will be ready.', 'The EMTs do not know the way to the hospital.'],
            notes: [null, 'Paragraph 4 tells how drivers help. That is part of the fix, not the problem.', 'Paragraph 3 tells one way EMTs help. That is part of the fix, not the problem.', null],
            kinds: [null, null, null, 'noclue'],
            why: 'Paragraph 1 says there is no time to waste when someone is badly hurt. But the hospital may be far away. That is the main problem. The rest tells how EMTs help.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that an ambulance carries what EMTs need to help someone?',
            choices: ['It holds a bed, bandages, and air to help people breathe.', 'When drivers hear the siren and see the flashing lights, they pull over to the side of the road.', 'So people call 911, and an ambulance comes to help.', 'The helpers who ride in it are called EMTs.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 2 says an ambulance holds a bed, bandages, and air to help people breathe. A hurt person may need those things. So EMTs have what they need to help.' }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 · 140–200 words ══════════════ */
    4: [
      // FACTS: Your heart is about the size of your fist. · It sits in your chest, a little to the left of the middle. ·
      //   The heart is a muscle; its job is to pump blood. · Each squeeze pushes blood out through tubes called blood vessels. ·
      //   Blood vessels reach every part of the body. · Blood carries oxygen from the air you breathe; the body's parts need oxygen. ·
      //   One squeeze is a heartbeat. · The heart beats about 100,000 times a day. · It keeps beating day and night, even during sleep. ·
      //   When you run or jump, your heart beats faster, because busy muscles need more oxygen, so the heart sends them more blood. ·
      //   You can feel your heartbeat (pulse) by pressing two fingers gently on the inside of your wrist. ·
      //   Exercise helps keep the heart strong and healthy.
      //   (Word choice, not fact claims: "So get outside and move!", "Your amazing heart will thank you.")
      { title: 'A Pump Inside Your Chest', genre: 'nonfiction',
        paragraphs: [
          'Make a fist with your hand. Your heart is about that size. It sits inside your chest, a little to the left of the middle. Your heart is a muscle, and its important job is to pump blood.',
          'Each time your heart squeezes, it pushes blood out through tubes called blood vessels. These tubes reach every part of your body, from your head to your toes. The blood carries oxygen from the air you breathe, and every part of your body needs oxygen to work.',
          'One squeeze is called a heartbeat. Your heart beats about 100,000 times every day. Day and night, even while you sleep, your heart keeps blood moving through your whole body.',
          'When you run or jump, your heart beats faster. Your busy muscles need more oxygen, so your heart sends them more blood. You can feel your heartbeat if you press two fingers gently on the inside of your wrist.',
          'Exercise also helps keep your heart strong and healthy. So get outside and move! Your amazing heart will thank you.'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Your heart works all the time to move blood through your body.', 'Your heart is about the same size as your fist.', 'Your blood carries oxygen from the air that you breathe in.', 'Your heart beats faster when you run or jump.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 tells how the heart pushes blood. Paragraph 3 says it works day and night. Paragraph 4 tells how it works harder when you play. Most of the passage is about the heart moving blood all the time.' },
            b: { choices: ['Day and night, even while you sleep, your heart keeps blood moving through your whole body.', 'Make a fist with your hand.', 'One squeeze is called a heartbeat.', 'It sits inside your chest, a little to the left of the middle.'],
                 kinds: [null, 'notproof', 'onedetail', 'onedetail'],
                 why: 'Paragraph 3 says your heart keeps blood moving day and night, even while you sleep. That sentence tells about the heart working all the time. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'your heart works all the time to move blood through your body.', D: 'Day and night, even while you sleep, your heart keeps blood moving through your whole body.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that blood travels a long way inside your body?',
            choices: ['These tubes reach every part of your body, from your head to your toes.', 'Each time your heart squeezes, it pushes blood out through tubes called blood vessels.', 'Your heart beats about 100,000 times every day.', 'You can feel your heartbeat if you press two fingers gently on the inside of your wrist.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 2 tells how blood leaves the heart. It does not show how far the blood goes.', null, null],
            why: 'Paragraph 2 says the tubes reach from your head to your toes. That is a long trip. So blood travels a long way inside your body.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about the heart?",
            choices: ['The author thinks the heart is amazing and kids should help keep it strong.', 'The author thinks kids should sit still so their hearts can rest.', 'The author thinks the heart is too small to do much work.', 'The author thinks people should check their heartbeat every single hour of the day.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 5 says to get outside and move.', 'Paragraph 1 says the heart is about the size of a fist. But it does a big job.', null],
            why: 'Paragraph 5 calls your heart amazing. It also says to get outside and move. Those words show the author thinks kids should help keep their hearts strong.' }
        ] },

      // FACTS: Humpback whales are very large and swim across the ocean. · Some scientists study where humpbacks travel and how long they live. ·
      //   Whales spend most of their time underwater, and many humpbacks look alike. ·
      //   When a humpback dives, it often lifts its tail (flukes) out of the water. ·
      //   The underside of a humpback's tail has black and white markings; no two whales have the same pattern (often compared to fingerprints). ·
      //   Scientists on boats photograph the underside of the tail as a whale dives. ·
      //   They compare each photo with thousands of tail photos in catalogs; a matching pattern tells which whale it is. ·
      //   Taking a photo does not touch the whale. · Scientists in many parts of the world share tail photos. ·
      //   Matching photos showed that some humpbacks swim thousands of miles each year (between feeding and breeding waters).
      { title: 'Name That Whale', genre: 'nonfiction',
        paragraphs: [
          'Humpback whales are giant animals that swim across the ocean. Some scientists want to learn where each whale goes and how long it lives. But whales spend most of their time underwater. Many of them look almost the same. So how can a scientist tell one whale from another?',
          "The answer is in the whale's tail. When a humpback dives, it often lifts its huge tail out of the water. The bottom of the tail has black and white marks. No two whales have the same marks, just like no two people have the same fingerprints.",
          'Scientists on boats wait for a whale to dive. Then they snap a photo of its tail. Back on land, they check the photo against thousands of other tail photos. When the marks match, they know which whale they saw.',
          'A camera does not even touch the whale. Scientists in many parts of the world share their tail photos with each other. That is how they found out that some whales swim thousands of miles each year.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about the scientists is supported by the passage?',
                 choices: ['They want to learn about whales without bothering them.', 'They want to catch the whales and keep them in big tanks.', 'They only care about how fast the whales can swim.', 'They think every humpback looks exactly the same.'],
                 kinds: [null, 'opposite', 'noclue', 'opposite'],
                 notes: [null, null, null, 'Paragraph 2 says no two whales have the same marks.'],
                 why: 'Paragraph 3 says the scientists learn from photos of the tails. Paragraph 4 says a camera does not even touch the whale. So the scientists can learn a lot and still leave the whales alone.' },
            b: { choices: ['A camera does not even touch the whale.', 'Some scientists want to learn where each whale goes and how long it lives.', 'Back on land, they check the photo against thousands of other tail photos.', 'Many of them look almost the same.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, 'Paragraph 1 tells what the scientists want to learn. It does not show that they leave the whales alone.', null, null],
                 why: 'Paragraph 4 says a camera does not even touch the whale. The scientists learn from photos. So they do not bother the whales.' },
            model: { R: 'One inference about the scientists is that', A: 'they want to learn about whales without bothering them.', D: 'A camera does not even touch the whale.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['It is hard to tell one humpback whale from another.', 'Scientists check tail photos against thousands of others.', 'A humpback often lifts its tail when it dives.', 'Humpback whales swim too fast for any boat to follow.'],
            notes: [null, 'Paragraph 3 tells how the scientists solve the problem. The fix is not the problem.', 'Paragraph 2 tells what a whale does. That is a detail, not the problem.', null],
            kinds: [null, null, null, 'noclue'],
            why: 'Paragraph 1 says whales spend most of their time underwater. Many of them look almost the same. So it is hard to tell them apart. That is the main problem. The rest tells how scientists solve it.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that a tail photo works like a name tag?',
            choices: ['When the marks match, they know which whale they saw.', 'Then they snap a photo of its tail.', 'The bottom of the tail has black and white marks.', 'Humpback whales are giant animals that swim across the ocean.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            why: 'Paragraph 3 says when the marks match, the scientists know which whale they saw. A name tag tells you who someone is. So a tail photo works like a name tag.' }
        ] }
    ],

    /* ═══ LEVEL 5 · FK 4.0 · 170–240 words ══════════════ */
    5: [
      // FACTS: An iceberg is a large piece of ice floating in the sea. · Most icebergs start as part of a glacier (or an ice shelf). ·
      //   A glacier is a huge mass (sheet) of ice made from snow that piled up and pressed down over many years. ·
      //   Where a glacier reaches the ocean, chunks break off its edge and fall into the water (calving); each floating chunk is an iceberg. ·
      //   Only a small part of an iceberg shows; about nine-tenths (about 90 percent) is below the water. ·
      //   The saying "the tip of the iceberg" comes from this and means there is much more than what you can see. ·
      //   Hidden ice makes icebergs dangerous to ships. · In 1912, the ship Titanic struck an iceberg and sank. ·
      //   Today ships use radar to spot icebergs, and airplanes fly out to watch for them (the International Ice Patrol). ·
      //   Icebergs drift with the wind and ocean currents; some float for years before they melt. ·
      //   As an iceberg melts, it can become top-heavy and roll over.
      //   (Word choice, not fact claims: "beautiful to look at", "wise sailors give them plenty of room")
      { title: 'Giants Floating in the Sea', genre: 'nonfiction',
        paragraphs: [
          'An iceberg is a giant piece of ice that floats in the sea. Most icebergs start out as part of a glacier. A glacier is a huge sheet of ice made from snow that piled up and pressed down for many years. When a glacier reaches the ocean, chunks break off its edge and crash into the water. Each chunk that floats away is a new iceberg.',
          'What you see of an iceberg is only a small part of it. About nine-tenths of the ice hides below the water. That is where the saying "the tip of the iceberg" comes from. It means there is much more to something than what you can see.',
          'This hidden ice makes icebergs dangerous for ships. In 1912, a huge ship called the Titanic struck one and sank. Today, ships use radar to spot icebergs, and airplanes fly out to watch for them.',
          'Icebergs drift with the wind and the ocean currents. Some float for years before they melt. As one melts, it can get top-heavy and suddenly roll over. Icebergs are beautiful to look at, but wise sailors give them plenty of room.'
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ['Icebergs are bigger than they look, and that makes them dangerous.', 'In 1912, a huge ship called the Titanic hit an iceberg and sank.', 'Most icebergs start out as part of a huge glacier that reaches the ocean.', 'An iceberg can get top-heavy as it melts and suddenly roll over.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: 'Paragraph 2 says most of the ice hides below the water. Paragraph 3 says this hidden ice is a danger to ships. Most of the passage is about that. Icebergs are bigger than they look, and that makes them dangerous.' },
            b: { choices: ['This hidden ice makes icebergs dangerous for ships.', 'An iceberg is a giant piece of ice that floats in the sea.', 'Each chunk that floats away is a new iceberg.', 'Today, ships use radar to spot icebergs, and airplanes fly out to watch for them.'],
                 kinds: [null, 'notproof', 'onedetail', 'onedetail'],
                 notes: [null, 'Paragraph 1 tells what an iceberg is. It does not tell why icebergs are dangerous.', null, null],
                 why: 'Paragraph 3 says the hidden ice is a danger to ships. That one sentence puts both big ideas together. So it BEST supports the main idea.' },
            model: { R: 'The main idea of the passage is that', A: 'icebergs are bigger than they look, and that makes them dangerous.', D: 'This hidden ice makes icebergs dangerous for ships.' } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that an iceberg can travel far from where it started?',
            choices: ['Icebergs drift with the wind and the ocean currents.', 'When a glacier reaches the ocean, chunks break off its edge and crash into the water.', 'About nine-tenths of the ice hides below the water.', 'That is where the saying "the tip of the iceberg" comes from.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 1 tells how an iceberg starts. It does not show the iceberg moving.', null, null],
            why: 'Paragraph 4 says icebergs drift with the wind and the sea. The wind and the water keep pushing them. So they can go far from where they started.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about icebergs?",
            choices: ['The author thinks icebergs are beautiful but ships should keep away.', 'The author thinks icebergs are small and do not cause trouble for ships.', 'The author thinks ships should never sail in cold water.', 'The author thinks icebergs are just ugly chunks of floating ice.'],
            kinds: [null, 'opposite', 'toofar', 'opposite'],
            why: 'Paragraph 4 says icebergs are beautiful to look at. It also says wise sailors give them lots of room. Those words show what the author thinks.' }
        ] },

      // FACTS: People dreamed of flying for thousands of years. ·
      //   Before 1903, no one had built an airplane with an engine that a pilot could control (steer). ·
      //   Wilbur and Orville Wright were brothers from Dayton, Ohio. · They owned a bicycle shop where they built and repaired bicycles. ·
      //   They watched birds and saw that birds tip (twist) their wings to turn. ·
      //   They built gliders (aircraft with no engine) and tested them on the windy sand hills near Kitty Hawk, North Carolina. ·
      //   Their first gliders did not fly as well as they hoped. · Back home, they built a small wind tunnel to test wing shapes. ·
      //   They tested about two hundred small model wings. · Their next glider (1902) worked well. ·
      //   They added an engine and two propellers. · On December 17, 1903, Orville flew first, lying on the lower wing. ·
      //   That first flight lasted 12 seconds and went about 120 feet. · Later that day, Wilbur flew for 59 seconds (almost a minute). ·
      //   Today, airplanes carry people across oceans in less than a day.
      { title: 'Twelve Seconds Over the Sand', genre: 'nonfiction',
        paragraphs: [
          'For thousands of years, people dreamed of flying like birds. Yet no one had built an airplane with an engine that a person could steer. Two brothers from Dayton, Ohio, named Wilbur and Orville Wright, decided to try.',
          'The brothers owned a bike shop, where they built and fixed bikes. They spent hours watching birds and saw that birds tip their wings to turn. Then the brothers built gliders, which are planes with no engines. They tested them on the windy sand hills near Kitty Hawk, North Carolina.',
          'When their first gliders did not fly well, the brothers went home and built a small wind tunnel to test wing shapes. They tested about two hundred tiny wings. Then they built a better glider, and it worked.',
          'Next, they added an engine and two propellers. On December 17, 1903, Orville lay on the lower wing as the plane rose into the air. The flight lasted only twelve seconds and went about 120 feet. Later that day, Wilbur flew for almost a whole minute.',
          'Those short flights changed the world. Today, airplanes carry people across whole oceans in less than a day.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about the Wright brothers is supported by the passage?',
                 choices: ['They kept working to fix their problems instead of quitting.', 'They gave up on flying after their first gliders failed.', 'They cared more about fixing bikes than about building planes.', 'They thought flying was too dangerous to ever try.'],
                 kinds: [null, 'opposite', null, 'opposite'],
                 notes: [null, null, 'The passage tells much more about their planes than their bikes. No clue shows they cared more about bikes.', null],
                 why: 'Paragraph 3 says their first gliders did not fly well. So they built a wind tunnel and tested about two hundred tiny wings. Then they built a better glider. So they kept working to fix their problems.' },
            b: { choices: ['When their first gliders did not fly well, the brothers went home and built a small wind tunnel to test wing shapes.', 'The brothers owned a bike shop, where they built and fixed bikes.', 'The flight lasted only twelve seconds and went about 120 feet.', 'Two brothers from Dayton, Ohio, named Wilbur and Orville Wright, decided to try.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 notes: [null, null, null, 'Paragraph 1 tells how the brothers started. It does not show what they did when things went wrong.'],
                 why: 'Paragraph 3 says their first gliders did not fly well. The brothers did not stop. They built a wind tunnel to test wing shapes. That shows they kept working to fix the problem.' },
            model: { R: 'One inference about the Wright brothers is that', A: 'they kept working to fix their problems instead of quitting.', D: 'When their first gliders did not fly well, the brothers went home and built a small wind tunnel to test wing shapes.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['No one had built an airplane with an engine that a person could steer.', 'The brothers tested about two hundred tiny wings in their small wind tunnel.', 'Orville lay on the lower wing as the plane rose into the air.', 'The brothers did not have enough money to open their own bike shop.'],
            notes: [null, 'Paragraph 3 tells how the brothers worked on the problem. The fix is not the problem.', 'Paragraph 4 tells about the first flight. That is a detail, not the problem.', 'Paragraph 2 says the brothers owned a bike shop.'],
            kinds: [null, null, null, 'opposite'],
            why: 'Paragraph 1 says people dreamed of flying. But no one had built an airplane with an engine that a person could steer. That is the main problem. The rest tells how the brothers solved it.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that the brothers learned from nature?',
            choices: ['They spent hours watching birds and saw that birds tip their wings to turn.', 'For thousands of years, people dreamed of flying like birds.', 'Next, they added an engine and two propellers.', 'Those short flights changed the world.'],
            kinds: [null, 'wrongwho', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 1 is about people long ago, not the brothers. It does not show the brothers learning.', null, null],
            why: 'Paragraph 2 says the brothers watched birds and saw how birds turn. Birds are part of nature. So the brothers learned from nature.' }
        ] }
    ],

    /* ═══ LEVEL 6 · FK 4.5 · 200–280 words ══════════════ */
    6: [
      // FACTS: The top of a tree stump shows circles inside circles, called tree rings. ·
      //   Each year, a tree grows a new layer of wood just under its bark. ·
      //   In spring, a tree grows quickly and makes wide, light-colored wood (earlywood); later in summer growth slows and the wood is
      //   thinner and darker (latewood). · One light band and one dark band together make one yearly ring. ·
      //   Counting the rings tells how old the tree is. · In a year with plenty of rain, a tree grows more and makes a wide ring;
      //   in a dry year, the ring is thin. · A forest fire can leave a dark scar on the rings. ·
      //   Scientists study tree rings to learn about the weather (climate) long ago. ·
      //   They do not have to cut the tree down: a hollow drill (increment borer) pulls out a thin rod (core) of wood about as wide as a
      //   drinking straw, and the tree keeps growing. ·
      //   Some of the oldest living trees on Earth are bristlecone pines in California; a few are more than 4,000 years old.
      //   (Word choice, not fact claims: "Imagine all the history…", "nature's most wonderful record keepers")
      { title: 'Reading the Rings of a Tree', genre: 'nonfiction',
        paragraphs: [
          "If you look at the top of a tree stump, you will see circles inside circles. These circles are called tree rings, and they hold clues about the tree's whole life.",
          'Every year, a tree grows a new layer of wood just underneath its bark. In spring, the tree grows quickly and makes wide, light-colored wood. Later in the summer, the growing slows down, and the new wood is thinner and darker. Together, the light band and the dark band make one ring. So if you count the rings on a stump, you can discover how old the tree was.',
          "Rings can tell more than a tree's age. In a year with plenty of rain, a tree grows a lot and makes a wide ring. In a dry year, the tree grows only a little, and the ring is thin. A forest fire can even leave a dark scar on the rings.",
          'Scientists study tree rings to learn about the weather long ago. They do not have to cut a tree down to do it. Instead, they use a hollow drill to pull out a thin rod of wood about as wide as a drinking straw, and the tree keeps on growing.',
          "Some of the oldest living trees on Earth are bristlecone pines in California, and a few of them are more than four thousand years old. Imagine all the history hidden inside their trunks! Trees are some of nature's most wonderful record keepers."
        ],
        items: [
          { id: 'N01', type: 'ebsr', skill: ['Main idea', 'Supporting detail'],
            a: { q: 'What is the main idea of the passage?',
                 choices: ["Tree rings hold clues about a tree's age and the world around it.", 'Some bristlecone pines in California are more than four thousand years old.', 'A forest fire can leave a dark scar on the rings of a tree.', 'Each year, a tree grows a new layer of wood under its bark.'],
                 kinds: [null, 'onedetail', 'onedetail', 'onedetail'],
                 why: "Paragraph 2 tells how rings show a tree's age. Paragraphs 3 and 4 tell what else rings can show. Most of the passage is about the clues inside tree rings. That is the main idea." },
            b: { choices: ["These circles are called tree rings, and they hold clues about the tree's whole life.", 'If you look at the top of a tree stump, you will see circles inside circles.', 'Together, the light band and the dark band make one ring.', 'They do not have to cut a tree down to do it.'],
                 kinds: [null, 'notproof', 'onedetail', 'notproof'],
                 notes: [null, 'Paragraph 1 starts by telling what rings look like. It does not tell what rings can teach us.', null, null],
                 why: "Paragraph 1 says tree rings hold clues about the tree's whole life. The rest of the passage tells what those clues are. So it BEST supports the main idea." },
            model: { R: 'The main idea of the passage is that', A: "tree rings hold clues about a tree's age and the world around it.", D: "These circles are called tree rings, and they hold clues about the tree's whole life." } },
          { id: 'N02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST supports the idea that scientists can tell which years long ago were dry?',
            choices: ['In a dry year, the tree grows only a little, and the ring is thin.', 'Every year, a tree grows a new layer of wood just underneath its bark.', 'Instead, they use a hollow drill to pull out a thin rod of wood about as wide as a drinking straw, and the tree keeps on growing.', 'So if you count the rings on a stump, you can discover how old the tree was.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, null, 'Paragraph 4 tells how scientists get the wood. It does not show what a dry year looks like.', 'Paragraph 2 tells how to find the age of a tree. It does not show a dry year.'],
            why: 'Paragraph 3 says a tree makes a thin ring in a dry year. The ring stays in the wood for as long as the tree lives. So scientists can look for thin rings and tell which years were dry.' },
          { id: 'N03', type: 'mc', skill: "Author's point of view",
            q: "What is the author's point of view about trees?",
            choices: ['The author thinks trees are wonderful keepers of the past.', 'The author thinks old trees should be cut down so we can count their rings.', 'The author thinks tree rings are too hard for anyone to understand.', 'The author thinks bristlecone pines are the only trees that matter.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 4 says scientists do not have to cut a tree down.', null, null],
            why: "Paragraph 5 calls trees some of nature's most wonderful record keepers. A record keeper saves facts about the past. The word wonderful shows what the author thinks." }
        ] },

      // FACTS: Louis Braille was born in France in 1809. ·
      //   At age three, he hurt one eye with a sharp tool (an awl) in his father's workshop. ·
      //   An infection spread to his other eye; by about age five he was completely blind. ·
      //   At age ten, he went to a school for blind children in Paris. · The school had only a few books. ·
      //   Those books were printed with large raised letters that students traced with their fingers; they were huge, heavy,
      //   and very slow to read. · The school tried a raised-dot code made by Charles Barbier, a code meant for blind readers
      //   (Braille, 1829: "invented by Mr. Barbier especially for the blind"). The popular "made for soldiers in the dark"
      //   story is a 1950s myth (Perkins School for the Blind archives, Campsie 2025), so it is left out. ·
      //   That code was hard to use: it needed many dots (up to twelve) for each sound, and it could not show spelling or punctuation. ·
      //   Louis spent the next few years making a simpler code using six dots, arranged like the six on a domino (two columns of three). ·
      //   Each letter fits under one fingertip, so a reader can feel a whole letter at once. ·
      //   He finished his alphabet by about age fifteen (1824). · He later became a teacher at the same school. ·
      //   Today his code is called braille and is used all over the world, including on books, signs, and elevator buttons.
      { title: 'Six Little Dots', genre: 'nonfiction',
        paragraphs: [
          "Louis Braille was born in France in 1809. When he was three, he hurt one eye with a sharp tool in his father's workshop. An infection soon spread to his other eye, and by age five he could not see at all.",
          'At ten, Louis went to a school for blind children in Paris. The school had only a few books for its students. Each book was printed with giant raised letters that students traced with their fingers. The books were huge and heavy, and reading a single page took a very long time.',
          'One day, the school began to try a new code made by a man named Charles Barbier. It used raised dots that blind people could feel with their fingers. Louis was excited, but the code was hard to use. It needed too many dots for each sound, and it had no way to show spelling or punctuation.',
          'Louis spent the next few years working on a simpler code. He used just six dots, arranged like the six on a domino. Each letter could fit under one fingertip, so a reader could feel a whole letter at once. By the time he was fifteen, Louis had finished his new alphabet.',
          'Louis later became a teacher at the same school. Today, his code is called braille, and people all over the world use it. You can find braille on books, signs, and elevator buttons.'
        ],
        items: [
          { id: 'N04', type: 'ebsr', skill: ['Inference about a person', 'Supporting detail'],
            a: { q: 'Which inference about Louis Braille is supported by the passage?',
                 choices: ['He wanted to make reading easier for blind people.', 'He liked the giant raised letters in the old books.', 'He wanted to keep his new code a secret from others.', 'He gave up on reading after he lost his sight.'],
                 kinds: [null, null, 'opposite', 'opposite'],
                 notes: [null, 'No clue in the passage shows that Louis liked the giant letters.', 'Paragraph 5 says people all over the world use his code.', null],
                 why: 'Paragraph 3 says Louis was excited about a code of dots. Paragraph 4 says he spent years working on a simpler code. Simpler means easier to use. So Louis wanted to make reading easier for blind people.' },
            b: { choices: ['Louis spent the next few years working on a simpler code.', 'At ten, Louis went to a school for blind children in Paris.', 'One day, the school began to try a new code made by a man named Charles Barbier.', 'Louis Braille was born in France in 1809.'],
                 kinds: [null, 'notproof', 'notproof', 'notproof'],
                 why: 'Paragraph 4 says Louis spent years working on a simpler code. He wanted a code that was easier to use. That BEST shows he wanted to make reading easier.' },
            model: { R: 'One inference about Louis Braille is that', A: 'he wanted to make reading easier for blind people.', D: 'Louis spent the next few years working on a simpler code.' } },
          { id: 'N05', type: 'mc', skill: 'Problem',
            q: 'What is the main problem in the passage?',
            choices: ['Blind students had only a few books, and those books were slow to read.', 'Louis made a new code that used just six dots, like the six on a domino.', "Mr. Barbier's code needed too many dots for each sound.", 'Today, people all over the world use braille.'],
            notes: [null, 'Paragraph 4 tells how Louis fixed the problem. The fix is not the problem.', 'Paragraph 3 tells about one code that did not work well. That is one detail, not the main problem.', 'Paragraph 5 tells how people use braille today. That is not the problem.'],
            why: 'Paragraph 2 says the school had only a few books. Reading one page took a very long time. That is the main problem. The rest tells how Louis solved it.' },
          { id: 'N06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that braille is faster to read than the old books?',
            choices: ['Each letter could fit under one fingertip, so a reader could feel a whole letter at once.', 'Each book was printed with giant raised letters that students traced with their fingers.', 'You can find braille on books, signs, and elevator buttons.', 'Louis later became a teacher at the same school.'],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null, 'Paragraph 2 tells about the old books. It does not tell about braille.', null, null],
            why: 'Paragraph 4 says a reader could feel a whole letter at once. In the old books, students had to trace giant letters. Feeling a letter at once is faster than tracing it. So braille is faster to read.' }
        ] }
    ]
  }
};
