document.addEventListener("DOMContentLoaded", function (event){


	var buttons = document.getElementsByClassName("buttonNum");
	var screen = document.getElementById("screen");

	for (var i = 0;i<buttons.length; i++){
		buttons[i].addEventListener("click", function(event){
			console.log(event.target.innerHTML);
			screen.innerHTML = event.target.innerHTML
		});
	}
 
 	var operator = document.getElementsByClassName("operator")

	for (var i = 0;i<operator.length; i++){
		operator[i].addEventListener("click", function(event){
			console.log(event.target.innerHTML);
			screen.innerHTML = event.target.innerHTML
		});
	}

	var clear = document.getElementsByClassName("buttonClear")

	for (var i = 0;i<clear.length; i++){
		clear[i].addEventListener("click", function(event){
			console.log(event.target.innerHTML);
			screen.innerHTML = event.target.innerHTML
		});
	}

	var equals = document.getElementsByClassName("equals")

	for (var i = 0;i<equals.length; i++){
		equals[i].addEventListener("click", function(event){
			console.log(event.target.innerHTML);
			screen.innerHTML = event.target.innerHTML
		});
	}

	

});