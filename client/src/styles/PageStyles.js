import styled from "styled-components";
import { colors } from "./MediaQueries";

export const PageContainer = styled.main`
	background: ${colors.backgroundLight};
	margin: 0 auto;
	color: ${colors.highlight};
	background: ${colors.textLight};
	/* max-height: 100%; */
	min-height: 90vh;
	width: 100%;
	max-width: 1200px;
`;

export const PageWrapper = styled.div`
	margin: 0 auto;
	min-height: 90vh;
	height: 100%;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
`;
