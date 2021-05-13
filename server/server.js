const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();

const corsOptions = {
	origin: ["https://coffeebrewlog.netlify.app", "http://localhost:5000"],
	optionsSuccessStatus: 200,
};

//routes
const recipes = require("./routes/api/recipes.route");
const authRoute = require("./routes/auth.routes");
app.get("/", (req, res) => {
	res.send("Hello from Express!");
});

//Connect to Mongo
mongoose
	.connect(process.env.DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

// middleware
app.use(cors(corsOptions));
app.options("*", cors());
app.use(express.json());

//Use routes
app.use("/api/recipes/", recipes);
app.use("/api/user/", authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
