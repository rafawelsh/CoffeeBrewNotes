import styled from "styled-components";
import { colors } from "./MediaQueries";

export const FooterSection = styled.footer`
	min-height: 7vh;
	text-align: center;
	background: ${colors.textHeader};
	color: #fff;
	padding: 0.5rem 0rem 1rem;
`;

export const Section = styled.section`
	padding: 0rem 1rem;
	word-wrap: break-word;
`;

export const Link = styled.a`
	text-decoration: none;
	color: ${colors.textColor};

	&:hover {
		color: ${colors.secondaryText};
	}
`;
