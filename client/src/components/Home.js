import React from "react";
import { PageContainer } from "../styles/PageStyles";
import {
	Hero,
	HeroImage,
	NavBtnLink,
	GridIcon,
	CardIcon,
	InfoSection,
	InfoSectionFlex,
	HeroContent,
	InfoSectionSteps,
} from "../styles/HomeStyles";

export default function Home() {
	return (
		<PageContainer>
			<Hero>
				<HeroImage />
				<HeroContent>
					<h1>Have Your Best Recipes At Hand</h1>
					<p>
						CoffeeLog is a digital notetaking tool for the home barista. Never
						lose a great recipe again.
					</p>
					<NavBtnLink to='/register'>Sign Up</NavBtnLink>
				</HeroContent>
			</Hero>
			<InfoSection>
				<h2>How Do I Use This App?</h2>
				<InfoSectionFlex>
					<InfoSectionSteps>
						<GridIcon />
						<h3>
							<span>1.</span> Add the recipe to your account
						</h3>
					</InfoSectionSteps>
					<InfoSectionSteps>
						<CardIcon />
						<h3>
							<span>2.</span> Retrive the recipe whenever you want
						</h3>
					</InfoSectionSteps>
					<InfoSectionSteps>
						<CardIcon />
						<h3>
							<span>3.</span> Hone your palette and become a better barista!
						</h3>
					</InfoSectionSteps>
				</InfoSectionFlex>
				<p>
					This gives you access to your favorite cups of coffee regardless of
					when you brewed the recipe.
				</p>
			</InfoSection>
		</PageContainer>
	);
}
