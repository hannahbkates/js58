var sumOfNums = 0;

// for(var i = 0; i<1000; i++) {
// 	if(i%3 == 0) {
// 		sumOfNums += i;
// 		// console.log('multiple of 3 num: ' + i + '; div by 3: ' + i/3 + '; sum: ' + sumOfNums);
// 	} else if(i%5 == 0) {
// 		sumOfNums += i;
// 		// console.log('multiple of 5 num: ' + i + '; div by 5: ' + i/5 + '; sum: ' + sumOfNums);
// 	}
// }

// console.log('final sum: ' + sumOfNums);

function multiples35(number) {
	if(i%3 == 0) {
		sumOfNums += i;
		// console.log('multiple of 3 num: ' + i + '; div by 3: ' + i/3 + '; sum: ' + sumOfNums);
	} else if(i%5 == 0) {
		sumOfNums += i;
		// console.log('multiple of 5 num: ' + i + '; div by 5: ' + i/5 + '; sum: ' + sumOfNums);
	}
}

for(var i = 0; i<1000; i++) {
	multiples35(i);
}

console.log('final sum: ' + sumOfNums);