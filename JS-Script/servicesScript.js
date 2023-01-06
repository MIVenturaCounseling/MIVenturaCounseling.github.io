var swch = document.getElementById("switchOne");
var mobile_swch = document.getElementById("mobile_switchOne");
//swch.checked = true;
//switch language to english by redirecting to other page with english text
function switchLanguage() 
{
    "use strict";
    swch.checked = false;
    mobile_swch.checked = false;
    window.location.href = "en/services.html";
}

var browser_width = window.innerWidth;
var browser_height = window.innerHeight;

var screen_width = screen.width;
var screen_height = screen.height;


function checkScreen()
{
    'use strict';
    //limit of screen widht before it adjust for smaller version of website
    var limit_of_screen = 900;
    
                        if(browser_width <= limit_of_screen)
                        {
                            //big blocks are the inperson,telehealth,hybrid
                            document.getElementById("big_blocks_container").style.display = "none";
                            document.getElementById("mobile_big_blocks_container").style.display = "block";
                            //bubble is the circles with pics in it
                            document.getElementById("bubble_container").style.display = "block";
                            document.getElementById("mobile_bubble_container").style.display = "none";
                            document.getElementById("bubble_container").style.width = "90%";
                            //container of list counselor can help with
                            document.getElementById("daBorder").style.width = "90%";
                            //the list of things that counselor can help with
                            document.getElementById("typeContainerTypeTherapy_one").style.width = "100%";
                            document.getElementById("typeContainerTypeTherapy_two").style.width = "100%";
          
                            if(browser_width <= 800)
                            {
                                 //bubble is the circles with pics in it
                                document.getElementById("bubble_container").style.display = "none";
                                document.getElementById("mobile_bubble_container").style.display = "block";
                            }
                        }
                        if((screen_width > limit_of_screen) && (browser_width > limit_of_screen))
                        {
                            //big blocks are the inperson,telehealth,hybrid
                            document.getElementById("big_blocks_container").style.display = "block";
                            document.getElementById("mobile_big_blocks_container").style.display = "none";
                            //bubble is the circles with pics in it
                            document.getElementById("bubble_container").style.display = "block";
                            document.getElementById("mobile_bubble_container").style.display = "none";
                            document.getElementById("bubble_container").style.width = "80%";
                            //container of list counselor can help with
                            document.getElementById("daBorder").style.width = "80%";
                            //the list of things that counselor can help with
                            document.getElementById("typeContainerTypeTherapy_one").style.width = "50%";
                            document.getElementById("typeContainerTypeTherapy_two").style.width = "50%";
                        }

}

checkScreen();

//checks to see if browser is resized
window.addEventListener('resize', 
    function(event){
                     
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        screen_width = screen.width;
                        screen_height = screen.height;
                        checkScreen();
                        
                    });