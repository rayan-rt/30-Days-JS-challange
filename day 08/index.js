console.clear();

// Activity 01
//  - Task 01
let person_name = "Jon";
let person_age = 18;
console.log(`Name: ${person_name} and age: ${person_age}`);

//  - Task 02
let multiline_str = `Hi ${person_name}! Welcome to the 30 days JavaScript challange organized by Chai aur Code, here you paractice JavaScript eveyday and learning new concepts through tasks.`;
console.log(multiline_str);

// Activity 02
//  - Task 03
let nums = [10, 20, 30, 40];
let [n1, n2] = nums;
console.log(n1, n2);

//  - Task 04
let book = {
	title: "Eloquent JavaScript",
	author: "Marijn Haverbeke",
	year: 2018,

	getDetail() {
		return `Title: ${this.title}, Author: ${this.author}`;
	},

	updateYear(year) {
		this.year = year;
	},
};

let { title, author } = book;
console.log(title, "-", author);

// Activity 03
//  - Task 05
let rest = [...nums];
rest.push(50, 60);
console.log(rest);

//  - Task 06
function sum(...nums) {
	return nums.reduce((sum, num) => sum + num, 0);
}
// console.log(sum(2));
console.log(sum(2, 3, 4));

// Activity 04
//  - Task 07
function product(num1, num2 = 1) {
	return num1 * num2;
}
console.log(product(12, 3));
console.log(product(2));

// Activity 05
//  - Task 08
let username = "Jon";
let userage = 18;
function getUser() {
	return `Name: ${this.username} - Age: ${this.userage}`;
}
let user = {
	username,
	userage,
	getUser,
};
console.log(user);

//  - Task 09
let prop_1 = "title";
let prop_2 = "duration";
let prop_3 = "due_date";
function prop_4() {}
let course = {
	[prop_1]: "30 Days of JS",
	[prop_2]: 30,
	[prop_3]: "14-07-2024",
	[prop_4]() {
		return `${this[prop_1]} has ${this[prop_2]} days duration and the last date of enrollment is ${this[prop_3]}`;
	},
};
// console.log(course[prop_4]());
console.log(course);
