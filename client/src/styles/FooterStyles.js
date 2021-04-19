import styled from "styled-components";
import { colors } from "./MediaQueries";

export const FooterSection = styled.footer`
	text-align: center;
	background: ${colors.highlight};
	color: ${colors.textColor};
	min-height: 100%;

	p {
		margin: 0 auto;
	}
`;
