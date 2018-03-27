var numberOfClicks = 0;

window.onload = function (){
	
	window.addEventListener("click", showNumberOfClicks);
	
}

function showNumberOfClicks() {
	
	numberOfClicks = numberOfClicks + 1;
	var x = event.clientX;
	var y = event.clientY;
	var buttonForClicks = document.createElement("Button");
	buttonForClicks.style.width = "200px";
	buttonForClicks.style.height = "30px";
	buttonForClicks.style.position = "absolute";
	buttonForClicks.style.left = x + "px";
	buttonForClicks.style.top = y + "px";
	buttonForClicks.innerHTML = numberOfClicks;
	buttonForClicks.id = "button_" + numberOfClicks.toString();
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(buttonForClicks);
	
	setTimeout(function() {
		deleteElement(buttonForClicks);
	}, 10000);
	
}

function deleteElement(elementToDelete) {
	elementToDelete.parentNode.removeChild(elementToDelete);
}