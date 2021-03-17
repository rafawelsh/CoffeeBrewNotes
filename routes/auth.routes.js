const router = require("express").Router();
const User = require("../models/User.model");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
	//validate data before registration
	//error is a destructed prop of Joi (validation.js)
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error);

	//checking if user is already in db
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("Email already exists");

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//create new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});
	try {
		const savedUser = await user.save();
		res.send({ user: user._id, name: user.name });
	} catch (err) {
		res.status(400).send(err);
	}
});

router.post("/login", async (req, res) => {
	// validate data before login
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error);

	// checking is email && password exists
	const user = await User.findOne({ email: req.body.email });
	if (!user)
		return res.status(400).send("There is no account connected to that email ");
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send("Incorrect Password");

	//create and assign TOKEN
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res
		.header("auth-token", token)
		.send({ auth: true, token: token, user: user });
});

module.exports = router;
