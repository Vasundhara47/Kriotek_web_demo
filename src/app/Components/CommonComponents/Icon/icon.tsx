
import iconSet from "./selection.json";
import { IconContainer, StyledIcon } from "./style";
import { Iconprops } from "./types";

export default function Icon(props: Iconprops) {

    return (
        <IconContainer >
            <StyledIcon iconSet={iconSet} {...props} size={60} />
        </IconContainer>
    )

};

