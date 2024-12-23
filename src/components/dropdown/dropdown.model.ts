export interface DropdownInterface {
  disabled?: boolean;
  displayValue: string;
  handleFormChange?: (props: any, value: any) => void;
  isTypeahead?: boolean;
  name?: string;
  onChange?: (value: any, option: any) => void;
  onChangeValue?: (value: any) => void;
  onFocusOut?: (value: any) => void;
  options: Array<any>;
  removeAfterAdd?: boolean;
  title?: string;
  value?: string;
  placeholder?: string;
};
