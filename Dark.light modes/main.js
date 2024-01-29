let darkmode = document.querySelector(".darkmode");
let contain = document.querySelector(".contain");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let head = document.querySelector(".head");
let circle = document.querySelector(".circle");
let me = document.querySelector(".me");
let flag = 0;

darkmode.addEventListener("click", function () {
  if (flag == 0) {
    darkmode.style.backgroundColor = "black";
    darkmode.style.color = "white";
    head.style.backgroundColor = " rgb(36, 36, 36)";
    darkmode.style.border = "2px solid white";
    contain.style.backgroundColor = "black";
    light.style.display = "inline";
    dark.style.display = "none";
    circle.style.backgroundColor = "black";
    circle.style.color = "white";
    circle.style.border = "2px solid white";
    me.style.color = "white";
    flag = 1;
  } else {
    darkmode.style.backgroundColor = "white";
    darkmode.style.color = "black";
    darkmode.style.border = "2px solid black";
    contain.style.backgroundColor = "white";
    head.style.backgroundColor = " white";
    dark.style.backgroundColor = "white";
    dark.style.display = "inline";
    light.style.display = "none";
    circle.style.backgroundColor = "white";
    circle.style.color = "black";
    circle.style.border = "2px solid black";
    me.style.color = "black";
    flag = 0;
  }
});
