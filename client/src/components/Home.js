import React from "react";
import { PageContainer, PageWrapper } from "../styles/PageStyles";
import {
	Hero,
	GridIcon,
	CardIcon,
	InfoSection,
	HeroContent,
	InfoSectionSteps,
} from "../styles/HomeStyles";
import HeroImage from "../images/heroImageMobile.png";

export default function Home() {
	return (
		<PageContainer>
			<PageWrapper>
				<Hero>
					<img height='500px' width='400px' src={HeroImage} alt='hero iamge' />
					<HeroContent>
						<h1>Have Your Best Recipes At Hand</h1>
						<p>
							CoffeeLog is a digital notetaking tool for the home barista. Never
							lose a great recipe again.
						</p>
						<button>Sign Up</button>
					</HeroContent>
				</Hero>
				<InfoSection>
					<h2>How Do I Use This App?</h2>
					<InfoSectionSteps>
						<GridIcon />
						<h3>
							<span>1.</span>Add the recipe to your account
						</h3>
					</InfoSectionSteps>
					<InfoSectionSteps>
						<CardIcon />
						<h3>
							<span>2.</span>Retrive the recipe whenever you want
						</h3>
					</InfoSectionSteps>
					<p>
						This gives you access to your favorite cups of coffee regardless of
						when you brewed the recipe.
					</p>
				</InfoSection>
			</PageWrapper>
		</PageContainer>
	);
}
