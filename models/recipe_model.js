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
	},
	coffeeVariety: {
		type: String,
	},
	process: {
		type: String,
	},
	steps: {
		type: Array,
		required: true,
	},
	tastingNotes: {
		type: String,
	},
});

module.exports = Recipe = mongoose.model("recipe", RecipeSchema);
