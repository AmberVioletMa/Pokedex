import styled from "styled-components";

export const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;

  & input:disabled {
    background-color: white;
  }
`;

export const DropdownOptions = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  border: 1px solid #d7d7d7;
  z-index: 4;
  border-radius: 6px;
  margin-top: 4px;
  text-transform: capitalize;
  max-height: 500px;
  overflow-y: auto;
  font-size: 14px;
  color: #6c757d;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  & input {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    border-right: 0px;
  }
`;

export const DropdownChevron = styled.div`
  height: 55px;
  padding: 0px 18px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid #cccccc;
  border-left: 0px;
  background-color: white;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  color: #000;
  & svg {
    color: #000;
    width: 16px;
    height: 16px;
  }
`;

interface DropdownOptionInterface {
  $activeProp?: boolean;
}

export const DropdownOption = styled.div<DropdownOptionInterface>`
  background-color: ${(props) => (props.$activeProp ? "#e9e9e9" : "#FFF")};
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e9e9e9;
  }
`;
