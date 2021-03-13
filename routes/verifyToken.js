const jwt = require("jsonwebtoken");

//middleware function
module.exports = function (req, res, next) {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Access Denied. No Token.");
	console.log("something with token" + token);

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		//this is the user and their info
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send("Invalid Token");
	}
};
