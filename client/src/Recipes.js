import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Recipes() {
	const [recipeEntries, setRecipeEntries] = useState([]);

	useEffect(() => {
		getRecipeEntries();
	}, []);

	const getRecipeEntries = () => {
		axios
			.get("/api/recipes/")
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h1>Welcome to the app!</h1>
		</div>
	);
}
