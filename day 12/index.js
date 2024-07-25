console.clear();

// Activity 01
//  - Task 01
function intentional_error(num) {
	try {
		if (num <= 0) throw new Error("Invalid number");
		else console.log("Valid number");
	} catch (err) {
		console.log("Error!", err);
	}
}
intentional_error(-1);

//  - Task 02
function divide(numerator, denominator) {
	try {
		if (denominator === 0)
			throw new Error("dividing by zero is a MATH ERROR");
		else console.log(numerator / denominator);
	} catch (err) {
		console.log("Error!", err);
	}
}
divide(4, 0);

// Activity 02
//  - Task 03
function task3(num) {
	try {
		if (num === 0) throw new Error("Zero is not allowed");
		if (num > 0) console.log(num, "is a valid number");
	} catch (err) {
		console.log("Error!", err);
	} finally {
		if (num < 0) console.log(num, "is a negative number");
		console.log("Executed");
	}
}
task3(2);

// Activity 03
//  - Task 04
class CustomError extends Error {
	constructor(message) {
		super(message);
		this.message = "Custom Error Triggered";
	}
}
function task4() {
	throw new CustomError("Something went wrong");
}
try {
	task4();
} catch (err) {
	console.log("Error!", err);
}

//  Task 05
function task5(input) {
	try {
		if (!input || input.trim().length === 0)
			throw new CustomError("Empty input");
		console.log("Input:", input);
	} catch (err) {
		console.log("Error!", err);
	}
}
// let userinput = " ";
let userinput = "";
// let userinput = "Chai aur Code";
task5(userinput);

// Activity 04
//  - Task 06
const promise_1 = new Promise((resolve, reject) => {
	let num = Math.floor(Math.random() * 5);
	if (num === 0) reject("Zero is not allowed");
	else resolve(num);
});

promise_1
	.then((response) => console.log(response))
	.catch((err) => console.log("Error!", err));

//  - Task 07
async function task7() {
	try {
		let response = await promise_1;
		console.log(response);
	} catch (err) {
		console.log("Erro!", err);
	}
}
task7();

// Activity 05
//  - Task 08
const API = "https://api.twatter.com";
console.log("Fetching...");
new Promise((resolve, reject) => {
	fetch(API)
		.then((response) => {
			return response.json();
		})
		.then((data) => console.log(data))
		.catch((err) => console.log("Error!", err));
});

//  - Task 09
async function task9(api) {
	try {
		let response = await fetch(api);
		let data = await response.json();
		console.log(data);
	} catch (err) {
		console.log("Error!", err);
	}
}
task9(API);
