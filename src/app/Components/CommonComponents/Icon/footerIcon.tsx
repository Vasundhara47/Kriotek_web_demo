
import iconSet from "./selection.json";
import { FooterIcon, FooterIconContainer } from "./style";
import { IconProps } from "react-icomoon";

export default function Icon(props: IconProps) {

    return (

        <FooterIconContainer>
            <FooterIcon iconSet={iconSet} size={20} {...props} />
        </FooterIconContainer>
    )

};

