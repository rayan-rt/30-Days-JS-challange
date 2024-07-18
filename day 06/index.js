console.clear();

// Activity 01
//  - Task 01
let nums = [1, 2, 3, 4, 5];
console.log(nums);

//  - Task 02
console.log(`First: ${nums[0]}, Last: ${nums[nums.length - 1]}`);

// Activity 02
//  - Task 03
nums.push(6);
console.log("After push: ", nums);

//  - Task 04
nums.pop();
console.log("After pop: ", nums);

//  - Task 05
nums.shift();
console.log("After shift: ", nums);

//  - Task 06
nums.unshift(1);
console.log("After unshift: ", nums);

// Activity 03
//  - Task 07
let double_nums = nums.map((num) => num * 2);
console.log(double_nums);

//  - Task 08
let even_nums = nums.filter((num) => num % 2 === 0);
console.log(even_nums);

//  - Task 09
let sum = nums.reduce((acc, num) => {
	return acc + num;
}, 0);
console.log(sum);

// Activity 04
//  - Task 10
for (let i = 0; i < nums.length; i++) {
	console.log(nums[i]);
}

//  - Task 11
nums.forEach((num) => console.log(num));
// for..of | for..in

// Activity 05
//  - Task 12
let matrix = [
	[1, 2],
	[3, 4],
];
for (let i = 0; i < 2; i++) {
	for (let j = 0; j < 2; j++) {
		console.log(matrix[i][j]);
	}
}

//  - Task 13
console.log(matrix[1]);
console.log(matrix[0][1]);
