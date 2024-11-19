import { StyledButton } from "./style";
import { buttonPropsType } from "./types";

export default function Button({ title, secondary, type, width }: buttonPropsType) {
    return (
        <StyledButton
            whileHover={{ scale: 1.1 }}
            transition={{
                duration: 0.3
            }}

            secondary={secondary}
            type={type}
            width={width}
        >
            {title}</StyledButton>
    );
}
