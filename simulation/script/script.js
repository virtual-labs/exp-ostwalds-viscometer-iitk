function safeUpdate() {
    setTimeout(update, 200);
}


var initialOstwalt = document.querySelector("#initialOstwaltViscometer");
var dwOneck = document.querySelector("#distilledwaterOstwalneck");
var dwOneckfull = document.querySelector("#distilledwaterOstwalfull");
var dwOneckfull01 = document.querySelector("#distilledwaterOstwalfull-01");
var dwOneckfull02 = document.querySelector("#distilledwaterOstwalfull-02");
var dwOneckfull03 = document.querySelector("#distilledwaterOstwalfull-03");
var dwOneckfull04 = document.querySelector("#distilledwaterOstwalfull-04");
var dwOneckfull05 = document.querySelector("#distilledwaterOstwalfull-05");
var dwOneckfull06 = document.querySelector("#distilledwaterOstwalfull-06");
var dwOneckfull07 = document.querySelector("#distilledwaterOstwalfull-07");
var dwOneckfull08 = document.querySelector("#distilledwaterOstwalfull-08");
var dwOneckfull09 = document.querySelector("#distilledwaterOstwalfull-09");
var OVnull = document.querySelector("#nullOstwaltViscometer");
var textAB = document.querySelector("#textAB");
var TOOneck = document.querySelector("#turpentineoilOstwaltNeck");
var TOOfull = document.querySelector("#turpentineoilOstwaltfull");
var TOOfull01 = document.querySelector("#turpentineoilOstwaltfull-01");
var TOOfull02 = document.querySelector("#turpentineoilOstwaltfull-02");
var TOOfull03 = document.querySelector("#turpentineoilOstwaltfull-03");
var TOOfull04 = document.querySelector("#turpentineoilOstwaltfull-04");
var TOOfull05 = document.querySelector("#turpentineoilOstwaltfull-05");
var TOOfull06 = document.querySelector("#turpentineoilOstwaltfull-06");
var TOOfull07 = document.querySelector("#turpentineoilOstwaltfull-07");
var TOOfull08 = document.querySelector("#turpentineoilOstwaltfull-08");
var TOOfull09 = document.querySelector("#turpentineoilOstwaltfull-09");

var WFneck = document.querySelector("#waterflaskneck");
var WFhalf = document.querySelector("#waterflaskhalf");
var TOneck = document.querySelector("#turpentineOilneck");
var TOhalf = document.querySelector("#turpentineOilhalf");
var Spipe = document.querySelector("#SuckingPipe");
var Spipe1 = document.querySelector("#SuckingPipe1");
var epippete = document.querySelector("#epippete");
var fpippete = document.querySelector("#fpippete");
var epippete1 = document.querySelector("#epippete1");
var fpippete1 = document.querySelector("#fpippete1");
// var tBtn1 = document.querySelector("#toggleBtn1");
// var tBtn = document.querySelector("#toggleBtn");
// var tm1 = document.querySelector("#time1");
// var tm = document.querySelector("#time");
var wch1 = document.querySelector("#Watch1");
var wch2 = document.querySelector("#Watch2");
var WMTB = document.querySelector("#Tbutton");



var WMinitial = document.querySelector("#initial0000");
var WMempty = document.querySelector("#empty2050");
var WMliquid = document.querySelector("#liquid3000");
var WMwater = document.querySelector("#water6000");
var WMturpentine = document.querySelector("#turpentine5040");
// WMTB.addEventListener("click", () => {
//     WMempty.style.opacity = "0%";
//     WMliquid.style.opacity = "0%";
//     WMwater.style.opacity = "0%";
//     WMturpentine.style.opacity = "0%";
//     WMinitial.style.opacity = "100%";
// });

var epippete2 = document.querySelector("#epippete2");
var fpippete2 = document.querySelector("#fpippete2");
var epippete3 = document.querySelector("#epippete3");
var fpippete3 = document.querySelector("#fpippete3");
var epippete4 = document.querySelector("#epippete4");
var fpippete4 = document.querySelector("#fpippete4");

var MCinitial = document.querySelector("#measuringcylinder200ml");
var MCwater30ml = document.querySelector("#waterfilled30ml");
var MCwater60ml = document.querySelector("#waterfilled60ml");
var MCturpentine30ml = document.querySelector("#turpentineoilfilled30ml");
var MCturpentine50ml = document.querySelector("#turpentineoilfilled50ml");

// var TableData = document.querySelector("#card");

// let currentFunction = 1;

// const toggleBtn = document.getElementById("toggleBtn");
// const f2btn = document.getElementById("function2");
// const f3btn = document.getElementById("function3");
// const f4btn = document.getElementById("function4");
// const f5btn = document.getElementById("function5");

// Toggle buttons
const toggleBtn = document.getElementById("toggleBtn");      // Stage 1
const toggleBtnTwo = document.getElementById("toggleBtnTwo"); // Stage 6
const Obutton = document.getElementById("Obutton");           // Stage 7
const Tbutton = document.getElementById("Tbutton");           // Stage 8

// Stage unlock buttons
const f2btn = document.getElementById("function2");
const f3btn = document.getElementById("function3");
const f4btn = document.getElementById("function4");
const f5btn = document.getElementById("function5");
const f6btn = document.getElementById("function6");
const f7btn = document.getElementById("function7");
const f8btn = document.getElementById("function8");
const f9btn = document.getElementById("function9");
const f10btn = document.getElementById("function10");
const f11btn = document.getElementById("function11");
const f12btn = document.getElementById("function12");

// Track current stage
let currentFunction = 1; // always starts at stage 1

function enableNextStage(nextStage, nextBtn, nextFunction) {
    currentFunction = nextStage;
    if (nextBtn) nextBtn.classList.remove("disabled");
    messcounter = nextStage;
    safeUpdate();
    toggleBtn.classList.remove("disabled");
    toggleBtn.onclick = nextFunction;
}


/* ──────────────────────────────
   STAGE 1
────────────────────────────── */
function functionOne() {
    if (currentFunction !== 1) return;

    epippete.style.rotate = "0deg";
    fpippete.style.rotate = "0deg";
    epippete.style.transform = "translate(0%,-150%)";
    fpippete.style.transform = "translate(0%,-150%)";

    setTimeout(() => {
        epippete.style.transform = "translate(750%,-150%)";
        fpippete.style.transform = "translate(750%,-150%)";

        setTimeout(() => {
            epippete.style.transform = "translate(750%,-50%)";
            fpippete.style.transform = "translate(750%,-50%)";

            setTimeout(() => {
                epippete.style.transform = "translate(750%,-60%)";
                fpippete.style.transform = "translate(750%,-60%)";
                fpippete.style.visibility = "visible";

                setTimeout(() => {
                    epippete.style.opacity = "0%";
                    fpippete.style.opacity = "100%";
                    WFneck.style.opacity = "0%";
                    WFhalf.style.opacity = "100%";

                    setTimeout(() => {
                        epippete.style.transform = "translate(750%,-150%)";
                        fpippete.style.transform = "translate(750%,-150%)";

                        setTimeout(() => {
                            epippete.style.transform = "translate(-662.5%,-150%)";
                            fpippete.style.transform = "translate(-662.5%,-150%)";

                            setTimeout(() => {
                                epippete.style.transform = "translate(-662.5%,-120%)";
                                fpippete.style.transform = "translate(-662.5%,-120%)";
                                dwOneck.style.opacity = "100%";

                                setTimeout(() => {
                                    epippete.style.opacity = "100%";
                                    fpippete.style.opacity = "0%";

                                    setTimeout(() => {
                                        epippete.style.transform = "translate(-662.5%,-200%)";
                                        fpippete.style.transform = "translate(-662.5%,-200%)";

                                        setTimeout(() => {
                                            epippete.style.transform = "translate(0%,0%)";
                                            fpippete.style.transform = "translate(0%,0%)";
                                            epippete.style.rotate = "-90deg";
                                            fpippete.style.rotate = "-90deg";
                                            

                                            enableNextStage(2, f2btn, functionTwo);

                                        }, 1500);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1500);
        }, 1000);
    }, 1500);

    Spipe.classList.remove("disabled");
}



/* ──────────────────────────────
   STAGE 2
────────────────────────────── */
function functionTwo() {
    if (currentFunction !== 2) return;

    toggleBtn.onclick = null;
    toggleBtn.classList.add("disabled");

    Spipe.style.rotate = "0deg";

    setTimeout(function () {
        Spipe.style.transform = "translate(250%,0%)";
        setTimeout(function () {
            Spipe.style.transform = "translate(250%,-520%)";
            setTimeout(function () {
                Spipe.style.transform = "translate(185%,-520%)";
                setTimeout(function () {
                    dwOneckfull.style.opacity = "100%";
                    setTimeout(function () {
                        Spipe.style.transform = "translate(250%,-520%)";
                        setTimeout(function () {
                            Spipe.style.transform = "translate(250%,0%)";
                            setTimeout(function () {
                                Spipe.style.transform = "translate(0%,0%)";
                                setTimeout(function () {
                                    Spipe.style.rotate = "30deg";

                                    enableNextStage(3, f3btn, functionThree);

                                }, 800);
                            }, 800);
                        }, 800);
                    }, 900);
                }, 900);
            }, 900);
        }, 900);
    }, 900);
}



/* ──────────────────────────────
   STAGE 3
────────────────────────────── */
function functionThree() {
    document.getElementById("toggleBtn").onclick = null;

    if (currentFunction !== 3) return;

    dwOneckfull.style.opacity = "0%";
    dwOneckfull01.style.opacity = "100%";

    setTimeout(function () {
        dwOneckfull02.style.opacity = "100%";
        dwOneckfull01.style.opacity = "0%";

        setTimeout(function () {
            dwOneckfull03.style.opacity = "100%";
            dwOneckfull02.style.opacity = "0%";

            setTimeout(function () {
                textAB.style.opacity = "100%";
                dwOneckfull04.style.opacity = "100%";
                dwOneckfull03.style.opacity = "0%";

                setTimeout(function () {
                    dwOneckfull05.style.opacity = "100%";
                    dwOneckfull04.style.opacity = "0%";

                    setTimeout(function () {
                        dwOneckfull06.style.opacity = "100%";
                        dwOneckfull05.style.opacity = "0%";

                        setTimeout(function () {
                            dwOneckfull07.style.opacity = "100%";
                            dwOneckfull06.style.opacity = "0%";

                            setTimeout(function () {
                                dwOneckfull08.style.opacity = "100%";
                                dwOneckfull07.style.opacity = "0%";

                                setTimeout(function () {
                                    dwOneckfull09.style.opacity = "100%";
                                    dwOneckfull08.style.opacity = "0%";

                                    enableNextStage(4, f4btn, functionFour);
                                    document.getElementById("function4").classList.remove("disabled");
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1500);
            }, 1000);
        }, 1000);
    }, 1000);

    document.getElementById("epippete1").classList.remove("disabled");
    document.getElementById("fpippete1").classList.remove("disabled");
}


/* ──────────────────────────────
   STAGE 4
────────────────────────────── */
function functionFour() {
    if (currentFunction !== 4) return;

    dwOneckfull09.style.opacity = "0%";
    textAB.style.opacity = "0%";
    OVnull.style.opacity = "100%";
    setTimeout(function(){
        epippete.style.opacity = "0%";
        fpippete.style.opacity = "0%";
        epippete1.style.opacity = "100%";
        fpippete1.style.opacity = "0%";

        setTimeout(() => {
            epippete1.style.rotate = "0deg";
            fpippete1.style.rotate = "0deg";

            setTimeout(() => {
                epippete1.style.transform = "translate(0%,-150%)";
                fpippete1.style.transform = "translate(0%,-150%)";

                setTimeout(() => {
                    epippete1.style.transform = "translate(1575%,-150%)";
                    fpippete1.style.transform = "translate(1575%,-150%)";

                    setTimeout(() => {
                        epippete1.style.transform = "translate(1575%,-50%)";
                        fpippete1.style.transform = "translate(1575%,-50%)";

                        setTimeout(() => {
                            epippete1.style.transform = "translate(1575%,-60%)";
                            fpippete1.style.transform = "translate(1575%,-60%)";
                            fpippete1.style.opacity = "100%";

                            setTimeout(() => {
                                epippete1.style.opacity = "0%";
                                fpippete1.style.opacity = "100%";
                                TOneck.style.opacity = "0%";
                                TOhalf.style.opacity = "100%";

                                setTimeout(() => {
                                    epippete1.style.transform = "translate(1575%,-150%)";
                                    fpippete1.style.transform = "translate(1575%,-150%)";


                                    setTimeout(() => {
                                        epippete1.style.transform = "translate(-662.5%,-150%)";
                                        fpippete1.style.transform = "translate(-662.5%,-150%)";

                                        setTimeout(() => {
                                            epippete1.style.transform = "translate(-662.5%,-120%)";
                                            fpippete1.style.transform = "translate(-662.5%,-120%)";
                                            TOOneck.style.opacity = "100%";

                                            setTimeout(() => {
                                                epippete1.style.opacity = "100%";
                                                fpippete1.style.opacity = "0%";

                                                setTimeout(() => {
                                                    epippete1.style.transform = "translate(-662.5%,-200%)";
                                                    fpippete1.style.transform = "translate(-662.5%,-200%)";

                                                    setTimeout(() => {
                                                        epippete1.style.transform = "translate(0%,0%)";
                                                        fpippete1.style.transform = "translate(0%,0%)";
                                                        epippete1.style.rotate = "-90deg";
                                                        fpippete1.style.rotate = "-90deg";


                                                        enableNextStage(5, f5btn, functionFive);

                                                    }, 1500);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1500);
                    }, 1000);
                }, 1000);
            }, 500);
        }, 500);
    }, 1000);

    Spipe1.classList.remove("disabled");
}

/* ──────────────
   STAGE 5
────────────── */
function functionFive() {
    if (currentFunction !== 5) return;

    toggleBtnTwo.onclick = null;
    toggleBtnTwo.classList.add("disabled");

    Spipe.style.opacity = "0%";
    Spipe1.style.opacity = "100%";

    setTimeout(function(){
         Spipe1.style.rotate = "0deg"
        setTimeout(function () {
            Spipe1.style.transform = "translate(250%,0%)"
            setTimeout(function () {
                Spipe1.style.transform = "translate(250%,-520%)"
                setTimeout(function () {
                    Spipe1.style.transform = "translate(185%,-520%)"
                    setTimeout(function () {
                        TOOfull.style.opacity = "100%"
                        setTimeout(function () {
                            Spipe1.style.transform = "translate(250%,-520%)"
                            setTimeout(function () {
                                Spipe1.style.transform = "translate(250%,0%)"
                                setTimeout(function () {
                                    Spipe1.style.transform = "translate(0%,0%)"
                                    setTimeout(function () {
                                        Spipe1.style.rotate = "30deg"
                                        wch1.style.opacity = "0%"
                                        wch2.style.opacity = "100%"

                                    // currentFunction = 6;
                                    // document.getElementById("function6").classList.remove("disabled");
                                    // toggleBtnTwo.classList.remove("disabled");
                                    // toggleBtnTwo.onclick = functionSix;

                                    enableNextStage(6, f6btn, functionSix);

                                    // FIXED Watch Button Activation
                                    toggleBtnTwo.classList.remove("disabled");
                                    toggleBtnTwo.onclick = functionSix;

                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

/* ──────────────
   STAGE 6
────────────── */
function functionSix() {
    if (currentFunction !== 6) return;

    toggleBtnTwo.onclick = null;

    TOOfull.style.opacity = "0%";
    TOOfull01.style.opacity = "100%";

    setTimeout(function () {
        TOOfull02.style.opacity = "100%";
        TOOfull01.style.opacity = "0%";

        setTimeout(function () {
            TOOfull03.style.opacity = "100%";
            TOOfull02.style.opacity = "0%";

            setTimeout(function () {
                TOOfull04.style.opacity = "100%";
                TOOfull03.style.opacity = "0%";

                setTimeout(function () {
                    TOOfull05.style.opacity = "100%";
                    TOOfull04.style.opacity = "0%";

                    setTimeout(function () {
                        TOOfull06.style.opacity = "100%";
                        TOOfull05.style.opacity = "0%";

                        setTimeout(function () {
                            TOOfull07.style.opacity = "100%";
                            TOOfull06.style.opacity = "0%";

                            setTimeout(function () {
                                TOOfull08.style.opacity = "100%";
                                TOOfull07.style.opacity = "0%";

                                setTimeout(function () {
                                    TOOfull09.style.opacity = "100%";
                                    TOOfull08.style.opacity = "0%";

                                    // ✔ FIXED unlock Stage 7 properly
                                    enableNextStage(7, f7btn, functionSeven);
                                    document.getElementById("function7").classList.remove("disabled");
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1300);
            }, 1000);
        }, 1000);
    }, 1000);
    document.getElementById("Obutton").classList.remove("disabled");
}

/* ──────────────
   STAGE 7
────────────── */
function functionSeven() {
    if (currentFunction !== 7) return;
    wch2.style.opacity = "0%"
    setTimeout(function(){
        WMinitial.style.opacity = "100%"
        enableNextStage(8, f8btn, functionEighth);
        document.getElementById("function8").classList.remove("disabled");
    },500)
    document.getElementById("measuringcylinder200ml").classList.remove("disabled");
}

/* ──────────────
   STAGE 8
────────────── */
function functionEighth() {
    if (currentFunction !== 8) return;
    MCinitial.style.transform = "translate(0%,-44%)"
        setTimeout(function() {
            MCinitial.style.transform = "translate(243%,-44%)"
            setTimeout(function() {
                 WMempty.style.opacity = "100%"
                 enableNextStage(9, f9btn, functionNine);
                 document.getElementById("function9").classList.remove("disabled");
            },600)
        },1000)  
        document.getElementById("Tbutton").classList.remove("disabled");            
}


/* ──────────────
   STAGE 9
────────────── */

function functionNine() {
    if (currentFunction !== 9) return;
    setTimeout(function(){
        WMempty.style.opacity = "0%"
        WMinitial.style.opacity = "100%"  
        WFhalf.style.opacity = "0%"
        TOhalf.style.opacity = "0%"
        WFneck.style.opacity = "100%"
        TOneck.style.opacity = "100%"
        enableNextStage(10, f10btn, functionTen);
        document.getElementById("function10").classList.remove("disabled"); 
    },500)  
    document.getElementById("epippete2").classList.remove("disabled");
    document.getElementById("fpippete2").classList.remove("disabled");
}


/* ──────────────
   STAGE 10
────────────── */
function functionTen() {
    if (currentFunction !== 10) return;
        epippete1.style.opacity = "0%"
        fpippete1.style.opacity = "0%"
        epippete2.style.opacity = "100%"
        fpippete2.style.opacity = "0%"
        epippete2.style.rotate = "0deg"
        fpippete2.style.rotate = "0deg"
        setTimeout(function(){
            epippete2.style.transform = "translate(0%,-150%)"
            fpippete2.style.transform = "translate(0%,-150%)"
            setTimeout(function () {
                epippete2.style.transform = "translate(750%,-150%)"
                fpippete2.style.transform = "translate(750%,-150%)"
                setTimeout(function () {
                    epippete2.style.transform = "translate(750%,-50%)"
                    fpippete2.style.transform = "translate(750%,-50%)"
                    setTimeout(function () {
                        epippete2.style.transform = "translate(750%,-60%)"
                        fpippete2.style.transform = "translate(750%,-60%)"
                        fpippete2.style.visibility = "visible"
                        setTimeout(function () {
                            epippete2.style.opacity = "0%"
                            fpippete2.style.opacity = "100%"
                            WFneck.style.opacity = "0%"
                            WFhalf.style.opacity = "100%"
                            setTimeout(function () {
                                epippete2.style.transform = "translate(750%,-200%)"
                                fpippete2.style.transform = "translate(750%,-200%)"
                                 setTimeout(function () {
                                    epippete2.style.transform = "translate(3525%,-200%)"
                                    fpippete2.style.transform = "translate(3525%,-200%)"
                                     setTimeout(function () {
                                         epippete2.style.transform = "translate(3525%,-120%)"
                                         fpippete2.style.transform = "translate(3525%,-120%)"
                                         MCwater60ml.style.opacity = "100%"
                                         WMwater.style.opacity = "100%"
                                         setTimeout(function () {
                                             epippete2.style.opacity = "100%"
                                             fpippete2.style.opacity = "0%"
                                             setTimeout(function () {
                                                 epippete2.style.transform = "translate(3525%,-200%)"
                                                 fpippete2.style.transform = "translate(3525%,-200%)"
                                                 setTimeout(() => {
                                                    epippete2.style.transform = "translate(0%,-200%)"
                                                    fpippete2.style.transform = "translate(0%,-200%)"
                                                    //epippete2.style.rotate = "-90deg"
                                                    //fpippete2.style.rotate = "-90deg"
                                                    //currentFunction = 2;
                                                    //document.getElementById("function2").classList.remove("disabled");
                                                    setTimeout(function(){
                                                        epippete2.style.transform = "translate(0%,0%)"
                                                        fpippete2.style.transform = "translate(0%,0%)"
                                                        setTimeout(function(){
                                                            epippete2.style.rotate = "-90deg"
                                                            fpippete2.style.rotate = "-90deg"
                                                            epippete2.style.opacity = "0%"
                                                            fpippete2.style.opacity = "0%"
                                                            epippete3.style.opacity = "100%"
                                                            fpippete3.style.opacity = "0%"
                                                            enableNextStage(11, f11btn, functionEleven);
                                                            document.getElementById("function11").classList.remove("disabled"); 
                                                        },1000)
                                                    },1000)
                                                 }, 1500);
                                             }, 1000)
                                         }, 1000)
                                     }, 1000)
                                 }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1500)
                }, 1000)
            }, 1500)
        },1000)
        document.getElementById("epippete3").classList.remove("disabled");
        document.getElementById("fpippete3").classList.remove("disabled");
       
}

/* ──────────────
   STAGE 11
────────────── */
function functionEleven() {
    if (currentFunction !== 11) return;
        
        epippete3.style.rotate = "0deg"
        fpippete3.style.rotate = "0deg"
        setTimeout(function(){
            epippete3.style.transform = "translate(0%,-200%)"
            fpippete3.style.transform = "translate(0%,-200%)"
             setTimeout(function () {
                 epippete3.style.transform = "translate(3525%,-200%)"
                 fpippete3.style.transform = "translate(3525%,-200%)"
                 setTimeout(function () {
                     epippete3.style.transform = "translate(3525%,-100%)"
                     fpippete3.style.transform = "translate(3525%,-100%)"
                     setTimeout(function () {
                         epippete3.style.opacity = "0%"
                         fpippete3.style.opacity = "100%"
                         
                         WMinitial.style.opacity = "100%"
                         WMwater.style.opacity = "0%"
                         
                         MCwater60ml.style.opacity = "0%"
                         MCinitial.style.opacity = "100%"
                         setTimeout(function () {
                                epippete3.style.transform = "translate(3525%,-200%)"
                                fpippete3.style.transform = "translate(3525%,-200%)"
                             setTimeout(function () {
                                 epippete3.style.transform = "translate(750%,-200%)"
                                 fpippete3.style.transform = "translate(750%,-200%)"
                                  setTimeout(function () {
                                     epippete3.style.transform = "translate(750%,-50%)"
                                     fpippete3.style.transform = "translate(750%,-50%)"
                                      setTimeout(function () {
                                        WFneck.style.opacity = "100%"
                                        WFhalf.style.opacity = "0%"
                                        epippete3.style.opacity = "100%"
                                        fpippete3.style.opacity = "0%"
                                        
                                        epippete3.style.opacity = "0%"
                                        fpippete3.style.opacity = "0%"
                                        epippete4.style.opacity = "100%"
                                        fpippete4.style.opacity = "0%"
                                        //document.getElementById("card").style.opacity = "1";
                                        //document.getElementById("card").style.pointerEvents = "auto";
                                        enableNextStage(12, f12btn, functionTwelve);
                                        document.getElementById("function12").classList.remove("disabled"); 
                                       
                                      }, 1000)
                                  }, 1000)
                             }, 1000)
                         }, 1000)
                     }, 1500)
                 }, 1000)
             }, 1500)
        },1000)
        document.getElementById("epippete4").classList.remove("disabled");
        document.getElementById("fpippete4").classList.remove("disabled");
}


/* ──────────────
   STAGE 12 — FINAL
────────────── */
function functionTwelve() {
    if (currentFunction !== 12) return;
    epippete4.style.transform = "translate(0%,-150%)"
        fpippete4.style.transform = "translate(0%,-150%)" 
         setTimeout(function () {
             epippete4.style.transform = "translate(840%,-150%)"
             fpippete4.style.transform = "translate(840%,-150%)"
             setTimeout(function() {
                 epippete4.style.transform = "translate(840%,0%)"
                 fpippete4.style.transform = "translate(840%,0%)"
                 setTimeout(function(){
                     epippete4.style.opacity = "0%"
                     fpippete4.style.opacity = "100%"
                     TOhalf.style.opacity = "100%"
                     TOneck.style.opacity = "0%"
                     setTimeout(function(){
                         epippete4.style.transform = "translate(840%,-150%)"
                         fpippete4.style.transform = "translate(840%,-150%)"
                         setTimeout(function(){
                             epippete4.style.transform = "translate(2780%,-150%)"
                             fpippete4.style.transform = "translate(2780%,-150%)"
                             setTimeout(function(){
                                 epippete4.style.transform = "translate(2780%,-50%)"
                                 fpippete4.style.transform = "translate(2780%,-50%)"
                                 setTimeout(function(){
                                     epippete4.style.opacity = "100%"
                                     fpippete4.style.opacity = "0%"
                                     MCinitial.style.opacity = "0%"
                                     MCturpentine50ml.style.opacity = "100%"
                                     //document.getElementById("card").style.opacity = "1";
                                     //document.getElementById("card").style.pointerEvents = "auto";
                                     setTimeout(function(){
                                         epippete4.style.transform = "translate(2780%,-150%)"
                                         fpippete4.style.transform = "translate(2780%,-150%)"
                                         WMinitial.style.opacity = "0%"
                                         WMturpentine.style.opacity = "100%"
                                         setTimeout(function(){
                                             epippete4.style.transform = "translate(-750%,-150%)"
                                             fpippete4.style.transform = "translate(-750%,-150%)"
                                             setTimeout(function(){
                                                 epippete4.style.transform = "translate(-870%,20%)"
                                                 fpippete4.style.transform = "translate(-870%,20%)"
                                                  setTimeout(function(){
                                                      epippete4.style.rotate = "-90deg"
                                                      fpippete4.style.rotate = "-90deg"
                                                        setTimeout(function() {
                                                            MCinitial.style.opacity = "100%"
                                                            MCturpentine50ml.style.opacity = "0%"
                                                            document.getElementById("card").style.opacity = "1";
                                                            document.getElementById("card").style.pointerEvents = "auto";
                                                            enableNextStage(13, f13btn, functionThirteen);
                                                      },10000)
                                                  },1000)
                                             },1000)
                                         },1000)
                                     },1000)
                                 },1000)
                             },1000)
                         },1000)
                     },1000)
                 },1000)
             },1000)
         },1000)
}
