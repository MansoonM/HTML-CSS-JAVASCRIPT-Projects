// Javascript
let signUpBtn = document.querySelector(".signUpBtn");
let signInBtn = document.querySelector(".signInBtn");
let nameField = document.querySelector(".name-field");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");

signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
  signInBtn.classList.add("active");
  underline.style.transform = "translateX(35px)";
  text.innerHTML = "Lost Password ? ";
});

signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.remove("active");
  signInBtn.classList.add("disable");
  underline.style.transform = "translateX(0)";
  text.innerHTML = "Password Suggestions? ";
});
