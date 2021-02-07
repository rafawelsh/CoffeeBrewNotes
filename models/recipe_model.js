const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const RecipeSchema = new Schema({
	date: {
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
	coffeeOrigin: {
		type: String,
		required: true,
	},
	coffeeVarietal: {
		type: String,
		required: true,
	},
	tastingNotes: {
		type: String,
		required: true,
	},
	steps: {
		type: Array,
	},
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
