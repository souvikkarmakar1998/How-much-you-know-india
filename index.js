var readlineSync = require("readline-sync");
var log = console.log;
var score = 0;

function welcome(){
log("lets start a quiz about India.");
var userName = readlineSync.question("At first tell your name: ");

log("\n");
log("Welcome! "+userName+". lets start the game.");
log("\n");
}

function checkAns(questions, ans){
  var userAns = readlineSync.question(questions);
  if(userAns.toUpperCase() === ans.toUpperCase()){
    log("Right 😀");
    score++;
  }
  else{
    log("Wrong ☹️")
  }
  log("score: "+score);
  log("------------")
}


// Array of objects

var quiz = [{
  question : "How many union territories in India?: ",
  answer : "eight" 
},
           {
  question : "Which is the National Flower of India?: ",
  answer : "lotus"
},
           {
  question : "Which is the largest coffee-producing state of India?: ",
  answer : "karnataka"
},
           {
  question : "Which state has the largest area?: ",
  answer : "Rajasthan"
},
            {
  question : "Which is the national sport of India?: ",
  answer : "Hockey"
}
           ]



welcome();
for(var i=0; i<quiz.length; i++){
  checkAns(quiz[i].question, quiz[i].answer);
}

log("Total Score: "+score);
log("---------------------------");
log("---------------------------")

log("The right answers are:")

for(var i=0; i<quiz.length; i++){
  log(quiz[i].question+  +quiz[i].answer)
}