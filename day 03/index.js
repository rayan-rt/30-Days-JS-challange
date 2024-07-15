console.clear();
// Activity 02
//  - Task 01
let num_1 = 90;
if (num_1 > 0) {
	console.log("positive");
} else if (num_1 < 0) {
	console.log("negative");
} else {
	console.log("zero");
}

//  - Task 02
let age = 20;
if (age >= 18) console.log("eligible");

// Activity 02
//  - Task 03
let num_2 = 60,
	num_3 = 40,
	num_4 = 50;
if (num_2 > num_3) {
	if (num_2 > num_4) {
		console.log("num_2 is max ", num_2);
	} else {
		console.log("num_4 is max ", num_4);
	}
} else if (num_3 > num_4) {
	console.log("num_3 is max ", num_3);
} else {
	console.log("num_4 is max ", num_4);
}

// Activity 03
//  - Task 04
let day_num = 7;
switch (day_num) {
	case 1:
		console.log("Mon");
		break;
	case 2:
		console.log("Tue");
		break;
	case 3:
		console.log("Wed");
		break;
	case 4:
		console.log("Thu");
		break;
	case 5:
		console.log("Fri");
		break;
	case 6:
		console.log("Sat");
		break;
	case 7:
		console.log("Sun");
		break;

	default:
		return;
}

//  - Task 05
let score = 96;
switch (true) {
	case score >= 90 && score <= 100:
		console.log("A");
		break;
	case score >= 80 && score <= 90:
		console.log("B");
		break;
	case score >= 70 && score <= 80:
		console.log("C");
		break;
	case score >= 60 && score <= 70:
		console.log("D");
		break;
	case score < 60:
		console.log("F");
		break;

	default:
		return;
}

// Activity 04
//  - Task 06
let num_5 = 99;
console.log(num_5 % 2 === 0 ? "Even" : "Odd");

// Activity 05
//  - Task 07
let year = 2024;
console.log(
	(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
		? "Leap-Year"
		: "Year",
);
