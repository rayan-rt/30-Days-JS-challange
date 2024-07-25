import path from "path";

export default {
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve("dist"),
	},
	mode: "development",
};
