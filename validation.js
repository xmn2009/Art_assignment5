/**
 * @author Mengna Xia
 */

"use strict";

$(document).ready(function(){
	
	$("#name").focus();
	
	//the probably not a good idea to put the var global, but this is the simplist way I can pass the var
	var radioButtonId;
	
	
	function waring (input, message){
		return $(input).next().text(message);
	};
	
	
	$(":radio").change(function(){
		var today = new Date();
		var month = today.getMonth() + 1;
		var date = today.getDate();
		var year = today.getFullYear();
		var arrivalDate;
		
		radioButtonId = $(this).attr('id');
		//console.log($(this).attr('id'));
		
		//estimate the arrival date
		if(radioButtonId == "oneDay"){
			date = date + 1;
			arrivalDate = month + "/" + date + "/" + year;
			waring("#oneDay", "The estimate arrival date is " + arrivalDate);
		}
		else if (radioButtonId == "threeDay"){
			date = date + 3;
			arrivalDate = month + "/" + date + "/" + year;
			waring("#threeDay", "The estimate arrival date is " + arrivalDate);
		}
		else{
			year = year + 1;
			arrivalDate = month + "/" + date + "/" + year;
			waring("#oneYear", "The estimate arrival date is " + arrivalDate);
		}
		
		/*if(radioButtonId != undefined){
			$("#oneDay").next().text("");
		}*/		
	  }//end of function
	);//end of change
	
	$("#reset").click(function() {
		$(".radioSpan").text("");
	});

	$("#registerForm").submit(function(event) {
		$("span").text("");
		var isValid = true;
		
		var name = $("#name").val().trim();
		$("#name").val(name);
				
		var add1 = $("#address1").val().trim();
		$("#address1").val(add1);
		
		var add2 = $("#address2").val().trim();
		$("#address2").val(add2);
		
		var city = $("#city").val().trim();
		$("#city").val(city);
		
		var state = $("#state :selected").text();
		console.log(state);
		
		var zipPattern = /^\d{5}$/;
		var zip = $("#zip").val().trim();
		$("#zip").val(zip);
	
		var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
		var phone = $("#phone").val().trim();
		$("#phone").val(phone);
		
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		var email = $("#email").val().trim();
		$("#email").val(email);	
		
		
		if (name === "" || !isNaN(name)){
			isValid = false;
			waring("#name", "Plese enter a valid name.");
		}
		
		if (add1 === ""){
			isValid = false;
			waring("#address1", "Plese enter a valid address.");
		}
		
		if (city === ""){
			isValid = false;
			waring("#city", "Plese enter a city name.");
		}
		
		if (zip === "" || !zipPattern.test(zip)){
			isValid = false;
			waring("#zip", "Plese enter a valid zipcode.");
		}
		
		if(email === "" ||!emailPattern.test(email)){
			isValid = false;
			waring("#email", "Please enter a valid email address.");
		}
		
		
		if(phone === "" || !phonePattern.test(phone) ){
			isValid = false;
			waring("#phone", "Please enter a valid phone number.");
		}
		
		
		if(radioButtonId === undefined){
			isValid = false;
			waring("#oneDay", "Please select a shipping method." );
		}		
		
		if(isValid == false){event.preventDefault();};
		
		if(isValid == true){
			//reset all the inputs			
			$("span").text("");
			$("#name").val("");
			$("#address1").val("");
			$("#address2").val("");
			$("#city").val("");
			$("#zip").val("");
			$("#phone").val("");
			$("#email").val("");
			$(":radio").checked = false;
			
			//alert message
			alert("Thank you!");
		}		

	});
	
	
}); //end of ready
