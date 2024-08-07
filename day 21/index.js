console.clear();

// Activity 01
//  - Task 01
function twoSum(nums, target) {
	const numMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		if (numMap.has(complement)) {
			return [numMap.get(complement), i];
		}
		numMap.set(nums[i], i);
	}
	return null;
}

const testCases = [
	{ nums: [2, 7, 11, 15], target: 9 },
	{ nums: [3, 3], target: 6 },
	{ nums: [1, 2, 3, 4, 5], target: 10 },
];

testCases.forEach(({ nums, target }, index) => {
	const result = twoSum(nums, target);
	console.log(`Test Case ${index + 1}:`, result);
});

// Activity 02
//  - Task 02
function reverseInteger(x) {
	const isNegative = x < 0;
	let reversedNumber = parseInt(
		Math.abs(x).toString().split("").reverse().join(""),
		10,
	);

	if (reversedNumber > 2 ** 31 - 1) {
		return 0;
	}

	return isNegative ? -reversedNumber : reversedNumber;
}

const testCases2 = [123, 0, 1534236469, -2147483412];

testCases2.forEach((num, index) => {
	const result = reverseInteger(num);
	console.log(`Test Case ${index + 1}: ${num} reversed is ${result}`);
});

// Activity 03
//  - Task 03
function isPalindrome(x) {
	if (x < 0 || (x % 10 === 0 && x !== 0)) {
		return false;
	}

	let reversed = 0;
	let original = x;

	while (x > 0) {
		reversed = reversed * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	return original === reversed;
}

const testCases3 = [-121, 10, 0, 12321];
testCases3.forEach((num) => {
	console.log(`Number: ${num}, Is Palindrome: ${isPalindrome(num)}`);
});

// Activity 04
//  - Task 04
class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}
function mergeTwoLists(list1, list2) {
	const dummy = new ListNode();
	let current = dummy;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next;
	}

	current.next = list1 || list2;

	return dummy.next;
}

function createLinkedList(arr) {
	const dummy = new ListNode();
	let current = dummy;
	for (const val of arr) {
		current.next = new ListNode(val);
		current = current.next;
	}
	return dummy.next;
}

function printLinkedList(list) {
	const result = [];
	while (list) {
		result.push(list.val);
		list = list.next;
	}
	console.log(result.join(" -> "));
}

const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(list1, list2);

console.log("Merged List:");
printLinkedList(mergedList);

// Activity 05
//  - Task 05
function isValid(s) {
	const stack = [];
	const matchingBrackets = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (const char of s) {
		if (char in matchingBrackets) {
			if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
				return false;
			}
		} else {
			stack.push(char);
		}
	}

	return stack.length === 0;
}

const testCases5 = [
	{ input: "()", expected: true },
	{ input: "()[]{}", expected: true },
	{ input: "(]", expected: false },
	{ input: "([)]", expected: false },
	{ input: "{[]}", expected: true },
];

testCases5.forEach(({ input, expected }) => {
	const result = isValid(input);
	console.log(
		`Input: "${input}", Is Valid: ${result}, Expected: ${expected}`,
	);
});
