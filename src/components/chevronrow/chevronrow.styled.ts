import styled from "styled-components";

export const ChevronContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ChevronRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
    gap: 10px;
    width: calc(100% - 20px);
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
`;

export const ChevronTitle = styled.div`
    font-weight: 500;
`;

export const ChevronIcon = styled.div`
    display: flex;
    align-items: center;
    & svg {
        width: 20px;
        height: 20px;
    }
`;

export const ChevronContent = styled.div`
    padding: 14px;
    font-size: 14px;
`;
