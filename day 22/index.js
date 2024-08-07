console.clear();

// Activity 01
//  - Task 01
class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = null;
	}
}

var addTwoNumbers = function (l1, l2) {
	let dummy = new ListNode();
	let res = dummy;
	let total = 0,
		carry = 0;

	while (l1 || l2 || carry) {
		total = carry;

		if (l1) {
			total += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			total += l2.val;
			l2 = l2.next;
		}

		let num = total % 10;
		carry = Math.floor(total / 10);
		dummy.next = new ListNode(num);
		dummy = dummy.next;
	}

	return res.next;
};
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(8);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

function display(li) {
	temp = li;
	while (li != null) {
		console.log(li.val);
		li = li.next;
	}
}

add = addTwoNumbers(l1, l2);

console.log("Result:1 is:");
display(add);

// Activity 02
//  - Task 02
var lengthOfLongestSubstring = function (s) {
	let maxLength = 0;
	let start = 0;
	let storeString = new Set();

	for (let end = 0; end < s.length; end++) {
		while (storeString.has(s[end])) {
			storeString.delete(s[start]);
			start++;
		}
		storeString.add(s[end]);
		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
};

console.log("Test Case 1:");
console.log("Input: abcabcbb");
console.log("Output: " + lengthOfLongestSubstring("abcabcbb"));

console.log("Test Case 2: ");
console.log("Input: bbbbb");
console.log("Output: " + lengthOfLongestSubstring("bbbbbb"));

// Activity 03
//  - Task 03
var maxArea = function (height) {
	let maxWater = 0; // area
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		let currentHeight = Math.min(height[left], height[right]);
		let currentWidth = right - left;

		let currentArea = currentHeight * currentWidth;

		maxWater = Math.max(maxWater, currentArea);

		// move the pointers
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return maxWater;
};

console.log("Test Case: 1");
console.log("Input: [1,8,6,2,5]");
console.log("Output: " + maxArea([1, 8, 6, 2, 5]));

console.log("Test Case: 2");
console.log("Input: [1,1]");
console.log("Output: " + maxArea([1, 1]));

// Activity 04
//  - Task 04
var threeSum = function (nums) {
	let res = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		let j = i + 1;
		let k = nums.length - 1;

		while (j < k) {
			let total = nums[i] + nums[j] + nums[k];

			if (total > 0) {
				k--;
			} else if (total < 0) {
				j++;
			} else {
				res.push([nums[i], nums[j], nums[k]]);
				j++;

				while (nums[j] === nums[j - 1] && j < k) {
					j++;
				}
			}
		}
	}
	return res;
};

console.log("Test Case: 1");
console.log("Input: [-1,0,1,2]");
console.log("Output: " + JSON.stringify(threeSum([-1, 0, 1, 2])));

console.log("Test Case: 2");
console.log("Input: [0,1,1]");
console.log("Output: " + JSON.stringify(threeSum([0, 1, 1])));

// Activity 05
//  - Task 05
var getSignature = function (s) {
	const count = Array(26).fill(0);
	for (const c of s) {
		count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
	}

	const result = [];
	for (let i = 0; i < 26; i++) {
		if (count[i] !== 0) {
			result.push(
				String.fromCharCode(i + "a".charCodeAt(0)),
				count[i].toString(),
			);
		}
	}

	return result.join("");
};

var groupAnagrams = function (strs) {
	const result = [];
	const groups = new Map();

	for (const s of strs) {
		const signature = getSignature(s);
		if (!groups.has(signature)) {
			groups.set(signature, []);
		}
		groups.get(signature).push(s);
	}

	groups.forEach((value) => result.push(value));

	return result;
};

console.log("Test Case: 1");
console.log('Input: ["eat", "tea", "tan", "ate", "nat"]');
console.log("Output: " + JSON.stringify(groupAnagrams(["eat", "tea", "tan"])));
