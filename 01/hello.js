var x = "Hello World";

console.log(x);

var age = 21;

if(age >= 21) {
	console.log("You may legally have a drink.");

	if(age < 25) { console.log("Jaeger!"); }
	if(age >= 25) { console.log("Old fashioned"); }
};

var counter = 0;
while(counter < 10) {
	console.log("woohoo!" + counter);

	if(counter % 3 == 0) {
		break
	}

	counter++;
}