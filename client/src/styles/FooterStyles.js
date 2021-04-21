import styled from "styled-components";
import { colors } from "./MediaQueries";

export const FooterSection = styled.footer`
	min-height: 10vh;
	text-align: center;
	background: ${colors.textHeader};
	color: ${colors.textColor};
	padding: 0.5rem 0rem 1rem;
	p {
		padding: 0rem 1rem;
		word-wrap: break-word;
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: ${colors.textColor};

	&:hover {
		color: ${colors.secondaryText};
	}
`;
