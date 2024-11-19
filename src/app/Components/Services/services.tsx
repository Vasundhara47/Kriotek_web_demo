import { useRef } from "react";
import { useInView } from "framer-motion";
import Icon from "../CommonComponents/Icon";
import SectionHeading from "../CommonComponents/SectionHeading/sectionHeading";
import { Card, CardContainer, Description, ServicesSection, Title } from "./styles";

export default function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
        hover: { scale: 1.03, transition: { duration: 0.3 } }
    };

    return (
        <ServicesSection id="ourservices" >
            <SectionHeading
                title="services"
                subtitle="Most experienced services"
                paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti esse ex?adipisicing elit. Inventore deleniti esse ex?"
            />
            <CardContainer
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Animate only when in view
            >
                <Card variants={cardVariants} whileHover="hover" ref={sectionRef}>
                    <Icon icon="mobile" className="icon" />
                    <Title>Mobile App Development</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos dolorem perferendis quas quaerat soluta ipsum</Description>
                </Card>
                <Card variants={cardVariants} whileHover="hover">
                    <Icon icon="document-file-ai" className="icon" />
                    <Title>AI Development</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos dolorem perferendis quas quaerat soluta ipsum </Description>
                </Card>
                <Card variants={cardVariants} whileHover="hover">
                    <Icon icon="document-file-html" className="icon" />
                    <Title>Website Development</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos dolorem perferendis quas quaerat soluta ipsum </Description>
                </Card>
            </CardContainer>
        </ServicesSection>
    );
}