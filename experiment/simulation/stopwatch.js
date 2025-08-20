// let timer = null;
// let delayTimeout = null;
// let isRunning = false;
// let seconds = 0;

// const timeDisplay = document.getElementById("time-display");
// const toggleBtn = document.getElementById("toggleBtn");

// function formatTime(sec) {
//   const mins = String(Math.floor(sec / 60)).padStart(2, '0');
//   const secs = String(sec % 60).padStart(2, '0');
//   return `${mins}:${secs}`;
// }

// function updateDisplay() {
//   timeDisplay.textContent = formatTime(seconds);
// }

// function startTimer() {
//   timer = setInterval(() => {
//     seconds += 1;
//     updateDisplay();
//   }, 1000 / 100); // 30x speed: 1 second increases every 33ms
// }

// function stopTimer() {
//   clearInterval(timer);
//   clearTimeout(delayTimeout);
// }

// toggleBtn.addEventListener("click", () => {
//   if (isRunning) {
//     stopTimer();
//     toggleBtn.textContent = "Start Stopwatch";
//     isRunning = false;
//   } else {
//     toggleBtn.textContent = "Wait 3 sec...";
//     delayTimeout = setTimeout(() => {
//       startTimer();
//       toggleBtn.textContent = "Stop Stopwatch";
//       isRunning = true;
//     }, 3000);
//   }
// });

// Stopwatch 1
 let timer1 = null;
 let delayTimeout1 = null;
 let isRunning1 = false;
 let seconds1 = 0;

 const timeDisplay1 = document.getElementById("time-display");
 const toggleBtn1 = document.getElementById("toggleBtn");

 function formatTime1(sec) {
   const mins = String(Math.floor(sec / 60)).padStart(2, '0');
   const secs = String(sec % 60).padStart(2, '0');
   return `${mins}:${secs}`;
 }

 function updateDisplay1() {
   timeDisplay1.textContent = formatTime1(seconds1);
 }

 function startTimer1() {
   timer1 = setInterval(() => {
     seconds1 += 1;
     updateDisplay1();
   }, 1000 / 100);
 }

 function stopTimer1() {
   clearInterval(timer1);
   clearTimeout(delayTimeout1);
 }

 toggleBtn1.addEventListener("click", () => {
   if (isRunning1) {
     stopTimer1();
     toggleBtn1.textContent = "Start Stopwatch";
     isRunning1 = false;
   } else {
     toggleBtn1.textContent = "Wait 3 sec...";
     delayTimeout1 = setTimeout(() => {
       startTimer1();
       toggleBtn1.textContent = "Stop Stopwatch";
       isRunning1 = true;
     }, 3000);
   }
 });


 // Stopwatch 2
 let timer2 = null;
 let delayTimeout2 = null;
 let isRunning2 = false;
 let seconds2 = 0;

 const timeDisplay2 = document.getElementById("time-display-two");
 const toggleBtn2 = document.getElementById("toggleBtnTwo");

 function formatTime2(sec) {
   const mins = String(Math.floor(sec / 60)).padStart(2, '0');
   const secs = String(sec % 60).padStart(2, '0');
   return `${mins}:${secs}`;
 }

 function updateDisplay2() {
   timeDisplay2.textContent = formatTime2(seconds2);
 }

 function startTimer2() {
   timer2 = setInterval(() => {
     seconds2 += 1;
     updateDisplay2();
   }, 1000 / 100);
 }

 function stopTimer2() {
   clearInterval(timer2);
   clearTimeout(delayTimeout2);
 }

 toggleBtn2.addEventListener("click", () => {
   if (isRunning2) {
     stopTimer2();
     toggleBtn2.textContent = "Start Stopwatch";
     isRunning2 = false;
   } else {
     toggleBtn2.textContent = "Wait 3 sec...";
     delayTimeout2 = setTimeout(() => {
       startTimer2();
       toggleBtn2.textContent = "Stop Stopwatch";
       isRunning2 = true;
     }, 3000);
   }
 });