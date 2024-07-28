console.clear();

// Activity 01
//  - Task 01
function factorial(num) {
	if (num <= 2) return num;

	return num * factorial(num - 1);
}
console.log(factorial(6));
console.log(factorial(5));

//  - Task 02
function fibonacci(num) {
	if (num <= 3) return num;

	return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(6));
console.log(fibonacci(5));

// Activity 02
//  - Task 03
function sumOfArrayVal(nums, length) {
	if (length === 0) return null;

	return nums[length - 1] + sumOfArrayVal(nums, length - 1);
}
console.log(sumOfArrayVal([9, 10, 11, 12], 4));
console.log(sumOfArrayVal([9], 1));
console.log(sumOfArrayVal([], 0));

//  - Task 04
function maxInArray(nums, length) {
	if (length === 0) return null;

	if (length === 1) return nums[0];

	return Math.max(nums[length - 1], maxInArray(nums, length - 1));
}
console.log(maxInArray([19, 10, 11, 12], 4));
console.log(maxInArray([12], 1));
console.log(maxInArray([], 0));

// Activity 03
//  - Task 05
function reverseString(str) {
	if (str.length === 0) return "";
	if (str.length === 1) return str;
	return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("code"));
console.log(reverseString("chai aur code"));

//  - Task 06
function isPalindrome(str) {
	if (str.length <= 1) {
		return true;
	}
	if (str.charAt(0) !== str.charAt(str.length - 1)) {
		return false;
	}
	return isPalindrome(str.substr(1, str.length - 2));
}
console.log(isPalindrome("high"));
console.log(isPalindrome("madam"));

// Activity 04
//  - Task 07
function binarySearch(arr, target, low, high) {
	if (low > high) {
		return -1;
	}
	let mid = Math.floor((low + high) / 2);
	if (arr[mid] === target) {
		return mid;
	}
	if (arr[mid] > target) {
		return binarySearch(arr, target, low, mid - 1);
	}
	return binarySearch(arr, target, mid + 1, high);
}
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 5, 0, sortedArray.length - 1));
console.log(binarySearch(sortedArray, 16, 0, sortedArray.length - 1));

//  - Task 08
function countOccurrences(arr, target, length) {
	if (length <= 0) {
		return 0;
	}
	return (
		(arr[length - 1] === target ? 1 : 0) +
		countOccurrences(arr, target, length - 1)
	);
}
console.log(countOccurrences([1, 2, 3, 2, 2, 4, 2], 2, 7));
console.log(countOccurrences([1, 2, 3, 4, 5], 6, 5));
