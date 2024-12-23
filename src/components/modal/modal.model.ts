export interface ModalInterface {
  children: any;
  dontShowCloseButton?: boolean;
  handleClose: () => void;
  modalFitContent?: boolean;
  show: boolean;
  title: string;
};
