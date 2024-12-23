import styled from "styled-components";

interface ImageProps {
    $src: string | null;
}

export const ImageDiv = styled.div<ImageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.$src});
    width: 510px;
    height: 460px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 768px) {
        height: 300px;
    }
`;

export const ImageDivSmall = styled.div<ImageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.$src});
    width: 170px;
    height: 190px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const DivRight = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    height: 500px;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
        overflow-y: auto;
    }
`;

export const DivLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
    }
`;

export const ArrowsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    & svg {
        height: 30px;
        width: 30px;
    }
`;

export const ArrowLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ArrowRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const RightInnerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow-y: auto;
    margin-top: 20px;
`;

export const StadsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    gap: 10px;
`;

export const StadsTitle = styled.div`
    font-size: 12px;
    width: 50px;
`;

export const StadsNumber = styled.div`
    font-size: 12px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OtherFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const OtherFormTitle = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

export const OtherFormsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
`;

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 800px;
    height: 600px;
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