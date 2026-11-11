/* Draw a Conclusion, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-conclude.js; try 2 gets these. Same question slots as version 1. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.conclude = {
  2: {
    1: [
      { title: 'Jude at the Town Pool', genre: 'story',
        paragraphs: [
          `On the first hot day of summer, Jude and Dad went to the town pool. Jude's friends were already splashing in the water and calling his name.`,
          'Dad held out a bottle of sunscreen, but Jude hopped from foot to foot. "Not now, Dad!" he said, and he ran past him.',
          'Jude swam and played in the bright sun all afternoon. That night, his shoulders were as pink as bubble gum. When he pulled on his pajama top, he cried, "Ouch!"',
          `The next morning, Jude's friends called and asked him to swim again. Jude looked at his sore shoulders. Then he looked at the sunscreen bottle on the shelf.`
        ],
        items: [
          { id: 'D01', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Jude?',
            choices: ['Jude got a sunburn at the pool.', 'Jude does not know how to swim.', 'Jude hurt his shoulders on the slide.', 'Jude is mad at his friends.'],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null, 'Paragraph 3 says Jude swam and played all afternoon. He knows how to swim.', 'The passage does not tell about a slide. No clue says Jude got hurt on one.', null],
            chart: { facts: 'Jude played in the bright sun all afternoon, and that night his shoulders were pink and sore.', know: 'Too much hot sun can make skin pink and sore.', conclusion: 'Jude got a sunburn at the pool.' },
            why: 'Paragraph 3 says Jude played in the bright sun all afternoon. That night, his shoulders were pink, and his top made him say ouch. Too much hot sun makes skin pink and sore. So Jude got a sunburn at the pool.' },
          { id: 'D02', type: 'mc', skill: 'Predicting',
            q: 'What will Jude most likely do next?',
            choices: ['He will put on sunscreen before he swims.', 'He will run past Dad to the pool again.', 'He will never go to the pool again.', 'He will give the sunscreen to his friends.'],
            kinds: [null, 'opposite', 'toofar', 'noclue'],
            notes: [null, 'Paragraph 4 says Jude looked at his sore shoulders. He does not want them to hurt again.', 'Too far. His friends asked him to swim again. Nothing says he will stop going.', null],
            why: 'Paragraph 4 says Jude looked at his sore shoulders. Then he looked at the sunscreen bottle. So Jude will most likely put on sunscreen before he swims.' },
          { id: 'D03', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Jude run past Dad?',
            choices: ['He wants to jump in with his friends.', 'He is afraid of the water.', 'Dad told him to go fast.', 'He wants to sit in the shade by the fence.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 3 says Jude swam all afternoon. He is not afraid of the water.', 'Paragraph 2 says Dad held out the sunscreen. Dad wanted Jude to stop, not go fast.', 'Paragraph 3 says Jude played in the bright sun. He did not sit in the shade.'],
            why: `The passage does not say why. Paragraph 1 says Jude's friends were splashing and calling his name. Paragraph 2 says Jude hopped from foot to foot. So Jude wants to jump in with his friends.` },
          { id: 'D04', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Jude learns in the passage?',
            choices: ['It is important to protect your skin from the sun.', 'It is important to swim with your friends.', 'It is important to get into the pool as fast as you can.', 'It is important to play in the sun all day.'],
            kinds: [null, 'onedetail', 'opposite', 'opposite'],
            notes: [null, 'Jude swims with his friends in paragraph 3. That is one detail, not the lesson.', 'Jude ran to the pool fast, and his shoulders got sore. The story shows the opposite.', 'Jude played in the sun all day, and it hurt. The story shows the opposite.'],
            why: 'In paragraph 2, Jude skips the sunscreen. In paragraph 3, his shoulders turn pink and hurt. In paragraph 4, he looks at the sunscreen bottle. Jude learns to protect his skin from the sun.' }
        ] },

      { title: `Ella's Crayon Box`, genre: 'story',
        paragraphs: [
          `Mrs. Bell came in with a girl in a yellow coat. "Class, please say hello to Pia," she said. Pia gave a tiny wave and sat at the desk next to Ella.`,
          'During art, everyone took out crayons and began to draw. Pia sat with her hands in her lap and looked at the floor. The inside of her desk was empty.',
          `Ella looked at Pia's blank paper. Then Ella slid her box of crayons over to Pia's desk. "We can share," Ella said.`,
          `Pia smiled and picked up a green crayon. The girls drew and talked until the bell rang for lunch. Then Pia waited beside Ella's chair.`
        ],
        items: [
          { id: 'D05', type: 'mc', skill: 'Drawing conclusions',
            q: 'What conclusion can be drawn about Pia?',
            choices: ['Pia is new to the class.', `Pia is Ella's sister.`, 'Pia has been in this class all year.', 'Pia is the best artist in the class.'],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null, 'Paragraph 1 says Mrs. Bell asked the class to say hello to Pia. Ella is just meeting her.', 'Paragraph 1 says Mrs. Bell asked the class to say hello to Pia. The class is just meeting her.', 'No clue in the passage tells how well Pia can draw.'],
            chart: { facts: 'Mrs. Bell asked the class to say hello to Pia, and Pia gave a tiny wave.', know: 'A teacher asks the class to say hello to a kid who is new.', conclusion: 'Pia is new to the class.' },
            why: 'Paragraph 1 says Mrs. Bell asked the class to say hello to Pia. Pia gave a tiny wave. A teacher does that for a kid who is new. So Pia is new to the class.' },
          { id: 'D06', type: 'mc', skill: 'Predicting',
            q: 'What will Pia most likely do next?',
            choices: ['She will walk to lunch with Ella.', 'She will eat lunch alone.', 'She will ask Mrs. Bell for a new seat.', 'She will stay at her desk and draw.'],
            kinds: [null, 'opposite', 'opposite', 'wrongtime'],
            notes: [null, `Paragraph 4 says Pia waited beside Ella's chair. She does not want to be alone.`, 'Paragraph 4 says Pia and Ella drew and talked. Nothing shows Pia wants to move.', 'Paragraph 4 says the bell rang for lunch. Art time is over.'],
            why: `Paragraph 4 says the girls drew and talked. When the lunch bell rang, Pia waited beside Ella's chair. So Pia will most likely walk to lunch with Ella.` },
          { id: 'D07', type: 'mc', skill: 'Drawing conclusions',
            q: 'Why does Pia sit with her hands in her lap?',
            choices: ['She has no crayons to draw with.', 'She is done with her picture.', 'Her hands are cold from the rain.', 'Mrs. Bell told her not to draw yet.'],
            kinds: [null, 'opposite', 'noclue', 'opposite'],
            notes: [null, `Paragraph 3 says Pia's paper was blank. She had not drawn yet.`, null, 'Paragraph 2 says everyone began to draw. No one told Pia to wait.'],
            why: 'The passage does not say why. Paragraph 2 says the inside of her desk was empty. Paragraph 4 says Pia picked up a crayon as soon as Ella shared. So Pia had no crayons to draw with.' },
          { id: 'D08', type: 'mc', skill: 'Theme',
            q: 'Which statement BEST tells a lesson Ella learns in the passage?',
            choices: ['It is important to be kind to someone new.', 'It is important to wave to the class.', 'It is important to keep your crayons to yourself.', 'It is important to line up for lunch on time.'],
            kinds: [null, 'onedetail', 'opposite', 'noclue'],
            notes: [null, 'Pia gave a tiny wave in paragraph 1. That is one detail, not the lesson.', 'Ella shared her crayons, and Pia smiled. The story shows the opposite.', 'The lunch bell is one small part of the story. It is not the lesson.'],
            why: 'In paragraph 2, Pia sits alone and looks at the floor. In paragraph 3, Ella shares her crayons. In paragraph 4, the girls draw and talk. Ella learns it is important to be kind to someone new.' }
        ] }
    ]
  }
};
