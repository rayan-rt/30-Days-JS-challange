console.clear();

// Activity 01
//  - Task 01
const regex = /JavaScript/g;
let test_string = "JavaScript is top two language";
const matches = test_string.match(regex);
console.log(matches);

//  - Task 02
const regex_2 = /\d/g;
let test_string_2 =
	"123 is a number and 456 is also a number but they are different";
const matches_2 = test_string_2.match(regex_2);
console.log(matches_2);

// Activity 02
//  - Task 03
let regex_3 = /[A-Z]/g;
const test_string_3 = "Welcome to Chai aur Code";
let matches_3 = test_string_3.match(regex_3);
console.log(matches_3);

//  - Task 04
const regex_4 = /\d/g;
let test_string_4 = "123 is a number, 456 is a number 789 is too";
const matches_4 = test_string_4.match(regex_4);
console.log(matches_4);

// Activity 03
//  - Task 05
const regex_5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let USnumber = "(123) 456-7890";
let matches_5 = USnumber.match(regex_5);
console.log(matches_5);

//  - Task 06
const regex_6 = /(\w+)@(\w+)/;
let test_string_6 = "rayan123@gmail.com";
let matches_6 = test_string_6.match(regex_6);
console.log(matches_6);

// Activity 04
//  - Task 07
let regex_7 = new RegExp(`^chai\\b`);
let str_1 = "chai aur code";
let str_2 = "code aur chai";
let m_7_1 = str_2.match(regex_7);
let matches_7 = str_1.match(regex_7);
console.log(matches_7);
console.log(m_7_1);

//  - Task 08
let regex_8 = new RegExp(`\\b(chai)$`);
let m_8_1 = str_2.match(regex_8);
let matches_8 = str_1.match(regex_8);
console.log(matches_8);
console.log(m_8_1);

// Activity 05
//  - Task 09
let regex_9 =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
let password = "chAi$123";
let is_valid = password.match(regex_9);
console.log(is_valid ? "Password is valid" : "Password is invalid");

//  - Task 10
let regex_10 = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\.[a-z]{2,})?$/;
const URL = "https://ww.google.com";
const is_valid2 = URL.match(regex_10);
console.log(is_valid2 ? "URL is valid" : "URL is invalid");
