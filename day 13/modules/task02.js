export const person = {
	name: "John",
	email: "john@example.com",
	getPerson() {
		console.log(`Name: ${this.name} - Email: ${this.email}`);
	},
};
