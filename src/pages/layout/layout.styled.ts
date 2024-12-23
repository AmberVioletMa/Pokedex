import styled from "styled-components";

export const LayoutContainer = styled.div`
    height: calc(100vh - var(--padding-header));
    background-color: var(--color-primary-background);
`;

export const BottomBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    position: fixed;
    height: 65px;
    width: 100%;
    box-shadow: 0px -5px 5px 0px var(--color-shadow);
`;

export const OutletContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 15px - var(--padding-header));
    width: 100%;
    flex-direction: column;
    overflow: auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: var(--padding-gap-md);
    align-items: center;
    gap: var(--padding-gap-xs);
    height: 100%;
`;