/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
 */

// Your code here
var images = ['image1.png', 'image2.png', 'image3.png'];
console.log('P1 Question 1: ' + images);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

// Your code here
var q2 = images[0];
console.log('P1 Question 2: ' + q2);


/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

// Your code here
var q3 = images.length;
console.log('P1 Question 3: ' + q3);

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */


// Your code here
var q4 = images[q3-1];
console.log('P1 Question 4: ' + q4);


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables printed to the console.
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
The end result should be an array of numbers with values 2,3,4,5
 */

// Your code here
var test = [1, 2, 3, 4];
console.log('P2 Question 1 Before:' + test);

for(i = 0; i < test.length; i++) {
 test[i] += 1;
}

console.log('P2 Question 1 After:' + test);


/**
 * Question 2
 * Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.
 */


// Your code here
var sum = 0;

for(i = 0; i < test.length; i++) {
 sum += test[i];
}

var q2 = sum/test.length;
console.log('P2 Question 2 Array Average: ' + q2);