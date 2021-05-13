const Joi = require("@hapi/joi");

//register Validation
const registerValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(6).required(),
		email: Joi.string().required().email(),
		password: Joi.string().min(6).required(),
	});

	//validation of data before new entry is made
	return schema.validate(data);
};

//login Validation
const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().required().email(),
		password: Joi.string().min(6).required(),
	});

	//validation of login data
	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
