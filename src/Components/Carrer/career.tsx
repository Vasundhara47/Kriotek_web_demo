import CareerImg from "../../../public/Images/career.jpg"
import SectionContainer from "../CommonComponents/SectionContainer/SectionContainer"

export default function Career() {

    return (
        <div id="career">
            <SectionContainer
                image={CareerImg}
                title="career"
                subtitle="Several Thigs Define Us As a Company"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore maxime voluptatem neque in impedit porro beatae omnis repudiandae doloremque quo nesciunt aspernatur explicabo nam officia saepe eveniet consectetur animi, similique, atque laboriosam! Repellat dolorem ullam exercitationem officiis molestias est velit?. beatae omnis repudiandae doloremque quo nesciunt aspernatur explicabo."
                align="left"
            />
        </div>
    )
}