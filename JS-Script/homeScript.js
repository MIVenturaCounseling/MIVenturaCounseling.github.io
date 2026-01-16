/*jslint browser: true, devel: true */
var $ = this.$, document = this.document, console = this.console;
var swch = document.getElementById("switchOne");
//function used when slide up message appears asking if need immediate help , if so scrolls page to crisis info
$(document).ready(function () {
    "use strict";
    //slides down crisis pop up asking if need immediate help
    $('#helpContainer').css('visibility', 'visible').hide().delay(400).slideDown('slow');
    $('#questionContainer').css('visibility', 'visible').hide().delay(100).show();
    $('#responseContainer').css('visibility', 'visible').hide().delay(100).show();
    $('#choiceOneContainer').css('visibility', 'visible').hide().delay(100).show();
    $('#choiceTwoContainer').css('visibility', 'visible').hide().delay(100).show();
    $('#crisisButtonOne').css('visibility', 'visible').hide().delay(100).show();
    $('#crisisButtonTwo').css('visibility', 'visible').hide().delay(100).show();
});
//removes crisis pop up if no is selected
function slideAway() {
    "use strict";
    $('#helpContainer').slideUp('slow');
   
}
//if user selects yes on crisis message then scrolls screen to crissi info
function scrollToHelp() {
    "use strict";
    slideAway();
    $('html, body').animate({scrollTop: $("#crisis").offset().top - 200}, 2000);
}
//switch language to english by redirecting to other page with english text
function switchLanguage() {
    "use strict";
    swch.checked = false;
    window.location.href = "en/home.html";
}
