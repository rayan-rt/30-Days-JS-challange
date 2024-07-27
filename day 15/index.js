console.clear();

// Activity 01
//  - Task 01
function outerFunc() {
	let num = 10;
	return function innerFunc(n) {
		return num + n;
	};
}
let func = outerFunc();
console.log(func(2));

//  - Task 02
function counterFunc() {
	let counter = 0;

	return {
		increment: function () {
			++counter;
		},
		getCounter: function () {
			return counter;
		},
	};
}
let func_obj = counterFunc();
func_obj.increment();
console.log(func_obj.getCounter());

// Activity 02
//  - Task 03
function generateIDs() {
	let ID = Math.floor(Date.now() / 1000);
	return function increment() {
		return ++ID;
	};
}
let incrementID = generateIDs();
console.log(incrementID());

//  - Task 04
function task04(name) {
	return function greeting() {
		console.log(`${name}, Welcome to Chai aur Code Day 15 of JS`);
	};
}
let greetFunc = task04("Rayan");
greetFunc();

// Activity 03
//  - Task 05
let functions = [];
for (let i = 0; i < 5; i++) {
	functions.push(
		(function (i) {
			return function () {
				console.log(i);
			};
		})(i),
	);
}
functions.forEach((outer) => {
	let inner = outer;
	inner();
});

// Activity 04
//  - Task 06
const itemManager = (function () {
	let items = [];

	function addItem(item) {
		items.push(item);
		console.log(`${item} added.`);
	}

	function removeItem(item) {
		const index = items.indexOf(item);
		if (index !== -1) {
			items.splice(index, 1);
			console.log(`${item} removed.`);
		} else {
			console.log(`${item} not found.`);
		}
	}

	function listItems() {
		if (items.length === 0) {
			console.log("No item in the collection.");
		} else {
			console.log("Items in the collection:");
			items.forEach((item) => console.log(item));
		}
	}

	return {
		addItem,
		removeItem,
		listItems,
	};
})();
itemManager.addItem("Notes");
itemManager.addItem("Pencil");
itemManager.addItem("Eraser");
itemManager.listItems();
itemManager.removeItem("Pencil");
itemManager.listItems();

// Activity 05
//  - Task 07
function memoize(func) {
	const cache = {};
	return (x) => {
		if (x in cache) {
			console.log(`Value of ${x} is already calculated`);
			return cache[x];
		} else {
			console.log(`Calculationg the value of ${x}`);
			const val = func(x);
			cache[x] = val;
			return val;
		}
	};
}
function square(n) {
	return n * n;
}
const memoizedSquare = memoize(square);
console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));

//  - Task 08
function memoize(func) {
	const cache = {};
	return function (...args) {
		const key = JSON.stringify(args);
		if (cache[key]) {
			console.log(`Fetching from cache for key: ${key}`);
			return cache[key];
		} else {
			console.log(`Calculating result for key: ${key}`);
			const result = func(...args);
			cache[key] = result;
			return result;
		}
	};
}
function fibonacci(n) {
	if (n < 2) {
		return n;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(7));
console.log(memoizedFibonacci(7));
