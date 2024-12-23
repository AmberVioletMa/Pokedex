
import { useState } from "react";
import { Icon } from "../icon";
import { IconsType } from "../icon/icon.model";
import { chevronrowInterface } from "./chevronrow.model";
import { ChevronContainer, ChevronRow, ChevronTitle, ChevronIcon, ChevronContent } from "./chevronrow.styled";

export const Chevronrow = ({ title, children }: chevronrowInterface) => {
    const [chevronOpen, setChevronOpen] = useState<boolean>(false);
    return (
        <ChevronContainer>
            <ChevronRow>
                <ChevronTitle>{title}</ChevronTitle>
                <ChevronIcon data-testid={chevronOpen ? "ChevronUpIcon" : "ChevronDownIcon"} onClick={() => setChevronOpen(!chevronOpen)}>
                    <Icon icon={chevronOpen ? "ChevronUpIcon" : "ChevronDownIcon"} type={"outline"} />
                </ChevronIcon>
            </ChevronRow>
            {chevronOpen && <ChevronContent>
                {children}
            </ChevronContent>}
        </ChevronContainer>
    );
};
