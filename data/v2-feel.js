/* How Does the Character Feel?, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-feel.js; try 2 gets these. Same question slots as version 1. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.feel = {
  2: {
    1: [
      { title: 'Gina\'s Old Blue Bike', genre: 'story',
        paragraphs: [
          'Gina sat on her old blue bike in the driveway. Her knees bumped the handlebars each time she pushed the pedals.',
          'Gina got off and leaned the bike on the fence. Her eyes filled with tears. She patted the seat one last time.',
          'Next door, a little boy named Otto sat on his front steps. Otto did not have a bike of his own. Gina rolled her bike over and gave it to Otto.',
          'Then she put her old helmet on his head and buckled it. Otto rode the bike up and down the sidewalk. Gina laughed and cheered for him.'
        ],
        items: [
          { id: 'F01', type: 'mc', skill: 'Character feelings',
            q: 'How does Gina feel when she leans the bike on the fence?',
            choices: ['sad that her bike is too small', 'glad to get rid of her old bike', 'angry at Otto next door', 'scared that she will fall off'],
            notes: [null,
              'Paragraph 2 says Gina\'s eyes filled with tears. She is not glad.',
              'The passage gives no clue that Gina is angry at Otto.',
              'Gina does not wobble or fall. The passage gives no clue that she is scared.'],
            why: 'Paragraph 1 says Gina\'s knees bump the handlebars. Paragraph 2 says her eyes fill with tears. Tears show that someone is sad. So Gina feels sad that her bike is too small.',
            chart: { facts: 'Gina\'s knees bump the handlebars, and her eyes fill with tears.', know: 'People cry when they are sad.', conclusion: 'Gina feels sad that her bike is too small.' } },
          { id: 'F02', type: 'mc', skill: 'Character traits',
            q: 'Which word BEST describes Gina?',
            choices: ['generous', 'selfish', 'bossy', 'rude'],
            notes: [null,
              'Paragraph 4 says Gina shares her helmet with Otto. That is not selfish.',
              'Gina does not tell Otto what to do. The passage gives no clue that she is bossy.',
              'Gina does not say or do anything mean. The passage gives no clue that she is rude.'],
            why: 'Generous means you like to give to others. Paragraph 4 says Gina puts her old helmet on Otto\'s head. She gives Otto her helmet. So Gina is generous.' },
          { id: 'F03', type: 'mc', skill: 'Feeling change',
            q: 'How do Gina\'s feelings change from the beginning to the end of the passage?',
            choices: ['sad at first, then happy', 'happy at first, then sad', 'sad at first, then angry', 'scared at first, then happy'],
            notes: [null,
              'This is backwards. Gina is sad at the start and happy at the end.',
              'Paragraph 4 says Gina laughed and cheered. That is not angry.',
              'Gina does not shake or hide at the start. Her eyes fill with tears. That is not scared.'],
            why: 'At the start, Gina\'s eyes fill with tears. She is sad. At the end, she laughs and cheers for Otto. She is happy.' },
          { id: 'F04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Gina is generous?',
            choices: ['Gina rolled her bike over and gave it to Otto.', 'Her knees bumped the handlebars each time she pushed the pedals.', 'Her eyes filled with tears.', 'Otto did not have a bike of his own.'],
            notes: [null,
              'This sentence shows the bike is too small. It does not show Gina is generous.',
              'This sentence shows Gina is sad. It does not show she is generous.',
              'This sentence is about Otto. It does not show what Gina did.'],
            why: 'Otto has no bike. Paragraph 3 says Gina gave her bike to him. She gave away something she loved. That sentence BEST shows she is generous.' }
        ] },

      { title: 'The Hundred-Piece Puzzle', genre: 'story',
        paragraphs: [
          'On a rainy Saturday, Luis and Mia dumped a hundred-piece puzzle onto the carpet.',
          'Luis tried to push two pieces together, but they would not fit. He groaned and pushed the pile away. "This puzzle is too hard!" he said, and he flopped onto the couch. Mia kept sorting the pieces with flat sides to make the border.',
          'When a piece did not fit, Mia turned it around and tried again.',
          'After lunch, Mia found the last piece under the couch. She smiled and handed it to Luis. Luis snapped it into place and jumped up. "We did it!" he cheered, and he gave Mia a high five.'
        ],
        items: [
          { id: 'F05', type: 'mc', skill: 'Comparing characters',
            q: 'How are Luis and Mia different?',
            choices: ['Luis gives up on the puzzle, but Mia keeps working.', 'Mia gives up on the puzzle, but Luis keeps working.', 'Luis does the puzzle, but Mia goes out to play.', 'Mia is mean to Luis, but Luis is nice to Mia.'],
            notes: [null,
              'This is backwards. Paragraph 2 says Luis is the one who flops onto the couch.',
              'Paragraph 2 says Mia sorts the puzzle pieces. She does not go out to play.',
              'The passage gives no clue that Mia is mean. Paragraph 4 says she hands Luis the last piece.'],
            why: 'Paragraph 2 says Luis pushes the pile away and flops onto the couch. But Mia keeps sorting the pieces. So Luis gives up, but Mia keeps working.' },
          { id: 'F06', type: 'mc', skill: 'Character feelings',
            q: 'How does Luis feel when he snaps in the last piece?',
            choices: ['happy that the puzzle is done', 'upset that the pieces will not fit', 'mad at Mia for finding the piece', 'bored with the big pile of pieces'],
            notes: [null,
              'Luis is upset earlier, in paragraph 2. This question asks about the last piece.',
              'Paragraph 4 says Luis gives Mia a high five. He is not mad at her.',
              'Paragraph 4 says Luis jumps up and cheers. That is not bored.'],
            why: 'Paragraph 4 says Luis jumps up. He cheers, "We did it!" Kids do that when something good happens. So Luis feels happy that the puzzle is done.',
            chart: { facts: 'Luis jumps up, cheers, and gives Mia a high five.', know: 'Kids cheer and jump up when they finish something.', conclusion: 'Luis feels happy that the puzzle is done.' } },
          { id: 'F07', type: 'mc', skill: 'Character traits',
            q: 'Which word BEST describes Mia?',
            choices: ['determined', 'lazy', 'grumpy', 'bossy'],
            notes: [null,
              'Paragraph 2 says Mia sorts the pieces to make the border. That is not lazy.',
              'Luis is the one who groans. Mia does not groan or stomp.',
              'Mia does not tell Luis what to do. The passage gives no clue that she is bossy.'],
            why: 'Determined means you keep trying and do not give up. Paragraph 2 says Luis quits. But Mia keeps sorting the pieces to make the border. So Mia is determined.' },
          { id: 'F08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Mia is determined?',
            choices: ['When a piece did not fit, Mia turned it around and tried again.', 'He groaned and pushed the pile away.', 'She smiled and handed it to Luis.', 'On a rainy Saturday, Luis and Mia dumped a hundred-piece puzzle onto the carpet.'],
            notes: [null,
              'This sentence is about Luis, not Mia. It shows Luis is upset.',
              'This sentence shows Mia is nice to Luis. It does not show she keeps trying.',
              'This sentence tells what both kids did. It does not show Mia is determined.'],
            why: 'Determined people keep trying. Paragraph 3 says that when a piece did not fit, Mia turned it around and tried again. That sentence BEST shows she is determined.' }
        ] }
    ]
  }
};
