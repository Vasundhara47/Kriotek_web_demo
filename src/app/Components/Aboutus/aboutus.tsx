import AboutImg from "../../../../public/Images/about.jpg"
import SectionContainer from "../CommonComponents/SectionContainer/SectionContainer"

export default function Aboutus() {

    return (
        <div id="aboutus">
            <SectionContainer
                image={AboutImg}
                title="About us"
                subtitle="Creative & Modern agency"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore maxime voluptatem neque in impedit porro beatae omnis repudiandae doloremque quo nesciunt aspernatur explicabo nam officia saepe eveniet consectetur animi, similique, atque laboriosam! Repellat dolorem ullam exercitationem officiis molestias est velit?. beatae omnis repudiandae doloremque quo nesciunt aspernatur explicabo."
                align="left"
            />
        </div>
    )
}