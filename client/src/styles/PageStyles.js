import styled, { css } from "styled-components";
import { colors, device } from "./MediaQueries";

export const PageContainer = styled.main`
	background: ${colors.backgroundLight};
	color: ${colors.highlight};
	min-height: 90vh;

	@media ${device.tablet} {
		width: 95vw;
		margin: 0 auto;
	}
`;

// used for RecipeGrid, RecipegridCard
export const SharedRecipeStyles = css`
	margin: 0 auto;
	min-height: 90vh;
	height: 100%;
	width: 90%;
	padding: 0 1rem;
`;

export const RecipeGridCardWrapper = styled.main`
	${SharedRecipeStyles}

	@media ${device.tablet} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 78vh;
	}
`;

export const RecipeGridWrapper = styled.main`
	${SharedRecipeStyles}

	@media ${device.tablet} {
		min-height: 78vh;
		width: 100%;
		max-width: 80vw;
	}
`;
