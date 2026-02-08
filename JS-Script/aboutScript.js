var swch = document.getElementById("switchOne");
//switch language to english by redirecting to other page with english text
function switchLanguage() {
    "use strict";
    swch.checked = false;
    window.location.href = "en/about";
}
