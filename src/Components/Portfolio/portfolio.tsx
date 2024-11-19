import Button from "../CommonComponents/Buttons/Button";
import SectionHeading from "../CommonComponents/SectionHeading/sectionHeading";
import Text from "../CommonComponents/Text";
import { BottomConatiner, Card, CardContainer, PortfolioContainer, TopContainer } from "./style";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Portfolio() {

    // Reference and toggle for animation
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    // Animation variants
    const cardVariants = {
        hidden: { y: -30, x: -20, opacity: 0, scale: 0.8 },
        visible: { y: 0, x: 0, opacity: 1, scale: 1 }
    }
    return (
        <PortfolioContainer id="portfolio">
            <SectionHeading
                title="portfolio"
                subtitle="our recently completed projects"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa ipsam corporis cum maxime magnam iste sunt aliquam id laborum?"
            />
            <CardContainer >
                <Card
                    ref={sectionRef}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        duration: 0.5,
                        delay: 0.2
                    }}
                >
                    <TopContainer>
                        <Button title="Made by Kriotek" secondary={true} />
                    </TopContainer>
                    <BottomConatiner>
                        <Button title="Branding" secondary={true} />
                        <Text color="secondary" variant="heading3" fontWeight="600">Website</Text>
                    </BottomConatiner>
                </Card>
                <Card
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        duration: 0.5,
                        delay: 1
                    }}
                >
                    <TopContainer>
                        <Button title="Made by Kriotek" secondary={true} />
                    </TopContainer>
                    <BottomConatiner>
                        <Button title="Illustration" secondary={true} />
                        <Text color="secondary" variant="heading3" fontWeight="600">Website</Text>
                    </BottomConatiner>
                </Card>
                <Card
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        duration: 0.5,
                        delay: 1.5
                    }}
                >
                    <TopContainer>
                        <Button title="Made by Kriotek" secondary={true} />
                    </TopContainer>
                    <BottomConatiner>
                        <Button title="Motion" secondary={true} />
                        <Text color="secondary" variant="heading3" fontWeight="600">Website</Text>
                    </BottomConatiner>
                </Card>
                <Card
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        duration: 0.5,
                        delay: 2
                    }}
                >
                    <TopContainer>
                        <Button title="Made by Kriotek" secondary={true} />
                    </TopContainer>
                    <BottomConatiner>
                        <Button title="Motion" secondary={true} />
                        <Text color="secondary" variant="heading3" fontWeight="600">Website</Text>
                    </BottomConatiner>
                </Card>
            </CardContainer>
            <hr />
            <Button title="Explore More" />
        </PortfolioContainer>
    )
}