/* Part A and Part B, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-twopart.js; try 2 gets these. Same question slots as version 1. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.twopart = {
  2: {
    1: [
      { title: 'Blue Paint on the Barn', genre: 'story',
        paragraphs: [
          `In Mrs. Ford's art class, Lucy reached across the table for a brush. Her arm bumped a cup of blue paint. The paint spilled all over Finn's picture of a red barn.`,
          `Finn was over at the sink, washing his brush. No one else saw the spill. Lucy's heart pounded. She could walk away, and no one would know.`,
          'Lucy walked over to Mrs. Ford and told her about the spill. Then Lucy got a new sheet of paper for Finn and helped him paint another barn.',
          'When the bell rang, Finn held up his new picture and grinned. Lucy let out a long breath and smiled.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Lucy?',
              choices: ['Lucy cares about how Finn feels.', 'Lucy wants to keep the spill a secret.', 'Lucy does not like art class.', 'Lucy is the best painter in the class.'],
              kinds: [null, 'opposite', 'noclue', 'toofar'],
              notes: [null, 'Paragraph 3 says Lucy told Mrs. Ford about the spill. She did not keep it a secret.', null, null],
              why: `Paragraph 1 says the paint spilled on Finn's picture. Paragraph 3 says Lucy got Finn new paper and helped him paint another barn. People do that for someone they care about. So Lucy cares about how Finn feels.` },
            b: { choices: ['Then Lucy got a new sheet of paper for Finn and helped him paint another barn.', 'She could walk away, and no one would know.', 'Her arm bumped a cup of blue paint.', 'Finn was over at the sink, washing his brush.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells what Lucy could do. It does not show how she treats Finn.', 'Paragraph 1 tells how the paint spilled. It does not show that Lucy cares about Finn.', 'Paragraph 2 tells where Finn was. It is not about what Lucy did.'],
              why: 'Paragraph 3 says Lucy got Finn new paper and helped him paint another barn. She wanted Finn to have a picture again. It proves Part A.' },
            model: { R: 'I can infer that Lucy', A: 'cares about how Finn feels.', D: 'Then Lucy got a new sheet of paper for Finn and helped him paint another barn.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Lucy feel at the end of the passage?',
              choices: ['Lucy feels relieved and happy.', 'Lucy feels mad at Finn.', 'Lucy feels scared that she will get in trouble.', 'Lucy feels sad that Finn is upset with her.'],
              kinds: [null, 'noclue', 'wrongtime', 'opposite'],
              notes: [null, null, 'Lucy was scared in paragraph 2, before she told. That was not the end.', 'Paragraph 4 says Finn grinned. He is not upset with Lucy.'],
              why: 'Paragraph 4 is the end. Lucy let out a long breath. People do that when a worry is over. She smiled too. So Lucy feels relieved and happy.' },
            b: { choices: ['Lucy let out a long breath and smiled.', `Lucy's heart pounded.`, 'When the bell rang, Finn held up his new picture and grinned.', 'Lucy walked over to Mrs. Ford and told her about the spill.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 is before Lucy told Mrs. Ford. It is not the end.', 'This is about Finn, not Lucy. It shows how Finn feels.', 'Paragraph 3 tells what Lucy did. It does not show how she feels at the end.'],
              why: 'Paragraph 4 is the end. Lucy let out a long breath and smiled. It proves Lucy feels relieved and happy at the end.' },
            model: { R: 'At the end of the passage, Lucy feels', A: 'relieved and happy.', D: 'Lucy let out a long breath and smiled.' } }
        ] },

      { title: 'Grace Jumps In', genre: 'story',
        paragraphs: [
          'At recess, two big girls turned the jump ropes. Grace stood at the side and rocked back and forth. When she jumped in, the ropes hit her feet and stopped.',
          'That night, Grace asked her big sister, Dina, for help. Dina and Dad turned two ropes in the driveway. Grace tripped on the ropes again and again.',
          `Grace's legs got tired, but she said, "One more time." Grace and Dina went out to the driveway every night that week.`,
          'On Friday at recess, Grace rocked back and forth by the ropes. Then she jumped in. After a week of practice, Grace jumped twenty times without a miss.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Grace?',
              choices: ['Grace does not give up.', 'Grace hates to jump rope.', 'Grace is afraid of her big sister.', 'Grace is the best jumper at school.'],
              kinds: [null, 'opposite', 'noclue', 'toofar'],
              notes: [null, 'This says Grace hates jump rope. The clues show the opposite.', 'Grace asked Dina for help. No clue shows she is afraid of her.', null],
              why: 'Paragraph 2 says Grace tripped on the ropes again and again. Paragraph 3 says her legs got tired, but she wanted one more try. So Grace does not give up.' },
            b: { choices: [`Grace's legs got tired, but she said, "One more time."`, 'Grace stood at the side and rocked back and forth.', 'Dina and Dad turned two ropes in the driveway.', 'When she jumped in, the ropes hit her feet and stopped.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 shows Grace getting ready to jump. It does not show what she did after she missed.', 'Paragraph 2 tells what Dina and Dad did. It is not about Grace.', 'Paragraph 1 shows Grace missed one time. It does not show what she did next.'],
              why: 'Paragraph 3 says Grace was tired, but she still wanted to try one more time. She kept going. It proves Part A.' },
            model: { R: 'I can conclude that Grace', A: 'does not give up.', D: `Grace's legs got tired, but she said, "One more time."` } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to keep practicing.', 'It is important to win.', 'It is important to jump rope at recess.', 'It is important to stay away from hard games.'],
              kinds: [null, 'noclue', 'onedetail', 'opposite'],
              notes: [null, 'No one wins a game in the passage. This is not the lesson.', 'Paragraph 1 says Grace was at recess. That is a detail, not a lesson.', 'Grace did not stay away from the ropes. The clues show the opposite.'],
              why: 'Paragraph 2 says Grace tripped again and again. Paragraph 3 says she went out to the driveway every night. Paragraph 4 says she did not miss. So the lesson is to keep practicing.' },
            b: { choices: ['After a week of practice, Grace jumped twenty times without a miss.', 'At recess, two big girls turned the jump ropes.', 'On Friday at recess, Grace rocked back and forth by the ropes.', 'Then she jumped in.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells who turned the ropes. It is not a lesson.', 'Paragraph 4 shows Grace getting ready. It does not show what practice did.', 'Paragraph 4 says Grace jumped in. It does not show the practice that helped her.'],
              why: 'Paragraph 4 says that after a week of practice, Grace did not miss. Practice worked. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to keep practicing.', D: 'After a week of practice, Grace jumped twenty times without a miss.' } }
        ] }
    ]
  }
};
