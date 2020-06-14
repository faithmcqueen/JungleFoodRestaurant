/* ###### CONTACT PAGE JAVASCRIPT ###### */


jQuery(document).ready(function () {

	// hide the forms on page load
	$('#form2').hide();
	$('#form3').hide();

	// on click of buttons, show correct form

	$('#resobtn').click(function(){
			$('#form1').show();
			$('#form2').hide();
			$('#form3').hide();
		});
	$('#reviewbtn').click(function(){
			$('#form2').show();
			$('#form1').hide();
			$('#form3').hide();
		});
	$('#contactbtn').click(function(){
			$('#form3').show();
			$('#form1').hide();
			$('#form2').hide();
		});

	// listen for form submits to trigger validation

	var resoForm = document.getElementById("resoform");
	var reviewForm = document.getElementById("reviewform");
	var contactForm = document.getElementById("contactform");	

	resoForm.onsubmit = resoHandle;
	reviewForm.onsubmit = reviewHandle;
	contactForm.onsubmit = contactHandle;


	// create regular expressions to use in validations
	var phoneRgx = /^[2-9]\d{2}-\d{3}-\d{4}$/; // regex pattern author: Steven Smith 
	var emailRgx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // regex pattern author: Steven Smith 
	var dateRgx = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //reges pattern author: Steven Smith
	// Steven Smith Author link: http://regexlib.com/UserPatterns.aspx?authorId=26c277f9-61b2-4bf5-bb70-106880138842
	var guestRgx = /^\d{2}$/; 

	// functions for handling 3 forms

	function resoHandle(){

		var nameValue = document.getElementById("reso_name").value;
		var phoneValue = document.getElementById("reso_phone").value;
		var emailValue = document.getElementById("reso_email").value;
		var dateValue = document.getElementById("reso_date").value;
		var guestsValue = document.getElementById("reso_guests").value;


		if (nameValue === " " || nameValue === null) {
			document.getElementById("reso_name").style.background = "red";
			return false;
		}
		if (emailValue === " " || emailValue === null || !emailRgx.test(emailValue)){
			document.getElementById("reso_email").style.background = "red";
			return false;
		}
		if (phoneValue === " " || phoneValue === null ||!phoneRgx.test(phoneValue)) {
			document.getElementById("reso_phone").style.background = "red";
			return false;
		}
		if (dateValue === " " || dateValue === null || !dateRgx.test(dateValue)){
			document.getElementById("reso_date").style.background = "red";
			return false;
		}
		if (guestValue === " " || guestValue === null || !guestRgx.test(guestValue)){
			document.getElementById("reso_guests").style.background = "red";
			return false;
		}
	}

	function reviewHandle() {

		var nameValue = document.getElementById("review_name").value;
		var phoneValue = document.getElementById("review_phone").value;
		var emailValue = document.getElementById("review_email").value;
		var dateValue = document.getElementById("review_date").value;
		var txtValue = document.getElementById("review_txt").value;

		if (nameValue === " " || nameValue === null) {
			document.getElementById("review_name").style.background = "red";
			return false;
		}
		if (emailValue === " " || emailValue === null || !emailRgx.test(emailValue)){
			document.getElementById("review_email").style.background = "red";
			return false;
		}
		if (phoneValue === " " || phoneValue === null ||!phoneRgx.test(phoneValue)) {
			document.getElementById("review_phone").style.background = "red";
			return false;
		}
		if (dateValue === " " || dateValue === null || !dateRgx.test(dateValue)){
			document.getElementById("review_date").style.background = "red";
			return false;
		}
		if (txtValue === " " || txtValue === null){
			document.getElementById("review_txt").style.background = "red";
			return false;
		}

	}

	function contactHandle() {

		var nameValue = document.getElementById("contact_name").value;
		var phoneValue = document.getElementById("contact_phone").value;
		var emailValue = document.getElementById("contact_email").value;
		var messageValue = document.getElementById("message").value;

		if (nameValue === " " || nameValue === null) {
			document.getElementById("contact_name").style.background = "red";
			return false;
		}
		if (emailValue === " " || emailValue === null || !emailRgx.test(emailValue)){
			document.getElementById("contact_email").style.background = "red";
			return false;
		}
		if (phoneValue === " " || phoneValue === null ||!phoneRgx.test(phoneValue)) {
			document.getElementById("contact_phone").style.background = "red";
			return false;
		}
		if (dateValue === " " || dateValue === null || !dateRgx.test(dateValue)){
			document.getElementById("contact_date").style.background = "red";
			return false;
		}
		if (txtValue === " " || txtValue === null){
			document.getElementById("message").style.background = "red";
			return false;
		}

	}

	}); //end page load