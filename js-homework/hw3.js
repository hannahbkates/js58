var numberList = [ 1, 5, 2, 20, 7, 90, 3 ];

// #1
function maxValue(array) {
	var max = 0;
	for(i=0; i<array.length; i++) {
		if(array[i] > max) {
			max = array[i];
		}
	}
	console.log(max);
}

maxValue(numberList);

// #2
function inArray(array, element) {
	var answer = 'Nope';
	for(i=0; i<array.length; i++) {
		if(array[i] == element) {
			answer = 'It exists!';
		}
	}
	console.log(answer);
}

inArray(numberList, 20);

// #3
function oddsOnly(array) {
	var odds = [];
	for(i=0; i<array.length; i++) {
		if(i%2 == 1) {
			odds.push(array[i]);
		}
	}
	console.log(odds);
}

oddsOnly(numberList);

// #4
function cummSum(array) {
	var total = 0;
	for(i=0; i<array.length; i++) {
		total += array[i];
	}
	console.log(total);
}

cummSum(numberList);

// #5
function isPallindrome(string) {
	var backward = '';
	var forward = '';
	for(i=0, len=string.length-1; i<=len; i++) {
		forward += string[i].toLowerCase();
		backward += string[len-i].toLowerCase();
	}
	console.log(backward == forward);
}

isPallindrome('Hannah');