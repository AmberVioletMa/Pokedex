import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    max-width: 800px;
    max-height: 600px;
    &::after {
        padding-top: 74%;
        display: block;
        content: '';
    }
`;

interface LoadingImageProps {
    $src: string;
}
export const LoadingImageDiv = styled.div<LoadingImageProps>`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.$src});
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 600px;
    background-size: cover;
`;

export const PokemonCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--padding-gap-xs);
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
`;

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin-bottom: var(--padding-gap-xs);
    margin: 36px 0;
    margin-top: 100px;
`;