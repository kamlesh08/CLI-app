var readlineSync = require('readline-sync');
var userName = readlineSync.question("What's your name? ");
console.log ("Welcome ", userName);
console.log ("Let's play a quiz to see how much you know me, okay? ");

var score = 0;
console.log ("Before we start, your current score is: ", score);

console.log ("Let's begin with questions!");
console.log ("-------------")

function queAns (question,answer) {

  var userQuestion = readlineSync.question(question);
  if (userQuestion === answer) {
    console.log ("Congratulations, that's correct");
    score = score + 1;
  }
  else {
    console.log ("Sorry, wrong answer");
  }
  console.log ("Your current score is: ", score);
  console.log ("-------------")
}

var multipleQuestions = [ {
  question: "Who is my favorite superhero? ",
  answer: "Goku",
}, {
  question: "Which is my favorite TV series? ",
  answer: "Suits",
}, {
  question: "Where do I live? ",
  answer: "Mumbai",
}, {
  question: "Which phone I own? ",
  answer: "OnePlus 7T",
}
]

for ( var i = 0; i < multipleQuestions.length; i = i + 1 ) {
    var currentQuestion = multipleQuestions[i];
    queAns (currentQuestion.question, currentQuestion.answer);
  }

console.log ("Your final score is: " + score);
console.log ("-------------");

var highScore = [ {
  name: "kamlesh",
  scores: 4,
}, {
  name: "arjun",
  scores: 3,
}, {
  name: "ashish",
  scores: 3,
}, {
  name: "astha",
  scores: 2,
}]

console.log ("Some high scores of the game are: ");

for (var i = 0; i < highScore.length; i++) {
  var allScores = highScore[i];
  console.log (allScores);
}

console.log ("-------------");

if (score >= highScore[0].scores) {
  console.log ("Congratulations! You're one of the high scorers of the quiz." + "\n" + "Send me a screenshot of your score so I can update it in records.")
  console.log ("-------------");
  console.log ("Thanks for playing. ");
 }
else {
  console.log ("Thanks for playing. ");
}
  console.log ("------------- ");