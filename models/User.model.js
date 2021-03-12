const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024,
	},
	data: {
		type: Date,
		defualt: Date.now,
	},
});

module.exports = mongoose.model("User", userSchema);
