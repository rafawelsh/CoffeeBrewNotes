const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const RecipeSchema = new Schema({
	created: {
		type: Date,
		default: Date.now,
	},
	brewMethod: {
		type: String,
		required: true,
	},
	roaster: {
		type: String,
		required: true,
	},
	coffeeName: {
		type: String,
	},
	region: {
		type: String,
	},
	process: {
		type: String,
	},
	grindSize: {
		type: String,
	},
	waterAmount: {
		type: String,
		required: true,
	},
	coffeeAmount: {
		type: String,
		required: true,
	},
	steps: {
		type: Array,
		required: true,
	},
	tastingNotes: {
		type: String,
	},
	userid: {
		type: String,
	},
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
