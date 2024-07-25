// Activity 01
//  - Task 01
import { sum } from "./modules/task01.js";
console.log(sum(2, 3));

// //  - Task 02
import { person } from "./modules/task02.js";
person.getPerson();

// Activity 02
//  - Task 03
import { sub, prod } from "./modules/task03.js";
console.log(sub(10, 5));
console.log(prod(10, 5));

// //  - Task 04
import div from "./modules/task04.js";
console.log(div(10, 5));

// Activity 03
//  - Task 05
import { greeting, languages, course } from "./modules/task05.js";
greeting();
console.log(languages);
course.display();

// Activity 04
//  - Task 06
import { chunk } from "lodash-es";
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let chunked_nums = chunk(nums, 2);
console.log(chunked_nums);

//  - Task 07
import axios from "axios";
let username = "rayan-rt";
(async () => {
	console.log("Fetching...");
	try {
		let { data } = await axios.get(
			`https://api.github.com/users/${username}`,
		);
		console.log(data);
	} catch (err) {
		console.log("Error!", err);
	}
})();

// Activity 05
//  - Task 08 (✔)
