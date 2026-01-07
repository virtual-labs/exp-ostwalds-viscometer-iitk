// Default language is English
var lang = "eng";

// Messages for the experiment steps
const message = [
    "Click on pipette → Fill the viscometer with distilled water up to the Neck.",
    " ",
    "Click on sucking pipe → Attach the suction pipe/bulb and pull the water up about the upper mark.",
    "Start timing when the water reaches point B and stop when it reaches the lower mark.",
    "Click on pipette → Fill the viscometer with turpentine oil up to the Neck.",
    "Click on sucking pipe → Attach the suction pipe/bulb and pull the oil up about 5 mm above the upper mark.",
    "Start timing when the oil reaches point B and stop when it reaches the lower mark.",
    "Turn ON the weighing machine",
    "Click on measuring cylinder and place it on the weighing machine",
    "Click on TARE button to set the weight to zero",
    "Click on pipette → fill distilled water in the measuring cylinder (Note down weight)",
    "Click on pipette → transfer the distilled water from the measuring cylinder into the flask",
    "Click on pipette → fill turpentine oil in the measuring cylinder (Note down weight)",
    "Congratulations! You have completed the experiment successfully."
];


// DOM Elements
var startbutton = document.getElementById("start");
var mes = document.getElementById("text");
var tablesdiv = document.getElementById("tablesdiv");


// Experiment variables
var messcounter = 0;
var f = 0;

// Start experiment
function start() {
    if (messcounter < message.length) {
        update();
        startbutton.style.visibility = "hidden"; // hide START after first click
    } else {
        tablesdiv.style.visibility = "visible";
        mes.innerText = "Congratulations! You have completed the experiment successfully.";
    }
}

// Update the message and speak
function update() {
    mes.innerText = message[messcounter];
    speech1(message[messcounter]);
    messcounter+=1;
}

// Speech synthesis
function speech1(text) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    const voice = voices.find(voice => voice.name === 'Microsoft Zira - English (United States)') || voices[0];
    utterance.voice = voice;
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
}


// var message=["Press start button to start the experiment",
//     "click on pipette to take 15ml KOH solution and fill it in the empty flask",
//     "again click on pipette to take 15ml koh and put it in oil sample ",
//     "click on oil sample flask to put it on heating machine to make oil soluble in KOH solution",
//     "by clicking on temperature nob on heat machine, set the temperature at 70 degree celcius",
//     "now click on HCL solution flask to fill the solution in burette",
//     "add some drops of phenolphthlein indicator in KOH flask",
//     "now put flask under the burette",
//     "click on burette nob until you get the transparent colour of the solution",
//     "note down the reading shown in the burette to know how much solution is used to titrate 15ml of 0.5(M) KOH solution",
//     "put flask at their original postion by clicking on it",
//     "wait to complete 30 minutes",
//     "click on the oil sample to raise it from the heat machine",
//     "add some drops of phenolphthalien",
//     "put the flask under the burette",
//     "click on burette nob until you get the transparent colour of the solution",
//     "again note down the reading shown in the burette to know how much solution is used to titrate oil with 15ml of 0.5(M) KOH solution",
//     "put flask at their original postion by clicking on it",
//     "repeat this process two more times to get accurate results",
//     "to see observations press observations button",
//     "repeat this process one more time to get accurate results"
//     ]



// var startlab = document.querySelector("#startinglab")
// var startlab2 = document.querySelector("#workinglab")
// var startbutton = document.querySelector("#start")
// var langselector = document.querySelector("#langselector")
// var mes = document.querySelector("#text")
// var tablesdiv = document.querySelector("#tablesdiv")

// var statuses = 0
// var f=0
// var messcounter = 0
// var mes1

// function start(){
//     if(statuses==0){
//         statuses=1
//         f=1
//         startbutton.style.visibility="hidden"
//         messcounter=1
//         update()
//     }
//     else if(f==40){
//         resizeall()
//         f=1
//         messcounter=1
//         update()
//         startbutton.style.visibility="hidden"
//         trial()
//     }
//     else if(f==2000){
//         tablesdiv.style.visibility="visible"
//         f=3000
//         mes.innerText="Congratulations! You have completed the experiment successfully."
//     }
// }

// function eng1(){
//     // console.log(lang)
//     lang="eng"
//     // headertext.innerText="Measurement of Electrical conductance to determine dissociation constant of 'Acetic' acid"
//     langselector.style.opacity="0%"
//     setTimeout(function(){
//         langselector.style.visibility="hidden"
//         // s.style.animation="vibrate 1s"
//         // s.style.animationIterationCount="infinite"
//     },1000)
//     update() 
// }

// function speech1(){
//     speechSynthesis.cancel();
//     if(lang=="none"){
//     }
//     else if(lang=="eng"){
//         mes1=message[messcounter-1]
//     }
//     setTimeout(function(){ 
//         const utterance = new SpeechSynthesisUtterance(mes1);
//         const voices = speechSynthesis.getVoices()
//         const voice1 = voices.find(voice => voice.name === 'Microsoft Kalpana - Hindi (India)')
//         const voice = voices.find(voice => voice.name === 'Microsoft Zira - English (United States)')        
//         //const utterance = new SpeechSynthesisUtterance(mes1);
//         if(lang=="eng"){
//             utterance.voice=voice
//             utterance.lang='en-IN';
//         }
//         utterance.pitch=1;
//         utterance.rate=1;
//         utterance.volume=1;
//         speechSynthesis.speak(utterance);
//     },500)
// }

// function update(){
//     // console.log(message[messcounter])
//     if(lang=="eng"){
//         mes.innerText=message[messcounter]
//     }
//     messcounter+=1
//         speech1()
// }





// // -----------------------------------------------------
// var hmessage = [
//     "प्रयोग शुरू करने के लिए स्टार्ट बटन दबाएँ",
//     "15ml KOH घोल लेने के लिए पिपेट पर क्लिक करें और इसे खाली फ्लास्क में भरें",
//     "फिर से 15ml KOH घोल लेने के लिए पिपेट पर क्लिक करें और इसे oil sample में डालें",
//     "oil sample को KOH घोल में घुलनशील बनाने के लिए उसे हीटिंग मशीन पर रखने के लिए फ्लास्क पर क्लिक करें",
//     "हीट मशीन पर तापमान नॉब पर क्लिक करके, तापमान को 70 डिग्री सेल्सियस पर सेट करें",
//     "अब ब्यूरेट में घोल भरने के लिए HCL सॉल्यूशन फ्लास्क पर क्लिक करें",
//     "KOH फ्लास्क में फिनोलफ्थलीन इंडिकेटर की कुछ बूंदें डालें",
//     "अब फ्लास्क को ब्यूरेट के नीचे रखें",
//     "ब्यूरेट नोब पर तब तक क्लिक करें जब तक आपको घोल का पारदर्शी रंग न मिल जाए",
//     "यह जानने के लिए ब्यूरेट में दिखाई गई रीडिंग को नोट करें कि 15ml 0.5(M) KOH घोल को टाइट्रेट करने के लिए कितना HCL घोल इस्तेमाल किया गया है",
//     "फ्लास्क पर क्लिक करके उसे उसकी मूल स्थिति में रखें",
//     "30 मिनट पूरे होने तक प्रतीक्षा करें",
//     "oil sample को हीट मशीन से उठाने के लिए उस पर क्लिक करें",
//     "फ़िनोल्फ़थेलीन की कुछ बूँदें जोड़ें",
//     "फ्लास्क को ब्यूरेट के नीचे रखें",
//     "ब्यूरेट नोब पर तब तक क्लिक करें जब तक आपको घोल का पारदर्शी रंग न मिल जाए",
//     "यह जानने के लिए ब्यूरेट में दिखाए गए रीडिंग को फिर से नोट करें कि 15ml 0.5(M) KOH घोल के साथ oil को टाइट्रेट करने के लिए कितना HCL घोल उपयोग किया गया है",
//     "फ्लास्क पर क्लिक करके उसे उसकी मूल स्थिति में रखें",
//     "सटीक परिणाम प्राप्त करने के लिए इस प्रक्रिया को दो बार और दोहराएं",
//     "Observations देखने के लिए Observations बटन दबाएँ",
//     "सटीक परिणाम प्राप्त करने के लिए इस प्रक्रिया को एक बार और दोहराएं"
// ];

// var message = [
//     "Press start button to start the experiment",
//     "Click on pipette to take 15ml KOH solution and fill it in the empty flask",
//     "Again click on pipette to take 15ml KOH and put it in oil sample",
//     "Click on oil sample flask to put it on heating machine to make oil soluble in KOH solution",
//     "Click on temperature knob on heat machine and set temperature to 70°C",
//     "Now click on HCL solution flask to fill the solution in burette",
//     "Add some drops of phenolphthalein indicator in KOH flask",
//     "Now put flask under the burette",
//     "Click on burette knob until solution turns transparent",
//     "Note down the burette reading to know HCL used to titrate 15ml 0.5(M) KOH",
//     "Put flask back to original position",
//     "Wait for 30 minutes",
//     "Click on oil sample to remove it from heating machine",
//     "Add some drops of phenolphthalein",
//     "Put the flask under the burette",
//     "Click burette knob until transparent colour appears",
//     "Again note down the burette reading",
//     "Put flask back to original position",
//     "Repeat this process two more times for accurate results",
//     "Press Observation button",
//     "Repeat this once more for accuracy"
// ];

// // -----------------------------------------------------
// //  DOM ELEMENTS
// // -----------------------------------------------------
// var mes = document.querySelector("#text");
// var langselector = document.querySelector("#langselector");

// // -----------------------------------------------------
// //  GLOBAL VARIABLES
// // -----------------------------------------------------
// var messcounter = 0;
// var lang = "eng";

// // -----------------------------------------------------
// //  LANGUAGE FUNCTIONS
// // -----------------------------------------------------
// function eng1() {
//     lang = "eng";
//     messcounter = 0;
//     safeUpdate();
//     speech1();
//     langselector.style.display = "none";
// }

// function hindi1() {
//     lang = "hindi";
//     messcounter = 0;
//     safeUpdate();
//     speech1();
//     langselector.style.display = "none";
// }

// // -----------------------------------------------------
// //  START BUTTON FUNCTION
// // -----------------------------------------------------
// function start() {
//     messcounter = 0;
//     safeUpdate();
//     speech1();

//     // start the simulation
//     if (typeof functionOne === "function") {
//         functionOne();
//     } else {
//         console.error("❌ ERROR: functionOne() is missing!");
//     }
// }

// // -----------------------------------------------------
// //  UPDATE MESSAGE
// // -----------------------------------------------------
// function update() {
//     if (messcounter < 0) messcounter = 0;

//     if (lang === "hindi") mes.innerText = hmessage[messcounter];
//     else mes.innerText = message[messcounter];

//     speech1();
//     messcounter++;
// }

// // -----------------------------------------------------
// //  SAFE UPDATE (delay)
// // -----------------------------------------------------
// function safeUpdate() {
//     setTimeout(update, 80);
// }

// // -----------------------------------------------------
// //  SPEECH FUNCTION
// // -----------------------------------------------------
// function speech1() {
//     speechSynthesis.cancel();

//     let mes1 = (lang === "hindi") ? hmessage[messcounter] : message[messcounter];

//     setTimeout(() => {
//         const utterance = new SpeechSynthesisUtterance(mes1);
//         const voices = speechSynthesis.getVoices();

//         const hindiVoice = voices.find(v => v.name.includes("Hindi"));
//         const engVoice = voices.find(v => v.name.includes("Zira"));

//         if (lang === "hindi") {
//             utterance.lang = "hi-IN";
//             if (hindiVoice) utterance.voice = hindiVoice;
//         } else {
//             utterance.lang = "en-US";
//             if (engVoice) utterance.voice = engVoice;
//         }

//         speechSynthesis.speak(utterance);
//     }, 300);
// }

// // -----------------------------------------------------
// //  EXPOSE ALL FUNCTIONS TO HTML
// // -----------------------------------------------------
// window.update = update;
// window.safeUpdate = safeUpdate;
// window.speech1 = speech1;
// window.eng1 = eng1;
// window.hindi1 = hindi1;
// window.start = start;
