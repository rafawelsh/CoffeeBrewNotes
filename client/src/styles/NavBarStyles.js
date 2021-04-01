import { NavLink as Link } from "react-router-dom";
import { FaBars, FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { device, colors } from "./MediaQueries";

export const Nav = styled.nav`
	background: ${colors.backgroundLight};
	min-height: 10vh;
	display: flex;
	justify-content: space-between;
	padding: 0rem calc((100vw - 1000px) / 2);
	z-index: 10;
`;

export const NavLink = styled(Link)`
	color: ${colors.highlight};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		color: ${colors.highlight};
	}
`;

// //import icons for this?
export const Bars = styled(FaBars)`
	display: none;
	color: ${colors.highlight};

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
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
