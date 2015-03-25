/* Quiz application that tracks the number of quiz questions answered correctly
(1) ask series of questions and eval each answer
(2) keep track of # ques answered correctly
(3) after quiz over, display # ques answered correctly and # wrong
- use 2-dim array to hold questions and answers
- use loop to cycle thru each question and compare ques vs. answer
- use conditional statement to see if ques and answer match
- at end of loop, print to screen
*/

/* TREEHOUSE SOLUTION

var questions = [
  ['How many states in the U.S.?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  document.write(message);
}
  
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if (response === answer) {
    correctAnswers += 1;
  }
}

html = "You got " + correctAnswers + " correct!";
print(html);
*/

 /* My almost-working solution */


var quiz = [
  ['What is the closest planet to the sun?', 'Mercury'],
  ['Which Greek titan is the moon named for?', 'Selena'],
  ['What planet displays a run-away greenhouse effect', 'Venus']
];
var score = 0;

function print(message) {
  document.write(message);
}

function fullQuiz(questions) {
  for (var i = 0; i < questions.length; i += 1) {
    var answer = prompt(questions[i][0]);
    if (answer.toLowerCase === questions[i][1]) {
      score += 1;
      console.log(score);
    }
  }
}
fullQuiz(quiz);
print('You answered ' + score + ' questions correctly!');

  

