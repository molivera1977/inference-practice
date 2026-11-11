/* Prove It, version 2 of Level 1 — a retry's passages (Marcos 11/10: "New retry passages").
   Try 1 of a level gets data/act-prove.js; try 2 gets these. Same question slots as version 1. */
window.INF_VERSIONS = window.INF_VERSIONS || {};
window.INF_VERSIONS.prove = {
  2: {
    1: [
      { title: 'The Day Dad Voted', genre: 'story',
        paragraphs: [
          'On Tuesday, Dad went to vote for the next mayor. Sofia went with him. Dad had circled the day on the calendar with a red marker.',
          'The vote was in the gym at Sofia\'s school. The line went all the way around the gym and out the door. Dad waited and read the signs on the wall.',
          'Small booths with curtains stood at the back of the gym. Sofia asked Dad who counted the votes and how long it took.',
          'That night, Sofia cut paper into little squares. Then she had her family vote on what to eat for dinner.'
        ],
        items: [
          { id: 'P01', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that voting was important to Dad?',
            choices: [
              'Dad had circled the day on the calendar with a red marker.',
              'The vote was in the gym at Sofia\'s school.',
              'Small booths with curtains stood at the back of the gym.',
              'That night, Sofia cut paper into little squares.'
            ],
            kinds: [null, 'notproof', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 2 tells where the vote was. It does not show how Dad felt about voting.',
              'Paragraph 3 tells what was in the gym. It does not show how Dad felt about voting.',
              'Paragraph 4 tells what Sofia did. The idea is about Dad.'],
            why: 'Paragraph 1 says Dad circled the day on the calendar with a red marker. People mark a day like that when it matters to them. So voting was important to Dad.' },
          { id: 'P02', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that many people came to vote?',
            choices: [
              'The line went all the way around the gym and out the door.',
              'Dad had circled the day on the calendar with a red marker.',
              'The vote was in the gym at Sofia\'s school.',
              'On Tuesday, Dad went to vote for the next mayor.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 is about Dad and the calendar. It does not show how many people came.',
              'Paragraph 2 tells where the vote was. It does not show how many people came.',
              'Paragraph 1 tells when Dad went and why. It does not show how many people came.'],
            why: 'Paragraph 2 says the line went all the way around the gym and out the door. A line gets that long only when lots of people come. So many people came to vote.' },
          { id: 'P03', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Sofia was curious about voting.',
            answer: 'Sofia asked Dad who counted the votes and how long it took.',
            notes: {
              'Small booths with curtains stood at the back of the gym.': 'Paragraph 3 tells what was in the gym. It does not show what Sofia wanted to know.',
              'Sofia went with him.': 'Paragraph 1 tells who went with Dad. It does not show what Sofia wanted to know.',
              'Dad waited and read the signs on the wall.': 'This sentence is about Dad, not Sofia.',
              'Then she had her family vote on what to eat for dinner.': 'This tells what Sofia did that night at home. Look for what Sofia wanted to know at the gym.'
            },
            why: 'Paragraph 3 says Sofia asked who counted the votes and how long it took. People ask questions when they want to know more. So Sofia was curious about voting.' },
          { id: 'P04', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Sofia wanted to try voting herself. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Then she had her family vote on what to eat for dinner.',
              'Small booths with curtains stood at the back of the gym.',
              'Dad waited and read the signs on the wall.',
              'The line went all the way around the gym and out the door.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 3 tells what was in the gym. It does not show Sofia voting.',
              'Paragraph 2 tells what Dad did. The idea is about Sofia.',
              'Paragraph 2 tells about the line at the gym. It does not show Sofia voting.'],
            why: 'Paragraph 4 says Sofia cut paper into squares. Then she had her family vote on dinner. She made her own vote at home. So Sofia wanted to try voting herself.' }
        ] },

      { title: 'Picking Tomatoes With Grandpa', genre: 'story',
        paragraphs: [
          'Felix spent the day at Grandpa\'s house. Grandpa had a big patch of red tomatoes out back.',
          'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink. Then they each took a box out to the garden.',
          'Felix tiptoed between the rows and did not step on a plant. He picked and picked, and soon his box was full. Then he wiped the sweat off his face.',
          'Grandpa washed some tomatoes with the hose. Felix ate two of them right there and licked his lips.'
        ],
        items: [
          { id: 'P05', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which sentence from the passage BEST supports the idea that it was hot in the garden?',
            choices: [
              'Then he wiped the sweat off his face.',
              'Felix spent the day at Grandpa\'s house.',
              'Grandpa had a big patch of red tomatoes out back.',
              'He picked and picked, and soon his box was full.'
            ],
            kinds: [null, 'notproof', 'notproof', 'notproof'],
            notes: [null,
              'Paragraph 1 tells where Felix was. It does not tell how hot it was.',
              'Paragraph 1 tells about Grandpa\'s tomatoes. It does not tell about the heat.',
              'Paragraph 3 tells how much Felix picked. It does not show that it was hot.'],
            why: 'Paragraph 3 says Felix wiped the sweat off his face. People sweat when it is hot. So it was hot in the garden.' },
          { id: 'P06', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'Which detail from the passage BEST shows that Grandpa wanted Felix to stay cool?',
            choices: [
              'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink.',
              'Grandpa washed some tomatoes with the hose.',
              'Then he wiped the sweat off his face.',
              'Then they each took a box out to the garden.'
            ],
            kinds: [null, 'notproof', 'wrongwho', 'notproof'],
            notes: [null,
              'Paragraph 4 says Grandpa washed the tomatoes. That is not about keeping Felix cool.',
              'Paragraph 3 tells what Felix did. The idea is about Grandpa.',
              'Paragraph 2 tells what they took to the garden. It does not show Grandpa keeping Felix cool.'],
            why: 'Paragraph 2 says Grandpa put a straw hat on Felix and gave him a cold drink. A hat keeps the sun off your head. A cold drink cools you down. So Grandpa wanted Felix to stay cool.' },
          { id: 'P07', type: 'hot', skill: 'Supporting detail',
            q: 'Click on the sentence in the passage that BEST supports the idea that Felix was careful in the garden.',
            answer: 'Felix tiptoed between the rows and did not step on a plant.',
            notes: {
              'He picked and picked, and soon his box was full.': 'Paragraph 3 tells how much Felix picked. It does not show that he was careful.',
              'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink.': 'Paragraph 2 tells what Grandpa did. The idea is about Felix.'
            },
            why: 'Paragraph 3 says Felix tiptoed between the rows. He did not step on a plant. Plants can break if you step on them. So Felix was careful in the garden.' },
          { id: 'P08', type: 'mc', skill: 'Supporting detail', evidence: true,
            q: 'The passage shows that Felix liked the tomatoes. Which sentence from the passage BEST supports this idea?',
            choices: [
              'Felix ate two of them right there and licked his lips.',
              'Grandpa washed some tomatoes with the hose.',
              'Grandpa had a big patch of red tomatoes out back.',
              'First, Grandpa put a straw hat on Felix\'s head and gave him a cold drink.'
            ],
            kinds: [null, 'wrongwho', 'notproof', 'wrongwho'],
            notes: [null,
              'Paragraph 4 tells what Grandpa did with the tomatoes. It does not show how Felix felt about them.',
              'Paragraph 1 says Grandpa had tomatoes. It does not show that Felix liked them.',
              'Paragraph 2 tells what Grandpa did. The idea is about Felix and the tomatoes.'],
            why: 'Paragraph 4 says Felix ate two tomatoes right there and licked his lips. People lick their lips when food tastes good. So Felix liked the tomatoes.' }
        ] }
    ]
  }
};
