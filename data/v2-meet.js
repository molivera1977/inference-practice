/* Meet Inference, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-meet.js; try 2 gets these. Same question slots as version 1. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.meet = {
  2: {
    1: [
      { title: 'A Puddle on the Mat', genre: 'story',
        paragraphs: [
          'Rosa walked home from school and pushed open the front door. Water dripped from the tip of her red umbrella. She shook it hard. Then she left the umbrella open by the door.',
          'Rosa sat down on the mat and pulled off her shoes. Her socks were soaked all the way through. A small puddle grew on the mat under her feet.',
          'Mom came in and handed Rosa a big towel. Rosa\'s teeth chattered while she dried her toes.',
          'Then Rosa wrapped a fuzzy blanket around her. She curled up on the couch and looked out at the dark gray sky.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Rosa?',
            choices: ['Rosa walked home in the rain.', 'Rosa had a sunny walk home from school.', 'Rosa jumped into a pool on her way home.', 'Rosa wants to go back out and play.'],
            notes: [null, 'Paragraph 4 says the sky was dark and gray. That is not a sunny day.', 'Too far. The passage gives no clue about a pool.', 'Paragraph 4 says Rosa curled up on the couch. She is not going back out to play.'],
            why: 'Paragraph 2 says Rosa\'s socks were soaked. Paragraph 4 says the sky was dark and gray. Your socks get wet when you walk in the rain. So Rosa walked home in the rain.',
            chart: { facts: 'Rosa\'s socks are soaked, and the sky is dark and gray.', know: 'Your socks get wet when you walk in the rain.', conclusion: 'Rosa walked home in the rain.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Rosa walked home in the rain?',
            choices: ['Water dripped from the tip of her red umbrella.', 'Rosa walked home from school and pushed open the front door.', 'Rosa sat down on the mat and pulled off her shoes.', 'Then Rosa wrapped a fuzzy blanket around her.'],
            notes: [null, 'This tells how Rosa got home. It does not show what the weather was like.', 'Lots of people take off their shoes at the door. This does not prove that it rained.', 'This tells what Rosa did with a blanket. It does not prove that she walked in the rain.'],
            why: 'Paragraph 1 says water dripped from Rosa\'s umbrella. An umbrella only drips when it gets wet. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Rosa, not a fact from the passage?',
            choices: ['Rosa feels cold after her walk home.', 'Rosa left her umbrella open by the door.', 'Rosa took off her shoes on the mat.', 'Rosa curled up on the couch with a blanket.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says Rosa is cold. But paragraph 3 says her teeth chattered. Paragraph 4 says she wrapped a blanket around her. Teeth chatter when you are cold. So Rosa feels cold.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Rosa walked home in the rain?',
            choices: ['People use umbrellas to stay dry in the rain.', 'Most kids walk home or ride a bus after school.', 'A blanket can feel soft and fuzzy on your skin.', 'Shoes come in lots of sizes and colors.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 1 says water dripped from Rosa\'s umbrella. We know people use umbrellas to stay dry in the rain. That helps us infer that Rosa walked home in the rain.' }
        ] },
      { title: 'A Card Under the Placemat', genre: 'story',
        paragraphs: [
          'Ben sat at the kitchen table with markers and a folded paper card. He drew a big cake with tall candles on the front.',
          'Then Ben heard Grandma\'s slow steps in the hall. He slid the card under his placemat. Grandma walked in and kissed the top of his head. "What are you up to, my sweet boy?" she asked.',
          'Ben grinned and said, "Nothing!" Grandma laughed and went out to water her flowers. Then Ben wrote inside the card, "To Grandma, with love from Ben."',
          'Later, Dad came home with a white bakery box, winked at Ben, and hid the box on a high shelf.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Ben?',
            choices: ['Ben is making a surprise for Grandma\'s birthday.', 'Ben is making a thank-you card for his teacher.', 'Ben is doing his homework at the kitchen table.', 'Ben is getting ready for his own birthday party.'],
            notes: [null, 'Paragraph 3 says the card is for Grandma. It is not for his teacher.', 'Paragraph 1 says Ben drew a cake on a card. That is not homework.', 'The card is for Grandma. The passage gives no clue that it is Ben\'s birthday.'],
            why: 'Paragraph 1 says Ben drew a cake with tall candles. Paragraph 3 says the card is for Grandma. Paragraph 4 says Dad hid a bakery box. People have cake with candles on a birthday. So Ben is making a surprise for Grandma\'s birthday.',
            chart: { facts: 'Ben makes Grandma a card with a cake, and Dad hides a bakery box.', know: 'People have cake with candles on a birthday.', conclusion: 'Ben is making a surprise for Grandma\'s birthday.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Ben wants to keep the card a secret?',
            choices: ['He slid the card under his placemat.', 'Ben sat at the kitchen table with markers and a folded paper card.', 'Grandma laughed and went out to water her flowers.', 'Later, Dad came home with a white bakery box, winked at Ben, and hid the box on a high shelf.'],
            notes: [null, 'This tells where Ben sat. It does not show that he wants a secret.', 'This tells what Grandma did. It does not show that Ben is hiding the card.', 'This sentence is about Dad and the box. It does not show what Ben did with the card.'],
            why: 'Paragraph 2 says Ben heard Grandma coming. Then he put the card under his placemat. Now Grandma cannot see it. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Grandma, not a fact from the passage?',
            choices: ['Grandma loves Ben very much.', 'Grandma kissed the top of Ben\'s head.', 'Grandma went out to water her flowers.', 'Grandma asked Ben what he was up to.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Grandma feels about Ben. But paragraph 2 says she kissed his head. She called him "my sweet boy." People do that for someone they love. So Grandma loves Ben.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Ben wants to keep the card a secret?',
            choices: ['People hide what they do not want others to see.', 'Markers can make drawings in lots of bright colors.', 'A placemat helps keep the kitchen table clean.', 'Lots of grandmas like to grow pretty flowers.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 2 says Ben put the card under his placemat when Grandma came in. We know people hide what they do not want others to see. That helps us infer that Ben wants to keep the card a secret.' }
        ] }
    ]
  }
};
