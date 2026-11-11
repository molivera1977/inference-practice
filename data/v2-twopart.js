/* Part A and Part B, version 2 of Levels 1–6 — a retry's passages (Marcos 11/10: "New retry passages";
   Level 1 11/10, Levels 2–6 11/11). Try 1 of a level gets data/act-twopart.js; try 2 gets these.
   Same question slots as version 1. Lane for Levels 2–6: friendship, responsibility, sticking with
   something. No Part A answer repeats version 1 of the same level. */
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
    ],

    /* ═══ LEVEL 2 · FK 2.5 · version 2 (11/11) ═══════════ */
    2: [
      { title: 'Josie and the Sidewalk Bugs', genre: 'story',
        paragraphs: [
          'Jett’s job was to walk his little sister, Josie, home from school. Josie was five years old. She stopped to look at every bug on the sidewalk.',
          'On Monday, Jett’s friends were playing ball in the park on the corner. They waved and called for Jett to come and play. Jett looked at the game for a long time. Then he took Josie’s hand and kept walking.',
          'All the way home, Jett kicked a rock and did not say a word.',
          'On Tuesday, Jett heard a ball bouncing on the sidewalk in front of his house. His friends had brought the game to his street. Jett ran inside and came back with a cold cup of water for each friend. Then he played ball while Josie watched a beetle on the steps.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Jett?',
              choices: ['Jett is responsible.', 'Jett does not like to play ball.', 'Jett is afraid of bugs.', 'Jett wants Josie to walk home alone.'],
              kinds: [null, 'opposite', 'noclue', 'noclue'],
              notes: [null, 'Paragraph 2 says Jett looked at the game for a long time. He wanted to play. The clues show the opposite.', 'Josie looks at the bugs. No clue shows Jett is afraid of them.', 'Paragraph 1 says walking Josie home is Jett’s job. No clue shows he wants her to go alone.'],
              why: 'Paragraph 2 says Jett’s friends called him to come and play. Jett wanted to, but he walked Josie home. A responsible kid does his job, even when he wants to play. So Jett is responsible.' },
            b: { choices: ['Then he took Josie’s hand and kept walking.', 'Jett looked at the game for a long time.', 'She stopped to look at every bug on the sidewalk.', 'On Monday, Jett’s friends were playing ball in the park on the corner.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows Jett wanted to play. It does not show him doing his job.', 'Paragraph 1 is about Josie, not Jett.', 'Paragraph 2 tells what the friends were doing. It is not about Jett.'],
              why: 'Paragraph 2 says Jett took Josie’s hand and kept walking. He did his job and did not stop to play. It proves Part A.' },
            model: { R: 'I can infer that Jett is', A: 'responsible.', D: 'Then he took Josie’s hand and kept walking.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Jett feel at the end of the passage?',
              choices: ['Jett feels thankful to his friends.', 'Jett feels grumpy about walking Josie home.', 'Jett feels upset that his friends came over.', 'Jett feels worried that Josie is lost.'],
              kinds: [null, 'wrongtime', 'opposite', 'noclue'],
              notes: [null, 'Jett was grumpy in paragraph 3, on Monday. That was not the end.', 'Jett played ball with his friends. The clues show the opposite.', 'Josie was on the steps. No clue shows she is lost.'],
              why: 'Paragraph 4 says Jett’s friends brought the game to his street. Then Jett got each friend a cold drink. People do something kind back to say thank you. So Jett feels thankful.' },
            b: { choices: ['Jett ran inside and came back with a cold cup of water for each friend.', 'All the way home, Jett kicked a rock and did not say a word.', 'Then he played ball while Josie watched a beetle on the steps.', 'Josie was five years old.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 3 is Monday. It is not the end.', 'Paragraph 4 tells what Jett did next. It does not show how he feels about his friends.', 'Paragraph 1 tells about Josie. It does not show a feeling.'],
              why: 'Paragraph 4 is the end. Jett got a cold drink for each friend. That is a way to say thanks. It proves Jett feels thankful at the end.' },
            model: { R: 'At the end of the passage, Jett feels', A: 'thankful to his friends.', D: 'Jett ran inside and came back with a cold cup of water for each friend.' } }
        ] },

      { title: 'Cookies From Next Door', genre: 'story',
        paragraphs: [
          'Reed baked a batch of cookies all by himself for the very first time. He wrapped four warm cookies in a napkin and ran next door to his friend Ari.',
          'Ari took a big bite of a cookie. His eyes watered, and he chewed very slowly. Then Ari swallowed hard and said, “Thank you, Reed.”',
          'Reed took a bite, too, and quickly spit it into a napkin. He said the cookies tasted just like the ocean. Reed ran home and looked at his kitchen counter. The sugar jar was still full to the top.',
          'Reed’s cheeks turned red. Ari came over with his apron and said, “Let’s bake a new batch together.” This time, the cookies came out sweet, and the boys ate every one.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Reed?',
              choices: ['Reed put salt in the cookies instead of sugar.', 'Reed put too much sugar in every cookie he made.', 'Reed forgot to bake the cookies.', 'Ari baked the cookies for Reed.'],
              kinds: [null, 'opposite', 'opposite', 'wrongwho'],
              notes: [null, 'Paragraph 3 says the cookies tasted like the ocean. They were not too sweet.', 'Paragraph 1 says the cookies were warm. Reed did bake them.', 'Paragraph 1 says Reed baked the cookies, not Ari.'],
              why: 'Paragraph 3 says the cookies tasted like the ocean. The ocean is salty. It also says the sugar jar was still full, so Reed did not use the sugar. So Reed put in salt instead of sugar.' },
            b: { choices: ['The sugar jar was still full to the top.', 'Reed took a bite, too, and quickly spit it into a napkin.', 'He wrapped four warm cookies in a napkin and ran next door to his friend Ari.', 'Reed’s cheeks turned red.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 3 shows the cookies tasted bad. It does not show what Reed put in them.', 'Paragraph 1 tells where Reed took the cookies. It does not show what was in them.', 'Paragraph 4 shows how Reed felt. It does not show what he put in the cookies.'],
              why: 'Paragraph 3 says the sugar jar was still full. Reed never used the sugar. The salty taste came from salt. It proves Part A.' },
            model: { R: 'I can conclude that Reed', A: 'put salt in the cookies instead of sugar.', D: 'The sugar jar was still full to the top.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to be kind when a friend makes a mistake.', 'It is important to laugh when a friend makes a mistake.', 'It is important to always eat every cookie a friend gives you.', 'It is important to bake all by yourself.'],
              kinds: [null, 'noclue', 'onedetail', 'opposite'],
              notes: [null, 'No one laughs at Reed in the passage. This is not the lesson.', 'Ari ate one bite. That is a detail, not a lesson.', 'Reed baked by himself, and the cookies were salty. The clues show the opposite.'],
              why: 'Paragraph 3 says Reed made a big mistake. Paragraph 2 says Ari still said thank you. Paragraph 4 says Ari helped Reed bake again, and the cookies came out sweet. So the lesson is to be kind when a friend makes a mistake.' },
            b: { choices: ['Ari came over with his apron and said, “Let’s bake a new batch together.”', 'Reed baked a batch of cookies all by himself for the very first time.', 'He said the cookies tasted just like the ocean.', 'Reed ran home and looked at his kitchen counter.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells what Reed did first. It is not a lesson.', 'Paragraph 3 tells how the cookies tasted. It does not show anyone being kind.', 'Paragraph 3 tells where Reed looked. It does not show the lesson.'],
              why: 'Paragraph 4 says Ari came over to bake a new batch with Reed. Ari was kind about the mistake, and the new cookies came out sweet. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to be kind when a friend makes a mistake.', D: 'Ari came over with his apron and said, “Let’s bake a new batch together.”' } }
        ] }
    ],

    /* ═══ LEVEL 3 · FK 3.0 · version 2 (11/11) ═══════════ */
    3: [
      { title: 'Keys Under the Porch', genre: 'story',
        paragraphs: [
          'Mom was in a hurry to get to work. As she ran down the porch steps, her keys slipped out of her hand. They bounced once and dropped through a narrow crack between two wooden boards.',
          'Mom knelt down and tried to squeeze her fingers into the crack, but the opening was too narrow, and the keys were too far down. Without them, she could not start the car.',
          'Thea hurried inside and bent a wire coat hanger into a long, skinny hook. Then she lay on her belly on the porch and slid the hook down through the crack.',
          'Thea wiggled the hook back and forth until it caught the metal key ring. She pulled it up slowly, and the keys jingled out of the dark. Thea jumped up and down and shouted, “It worked!” Mom hugged her and drove away with a wave.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Thea?',
              choices: ['Thea is clever.', 'Thea does not want to help Mom.', 'Thea dropped the keys through the crack.', 'Thea is afraid of the dark under the porch.'],
              kinds: [null, 'opposite', 'wrongwho', 'noclue'],
              notes: [null, 'Paragraph 3 says Thea hurried to get a hanger for Mom. The clues show the opposite.', 'Paragraph 1 says the keys slipped out of Mom’s hand, not Thea’s.', 'Thea lay on the porch and reached into the crack. No clue shows she is afraid.'],
              why: 'Paragraph 2 says Mom could not reach the keys with her fingers. Paragraph 3 says Thea bent a wire hanger into a hook to reach them. A clever person thinks of a smart way to fix a problem. So Thea is clever.' },
            b: { choices: ['Thea hurried inside and bent a wire coat hanger into a long, skinny hook.', 'Mom knelt down and tried to squeeze her fingers into the crack, but the opening was too narrow, and the keys were too far down.', 'They bounced once and dropped through a narrow crack between two wooden boards.', 'Mom hugged her and drove away with a wave.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells what Mom tried. It is about Mom, not Thea.', 'Paragraph 1 tells where the keys fell. It does not show anything about Thea.', 'Paragraph 4 tells what Mom did. It is about Mom.'],
              why: 'Paragraph 3 says Thea bent a wire hanger into a hook. Her smart idea could reach keys that fingers could not. It proves Part A.' },
            model: { R: 'I can infer that Thea is', A: 'clever.', D: 'Thea hurried inside and bent a wire coat hanger into a long, skinny hook.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Thea feel at the end of the passage?',
              choices: ['Thea feels excited that her idea worked.', 'Thea feels worried that Mom will be late.', 'Thea feels upset that the hanger is bent.', 'Thea feels tired of helping Mom.'],
              kinds: [null, 'wrongtime', 'noclue', 'noclue'],
              notes: [null, 'Paragraph 2 shows the problem with the keys. At the end, the keys are back, and Mom drives away.', 'No clue shows Thea cares about the bent hanger.', 'Nothing at the end shows Thea is tired.'],
              why: 'Paragraph 4 is the end. Thea jumps up and down and shouts. People jump and shout like that when they are excited. So Thea feels excited that her idea worked.' },
            b: { choices: ['Thea jumped up and down and shouted, “It worked!”', 'Mom was in a hurry to get to work.', 'She pulled it up slowly, and the keys jingled out of the dark.', 'Without them, she could not start the car.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 is the start of the passage, not the end.', 'Paragraph 4 tells what happened to the keys. It does not show how Thea feels.', 'Paragraph 2 tells about Mom and the car. It does not show how Thea feels.'],
              why: 'Paragraph 4 is the end. Thea jumped up and down and shouted that it worked. It proves Thea feels excited at the end.' },
            model: { R: 'At the end of the passage, Thea feels', A: 'excited that her idea worked.', D: 'Thea jumped up and down and shouted, “It worked!”' } }
        ] },

      { title: 'The Cardboard Boat Race', genre: 'story',
        paragraphs: [
          'Every June, the fourth graders at Hill Street School had a boat race in the town pool. Each boat was made of cardboard and tape. Ty, Alma, and Sol were on one team. Alma taped the front of their boat, Sol taped the sides, and Ty taped the back.',
          'Alma and Sol worked slowly and pressed down every piece of tape. Ty spent the whole hour painting a pirate flag for the boat, and he put only two strips of tape on the back.',
          'On Thursday, the teams tested their boats in the pool. Halfway across, water poured in at the back of the boat. Alma and Sol climbed out, soaking wet. Ty stared at the back corner and did not say a word.',
          'On Friday morning, Ty came to school early. He put three new layers of tape on the back and pressed down every piece. In the big race, the boat floated all the way across the pool, and the three friends cheered.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Ty?',
              choices: ['Ty did not tape his part of the boat carefully.', 'Ty is the best boat builder on the whole team.', 'Ty wanted the boat to sink to the bottom of the pool.', 'Ty does not know how to use tape at all.'],
              kinds: [null, 'opposite', 'noclue', 'toofar'],
              notes: [null, 'The boat leaked at the part Ty taped. The clues show the opposite.', 'No clue shows Ty wanted the boat to sink.', 'Paragraph 1 says Ty taped the back. The clues do not prove he cannot use tape at all.'],
              why: 'Paragraph 2 says Ty painted a flag all hour and put only two strips of tape on the back. Paragraph 3 says the water came in at the back. So Ty did not tape his part carefully.' },
            b: { choices: ['Ty spent the whole hour painting a pirate flag for the boat, and he put only two strips of tape on the back.', 'Alma and Sol worked slowly and pressed down every piece of tape.', 'On Thursday, the teams tested their boats in the pool.', 'Alma and Sol climbed out, soaking wet.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 is about Alma and Sol, not Ty.', 'Paragraph 3 tells when the test was. It does not show how Ty worked.', 'Paragraph 3 is about Alma and Sol, not Ty.'],
              why: 'Paragraph 2 says Ty put only two strips of tape on the back, his part of the boat. It proves Part A.' },
            model: { R: 'I can conclude that Ty', A: 'did not tape his part of the boat carefully.', D: 'Ty spent the whole hour painting a pirate flag for the boat, and he put only two strips of tape on the back.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to do your part on a team.', 'It is important to make your boat look cool.', 'It is important to race in the town pool.', 'It is important to build boats out of wood.'],
              kinds: [null, 'opposite', 'onedetail', 'noclue'],
              notes: [null, 'Ty made a cool flag, but the boat still leaked. The clues show the opposite.', 'Paragraph 1 says the race is in the town pool. That is a detail, not a lesson.', 'The boats in the passage are cardboard. No clue says to use wood.'],
              why: 'Paragraph 3 says the boat leaked at the part Ty taped. Paragraph 4 says Ty fixed his part, and the boat made it across. One weak part can sink the whole boat. So the lesson is to do your part on a team.' },
            b: { choices: ['In the big race, the boat floated all the way across the pool, and the three friends cheered.', 'Every June, the fourth graders at Hill Street School had a boat race in the town pool.', 'Alma taped the front of their boat, Sol taped the sides, and Ty taped the back.', 'Ty stared at the back corner and did not say a word.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells about the race. It is not a lesson.', 'Paragraph 1 tells who taped each part. It does not show what doing your part did.', 'Paragraph 3 shows Ty after the leak. It does not show what fixing his part did.'],
              why: 'Paragraph 4 says that after Ty fixed his part, the boat floated all the way across. When every part was done well, the team did well. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to do your part on a team.', D: 'In the big race, the boat floated all the way across the pool, and the three friends cheered.' } }
        ] }
    ],

    /* ═══ LEVEL 4 · FK 3.5 · version 2 (11/11) ═══════════ */
    4: [
      { title: 'The Thunder Coaster', genre: 'story',
        paragraphs: [
          'All year, Elio and his best friend, Sid, talked about one thing. It was the Thunder Coaster at the county fair, with its giant red loop. The boys watched videos of the ride and drew pictures of it in their notebooks.',
          'On Saturday, the boys raced straight to the coaster. A wooden lion stood by the line, and riders had to be as tall as its paw. Elio’s head was well above the paw. Sid stretched up on his toes, but his head was still an inch below the paw. The worker shook her head.',
          'Sid’s chin wobbled, and he told Elio to ride without him. Elio’s teammate, Gil, was already in line. “Come on, Elio, I will ride with you,” Gil called. Elio looked up at the giant loop for a long moment. Then Elio turned his back on the coaster and walked with Sid to the bumper cars.',
          'The boys crashed their bumper cars into each other until they could not stop laughing. Then they shared a bag of kettle corn at the top of the Ferris wheel. On the ride home, Elio’s cheeks hurt from smiling, and he said it was the best fair ever.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Elio?',
              choices: ['Elio is a loyal friend.', 'Elio thinks Sid is too little to play with.', 'Elio does not care about the coaster.', 'Elio is mad at his teammate, Gil.'],
              kinds: [null, 'opposite', 'opposite', 'noclue'],
              notes: [null, 'Elio and Sid are best friends. The clues show the opposite.', 'Paragraph 1 says Elio talked about the coaster all year. The clues show the opposite.', 'Gil was being nice. No clue shows Elio is mad at him.'],
              why: 'Paragraph 1 says Elio wanted to ride the coaster all year. Paragraph 3 says he did not ride it without Sid. A loyal friend sticks by a friend. So Elio is a loyal friend.' },
            b: { choices: ['Then Elio turned his back on the coaster and walked with Sid to the bumper cars.', 'Elio’s head was well above the paw.', 'The boys watched videos of the ride and drew pictures of it in their notebooks.', 'Sid’s chin wobbled, and he told Elio to ride without him.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells how tall Elio is. It does not show he is loyal.', 'Paragraph 1 shows both boys liked the ride. It does not show Elio is loyal.', 'Paragraph 3 shows how Sid feels. It is about Sid.'],
              why: 'Paragraph 3 says Elio walked away from the coaster to stay with Sid. He gave up the ride for his friend. It proves Part A.' },
            model: { R: 'I can infer that Elio is', A: 'a loyal friend.', D: 'Then Elio turned his back on the coaster and walked with Sid to the bumper cars.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Elio feel at the end of the passage?',
              choices: ['Elio feels happy about his day with Sid.', 'Elio feels upset that he missed the coaster.', 'Elio feels nervous about the giant loop.', 'Elio feels angry at the worker by the lion.'],
              kinds: [null, 'opposite', 'noclue', 'noclue'],
              notes: [null, 'Nothing at the end shows Elio is upset about the coaster. The clues show the opposite.', 'No clue shows Elio is nervous about the loop.', 'The worker was just doing her job. No clue shows Elio is angry at her.'],
              why: 'Paragraph 4 is the end. The boys laughed on the bumper cars. Elio’s cheeks hurt from smiling, and he called it the best fair ever. So Elio feels happy about his day with Sid.' },
            b: { choices: ['On the ride home, Elio’s cheeks hurt from smiling, and he said it was the best fair ever.', 'Elio looked up at the giant loop for a long moment.', 'Sid stretched up on his toes, but his head was still an inch below the paw.', 'All year, Elio and his best friend, Sid, talked about one thing.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 3 is before Elio made his choice. It is not the end.', 'Paragraph 2 is about Sid, not Elio.', 'Paragraph 1 is the start of the passage, not the end.'],
              why: 'Paragraph 4 is the end. Elio’s cheeks hurt from smiling. He said it was the best fair ever. It proves Part A.' },
            model: { R: 'At the end of the passage, Elio feels', A: 'happy about his day with Sid.', D: 'On the ride home, Elio’s cheeks hurt from smiling, and he said it was the best fair ever.' } }
        ] },

      { title: 'Green Beans at Dinner', genre: 'story',
        paragraphs: [
          'Mae’s little brother, Henrik, was four years old, and he thought Mae was the coolest person in the world. When Mae wore her rain boots on a sunny day, Henrik wore his rain boots, too. When Mae hopped over the cracks in the sidewalk, Henrik hopped over every crack behind her.',
          'One night at dinner, Mae was in a grumpy mood. She pushed her plate of green beans away and said, “Yuck!” Right away, Henrik pushed his plate away and said, “Yuck!” too. Dad looked across the table at Mae and raised his eyebrows.',
          'Mae thought for a moment. Then she pulled her plate back and ate a big forkful of green beans. Henrik watched her closely, and then he ate his green beans, too.',
          'After that night, Mae was careful about what she did. She said please and thank you at the store. She put her muddy boots on the mat instead of kicking them across the floor. At bedtime, Mae brushed her teeth for two whole minutes, and so did Henrik.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Henrik?',
              choices: ['Henrik copies what Mae does.', 'Henrik does not like his big sister.', 'Henrik always eats his green beans first.', 'Henrik is the one who taught Mae to hop over cracks.'],
              kinds: [null, 'opposite', 'opposite', 'opposite'],
              notes: [null, 'Paragraph 1 says Henrik thinks Mae is the coolest person in the world. The clues show the opposite.', 'Paragraph 2 says Henrik pushed his beans away. The clues show the opposite.', 'Paragraph 1 says Henrik hopped behind Mae. Mae went first.'],
              why: 'Paragraph 1 says Henrik wore rain boots when Mae did. Paragraph 2 says Henrik said “Yuck!” right after Mae did. Henrik does what Mae does. So Henrik copies what Mae does.' },
            b: { choices: ['When Mae wore her rain boots on a sunny day, Henrik wore his rain boots, too.', 'Mae’s little brother, Henrik, was four years old, and he thought Mae was the coolest person in the world.', 'Dad looked across the table at Mae and raised his eyebrows.', 'Mae thought for a moment.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 1 tells how Henrik feels about Mae. It does not show what Henrik does.', 'Paragraph 2 is about Dad, not Henrik.', 'Paragraph 3 is about Mae, not Henrik.'],
              why: 'Paragraph 1 says Mae wore rain boots on a sunny day, and so did Henrik. He did the same thing as his sister. It proves Part A.' },
            model: { R: 'I can conclude that Henrik', A: 'copies what Mae does.', D: 'When Mae wore her rain boots on a sunny day, Henrik wore his rain boots, too.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to set a good example.', 'It is important to do everything your big sister does.', 'It is important to say “Yuck!” when you do not like your food.', 'It is important to hop over the cracks in the sidewalk.'],
              kinds: [null, 'toofar', 'opposite', 'onedetail'],
              notes: [null, 'Henrik does what Mae does. But the passage does not say kids should copy everything.', 'When Mae said “Yuck!” Henrik said it too, and Dad did not like it. The clues show the opposite.', 'Paragraph 1 says Mae and Henrik hop over cracks. That is a detail, not a lesson.'],
              why: 'Paragraph 2 says Henrik copied Mae when she was grumpy. Paragraph 3 and paragraph 4 say Mae did good things, and Henrik did them too. Little kids copy what they see. So the lesson is to set a good example.' },
            b: { choices: ['At bedtime, Mae brushed her teeth for two whole minutes, and so did Henrik.', 'One night at dinner, Mae was in a grumpy mood.', 'She pushed her plate of green beans away and said, “Yuck!”', 'When Mae hopped over the cracks in the sidewalk, Henrik hopped over every crack behind her.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells Mae’s mood. It is not a lesson.', 'Paragraph 2 shows Mae setting a bad example, not a good one.', 'Paragraph 1 shows Henrik copying a game. It does not show a good example.'],
              why: 'Paragraph 4 says Mae brushed her teeth for two whole minutes, and Henrik did too. Mae did a good thing, and Henrik copied it. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to set a good example.', D: 'At bedtime, Mae brushed her teeth for two whole minutes, and so did Henrik.' } }
        ] }
    ],

    /* ═══ LEVEL 5 · FK 4.0 · version 2 (11/11) ═══════════ */
    5: [
      { title: 'The Purple Helmet', genre: 'story',
        paragraphs: [
          'Elsa was a fun friend who loved to ride her bike. On Monday, she left her lunch bag on the kitchen table. On Tuesday, she walked all the way to school in her fuzzy slippers.',
          'On Thursday, the strap on Elsa’s bike helmet snapped. Her friend Dara lent Elsa her purple helmet so they could ride to the library together. “Please bring it back by Saturday,” Dara said. “I need it for the Bike Parade.” Elsa promised that she would.',
          'All week, Elsa wove red and white streamers through the spokes of her wheels. On Saturday morning, she wore a brand-new helmet from her dad and rode to the parade on Elm Street. A sign at the start said that every rider had to wear a helmet.',
          'Dara stood by the sign without a helmet, looking up and down the street. Elsa gasped and pressed a hand over her mouth. The purple helmet was still hanging on a hook in her garage at home.',
          'Dara could not ride, so she walked beside the parade, pushing her bike. Elsa climbed off her own bike and walked next to Dara the whole way, with her eyes on the ground. She did not ring her bell even once.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Elsa?',
              choices: ['Elsa often forgets things.', 'Elsa does not like to ride her bike.', 'Elsa wants to keep Dara’s helmet for herself.', 'Elsa is the best bike rider on Elm Street.'],
              kinds: [null, 'opposite', 'noclue', 'noclue'],
              notes: [null, 'Paragraph 3 says Elsa got her bike ready all week. The clues show the opposite.', 'Elsa promised to give the helmet back. No clue shows she wanted to keep it.', 'No clue shows how well Elsa rides next to other kids.'],
              why: 'Paragraph 1 says Elsa left her lunch at home and wore slippers to school. Paragraph 4 says she left Dara’s helmet at home. She forgets things again and again. So Elsa often forgets things.' },
            b: { choices: ['On Tuesday, she walked all the way to school in her fuzzy slippers.', 'Her friend Dara lent Elsa her purple helmet so they could ride to the library together.', 'All week, Elsa wove red and white streamers through the spokes of her wheels.', 'A sign at the start said that every rider had to wear a helmet.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells what Dara did. It is about Dara.', 'Paragraph 3 shows Elsa getting her bike ready. It does not show her forgetting.', 'Paragraph 3 tells the parade rule. It is not about Elsa.'],
              why: 'Paragraph 1 says Elsa walked to school in her fuzzy slippers. She forgot to put on her shoes. It proves Part A.' },
            model: { R: 'I can infer that Elsa', A: 'often forgets things.', D: 'On Tuesday, she walked all the way to school in her fuzzy slippers.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Elsa feel at the end of the passage?',
              choices: ['Elsa feels sorry that she let Dara down.', 'Elsa feels excited to ride in the parade.', 'Elsa feels mad at Dara for being late.', 'Elsa feels proud of her brand-new helmet.'],
              kinds: [null, 'wrongtime', 'noclue', 'noclue'],
              notes: [null, 'Elsa was excited in paragraph 3, when she got her bike ready. That was not the end.', 'Dara was there, waiting by the sign. No clue shows Elsa is mad at her.', 'Elsa wore a new helmet, but nothing at the end shows she is proud.'],
              why: 'Paragraph 4 says Elsa left Dara’s helmet at home, so Dara could not ride. Paragraph 5 says Elsa walked with Dara and kept her eyes on the ground. People act like that when they feel bad about what they did. So Elsa feels sorry.' },
            b: { choices: ['Elsa climbed off her own bike and walked next to Dara the whole way, with her eyes on the ground.', 'Elsa promised that she would.', 'Dara could not ride, so she walked beside the parade, pushing her bike.', 'On Saturday morning, she wore a brand-new helmet from her dad and rode to the parade on Elm Street.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells what Elsa said she would do. It is not the end.', 'Paragraph 5 tells what Dara did. It is about Dara.', 'Paragraph 3 is before Elsa saw Dara. It is not the end.'],
              why: 'Paragraph 5 is the end. Elsa got off her bike and walked with Dara, with her eyes on the ground. She felt bad about what she did. It proves Part A.' },
            model: { R: 'At the end of the passage, Elsa feels', A: 'sorry that she let Dara down.', D: 'Elsa climbed off her own bike and walked next to Dara the whole way, with her eyes on the ground.' } }
        ] },

      { title: 'A Drum in the Front Row', genre: 'story',
        paragraphs: [
          'Since first grade, Keegan and Harlan had done almost everything together. They sat side by side on the bus, traded snacks at lunch and played on the same soccer team every fall.',
          'In October, the school started a drum club. It met on Thursdays, at the same time as soccer practice. Harlan quit the team and signed up for the club. When Harlan told Keegan, Keegan crossed his arms and stared at the floor. Then he turned away and kicked a soccer ball hard against the wall.',
          'For the next two weeks, Keegan sat at the far end of the lunch table. He laughed loudly at other kids’ jokes and never looked at Harlan. At home, he picked up an old photo of the two boys holding a trophy, and then he set it face down on his shelf.',
          'On Saturday, Keegan’s team played in the big game. Halfway through, he heard a fast, booming beat from the stands. Harlan sat in the front row with a small drum, and he pounded it every time Keegan touched the ball. Soon the whole crowd was clapping along.',
          'After the game, Keegan jogged over to the stands, still out of breath. He asked Harlan when the drum club would play its first show. On the night of the show, Keegan sat in the front row and clapped the loudest of anyone.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about Keegan?',
              choices: ['Keegan was upset that Harlan left the soccer team.', 'Keegan wanted to join the drum club, too.', 'Keegan did not care what Harlan did after school.', 'Harlan was upset that Keegan played soccer.'],
              kinds: [null, 'noclue', 'opposite', 'wrongwho'],
              notes: [null, 'No clue shows Keegan wanted to play the drums.', 'Paragraph 3 says Keegan turned the old photo face down. He cared a lot.', 'This is about Harlan. No clue shows Harlan was upset with Keegan.'],
              why: 'Paragraph 2 says Keegan crossed his arms when Harlan told him. Then he kicked a ball hard. Paragraph 3 says Keegan would not look at Harlan. People act like that when they are upset. So Keegan was upset that Harlan left the soccer team.' },
            b: { choices: ['When Harlan told Keegan, Keegan crossed his arms and stared at the floor.', 'In October, the school started a drum club.', 'Since first grade, Keegan and Harlan had done almost everything together.', 'Soon the whole crowd was clapping along.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells about the new club. It does not show how Keegan felt.', 'Paragraph 1 tells about the boys before the club. It does not show Keegan was upset.', 'Paragraph 4 tells what the crowd did. It is not about Keegan.'],
              why: 'Paragraph 2 says Keegan crossed his arms and stared at the floor when Harlan told him. He did not like the news. It proves Part A.' },
            model: { R: 'I can conclude that Keegan', A: 'was upset that Harlan left the soccer team.', D: 'When Harlan told Keegan, Keegan crossed his arms and stared at the floor.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to stay friends when you like different things.', 'It is important to do everything your best friend does.', 'It is important to win the big game.', 'It is important to play the drums loudly.'],
              kinds: [null, 'opposite', 'noclue', 'onedetail'],
              notes: [null, 'Harlan joined a different club, and the boys did not stop being friends. The clues show the opposite.', 'The passage never tells who won the game. This is not the lesson.', 'Paragraph 4 says Harlan pounded a drum. That is a detail, not a lesson.'],
              why: 'Paragraph 2 says Harlan joined a different club, and Keegan was upset. Paragraph 4 says Harlan drummed for Keegan at his game. Paragraph 5 says Keegan cheered at the drum show. So the lesson is to stay friends when you like different things.' },
            b: { choices: ['Harlan sat in the front row with a small drum, and he pounded it every time Keegan touched the ball.', 'Harlan quit the team and signed up for the club.', 'For the next two weeks, Keegan sat at the far end of the lunch table.', 'On Saturday, Keegan’s team played in the big game.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows how the problem started. It does not show the lesson.', 'Paragraph 3 shows the boys apart. It does not show them staying friends.', 'Paragraph 4 tells when the game was. It does not show the lesson.'],
              why: 'Paragraph 4 says Harlan drummed every time Keegan touched the ball. Harlan liked drums, but he still cheered for his friend at soccer. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to stay friends when you like different things.', D: 'Harlan sat in the front row with a small drum, and he pounded it every time Keegan touched the ball.' } }
        ] }
    ],

    /* ═══ LEVEL 6 · FK 4.5 · version 2 (11/11) ═══════════ */
    6: [
      // FACTS (story details): an elevator has an alarm button marked with a bell that calls for help; a sign
      // in an elevator says to stay inside and wait for help; firefighters come to open a stuck elevator.
      { title: 'Between the Seventh and Eighth Floors', genre: 'story',
        paragraphs: [
          'Selena lived on the twelfth floor of a tall building in the city. On Tuesdays, her friend Noemi came home with her after school so they could do their homework together.',
          'One rainy Tuesday, the girls stepped into the elevator in the lobby. Between the seventh and eighth floors, the elevator gave a loud clunk and stopped. Noemi pounded on the doors with both fists and shouted for help. Her voice bounced off the metal walls.',
          'Selena’s own heart was pounding, but she kept her voice slow and soft. She pressed the help button with a picture of a phone on it. A woman’s voice crackled through the speaker. Selena told her the name of the building and the floor where they were stuck. Then Selena pointed to a sign on the wall. It said to stay inside and wait for help. She sat down on her backpack and patted the floor beside her. After a moment, Noemi sat down, too.',
          'Twenty minutes later, the doors slid open, and two firefighters smiled down at them. A crowd of neighbors cheered in the hall. One firefighter pressed a shiny sticker shaped like a badge onto Selena’s jacket. He said that she had done everything right.',
          'That night, Selena hung her jacket on the back of her chair instead of on the hook by the door. Before she climbed into bed, she ran her thumb over the little badge one more time and smiled.'
        ],
        items: [
          { id: 'T01', type: 'ebsr', skill: ['Character inference', 'Supporting detail'],
            a: { q: 'What can you infer about Selena?',
              choices: ['Selena stays calm when something scary happens.', 'Selena does not care that Noemi is upset.', 'Selena knows how to fix a broken elevator.', 'Selena pounded on the doors and yelled for help.'],
              kinds: [null, 'opposite', 'noclue', 'wrongwho'],
              notes: [null, 'Paragraph 3 says Selena patted the floor so Noemi would sit with her. The clues show the opposite.', 'The firefighters opened the doors. No clue shows Selena can fix an elevator.', 'Paragraph 2 says Noemi pounded on the doors, not Selena.'],
              why: 'Paragraph 3 says Selena’s heart was pounding, but she kept her voice slow and soft. She pushed the alarm and told the woman where they were. Then she sat down to wait, just like the sign said. She did the right things even though she was scared. So Selena stays calm when something scary happens.' },
            b: { choices: ['Selena’s own heart was pounding, but she kept her voice slow and soft.', 'Noemi pounded on the doors with both fists and shouted for help.', 'Between the seventh and eighth floors, the elevator gave a loud clunk and stopped.', 'A crowd of neighbors cheered in the hall.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 shows what Noemi did. It is about Noemi.', 'Paragraph 2 tells what the elevator did. It does not show how Selena acted.', 'Paragraph 4 tells what the neighbors did. It is not about Selena.'],
              why: 'Paragraph 3 says Selena’s heart was pounding, but she kept her voice slow and soft. She was scared inside, but she stayed calm. It proves Part A.' },
            model: { R: 'I can infer that Selena', A: 'stays calm when something scary happens.', D: 'Selena’s own heart was pounding, but she kept her voice slow and soft.' } },
          { id: 'T02', type: 'ebsr', skill: ['Feeling change', 'Supporting detail'],
            a: { q: 'How does Selena feel at the end of the passage?',
              choices: ['Selena feels proud of how she helped.', 'Selena feels scared of the stuck elevator.', 'Selena feels angry at Noemi for yelling.', 'Selena feels bored after the long wait.'],
              kinds: [null, 'wrongtime', 'noclue', 'noclue'],
              notes: [null, 'Selena was scared in paragraph 3, when the elevator was stuck. That was not the end.', 'Selena asked Noemi to sit with her. No clue shows she is angry at Noemi.', 'Nothing at the end shows Selena is bored.'],
              why: 'Paragraph 4 says a firefighter gave Selena a badge sticker and said she did everything right. Paragraph 5 is the end. Selena keeps her jacket close, touches the badge and smiles. People do that when they are proud. So Selena feels proud of how she helped.' },
            b: { choices: ['Before she climbed into bed, she ran her thumb over the little badge one more time and smiled.', 'Her voice bounced off the metal walls.', 'Twenty minutes later, the doors slid open, and two firefighters smiled down at them.', 'On Tuesdays, her friend Noemi came home with her after school so they could do their homework together.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 is about Noemi’s voice when the elevator got stuck. It is not the end.', 'Paragraph 4 tells what the firefighters did. It does not show how Selena feels.', 'Paragraph 1 is the start of the passage, not the end.'],
              why: 'Paragraph 5 is the end. Selena ran her thumb over the badge and smiled. She is proud of how she helped. It proves Part A.' },
            model: { R: 'At the end of the passage, Selena feels', A: 'proud of how she helped.', D: 'Before she climbed into bed, she ran her thumb over the little badge one more time and smiled.' } }
        ] },

      { title: 'The Can Crew', genre: 'story',
        paragraphs: [
          'In September, Uma started a club called the Can Crew at Oak Grove School. Every Friday, the crew would collect empty cans and bottles from every classroom. Then Uma’s dad would drive the bags to the recycling center, where the cans could be turned in for money. The crew’s goal was to raise two hundred dollars for new playground balls.',
          'Eight kids came to the first meeting. But the bins in the classrooms were sticky and smelled like sour juice, and fruit flies buzzed around the bags. Two kids held their noses the whole time. By the third Friday, only Uma and her friend Rocco showed up to work.',
          'Uma and Rocco kept going every Friday. They wore rubber gloves and rinsed out the sticky bins with a hose. On rainy days, they dragged the heavy bags across the parking lot under one big umbrella. Rocco made a chart on the office door and colored in one box for every ten dollars they earned.',
          'In May, Rocco finally colored in the last box on the chart. At the spring assembly, the principal called Uma and Rocco up to the stage. The whole school clapped as twenty new balls rolled out of a big net bag.',
          'The next fall, twenty-five kids signed up for the Can Crew on the very first day.'
        ],
        items: [
          { id: 'T03', type: 'ebsr', skill: ['Drawing conclusions', 'Supporting detail'],
            a: { q: 'What conclusion can be drawn about the kids who left the Can Crew?',
              choices: ['They did not like the smelly, sticky work.', 'They were mad at Uma and her friend Rocco.', 'They came back to help every single Friday.', 'They wanted to keep the money for themselves.'],
              kinds: [null, 'noclue', 'opposite', 'noclue'],
              notes: [null, 'No clue shows the kids were mad at Uma or Rocco.', 'Paragraph 2 says only Uma and Rocco kept coming. The clues show the opposite.', 'No clue shows anyone wanted to keep the money.'],
              why: 'Paragraph 2 says the bins were sticky and smelled like sour juice. Two kids held their noses. Then most kids stopped coming. So the kids who left did not like the smelly, sticky work.' },
            b: { choices: ['Two kids held their noses the whole time.', 'Eight kids came to the first meeting.', 'In September, Uma started a club called the Can Crew at Oak Grove School.', 'Rocco made a chart on the office door and colored in one box for every ten dollars they earned.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells how many kids came. It does not show how they felt about the work.', 'Paragraph 1 tells who started the club. It does not show why kids left.', 'Paragraph 3 is about Rocco, who stayed.'],
              why: 'Paragraph 2 says two kids held their noses the whole time. They did not like the smell of the work. It proves Part A.' },
            model: { R: 'I can conclude that the kids who left the Can Crew', A: 'did not like the smelly, sticky work.', D: 'Two kids held their noses the whole time.' } },
          { id: 'T04', type: 'ebsr', skill: ['Theme', 'Supporting detail'],
            a: { q: 'Which statement BEST describes a lesson in the passage?',
              choices: ['It is important to finish what you start.', 'It is important to stay away from messy jobs.', 'It is important to wear rubber gloves.', 'It is important to have a big club.'],
              kinds: [null, 'opposite', 'onedetail', 'opposite'],
              notes: [null, 'Uma and Rocco did the messy job, and it worked out. The clues show the opposite.', 'Paragraph 3 says Uma and Rocco wore gloves. That is a detail, not a lesson.', 'The club got small, but the job still got done. The clues show the opposite.'],
              why: 'Paragraph 2 says most kids quit when the job got messy. Paragraph 3 says Uma and Rocco kept going, even in the rain. Paragraph 4 says they reached their goal, and the school got new balls. So the lesson is to finish what you start.' },
            b: { choices: ['In May, Rocco finally colored in the last box on the chart.', 'But the bins in the classrooms were sticky and smelled like sour juice, and fruit flies buzzed around the bags.', 'The crew’s goal was to raise two hundred dollars for new playground balls.', 'Then Uma’s dad would drive the bags to the recycling center, where the cans could be turned in for money.'],
              kinds: [null, 'notproof', 'notproof', 'notproof'],
              notes: [null, 'Paragraph 2 tells why the job was hard. It does not show what finishing did.', 'Paragraph 1 tells the goal. It does not show the goal being met.', 'Paragraph 1 tells how the club got money. It is not a lesson.'],
              why: 'Paragraph 4 says Rocco colored in the last box on the chart. Uma and Rocco kept going until the job was done. It proves the lesson in Part A.' },
            model: { R: 'A lesson in the passage is that', A: 'it is important to finish what you start.', D: 'In May, Rocco finally colored in the last box on the chart.' } }
        ] }
    ]
  }
};
