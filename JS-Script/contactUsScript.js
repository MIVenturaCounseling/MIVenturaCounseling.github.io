

var swch = document.getElementById("switchOne");
var mobile_swch = document.getElementById("mobile_switchOne");
//switch language to english by redirecting to other page with english text
function switchLanguage() {
    "use strict";
    swch.checked = false;
    mobile_swch.checked = false;
    window.location.href = "en/contactUs.html";
}




var browser_width = window.innerWidth;
var browser_height = window.innerHeight;

var screen_width = screen.width;
var screen_height = screen.height;

function pop_up_form()
{
    "use strict";
    document.getElementById("outer_form_container").style.display = "block";
    document.getElementById("dark_back").style.display = "block";
    
}
function pop_up_close()
{
    "use strict";
    document.getElementById("outer_form_container").style.display = "none";
    document.getElementById("dark_back").style.display = "none";
    
}


function submit_email()
{
    'use strict';
    var first_name, last_name, email, message,mailto_string,subject;
    first_name = document.getElementById("input_email_first_name").value;
    last_name = document.getElementById("input_email_last_name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("email_message").value;
    
    if(first_name.length == 0)
    {
            document.getElementById("error").value = "Por Favor escribe su Nombre";
    }
    else
    {
        if(first_name.length > 50)
        {
                document.getElementById("error").value = "Nombre no puede tener más de 50 letras";
        }
        else
        {
            if(last_name.length == 0)
            {
                  document.getElementById("error").value = "Por Favor escribe su Apellido";   
            }
            else
            {
                if(last_name.length > 50)
                {
                      document.getElementById("error").value = "Apellido no puede tener más de 50 letras";   
                }
                else
                {
                    
                    if(email.length == 0)
                    {
                            document.getElementById("error").value = "Por Favor escribe su Email";
                    }
                    else
                    {
                        if(email.length > 256)
                        {
                                document.getElementById("error").value = "Email no puede tener más de 256 letras";
                        }
                        else
                        {
                            if(message.length == 0)
                            {
                                    document.getElementById("error").value = "Por Favor escribe su Mensaje";
                            }
                            else
                            {
                                if(message.length > 500)
                                {
                                        document.getElementById("error").value = "Mensaje no puede tener más de 500 letras";
                                }
                                else
                                {
                                    subject = "Website Message - " + first_name + " " + last_name + " - " + email;
                                    mailto_string = "mailto:MIVenturacounseling@gmail.com?subject=" + subject + "&body=" + message;
                                    window.open(mailto_string);
                                    pop_up_close();
                                }
                            }
                        }
                    }
                }
            }
             
        }
       
    }
    
}






function checkScreen()
{
    'use strict';
    var limit_of_screen = 900;
    
                        if(browser_width <= limit_of_screen)
                        {
                            //makes changes for smaller screen for top section contact title, pic
                            //, email,call
                            document.getElementById("left_side").style.width = "90%";
                            document.getElementById("left_side").style.float = "none";
                            document.getElementById("top_title").style.marginLeft = "0px";
                            document.getElementById("top_description").style.marginLeft = "0px";
                            document.getElementById("top_bar").style.height = "150px";

                            document.getElementById("right_side").style.display = "none";
                            document.getElementById("top_boxes_container").style.width = "90%";
                            document.getElementById("mobile_office_image_container").style.display = "block";
                            document.getElementById("outer_form_container").style.width = "90%";


                            document.getElementById("right_location_container").style.display = "none";
                            document.getElementById("left_location_container").style.display = "none";
                            document.getElementById("top_boxes_container").style.paddingTop = "20px";
                            
                            document.getElementById("mobile_location_container").style.display = "block";
                            //addy mobile container
                            document.getElementById("mobile_addy_info_container").style.width = "60%";
                            document.getElementById("mobile_addy_title_info").style.fontSize = "25px";
                            document.getElementById("mobile_addy_info").style.fontSize = "20px";
                            document.getElementById("mobile_gps_button").style.fontSize = "25px";
                        
                            //left box(phone)
                            document.getElementById("left_box").style.width = "45%";
                            //right box(email)
                            document.getElementById("right_box").style.width = "45%";

                            //inside left and right box
                            document.getElementById("logo_text_bottom_email").style.fontSize = "22px";
                            document.getElementById("logo_text_bottom_call").style.fontSize = "22px";
                            document.getElementById("logo_text_bottom_email").style.height = "100px";
                            document.getElementById("logo_text_bottom_call").style.height = "100px";
                            document.getElementById("call_square_button").style.fontSize = "21px";
                            document.getElementById("email_square_button").style.fontSize = "21px";

                            document.getElementById("price_block_individual_description").style.fontSize = "12px";
                            document.getElementById("price_block_couple_description").style.fontSize = "12px";
                            document.getElementById("price_block_group_description").style.fontSize = "12px";
                            document.getElementById("price_block_group_cost").style.fontSize = "12px";
 
                            //prices left block (individual)
                            document.getElementById("prices_left_block").style.width = "100%";
                            document.getElementById("price_title_individual").style.fontSize = "30px";
                            document.getElementById("price_block_individual_cost").style.fontSize = "35px";
                            document.getElementById("price_block_individual_cost").style.height = "auto";
                            document.getElementById("price_block_individual_description").style.fontSize = "25px";
                            document.getElementById("price_block_individual_description").style.height = "auto";
                            //prices middle block (couple)
                            document.getElementById("prices_middle_block").style.width = "100%";
                            document.getElementById("price_title_couple").style.fontSize = "30px";
                            document.getElementById("price_block_couple_cost").style.fontSize = "35px";
                            document.getElementById("price_block_couple_cost").style.height = "auto";
                            document.getElementById("price_block_couple_description").style.fontSize = "25px";
                            document.getElementById("price_block_couple_description").style.height = "auto";
                            //prices right block (group)
                            document.getElementById("prices_right_block").style.width = "100%";
                            document.getElementById("price_title_group").style.fontSize = "30px";
                            document.getElementById("price_block_group_cost").style.fontSize = "25px";
                            document.getElementById("price_block_group_cost").style.height = "auto";
                            document.getElementById("price_block_group_description").style.fontSize = "25px";
                            document.getElementById("price_block_group_description").style.height = "auto";
                            //divider
                            document.getElementById("prices_inbetween_space_one").style.height = "15px";
                            document.getElementById("prices_inbetween_space_two").style.height = "15px";

                           

                            
                            
                            if(browser_width <= 700)
                            {
                                //left box(phone)
                                document.getElementById("left_box").style.width = "100%";
                                //right box(email)
                                document.getElementById("right_box").style.width = "100%";
                                //inside left and right box
                                document.getElementById("logo_text_bottom_email").style.fontSize = "22px";
                                document.getElementById("logo_text_bottom_call").style.fontSize = "22px";
                                document.getElementById("logo_text_bottom_email").style.height = "auto";
                                document.getElementById("logo_text_bottom_call").style.height = "auto";
                                document.getElementById("call_square_button").style.fontSize = "22px";
                                document.getElementById("email_square_button").style.fontSize = "22px";
                                

                                //addy mobile container
                                document.getElementById("mobile_addy_info_container").style.width = "90%";
                                document.getElementById("mobile_addy_title_info").style.fontSize = "22px";
                                document.getElementById("mobile_addy_info").style.fontSize = "18px";
                                document.getElementById("mobile_gps_button").style.fontSize = "22px";


                                //prices left block (individual)
                                document.getElementById("prices_left_block").style.width = "100%";
                                document.getElementById("price_title_individual").style.fontSize = "30px";
                                document.getElementById("price_block_individual_cost").style.fontSize = "35px";
                                document.getElementById("price_block_individual_cost").style.height = "auto";
                                document.getElementById("price_block_individual_description").style.fontSize = "25px";
                                document.getElementById("price_block_individual_description").style.height = "auto";
                                //prices middle block (couple)
                                document.getElementById("prices_middle_block").style.width = "100%";
                                document.getElementById("price_title_couple").style.fontSize = "30px";
                                document.getElementById("price_block_couple_cost").style.fontSize = "35px";
                                document.getElementById("price_block_couple_cost").style.height = "auto";
                                document.getElementById("price_block_couple_description").style.fontSize = "25px";
                                document.getElementById("price_block_couple_description").style.height = "auto";
                                //prices right block (group)
                                document.getElementById("prices_right_block").style.width = "100%";
                                document.getElementById("price_title_group").style.fontSize = "30px";
                                document.getElementById("price_block_group_cost").style.fontSize = "25px";
                                document.getElementById("price_block_group_cost").style.height = "auto";
                                document.getElementById("price_block_group_description").style.fontSize = "25px";
                                document.getElementById("price_block_group_description").style.height = "auto";
                                //divider
                                document.getElementById("prices_inbetween_space_one").style.height = "15px";
                                document.getElementById("prices_inbetween_space_two").style.height = "15px";
                                

                            }
                            if(browser_width <= 500)
                            {                        
                                //left box(phone)
                                document.getElementById("left_box").style.width = "100%";
                                //right box(email)
                                document.getElementById("right_box").style.width = "100%";
                                //inside left and right box
                                document.getElementById("logo_text_bottom_email").style.fontSize = "20px";
                                document.getElementById("logo_text_bottom_call").style.fontSize = "20px";
                                document.getElementById("logo_text_bottom_email").style.height = "auto";
                                document.getElementById("logo_text_bottom_call").style.height = "auto";
                                document.getElementById("call_square_button").style.fontSize = "20px";
                                document.getElementById("email_square_button").style.fontSize = "20px";
                                
                                
                                //addy mobile container
                                document.getElementById("mobile_addy_info_container").style.width = "90%";
                                document.getElementById("mobile_addy_title_info").style.fontSize = "22px";
                                document.getElementById("mobile_addy_info").style.fontSize = "18px";
                                document.getElementById("mobile_gps_button").style.fontSize = "22px";
                                
                                
                                //left block (individual)
                                document.getElementById("prices_left_block").style.width = "100%";
                                document.getElementById("price_title_individual").style.fontSize = "30px";
                                document.getElementById("price_block_individual_cost").style.fontSize = "40px";
                                document.getElementById("price_block_individual_cost").style.height = "auto";
                                document.getElementById("price_block_individual_description").style.fontSize = "25px";
                                document.getElementById("price_block_individual_description").style.height = "auto";
                                //middle block (couple)
                                document.getElementById("prices_middle_block").style.width = "100%";
                                document.getElementById("price_title_couple").style.fontSize = "30px";
                                document.getElementById("price_block_couple_cost").style.fontSize = "40px";
                                document.getElementById("price_block_couple_cost").style.height = "auto";
                                document.getElementById("price_block_couple_description").style.fontSize = "25px";
                                document.getElementById("price_block_couple_description").style.height = "auto";
                                //right block (group)
                                document.getElementById("prices_right_block").style.width = "100%";
                                document.getElementById("price_title_group").style.fontSize = "30px";
                                document.getElementById("price_block_group_cost").style.fontSize = "25px";
                                document.getElementById("price_block_group_cost").style.height = "auto";
                                document.getElementById("price_block_group_description").style.fontSize = "25px";
                                document.getElementById("price_block_group_description").style.height = "auto";
                                //divider
                                document.getElementById("prices_inbetween_space_one").style.height = "15px";
                                document.getElementById("prices_inbetween_space_two").style.height = "15px";
                            }
                          
                          
                            
                            
                        }
                        if((screen_width > limit_of_screen) && (browser_width > limit_of_screen))
                        {
                            
                            // makes changes for smaller to big  screen for top section contact title, pic
                            //, email,call
                            document.getElementById("top_bar").style.height = "128px";
                            //These changes are for Contacts and questions
                            document.getElementById("left_side").style.width = "45%";
                            document.getElementById("left_side").style.float = "left";
                            document.getElementById("top_title").style.marginLeft = "50px";
                            document.getElementById("top_description").style.marginLeft = "55px";

                            //Shows office pic on side, made it dissapear for smaller version
                            document.getElementById("right_side").style.display = "block";
                            //2 boxes(call & email) reduce size for big screen
                            document.getElementById("top_boxes_container").style.width = "55%";
                            //remove mobile pic thats 100% wide
                            document.getElementById("mobile_office_image_container").style.display = "none";
                            //
                            document.getElementById("outer_form_container").style.width = "60%";
                            //Reduce space between boxes and contact questions
                            document.getElementById("top_boxes_container").style.paddingTop = "5px";

                            //left box(phone)
                            document.getElementById("left_box").style.width = "45%";
                            //right box(email)
                            document.getElementById("right_box").style.width = "45%";

                            //inside left and right box
                            document.getElementById("logo_text_bottom_email").style.fontSize = "16px";
                            document.getElementById("logo_text_bottom_call").style.fontSize = "16px";
                            document.getElementById("logo_text_bottom_email").style.height = "80px";
                            document.getElementById("logo_text_bottom_call").style.height = "80px";
                            document.getElementById("call_square_button").style.fontSize = "18px";
                            document.getElementById("email_square_button").style.fontSize = "18px";


                            document.getElementById("right_location_container").style.display = "block";
                            document.getElementById("left_location_container").style.display = "block";
                            document.getElementById("top_boxes_container").style.paddingTop = "0px";

                            document.getElementById("mobile_location_container").style.display = "none";

                            //prices left block (individual)
                            document.getElementById("prices_left_block").style.width = "30%";
                            document.getElementById("price_title_individual").style.fontSize = "30px";
                            document.getElementById("price_block_individual_cost").style.fontSize = "23px";
                            document.getElementById("price_block_individual_cost").style.height = "135px";
                            document.getElementById("price_block_individual_description").style.fontSize = "25px";
                            document.getElementById("price_block_individual_description").style.height = "160px";
                            //prices middle block (couple)
                            document.getElementById("prices_middle_block").style.width = "30%";
                            document.getElementById("price_title_couple").style.fontSize = "30px";
                            document.getElementById("price_block_couple_cost").style.fontSize = "30px";
                            document.getElementById("price_block_couple_cost").style.height = "135px";
                            document.getElementById("price_block_couple_description").style.fontSize = "25px";
                            document.getElementById("price_block_couple_description").style.height = "160px";
                            //prices right block (group)
                            document.getElementById("prices_right_block").style.width = "30%";
                            document.getElementById("price_title_group").style.fontSize = "30px";
                            document.getElementById("price_block_group_cost").style.fontSize = "20px";
                            document.getElementById("price_block_group_cost").style.height = "135px";
                            document.getElementById("price_block_group_description").style.fontSize = "20px";
                            document.getElementById("price_block_group_description").style.height = "160px";
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

function replace_image_one()
{
    "use strict";
    document.getElementById("top_image").src = "images/contact/new_one.jpg";
    document.getElementById("mobile_office_image").src = "images/contact/new_one.jpg";
}