"use-strict";

const time = document.querySelector(".timer_display");
const playBtn = document.querySelector(".play");
const resetBtn = document.querySelector(".reset");

let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];

let initial_time = null;

function timer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? `0${hours}` : `${hours}`;
  let m = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let s = seconds < 10 ? `0${seconds}` : `${seconds}`;
  // let ms = milliseconds < 100 ? `0${milliseconds}` : `${milliseconds}`;
  let ms = `${milliseconds.toLocaleString("en-US", {
    minimumIntegerDigits: 3,
    useGrouping: false,
  })}`;

  time.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

playBtn.addEventListener("click", (e) => {
  if (e.target.checked) {
    clearInterval(initial_time);
    initial_time = setInterval(timer, 10);
  } else {
    clearInterval(initial_time);
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(initial_time);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  time.innerHTML = `00 : 00 : 00 : 000 `;
});
