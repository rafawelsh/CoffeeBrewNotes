import styled from "styled-components";
import { colors, device } from "./MediaQueries";

export const StyledGridCard = styled.div`
	background: ${colors.divBackground};
	padding: 0.5rem 1rem 1rem;
	margin-bottom: 2rem;

	@media ${device.tablet} {
		width: 100%;
		max-width: 1000px;
		margin: 0;
	}
`;

export const RecipeSection = styled.div`
	h3 {
		margin-top: 0;
	}
`;

export const RecipeSections = styled.section`
	padding: 0rem 0rem 1rem;

	h2 {
		color: ${colors.textHeader};
	}

	@media ${device.tablet} {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: 2rem 1rem;
		font-size: 1.2rem;
		${RecipeSection}:not(:last-child) {
			margin-right: 2rem;
		}
	}
`;
