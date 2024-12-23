import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const ModalMain = styled.div`
  position: fixed;
  background: white;
  max-width: 80%;
  width: auto !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
`;

export const ModalButtonCloseDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px;
  height: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalButtonClose = styled.button`
  background-color: transparent;
  margin: 0px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  & svg {
    height: 24px;
    width: 24px;
  }
`;

export const ModalTitle = styled.h3`
  margin: 0px;
  color: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
`;

export const ModalContainer = styled.div`
  width: auto !important;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid white;
  background-color: white;
  padding: 32px;
  padding-top: 0px;
  border-radius: 16px;
  margin: 0px 20px;
`;
