let scoreE1 = document.getElementById("score");
let question = document.getElementById("question");
let formE1 = document.getElementById("form");
let inputE1 = document.getElementById("input");
let btn = document.getElementById("btn");
const num1 = Math.ceil(Math.random() * 20);
const num2 = Math.ceil(Math.random() * 20);
const correctAnswer = num1 + num2;

question.innerText = `What is the sum of ${num1} and ${num2} ?`;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
scoreE1.innerText = `Score : ${score}`;

formE1.addEventListener("click", () => {
  let user = +inputE1.value;
  if (user === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
