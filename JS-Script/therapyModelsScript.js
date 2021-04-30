//changes text color and background color of div to look as the selected tab of therapy models.
//Also makes div with info appear
function firstBlock() {
    "use strict";
    resetText();
    document.getElementById("text1").style.color = "black";
    document.getElementById("firstBlock").style.backgroundColor = "white";
    document.getElementById("firstInfo").style.display = "block";
}
function secondBlock() {
    "use strict";
    resetText();
    document.getElementById("text2").style.color = "black";
    document.getElementById("secondBlock").style.backgroundColor = "white";
    document.getElementById("secondInfo").style.display = "block";
}
function thirdBlock() {
    "use strict";
    resetText();
    document.getElementById("text3").style.color = "black";
    document.getElementById("thirdBlock").style.backgroundColor = "white";
    document.getElementById("thirdInfo").style.display = "block";
}
function fourthBlock() {
    "use strict";
    resetText();
    document.getElementById("text4").style.color = "black";
    document.getElementById("fourthBlock").style.backgroundColor = "white";
    document.getElementById("fourthInfo").style.display = "block";
}
function fifthBlock() {
    "use strict";
    resetText();
    document.getElementById("text5").style.color = "black";
    document.getElementById("fifthBlock").style.backgroundColor = "white";
    document.getElementById("fifthInfo").style.display = "block";
}
function sixthBlock() {
    "use strict";
    resetText();
    document.getElementById("text6").style.color = "black";
    document.getElementById("sixthBlock").style.backgroundColor = "white";
    document.getElementById("sixthInfo").style.display = "block";
}
function seventhBlock() {
    "use strict";
    resetText();
    document.getElementById("text7").style.color = "black";
    document.getElementById("seventhBlock").style.backgroundColor = "white";
    document.getElementById("seventhInfo").style.display = "block";
}
//resets all tabs to default of the therapy model tabs
function resetText()
{
    document.getElementById("firstInfo").style.display = "none";
    document.getElementById("secondInfo").style.display = "none";
    document.getElementById("thirdInfo").style.display = "none";
    document.getElementById("fourthInfo").style.display = "none";
    document.getElementById("fifthInfo").style.display = "none";
    document.getElementById("sixthInfo").style.display = "none";
    document.getElementById("seventhInfo").style.display = "none";
    
    document.getElementById("text1").style.textDecoration = "none";
    document.getElementById("text1").style.color = "white";
    document.getElementById("firstBlock").style.backgroundColor = "cadetblue";
   
    
    document.getElementById("text2").style.textDecoration = "none";
    document.getElementById("text2").style.color = "white";
    document.getElementById("secondBlock").style.backgroundColor = "cadetblue";
    
    
    document.getElementById("text3").style.textDecoration = "none";
    document.getElementById("text3").style.color = "white";
    document.getElementById("thirdBlock").style.backgroundColor = "cadetblue";
   
    
    document.getElementById("text4").style.textDecoration = "none";
    document.getElementById("text4").style.color = "white";
    document.getElementById("fourthBlock").style.backgroundColor = "cadetblue";
    
    
    document.getElementById("text5").style.textDecoration = "none";
    document.getElementById("text5").style.color = "white";
    document.getElementById("fifthBlock").style.backgroundColor = "cadetblue";
    
    
    document.getElementById("text6").style.textDecoration = "none";
    document.getElementById("text6").style.color = "white";
    document.getElementById("sixthBlock").style.backgroundColor = "cadetblue";
   
    
    document.getElementById("text7").style.textDecoration = "none";
    document.getElementById("text7").style.color = "white";
    document.getElementById("seventhBlock").style.backgroundColor = "cadetblue";
    
}

var swch = document.getElementById("switchOne");

//switches to to english texts by redirecting to english page
function switchLanguage() {
    "use strict";
    swch.checked = false;
    window.location.href = "en/therapyModels.html";
}

