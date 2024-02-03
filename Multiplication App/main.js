// Multipliaction App Logic Building
//Mansoon Mohanty

const num1 = Math.ceil(Math.random() * 10); //ceil for integer , no float will generate
console.log(num1);

const num2 = Math.ceil(Math.random() * 10);
console.log(num2);

//get question from HTML
const questionE1 = document.getElementById("question");
questionE1.innerText = `What is ${num1} multiply by ${num2}`; // ``  for direct text display on page

//Correct Calculation
const correctAns = num1 * num2;

// get input from HTML
const inputE1 = document.getElementById("input");

// get data from HTML
const formE1 = document.getElementById("form");

//get score from HTML
const scoreE1 = document.getElementById("score");

// store in local storage of browser
let score = JSON.parse(localStorage.getItem("score"));

// if anyhow score is not available
if (!score) {
  score = 0;
}
// display score in page
scoreE1.innerText = `Score : ${score}`;

// eventListener on submit
formE1.addEventListener("submit", () => {
  const userAns = +inputE1.value; //+ because convert string to number at begining of string
  if (userAns === correctAns) {
    score++;
    updateLocalStorage(); //data also available at browser storage
  } else {
    score--;
    updateLocalStorage(); //data also available at browser storage
  }
});

// score to storage in local storage. create a fuction for local storage
function updateLocalStorage() {
  // convert num to string because browser doesn't allow any othervalue other than string
  localStorage.setItem("score", JSON.stringify(score));
}
