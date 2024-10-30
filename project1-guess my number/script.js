//document.querySelector('.message');
/*
console.log(document.querySelector('message'));
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='correct number!🎇'
document.querySelector('.number').textContent=25;
document.querySelector('.score').textContent=35;
//document.querySelector('.guess').value=45;
document.querySelector('.guess').value=89;
console.log(document.querySelector('.guess').value);
console.log(document.querySelector('.score').value);
*/

//using event listners
//taking random number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0

//selecting logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!🚫";
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct number!🎇";
    document.querySelector(".number").textContent = secretNumber;
    //change the bg color
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
//highscore logic
    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
    }
    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!😢";
      document.querySelector(".score").textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!😢";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//reloading the page

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
