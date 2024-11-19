
import iconSet from "./selection.json";
import { SmallIcon } from "./style";
import { Iconprops } from "./types";

export default function Icon(props: Iconprops) {

    return (
        <SmallIcon iconSet={iconSet} size={15} {...props} />
    )

};

