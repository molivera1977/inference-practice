/* Find the Clue, version 2 of Levels 1–6 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-clue.js; try 2 gets these. Same question slots as version 1.
   Levels 2–6 (11/11): small puzzles solved from clues in public places — a library, a city train,
   a school spirit day, a park, a science museum, a market, a city bus, the post office, a
   neighborhood street, an art museum. Checked by: node tools/check-levels.js clue */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.clue = {
  2: {
    1: [
      { title: 'The Empty Bird Feeder', genre: 'story',
        paragraphs: [
          'Hana kept a bird book by the window. Every morning, she counted the birds at the feeder. One snowy night, she and Dad filled the feeder with seeds.',
          'The next morning, Hana ran to the window. The feeder was empty, and cracked seed shells were all over the deck. The lid of the feeder was pushed open. Hana called, "Dad, come and look!"',
          'Hana and Dad went out on the deck. Small tracks led across the snow from the woods. Each track looked like a tiny hand with five fingers.',
          'Dad tied the lid shut with a strong rope. Then Hana drew a track in her bird book.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows the seeds were eaten.',
            para: 2,
            answer: 'The feeder was empty, and cracked seed shells were all over the deck.',
            notes: {
              'The next morning, Hana ran to the window.': 'This tells where Hana went. It is not a clue about the seeds.',
              'The lid of the feeder was pushed open.': 'This tells about the lid. It does not show that the seeds were eaten.',
              'Hana called, "Dad, come and look!"': 'This tells what Hana said. It is not a clue about the seeds.'
            },
            why: 'Paragraph 1 says they filled the feeder at night. Paragraph 2 says the next morning it was empty, with cracked shells all over the deck. Animals crack seeds to eat them and drop the shells. So the seeds were eaten in the night.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows the animal was not a bird.',
            answer: 'Each track looked like a tiny hand with five fingers.',
            notes: {
              'Small tracks led across the snow from the woods.': 'This shows that an animal walked in the snow. It does not show what kind of animal it was.',
              'The lid of the feeder was pushed open.': 'This tells about the lid. It does not show what kind of animal came.'
            },
            why: 'Paragraph 3 says each track looked like a tiny hand with five fingers. Birds do not have feet like hands. So the animal was not a bird.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Dad wants to keep the animal out of the feeder?',
            choices: [
              'Dad tied the lid shut with a strong rope.',
              'Hana and Dad went out on the deck.',
              'One snowy night, she and Dad filled the feeder with seeds.',
              'The lid of the feeder was pushed open.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 3 tells where Hana and Dad went. It does not show Dad keeping the animal out.',
              'Paragraph 1 tells how they filled the feeder. That does not keep an animal out.',
              'Paragraph 2 tells what the animal did to the lid. It does not show what Dad did.'],
            why: 'Paragraph 4 says Dad tied the lid shut with a rope. An animal cannot get into a feeder that is tied shut. So Dad wants to keep the animal out.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'Hana likes to watch the birds.',
              'Hana is afraid of the birds at the feeder.',
              'Hana wants a pet bird to keep in her room.',
              'Dad keeps a bird book by the window.'
            ],
            kinds: [null, 'opposite', 'noclue', 'wrongwho'],
            notes: [null,
              'Paragraph 1 says Hana counts the birds every morning. People do not look at a thing every day if it scares them.',
              'Paragraph 1 does not say anything about a pet bird.',
              'Paragraph 1 says the bird book is Hana\'s, not Dad\'s.'],
            why: 'Paragraph 1 says Hana keeps a bird book by the window. It says she counts the birds every morning. People spend time on the things they like. So Hana likes to watch the birds.',
            chart: { facts: 'Hana keeps a bird book and counts the birds every morning.', know: 'People spend time on the things they like.', conclusion: 'Hana likes to watch the birds.' } }
        ] },

      { title: 'Saturday on Main Street', genre: 'story',
        paragraphs: [
          'On Saturday, Kofi and Grandma walked to Main Street. People sat in chairs on both sides of the road, and kids waved little flags. Police cars blocked each end, so no cars could drive in.',
          'Kofi sat on the curb by Grandma\'s chair. He stood up to look down the street ten times. Grandma laughed and sipped her tea. A man sold red balloons nearby.',
          'At last, a band in red hats marched down the street. Kofi put his hands over his ears, but he kept smiling.',
          'A little girl behind Kofi was too short to see. Kofi stepped back and gave the girl his spot.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Kofi is excited.',
            para: 2,
            answer: 'He stood up to look down the street ten times.',
            notes: {
              'Kofi sat on the curb by Grandma\'s chair.': 'This tells where Kofi sat. It does not show how he feels.',
              'Grandma laughed and sipped her tea.': 'This sentence is about Grandma, not Kofi.',
              'A man sold red balloons nearby.': 'This sentence is about a man with balloons. It does not show how Kofi feels.'
            },
            why: 'Paragraph 2 says Kofi stood up to look down the street ten times. People keep looking when they can hardly wait. So Kofi is excited.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Kofi is kind.',
            answer: 'Kofi stepped back and gave the girl his spot.',
            notes: {
              'A little girl behind Kofi was too short to see.': 'This tells about the girl. Look for what Kofi does.',
              'He stood up to look down the street ten times.': 'This shows Kofi waiting. It does not show him helping someone.'
            },
            why: 'Paragraph 4 says a little girl was too short to see. Kofi stepped back and gave her his spot. Helping someone like that is kind. So Kofi is kind.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that the band was very loud?',
            choices: [
              'Kofi put his hands over his ears, but he kept smiling.',
              'At last, a band in red hats marched down the street.',
              'Grandma laughed and sipped her tea.',
              'Kofi stepped back and gave the girl his spot.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'notproof'],
            notes: [null,
              'Paragraph 3 tells who came down the street. It does not tell how loud the band was.',
              'Paragraph 2 is before the band came. It does not tell about the sound.',
              'Paragraph 4 shows Kofi helping the girl. It does not tell about the sound.'],
            why: 'Paragraph 3 says Kofi put his hands over his ears. People cover their ears when a sound is very loud. So the band was very loud.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'A parade is going to come down the street.',
              'Kofi and Grandma are going shopping on Main Street.',
              'The people are waiting for a bus to pick them up.',
              'Workers are going to fix the road today.'
            ],
            kinds: [null, 'noclue', 'opposite', 'toofar'],
            notes: [null,
              'Paragraph 1 does not say anything about shopping.',
              'Paragraph 1 says no cars could drive in. So a bus could not come either.',
              'Paragraph 1 says people sat in chairs and kids waved flags. People do not do that to watch road work.'],
            why: 'Paragraph 1 says people sat in chairs on both sides of the road. Kids waved flags, and police kept the cars out. People do that when a parade is coming. So a parade is going to come down the street.',
            chart: { facts: 'People sit in chairs by the road, kids wave flags, and police keep the cars out.', know: 'People line up along a street to watch a parade.', conclusion: 'A parade is going to come down the street.' } }
        ] }
    ],

    /* ───────── Level 2 · FK 2.5 · a library, a city train ───────── */
    2: [
      { title: 'The Big Green Chair', genre: 'story',
        paragraphs: [
          'Paloma sat in a big green chair at the library. She was reading a book about a pig named Hank. Every few pages, she pressed her hand over her mouth so she would not laugh out loud. Her little brother, Wilder, spun around and around in his chair and let out a long sigh.',
          'Then the lights blinked off and on two times. A man at the computers saved his work and put on his coat. Ms. Lark, the librarian, pushed in all the chairs. She turned off the lamps one by one.',
          'Paloma looked down at her book. She still had two chapters to go. She took the book to the desk and gave Ms. Lark her library card.',
          'Ms. Lark smiled and held the door open for them.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 1 that shows the book is funny.',
            para: 1,
            answer: 'Every few pages, she pressed her hand over her mouth so she would not laugh out loud.',
            notes: {
              'Paloma sat in a big green chair at the library.': 'This tells where Paloma sat. It is not a clue about the book.',
              'She was reading a book about a pig named Hank.': 'This tells what the book is about. Look for what Paloma does as she reads.',
              'Her little brother, Wilder, spun around and around in his chair and let out a long sigh.': 'This sentence is about Wilder, not the book.'
            },
            why: 'Paragraph 1 says Paloma pressed her hand over her mouth so she would not laugh out loud. People laugh when something is funny. So the book is funny.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Wilder is bored.',
            answer: 'Her little brother, Wilder, spun around and around in his chair and let out a long sigh.',
            notes: {
              'Every few pages, she pressed her hand over her mouth so she would not laugh out loud.': 'This sentence is about Paloma, not Wilder.',
              'Ms. Lark smiled and held the door open for them.': 'This sentence is about Ms. Lark. Look for what Wilder does.'
            },
            why: 'Paragraph 1 says Wilder spun around and around in his chair. It says he let out a long sigh. People do that when they have nothing to do. So Wilder is bored.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Paloma wants to finish the book at home?',
            choices: [
              'She took the book to the desk and gave Ms. Lark her library card.',
              'Every few pages, she pressed her hand over her mouth so she would not laugh out loud.',
              'She still had two chapters to go.',
              'Paloma looked down at her book.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 shows what Paloma does while she reads. It does not show where she will read next.',
              'Paragraph 3 tells how much of the book is left. It does not show where Paloma will read it.',
              'Paragraph 3 shows Paloma looking at her book. It does not show what she does with it.'],
            why: 'Paragraph 3 says Paloma gave Ms. Lark her library card with the book. You use a library card to take a book home. So Paloma wants to finish the book at home.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 2,
            q: 'Read paragraph 2. What can you infer from the clues in paragraph 2?',
            choices: [
              'The library is going to close soon.',
              'The library is just opening for the day.',
              'A storm made the lights in the library go out.',
              'Ms. Lark is upset with the man at the computers.'
            ],
            kinds: [null, 'opposite', 'toofar', 'noclue'],
            notes: [null,
              'Paragraph 2 says the man put on his coat and Ms. Lark turned off the lamps. People do not do that when a place opens.',
              'Paragraph 2 says the lights blinked and came back on. It does not tell about a storm.',
              'Paragraph 2 does not say Ms. Lark is upset with anyone.'],
            why: 'Paragraph 2 says the lights blinked two times. A man put on his coat. Ms. Lark pushed in the chairs and turned off the lamps. People leave and workers clean up at the end of the day. So the library is going to close soon.',
            chart: { facts: 'The lights blink, a man puts on his coat, and Ms. Lark turns off the lamps.', know: 'People leave and workers clean up when a place is about to close.', conclusion: 'The library is going to close soon.' } }
        ] },

      { title: 'The Window Seat', genre: 'story',
        paragraphs: [
          'Arjun and Aunt Dot sat by a big window on the city train. Arjun pressed his nose against the glass and named every boat on the river.',
          'Arjun looked around at the other passengers. A woman was reading a thick novel. A man in a gray business suit was asleep. A sign on the wall showed a phone and a mouth with a red line through them.',
          '"Look, a giant boat!" shouted Arjun. The man in the gray suit opened one eye and frowned. A girl across the aisle put a finger to her lips. Aunt Dot pointed at the sign.',
          'Arjun slid down low in his seat, and his cheeks turned pink. For the rest of the ride, he whispered every word. At the last station, the man in the gray suit smiled and gave Arjun a thumbs-up.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows talking is not allowed in this train car.',
            para: 2,
            answer: 'A sign on the wall showed a phone and a mouth with a red line through them.',
            notes: {
              'Arjun looked around at the other passengers.': 'This tells what Arjun did. It is not a clue about talking.',
              'A woman was reading a thick novel.': 'This shows the woman is busy with a book. It does not show a rule about talking.',
              'A man in a gray business suit was asleep.': 'This shows the man was sleeping. It does not show a rule about talking.'
            },
            why: 'Paragraph 2 says a sign showed a phone and a mouth with a red line through them. A red line through a picture means no. So talking is not allowed in this train car.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Arjun\'s loud voice woke the man up.',
            answer: 'The man in the gray suit opened one eye and frowned.',
            notes: {
              'A man in a gray business suit was asleep.': 'This shows the man was asleep. Look for what he does after Arjun shouts.',
              '"Look, a giant boat!" shouted Arjun.': 'This shows what Arjun said. It does not show what the man did.',
              'At the last station, the man in the gray suit smiled and gave Arjun a thumbs-up.': 'This happens at the end of the ride, not when Arjun shouts.'
            },
            why: 'Paragraph 2 says the man was asleep. Paragraph 3 says Arjun shouted, and then the man opened one eye and frowned. You open your eyes when you wake up. So Arjun\'s loud voice woke the man up.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Arjun feels embarrassed?',
            choices: [
              'Arjun slid down low in his seat, and his cheeks turned pink.',
              'Arjun pressed his nose against the glass and named every boat on the river.',
              '"Look, a giant boat!" shouted Arjun.',
              'Aunt Dot pointed at the sign.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 1 shows Arjun looking at boats. It does not show that he feels embarrassed.',
              'Paragraph 3 shows what Arjun shouted. It does not show how he felt after.',
              'Paragraph 3 tells what Aunt Dot did. It does not show how Arjun feels.'],
            why: 'Embarrassed means you feel silly in front of other people. Paragraph 4 says Arjun slid down low in his seat. It says his cheeks turned pink. People hide and blush when they feel silly. So Arjun feels embarrassed.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 4,
            q: 'Read paragraph 4. What can you infer from the clues in paragraph 4?',
            choices: [
              'The man is glad that Arjun stayed quiet.',
              'The man is still angry that Arjun shouted.',
              'The man wants Arjun to talk louder.',
              'Arjun and the man are old friends.'
            ],
            kinds: [null, 'opposite', 'opposite', 'noclue'],
            notes: [null,
              'Paragraph 4 says the man smiled and gave Arjun a thumbs-up. People do not do that when they are angry.',
              'Paragraph 4 says Arjun whispered for the rest of the ride. The man gave a thumbs-up for that, not for loud talk.',
              'Paragraph 4 does not say Arjun knows the man.'],
            why: 'Paragraph 4 says Arjun whispered for the rest of the ride. At the end, the man smiled and gave Arjun a thumbs-up. People smile and give a thumbs-up when they like what you did. So the man is glad that Arjun stayed quiet.',
            chart: { facts: 'Arjun whispers the rest of the ride, and the man smiles and gives him a thumbs-up.', know: 'People smile and give a thumbs-up when they like what someone did.', conclusion: 'The man is glad that Arjun stayed quiet.' } }
        ] }
    ],

    /* ───────── Level 3 · FK 3.0 · a school spirit day, the park ───────── */
    3: [
      { title: 'A Strange Friday in Room 12', genre: 'story',
        paragraphs: [
          'Tilda wore her stiff new jeans and her best sweater to school on Friday. When she walked into Room 12, she stopped at the door. Kids sat at their desks in fuzzy slippers and soft pants with stars and cartoon dogs on them. Even Mr. Webb had on a long blue robe, and he was hugging a pillow.',
          'Tilda slid into her seat and kept her eyes on her desk all through math. At lunch, she dug in her bag for her sandwich. Instead, she pulled out a crumpled yellow note. In big letters, it said Friday Is Pajama Day! Tilda groaned and smacked her head.',
          'Mr. Webb gave Tilda a wink. Then he took striped pajama pants out of the class closet and gave them to Tilda. Soon Tilda came back from the bathroom with a big grin.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 1 that shows the kids are dressed for bed.',
            para: 1,
            answer: 'Kids sat at their desks in fuzzy slippers and soft pants with stars and cartoon dogs on them.',
            notes: {
              'Tilda wore her stiff new jeans and her best sweater to school on Friday.': 'This tells what Tilda wore. Look for what the other kids have on.',
              'When she walked into Room 12, she stopped at the door.': 'This tells what Tilda did. It does not show what the kids are wearing.',
              'Even Mr. Webb had on a long blue robe, and he was hugging a pillow.': 'This sentence is about Mr. Webb, not the kids.'
            },
            why: 'Paragraph 1 says the kids wore fuzzy slippers and soft pants with stars and cartoon dogs. People wear slippers and soft, silly pants to bed. So the kids are dressed for bed.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Tilda feels out of place.',
            answer: 'Tilda slid into her seat and kept her eyes on her desk all through math.',
            notes: {
              'When she walked into Room 12, she stopped at the door.': 'This shows Tilda is surprised. Look for how she acts once she sits down.',
              'Tilda groaned and smacked her head.': 'This happens at lunch. It does not show how Tilda feels around the other kids.',
              'Soon Tilda came back from the bathroom with a big grin.': 'This is at the end. It shows Tilda feels happy, not out of place.'
            },
            why: 'Out of place means you feel like you do not fit in. Paragraph 2 says Tilda kept her eyes on her desk all through math. People look down when they feel like they do not fit in. So Tilda feels out of place.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Mr. Webb wants to help Tilda?',
            choices: [
              'Then he took striped pajama pants out of the class closet and gave them to Tilda.',
              'Even Mr. Webb had on a long blue robe, and he was hugging a pillow.',
              'Soon Tilda came back from the bathroom with a big grin.',
              'Kids sat at their desks in fuzzy slippers and soft pants with stars and cartoon dogs on them.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 1 tells what Mr. Webb wore. It does not show him helping Tilda.',
              'Paragraph 3 tells how Tilda looked after. It does not show what Mr. Webb did.',
              'Paragraph 1 tells what the kids wore. It does not show Mr. Webb helping.'],
            why: 'Paragraph 3 says Mr. Webb took pajama pants out of the closet and gave them to Tilda. Now Tilda could dress like the other kids. So Mr. Webb wants to help Tilda.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 2,
            q: 'Read paragraph 2. What can you infer from the clues in paragraph 2?',
            choices: [
              'Tilda forgot that Friday was Pajama Day.',
              'Tilda hurt her head when she smacked it.',
              'Tilda does not like to wear pajamas.',
              'Tilda made the yellow note for the class.'
            ],
            kinds: [null, 'toofar', 'noclue', 'noclue'],
            notes: [null,
              'Paragraph 2 says Tilda groaned and smacked her head. People do that when they remember something, not when they are hurt.',
              'Paragraph 2 does not say how Tilda feels about pajamas.',
              'Paragraph 2 says the note was crumpled in Tilda\'s bag. It does not say she made it.'],
            why: 'Paragraph 2 says Tilda found a crumpled note about Pajama Day in her bag. She groaned and smacked her head. People do that when they forget something important. So Tilda forgot that Friday was Pajama Day.',
            chart: { facts: 'Tilda finds a crumpled Pajama Day note in her bag, groans, and smacks her head.', know: 'People groan and smack their heads when they forget something.', conclusion: 'Tilda forgot that Friday was Pajama Day.' } }
        ] },

      { title: 'Sunday Morning in Elm Park', genre: 'story',
        paragraphs: [
          'Early on Sunday morning, Dario and his mom rode their bikes through Elm Park. Near the pond, workers were taking apart a tall stage. Two men rolled huge black speakers up a ramp and into a truck. Thick electric cords lay in loops on the grass.',
          'The grass in front of the stage was pressed flat, and it was covered with footprints. Paper cups and broken glow sticks were scattered everywhere. Mom shook her head. Then she hopped off her bike and started tossing cups into a trash can.',
          'Dario climbed off his bike and picked up a glow stick that still gave off a faint green light. He stared at the empty stage for a long time and let out a slow sigh. Then he helped Mom fill the trash can with paper cups.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 2 that shows Mom wants to help clean up the park.',
            para: 2,
            answer: 'Then she hopped off her bike and started tossing cups into a trash can.',
            notes: {
              'Mom shook her head.': 'This shows Mom does not like what she sees. It does not show her doing something about it.',
              'Paper cups and broken glow sticks were scattered everywhere.': 'This tells about the mess. It does not show what Mom does.',
              'The grass in front of the stage was pressed flat, and it was covered with footprints.': 'This tells about the grass. It does not show what Mom does.'
            },
            why: 'Paragraph 2 says Mom hopped off her bike and tossed cups into a trash can. People pick up trash when they want a place to be clean. So Mom wants to help clean up the park.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Dario feels a little sad.',
            answer: 'He stared at the empty stage for a long time and let out a slow sigh.',
            notes: {
              'Dario climbed off his bike and picked up a glow stick that still gave off a faint green light.': 'This shows what Dario found. It does not show how he feels.',
              'Then he helped Mom fill the trash can with paper cups.': 'This shows Dario helping. It does not show how he feels.',
              'Mom shook her head.': 'This sentence is about Mom, not Dario.'
            },
            why: 'Paragraph 3 says Dario stared at the empty stage for a long time. It says he let out a slow sigh. People sigh like that when they feel a little sad. So Dario feels a little sad.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that a big crowd was in the park?',
            choices: [
              'The grass in front of the stage was pressed flat, and it was covered with footprints.',
              'Two men rolled huge black speakers up a ramp and into a truck.',
              'Thick electric cords lay in loops on the grass.',
              'Near the pond, workers were taking apart a tall stage.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells about two workers and the speakers. It does not show a crowd.',
              'Paragraph 1 tells about the cords. It does not show how many people came.',
              'Paragraph 1 tells about the workers and the stage. It does not show a crowd.'],
            why: 'Paragraph 2 says the grass was pressed flat and covered with footprints. Lots of feet make grass flat. So a big crowd was in the park.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 1,
            q: 'Read paragraph 1. What can you infer from the clues in paragraph 1?',
            choices: [
              'A band played music in the park.',
              'Workers are building a new stage for a show tonight.',
              'A storm knocked down a stage in the park.',
              'Dario and his mom are going to a concert today.'
            ],
            kinds: [null, 'opposite', 'noclue', 'noclue'],
            notes: [null,
              'Paragraph 1 says workers were taking the stage apart and putting the speakers into a truck. They are not building it.',
              'Paragraph 1 does not tell about a storm. Workers are taking the stage apart on purpose.',
              'Paragraph 1 says Dario and his mom are riding bikes. It does not say they are going to a concert.'],
            why: 'Paragraph 1 says workers were taking apart a stage early in the morning. Men rolled big speakers into a truck. Bands use a stage and big speakers to play music. So a band played music in the park.',
            chart: { facts: 'Early in the morning, workers take apart a stage and load big speakers into a truck.', know: 'Bands play music on a stage with big speakers.', conclusion: 'A band played music in the park.' } }
        ] }
    ],

    /* ───────── Level 4 · FK 3.5 · a science museum, a market ───────── */
    4: [
      { title: 'The Fizz and Pop Show', genre: 'story',
        paragraphs: [
          'Marisol\'s class took a field trip to the science museum. Their first stop was a show called Fizz and Pop. Mr. Tran counted the kids as they walked in. Marisol raced past everyone and plopped down in the very middle of the front row.',
          'A helper walked along the front row and handed each kid a clear plastic poncho. Marisol saw a metal drain in the floor right in front of the stage. Mr. Tran picked up his jacket and moved to a seat in the last row. Then the helper leaned a mop and a bucket against the wall.',
          'At last, a scientist rolled out a cart with ten big bottles of soda and a bag of mint candies. She put on a pair of goggles before she touched the first bottle. "Is everyone ready?" she asked with a grin.',
          'After the show, the class ate lunch on the front steps. Marisol could not stop talking about the show, even with her mouth full of sandwich.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 1 that shows Marisol wants to see the show up close.',
            para: 1,
            answer: 'Marisol raced past everyone and plopped down in the very middle of the front row.',
            notes: {
              'Marisol\'s class took a field trip to the science museum.': 'This tells where the class went. It does not show where Marisol wants to sit.',
              'Their first stop was a show called Fizz and Pop.': 'This tells the name of the show. It is not a clue about Marisol.',
              'Mr. Tran counted the kids as they walked in.': 'This sentence is about Mr. Tran, not Marisol.'
            },
            why: 'Paragraph 1 says Marisol raced past everyone to the very middle of the front row. The front row is the closest to the stage. So Marisol wants to see the show up close.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows the scientist is careful.',
            answer: 'She put on a pair of goggles before she touched the first bottle.',
            notes: {
              'A helper walked along the front row and handed each kid a clear plastic poncho.': 'This is what the helper does. Look for what the scientist does.',
              'At last, a scientist rolled out a cart with ten big bottles of soda and a bag of mint candies.': 'This tells what the scientist brought. It does not show that she is careful.',
              '"Is everyone ready?" she asked with a grin.': 'This shows the scientist is having fun. It does not show that she is careful.'
            },
            why: 'Paragraph 3 says she put on goggles before she touched the first bottle. Goggles keep your eyes safe. People who think about safety are careful. So the scientist is careful.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Marisol enjoyed the show?',
            choices: [
              'Marisol could not stop talking about the show, even with her mouth full of sandwich.',
              'Marisol raced past everyone and plopped down in the very middle of the front row.',
              'After the show, the class ate lunch on the front steps.',
              'At last, a scientist rolled out a cart with ten big bottles of soda and a bag of mint candies.'
            ],
            kinds: [null, 'wrongtime', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 is before the show starts. It does not show how Marisol liked it.',
              'Paragraph 4 tells where the class ate lunch. It does not show how Marisol felt.',
              'Paragraph 3 tells what the scientist brought out. It does not show how Marisol felt.'],
            why: 'Paragraph 4 says Marisol could not stop talking about the show, even while she ate. People keep talking about things they loved. So Marisol enjoyed the show.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 2,
            q: 'Read paragraph 2. What can you infer from the clues in paragraph 2?',
            choices: [
              'The kids in the front row might get wet.',
              'It is going to rain inside the museum.',
              'Mr. Tran wants to sit next to a friend.',
              'The show is over, and the helper is cleaning up.'
            ],
            kinds: [null, 'toofar', 'noclue', 'wrongtime'],
            notes: [null,
              'Rain does not fall inside a building. The ponchos are only for the front row.',
              'Paragraph 2 does not say Mr. Tran has a friend in the last row.',
              'Paragraph 2 happens before the show starts. Nothing has been cleaned up yet.'],
            why: 'Paragraph 2 says the front row got ponchos. A drain is by the stage. Mr. Tran moved to the last row, and the helper brought a mop. Ponchos keep you dry, and a mop cleans up water. So the kids in the front row might get wet.',
            chart: { facts: 'The front row gets ponchos, a drain is by the stage, and Mr. Tran moves to the back.', know: 'People wear ponchos to stay dry, and drains and mops are for water.', conclusion: 'The kids in the front row might get wet.' } }
        ] },

      { title: 'Four O\'Clock at the Market', genre: 'story',
        paragraphs: [
          'Every Saturday, Grandma Ada waited until four o\'clock to walk to the Canal Street Market. The market closed at five. Bella pulled the empty shopping cart behind them. "All the best peaches will be gone," she grumbled, dragging her feet.',
          'When they got there, sellers were already stacking empty crates into their trucks. At the bread stand, a man shouted, "Two loaves for one dollar!" The cheese seller crossed out her prices and wrote new ones that were half as much. Grandma\'s eyes twinkled, and she opened her purse.',
          'At the fruit stand, Mr. Silva pointed to a box of soft, spotty peaches. "These will not keep until next week," he said. "Take the whole box for three dollars." Grandma shook his hand, and Bella lifted the box into the cart.',
          'On the walk home, the cart was so full that Bella had to push it with both hands. That night, the whole kitchen smelled like warm peaches and cinnamon. Bella decided that four o\'clock was not such a bad time to shop after all.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 1 that shows Bella is unhappy about going to the market so late.',
            para: 1,
            answer: '"All the best peaches will be gone," she grumbled, dragging her feet.',
            notes: {
              'Every Saturday, Grandma Ada waited until four o\'clock to walk to the Canal Street Market.': 'This tells when Grandma goes. It does not show how Bella feels.',
              'The market closed at five.': 'This tells when the market closes. It is not a clue about how Bella feels.',
              'Bella pulled the empty shopping cart behind them.': 'This tells what Bella pulled. It does not show how she feels.'
            },
            why: 'Paragraph 1 says Bella grumbled that the best peaches would be gone. She dragged her feet. People grumble and drag their feet when they are unhappy. So Bella is unhappy about going so late.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Grandma bought a lot of food.',
            answer: 'On the walk home, the cart was so full that Bella had to push it with both hands.',
            notes: {
              'Bella pulled the empty shopping cart behind them.': 'This is before they shop. The cart is still empty.',
              'Grandma shook his hand, and Bella lifted the box into the cart.': 'This shows one box going into the cart. Look for how full the cart is on the way home.',
              'Grandma\'s eyes twinkled, and she opened her purse.': 'This shows Grandma is ready to pay. It does not show how much she bought.'
            },
            why: 'Paragraph 4 says the cart was so full that Bella had to push it with both hands. A cart is heavy when it has lots of things in it. So Grandma bought a lot of food.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that the peaches were very ripe?',
            choices: [
              'At the fruit stand, Mr. Silva pointed to a box of soft, spotty peaches.',
              '"All the best peaches will be gone," she grumbled, dragging her feet.',
              'That night, the whole kitchen smelled like warm peaches and cinnamon.',
              'Grandma shook his hand, and Bella lifted the box into the cart.'
            ],
            kinds: [null, 'notproof', 'wrongtime', 'notproof'],
            notes: [null,
              'Paragraph 1 is before Bella sees the peaches. It does not show how ripe they are.',
              'Paragraph 4 is about that night at home. It does not show how ripe the peaches were at the stand.',
              'Paragraph 3 shows Bella putting the box in the cart. It does not show how ripe the peaches were.'],
            why: 'Paragraph 3 says the peaches were soft and spotty. Fruit gets soft and spotty when it is very ripe. So the peaches were very ripe.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 2,
            q: 'Read paragraph 2. What can you infer from the clues in paragraph 2?',
            choices: [
              'Grandma shops late because the food costs less then.',
              'Grandma shops late because she forgets what time it is.',
              'The sellers are angry that Grandma came so late.',
              'Grandma came to help the sellers pack their trucks.'
            ],
            kinds: [null, 'opposite', 'noclue', 'toofar'],
            notes: [null,
              'Paragraph 2 says Grandma\'s eyes twinkled when the prices went down. She came late on purpose.',
              'Paragraph 2 does not say the sellers are angry. They are calling out low prices.',
              'Paragraph 2 says Grandma opened her purse. She came to buy, not to pack.'],
            why: 'Paragraph 2 says the sellers were packing up. The bread man sold two loaves for one dollar. The cheese seller cut her prices in half. Grandma\'s eyes twinkled, and she opened her purse. So Grandma shops late because the food costs less then.',
            chart: { facts: 'Near closing time, the sellers cut their prices, and Grandma happily opens her purse.', know: 'Sellers lower their prices so they can sell their food before they go home.', conclusion: 'Grandma shops late because the food costs less then.' } }
        ] }
    ],

    /* ───────── Level 5 · FK 4.0 · a city bus, the post office ───────── */
    5: [
      { title: 'The Number 14 Bus', genre: 'story',
        paragraphs: [
          'Every Tuesday after school, Anika and Grandpa rode the Number 14 bus to the pool on Harbor Street. Anika always sat by the window so she could count the dogs. That day, the sky was bright blue, and the sidewalks were dry.',
          'When the bus turned onto Harbor Street, Anika pressed her face to the glass. Water was gushing out of a long crack in the middle of the road. Muddy streams ran down both sides of the street and swirled around the tires of parked cars. Two workers in orange vests were setting cones around a deep hole. Their white truck said City Water on the side.',
          'The bus driver groaned and flipped on her blinker. She turned onto a narrow side street that Anika had never seen before. The bus crept along behind a slow garbage truck. Grandpa checked his watch and tapped his foot.',
          'They got to the pool fifteen minutes late. Anika ran straight to the lifeguard. She told him all about the river on Harbor Street.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 3 that shows the bus had to go a different way than usual.',
            para: 3,
            answer: 'She turned onto a narrow side street that Anika had never seen before.',
            notes: {
              'The bus driver groaned and flipped on her blinker.': 'This shows the driver is about to turn. It does not show that the way is new.',
              'The bus crept along behind a slow garbage truck.': 'This shows the bus is going slowly. It does not show that the way is new.',
              'Grandpa checked his watch and tapped his foot.': 'This sentence is about Grandpa, not the way the bus went.'
            },
            why: 'Paragraph 3 says the bus turned onto a street Anika had never seen. She rides this bus each week. If she has never seen the street, the bus does not go that way. So the bus had to go a different way than usual.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Grandpa is worried they will be late.',
            answer: 'Grandpa checked his watch and tapped his foot.',
            notes: {
              'They got to the pool fifteen minutes late.': 'This tells when they got to the pool. It does not show how Grandpa felt on the bus.',
              'The bus crept along behind a slow garbage truck.': 'This tells about the bus. Look for what Grandpa does.',
              'The bus driver groaned and flipped on her blinker.': 'This sentence is about the bus driver, not Grandpa.'
            },
            why: 'Paragraph 3 says Grandpa checked his watch and tapped his foot. People look at the time and tap their feet when they are afraid of being late. So Grandpa is worried they will be late.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that it had not rained that day?',
            choices: [
              'That day, the sky was bright blue, and the sidewalks were dry.',
              'Muddy streams ran down both sides of the street and swirled around the tires of parked cars.',
              'Anika always sat by the window so she could count the dogs.',
              'The bus crept along behind a slow garbage truck.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 2 shows water in the street. It does not show whether it rained.',
              'Paragraph 1 tells where Anika likes to sit. It is not a clue about the weather.',
              'Paragraph 3 tells about the bus. It is not a clue about the weather.'],
            why: 'Paragraph 1 says the sky was bright blue and the sidewalks were dry. After it rains, the sidewalks are wet. So it had not rained that day.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 2,
            q: 'Read paragraph 2. What can you infer from the clues in paragraph 2?',
            choices: [
              'A water pipe under the street broke.',
              'The City Water truck spilled its water.',
              'The workers are washing the street with hoses.',
              'The bus has a flat tire on Harbor Street.'
            ],
            kinds: [null, 'toofar', 'noclue', 'noclue'],
            notes: [null,
              'Paragraph 2 says the water gushed out of a crack in the road. It did not come from the truck.',
              'Paragraph 2 does not say anything about hoses. The water comes out of a crack in the road.',
              'Paragraph 2 does not say anything is wrong with the bus.'],
            why: 'Paragraph 2 says water gushed out of a crack in the road. Workers put cones around a hole, and their truck said City Water. Pipes under the street carry water to homes. So a water pipe under the street broke.',
            chart: { facts: 'Water gushes out of a crack in the road, and City Water workers are at a hole.', know: 'Pipes under the street carry water to homes and stores.', conclusion: 'A water pipe under the street broke.' } }
        ] },

      { title: 'A Box at the Post Office', genre: 'story',
        paragraphs: [
          'The line at the post office went all the way back to the door. Tamsin held Mom\'s spot in line while Mom filled out a form at the side table. Tamsin had already read every poster on the wall twice, and she knew all the stamp prices by heart.',
          'Then Tamsin heard a tiny sound coming from behind the counter: peep, peep, peep. A worker carried out a flat cardboard box and set it gently on the counter. Rows of small round holes were punched in every side of the box. Something inside scratched and shuffled, and the peeping grew louder.',
          'A moment later, a woman in muddy boots and a straw hat hurried through the door. "Did my package come?" she asked. The worker smiled and slid the noisy box across the counter. The woman lifted one flap a tiny bit, peeked inside and laughed.',
          'The woman carried the box out the door in both arms, holding it as flat and still as a tray of soup. Tamsin tugged on Mom\'s sleeve and asked if they could get a box like that someday. Mom laughed and said they lived on the ninth floor.'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 3 that shows the woman has been working outside.',
            para: 3,
            answer: 'A moment later, a woman in muddy boots and a straw hat hurried through the door.',
            notes: {
              '"Did my package come?" she asked.': 'This shows the woman is waiting for a package. It does not show where she has been.',
              'The worker smiled and slid the noisy box across the counter.': 'This sentence is about the worker, not the woman.',
              'The woman lifted one flap a tiny bit, peeked inside and laughed.': 'This shows the woman is happy. It does not show where she has been.'
            },
            why: 'Paragraph 3 says the woman wore muddy boots and a straw hat. Boots get muddy outside, and a straw hat keeps off the sun. So the woman has been working outside.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows the woman is being careful with the box.',
            answer: 'The woman carried the box out the door in both arms, holding it as flat and still as a tray of soup.',
            notes: {
              'A worker carried out a flat cardboard box and set it gently on the counter.': 'This is what the worker does. Look for what the woman does.',
              'The woman lifted one flap a tiny bit, peeked inside and laughed.': 'This shows the woman peeking in the box. Look for how she carries it.'
            },
            why: 'Paragraph 4 says the woman held the box in both arms, as flat and still as a tray of soup. A tray of soup spills if you tip it. So the woman is being careful with the box.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Tamsin had been waiting in line for a long time?',
            choices: [
              'Tamsin had already read every poster on the wall twice, and she knew all the stamp prices by heart.',
              'Tamsin held Mom\'s spot in line while Mom filled out a form at the side table.',
              'Then Tamsin heard a tiny sound coming from behind the counter: peep, peep, peep.',
              'Tamsin tugged on Mom\'s sleeve and asked if they could get a box like that someday.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongtime'],
            notes: [null,
              'Paragraph 1 tells what Tamsin was doing for Mom. It does not show how long she waited.',
              'Paragraph 2 tells about a sound. It does not show how long Tamsin waited.',
              'Paragraph 4 is at the end, after the woman leaves. It does not show how long Tamsin waited.'],
            why: 'Paragraph 1 says Tamsin read every poster on the wall two times. She also learned all the stamp prices by heart. That takes a long time. So Tamsin had been waiting in line for a long time.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 2,
            q: 'Read paragraph 2. What can you infer from the clues in paragraph 2?',
            choices: [
              'Baby chicks are inside the box.',
              'A toy that makes bird sounds is inside the box.',
              'The box is empty, and the worker is playing a joke.',
              'The worker is going to throw the box away.'
            ],
            kinds: [null, 'toofar', 'opposite', 'noclue'],
            notes: [null,
              'Paragraph 2 says something inside scratched and moved, and the box has holes for air. A toy does not need air.',
              'Paragraph 2 says something inside scratched and moved. The box is not empty.',
              'Paragraph 2 does not say the worker is going to throw the box away.'],
            why: 'Paragraph 2 says the box went peep, peep, peep. Something inside scratched and moved, and the box had holes in every side. Baby chicks peep, and living things need air. So baby chicks are inside the box.',
            chart: { facts: 'The box peeps, something inside scratches, and the box has holes in every side.', know: 'Baby chicks peep, and animals in a box need holes for air.', conclusion: 'Baby chicks are inside the box.' } }
        ] }
    ],

    /* ───────── Level 6 · FK 4.5 · a neighborhood street, an art museum ───────── */
    6: [
      { title: 'Lights on Emmett\'s Street', genre: 'story',
        paragraphs: [
          'On Saturday morning, Emmett looked out his window. His quiet street did not look quiet at all. Huge white trucks lined both curbs, and thick black cables snaked along the sidewalk. Tall lights on metal poles were shining at the bakery, even though the sun was already up.',
          'The people on the street looked strange, too. A man strolled past the bakery in a long black coat and a tall black hat. A woman in a long dress and a bonnet rode by in a carriage pulled by two brown horses. Even the street signs had been covered with old wooden ones.',
          'Then a woman with a megaphone shouted, "Quiet, please!" The whole street went silent. A man rolled a huge camera along a little metal track beside the carriage. The man in the tall hat tipped his hat to the woman in the bonnet, and she waved back.',
          'Emmett ran downstairs to get a closer look. Soon, white flakes were swirling down over the bakery, even though it was the middle of July. Emmett\'s neighbor, Mrs. Okafor, had rushed out onto her steps in her bathrobe and fuzzy slippers. A crowd of neighbors stood behind a yellow rope at the end of the block.',
          'By dinner, the trucks were gone. Emmett\'s street was quiet again.'
        ],
        items: [
          { id: 'C01', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 4 that shows the snow is not real.',
            para: 4,
            answer: 'Soon, white flakes were swirling down over the bakery, even though it was the middle of July.',
            notes: {
              'Emmett ran downstairs to get a closer look.': 'This tells what Emmett did. It does not show anything about the snow.',
              'Emmett\'s neighbor, Mrs. Okafor, had rushed out onto her steps in her bathrobe and fuzzy slippers.': 'This sentence is about Mrs. Okafor, not the snow.',
              'A crowd of neighbors stood behind a yellow rope at the end of the block.': 'This tells where the neighbors stood. It is not a clue about the snow.'
            },
            why: 'Paragraph 4 says white flakes fell in the middle of July. July is a hot summer month. Snow does not fall when it is hot. So the snow is not real.' },
          { id: 'C02', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Mrs. Okafor did not want to miss anything.',
            answer: 'Emmett\'s neighbor, Mrs. Okafor, had rushed out onto her steps in her bathrobe and fuzzy slippers.',
            notes: {
              'A crowd of neighbors stood behind a yellow rope at the end of the block.': 'This tells about the other neighbors. Look for what Mrs. Okafor did.',
              'Emmett ran downstairs to get a closer look.': 'This sentence is about Emmett, not Mrs. Okafor.'
            },
            why: 'Paragraph 4 says Mrs. Okafor rushed out in her robe and slippers. She did not stop to get dressed. People hurry like that so they will not miss a thing. So Mrs. Okafor did not want to miss anything.' },
          { id: 'C03', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that the people on the street are dressed like people from long ago?',
            choices: [
              'A woman in a long dress and a bonnet rode by in a carriage pulled by two brown horses.',
              'Tall lights on metal poles were shining at the bakery, even though the sun was already up.',
              'Huge white trucks lined both curbs, and thick black cables snaked along the sidewalk.',
              'The whole street went silent.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells about the lights. It does not show what anyone is wearing.',
              'Paragraph 1 tells about the trucks and cables. It does not show what anyone is wearing.',
              'Paragraph 3 shows the street got quiet. It does not show what anyone is wearing.'],
            why: 'Paragraph 2 says a woman wore a long dress and a bonnet. She rode in a carriage pulled by horses. Long ago, people dressed like that and rode behind horses. So the people are dressed like people from long ago.' },
          { id: 'C04', type: 'mc', skill: 'Making inferences', para: 3,
            q: 'Read paragraph 3. What can you infer from the clues in paragraph 3?',
            choices: [
              'A movie is being filmed on Emmett\'s street.',
              'A horse show is about to start on Emmett\'s street.',
              'The woman with the megaphone is a teacher on a field trip.',
              'The man in the tall hat is lost and needs help.'
            ],
            kinds: [null, 'toofar', 'noclue', 'noclue'],
            notes: [null,
              'Paragraph 3 shows a camera rolling next to the carriage. That is not what happens at a horse show.',
              'Paragraph 3 does not say anything about a teacher or a class.',
              'Paragraph 3 says the man tipped his hat and the woman waved back. He is not asking for help.'],
            why: 'Paragraph 3 says a woman shouted for quiet. A man rolled a big camera next to the people. You need a big camera and a quiet street to make a movie. So a movie is being filmed on Emmett\'s street.',
            chart: { facts: 'A woman yells for quiet, and a man rolls a big camera beside the carriage.', know: 'Movies are made with big cameras, and the crew needs quiet to film.', conclusion: 'A movie is being filmed on Emmett\'s street.' } }
        ] },

      { title: 'The Harbor Painting', genre: 'story',
        paragraphs: [
          'On a rainy Sunday afternoon, Winnie and Aunt Clara visited the city art museum. In the very first room hung a huge new painting of a harbor. Little sailboats bobbed on a blue sea, and a row of tiny houses lined the shore. A card beside it said the painting had come to the museum only two days earlier.',
          'The longer Winnie stared, the stranger the picture looked. The sun sat near the bottom edge, in a thin strip of sky. Every sailboat\'s mast pointed down toward the floor. Winnie had to tip her head all the way over to read the painter\'s name in the corner.',
          'Winnie tugged Aunt Clara\'s sleeve and pointed at the sun. Aunt Clara looked at the painting, then bent over and peeked at it between her knees. When she stood up, her eyes were sparkling, and she marched straight over to the guard beside the doorway.',
          'At first, the guard just shrugged. Then he squinted at the painting for a long time. Suddenly, his eyebrows shot up, and he hurried off to find his boss. Ten minutes later, two workers in white gloves lifted the painting off the wall.',
          'The next Sunday, Winnie and Aunt Clara returned. The sun now glowed at the top of the harbor painting. Beside it hung a new little sign that said, "Special thanks to a sharp-eyed young visitor named Winnie."'
        ],
        items: [
          { id: 'C05', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in paragraph 4 that shows the guard finally saw the problem.',
            para: 4,
            answer: 'Suddenly, his eyebrows shot up, and he hurried off to find his boss.',
            notes: {
              'At first, the guard just shrugged.': 'This shows the guard did not see the problem yet.',
              'Then he squinted at the painting for a long time.': 'This shows the guard looking hard. It does not show that he saw the problem yet.',
              'Ten minutes later, two workers in white gloves lifted the painting off the wall.': 'This is what the workers did. Look for what the guard did.'
            },
            why: 'Paragraph 4 says the guard\'s eyebrows shot up, and he hurried to find his boss. Eyebrows shoot up when you are surprised. People hurry to get help when they see a problem. So the guard finally saw the problem.' },
          { id: 'C06', type: 'hot', skill: 'Finding clues',
            q: 'Click on the sentence in the passage that BEST shows Aunt Clara is excited about what Winnie found.',
            answer: 'When she stood up, her eyes were sparkling, and she marched straight over to the guard beside the doorway.',
            notes: {
              'Aunt Clara looked at the painting, then bent over and peeked at it between her knees.': 'This shows how Aunt Clara looked at the painting. It does not show how she feels.',
              'Winnie tugged Aunt Clara\'s sleeve and pointed at the sun.': 'This is what Winnie did, not Aunt Clara.'
            },
            why: 'Paragraph 3 says Aunt Clara\'s eyes sparkled, and she marched right to the guard. Eyes sparkle when you feel excited. She could not wait to tell. So Aunt Clara is excited about what Winnie found.' },
          { id: 'C07', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST shows that Winnie helped the museum?',
            choices: [
              'Beside it hung a new little sign that said, "Special thanks to a sharp-eyed young visitor named Winnie."',
              'The next Sunday, Winnie and Aunt Clara returned.',
              'On a rainy Sunday afternoon, Winnie and Aunt Clara visited the city art museum.',
              'In the very first room hung a huge new painting of a harbor.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 5 tells when they came back. It does not show Winnie helping.',
              'Paragraph 1 tells when they first went to the museum. It does not show Winnie helping.',
              'Paragraph 1 tells about the painting. It does not show Winnie helping.'],
            why: 'Paragraph 5 says the new sign gave special thanks to a visitor named Winnie. People say thanks when someone helps them. So Winnie helped the museum.' },
          { id: 'C08', type: 'mc', skill: 'Making inferences', para: 2,
            q: 'Read paragraph 2. What can you infer from the clues in paragraph 2?',
            choices: [
              'The painting is hanging upside down.',
              'The painter did not know how to paint boats.',
              'Winnie needs new glasses to see the painting.',
              'The harbor in the painting is in the middle of the night.'
            ],
            kinds: [null, 'toofar', 'noclue', 'opposite'],
            notes: [null,
              'Paragraph 2 does not say the boats were painted badly. They are just pointing the wrong way.',
              'Paragraph 2 does not say Winnie has trouble seeing.',
              'Paragraph 2 says there is a sun in the sky. It is not night.'],
            why: 'Paragraph 2 says the sun and the sky were at the bottom. The masts pointed down, and Winnie had to tip her head to read the name. In a picture, the sky is at the top, and masts point up. So the painting is hanging upside down.',
            chart: { facts: 'The sun and sky are at the bottom, the masts point down, and the name is hard to read.', know: 'In a picture, the sky is at the top, and the masts of boats point up.', conclusion: 'The painting is hanging upside down.' } }
        ] }
    ]
  }
};
