// Create listener for when the page loads
window.onload= pageReady;
// Create function for onload listener
function pageReady(){
	var allGcards = document.getElementsByTagName('img');
	var SubBtn = document.getElementById("submitbtn");
	var formDiv= document.getElementById("form_div");
	var formHandle = document.forms[0];
	// It should hold the form handle to be able to get the user input
	formHandle.onsubmit = processForm;
	
	
	for (var i = 1; i < allGcards.length; i++){
		allGcards[i].onclick = switchCards;
	}
	function switchCards () {
		allGcards[4].src = this.src;
	}
	function processForm (){
		var nameValue = document.getElementById("in_giftcardname");
	    var amountValue = document.getElementById("in_giftcardamount");
		var pickupValue = document.getElementById("in_giftcardpickup");
		var RegExAmt = /^\d{2,4}$/;
		
		if(nameValue.value===""||nameValue.value===null)
		{
			nameValue.style.background = "yellow";;
			nameValue.placeholder = "Please enter name";
			nameValue.focus();
			return false;
		}
		if(!RegExAmt.test(amountValue.value)||amountValue.value===""||amountValue.value===null)
		{
			amountValue.style.background = "yellow";;
			amountValue.placeholder = "Please enter 2-4 digit number";
			amountValue.focus();
			return false;
		}
		// Submit user input into the html
		formDiv.style.display = "none";
		subtitle.innerHTML="Thank you!<p> Your Gift Card will be ready for pick-up at: " + pickupValue.value + ".</p>";
		
		giftc_name.innerHTML=nameValue.value;
		giftc_name.style.color="white";
		giftc_amount.innerHTML="$"+amountValue.value;
		giftc_amount.style.color="white";
		return false;
	}
} // End pageReady function
