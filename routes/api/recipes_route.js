const express = require("express");
const router = express.Router();

// Recipe Model
const Recipe = require("../../models/recipe_model");

/* 
@route GET api/items
@desc Get All Recipes
@access Public for now
*/
router.get("/", (req, res) => {
	Recipe.find()
		.sort({ date: -1 })
		.then((recipes) => res.json(recipes));
});

/* 
@route POST api/items
@desc Create new recipe
@access Public for now
*/
router.post("/", (req, res) => {
	const newRecipe = new Recipe({
		brewMethod: req.body.brewMethod,
		roaster: req.body.roaster,
		coffeeOrigin: req.body.coffeeOrigin,
		coffeeVarietal: req.body.coffeeVarietal,
		tastingNotes: req.body.tastingNotes,
		steps: req.body.steps,
	});

	newRecipe.save().then((recipe) => res.json(recipe));
});
module.exports = router;
