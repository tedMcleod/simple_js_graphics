const canvas = Raphael("container", 480, 400);
var setTimer;
var stopTimer;
var stopAll;

const __start__ = function(){
	if (typeof(start) === "function") {
		stopAll();
		canvas.clear();
		start();
	} else {
		throw new Error("Please define a start() function");
	}
};

(function() {
	let timers = {};

	setTimer = function(fn, delay, data) {
		if (typeof(fn) === "function") {
			delay = delay || 1;
			let name = fn.name;
			let timer = setInterval(fn, delay, data);
			if (timers[name] === undefined) timers[name] = [];
			timers[name].push(timer);
		} else {
			throw new Error("The first parameter of setTimer must be a function, but you passed " + fn);
		}
	}

	stopTimer = function(name) {
		if (timers[name] !== undefined) {
			for (var i = 0; i < timers[name].length; i++) {
				clearInterval(timers[name][i]);
			}
			delete(timers[name]);
		}
	}

	stopAll = function() {
		for (const name in timers) {
			stopTimer(name);
		}
	}
})();