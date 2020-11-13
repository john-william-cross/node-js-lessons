const questions = [
   {
      question_id: "30a95c2b-ed3c-46a4-b32f-7bcb5aef7143",
      question_text: "How do I help my kindergarten learn to rhyme?",
      question_email: "tony@hotmail.com",
      question_created_at: 1600390071259,
      answer_id: null,
      answer_text: null,
      answered_at: null,
      user_id: null,
   },
   {
      question_id: "30a95c2b-ed3c-46a4-b32f-7bcb5aef7723",
      question_text: "What is the area model of multiplication?",
      question_email: 'jay@hotmail.com"',
      question_created_at: 1600380071259,
      answer_id: "6423a37b-459e-4376-93d4-e0535bbbe9c1",
      answer_text: "Look up `multiplication with arrays`, that may help!\n\n",
      answered_at: 1609380071259,
      user_id: "5d127345-c95d-42c3-bd84-faccfe2e0004",
   },
   {
      question_id: "30a95c2b-ed3c-46a4-b32f-7bcb5aef7723",
      question_text: "What is the area model of multiplication?",
      question_email: 'jay@hotmail.com"',
      question_created_at: 1600380071259,
      answer_id: "6423a37b-459e-4376-93d4-e0535bbbe9c5",
      answer_text:
         "If it is multiplication, please google `area model multiplication common core` and you should find some good examples\n" +
         "\n",
      answered_at: 1609380071259,
      user_id: "5d127345-c95d-42c3-bd84-faccfe2e0004",
   },
   {
      question_id: "30a95c2b-ed3c-46a4-b32f-7bcb5aef7723",
      question_text: "What is the area model of multiplication?",
      question_email: 'jay@hotmail.com"',
      question_created_at: 1600380071259,
      answer_id: "c69631b0-bf11-41c2-86b9-5e3c0c8ab182",
      answer_text:
         "You may need to submit a new question in which you say what grade your child is in, because different methods for solving multiplication problems are introduced at different grades.\n" +
         "\n",
      answered_at: 1600650071259,
      user_id: "5d127345-c95d-42c3-bd84-faccfe2e0004",
   },
   {
      question_id: "4f9811eade44-c653e41b-c585-4d27-a439",
      question_text:
         "What is the difference between an inference and a prediction?",
      question_email: "michelle@yahoo.com",
      question_created_at: 1603382271259,
      answer_id: "3681497b-e639-42eb-b7cf-00af98ebd64d",
      answer_text:
         "Predictions are guesses about the future based on current evidence. Inferences are conclusions drawn about the current time. Think of a detective. A detective looks at clues and makes an inference about what might have happened at a crime scene. The detective infers what happened at the crime scene, meaning she used clues to guess what already happened.\n" +
         "\n",
      answered_at: 1500380071259,
      user_id: "5d127345-c95d-42c3-bd84-faccfe2e0004",
   },
   {
      question_id: "4f9811eade44-c653e41b-c585-4d27-a439",
      question_text:
         "What is the difference between an inference and a prediction?",
      question_email: "michelle@yahoo.com",
      question_created_at: 1603382271259,
      answer_id: "b37a480c-2de0-435e-8bc2-091760df2885",
      answer_text:
         "A prediction is an educated guess, based on information you already have, about what you think will happen in the future. An inference is a conclusion you draw, based on information you already have, about what is happening NOW.\n" +
         "\n" +
         "Here are some examples: The sky is quickly darkening, with swirling clouds and strong winds. You see lightning and hear thunder in the distance. Based on that information, you can predict that it is going to rain. Meanwhile, a family member is asleep inside your house. It rains, and they sleep through the entire storm. They wake up and look outside. There are puddles everywhere and everything is wet. From that information, they can infer that it rained.\n" +
         "\n" +
         "Here are some more inferences and predictions: A little kid’s bedroom has pink walls, pink carpet, a pink bedspread, and pink picture frames on the walls. From this information, you can infer that the kid likes the color pink.\n" +
         "\n" +
         "You wake up with a stuffed nose and a sore throat. You sneeze all day. You might infer that you have a cold. Your birthday party is tomorrow. You’ve been asking for a bike. As you open up presents, the first gift you open up is a bike helmet. You can predict that one of your gifts will also be a bike.\n" +
         "\n",
      answered_at: 1603329563286,
      user_id: "5d127345-c95d-42c3-bd84-faccfe2e0004",
   },
];

const allAnswers = questions.map((answer) => {
   return answer.answer_text;
});

console.log(allAnswers);

const firstQuestion = questions[0];

const getItems = firstQuestion.question_text.concat(
   " " + firstQuestion.question_email
);

console.log(getItems);
