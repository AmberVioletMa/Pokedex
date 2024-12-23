import { forwardRef, useImperativeHandle } from "react";
import {
  ModalStyle,
  ModalMain,
  ModalButtonCloseDiv,
  ModalTitle,
  ModalButtonClose,
  ModalContainer,
} from "./modal.styled";
import { ModalInterface } from "./modal.model";
import { Icon } from "@/components";

export const Modal = (
    {
      title,
      handleClose,
      show,
      modalFitContent,
      dontShowCloseButton,
      children,
    }: ModalInterface
  ) => {

    return (
      <ModalStyle style={{ display: show ? "block" : "none" }}>
        <ModalMain style={{ height: modalFitContent ? "fit-content" : "80%" }}>
          <ModalButtonCloseDiv>
            <ModalTitle>{title}</ModalTitle>
            {!dontShowCloseButton && (
              <ModalButtonClose onClick={() => handleClose && handleClose()}>
                <Icon icon="XMarkIcon" type="solid" />
              </ModalButtonClose>
            )}
          </ModalButtonCloseDiv>
          <ModalContainer
            style={{
              height: modalFitContent ? "fit-content" : "calc(100% - 115px)",
            }}
          >
            {children}
          </ModalContainer>
        </ModalMain>
      </ModalStyle>
    );
  }
  
Modal.displayName = "Modal";
export default Modal;
