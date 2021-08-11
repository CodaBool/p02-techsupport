/*
 * File Name:		chat.js
 * Name:				Coda Bool
 * Description:		chat.js is a collection of scripts used to enhance the Tech Support web page (chat.html). This will have a chat modal appear and uses placeholder images to simulate a chat experience using timing. 
 * Date:			10/29/19
 */

// Constants and Variables
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("startChat");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var res = document.getElementById("responding");
var start = document.getElementById("chatStart");

// When the user clicks the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
    setTimeout(startDisplay, 1000);
	setTimeout(respondDisplay, 5000);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }

  /*
 * Name:			respondDisplay()
 * Parameters:		None.
 * Processes:		To show the respond on the chat box.
 * Return Value:	None.
 */
}
function respondDisplay() {
	res.style.display = "block";
}

 /*
 * Name:			startDisplay()
 * Parameters:		None.
 * Processes:		To start the display of the chat box.
 * Return Value:	None.
 */
function startDisplay() {
	start.style.display = "block";
}
