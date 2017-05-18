// Homework 2 - Assignment 1

var number = 99;

for(i=0; i<100; i++) {
	if(number == 0)  {
		console.log('No more bottles of beer on the wall, no more bottles of beer.');
		console.log('Go to the store and buy some more, 99 bottles of beer on the wall.\n');
	} else if(number == 1) {
		console.log(number + ' bottle of beer on the wall, ' + number + ' bottle of beer.');
		console.log('Take one down and pass it around, no more bottles of beer on the wall.\n');
	} else if(number == 2) {
			console.log(number + ' bottles of beer on the wall, ' + number + ' bottles of beer.');
			console.log('Take one down and pass it around, ' + (number-1) + ' bottle of beer on the wall.\n');
	} else {
		console.log(number + ' bottles of beer on the wall, ' + number + ' bottles of beer.');
		console.log('Take one down and pass it around, ' + (number-1) + ' bottles of beer on the wall.\n');
	}
	number = number - 1 ;
}