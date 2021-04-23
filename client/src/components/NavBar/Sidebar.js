import React, { useState } from "react";
import {
	NavLink,
	NavMenu,
	NavBtn,
	NavBtnLink,
	Bars,
	Icon,
	CloseIcon,
} from "../../styles/NavBarStyles";

const Sidebar = ({ loggedIn }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
		// console.log(isOpen);
	};

	return (
		<>
			<Icon isOpen={isOpen}>
				{isOpen ? <CloseIcon onClick={toggle} /> : <Bars onClick={toggle} />}
			</Icon>
			<NavMenu isOpen={isOpen}>
				<NavLink exact to='/new-recipe' onClick={toggle}>
					New Recipe
				</NavLink>
				<NavLink exact to='/grid' onClick={toggle}>
					Grid
				</NavLink>
				<NavLink to='/resources' onClick={toggle}>
					Resources
				</NavLink>
				{!loggedIn ? (
					<>
						<NavBtn>
							<NavBtnLink to='/login' onClick={toggle}>
								Login
							</NavBtnLink>
						</NavBtn>
						<NavBtn>
							<NavBtnLink to='/register' onClick={toggle}>
								Register
							</NavBtnLink>
						</NavBtn>
					</>
				) : (
					<NavBtn>
						<NavBtnLink to='/new-recipe' onClick={toggle}>
							Log Recipe
						</NavBtnLink>
					</NavBtn>
				)}
			</NavMenu>
		</>
	);
};

export default Sidebar;
