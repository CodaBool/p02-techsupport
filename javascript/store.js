/*
 * File Name:			store.js
 * Name:						Coda Bool
 * Description:			In-store appointment setup, form validation, calendar generation, and modal display.
 * Date:				10/29/19
 */

// Constants and Variables
var dateObject = new Date();
// Get the modal
var modal = document.getElementById("pictureModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("buildingImage");
var modalImg = document.getElementById("modalBuilding");
var captionText = document.getElementById("caption");

img.onclick = function(){ //displays the modal when clicking on the image
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

/*
 * Name:			displayCalendar()
 * Parameters:		whichMonth
 * Processes:		Display calendar on the reservation page for the user to choose the date from.
 * Return Value:	None.
 */
function displayCalendar(whichMonth) {
	// Constants and Variables
	var date;
	var dateToday = new Date();
	var dayOfWeek;
	var daysInMonth;
	var dateCells;
	var captionValue;
	var month;
	var year;
	var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	if (whichMonth === -1) {
		dateObject.setMonth(dateObject.getMonth() -1);
	} else if (whichMonth === 1) {
		dateObject.setMonth(dateObject.getMonth() +1);
	}
	month = dateObject.getMonth();
	year = dateObject.getFullYear();
	dateObject.setDate(1);
	dayOfWeek = dateObject.getDay();
	captionValue = monthArray[month] + " " + year;
	document.querySelector("#cal table caption").innerHTML = captionValue;
	if (month ===0|| month ===2|| month ===4|| month ===6|| month ===7|| month ===9|| month === 11) { // Jan, Mar, May, Jul, Aug, Oct, Dec
		daysInMonth = 31;
	} else if (month === 1) { // Feb
		if (year %4 === 0) { // leap year test
			if (year %100 === 0) {
				// year ending in 00 not a leap year unless
				// divisible by 400
				if (year %400 === 0) {
				   daysInMonth = 29;
				} else {
				    daysInMonth = 28;
			    }
		    } else {
			    daysInMonth = 29;
		    }
	    } else {
		    daysInMonth = 28;
	    }
    } else { // Apr, Jun, Sep, Nov
	    daysInMonth =30;
    }
	dateCells = document.getElementsByTagName("td");
	for (var i =0; i < dateCells.length; i++) {
		// clear existing table dates
		dateCells[i].innerHTML = "";
		dateCells[i].className = "";
	}
	for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
		// add dates to days cells
		dateCells[i].innerHTML = dateObject.getDate();
		dateCells[i].className ="date";
		if (dateToday < dateObject) {
			dateCells[i].className ="futuredate";
		}
		date = dateObject.getDate() + 1;
		dateObject.setDate(date);
	}
	dateObject.setMonth(dateObject.getMonth() - 1);
	// reset month to month shown
	document.getElementById("cal").style.display = "block";
	// display calendar if it’s not already visible
 }

 /*
 * Name:			selecDate()
 * Parameters:		event
 * Processes:		Select the date of user's choice.
 * Return Value:	None.
 */
function selectDate(event) {
	if (event===undefined) { // get caller element in IE8
		event=window.event;
	}
	//assigned based on browser
	var callerElement = event.target || event.srcElement;
	if (callerElement.innerHTML === "") {
		// cell contains no date, so don’t close the calendar
		document.getElementById("cal").style.display = "block";
		return false;
	}
	dateObject.setDate(callerElement.innerHTML);
	var fullDateToday = new Date();
	var dateToday =Date.UTC(fullDateToday.getFullYear(), fullDateToday.getMonth(), fullDateToday.getDate());
	var selectedDate =Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());
	if (selectedDate <= dateToday) {
		document.getElementById("cal").style.display = "block";
		return false;
	}
	document.getElementById("date").value = dateObject.toLocaleDateString();
	hideCalendar();
}

/*
 * Name:			hideCalendar()
 * Parameters:		None.
 * Processes:		Hide the calendar.
 * Return Value:	None.
 */
function hideCalendar() {
	document.getElementById("cal").style.display = "none";
}

/*
 * Name:			prevMo()
 * Parameters:		None.
 * Processes:		Display the previous month in the calendar.
 * Return Value:	None.
 */
function prevMo() {
	displayCalendar(-1);
}

/*
 * Name:			nextMo()
 * Parameters:		None.
 * Processes:		Display the next month in the calendar.
 * Return Value:	None.
 */
function nextMo() {
	displayCalendar(1);
}

/*
 * Name:			changeTimeAm()
 * Parameters:		None.
 * Processes:		To change the dropdown to display only Am available hours
 * Return Value:	None.
 */
function changeTimeAm() {
	document.chat.timeDrop.options.length=0;
	document.chat.timeDrop.options[0]=new Option("8:00", "8:00", true, false);
	document.chat.timeDrop.options[1]=new Option("9:00", "9:00", false, false);
	document.chat.timeDrop.options[2]=new Option("10:00", "10:00", false, false);
	document.chat.timeDrop.options[3]=new Option("11:00", "11:00", false, false);
}

/*
 * Name:			changeTimePm()
 * Parameters:		None.
 * Processes:		To change the dropdown to display only Pm available hours
 * Return Value:	None.
 */
function changeTimePm() {
	document.chat.timeDrop.options.length=0;
	document.chat.timeDrop.options[0]=new Option("12:00", "12:00", true, false);
	document.chat.timeDrop.options[1]=new Option("1:00", "1:00", false, false);
	document.chat.timeDrop.options[2]=new Option("2:00", "2:00", false, false);
	document.chat.timeDrop.options[3]=new Option("3:00", "3:00", false, false);
	document.chat.timeDrop.options[4]=new Option("4:00", "4:00", false, false);
	document.chat.timeDrop.options[5]=new Option("5:00", "5:00", false, false);
	document.chat.timeDrop.options[6]=new Option("6:00", "6:00", false, false);
	document.chat.timeDrop.options[7]=new Option("7:00", "7:00", false, false);
}

/*
 * Name:			validateName()
 * Parameters:		None.
 * Processes:		to validate the name that user entered in the name field.
 * Return Value:	Boolean value for formValidity.
 */
function validateName() {
	var errorDiv = document.getElementById("nameErrorMessage");
	var input = document.getElementById("name");
    try {
		if (input.value == "") { //checks if the field is empty
            throw "This field is required."
		} else if (/.{2,}/.test(input.value) === false) { //checks if the name is at least 2 chars long
			throw "Name must be at least 2 characters long";
		} else if (!/^[a-zA-Z]*$/g.test(input.value)) {  //checks if the field has numbers
			throw "Name must contain only letters";
		} else { //clear error display
            errorDiv.style.display = "none";
            input.style.background = "white";
        }
    }
    catch (msg) { //create error display
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
        formValidity = false;
    }
}

/*
 * Name:			validatePhonNumber()
 * Parameters:		None.
 * Processes:		to validate the number that user entered in the phone number field.
 * Return Value:	Boolean value for formValidity.
 */
function validatePhoneNumber() {
	var errorDiv = document.getElementById("phoneErrorMessage");
	var input = document.getElementById("phone");
    try {
		if (input.value == "") { //checks if the field is empty
            throw "This field is required."
		} else if (input.value.length < 12) { //checks if the length is no more than 12 chars long
			throw "Your number is too short, please enter in the format ###-###-####";
		} else if (input.value.length > 12) {  //checks if the length is not less than 12 chars long
			throw "Your number is too long, please enter in the format ###-###-####";
		} else { //clear error display
            errorDiv.style.display = "none";
            input.style.background = "white";
        }
    }
    catch (msg) { //create error display
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
        formValidity = false;
    }
}

/*
 * Name:			validateEmail()
 * Parameters:		None.
 * Processes:		to validate the email address that user entered in the email field.
 * Return Value:	Boolean value for formValidity.
 */
function validateEmail() {
	var errorDiv = document.getElementById("emailErrorMessage");
	var input = document.getElementById("email");
	var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/; // regexp to check email validation
    try {
        if (input.value == "") {
            // Custom checked but message box is empty.
            throw "This field is required."
        } else if (emailCheck.test(input.value) === false) {  // checks the email to the emailCheck regexp
			throw "Please enter a valid email."
		} else { //clear error display
            errorDiv.style.display = "none";
            input.style.background = "white";
        }
    }
    catch (msg) { //create error display
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
        formValidity = false;
    }
}

/*
 * Name:			validateTime()
 * Parameters:		None.
 * Processes:		to validate the Time that user choose in the Time field.
 * Return Value:	Boolean value for formValidity.
 */
function validateTime() {
	var errorDiv = document.getElementById("timeErrorMessage");
	var input = document.getElementById("time");
    try {
        if (input.value == "") {
            // Custom checked but message box is empty.
            throw "This field is required."
		} else { //clear error display
            errorDiv.style.display = "none";
            input.style.background = "white";
        }
    }
    catch (msg) { //create error display
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
        formValidity = false;
    }
}

/*
 * Name:			validateDate()
 * Parameters:		None.
 * Processes:		to validate the Date that user entered in the Date field.
 * Return Value:	Boolean value for formValidity.
 */
function validateDate() {
	var errorDiv = document.getElementById("dateErrorMessage");
	var input = document.getElementById("date");
    try {
        if (input.value == "") {
            // Custom checked but message box is empty.
            throw "This field is required."
		} else { //clear error display
            errorDiv.style.display = "none";
            input.style.background = "white";
        }
    }
    catch (msg) { //create error display
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
        formValidity = false;
    }
}
/* Validate Form */
/*
 * Name:			validateForm()
 * Parameters:		evt
 * Processes:		function to call the validate functions.
 * Return Value:	Boolean value
 */
function validateForm() {
  formValidity = true; // Reset value for revalidation.
	validateName();
	validatePhoneNumber();
	validateEmail();
	validateTime();
	validateDate();
	if (formValidity) {
		document.chat.submit();
	} else {
		return false;
	}
}

/*
 * Name:			createEventListeners()
 * Parameters:		None.
 * Processes:		to create event listeners
 * Return Value:	None
 */
function createEventListeners() {
	var am = document.getElementById("radioAm");
	if (am.addEventListener) {
		am.addEventListener("click", changeTimeAm);
	}
	var pm = document.getElementById("radioPm");
	if (pm.addEventListener) {
		pm.addEventListener("click", changeTimePm);
	}
	var dateField =document.getElementById("date");
	if (dateField.addEventListener) {
		dateField.addEventListener("click", displayCalendar, false);
	} else if (dateField.attachEvent) {
		dateField.attachEvent("onclick", displayCalendar);
	}
	var dateCells =document.getElementsByTagName("td");
	if (dateCells[0].addEventListener) {
		for (var i =0; i < dateCells.length; i++) {
			dateCells[i].addEventListener("click", selectDate, false);
		}
	} else if (dateCells[0].attachEvent) {
		for (var i =0; i < dateCells.length; i++) {
			dateCells[i].attachEvent("onclick", selectDate);
		}
	}
	var closeButton = document.getElementById("close");
	if (closeButton.addEventListener) {
		closeButton.addEventListener("click", hideCalendar, false);
	} else if (closeButton.attachEvent) {
		closeButton.attachEvent("onclick", hideCalendar);
	}
	var prevLink = document.getElementById("prev");
	var nextLink = document.getElementById("next");
	if (prevLink.addEventListener) {
		prevLink.addEventListener("click", prevMo, false);
		nextLink.addEventListener("click", nextMo, false);
	} else if (prevLink.attachEvent) {
		prevLink.attachEvent("onclick", prevMo);
		nextLink.attachEvent("onclick", nextMo);
	}
	/*
	var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
	*/
}
// runs the createEventListeners function once the page loads.
if (window.addEventListener) {
window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
window.attachEvent("onload", createEventListeners);
}
