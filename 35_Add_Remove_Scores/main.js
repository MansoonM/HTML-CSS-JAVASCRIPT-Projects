// Declaring variables

let H1_Score = document.getElementById("score");
let add_btn = document.getElementById("add");
let remove_btn = document.getElementById("remove");
let null_btn = document.getElementById("null");

// Get Item by parse
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

// alter heading1
H1_Score.innerHTML = `Score : ${score}`;

// Functionality of Buttons

// add button
add_btn.addEventListener("click", () => {
  score++;
  UpdateLocalStorage();
});

remove_btn.addEventListener("click", () => {
  score--;
  UpdateLocalStorage();
});

null_btn.addEventListener("click", () => {
  score = 0;
  UpdateLocalStorage();
});

// Fuction for local storage
function UpdateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
