console.clear();

// Activity 01
//  - Task 01
let result_1 = "";
for (let i = 1; i <= 10; i++) {
	result_1 += i + " ";
}
// console.log(result_1.trim());

//  -Task 02
let result_2 = "";
let table_num = 5;
for (let i = 1; i <= 10; i++) {
	result_2 += table_num * i + " ";
}
// console.log(result_2.trim());

// Activity 02
//  - Task 03
let i_1 = 1;
let sum = 0;
while (i_1 <= 10) {
	sum += i_1;
	i_1++;
}
// console.log(sum);

//  - Task 04
let i_2 = 10;
let result_3 = "";
while (i_2 >= 1) {
	result_3 += i_2 + " ";
	i_2--;
}
// console.log(result_3);

// Activity 03
//  - Task 05
let i_3 = 1;
let result_4 = "";
do {
	result_4 += i_3 + " ";
	i_3++;
} while (i_3 <= 5);
// console.log(result_4);

//  - Task 06
let factorial = 5;
let result_5 = 1;
do {
	result_5 *= factorial;
	factorial--;
} while (factorial > 0);
// console.log(result_5);

// Activity 04
//  - Task 07
for (let i = 1; i <= 5; i++) {
	let pattern = "";
	for (let j = 1; j < i; j++) {
		pattern += "*";
	}
	console.log(pattern);
}

// Activity 05
//  - Task 08
let result_6 = "";
for (let i = 1; i <= 10; i++) {
	if (i === 5) continue;
	else result_6 += i + " ";
}
// console.log(result_6.trim());

//  - Task 09
let result_7 = "";
for (let i = 1; i <= 10; i++) {
	if (i === 7) break;
	else result_7 += i + " ";
}
// console.log(result_7.trim());
