import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./MediaQueries";

export const StyledGrid = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	padding: 0;
`;

export const StyledItem = styled.li`
	background-color: ${colors.divBackground};
	border-radius: 10px;
	flex: 1 1 200px;
	margin: 1rem;

	img {
		height: 20%;
		width: 15%;
		padding: 1rem;
	}
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	display: flex;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
