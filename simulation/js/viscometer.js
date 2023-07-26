// let viscoBtn = document.querySelector("#reset-viscometer");
// viscoBtn.addEventListener("click", continueViscometerAnimation);
const sucker = document.querySelector(".sucker");
const left_tube_liquid = document.querySelector(".left-tube-liquid");
const left_bulb_liquid = document.querySelector(".left-bulb-liquid");
const above_tube_liquid = document.querySelector(".above-tube-liquid");
const right_bulb_liquid = document.querySelector(".right-bulb-liquid");
const below_tube_liquid = document.querySelector(".below-tube-liquid");
const u_tube = document.querySelector(".overlay-u");

const initialFillArray = [
  u_tube,
  below_tube_liquid,
  left_bulb_liquid,
  left_tube_liquid,
];

let viscometerAnimatingElements = [
  ".overlay-u",
  ".left-bulb > .fluid",
  ".left-tube > .fluid",
  ".below-tube > .fluid",
  ".right-bulb > .fluid",
  ".above-tube > .fluid",
];

function suckLiquid() {}

function resetViscometerAnimation() {
  const viscometer = document.querySelector(".viscometer");
  let cloneViscometer = viscometer.cloneNode(true);
  viscometer.parentNode.replaceChild(cloneViscometer, viscometer);

  u_tube.style.animationPlayState = "running";
  left_bulb_liquid.style.animationPlayState = "running";
  left_tube_liquid.style.animationPlayState = "running";
  below_tube_liquid.style.animationPlayState = "running";
  left_bulb_liquid.style.background = "red";

  setTimeout(() => {
    // viscometerAnimatingElements.forEach((temp) => {
    //   document.querySelector(temp).style.animationPlayState = "paused";
    // });

    document.querySelector(
      viscometerAnimatingElements[0]
    ).style.animationPlayState = "paused";
    document.querySelector(
      viscometerAnimatingElements[1]
    ).style.animationPlayState = "paused";
    document.querySelector(
      viscometerAnimatingElements[2]
    ).style.animationPlayState = "paused";
    document.querySelector(
      viscometerAnimatingElements[3]
    ).style.animationPlayState = "paused";
  }, 10500);
}

function continueViscometerAnimation() {
  viscometerAnimatingElements.forEach((temp) => {
    document.querySelector(temp).style.animationPlayState = "running";
  });
}

sucker.addEventListener("click", () => {
  console.log("ok that works");
  document.querySelector(
    viscometerAnimatingElements[4]
  ).style.animationPlayState = "running";
  document.querySelector(
    viscometerAnimatingElements[5]
  ).style.animationPlayState = "running";
});
