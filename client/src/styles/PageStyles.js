import styled from "styled-components";
import { colors, device } from "./MediaQueries";

export const PageContainer = styled.main`
	background: ${colors.backgroundLight};
	color: ${colors.highlight};
	min-height: 90vh;

	@media ${device.mobileL} {
		width: 95vw;
		margin: 0 auto;
	}
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
