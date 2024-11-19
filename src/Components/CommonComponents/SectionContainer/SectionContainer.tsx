import { PropsTypes } from "./types"
import { Container, LeftContainer, RightContainer } from "./style"
import SectionHeading from "../SectionHeading"
import Button from "../Buttons/Button"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function SectionContainer({ title, subtitle, image, description, align }: PropsTypes) {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const leftContainerVariants = {
        hidden: { x: -30, opacity: 0, scale: 0.8 },
        visible: { x: 0, opacity: 1, scale: 1 }
    }

    const rightContainerVariants = {
        hidden: { x: 30, opacity: 0, scale: 0.8 },
        visible: { x: 0, opacity: 1, scale: 1 }
    }


    return (
        <Container >
            <LeftContainer
                ref={sectionRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={leftContainerVariants}
                transition={{
                    delay: 0.2,
                    duration: 1
                }}
            >
                <Image src={image} alt="about us" height={400} className="img" />
            </LeftContainer>
            <RightContainer
                variants={rightContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}

                transition={{
                    delay: 0.6,
                    duration: 1

                }}
            >
                <SectionHeading title={title} subtitle={subtitle} paragraph={description} align={align} />
                <Button title="Explore More" />
            </RightContainer>
        </Container>
    )

}