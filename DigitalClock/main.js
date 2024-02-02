let hour = document.querySelector("#hour");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");
let am_pm = document.querySelector("#ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //    01,02,03,...09,then 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  am_pm.innerText = ampm;
  setTimeout(() => {
    updateClock(); //call our function inside setTimeout for updating it in every sec // 1sec=1000milisec
  }, 1000);
}
updateClock();
