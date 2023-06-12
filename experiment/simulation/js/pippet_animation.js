const pippet = document.querySelector(".pippet");
const liquids = document.querySelectorAll(".liquid");
const root = document.querySelector(":root");

const pippet_set = document.querySelector(".pippet_set");

const water = document.querySelector(".water");
const methyl = document.querySelector(".methyl");
const ethyl = document.querySelector(".ethyl");
const benzene = document.querySelector(".benzene");

const water_liquid = document.querySelector(".water_liquid");
const methyl_liquid = document.querySelector(".methyl_liquid");
const ethyl_liquid = document.querySelector(".ethyl_liquid");
const benzene_liquid = document.querySelector(".benzene_liquid");

const beaker_positions = [560, 430, 300, 170];
let beaker_number = beaker_positions[0];

let liquid = null;

let water_level = 50;
let methly_level = 50;
let ethyl_level = 50;
let benzene_level = 50;

function resetRecordings() {
  t1.innerHTML = "00 : 000";
  t2.innerHTML = "00 : 000";
  t3.innerHTML = "00 : 000";
}

// function fill_pippet() {
//   root.style.setProperty(
//     "--pippet_tip",
//     "pippet_tip 0.5s ease-in-out forwards"
//   );
//   root.style.setProperty(
//     "--pippet_liquid",
//     "pippet_liquid 1s ease-in-out 0.5s forwards"
//   );
// }
function fill_pippet() {
  root.style.setProperty(
    "--pippet_tip",
    "pippet_tip 5s ease-in-out 3s forwards"
  );
  root.style.setProperty(
    "--pippet_liquid",
    "pippet_liquid 5s ease-in-out 3.5s forwards"
  );
}

pippet_set.addEventListener(
  "animationend",
  () => {
    root.style.setProperty("--animate_pippet", "none");
    root.style.setProperty("--open_hand", "100%");
    root.style.setProperty("--grip_hand", "0%");
    initialFill();
    if (liquid === "water") {
      root.style.setProperty("--animate_water", "none");
      water_level += 15;
      root.style.setProperty("--water_liquid", `${water_level}px`);
    }
    if (liquid === "methyl") {
      root.style.setProperty("--animate_methyl", "none");
      methly_level += 15;
      root.style.setProperty("--methyl_liquid", `${methly_level}px`);
    }
    if (liquid === "ethyl") {
      root.style.setProperty("--animate_ethyl", "none");
      ethyl_level += 15;
      root.style.setProperty("--ethyl_liquid", `${ethyl_level}px`);
    }
    if (liquid === "benzene") {
      root.style.setProperty("--animate_benzene", "none");
      benzene_level += 15;
      root.style.setProperty("--benzene_liquid", `${benzene_level}px`);
    }

    root.style.setProperty("--pippet_tip", "none");
    root.style.setProperty("--pippet_liquid", "none");
  },
  false
);

// water beaker event listener
water.addEventListener("click", () => {
  if (liquid === null) {
    liquid = "water";
    resetRecordings();
  }
  if (liquid !== "water") {
    alert(
      "You have to perform one portion of the experiment with only same liquid, please select the previously selected liquid to progress"
    );
    return;
  }
  beaker_number = beaker_positions[0];

  ethyl.style.cursor = "not-allowed";
  methyl.style.cursor = "not-allowed";
  benzene.style.cursor = "not-allowed";

  root.style.setProperty("--water_liquid", `${water_level}px`);

  root.style.setProperty("--beaker_position", `${beaker_number}px`);
  root.style.setProperty("--open_hand", "0%");
  root.style.setProperty("--grip_hand", "100%");
  root.style.setProperty(
    "--animate_pippet",
    "pippet_animation 7s ease-in-out forwards"
  );
  root.style.setProperty(
    "--animate_water",
    "water_liquid 1s ease-in-out 3s forwards"
  );
  fill_pippet();
});

// methyl beaker event listener
methyl.addEventListener("click", () => {
  if (liquid === null) {
    liquid = "methyl";
    resetRecordings();
  }
  if (liquid !== "methyl") {
    alert(
      "You have to perform one portion of the experiment with only same liquid, please select the previously selected liquid to progress"
    );
    return;
  }
  beaker_number = beaker_positions[2];

  ethyl.style.cursor = "not-allowed";
  water.style.cursor = "not-allowed";
  benzene.style.cursor = "not-allowed";

  root.style.setProperty("--beaker_position", `${beaker_number}px`);
  root.style.setProperty("--open_hand", "0%");
  root.style.setProperty("--grip_hand", "100%");
  root.style.setProperty(
    "--animate_pippet",
    "pippet_animation 7s ease-in-out forwards"
  );
  root.style.setProperty(
    "--animate_methyl",
    "methyl_liquid 1s ease-in-out 3s forwards"
  );
  fill_pippet();
});

// ethyl beaker event listener
ethyl.addEventListener("click", () => {
  if (liquid === null) {
    liquid = "ethyl";
    resetRecordings();
  }
  if (liquid !== "ethyl") {
    alert(
      "You have to perform one portion of the experiment with only same liquid, please select the previously selected liquid to progress"
    );
    return;
  }
  beaker_number = beaker_positions[1];

  water.style.cursor = "not-allowed";
  methyl.style.cursor = "not-allowed";
  benzene.style.cursor = "not-allowed";

  root.style.setProperty("--beaker_position", `${beaker_number}px`);
  root.style.setProperty("--open_hand", "0%");
  root.style.setProperty("--grip_hand", "100%");
  root.style.setProperty(
    "--animate_pippet",
    "pippet_animation 7s ease-in-out forwards"
  );
  root.style.setProperty(
    "--animate_ethyl",
    "ethyl_liquid 1s ease-in-out 3s forwards"
  );
  fill_pippet();
});

// benzene beaker event listener
benzene.addEventListener("click", () => {
  if (liquid === null) {
    liquid = "benzene";
    resetRecordings();
  }
  if (liquid !== "benzene") {
    alert(
      "You have to perform one portion of the experiment with only same liquid, please select the previously selected liquid to progress"
    );
    return;
  }
  beaker_number = beaker_positions[3];

  ethyl.style.cursor = "not-allowed";
  methyl.style.cursor = "not-allowed";
  water.style.cursor = "not-allowed";

  root.style.setProperty("--beaker_position", `${beaker_number}px`);
  root.style.setProperty("--open_hand", "0%");
  root.style.setProperty("--grip_hand", "100%");
  root.style.setProperty(
    "--animate_pippet",
    "pippet_animation 7s ease-in-out forwards"
  );
  root.style.setProperty(
    "--animate_benzene",
    "benzene_liquid 1s ease-in-out 3s forwards"
  );
  fill_pippet();
});
