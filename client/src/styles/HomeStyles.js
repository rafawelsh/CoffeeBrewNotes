import styled, { css } from "styled-components";
import { colors } from "./MediaQueries";
import { BsFillGrid3X3GapFill, BsCardText } from "react-icons/bs";
import HeroImage from "../images/heroImageMobile2.png";
import { Link } from "react-router-dom";

export const Hero = styled.div`
	background-image: url(${HeroImage});
	background-size: cover;
	width: 100%;
	min-height: 90vh;
	position: relative;
`;

export const HeroContent = styled.div`
	height: fit-content;
	padding: 0.5rem;
	position: absolute;
	bottom: 3rem;
	right: 0.5rem;
	left: 0.5rem;
	width: 90%;
	margin: 0 auto;
	color: ${colors.textHeader};
	background: ${colors.backgroundLight};

	h1 {
		margin: 0.5rem 0rem;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #256ce1;
	padding: 10px 22px;
	color: #fff;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;

export const InfoSection = styled.div`
	background: ${colors.backgroundLight};
	width: 100%;
	min-height: 90vh;
	text-align: center;
	margin: 0 auto;
`;

export const InfoSectionSteps = styled.section`
	width: 90%;
	min-height: 175px;
	margin: 2.5rem auto;
	background: ${colors.divBackground};
	border-radius: 0.75rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		padding: 0.25rem 0.5rem;
	}
`;

export const GridIcon = styled(BsFillGrid3X3GapFill)`
	height: 2.5rem;
	width: 2.5rem;
	color: ${colors.highlight};
`;

export const CardIcon = styled(BsCardText)`
	height: 2.5rem;
	width: 2.5rem;
	color: ${colors.highlight};
`;
