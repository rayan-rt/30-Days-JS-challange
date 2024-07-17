console.clear();

// Activity 01
//  - Task 01
function isEvenOdd(num) {
	return num % 2 === 0;
}
console.log(isEvenOdd(22) ? "Even" : "Odd");

//  - Task 02
function square(num) {
	return num ** 2;
}
console.log(square(5));

// Activity 02
//  - Task 03
function max(num1, num2) {
	return num1 > num2 ? num1 : num2;
}
console.log(max(12, 13));

//  - Task 04
function concatenate(str1, str2) {
	return str1 + str2;
}
console.log(concatenate("Rayan ", "Tanzeem"));

// Activity 03
//  - Task 05
const sum = (num1, num2) => {
	return num1 + num2;
};
console.log(sum(12, 13));

//  - Task 06
const func = (str, char) => {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) return true;
	}
	return false;
};
console.log(func("Rayan", "a") ? "yes I have" : "No I don't have");

// Activity 04
//  - Task 07
function product(num1, num2 = 1) {
	return num1 * num2;
}
console.log(product(2));

//  - Task 08
function greeting(name, age = 20) {
	return `Welcome ${name}, the age of ${age} is the age of building your empire.`;
}
console.log(greeting("Rayan", 21));

// Activity 05
//  - Task 09
function temp1() {
	return "calling temp1 function";
}
function print(func, count) {
	for (let i = 0; i < count; i++) {
		console.log(func());
	}
}
print(temp1, 2);

//  - Task 10
function temp2(num) {
	return num + 1;
}
function temp3(num) {
	return num + 2;
}
function highFunc(lowerFunc1, lowerFunc2, value) {
	return lowerFunc2(lowerFunc1(value));
}
console.log(highFunc(temp2, temp3, 5));
