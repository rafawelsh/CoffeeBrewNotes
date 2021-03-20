import React from "react";
import { PageContainer, PageWrapper } from "../styles/PageStyles";
import { Hero, InfoSection } from "../styles/HomeStyles";

export default function Home() {
	return (
		<PageContainer>
			<PageWrapper>
				<Hero>This is the hero</Hero>
				<InfoSection>This is info</InfoSection>
			</PageWrapper>
		</PageContainer>
	);
}
