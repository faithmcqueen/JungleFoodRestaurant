$(document).ready(function (){

	jQuery.browser = {};
	(function () {
	    jQuery.browser.msie = false;
	    jQuery.browser.version = 0;
	    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
	        jQuery.browser.msie = true;
	        jQuery.browser.version = RegExp.$1;
	    }
	})();
//SRC: https://stackoverflow.com/questions/14923301/uncaught-typeerror-cannot-read-property-msie-of-undefined-jquery-tools



// --------------- MENU PAGE --------------- //

// ----- TABS ----- //

  	$( "#tabs" ).tabs();

    $( document ).tooltip({
    	track: true
    });



// --------------- EVENTS BOOKING PAGE --------------- //

// ----- TOGGLE CONTENT (GALLERY & FORM) -----//
	$(".events_contentBox").toggle();
	
	$("h2").click(function(){
		$(this).next('div').toggle();
	})


	// CHANGE COLOUR OF EVENTS HEADING:

	$('.events_toggleColour').mouseover(function(){
		$(this).css({'color': '#246a86', 'border-color': 'white'})
	});

	$('.events_toggleColour').mouseout(function(){
		$(this).css({'color': 'white'})
	});


	// SELECT MENU:
	$( "#events_locations" ).selectmenu();
	
	// DATEPICKER:
	$( "#datepicker").datepicker({altField:'#date'});
	// SRC: https://forum.jquery.com/topic/inline-datepicker-not-submitting-date-to-database
	// PURPOSE: get date value.

	var formHandle = document.forms.events_form;

	if (formHandle){

		formHandle.onsubmit = processForm

		function processForm(){
			var nameValue = formHandle.inName.value;		
			var phoneValue = formHandle.inPhone.value; 		
			var emailValue = formHandle.inEmail.value; 
			var eventLocationValue = formHandle.events_location.value; 		
			var eventDateValue = formHandle.date.value; 		
			var guestNumberValue = formHandle.inGuestNumber.value; 				
			var addInfoValue = formHandle.inAddInfo.value;

			console.log(eventDateValue);

			var displayThankYou = document.getElementById("events_customerName");
			displayThankYou.innerHTML = nameValue;

			var displayEmail = document.getElementById("events_customerEmail");
			displayEmail.innerHTML = emailValue;

			var errorFlag = false;

			$(".field-error").remove();


			// VALIDATION:

			if(nameValue === "" || nameValue === null) {
				$("#events_username").after("<div class=\"field-error collumn4\">Please enter your name.</div>")
				errorFlag = true;
			}

			var phoneRegex = /^(?:\d{8}(?:\d{2}(?:\d{2})?)?|\(\+?\d{2,3}\)\s?(?:\d{4}[\s*.-]?\d{4}|\d{3}[\s*.-]?\d{3}|\d{2}([\s*.-]?)\d{2}\1\d{2}(?:\1\d{2})?))$/;
			// SRC: https://stackoverflow.com/questions/51829190/telephone-number-regex-all-formats

			if (phoneValue === "" || phoneValue === null || !phoneRegex.test(phoneValue)) {
				$("#events_phonenumber").after("<div class=\"field-error collum4\">Please enter a valid phone number.</div>")
				errorFlag = true;
			}

			var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
			// SRC: https://www.w3resource.com/javascript/form/email-validation.php

			if (emailValue == "" || emailValue === null || !emailRegex.test(emailValue)) {
				$("#events_email").after("<div class=\"field-error collumn4\">Please enter a valid email address.</div>");
				errorFlag = true;
			}

			if (guestNumberValue === "" || guestNumberValue === null || guestNumberValue < 0 || guestNumberValue > 150){
				$("#events_guests").after("<div class=\"field-error collumn4\">Please enter the approx. number of guests. Max capacity: 150</div>");
				errorFlag = true;
			}

			if (eventLocationValue === "none") {
				$("#events_location_wrapper").after("<div class=\"field-error collumn4\">Please select a location.</div>");
				errorFlag = true;
			}
			console.log(eventLocationValue);


			
			if (errorFlag === true) {
				console.log(errorFlag);
			} else {
				formHandle.style.display = "none";
				var eventsConfirmationMsg = document.getElementById("events_confirmationMsg");
				eventsConfirmationMsg.style.display = "block";
			}
			return false;
		} // END processForm
	}
	

}); // END .ready