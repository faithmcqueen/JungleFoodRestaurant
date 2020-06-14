/* ####### HOMEPAGE JS #### */

window.onload = pageReady;

function pageReady (){

	// ####### SPECIALS JS

	//get element ids

	var specials = document.getElementById("specials");
	var monSpecial = document.getElementById("specialMonday");
	var tuesSpecial = document.getElementById("specialTuesday");
	var wedSpecial = document.getElementById("specialWednesday");
	var thursSpecial = document.getElementById("specialThursday");
	var friSpecial = document.getElementById("specialFriday");
	var satSpecial = document.getElementById("specialSaturday");
	var sunSpecial = document.getElementById("specialSunday");

	// hide daily specials

	sunSpecial.style.display = "none";
	monSpecial.style.display = "none";
	tuesSpecial.style.display = "none";
	wedSpecial.style.display = "none";
	thursSpecial.style.display = "none";
	friSpecial.style.display = "none";
	satSpecial.style.display = "none";

	// get system date

	var myDate = new Date();

	// create switch cases for the date

	switch (myDate.getDay()) {
		case 0:
		sunSpecial.style.display = "inline-block";
		break;
		case 1:
		monSpecial.style.display = "inline-block";
		break;
		case 2:
		tuesSpecial.style.display = "inline-block";
		break;
		case 3:
		wedSpecial.style.display = "inline-block";
		break;
		case 4:
		thursSpecial.style.display = "inline-block";
		break;
		case 5:
		friSpecial.style.display = "inline-block";
		break;
		case 6:
		satSpecial.style.display = "inline-block";
	}


	// ######## MENU JS

	// get element ids

	var appetizerInfo = document.getElementById("appcontent");
	var breakfastInfo = document.getElementById("bfastcontent");
	var mainsInfo = document.getElementById("maincontent");
	var cocktailInfo = document.getElementById("drinkcontent");
	var dessertInfo = document.getElementById("dessertcontent")
	var appImg = document.getElementById("appimg");
	var breakImg = document.getElementById("breakimg");
	var mainImg = document.getElementById("mainimg");
	var cocktailImg = document.getElementById("cocktailimg");
	var dessertImg = document.getElementById("dessertimg");



	// hide content sections

	appetizerInfo.style.display = "none";
	breakfastInfo.style.display = "none";
	mainsInfo.style.display = "none";
	cocktailInfo.style.display = "none";
	dessertInfo.style.display = "none";

	// set up listeners

	appImg.onclick = showApp;
	breakImg.onclick = showBreak; 
	mainImg.onclick = showMain;
	cocktailImg.onclick = showCocktail;
	dessertImg.onclick = showDessert;


	// function to show content

	function showApp (){
		appetizerInfo.style.display = "block";
		breakfastInfo.style.display = "none";
		mainsInfo.style.display = "none";
		cocktailInfo.style.display = "none";
		dessertInfo.style.display = "none";
	}

	function showBreak (){
		appetizerInfo.style.display = "none";
		breakfastInfo.style.display = "block";
		mainsInfo.style.display = "none";
		cocktailInfo.style.display = "none";
		dessertInfo.style.display = "none";
	}
	function showMain (){
		appetizerInfo.style.display = "none";
		breakfastInfo.style.display = "none";
		mainsInfo.style.display = "block";
		cocktailInfo.style.display = "none";
		dessertInfo.style.display = "none";
	}
	function showCocktail(){
		appetizerInfo.style.display = "none";
		breakfastInfo.style.display = "none";
		mainsInfo.style.display = "none";
		cocktailInfo.style.display = "block";
		dessertInfo.style.display = "none";
	}
	function showDessert(){
		appetizerInfo.style.display = "none";
		breakfastInfo.style.display = "none";
		mainsInfo.style.display = "none";
		cocktailInfo.style.display = "none";
		dessertInfo.style.display = "block";
	}


	// ######## BOOKING FORM JS

	// listen for form submits to trigger validation

	var bookingform = document.getElementById("book_form");
	book_form.onsubmit = formHandle;
	// document.review_form.onsubmit = reviewHandle;
	// document.contact_form.onsubmit = contactHandle;

	// create regular expressions to use in validations
	var phoneRgx = /^[2-9]\d{2}-\d{3}-\d{4}$/; // regex pattern author: Steven Smith 
	var emailRgx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // regex pattern author: Steven Smith 
	var dateRgx = /^\d{1,2}\/\d{1,2}\/\d{4}$/; //reges pattern author: Steven Smith
	// Steven Smith Author link: http://regexlib.com/UserPatterns.aspx?authorId=26c277f9-61b2-4bf5-bb70-106880138842
	var guestRgx = /^\d{2}$/; 

	// functions for handling 3 forms

	function formHandle(){

		var nameValue = document.getElementById("book_name").value;
		var phoneValue = document.getElementById("book_phone").value;
		var emailValue = document.getElementById("book_email").value;
		var dateValue = document.getElementById("book_date").value;
		var guestValue = document.getElementById("book_guests").value;


		if (nameValue === " " || nameValue === null) {
			document.getElementById("book_name").style.background = "red";
			return false;
		}
		if (emailValue === " " || emailValue === null || !emailRgx.test(emailValue)){
			document.getElementById("book_email").style.background = "red";
			return false;
		}
		if (phoneValue === " " || phoneValue === null ||!phoneRgx.test(phoneValue)) {
			document.getElementById("book_phone").style.background = "red";
			return false;
		}
		if (dateValue === " " || dateValue === null || !dateRgx.test(dateValue)){
			document.getElementById("book_date").style.background = "red";
			return false;
		}
		if (guestValue === " " || guestValue === null || !guestRgx.test(guestValue)){
			document.getElementById("book_guests").style.background = "red";
			return false;
		}

		else {
			return true;
		}
	}


} // end page ready