// Constructor
var monkey = function(name, species, foodsEaten) {
	// Defines properties
	this.name = name;
	this.species = species;
	this.foodsEaten = foodsEaten;
}

// Method 1
monkey.prototype.eatSomething = function(food) {
	console.log(this.name + ' ate a ' + food + '.');
	this.foodsEaten = this.foodsEaten + ' and ' + food;
};

// Method 2
monkey.prototype.introduce = function() {
	console.log('Hi, my name is ' + this.name + ', and I\'m a ' + this.species + '. I have eaten ' + this.foodsEaten + '.');
};

// Initializing
var m1 = new monkey('Robert', 'Mandrill', 'Bananas');
var m2 = new monkey('Fred', 'White headed capuchin', 'Bugs');
var m3 = new monkey('George', 'Proboscis monkey', 'Berries');

var monkeys = [m1, m2, m3];

for (i=0; i<monkeys.length; i++) {
	monkeys[i].eatSomething('a bug');
	monkeys[i].introduce();
}