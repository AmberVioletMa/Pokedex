import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--color-background);
`;

export const TopBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: var(--color-primary);
    position: absolute;
    width: 100%;
    z-index: 2;
    &::before {
        content: "";
        position: absolute;
        bottom: -26px;
        z-index: 1;
        left: calc(30% - 20px);
        width: 106px;
        height: 50px;
        background-color: var(--color-primary);
        transform: rotate(149deg);
        z-index: 1;
    }
     &::after {
        z-index: 2;
        content: "";
        position: absolute;
        bottom: -51px;
        left: 0;
        width: 30%;
        height: 51px;
        background-color: var(--color-primary);
        z-index: 1;
    }
`;

export const TopBannerShadow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    top: 5px;
    background-color: var(--color-shadow);
    z-index: 1;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        bottom: -27px;
        left: calc(30% - 20px);
        width: 106px;
        height: 50px;
        top: 29px;
        background-color: var(--color-shadow);
        z-index: 0;
        transform: rotate(149deg);
    }
     &::after {
        content: "";
        position: absolute;
        bottom: -50px;
        left: 0;
        width: 30%;
        height: 50px;
        top: 52px;
        background-color: var(--color-shadow);
        z-index: 0;
    }
`;

export const TopBannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const keyframesBlink = keyframes`
    0%, 100% {
        filter: brightness(1);
    }
    50% {
        filter: brightness(1.4);
    }
`;

export const BlueCircle = styled.div`
    position: absolute;
    top: 10px;
    left: 40px;
    width: 70px;
    height: 70px;
    background-color: var(--color-button-primary);
    border-radius: 50%;
    z-index: 3;
    border: 4px solid var(--color-secondary-background);
    box-shadow: 0px 0px 10px 0px var(--color-shadow);
    animation: ${keyframesBlink} 2s infinite;
    &::before {
        content: "";
        position: absolute;
        top: 20px;
        left: 25px;
        transform: translate(-50%, -50%);
        width: 30%;
        height: 30%;
        background-color: #66c0f7;
        border-radius: 50%;
    }
`;

export const ThreeDots = styled.div`
    position: absolute;
    top: 25px;
    left: 190px;
    width: 16px;
    height: 16px;
    background-color: #FFC107;
    border-radius: 50%;
    z-index: 3;
    &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: -25px;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        background-color: #72060f;
        border-radius: 50%;
    }
    &::after {
        content: "";
        position: absolute;
        top: 8px;
        left: 43px;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #174110;
        border-radius: 50%;
    }
`;