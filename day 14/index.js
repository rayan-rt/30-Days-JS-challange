console.clear();

// Activity 01
//  - Task 01
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(
			`Hey ${this.name}! congratulations on your ${this.age}th birthday`,
		);
	}

	setAge(age) {
		this.age = age;
		console.log(`Now age is updated to ${this.age}`);
	}

	static genericGreeting() {
		console.log(`This is a generic greeting to ${this.name}`);
	}
}

const person1 = new Person("John", 20);
person1.greeting();

// //  - Task 02
person1.setAge(21);
person1.greeting();

// Activity 02
//  - Task 03
class Student extends Person {
	static student_count = 0;
	constructor(name, age, stuID) {
		super(name, age);
		this.stuID = stuID;
		Student.student_count++;
	}

	getStuID() {
		return this.stuID;
	}

	greeting() {
		console.log(
			`Welcome to Chai aur Code, Your student ID is ${this.stuID}`,
		);
	}
}

const student1 = new Student("John", 18, 101);

console.log("Student ID:", student1.getStuID());

//  - Task 04
student1.greeting();
person1.greeting();

// Activity 03
//  - Task 05
Person.genericGreeting();

//  - Task 06
console.log(Student.student_count);

// Activity 04
//  - Task 07
class Person2 {
	constructor(fname, lname) {
		this.fname = fname;
		this.lname = lname;
	}

	set fullName(full_name) {
		let [fname, lname] = full_name.split(" ");
		this.fname = fname;
		this.lname = lname;
	}

	get fullName() {
		let full_name = this.fname + " " + this.lname;
		return full_name;
	}
}

const person2 = new Person2("John", "Doe");
console.log(person2.fullName);

//  - Task 08
person2.fullName = "Jane Doe";
console.log(person2.fullName);

// Activity 05
//  - Task 09
class Account {
	#balance;
	constructor(initial_balance) {
		this.#balance = initial_balance;
	}

	deposit(amount) {
		if (amount < 0) return console.log("Invalid");
		else this.#balance += amount;
	}

	withdraw(amount) {
		if (amount > this.#balance) console.log("Insufficient");
		else this.#balance -= amount;
	}

	getBalance() {
		return this.#balance;
	}
}

//  - Task 10
const account = new Account(1000);
console.log("$" + account.getBalance());
account.deposit(200);
console.log("$" + account.getBalance());
account.withdraw(600);
console.log("$" + account.getBalance());
