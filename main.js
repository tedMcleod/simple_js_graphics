// declare a global variable to use in animation.
var dot;

function start() {

	// draw a circle and save a reference to it in a global variable dot
	dot = canvas.circle(250, 150, 30).attr({ 
		fill: "red", 
		stroke: "#000", 
		"stroke-width": 1 
	});

	// print the x value of the circle
	console.log(dot.getBBox().x);

	// start a timer that calls onTick() every 15 ms
	setTimer(onTick, 15);
}

function onTick() {
	// move the circle 1 to the right every frame
	dot.translate(1,0);
}
