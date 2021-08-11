/*
 * File Name:			gallery.js
 * Name:						Coda Bool
 * Description:			gallery.js is a collection of scripts to enhance gallery.html, which is the Gallery page. Contains a array of images, the correct image is pulled when clicked on, made the main modal content image. Then the use of arrows can allow the user to browse through the images from within the modal. 
 * Date:				10/29/19
 */

// Constants and Variables
var elem = document.getElementById("changeMe"); // the current picture in the modal
var left = document.getElementById("leftArrow");
var right  = document.getElementById("rightArrow");
var modal = document.getElementById("pictureModal");
var changed = false;

elem.setAttribute("height", "100%");
elem.setAttribute("width", "100%");

// Create an array for the images.
var imgArray = new Array();

// Fill the array with images.
imgArray[0] = new Image();
imgArray[0].src = './images/exterior.jpg';

imgArray[1] = new Image();
imgArray[1].src = './images/interior.jpg';

imgArray[2] = new Image();
imgArray[2].src = './images/computer_repair.jpg';

imgArray[3] = new Image();
imgArray[3].src = './images/phone_repair.jpg';

imgArray[4] = new Image();
imgArray[4].src = './images/laptop_repair.jpg';

imgArray[5] = new Image();
imgArray[5].src = './images/home_theater.jpg';

/*
 * Name:			showModal()
 * Parameters:		None.
 * Processes:		Show the modal which will pop up on top of the current page.
 * Return Value:	None.
 */
function showModal() {
	modal.style.display = "block";
	right.style.display = "block";
	left.style.display = "block";
}

/*
 * Name:			nextImage()
 * Parameters:		element.
 * Processes:		This function is to change the image to the next one (to the right).
 * Return Value:	None.
 */
function nextImage() {
	changed = false; // sets the boolean false and is used to know when to break from the for loop.
    for (var i = 0; i < imgArray.length;i++) {
		if (changed) { //if the photo has already been changed to the next image, break out of the loop.
			break;
		}
		if (imgArray[i].src == elem.src) { // if the position from the loop in the array of images is found to be the same as the current modal image
			if (i === (imgArray.length-1)) { // if the image is at the end of the image array
				elem.src = imgArray[0].src; // set the image to the first image in the array
				changed = true; //set to break the for loop
				break;
			}
			elem.src = imgArray[i+1].src; //move to the next image by increasing to the next element in the array
			changed = true; //set to break the for loop
			break;
		}
    }
}

/*
 * Name:			previousImage()
 * Parameters:		element.
 * Processes:		This function is to change the image to the previous one (to the left).
 * Return Value:	None.
 */
function previousImage(element) {
    for (var i = 0; i < imgArray.length;i++) {
        if (imgArray[i].src == elem.src) { // if the position from the loop in the array of images is found to be the same as the current modal image
            if (i === (0)) { // if the loop is at 0 then the current image is the first image in the array
                elem.src = imgArray[imgArray.length-1].src; // changes the image to the last image in the array.
                break;
            }
            elem.src = imgArray[i-1].src; // changes the image to the previous image in the array.
            break;
        }
    }
}

/*
 * Name:			image0()
 * Parameters:		None.
 * Processes:		This function is to show the first image in the array.
 * Return Value:	None.
 */
function image0() {
	elem.src = imgArray[0].src;
	showModal();
}

/*
 * Name:			image1()
 * Parameters:		None.
 * Processes:		This function is to show the second image in the array.
 * Return Value:	None.
 */
function image1() {
	elem.src = imgArray[1].src;
	showModal();
}

/*
 * Name:			image2()
 * Parameters:		None.
 * Processes:		This function is to show the third image in the array.
 * Return Value:	None.
 */
function image2() {
	elem.src = imgArray[2].src;
	showModal();
}

/*
 * Name:			image3()
 * Parameters:		None.
 * Processes:		This function is to show the fourth image in the array.
 * Return Value:	None.
 */
function image3() {
	elem.src = imgArray[3].src;
	showModal();
}

/*
 * Name:			image4()
 * Parameters:		None.
 * Processes:		This function is to show the fifth image in the array.
 * Return Value:	None.
 */
function image4() {
	elem.src = imgArray[4].src;
	showModal();
}

/*
 * Name:			image5()
 * Parameters:		None.
 * Processes:		This function is to show the sixth image in the array.
 * Return Value:	None.
 */
function image5() {
	elem.src = imgArray[5].src;
	showModal();
}

/*
 * Name:			makeAlert()
 * Parameters:		None.
 * Processes:		To display an alert box.
 * Return Value:	None.
 */
function makeAlert() {
	window.alert("alert");
}

/*
 * Name:			rightClick()
 * Parameters:		None.
 * Processes:		To call the function nextImage() when user click on the right arrow icon.
 * Return Value:	None.
 */
function rightClick() {
	nextImage(elem);
}

/*
 * Name:			leftClick()
 * Parameters:		None.
 * Processes:		To call the function previousImage() when user click on the left arrow icon.
 * Return Value:	None.
 */
function leftClick() {
	previousImage(elem);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];
span.onclick = function() {
	modal.style.display = "none";
}

/*
 * Name:			createEventListeners()
 * Parameters:		None.
 * Processes:		To create Event Listeners so all the buttons and features work.
 * Return Value:	None.
 */
function createEventListeners() {
	var img1 = document.getElementById("image1");
	if (img1.addEventListener) {
		img1.addEventListener("click", image0);
	} else if (img1.attachEvent) {
		img1.attachEvent("onclick", makeAlert);
	}
	var img2 = document.getElementById("image2");
	if (img2.addEventListener) {
		img2.addEventListener("click", image1);
	} else if (img2.attachEvent) {
		img2.attachEvent("onclick", makeAlert);
	}
	var img3 = document.getElementById("image3");
	if (img3.addEventListener) {
		img3.addEventListener("click", image2);
	} else if (img3.attachEvent) {
		img3.attachEvent("onclick", makeAlert);
	}
	var img4 = document.getElementById("image4");
	if (img4.addEventListener) {
		img4.addEventListener("click", image3);
	} else if (img4.attachEvent) {
		img4.attachEvent("onclick", makeAlert);
	}
	var img5 = document.getElementById("image5");
	if (img5.addEventListener) {
		img5.addEventListener("click", image4);
	} else if (img5.attachEvent) {
		img5.attachEvent("onclick", makeAlert);
	}
	var img6 = document.getElementById("image6");
	if (img6.addEventListener) {
		img6.addEventListener("click", image5);
	} else if (img6.attachEvent) {
		img6.attachEvent("onclick", makeAlert);
	}

}
// runs the createEventListeners function once the page loads.
if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}
