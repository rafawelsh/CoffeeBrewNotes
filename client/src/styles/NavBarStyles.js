import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { colors, device } from "./MediaQueries";

export const Nav = styled.nav`
	background: ${colors.backgroundLight};
	min-height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0rem calc((100vw - 1000px) / 2);
	z-index: 10;
`;

export const NavLink = styled(Link)`
	color: ${colors.highlight};
	/* display: flex;
	align-items: center; */
	text-decoration: none;
	font-size: 1.5rem;
	padding: 2rem 1rem;
	cursor: pointer;

	&.active {
		color: ${colors.highlight};
	}
`;

// styled for Sidebar.js
export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: ${colors.backgroundLight};
	position: fixed;
	top: 0;
	right: 0;
	height: 100vh;
	max-height: 100%;
	width: 100vw;
	/* margin: 2rem 0rem; */
	transform: ${({ isOpen }) =>
		isOpen ? "translateY(0%)" : "translateY(-100%)"};
	transition: transform 0.3s ease-in-out;

	@media ${device.tablet} {
		background: none;
		position: static;
		flex-flow: row nowrap;
		top: 0;
		height: 10vh;
		transform: translateY(0);
		transition: transform 0s;
	}
`;

export const NavBtn = styled.div`
	display: flex;
	align-items: center;
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #256ce1;
	padding: 0.5rem 1rem;
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

export const Bars = styled(FaBars)`
	color: ${colors.highlight};
`;

export const CloseIcon = styled(FaTimes)`
	color: ${colors.highlight};
`;

export const Icon = styled.div`
	position: ${({ isOpen }) => (isOpen ? "fixed" : "block")};
	padding: 1rem 2rem;
	top: 0rem;
	right: 0rem;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
	z-index: 20;
	@media ${device.tablet} {
		display: none;
	}
`;
