var swch = document.getElementById("switchOne");
var mobile_swch = document.getElementById("mobile_switchOne");

swch.checked = true;
mobile_swch.checked = true;
//changes text color and background color of div to look as the selected tab of therapy models.
//Also makes div with info appear
function firstBlock() {
    "use strict";
    resetText();
    document.getElementById("small_box_one").style.backgroundColor = "#c4f4d4";
    document.getElementById("firstInfo").style.display = "block";
    document.getElementById("top_of_info").scrollIntoView();
}
function secondBlock() {
    "use strict";
    resetText();
    document.getElementById("last_box").style.backgroundColor = "#c4f4d4";
    document.getElementById("secondInfo").style.display = "block";
    document.getElementById("top_of_info").scrollIntoView();

}
function thirdBlock() {
    "use strict";
    resetText();
    document.getElementById("small_box_six").style.backgroundColor = "#c4f4d4";
    document.getElementById("thirdInfo").style.display = "block";
    document.getElementById("top_of_info").scrollIntoView();
}
function fourthBlock() {
    "use strict";
    resetText();
    document.getElementById("small_box_five").style.backgroundColor = "#c4f4d4";
    document.getElementById("fourthInfo").style.display = "block";
    document.getElementById("top_of_info").scrollIntoView();
}
function fifthBlock() 
{
    "use strict";
    resetText();
    document.getElementById("small_box_four").style.backgroundColor = "#c4f4d4";
    document.getElementById("fifthInfo").style.display = "block";
    document.getElementById("top_of_info").scrollIntoView();
}
function sixthBlock() 
{
    "use strict";
    resetText();
    document.getElementById("small_box_three").style.backgroundColor = "#c4f4d4";
    document.getElementById("sixthInfo").style.display = "block";
    document.getElementById("top_of_info").scrollIntoView();
}
function seventhBlock() 
{
    "use strict";
    resetText();
    document.getElementById("small_box_two").style.backgroundColor = "#c4f4d4";
    document.getElementById("seventhInfo").style.display = "block";
    document.getElementById("top_of_info").scrollIntoView();
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

    document.getElementById("small_box_one").style.backgroundColor = "rgb(156, 206, 208)";
   
    document.getElementById("small_box_two").style.backgroundColor = "rgb(156, 206, 208)";
    
    document.getElementById("small_box_three").style.backgroundColor = "rgb(156, 206, 208)";
   
    document.getElementById("small_box_four").style.backgroundColor = "rgb(156, 206, 208)";
    
    document.getElementById("small_box_five").style.backgroundColor = "rgb(156, 206, 208)";
    
    document.getElementById("small_box_six").style.backgroundColor = "rgb(156, 206, 208)";
 
    document.getElementById("last_box").style.backgroundColor = "rgb(156, 206, 208)";
    
}



//switches to to english texts by redirecting to english page
function switchLanguage() {
    "use strict";
    swch.checked = false;
    window.location.href = "../terapia";
}



var browser_width = window.innerWidth;
var browser_height = window.innerHeight;

var screen_width = screen.width;
var screen_height = screen.height;


function checkScreen()
{
    'use strict';
    var limit_of_screen = 900;
    
                        if(browser_width <= limit_of_screen)
                        {
                           
                            //Adjust container of each row of blocks
                            document.getElementById("small_boxes_container_one").style.width = "90%";
                            document.getElementById("small_boxes_container_two").style.width = "90%";
                            document.getElementById("last_box_container").style.width = "90%";
                            //set box width back to normal
                            document.getElementById("small_box_one").style.width = "31%"; 
                            document.getElementById("small_box_two").style.width = "31%";
                            document.getElementById("small_box_three").style.width = "31%"; 
                            document.getElementById("small_box_four").style.width = "31%"; 
                            document.getElementById("small_box_five").style.width = "31%"; 
                            document.getElementById("small_box_six").style.width = "31%";
                            document.getElementById("last_box").style.width = "31%"; 
                            //set dividers space back to normal
                            document.getElementById("row_one_small_divider_one").style.width = "3.5%";
                            document.getElementById("row_one_small_divider_two").style.width = "3.5%";
                            document.getElementById("row_two_small_divider_one").style.width = "3.5%";
                            document.getElementById("row_two_small_divider_two").style.width = "3.5%";
                          
                           

                            
                            
                            if(browser_width <= 700)
                            {
                                //set box width to 100% for minimized window
                                document.getElementById("small_box_one").style.width = "100%"; 
                                document.getElementById("small_box_two").style.width = "100%";
                                document.getElementById("small_box_three").style.width = "100%"; 
                                document.getElementById("small_box_four").style.width = "100%"; 
                                document.getElementById("small_box_five").style.width = "100%"; 
                                document.getElementById("small_box_six").style.width = "100%";
                                document.getElementById("last_box").style.width = "100%";
                                //adjust width of dividers so doesnt leave space between each box when minimized
                                document.getElementById("row_one_small_divider_one").style.width = "0%";
                                document.getElementById("row_one_small_divider_two").style.width = "0%";
                                document.getElementById("row_two_small_divider_one").style.width = "0%";
                                document.getElementById("row_two_small_divider_two").style.width = "0%";
                                

                                

                            }
                            //if(browser_width <= 500)
                            //{
                                
                               
                            //}
                          
                          
                            
                            
                        }
                        if((screen_width > limit_of_screen) && (browser_width > limit_of_screen))
                        {
                            //Adjust container of each row of blocks
                            document.getElementById("small_boxes_container_one").style.width = "75%";
                            document.getElementById("small_boxes_container_two").style.width = "75%";
                            document.getElementById("last_box_container").style.width = "75%";
                            //set box width back to normal
                            document.getElementById("small_box_one").style.width = "31%"; 
                            document.getElementById("small_box_two").style.width = "31%";
                            document.getElementById("small_box_three").style.width = "31%"; 
                            document.getElementById("small_box_four").style.width = "31%"; 
                            document.getElementById("small_box_five").style.width = "31%"; 
                            document.getElementById("small_box_six").style.width = "31%";
                            document.getElementById("last_box").style.width = "31%";   
                            //set dividers space back to normal
                            document.getElementById("row_one_small_divider_one").style.width = "3.5%";
                            document.getElementById("row_one_small_divider_two").style.width = "3.5%";
                            document.getElementById("row_two_small_divider_one").style.width = "3.5%";
                            document.getElementById("row_two_small_divider_two").style.width = "3.5%";

                            
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
