/* Put It Together, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-together.js; try 2 gets these. Same question slots as version 1. */
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
    ]
  }
};
