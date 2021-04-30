var swch = document.getElementById("switchOne");
swch.checked = true;
//switch language to english by redirecting to other page with english text
function switchLanguage() {
    "use strict";
    swch.checked = false;
    window.location.href = "../services.html";
}