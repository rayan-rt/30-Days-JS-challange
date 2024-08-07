console.clear();

// Activity 01
//  - Task 01
function findMedianSortedArrays(nums1, nums2) {
	const mergedArray = [...nums1, ...nums2];
	mergedArray.sort((a, b) => a - b);

	const length = mergedArray.length;
	const mid = Math.floor(length / 2);

	if (mergedArray.length % 2 === 0) {
		return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
	} else {
		return mergedArray[mid];
	}
}

const nums1 = [1, 2],
	nums2 = [3, 4, 5];
console.log(findMedianSortedArrays(nums1, nums2));

// Activity 02
//  - Task 02
class ListNode {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

const mergeKLists = (lists) => {
	const dummy = new ListNode(0);
	let current = dummy;

	while (true) {
		let minIndex = -1;
		let minValue = Infinity;

		// Find the list with the smallest current node
		for (let i = 0; i < lists.length; i++) {
			if (lists[i] !== null && lists[i].val < minValue) {
				minValue = lists[i].val;
				minIndex = i;
			}
		}

		// If all lists are exhausted, break the loop
		if (minIndex === -1) {
			break;
		}

		// Append the smallest node to the result list
		current.next = lists[minIndex];
		current = current.next;

		// Move to the next node in the selected list
		lists[minIndex] = lists[minIndex].next;
	}

	return dummy.next;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const mergedList = mergeKLists([list1, list2, list3]);

// Print the merged list
let current = mergedList;
while (current !== null) {
	console.log(current.val);
	current = current.next;
}

// Activity 03
//  - Task 03
let trap = function (height) {
	let len = height.length;
	if (len === 0) return 0; // edge case for empty height array

	let left = new Array(len).fill(0);
	let right = new Array(len).fill(0);

	left[0] = height[0];
	for (let i = 1; i < len; i++) {
		left[i] = Math.max(left[i - 1], height[i]);
	}

	right[len - 1] = height[len - 1];
	for (let i = len - 2; i >= 0; i--) {
		right[i] = Math.max(right[i + 1], height[i]);
	}

	let result = 0;
	for (let i = 0; i < len; i++) {
		result += Math.min(left[i], right[i]) - height[i];
	}

	return result;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));

// Activity 04
//  - Task 04
const solveNQueens = (n) => {
	const board = Array.from({ length: n }, () => Array(n).fill("."));
	const solutions = [];

	const isValid = (row, col) => {
		for (let i = 0; i < row; i++) {
			if (board[i][col] === "Q") return false;
		}
		for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (board[i][j] === "Q") return false;
		}
		for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
			if (board[i][j] === "Q") return false;
		}
		return true;
	};

	const placeQueens = (row) => {
		if (row === n) {
			solutions.push(board.map((row) => row.join("")));
			return;
		}
		for (let col = 0; col < n; col++) {
			if (isValid(row, col)) {
				board[row][col] = "Q";
				placeQueens(row + 1);
				board[row][col] = ".";
			}
		}
	};

	placeQueens(0);
	return solutions;
};

const n = 4;
const solutions = solveNQueens(n);
console.log(`Solutions for ${n}-Queens problem:`);
solutions.forEach((solution, index) => {
	console.log(`Solution ${index + 1}:`);
	console.log(solution.join("\n"), "\n");
});

// Activity 05
//  - Task 05
const ladderLength = (beginWord, endWord, wordList) => {
	const wordSet = new Set(wordList);
	if (!wordSet.has(endWord)) return 0;

	let queue = [[beginWord, 1]];

	while (queue.length > 0) {
		let [currentWord, level] = queue.shift();

		if (currentWord === endWord) return level;

		for (let i = 0; i < currentWord.length; i++) {
			for (let charCode = 97; charCode < 123; charCode++) {
				// 'a' to 'z'
				const nextWord =
					currentWord.slice(0, i) +
					String.fromCharCode(charCode) +
					currentWord.slice(i + 1);

				if (wordSet.has(nextWord)) {
					queue.push([nextWord, level + 1]);
					wordSet.delete(nextWord);
				}
			}
		}
	}

	return 0;
};

// Example usage:
const beginWord = "hot";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(
	`Length of shortest transformation sequence: ${ladderLength(
		beginWord,
		endWord,
		wordList,
	)}`,
);
