var main_content = document.getElementById("main_content");
var overview = document.getElementById("overview");
var specifications = document.getElementById("specs");
//var overview = document.getElementById("overview");


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
    
}

$(document).ready(response);