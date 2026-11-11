/* Meet Inference, version 2 of Levels 1–6 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-meet.js; try 2 gets these. Same question slots as version 1.
   Level 1 written 11/10; Levels 2–6 added 11/11 (home, family and neighbors: new premises, names and answers). */
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
    ],

    /* ── LEVEL 2 · FK 2.5 · version 2 ───────────────── */
    2: [
      { title: 'Cal on the Top Step',
        genre: 'story',
        paragraphs: [
          'On Monday morning, Cal woke up late. He gulped his milk and hurried out the door with one shoe untied. Mom left for work a few minutes later.',
          'After school, Cal climbed the stairs to his apartment. He reached into his jacket pocket, and then he checked his other pocket. He dug through every part of his backpack. Cal turned the doorknob, but the door would not open.',
          'Cal sat down on the top step and rested his chin in his hands. Mom would not be home until five o\'clock.',
          'Then the door across the hall opened. Mrs. Okoro lived there. She held up a shiny key and smiled. "Your mom gave me this key, just in case," she said. When Cal got inside, he looked at the hook by the door and groaned.'
        ],
        items: [
          { id: 'M01',
            type: 'mc',
            skill: 'Making inferences',
            q: 'What can you infer about Cal?',
            choices: [
              'Cal left his key at home that morning.',
              'Cal lost his key on the school bus ride.',
              'Cal did not want to go inside after school.',
              'Mrs. Okoro took Cal\'s key out of his backpack.'
            ],
            notes: [
              null,
              'Paragraph 4 gives a clue that the key was on the hook at home. It was not lost on the bus.',
              'Paragraph 2 says Cal turned the doorknob. He did want to go inside.',
              'The passage gives no clue that Mrs. Okoro took his key.'
            ],
            why: 'Paragraph 2 says the door would not open. Paragraph 4 says Cal looked at the hook by the door and groaned. Many families hang their keys on a hook by the door. So Cal left his key at home that morning.',
            chart: { facts: 'The door is locked, and Cal groans when he sees the hook by the door.',
              know: 'Many families hang their keys on a hook by the door.',
              conclusion: 'Cal left his key at home that morning.' } },
          { id: 'M02',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Cal was looking for his key?',
            choices: [
              'He dug through every part of his backpack.',
              'Cal turned the doorknob, but the door would not open.',
              'Mom left for work a few minutes later.',
              'Mom would not be home until five o\'clock.'
            ],
            notes: [
              null,
              'This shows the door was locked. It does not show Cal looking for something.',
              'This tells when Mom left. It does not show Cal looking for his key.',
              'This tells when Mom gets home. It does not show Cal looking for his key.'
            ],
            why: 'Paragraph 2 says Cal dug through every part of his backpack. People dig through a bag when they look for something. So this sentence proves it the most.' },
          { id: 'M03',
            type: 'mc',
            skill: 'Inference or fact',
            q: 'Which sentence is an inference about Mrs. Okoro, not a fact from the passage?',
            choices: [
              'Mrs. Okoro is a neighbor Cal\'s mom trusts.',
              'Mrs. Okoro lived across the hall from Cal.',
              'Mrs. Okoro held up a shiny key.',
              'Mrs. Okoro smiled when she held up the key.'
            ],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says that Mom trusts Mrs. Okoro. But paragraph 4 says Mom gave her a key to their home. People only give a key to someone they trust. So Mom trusts Mrs. Okoro.' },
          { id: 'M04',
            type: 'mc',
            skill: 'Things we know',
            q: 'What do you already know that helps you infer that Cal left his key at home?',
            choices: [
              'It is easy to forget things when you rush.',
              'Most school buses are big and yellow.',
              'A backpack can hold books, pencils, and a snack.',
              'Neighbors can live right across the hall.'
            ],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 1 says Cal woke up late and hurried out with one shoe untied. We know it is easy to forget things when you rush. That helps us infer that Cal left his key at home.' }
        ] },
      { title: 'Wash Day with Dad', genre: 'story',
        paragraphs: [
          'On Saturday, Zara helped Dad wash the family\'s clothes. First, Dad dropped in his five white work shirts. Then Zara scooped up a pile of towels from her bedroom floor and tossed them into the washer, too. Dad poured in the soap and pushed the button.',
          'An hour later, Dad pulled out the wet laundry. He held up one shirt, and his mouth fell open. Every one of his white shirts had turned pink!',
          'Zara peeked inside the washer. One of her new red socks was stuck to the side. She bit her lip and quickly hid the sock behind her back.',
          'Dad looked at the pink shirts, and then he looked at Zara. After a long moment, he started to laugh. "Well, I always wanted a pink shirt," he said with a chuckle.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Dad\'s shirts?',
            choices: ['Zara\'s red sock made Dad\'s white shirts pink.', 'Dad bought five new pink shirts last week.', 'Zara colored Dad\'s shirts with a pink marker.', 'Dad\'s shirts got dirty from the bedroom floor.'],
            notes: [null, 'Paragraph 1 says Dad put white shirts in the washer. They were not pink before.', 'The passage gives no clue about a marker.', 'Too far. The shirts came out pink, not dirty. The clues point to something else.'],
            why: 'Paragraph 1 says Dad\'s shirts were white. Paragraph 2 says they came out pink. Paragraph 3 says a red sock was stuck inside the washer. Red color can come out of wet cloth. So Zara\'s red sock made Dad\'s shirts pink.',
            chart: { facts: 'White shirts went in the wash, and they came out pink next to a red sock.', know: 'Red color can come out of wet cloth.', conclusion: 'Zara\'s red sock made Dad\'s white shirts pink.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Dad was surprised?',
            choices: ['He held up one shirt, and his mouth fell open.', 'First, Dad dropped in his five white work shirts.', 'Dad poured in the soap and pushed the button.', 'After a long moment, he started to laugh.'],
            notes: [null, 'This tells what Dad put in the washer. It does not show how he felt.', 'This tells how Dad started the wash. It does not show that he was surprised.', 'This shows Dad was not mad. It does not show that he was surprised.'],
            why: 'Paragraph 2 says Dad\'s mouth fell open when he held up a shirt. A mouth can fall open when you are surprised. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Zara, not a fact from the passage?',
            choices: ['Zara is worried that she is in trouble.', 'Zara put a pile of towels in the washer.', 'Zara peeked inside the washer.', 'Zara hid the red sock behind her back.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Zara feels. But paragraph 3 says she bit her lip. She hid the sock behind her back. People hide things when they think they are in trouble. So Zara is worried that she is in trouble.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that the red sock made the shirts pink?',
            choices: ['Red and white mixed together make pink.', 'Towels help you dry off after a bath.', 'A washer has a button that starts it.', 'Socks keep your feet warm inside your shoes.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 3 says a red sock was in the washer with the white shirts. We know red and white mixed together make pink. That helps us infer that the red sock made the shirts pink.' }
        ] }
    ],

    /* ── LEVEL 3 · FK 3.0 · version 2 ───────────────── */
    3: [
      { title: 'Bubbles on the Kitchen Floor', genre: 'story',
        paragraphs: [
          'After dinner, Dad went out to the porch to call Uncle Joe. Clara sat at the kitchen table with her math book. Her little brother, Rudy, looked at the dirty plates by the sink. "I can do the dishes all by myself," he said.',
          'Rudy loaded the plates into the dishwasher. Then he grabbed the bottle of soap that Dad used to wash pots by hand. He squeezed it over the little soap cup and pressed the start button. Up on the shelf, the box of dishwasher soap stayed closed.',
          'A few minutes later, Clara heard a swishing sound. White bubbles were pouring out from under the dishwasher door! A foamy puddle crept toward her socks.',
          'Rudy\'s eyes got big. The bottle in his hand was almost empty. Dad rushed in and shut off the dishwasher. Rudy stared down at his feet. "I just wanted to do a big kid job," he said in a tiny voice. Dad sighed and handed him a towel.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Rudy?',
            choices: ['Rudy used the wrong kind of soap in the dishwasher.', 'Rudy forgot to put any soap in the dishwasher.', 'Rudy wanted Clara to wash all the dishes for him.', 'Rudy broke the dishwasher on purpose to skip his chores.'],
            notes: [null, 'Paragraph 2 says Rudy squeezed soap into the little cup. He did not forget it.', 'Paragraph 1 says Rudy wanted to do the dishes all by himself. He did not want Clara to do them.', 'Too far. Nothing in the passage shows that Rudy wanted to break it.'],
            why: 'Paragraph 2 says Rudy used the soap Dad uses to wash pots by hand. It says the box of dishwasher soap stayed closed. Different jobs need different kinds of soap. So Rudy used the wrong kind of soap.',
            chart: { facts: 'Rudy used the soap for washing pots by hand, and the dishwasher soap box stayed closed.', know: 'Different jobs need different kinds of soap.', conclusion: 'Rudy used the wrong kind of soap in the dishwasher.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Rudy used too much soap?',
            choices: ['The bottle in his hand was almost empty.', 'Rudy loaded the plates into the dishwasher.', 'A few minutes later, Clara heard a swishing sound.', 'Dad rushed in and shut off the dishwasher.'],
            notes: [null, 'This tells what Rudy did with the plates. It does not show how much soap he used.', 'This tells what Clara heard. It does not show how much soap Rudy used.', 'This tells what Dad did. It is about someone else.'],
            why: 'Paragraph 4 says the bottle in Rudy\'s hand was almost empty. A bottle gets empty when you use a lot. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Rudy, not a fact from the passage?',
            choices: ['Rudy feels bad about the mess he made.', 'Rudy said he could do the dishes by himself.', 'Rudy pressed the start button on the dishwasher.', 'Rudy stared down at his feet.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Rudy feels. But paragraph 4 says he stared down at his feet. He spoke in a tiny voice. People act this way when they feel bad. So Rudy feels bad about the mess.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that the soap made the bubbles?',
            choices: ['Soap makes lots of bubbles when it mixes with water.', 'A mop or a towel can wipe up a wet floor.', 'Math homework can take a long time to finish at night.', 'Little kids like to try big kid jobs.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 3 says white bubbles poured out. We know soap makes lots of bubbles when it mixes with water. That helps us infer that the soap made the bubbles.' }
        ] },
      { title: 'Uncle Gil Comes to Visit',
        genre: 'story',
        paragraphs: [
          'On Sunday, Uncle Gil came to visit Darby and her mom. He sat down on the couch. Right away, Pepita, the fluffy gray cat, jumped into his lap and purred loudly.',
          'A few minutes later, Uncle Gil\'s eyes turned red and watery. He sneezed once, then twice, and then five times in a row. He set Pepita on the floor and brushed the gray fur off his pants.',
          'Darby picked up Pepita and carried her to the bedroom. She shut the door tight. Then she brought Uncle Gil a cool, wet cloth for his eyes.',
          'After a while, Uncle Gil went out to the porch for some fresh air. When he came back in, his eyes were clear, and he had stopped sneezing. "Thank you, Darby," he said. "Next time, let\'s meet at the park."'
        ],
        items: [
          { id: 'M05',
            type: 'mc',
            skill: 'Making inferences',
            q: 'What can you infer about Uncle Gil?',
            choices: [
              'Uncle Gil is allergic to cats.',
              'Uncle Gil has a bad cold that will last all week.',
              'Uncle Gil never wants to see Darby again.',
              'Uncle Gil got dust from the couch in his eyes.'
            ],
            notes: [
              null,
              'Paragraph 4 says Uncle Gil stopped sneezing after he went outside. A bad cold does not go away that fast.',
              'Paragraph 4 says Uncle Gil wants to meet Darby at the park next time. The clues show the opposite.',
              'The passage gives no clue about dust. The clues point to the cat.'
            ],
            chart: { facts: 'Uncle Gil sneezes and his eyes turn red when the cat is close, and he feels better outside.',
              know: 'Some people sneeze and get red eyes when they are near cats.',
              conclusion: 'Uncle Gil is allergic to cats.' },
            why: 'Paragraph 2 says Uncle Gil sneezed. His eyes turned red. This was right after the cat came close. Paragraph 4 says he felt better outside. Some people sneeze and get red eyes near cats. So Uncle Gil is allergic to cats.' },
          { id: 'M06',
            type: 'mc',
            skill: 'Supporting detail',
            evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Pepita liked Uncle Gil?',
            choices: [
              'Right away, Pepita, the fluffy gray cat, jumped into his lap and purred loudly.',
              'On Sunday, Uncle Gil came to visit Darby and her mom.',
              'He set Pepita on the floor and brushed the gray fur off his pants.',
              'Darby picked up Pepita and carried her to the bedroom.'
            ],
            notes: [
              null,
              'This tells when Uncle Gil came. It does not show how Pepita felt.',
              'This tells what Uncle Gil did. It does not show how Pepita felt about him.',
              'This tells what Darby did. It does not show how Pepita felt about Uncle Gil.'
            ],
            why: 'Paragraph 1 says Pepita jumped into Uncle Gil\'s lap right away. A cat goes to a person it likes. So this sentence proves it the most.' },
          { id: 'M07',
            type: 'mc',
            skill: 'Inference or fact',
            q: 'Which sentence is an inference about Darby, not a fact from the passage?',
            choices: [
              'Darby wants to help Uncle Gil feel better.',
              'Darby carried Pepita to the bedroom.',
              'Darby shut the bedroom door tight.',
              'Darby brought Uncle Gil a wet cloth.'
            ],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Darby did these things. But paragraph 3 says she took Pepita away. She got Uncle Gil a cool cloth. So Darby wants to help Uncle Gil feel better.' },
          { id: 'M08',
            type: 'mc',
            skill: 'Things we know',
            q: 'What do you already know that helps you infer that Pepita liked Uncle Gil?',
            choices: [
              'Cats purr when they feel happy.',
              'A couch is a soft place to sit with your family.',
              'A porch is a good place to get some fresh air.',
              'A wet cloth can feel cool on a warm day.'
            ],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 1 says Pepita jumped into Uncle Gil\'s lap and purred loudly. We know cats purr when they feel happy. That helps us infer that Pepita liked Uncle Gil.' }
        ] }
    ],

    /* ── LEVEL 4 · FK 3.5 · version 2 ───────────────── */
    4: [
      { title: 'Zucchini on the Front Step', genre: 'story',
        paragraphs: [
          'All summer, Mrs. Vance worked in the big garden behind her house across the street. Her zucchini plants grew so huge that their leaves hung over the fence. Every time Henry walked by, he saw more long green squash under the leaves.',
          'One Monday morning, Henry opened his front door and almost tripped over a paper bag. Inside were four fat zucchini. On Tuesday, there were five. On Wednesday, another bag sat on the step, with bits of dirt still stuck to each one.',
          'Henry\'s dad scratched his head. "We made zucchini bread, zucchini soup, and zucchini pizza," he groaned. "What can we make next?"',
          'On Thursday, Henry woke up before the sun and peeked out the front window. The bag was already there. Muddy boot prints led from the street to the step. Across the street, a pair of green boots sat on Mrs. Vance\'s front porch. They were caked with fresh mud.',
          'Later that day, Henry took a warm slice of zucchini bread across the street. Mrs. Vance wiped her hands on her apron and took a big bite. "Mmm," she said, and she gave Henry a wink.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Mrs. Vance?',
            choices: ['Mrs. Vance is the one leaving the zucchini on Henry\'s step.', 'Mrs. Vance buys all of her zucchini at the store each week.', 'Mrs. Vance wants Henry and his dad to stay out of her garden.', 'Mrs. Vance does not like the taste of zucchini bread at all.'],
            notes: [null, 'Paragraph 1 says Mrs. Vance grows zucchini in her own garden. She does not need to buy it.', 'The passage gives no clue that Mrs. Vance wants them to stay away.', 'Paragraph 5 says Mrs. Vance took a big bite and said "Mmm." The clues show the opposite.'],
            why: 'Paragraph 1 says Mrs. Vance grows huge zucchini plants. Paragraph 4 says her boots are caked with fresh mud. Paragraph 5 says she winks at Henry. People who grow lots of food often share it. So Mrs. Vance is the one leaving the zucchini.',
            chart: { facts: 'Mrs. Vance grows lots of zucchini, and her boots on the porch are muddy.', know: 'People who grow lots of food often share it with neighbors.', conclusion: 'Mrs. Vance is the one leaving the zucchini on Henry\'s step.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Henry\'s family has more zucchini than they need?',
            choices: ['"We made zucchini bread, zucchini soup, and zucchini pizza," he groaned.', 'Every time Henry walked by, he saw more long green squash under the leaves.', 'One Monday morning, Henry opened his front door and almost tripped over a paper bag.', 'Later that day, Henry took a warm slice of zucchini bread across the street.'],
            notes: [null, 'This is about Mrs. Vance\'s garden. It does not show that Henry\'s family has too much.', 'This tells about the first bag. It does not show that the family has too much.', 'This tells where Henry took the bread. It does not show that the family has too much.'],
            why: 'Paragraph 3 says Dad already made three things with zucchini, and he groaned. People groan when they have too much of something. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Henry, not a fact from the passage?',
            choices: ['Henry wants to find out who leaves the bags.', 'Henry almost tripped over a bag on Monday.', 'Henry peeked out of the front window.', 'Henry took a slice of bread across the street.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says what Henry wants. But paragraph 4 says he woke up before the sun to peek out the window. He saw the boot prints on the walk. People do that when they want to catch someone. So Henry wants to find out who leaves the bags.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Mrs. Vance left the zucchini?',
            choices: ['Muddy boots leave muddy prints where people walk.', 'Zucchini bread is a sweet and tasty treat.', 'Paper bags can carry food home from the store.', 'An apron keeps your clothes clean when you cook or bake.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 4 says muddy boot prints led to the step. Mrs. Vance\'s boots were caked with fresh mud. We know muddy boots leave muddy prints. That helps us infer that Mrs. Vance left the zucchini.' }
        ] },
      { title: 'The Notepad at Breakfast', genre: 'story',
        paragraphs: [
          'On Saturday night, Rae went to watch her big sister\'s basketball game. The gym was packed and loud. Rae waved a giant foam finger, and every time her sister made a basket, Rae jumped up and yelled as loud as she could. The game was so close that she screamed until the very last second.',
          'On Sunday morning, Rae shuffled into the kitchen in her pajamas. When Mom said good morning, Rae opened her mouth, but only a tiny, scratchy squeak came out. She grabbed the notepad from the fridge and wrote, "Pancakes, please?"',
          'Mom set a mug of warm water with honey and lemon in front of her. "Take small sips," Mom said. "And please, no shouting today." Rae nodded and held the mug with both hands.',
          'Then her little brother, Pablo, ran in and asked who won the game. Rae did not say a word. She just grinned, pumped both fists in the air, and danced in a circle around the kitchen table.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Rae?',
            choices: ['Rae lost her voice from yelling at the game.', 'Rae is too sleepy to talk to anyone this morning.', 'Rae is angry at Mom and will not talk to her.', 'Rae has a bad cold and must stay in bed today.'],
            notes: [null, 'Too far. Being sleepy does not make your voice squeak.', 'Paragraph 3 says Rae nodded at Mom and held the mug. She is not angry.', 'The passage gives no clue about a cold. Rae is up in the kitchen, not in bed.'],
            why: 'Paragraph 1 says Rae yelled as loud as she could at the game. Paragraph 2 says only a squeak came out, so she wrote a note. Yelling for a long time can hurt your voice. So Rae lost her voice from yelling at the game.',
            chart: { facts: 'Rae yelled all through the game, and the next day only a squeak comes out.', know: 'Yelling for a long time can hurt your voice.', conclusion: 'Rae lost her voice from yelling at the game.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Rae\'s sister\'s team won the game?',
            choices: ['She just grinned, pumped both fists in the air, and danced in a circle around the kitchen table.', 'Rae waved a giant foam finger, and every time her sister made a basket, Rae jumped up and yelled as loud as she could.', 'Then her little brother, Pablo, ran in and asked who won the game.', 'Rae nodded and held the mug with both hands.'],
            notes: [null, 'This tells what Rae did during the game. It does not show who won.', 'This tells what Pablo asked. It does not show who won.', 'This tells what Rae did with the mug. It does not show who won.'],
            why: 'Paragraph 4 says Pablo asked who won. Rae answered by grinning, pumping her fists, and dancing. That shows good news. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Mom, not a fact from the passage?',
            choices: ['Mom wants Rae\'s throat to feel better.', 'Mom said good morning to Rae in the kitchen.', 'Mom set a mug of warm water in front of Rae.', 'Mom told Rae to take small sips.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says why Mom made the drink. But paragraph 3 says Mom gave Rae warm water with honey and lemon. She said no shouting today. People drink warm honey water when their throat hurts. So Mom wants Rae\'s throat to feel better.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Rae\'s sister\'s team won the game?',
            choices: ['People cheer and dance when their team wins.', 'Pancakes are a warm and tasty breakfast.', 'A notepad on the fridge is good for writing short notes.', 'Big gyms can hold lots of people at once.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 4 says Rae pumped her fists and danced when Pablo asked who won. We know people cheer and dance when their team wins. That helps us infer that her sister\'s team won.' }
        ] }
    ],

    /* ── LEVEL 5 · FK 4.0 · version 2 ───────────────── */
    5: [
      { title: 'Sunday in the Empty Lot', genre: 'story',
        paragraphs: [
          'Every night that week, Simon\'s big sister, Bree, studied a thick little booklet at the dinner table. It was full of pictures of road signs and long lists of rules. Between bites of rice, she quizzed herself under her breath. "A red sign with eight sides means stop," she muttered.',
          'On Sunday morning, Dad drove the family car to the empty parking lot behind the grocery store. Then he did something strange. He got out, walked around the car, and climbed into the passenger seat while Bree slid behind the steering wheel. Simon buckled himself into the back seat and leaned forward to watch.',
          'Bree checked her mirrors three times before she moved. She gripped the wheel so tightly that her knuckles turned white. When she pressed the gas, the car leaped forward and then jerked to a sudden stop, and Simon\'s head bounced against the seat. Dad grabbed the handle above his window, but his voice stayed soft and calm. "Nice and easy," he said. "You are doing fine."',
          'By lunchtime, Bree could steer the car in a slow, smooth circle around the entire lot. When they switched seats to go home, she let out a long breath and gave Dad a high five.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Bree?',
            choices: ['Bree is learning how to drive a car.', 'Bree is teaching Dad how to drive the car.', 'Bree drives the car to work every day.', 'Bree wants to buy a new car of her own.'],
            notes: [null, 'Paragraph 3 says Dad told Bree, "Nice and easy." Dad is the one helping her.', 'Paragraph 2 says Dad drove the car to the lot. Bree does not drive it every day.', 'The passage gives no clue that Bree wants to buy a car.'],
            why: 'Paragraph 1 says Bree studied a booklet of road signs and rules. Paragraph 2 says Dad let her sit behind the wheel in an empty lot. Paragraph 3 says the car jerked to a stop. So Bree is learning how to drive a car.',
            chart: { facts: 'Bree studies road signs, and Dad lets her sit behind the wheel.', know: 'People learn the rules of the road before they drive.', conclusion: 'Bree is learning how to drive a car.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Bree is careful?',
            choices: ['Bree checked her mirrors three times before she moved.', 'Simon buckled himself into the back seat and leaned forward to watch.', 'On Sunday morning, Dad drove the family car to the empty parking lot behind the grocery store.', 'When they switched seats to go home, she let out a long breath and gave Dad a high five.'],
            notes: [null, 'This tells what Simon did. It is about someone else.', 'This tells where Dad drove the car. It does not show that Bree is careful.', 'This tells how the morning ended. It does not show that Bree is careful.'],
            why: 'Paragraph 3 says Bree checked her mirrors three times before she moved. A careful driver looks all around first. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Dad, not a fact from the passage?',
            choices: ['Dad is a little nervous, but he tries to stay calm.', 'Dad got out of the car and walked all the way around it.', 'Dad climbed into the passenger seat.', 'Dad told Bree that she was doing fine.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Dad feels. But paragraph 3 says Dad grabbed the handle above his window. His voice stayed soft and calm. So Dad is a little nervous, but he tries to stay calm.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Bree is learning to drive?',
            choices: ['New drivers practice with a grown-up sitting next to them.', 'Seat belts help keep people safe in a car.', 'Grocery stores sell food like rice, milk, and fresh fruit.', 'A high five is a way to say good job.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 2 says Dad sat next to Bree while she sat at the wheel. We know new drivers practice with a grown-up sitting next to them. That helps us infer that Bree is learning to drive.' }
        ] },
      { title: 'Soup Instead of Tacos', genre: 'story',
        paragraphs: [
          'On Wednesday, Iris\'s big sister, Kate, left school early to visit Dr. Patel\'s office. When she got home, she walked right past Iris without saying hello. She went straight to the bathroom mirror. Iris heard her groan, "Ugh, I look like a robot."',
          'At dinner, Dad made crunchy tacos. Tacos were Kate\'s favorite food, but she did not eat a single one. She asked for a bowl of soup instead and ate it in tiny, slow sips. Every few minutes, she rubbed her jaw and winced.',
          'Then Iris told a silly joke about a chicken. Kate laughed, but she quickly put her hand over her mouth. For one second, Iris saw a flash of shiny silver across her sister\'s teeth.',
          'Later, Iris found a tiny bag of rubber bands on the bathroom sink. Next to it sat a new toothbrush with a funny, thin head.',
          'That night, Iris slipped a note under Kate\'s door. It said, "Robots are cool. You still have the best smile in this house." A few minutes later, Kate opened her door and grinned at Iris with a big, shiny, silver grin.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Kate?',
            choices: ['Kate got braces on her teeth that day.', 'Kate lost a front tooth at school that day.', 'Kate is mad at Iris and will not talk to her.', 'Kate does not like the taste of tacos anymore.'],
            notes: [null, 'Paragraph 3 says Iris saw shiny silver across Kate\'s teeth. That is not a gap from a lost tooth.', 'Paragraph 5 says Kate opened her door and grinned at Iris. She is not mad at her.', 'Too far. Paragraph 2 says tacos are her favorite food. The clues point to something else.'],
            why: 'Paragraph 1 says Kate went to see Dr. Patel. She said she looks like a robot. Paragraph 3 says Iris saw shiny silver on her teeth. Paragraph 4 says there were tiny rubber bands. So Kate got braces that day.',
            chart: { facts: 'Kate went to Dr. Patel, and now there is shiny silver across her teeth.', know: 'Some kids get braces to help their teeth grow straight.', conclusion: 'Kate got braces on her teeth that day.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Kate\'s teeth feel sore?',
            choices: ['Every few minutes, she rubbed her jaw and winced.', 'At dinner, Dad made crunchy tacos.', 'Then Iris told a silly joke about a chicken.', 'Later, Iris found a tiny bag of rubber bands on the bathroom sink.'],
            notes: [null, 'This tells what Dad made. It does not show how Kate\'s teeth feel.', 'This tells what Iris did. It is about someone else.', 'This tells what Iris found. It does not show that Kate\'s teeth hurt.'],
            why: 'Paragraph 2 says Kate rubbed her jaw and winced. People wince when something hurts. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Kate, not a fact from the passage?',
            choices: ['At first, Kate feels shy about how her teeth look.', 'Kate went straight to the bathroom mirror.', 'Kate asked for a bowl of soup instead of tacos.', 'Kate laughed at the silly joke Iris told about a chicken.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Kate feels about her teeth. But paragraph 1 says she groaned that she looks like a robot. Paragraph 3 says she put her hand over her mouth when she laughed. So at first, Kate feels shy about how her teeth look.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Kate got braces?',
            choices: ['Braces are silver wires that go across your teeth.', 'Tacos are crunchy and can be messy to eat.', 'A good joke can make people laugh out loud.', 'A toothbrush helps keep your teeth clean and white.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 3 says Iris saw shiny silver on Kate\'s teeth. We know braces are silver wires that go across your teeth. That helps us infer that Kate got braces.' }
        ] }
    ],

    /* ── LEVEL 6 · FK 4.5 · version 2 ───────────────── */
    6: [
      { title: 'Jalen\'s Spotless Kitchen', genre: 'story',
        paragraphs: [
          'On Thursday afternoon, Jalen rode the bus home with a folded yellow paper in his backpack. He had already read it three times. Across the top, in big letters, it said OVERNIGHT SCIENCE CAMP. At the very bottom was an empty line with two words printed under it: Parent Signature.',
          'As soon as he got inside, Jalen went straight to work. He washed every dish in the sink and wiped the counters until they sparkled. He folded the clean towels into neat squares and swept the kitchen floor. He even took out the trash, which was usually his sister\'s job.',
          'At six o\'clock, Jalen heard Dad\'s key turn in the lock. He quickly set a cup of hot tea on the table in front of Dad\'s chair. Then he slid the yellow paper beside the cup and laid a pen on top of it.',
          'Dad walked into the kitchen and stopped in the doorway. His eyes moved slowly from the shining counters to the stack of towels to the steaming cup. Then he looked at Jalen. Jalen stood very straight, with his hands behind his back and a giant smile on his face.',
          'Dad sat down, took a slow sip of tea, and picked up the yellow paper. He read it from top to bottom while Jalen held his breath. Finally, Dad raised one eyebrow, chuckled, and reached for the pen.'
        ],
        items: [
          { id: 'M01', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Jalen?',
            choices: ['Jalen hopes Dad will let him go to the science camp.', 'Jalen is cleaning because his sister is sick in bed.', 'Jalen broke a dish and is trying to hide it from Dad.', 'Jalen wants Dad to drive him to the grocery store tonight.'],
            notes: [null, 'The passage gives no clue that his sister is sick.', 'Too far. The passage never tells about a broken dish.', 'The passage gives no clue about a trip to the store.'],
            why: 'Paragraph 2 says Jalen did lots of chores. He even did his sister\'s job. Paragraph 3 says he put the camp paper and a pen by Dad\'s tea. People often do nice things before they ask for something. So Jalen hopes Dad will let him go to the camp.',
            chart: { facts: 'Jalen does lots of chores, then puts the camp paper and a pen by Dad\'s tea.', know: 'People sometimes do nice things before they ask for something.', conclusion: 'Jalen hopes Dad will let him go to the science camp.' } },
          { id: 'M02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Jalen is nervous while Dad reads?',
            choices: ['He read it from top to bottom while Jalen held his breath.', 'He even took out the trash, which was usually his sister\'s job.', 'At six o\'clock, Jalen heard Dad\'s key turn in the lock.', 'He quickly set a cup of hot tea on the table in front of Dad\'s chair.'],
            notes: [null, 'This shows how hard Jalen worked. It does not show how he felt while Dad read.', 'This tells when Dad came home. It does not show how Jalen felt while Dad read.', 'This tells what Jalen did before Dad came in. It is about a different part of the passage.'],
            why: 'Paragraph 5 says Jalen held his breath while Dad read. People hold their breath when they wait for big news. So this sentence proves it the most.' },
          { id: 'M03', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Dad, not a fact from the passage?',
            choices: ['Dad is surprised to see the kitchen so clean.', 'Dad stopped in the doorway of the kitchen.', 'Dad took a slow sip of his hot tea.', 'Dad sat down at the table and picked up the yellow paper.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says how Dad feels. But paragraph 4 says Dad stopped in the doorway. He looked slowly at the clean counters and the towels. So Dad is surprised to see the kitchen so clean.' },
          { id: 'M04', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Jalen hopes Dad will let him go?',
            choices: ['Kids need a parent to sign a paper before they go on a trip.', 'Hot tea is best when you sip it slowly.', 'Towels are much easier to stack in a closet when they are folded.', 'A science camp can teach kids all about stars and bugs.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 1 says the camp paper has a line for a parent to sign. We know kids need a parent to sign a paper before they go on a trip. That helps us infer that Jalen wants Dad to say yes.' }
        ] },
      { title: 'Papa\'s Tuesday Dinner', genre: 'story',
        paragraphs: [
          'Every Tuesday, Papa cooked dinner for the whole family, and every Tuesday he made a big bowl of steamed broccoli. Daisy could not stand broccoli. Last week, she had pushed every green piece to the edge of her plate and built a little wall with them. Papa had told her there would be no dessert until her plate was clean.',
          'This Tuesday, Papa put three big pieces of broccoli on Daisy\'s plate, and then he turned back to the stove to stir a pot of soup. Rascal, the family\'s shaggy brown dog, trotted over and lay down right under Daisy\'s chair. Usually, Rascal slept on the rug by the front door during dinner.',
          'Daisy waited until Papa\'s back was turned. Then her hand slipped down below the edge of the table, once, twice, three times. A soft crunching sound came from under her chair.',
          'When Papa turned around, Daisy\'s plate was perfectly empty. "Wow, you ate every bite!" he said. Daisy nodded and gave him a sweet smile. But Rascal was licking his lips, and a tiny green crumb was stuck in his whiskers.',
          'Papa looked at the dog for a long moment. Then he looked at Daisy, and the corners of his mouth twitched. "Since you love broccoli so much now," he said, "you can have seconds!" He piled three more pieces on her plate, and this time he pulled up a chair and sat right beside her.'
        ],
        items: [
          { id: 'M05', type: 'mc', skill: 'Making inferences',
            q: 'What can you infer about Daisy?',
            choices: ['Daisy fed her broccoli to Rascal under the table.', 'Daisy ate all of her broccoli because she likes it now.', 'Daisy hid all of her broccoli inside her napkin.', 'Daisy dropped her plate on the floor by mistake.'],
            notes: [null, 'Paragraph 1 says Daisy could not stand broccoli. The clues show the opposite.', 'The passage never tells about a napkin. The clues point somewhere else.', 'Paragraph 4 says Daisy\'s plate was empty. It does not say she dropped it.'],
            why: 'Paragraph 1 says Daisy hates broccoli. Paragraph 2 says the dog lay right under her chair. Paragraph 3 says her hand slipped down under the table. So Daisy fed her broccoli to the dog.',
            chart: { facts: 'Daisy hates broccoli, and her hand slips under the table where Rascal lies.', know: 'Kids who do not like a food may try to get rid of it.', conclusion: 'Daisy fed her broccoli to Rascal under the table.' } },
          { id: 'M06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that Rascal ate the broccoli?',
            choices: ['But Rascal was licking his lips, and a tiny green crumb was stuck in his whiskers.', 'Every Tuesday, Papa cooked dinner for the whole family, and every Tuesday he made a big bowl of steamed broccoli.', 'Daisy nodded and gave him a sweet smile.', 'Daisy waited until Papa\'s back was turned.'],
            notes: [null, 'This tells what Papa cooks each week. It does not show who ate the broccoli.', 'This tells how Daisy smiled. It does not show what Rascal ate.', 'This tells when Daisy moved. It does not prove that Rascal ate anything.'],
            why: 'Paragraph 4 says Rascal was licking his lips. A tiny green crumb was stuck in his whiskers. Broccoli is green. So this sentence proves it the most.' },
          { id: 'M07', type: 'mc', skill: 'Inference or fact',
            q: 'Which sentence is an inference about Papa, not a fact from the passage?',
            choices: ['Papa knows what Daisy really did with her broccoli.', 'Papa cooked dinner for the whole family every Tuesday.', 'Papa stirred a pot of soup on the stove.', 'Papa gave Daisy three more pieces of broccoli.'],
            kinds: [null, 'fact', 'fact', 'fact'],
            why: 'The passage never says what Papa knows. But paragraph 5 says he looked at the dog and then at Daisy. His mouth twitched. Then he gave her more. So Papa knows what Daisy really did.' },
          { id: 'M08', type: 'mc', skill: 'Things we know',
            q: 'What do you already know that helps you infer that Daisy fed her broccoli to Rascal?',
            choices: ['Dogs will eat food that falls under the table.', 'Soup tastes best when it is stirred and hot.', 'Broccoli looks like a bunch of tiny green trees.', 'Dessert is a sweet treat after dinner.'],
            kinds: [null, 'notknow', 'notknow', 'notknow'],
            why: 'Paragraph 2 says the dog lay right under Daisy\'s chair. We know dogs will eat food that falls under the table. That helps us infer that Daisy fed her broccoli to the dog.' }
        ] }
    ]
  }
};
