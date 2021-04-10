import styled from "styled-components";
import { colors } from "./MediaQueries";

export const StyledGridCard = styled.div`
	display: grid;
	background: ${colors.divBackground};
	padding: 1rem;
`;

export const RecipeSection = styled.section`
	margin-bottom: 0.5rem;
	h3 {
		margin-top: 0;
	}
`;
