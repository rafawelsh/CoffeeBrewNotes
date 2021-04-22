import styled from "styled-components";
import { colors, device } from "./MediaQueries";

export const StyledGridCard = styled.div`
	background: ${colors.divBackground};
	padding: 1rem;
	margin-bottom: 2rem;

	@media ${device.tablet} {
		width: 100%;
		max-width: 1000px;
		margin: 0;
	}
`;

export const RecipeSections = styled.section`
	padding: 1rem 0rem;

	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		margin: 2rem;
	}
`;

export const RecipeSection = styled.div`
	margin: 0rem 1rem;
	h3 {
		margin-top: 0;
	}
`;
