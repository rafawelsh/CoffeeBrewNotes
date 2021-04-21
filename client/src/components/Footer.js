import React from "react";
import { FooterSection, Link } from "../styles/FooterStyles";

export default function Footer() {
	return (
		<FooterSection>
			<p>
				Designed and Developed by <br />
				Rafael Castellanos-Welsh
			</p>
			<Link href='https://github.com/rafawelsh' target='_blank'>
				See The Code
			</Link>
		</FooterSection>
	);
}
