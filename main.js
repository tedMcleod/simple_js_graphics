var dot;

function start() {
	dot = canvas.circle()

	dot = canvas.circle(250, 150, 30).attr({ 
		fill: "red", 
		stroke: "#000", 
		"stroke-width": 1 
	});
	console.log(dot.getBBox().x);

	setTimer(onTick, 15);
}

function onTick() {
	dot.translate(1,0);
}
