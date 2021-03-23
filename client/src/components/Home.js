import React from "react";
import { PageContainer, PageWrapper } from "../styles/PageStyles";
import {
	Hero,
	InfoSection,
	HeroContent,
	HeroImage,
	InfoSectionSteps,
} from "../styles/HomeStyles";

export default function Home() {
	return (
		<PageContainer>
			<PageWrapper>
				<Hero>
					{/* <HeroImage /> */}
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
						<h3>
							<span>1.</span>Add the recipe to your account
						</h3>
						{/* img */}
					</InfoSectionSteps>
					<InfoSectionSteps>
						<h3>
							<span>2.</span>Retrive the recipe whenever you want
						</h3>
						{/* img */}
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
