// var prev = 0;
// var inc = 1;
// var num = 1;

// while(prev < 4000000) {
// 	console.log(num);
// 	prev = num;
// 	num += inc;
// 	inc = prev;
// }

var nums = [0,1];
var inc = 1;
var seq = [];

while(nums[0] < 4000000) {
	console.log(nums[1]);
	seq.push(nums[1]);
	nums[0] = nums[1];
	nums[1] += inc;
	inc = nums[0];
}

console.log(seq);