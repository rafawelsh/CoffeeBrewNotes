const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

//routes
const recipes = require("./routes/api/recipes_route");
const authRoute = require("./routes/auth.routes");
dotenv.config();

//Connect to Mongo
mongoose
	.connect(process.env.DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

// middleware
app.use(express.json());

//Use routes
app.use("/api/recipes/", recipes);
app.use("/api/user", authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
