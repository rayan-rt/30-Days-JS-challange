console.clear();

// Activity 01
// -Task 01
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
console.log(book);

// -Task 02
console.log(`Title: ${book.title}, Author: ${book["author"]}`);

// Activity 02
// -Task 03
console.log(book.getDetail());

// -Task 04
book.updateYear(2024);
console.log(book);

// Activity 03
// -Task 05
let library = {
	name: "Coding Library",
	books: [
		{
			title: "Eloquent JavaScript",
			author: "Marijn Haverbeke",
			year: 2018,

			getDetail() {
				return `Title: ${this.title}, Author: ${this.author}`;
			},

			updateYear(year) {
				this.year = year;
			},
		},
		{
			title: "Python Crash Course",
			author: "Eric Matthes",
			year: 2023,

			getDetail() {
				return `Title: ${this.title}, Author: ${this.author}`;
			},

			updateYear(year) {
				this.year = year;
			},
		},
		{
			title: "SQL Pocket Guide",
			author: "Alice Zhao",
			year: 2021,

			getDetail() {
				return `Title: ${this.title}, Author: ${this.author}`;
			},

			updateYear(year) {
				this.year = year;
			},
		},
	],
};
console.log(library);

// -Task 06
console.log("Library: ", library["name"]);
library.books.forEach((book) => console.log(book.title));

// Activity 04
// -Task 07 -> I did it in -Task 03

// Activity 05
// -Task 08
for (const key in book) {
	console.log(`${key}: ${book[key]}`);
}

// -Task 09
console.log("Keys: ", Object.keys(book));
console.log("Values: ", Object.values(book));
