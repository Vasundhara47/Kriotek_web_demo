import { StyledButton } from "./style";
import { buttonPropsType } from "./types"

export default function Button({ title }: buttonPropsType) {
    return (
        <StyledButton >{title}</StyledButton>
    );
}
