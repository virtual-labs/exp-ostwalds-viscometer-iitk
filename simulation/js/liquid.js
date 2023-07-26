const sucker = document.querySelector(".sucker");
const left_tube_liquid = document.querySelector(".left-tube-liquid");
const left_bulb_liquid = document.querySelector(".left-bulb-liquid");
const above_tube_liquid = document.querySelector(".above-tube-liquid");
const right_bulb_liquid = document.querySelector(".right-bulb-liquid");
const below_tube_liquid = document.querySelector(".below-tube-liquid");
const u_tube = document.querySelector(".overlay-u");
const cur_time = document.querySelector(".timer_display");

const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");

const startBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");

let pointA = false;
let endOfTrial = false;

let trialFinished = false;
let trialNum = 0;
let trialResults = ["0", "0", "0"];

const timings = [25, 32.94, 39.06, 41.04]; // water, methyl, ethyl, benzene
sucker.setAttribute("disabled", "");

function initialFill() {
  trialFinished = false;
  root.style.setProperty("--u-tube", "u-tube-flow 2s ease-in-out forwards");
  root.style.setProperty(
    "--below-tube",
    "below-tube-fill-mid 3s ease-in-out forwards"
  );
  root.style.setProperty(
    "--left-bulb",
    "left-bulb-fill 2s ease-in-out forwards"
  );
  root.style.setProperty(
    "--left-tube",
    "left-tube-fill-forwards 2s ease-in-out 1.2s forwards"
  );
  sucker.removeAttribute("disabled");

  if (liquid === "water") {
    water.style.pointerEvents = "none";
  }

  if (liquid === "methyl") {
    methyl.style.pointerEvents = "none";
  }

  if (liquid === "ethyl") {
    ethyl.style.pointerEvents = "none";
  }

  if (liquid === "benzene") {
    benzene.style.pointerEvents = "none";
  }
}

sucker.addEventListener("click", () => {
  root.style.setProperty(
    "--left-tube",
    "left-tube-fill-backwards 4s ease-in-out forwards"
  );
  // left_tube_liquid.style.height = "50px";
  root.style.setProperty(
    "--below-tube",
    "below-tube-fill-full 2s ease-in-out forwards"
  );
  root.style.setProperty(
    "--right-bulb",
    "right-bulb-up 2s ease-in-out 2s forwards"
  );
  root.style.setProperty(
    "--above-tube",
    "above-tube-up 1s ease-in-out 3.5s forwards"
  );

  sucker.setAttribute("disabled", "");

  pointA = true;
});

startBtn.addEventListener("click", (e) => {
  if (e.target.checked && pointA) {
    function downFall(liquid) {
      let cur_liquid = 0;
      if (liquid === "water") {
        cur_liquid = 0;
      } else if (liquid === "methyl") {
        cur_liquid = 1;
      } else if (liquid === "ethyl") {
        cur_liquid = 2;
      } else if (liquid === "benzene") {
        cur_liquid = 3;
      }

      below_tube_liquid.style.bottom = "0px";
      right_bulb_liquid.style.bottom = "0px";

      root.style.setProperty(
        "--above-tube",
        `above-tube-down 5s ease-in-out forwards`
      );
      root.style.setProperty(
        "--right-bulb",
        `right-bulb-down ${timings[cur_liquid] - 10}s ease-in-out 5s forwards`
      );
      root.style.setProperty(
        "--below-tube",
        `below-tube-fill-down 15s ease-in-out ${
          timings[cur_liquid] - 10 + 5
        }s forwards`
      );
      root.style.setProperty(
        "--left-tube",
        `left-tube-fillback ${timings[cur_liquid] + 20}s ease-in-out forwards`
      );
      endOfTrial = true;
      pointA = false;
    }

    downFall(liquid);
  }
});

below_tube_liquid.addEventListener("animationend", () => {
  if (endOfTrial) {
    trialFinished = true;
    nextBtn.removeAttribute("disabled");
    nextBtn.style.opacity = 1;
  }
});

nextBtn.addEventListener("click", () => {
  below_tube_liquid.style.bottom = "-232px";
  right_bulb_liquid.style.bottom = "-38px";
  root.style.setProperty("--u-tube", "none");
  root.style.setProperty("--left-tube", "none");
  root.style.setProperty("--above-tube", "none");
  root.style.setProperty("--below-tube", "none");
  root.style.setProperty("--left-bulb", "none");
  root.style.setProperty("--right-bulb", "none");

  recorded_time = cur_time.innerHTML.split(":");
  trialResults[trialNum] = `${recorded_time[2]} : ${recorded_time[3]}`;

  if (trialNum === 0) {
    t1.innerHTML = trialResults[0];
    trialNum++;
  } else if (trialNum === 1) {
    nextBtn.innerHTML = "Complete the measurement";
    t2.innerHTML = trialResults[1];
    trialNum++;
  } else if (trialNum === 2) {
    t3.innerHTML = trialResults[2];
    liquid = null;
    water.style.cursor = "pointer";
    methyl.style.cursor = "pointer";
    ethyl.style.cursor = "pointer";
    benzene.style.cursor = "pointer";
    nextBtn.setAttribute("disabled", "");
    nextBtn.style.opacity = "0%";

    nextBtn.innerHTML = "Perform next trial";
    trialNum = 0;
  }

  nextBtn.setAttribute("disabled", "");
  endOfTrial = false;

  water.style.pointerEvents = "inherit";
  methyl.style.pointerEvents = "inherit";
  ethyl.style.pointerEvents = "inherit";
  benzene.style.pointerEvents = "inherit";
});
