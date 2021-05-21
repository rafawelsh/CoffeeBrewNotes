import React from "react";
import Sidebar from "./Sidebar";
import { Nav, NavLink } from "../../styles/NavBarStyles";

const NavBar = () => {
	return (
		<Nav>
			<NavLink exact to='/' className='logo'>
				CoffeeBrewNotes
			</NavLink>

			<Sidebar />
		</Nav>
	);
};

export default NavBar;
