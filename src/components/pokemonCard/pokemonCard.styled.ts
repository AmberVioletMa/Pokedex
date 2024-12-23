import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--padding-gap-sm);
    background-color: var(--color-secondary-background);
    border-radius: var(--border-radius-s);
    height: 250px;
    width: 180px;
    cursor: pointer;
    position: absolute;
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 0 16px 0px rgb(239 4 4 / 100%);
        height: 260px;
        width: 190px;
        transform: translate(-5px, -5px);
    }
`;

export const CardContainerOut = styled.div`
    padding: var(--padding-gap-sm);
    height: 250px;
    width: 180px;
    margin: var(--margin-gap-sm);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface ImageProps {
    $src: string;
    $isLoading: boolean;
}

export const ImageDiv = styled.div<ImageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.$src});
    width: 170px;
    height: 190px;
    background-size: contain;
    border-radius: var(--border-radius);
    border-bottom-left-radius: 20px;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid var(--color-primary);
    background-color: ${props => props.$isLoading ? 'var(--color-primary-background)' : 'transparent'};
`;

export const CardTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
    background-color: var(--color-primary);
    width: fit-content;
    color: var(--color-secondary-background);
    text-align: center;
    padding: var(--padding-gap-sm);
    margin: var(--margin-gap-sm);
    border-radius: var(--border-radius-s);
    border: 2px solid black;
`;