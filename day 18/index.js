console.clear();

// Activity 01
//  - Task 01
function bubbleSort(arr) {
	let n = arr.length;
	let swapped = Boolean;
	do {
		swapped = false;
		for (let i = 0; i < n - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}

let nums = [64, 34, 25, 12, 22, 11, 90];
// console.log("Bubble Sort:", bubbleSort(nums));

//  - Task 02
function selectionSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		let temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

let nums2 = [64, 34, 25, 12, 22, 11, 90];
// console.log("Selection Sort:", selectionSort(nums2));

//  - Task 03
function partition(arr, low, high) {
	let pivot = arr[high];
	let i = low - 1;
	for (let j = low; j < high; j++) {
		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1;
}
function quickSort(arr, low, high) {
	if (low > high) {
		return;
	}
	let pivot = partition(arr, low, high);
	quickSort(arr, low, pivot - 1);
	quickSort(arr, pivot + 1, high);
}

let nums3 = [64, 34, 25, 12, 22, 11, 90];
quickSort(nums3, 0, nums3.length - 1);
// console.log("Sorted array:", arr);

// Activity 02
//  - Task 04
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}

const target = 22;
const target2 = 32;
let nums4 = [64, 34, 25, 12, 22, 11, 90];

let index1 = linearSearch(nums4, target);
// if (index1 !== -1)
// 	console.log(`Linear Search: Target ${target} found at index ${index1}`);
// else console.log(`Linear Search: Target ${target} not found`);

let index2 = linearSearch(nums4, target2);
// if (index2 !== -1)
// 	console.log(`Linear Search: Target ${target2} found at index ${index2}`);
// else console.log(`Linear Search: Target ${target2} not found`);

//  - Task 05
function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (arr[middle] === target) {
			return middle;
		} else if (arr[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	return -1;
}

let nums5 = [11, 12, 22, 25, 34, 64, 90];

let index3 = binarySearch(nums5, target);
// if (index3 !== -1)
// 	console.log(`Binary Search: Target ${target} found at index ${index3}`);
// else console.log(`Binary Search: Target ${target} not found`);

let index4 = binarySearch(nums5, target2);
// if (index4 !== -1)
// 	console.log(`Binary Search: Target ${target2} found at index ${index4}`);
// else console.log(`Binary Search: Target ${target2} not found`);

// Activity 03
//  - Task 06
function countCharacters(str) {
	let character_count = {};
	for (let i = 0; i < str.length; i++) {
		let ch = str.charAt(i);
		if (!character_count[ch]) {
			character_count[ch] = 1;
		} else {
			character_count[ch]++;
		}
	}
	console.log(
		"Occurence of each letter in the given string is: ",
		character_count,
	);
}

let str = "chai aur code";
// countCharacters(str);

//  - Task 07
function longestSubstring(str) {
	let longest = 0;
	for (let i = 0; i < str.length; i++) {
		let current_string = new Set();
		for (let j = i; j < str.length; j++) {
			if (current_string.has(str[j])) {
				break;
			} else {
				current_string.add(str[j]);
			}
		}
		longest = Math.max(longest, current_string.size);
	}
	return longest;
}

let string = "chai aur code";
// console.log(
// 	"Length of longest substring without repeating characters:",
// 	longestSubstring(string),
// );

// Activity 04
//  - Task 08
function rotateArray(arr, k) {
	let n = arr.length;
	k = k % n;
	let rotated = [];
	for (let i = 0; i < n; i++) rotated[(i + k) % n] = arr[i];
	for (let i = 0; i < n; i++) arr[i] = rotated[i];
}

let nums6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
// console.log("Original array:", nums6);
rotateArray(nums6, k);
// console.log("Rotated array:", nums6);

//  - Task 09
function mergeArrays(arr1, arr2) {
	let final = [],
		i = 0;
	j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			final.push(arr1[i]);
			i++;
		} else {
			final.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		final.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		final.push(arr2[j]);
		j++;
	}
	return final;
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
console.log("Merge array:", mergeArrays(arr1, arr2));
