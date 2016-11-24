var main_content = document.getElementById("main_content");
var overview = document.getElementById("overview");
var specifications = document.getElementById("specs");
var support = document.getElementById("support");
var testimonials = document.getElementById("testimonials");
var cart = document.getElementById("cart");

var close_button = document.getElementById("close");
var buy_window = document.getElementById("buy_window");
var buy_button_nav = document.getElementById("buy_button_nav");


function response(){
    console.log("Ready!");
    
    $.ajax({
        url: "overview.html",
        dataType: "html",
        success: function(resp){
            main_content.innerHTML = resp;
            
            var buy_button = document.getElementById("buy_button");
            buy_button.onclick = function(){
                console.log("show buy button");
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
                    console.log("show buy button");
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
                    console.log("hello");
                    questions[x].onclick = toggle_answer;
                }
                
                function toggle_answer(){
                    var answer = this.nextElementSibling;
                    console.log(answer.style.display);
                    if(answer.style.display == "none" || !answer.style.display){
                        answer.style.display = "block";
                    }
                    else{
                        answer.style.display = "none";
                    }
                    console.log(answer.innerHTML)
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