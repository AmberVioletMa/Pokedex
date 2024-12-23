import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import {
  DropdownWrapper,
  DropdownContainer,
  DropdownChevron,
  DropdownOptions,
  DropdownOption,
} from "./dropdown.styled";
import { Input } from "../../common.styled";
import { DropdownInterface } from "./dropdown.model";
import {Icon} from "@/components"

export const Dropdown = forwardRef(
  (
    {
      options,
      onChange,
      onChangeValue,
      onFocusOut,
      isTypeahead = false,
      value,
      displayValue,
      disabled = false,
      removeAfterAdd = false,
      title,
      placeholder,
    }: DropdownInterface,
    Ref: any,
  ) => {
    const [dropdownState, setDropdownState] = useState(false);
    const [currentValue, setCurrentValue] = useState(value || "");
    const [typeaheadValue, setTypeaheadValue] = useState(value || "");

    useImperativeHandle(Ref, () => ({
      setDropdownState,
    }));

    useEffect(() => {
      value !== currentValue && setCurrentValue(value || "");
      value !== currentValue && setTypeaheadValue(value || "");
    }, [value]);

    useEffect(() => {
      onChangeValue && onChangeValue(typeaheadValue);
    }, [typeaheadValue, onChangeValue]);

    const setCurrentValueFunction = (e: any, value: any, option: any) => {
      e.stopPropagation();
      if (!disabled) {
        setCurrentValue(!removeAfterAdd ? value : "");
        setTypeaheadValue(!removeAfterAdd ? value : "");
        setDropdownState(false);
        onChange && onChange(value, option);
        onFocusOut && onFocusOut(value);
      }
    };

    return (
      <DropdownWrapper>
        <DropdownContainer
          onClick={() => !disabled && setDropdownState(!dropdownState)}
        >
          <DropdownChevron id="Dropdown-chevron">
            {dropdownState ? (
              <Icon icon="ChevronUpIcon" type="outline" />
            ) : (
              <Icon icon="ChevronDownIcon" type="outline" />
            )}
          </DropdownChevron>
          <Input
            data-testid="dropdownInput"
            placeholder={placeholder ? placeholder : title ? title : disabled ? "" : "Select"}
            value={title ? title : isTypeahead ? typeaheadValue : currentValue}
            disabled={!isTypeahead || disabled}
            onChange={(e) => setTypeaheadValue(e.target.value)}
            onBlur={(e) => {
              setTimeout(() => {
                setDropdownState(false);
              }, 200);
              onFocusOut && onFocusOut(e.target.value);
            }}
          />
        </DropdownContainer>
        {dropdownState && (
          <DropdownOptions>
            {options.map(
              (option: any, index: any) =>
                (!isTypeahead ||
                  (isTypeahead &&
                    option[`${displayValue}`]
                      .toLowerCase()
                      .includes(
                        typeaheadValue ? typeaheadValue.toLowerCase() : "",
                      ))) && (
                  <DropdownOption
                    $activeProp={!!(currentValue === option[`${displayValue}`])}
                    key={option[`${displayValue}`] + "option" + index}
                    onClick={(e) =>
                      setCurrentValueFunction(
                        e,
                        option[`${displayValue}`],
                        option,
                      )
                    }
                  >
                    {option[`${displayValue}`]}
                  </DropdownOption>
                ),
            )}
            {options.length === 0 && (
              <DropdownOption>No options available</DropdownOption>
            )}
          </DropdownOptions>
        )}
      </DropdownWrapper>
    );
  },
);
Dropdown.displayName = "Dropdown";
export default Dropdown;
