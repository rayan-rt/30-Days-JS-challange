console.clear();

// Activity 01
//  - Task 01
let promise_1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Promise has been resolved after 2 seconds");
	}, 2000);
});
promise_1.then((data) => console.log(data));

//  - Task 02
let promise_2 = new Promise((_, reject) => {
	setTimeout(() => {
		reject("Promise has been rejected after 2 seconds");
	}, 2000);
});
promise_2.catch((err) => console.log("Error occured! ", err));

// Activity 02
//  - Task 03
let promise_chain = new Promise((resolve) => {
	setTimeout(() => {
		const product = {
			title: "Laptop",
			description: "Lenovo Thinkpad T470P",
			ispurchased: true,
			price: 100,
		};
		resolve(product);
	}, 2000);
});
promise_chain
	.then((response) => {
		console.log("Item is booked, Please Review!");
		console.log(
			`Product: ${response.title}, Description: ${response.description}, Current Status: ${response.ispurchased}`,
		);
		console.log("Generating Price...");

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(response.price);
			}, 2000);
		});
	})
	.then((price) => console.log(`Total Price: $${price}`));

// Activity 03
//  - Task 04
async function task4() {
	await new Promise((resolve) => {
		setTimeout(() => {
			console.log("Task 4 Completed");
		}, 2000);
	});
}
task4().then((response) => console.log(response));

//  - Task 05
let promise_3 = new Promise((_, reject) => {
	setTimeout(() => {
		reject("Promise has been rejected!");
	}, 2000);
});
async function task5() {
	try {
		let promise = await promise_3;
		console.log(promise);
	} catch (error) {
		console.log("Error:", error);
	}
}
task5();

// Activity 04
//  - Task 06
// https://api.github.com/users/{username}
let username = "rayan-rt";
console.log("Fetching...");
new Promise((resolve, reject) => {
	fetch(`https://api.github.com/users/${username}`)
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log("Error:", err));
});

//  - Task 07
async function task7() {
	try {
		console.log("Fetching...");
		let response = await fetch(`https://api.github.com/users/${username}`);
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.log("Error:", err);
	}
}
task7();

// Activity 05
//  - Task 08
let promise_4 = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Promise 4 resolved");
	}, 2000);
});
let promise_5 = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Promise 5 resolved");
	}, 2000);
});
let promise_6 = new Promise((resolve) => {
	setTimeout(() => {
		resolve("Promise 6 resolved");
	}, 2000);
});

Promise.all([promise_4, promise_5, promise_6]).then((responses) => {
	let [promise_4, promise_5, promise_6] = responses;
	console.log(`${promise_4}, ${promise_5}, ${promise_6}`);
});

//  - Task 09
Promise.race([promise_4, promise_5, promise_6]).then((response) =>
	console.log(response),
);
