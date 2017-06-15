var launch = function () {
	console.log("Launched!");
}

var launch2 = function() {
	console.log("Launched a different rocket")
}

// higher order functions because we pass in a function
function rocketLaunch(launchFn) {
	for(var i=10; i>0; i--) {
		console.log(i, "...");
	}

	launchFn();
}

// rocketLaunch(launch);
// rocketLaunch(launch2);

setTimeout(function(){
	rocketLaunch(launch)
}, 1000);