/* Nonfiction Inferences, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-nonfiction.js; try 2 gets these. Same question slots as version 1. */
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
    ]
  }
};
