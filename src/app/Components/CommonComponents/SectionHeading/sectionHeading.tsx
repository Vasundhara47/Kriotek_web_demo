"use client";
import { HeadingProps } from "./types";
import { HeadingContainer, Title, TitleContainer, Subtitle, Description, ZigzagLine } from "./style";


export default function SectionHeading({ title, subtitle, paragraph, align = "center" }: HeadingProps) {
    return (
        <HeadingContainer align={align}>
            <TitleContainer align={align}>
                {/* {align === "center" && <hr />} */}
                <hr className="left" />
                <Title>{title}</Title>
                <hr />
            </TitleContainer>
            <Subtitle>
                {subtitle}
            </Subtitle>
            <ZigzagLine />
            <Description>{paragraph}</Description>

        </HeadingContainer>
    );
}
