/*eslint-env browser*/

//STEP 1
function alertDisplay(){
    "use strict";
    window.alert("Button1: I have been clicked");
}

//STEP 2
function init() {
    "use strict";
    var button2 = window.document.getElementById("button2");
    button2.onclick = function (){
    window.alert("Button2: I have been clicked");
};

//STEP 3
    function writeMessage(){
        window.alert("Button3: I have been clicked");
    }
    var button3 = window.document.getElementById("button3");
    button3.addEventListener("click", writeMessage);

//STEP 4
    var button4 = window.document.getElementById("button4");
    button4.addEventListener("click", function(){
        window.alert("Button4: I have been clicked");
    });
}

//STEP 5
window.addEventListener("load", init);
