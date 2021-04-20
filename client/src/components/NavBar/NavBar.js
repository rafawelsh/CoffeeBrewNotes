import React from "react";
import Sidebar from "./Sidebar";
import { Nav, NavLink } from "../../styles/NavBarStyles";

const NavBar = ({ loggedIn }) => {
	return (
		<Nav>
			<NavLink exact to='/' className='logo'>
				CoffeeBrewNotes
			</NavLink>

			<Sidebar loggedIn={loggedIn} />
		</Nav>
	);
};

export default NavBar;
