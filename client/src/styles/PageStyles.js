import styled from "styled-components";
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

export const PageWrapper = styled.div`
	margin: 0 auto;
	min-height: 90vh;
	height: 100%;
	width: 90%;
	padding: 0 1rem;

	@media ${device.tablet} {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 78vh;
	}
`;
