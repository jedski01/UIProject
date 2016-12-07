var main_content = document.getElementById("main_content");
var overview = document.getElementById("overview");
var specifications = document.getElementById("specs");
var support = document.getElementById("support");
var testimonials = document.getElementById("testimonials");
var cart = document.getElementById("cart");

var close_button = document.getElementById("close");
var buy_window = document.getElementById("buy_window");
var buy_button_nav = document.getElementById("buy_button_nav");
var checkout = document.getElementById("checkout");
var processing_text = document.getElementById("processing_text");
var button_clicked;

function response(){
    
    $.ajax({
        url: "overview.html",
        dataType: "html",
        success: function(resp){
            main_content.innerHTML = resp;
            
            var buy_button = document.getElementById("buy_button");
            buy_button.onclick = function(){
                buy_window.style.visibility = "visible";    
            }
        }
    })
    overview.onclick = function(){
        $.ajax({
            url: "overview.html",
            dataType: "html",
            success: function(resp){
                main_content.innerHTML = resp;
                
                var buy_button = document.getElementById("buy_button");
                buy_button.onclick = function(){
                    buy_window.style.visibility = "visible";    
                }
                
                
            }
        })    
    }
    
    specifications.onclick = function(){
        $.ajax({
            url: "specifications.html",
            dataType: "html",
            success: function(resp){
                main_content.innerHTML = resp;
                
                var info_image = document.getElementById("info_image");
                var front_view_button = document.getElementById("front_view");
                var back_view_button = document.getElementById("back_view");
                var top_view_button = document.getElementById("top_view");
                var left_view_button = document.getElementById("left_view");
                var right_view_button = document.getElementById("right_view");
                
                
                var spec_title = document.getElementById("spec_title");
                var spec_info = document.getElementById("spec_info");
                
                function show_spec(spec){
                    
                    spec_title.innerHTML = spec;

                    switch(spec){
                        case "Frame":
                            spec_info.innerHTML = "The frame is made of something something something";
                            break;
                        case "Camera":
                            spec_info.innerHTML = "A moving 8MP camera that has a vertical viewing angle of 60 degrees and horizontal viewing angle of 90 degrees";
                            break;
                        case "Lens":
                            spec_info.innerHTML = "The Lens is made of a special type of glass that can filter certain wavelengths of light which can be controlled via sending electrical signals to it.";
                            break;
                        case "Eye Trackers":
                            spec_info.innerHTML = "There are total of 8 eye trackers on the glasses, 4 on each lens. These eye trackers help with taking photos so you only get the images of where you are looking at, not where you are facing at.";
                            break;
                        case "Battery":
                            spec_info.innerHTML = "eGlasses is using 3.7V 150mAh batter that is located on the right side of the glasses. At full charge, the eGlasses can be used up to 2 days of continuous use";
                            break;
                        case "Mode Change Button":
                            spec_info.innerHTML = "Mode change button is a tactile button used to cycle through different modes of the glasses";
                            break;
                        case "Capture/Scan Button":
                            spec_info.innerHTML = "Tactile button that serves as capture button in Photo Mode and Scan button in Scan & Translate Mode";
                            break;
                        case "USB Port":
                            spec_info.innerHTML = "Conveniently placed USB Port for charging and connecting to computers for firmware upgrade";
                            break;
                        case "Arm":
                            spec_info.innerHTML = "The Arm is made of something something something";
                            break;
                        case "Device ID":
                            spec_info.innerHTML = "All eGlasses have a unique device ID so you know which devices you are connecting to your app";
                            break;
                        case "LED Status Indicator":
                            spec_info.innerHTML = "Indicates the status of eGlasses when turned on. Steady green when above 30% battery power. Orange blinking when low battery. Red when charging. Blinking green when fully charged.";
                            break;
                        case "Power Button":
                            spec_info.innerHTML = "Tactile button for turning the capabilities of your eGlasses on and off.";
                            break;
                    }
                }
                
                
                $.ajax({
                    url: "front-view.html",
                    dataType: "html",
                    success: function(resp){
                        
                        info_image.innerHTML = resp;
                        
                        var frame_button = document.getElementById("frame_button");
                        var camera_button = document.getElementById("camera_button");
                        var lens_button = document.getElementById("lens_button");
                        
                        frame_button.onclick = function(){ return show_spec("Frame");}
                        camera_button.onclick = function(){ return show_spec("Camera");}
                        lens_button.onclick = function(){ return show_spec("Lens")}
                    }
                });
                
                front_view_button.onclick = function(){
                    
                    $.ajax({
                        url: "front-view.html",
                        dataType: "html",
                        success: function(resp){
                            info_image.innerHTML = resp;
                            
                            var frame_button = document.getElementById("frame_button");
                            var camera_button = document.getElementById("camera_button");
                            var lens_button = document.getElementById("lens_button");

                            frame_button.onclick = function(){ return show_spec("Frame");}
                            camera_button.onclick = function(){ return show_spec("Camera");}
                            lens_button.onclick = function(){ return show_spec("Lens");}
                        }
                    })
                }
                
                back_view_button.onclick = function(){
                    
                    $.ajax({
                        url: "back-view.html",
                        dataType: "html",
                        success: function(resp){
                            info_image.innerHTML = resp;
                            
                            var eye_trackers_button = document.getElementById("et_button");
                            
                            eye_trackers_button.onclick = function(){ return show_spec("Eye Trackers");}
                        }
                    })
                }
                
                top_view_button.onclick = function(){
                    
                    $.ajax({
                        url: "top-view.html",
                        dataType: "html",
                        success: function(resp){
                            info_image.innerHTML = resp;
                            
                            
                            
                            var power_button = document.getElementById("power_button");
                            var led_button = document.getElementById("led_button");
                            
                            power_button.onclick = function(){ return show_spec("Power Button");}
                            led_button.onclick = function(){ return show_spec("LED Status Indicator");}
                            
                            
                            
                            var battery_button = document.getElementById("battery_button");
                            var capture_button = document.getElementById("capture_button");
                            var mode_button = document.getElementById("mode_button");
                            
                            battery_button.onclick = function(){ return show_spec("Battery");}
                            
                            mode_button.onclick = function(){ return show_spec("Mode Change Button");}
                        }
                    })
                }
                
                left_view_button.onclick = function(){
                    
                    $.ajax({
                        url: "left-view.html",
                        dataType: "html",
                        success: function(resp){
                            info_image.innerHTML = resp;
                            
                            var usb_button = document.getElementById("usb_button");
                            var arm_button = document.getElementById("arm_button");
                            
                            usb_button.onclick = function(){ return show_spec("USB Port");}
                            arm_button.onclick = function(){ return show_spec("Arm");}
                        }
                    })
                }
                
                right_view_button.onclick = function(){
                    
                    $.ajax({
                        url: "right-view.html",
                        dataType: "html",
                        success: function(resp){
                            info_image.innerHTML = resp;
                            
                            var id_button = document.getElementById("ID_button");
                            var capture_button = document.getElementById("capture_button");
                            
                            id_button.onclick = function(){ return show_spec("Device ID");}
                            capture_button.onclick = function(){ return show_spec("Capture/Scan Button");}
                        }
                    })
                }
                
            }
        })
    }
    
    support.onclick = function(){
        $.ajax({
            url: "support.html",
            dataType: "html",
            success: function(resp){
                main_content.innerHTML = resp;
                
                var questions = document.getElementsByClassName("question");
                
                for(var x = 0 ; x < questions.length ; x++){
                    questions[x].onclick = toggle_answer;
                }
                
                function toggle_answer(){
                    var answer = this.nextElementSibling;
                    if(answer.style.display == "none" || !answer.style.display){
                        answer.style.display = "block";
                    }
                    else{
                        answer.style.display = "none";
                    }
                }
                
            }
        })
    }
    
    testimonials.onclick = function(){
        $.ajax({
            url: "testimonials.html",
            dataType: "html",
            success: function(resp){
                
                main_content.innerHTML = resp;
                
                var submit = document.getElementById("submit")
                var testimonials_container = document.getElementById("testimonials_container");
                var input_username = document.getElementById("username");
                var input_comment = document.getElementById("comment");
                
                // getter when page loads
                $.ajax({
                    //tell ajax to use post
                    //type of communication
                    type: "post",
                    data: {
                        type: "get",
                        studentid : "A00790108"
                    },
                    url: "http://www.bcitdigitalarts.ca/vote/server/citServ.php",
                    dataType: "json",
                    success: function(resp){
                        
                        testimonials_array = []; //CHANGE THIS
                        
                        for(var x = 0; testimonials_array.length; x++){
                            username = ""; //CHANGE THIS
                            comment = ""; //CHANGE THIS
                            
                            var new_div = document.createElement("div");
                            var user_header = document.createElement("h4");
                            var comment_p = document.createElement("p");
                            
                            user_header.className = "user";
                            comment_p.className = "review";
                            
                            new_div.appendChild(user_header);
                            new_div.appendChild(review);
                            testimonials_container.appendChild(new_div);
                            
                        }
                        
                    }
                });
                
                submit.onclick = function(){
		
                    username = input_username.value;
                    comment = input_comment.value;
                    
                    if(username == "" || comment == ""){
                        window.alert("Please enter a username and comment");
                        return false;
                    }
                    
                    $.ajax({
                        //tell ajax to use post
                        //type of communication
                        type: "post",
                        data: {
                            type: "get",
                            studentid : "A00790108"
                        },
                        url: "http://www.bcitdigitalarts.ca/vote/server/citServ.php",
                        dataType: "json",
                        success: function(resp){
                            
                            window.alert("Thank you! Your testimonials has been posted");
                            input_comment.value = "";
                            input_username.value = "";
                        }
                    });
                }
            }
        })
    }
}

$(document).ready(response);

close_button.onclick = function(){
    buy_window.style.visibility = "hidden";
}

cart.onclick = function(){
    buy_window.style.visibility = "visible";
}

buy_button_nav.onclick = function(){
    buy_window.style.visibility = "visible";
}

checkout.onclick = function(){
    if(button_clicked==null){
        processing_text.style.visibility = "visible";
        button_clicked = setTimeout(goto_orderpage,2000);
    }
        
}

function goto_orderpage(){
    window.location.href = "orderpage.html";
}