import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/jwtContext";
import {
	NavLink,
	NavMenu,
	NavBtn,
	NavBtnLink,
	Bars,
	Icon,
	CloseIcon,
} from "../../styles/NavBarStyles";

const Sidebar = () => {
	const [authState] = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Icon isOpen={isOpen}>
				{!isOpen ? <Bars onClick={toggle} /> : <CloseIcon onClick={toggle} />}
			</Icon>
			<NavMenu isOpen={isOpen}>
				{/* <NavLink exact to='/new-recipe' onClick={() => setIsOpen(false)}>
					New Recipe
				</NavLink> */}
				<NavLink exact to='/grid' onClick={() => setIsOpen(false)}>
					Grid
				</NavLink>
				{/* <NavLink to='/resources' onClick={toggle}>
					Resources
				</NavLink> */}
				{!authState ? (
					<>
						<NavBtn>
							<NavBtnLink to='/login' onClick={() => setIsOpen(false)}>
								Login
							</NavBtnLink>
						</NavBtn>
						<NavBtn>
							<NavBtnLink to='/register' onClick={() => setIsOpen(false)}>
								Register
							</NavBtnLink>
						</NavBtn>
					</>
				) : (
					<NavBtn>
						<NavBtnLink to='/new-recipe' onClick={() => setIsOpen(false)}>
							Log Recipe
						</NavBtnLink>
					</NavBtn>
				)}
			</NavMenu>
		</>
	);
};

export default Sidebar;
