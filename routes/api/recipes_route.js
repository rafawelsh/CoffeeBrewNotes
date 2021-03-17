const router = require("express").Router();
const verify = require("../verifyToken");

// Recipe Model
const Recipe = require("../../models/Recipe.model");

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
@route GET api/items/:id
@desc Get All Recipes from specific user
@access Private
*/
router.get("/:_id", verify, (req, res) => {
	const { _id } = req.user;
	Recipe.find({ userid: _id })
		.then((recipes) => res.json(recipes))
		.catch((err) => res.status(204).json({ success: false }));
});

router.get("/whoami", verify, (req, res) => {
	res.send(req.user);
});

/*
@route POST api/items
@desc Create new recipe
@access Public for now
*/
router.post("/", verify, (req, res) => {
	//find out who the token is coming from
	const { _id } = req.user;
	console.log(`This is the user ${_id}`);

	const newRecipe = new Recipe({
		brewMethod: req.body.brewMethod,
		roaster: req.body.roaster,
		coffeeName: req.body.coffeeName,
		coffeeVariety: req.body.coffeeVariety,
		process: req.body.process,
		tastingNotes: req.body.tastingNotes,
		waterAmount: req.body.waterAmount,
		coffeeAmount: req.body.coffeeAmount,
		steps: req.body.steps,
		userid: _id,
	});

	newRecipe.save().then((recipe) => res.json(recipe));
});

/* 
@route PUT api/items
@desc Edit Single Recipe
@access Public for now
*/
router.put("/:id", (req, res) => {
	console.log(req.body);
	const id = req.params.id;
	const updates = req.body;
	Recipe.findByIdAndUpdate(id, updates)
		.then((recipe) => res.status(202).json(recipe))
		.catch((err) => res.status(204).json({ success: false }));
});

/* 
@route DELETE api/recipes/:id
@desc Delete a Recipe
@access Public [to do with authentication / authorization]
*/
router.delete("/:id", (req, res) => {
	console.log(req.body);
	Recipe.findById(req.params.id)
		.then((recipe) => recipe.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(204).json({ success: false }));
});

/* 
@route GET Individual Recipe api/recipes/:id
@desc Get All Recipes
@access Public for now
*/
router.get("/:id", (req, res) => {
	Recipe.findById(req.params.id).then((recipe) => res.json(recipe));
});

module.exports = router;
