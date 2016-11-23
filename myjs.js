var main_content = document.getElementById("main_content");
var overview = document.getElementById("overview");
var specifications = document.getElementById("specs");
var support = document.getElementById("support");
var testimonials = document.getElementById("testimonials");

function response(){
    console.log("Ready!");
    
    $.ajax({
        url: "overview.html",
        dataType: "html",
        success: function(resp){
            main_content.innerHTML = resp;
        }
    })
    overview.onclick = function(){
        $.ajax({
            url: "overview.html",
            dataType: "html",
            success: function(resp){
                main_content.innerHTML = resp;
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