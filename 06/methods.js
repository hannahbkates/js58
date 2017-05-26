var person = function(name, age) {
	this.name = name;
	this.age = age;
}

person.prototype.canDrive = function() {
	if (this.age >= 16) {
		return true;
	} else {
		return false;
	}
};

var robert = new person('Robert', 1);
console.log('The person is: ', robert.name);
console.log('The person\'s age is: ', robert.age);

console.log('Can they drive?', robert.canDrive());