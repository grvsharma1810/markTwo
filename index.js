var readlineSync = require('readline-sync');
const chalk = require('chalk');

var name = readlineSync.question("What's you name? ")
console.log("Welcome %s to quiz on General Knowledge.",name);

var score = 0;
var wrongAnswers = 0;

function play(question, answer){
  var flag = true;
  while(flag){
    console.log();
    var usersAns = readlineSync.question(question);
    if(usersAns.toLowerCase() == answer.toLowerCase()){
      score++;
      console.log(chalk.green("YAY Right Answer"));    
      console.log("Your Current Score is :",score);
      flag = false;
    }
    else{
      wrongAnswers++;
      console.log(chalk.red("OOOPs! Wrong Answer"));
      var ans = readlineSync.question("Wanna Try Again ? Y/N   ");
      if(ans.toLowerCase() != 'y'){
        flag = false;
      }
    }
  }  
}

var questions = [
  [
      {
        question: "Who is newly elected president of USA ?  ",
        answer: "Joe Biden"
      },
      {
        question: "What is the name of nearest star of our solar system ?  ",
        answer: "Proxima Century"
      },
      {
        question: "Who is founder of the company Blue Origin ?  ",
        answer: "Jeff Bezos"
      },
  ],
  [
      {
        question : "Which Company is responsible for manufacturing Rafale aircrafts ?  ",
        answer : "Dassault Aviation"
      },
      {
        question : "Which conutry recently introduced concept of futiristic city 'THE LINE'?  ",
        answer : "Saudi Arabia"
      },
      {
        question : "Which Chemical Element is mostly used in making rechargable battries ? ",
        answer : "Lithium"
      },
  ]
]

for(var i=0;i<questions.length;i++){
console.log(chalk.black.bgYellow.bold("\nLEVEL",i));
  for(var j=0;j<questions[i].length;j++){
    play(questions[i][j].question, questions[i][j].answer);
  }
  console.log(chalk.black.bgGreen.bold("Congratulations! You Passed Level",i));
}

console.log("Total Wrong Answers : ",wrongAnswers);
console.log("Final Score is : ",score);  