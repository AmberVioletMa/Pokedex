import styled from "styled-components";

export const TitlesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
`;

interface TitleButtonProps {
    $selected: boolean;
}

export const TitleButton = styled.button<TitleButtonProps>`
    outline: none;
    color: #fff;
    padding: var(--padding-gap-sm);
    cursor: pointer;
    background-color: ${(props) => (props.$selected ? "var(--color-button-primary-hover)" : "var(--color-button-primary)")};
    border: none;
    &:last-child {
        border-bottom-right-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }
    &:first-child {
        border-bottom-left-radius: var(--border-radius);
        border-top-left-radius: var(--border-radius);
    }
    &:hover {
        background-color: var(--color-button-primary-hover);
    }
`;
