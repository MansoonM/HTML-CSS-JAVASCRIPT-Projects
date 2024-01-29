let container = document.querySelector(".container");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");
let f = document.querySelector("#f");
let flag = 0;

a.addEventListener("click", function () {
  if (flag == 0) {
    container.style.backgroundColor = "blue";
  }
});
b.addEventListener("click", function () {
  if (flag == 0) {
    container.style.backgroundColor = "black";
  }
});
c.addEventListener("click", function () {
  if (flag == 0) {
    container.style.backgroundColor = "purple";
  } else {
    flag = 0;
  }
});
d.addEventListener("click", function () {
  if (flag == 0) {
    container.style.backgroundColor = "red";
  }
});
e.addEventListener("click", function () {
  if (flag == 0) {
    container.style.backgroundColor = "brown";
  }
});
f.addEventListener("click", function () {
  if (flag == 0) {
    container.style.backgroundColor = "rgb(53, 52, 52)";
  }
});
