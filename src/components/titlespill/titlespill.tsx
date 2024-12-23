
import { titlespillInterface } from "./titlespill.model";
import { TitleButton, TitlesContainer } from "./titlespill.styled";

export const Titlespill = ({ titles, activeTitle, onTitleClick }: titlespillInterface) => {

    return (
        <TitlesContainer>
            {
                titles.map((title, index) => {
                    return (
                        <TitleButton $selected={title === activeTitle} onClick={() => onTitleClick(title)} key={index}>
                            {title}
                        </TitleButton>
                    );
                })
            }
        </TitlesContainer>
    );
};
