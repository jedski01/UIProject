var error_messages = ["Please enter your first name", //0
					  "Please enter your last name", //1
					  "Please enter a valid phone number", //2
					  "Please enter your address", //3
					  
					  "Please enter a valid email address", //4
					  "Please re-enter your email address", //5
					  "Email address does not match", //6
					  "Please enter a valid phone number", //7
					  "Please enter a valid email address",//8
					  "Incorrect credit card information"]; //9

var shipping_info = ["fname","lname","phone", "address"];

//EMAIL VARS
var email = document.getElementById("email");
var v_email = document.getElementById("v_email");

var error_email = document.getElementById("error_email");
var error_email_verify = document.getElementById("error_email_verify");


//phone vars
var phone_b = document.getElementById("phone_b");
var phone_s = document.getElementById("phone_s");


//credit card inputs
var credit_card = document.getElementById("credit_card");
var security_number = document.getElementById("security_number");
var cc_error = document.getElementById("cc_error");

//shipping checkbox
var checkbox_same_shipping = document.getElementById("same_shipping");


var email_valid = false;
var emails_match = false;
var phone_valid = false;

var inputs_valid = true;

function goto_summary(with_error){
    if(with_error){
        window.location.href = "orderpage_error.html";
    }
    else{
        window.location.href= "order_summary.html";
    }
}

function goto_fillup(){
    window.location.href = "orderpage.html";
}

function copy_values(){
    
	for(var x = 0 ; x < shipping_info.length ; x++){
		var id_b = shipping_info[x]+"_b";
		var id_s = shipping_info[x]+"_s";
		
		var input_b = document.getElementById(id_b);
		var input_s = document.getElementById(id_s);
		
		input_s.value = input_b.value;
	}
	
	var optional_add_b = document.getElementById("optional_address_b");
	var optional_add_s = document.getElementById("optional_address_s");
	
	optional_add_s.value = optional_add_b.value;
	
	var city_b = document.getElementById("city_b");
	var state_b = document.getElementById("state_b");
	var country_b = document.getElementById("country_b");
	
	var city_s = document.getElementById("city_s");
	var state_s = document.getElementById("state_s");
	var country_s = document.getElementById("country_s");
	
	city_s.selectedIndex = city_b.selectedIndex;
	state_s.selectedIndex = state_b.selectedIndex;
	country_s.selectedIndex = country_b.selectedIndex;
	
}

function clear_shipping(){
	for(var x = 0 ; x < shipping_info.length ; x++){
		var id_s = shipping_info[x]+"_s";
		
		var input_s = document.getElementById(id_s);
		
		input_s.value = "";
	}
	
	optional_add_s.value = "";
}

function process_info(index, input_element_id){
	//console.log("checking input of element "+input_element_id);
	
	var input_element = document.getElementById(input_element_id); 
	var error_output = document.getElementById("error_"+input_element_id);
	
	if(input_element.value == ""){
		error_output.innerHTML = error_messages[index];
		return false;
	}
	else{
		error_output.innerHTML = "";
	}
	return true
}

function check_shipping_info(index){
	
	result = true;
	
	var id_b = shipping_info[index] + "_b"; 
	var id_s = shipping_info[index] + "_s";
	
	result = process_info(index, id_b) && result;
	result = process_info(index, id_s) && result;

	return result;
}

function check_phone(number, elem){
	var regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
	
	if(regex.test(number)){
		elem.style.backgroundColor = "white";
		return true;
	}
	else{
		if(number == ""){
			elem.style.backgroundColor = "white";
			return false;
		}
		
		elem.style.backgroundColor = "#f44e4e";
		return false;
	}
	return true;
}

function is_email_valid(email_value){
		
	var regex = /^\w+@[a-zA-Z0-9_]+?\.[a-zA-Z]{2,3}$/;
	
	if(regex.test(email_value)){
		email.style.backgroundColor = "white";	
		return true;
	}
	else{
		if(email_value == ""){
			email.style.backgroundColor = "white";	
			return false;
		}
		email.style.backgroundColor = "#f44e4e";
		return false;
	}
	
	return false;
}

function do_emails_match(){
	
	if(email.value != v_email.value){
		v_email.style.backgroundColor = "#f44e4e";
		return false;
	}
	else{
		v_email.style.backgroundColor = "white";
	}
	return true;
}

function check_email(){

	if(email.value == "" || !email_valid){
		console.log("arey ou doing this?");
		console.log("email value is " + email.value);
		error_email.innerHTML = error_messages[4];
		return false;
	}
	else{
		error_email.innerHTML = "";		
	}
	
	if(v_email.value == ""){
		error_email_verify.innerHTML = error_messages[5];
		return false;
	}
	else{
		error_email_verify.innerHTML = "";
	}
	
	if(email.value != v_email.value){
		error_email_verify.innerHTML = error_messages[6];
		return false;
	}
	
	return true;
	//check valid email address use regex
}

function check_credit_card(){
    
    
    var regex_cc = /^[0-9]{16}$/;
    var regex_sn = /^[0-9]{3}$/;
    
    var valid_cc = regex_cc.test(credit_card.value);
    var valid_sn = regex_sn.test(security_number.value)
    
    if(valid_cc && valid_sn){
        cc_error.innerHTML = "";
        return true;
        
    }
    
    cc_error.innerHTML = error_messages[9];
    return false;
	
}

function check_inputs(){
	
	//check shipping info
	for(var x = 0 ; x < shipping_info.length ; x++){
		inputs_valid = check_shipping_info(x) && inputs_valid;
	}
		
	inputs_valid = check_email() && inputs_valid;
	
	inputs_valid = check_credit_card() &&
                   inputs_valid && 
				   email_valid && 
				   emails_match && 
		           phone_valid;				   

    console.log(inputs_valid);
    console.log(check_credit_card());
    console.log(email_valid);
    console.log(emails_match);
    console.log(phone_valid);
    
	if(inputs_valid){
        console.log("goto summary")
		goto_summary(false);
	}
}

checkbox_same_shipping.onclick = function(){
	
	if(checkbox_same_shipping.checked){
		console.log("Copy them values!")
		copy_values();
	}
	else{
		console.log("Clear 'em values");
		clear_shipping();
	}
}

email.onkeyup = function(){
	email_valid = is_email_valid(email.value);
	console.log(email_valid);
}

v_email.onkeyup = function(){
	emails_match = do_emails_match();
}

phone_s.onkeyup = function(){
	phone_valid = check_phone(phone_s.value, this);
}

phone_b.onkeyup = function(){
	phone_valid = check_phone(phone_b.value, this);
}
