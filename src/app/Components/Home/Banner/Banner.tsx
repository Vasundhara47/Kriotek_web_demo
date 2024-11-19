"use client";
import { BannerContainer, ContentContainer, Title, Subtitle, ActionButton } from "./style";

export default function Banner() {
  return (
    <BannerContainer id="home">
      <ContentContainer>
        <Title>
          Creating <span className="highlight">Special <br />things</span>  for Whole world
        </Title>
        <Subtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy text ever since the 1500s.
        </Subtitle>
        <ActionButton>Explore more <span>↘</span></ActionButton>
      </ContentContainer>
    </BannerContainer>
  );
}