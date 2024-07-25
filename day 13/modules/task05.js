function greeting() {
	console.log("Welcome to Chai aur Code 30 days of JS");
}

const languages = ["js", "ts", "py"];

const course = {
	title: "30 Days of JS",
	platform: "Chai aur Code",
	instructor: "Hitesh",
	display() {
		console.log(
			`Title: ${this.title} - Platform: ${this.platform} - Instructor: ${this.instructor}`,
		);
	},
};

export { greeting, languages, course };
