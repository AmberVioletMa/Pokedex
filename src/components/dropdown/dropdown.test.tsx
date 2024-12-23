import { render, fireEvent, screen } from "@testing-library/react";
import { Dropdown } from "./dropdown";
import { jest } from "@jest/globals";

const mockData = {
  displayValue: "label",
  options: [
    { value: "Test", label: "Test" },
    { value: "Test2", label: "Test2" },
  ],
};

describe("Dropdown Component", () => {
  it("should render Dropdown Component correctly", () => {
    const { container } = render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it("should toggle dropdown options on click", () => {
    render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
      />
    );

    expect(screen.queryByText("Test")).not.toBeInTheDocument();
    expect(screen.queryByText("Test2")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("textbox"));

    expect(screen.getByText("Test")).toBeVisible();
    expect(screen.getByText("Test2")).toBeVisible();

    fireEvent.click(screen.getByRole("textbox"));

    expect(screen.queryByText("Test")).not.toBeInTheDocument();
    expect(screen.queryByText("Test2")).not.toBeInTheDocument();
  });

  it("should display the correct option when selected", () => {
    const { getByTestId } = render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
        isTypeahead={false}
      />
    );
    const dropdownInput = getByTestId("dropdownInput");

    fireEvent.click(dropdownInput);

    fireEvent.click(screen.getByText("Test"));

    expect(dropdownInput).toHaveValue("Test");
  });

  it("should update the input value when typing in typeahead mode", () => {
    render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
        isTypeahead={true}
      />
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Test" },
    });

    expect(screen.getByRole("textbox")).toHaveValue("Test");
  });

  it("should filter options based on typeahead input", () => {
    const { getByTestId } = render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
        isTypeahead={true}
      />
    );

    const dropdownInput = getByTestId("dropdownInput");

    fireEvent.click(screen.getByRole("textbox"));

    fireEvent.change(dropdownInput, { target: { value: "Test2" } });

    expect(screen.queryByText("Test")).toBeNull();
    expect(screen.getByText("Test2")).toBeVisible();
  });

  it("should not open dropdown when disabled", () => {
    render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
        disabled={true}
      />
    );

    fireEvent.click(screen.getByRole("textbox"));

    expect(screen.queryByText("Test")).not.toBeInTheDocument();
    expect(screen.queryByText("Test2")).not.toBeInTheDocument();
  });

  it("should call onFocusOut when input loses focus", () => {
    const onFocusOut = jest.fn();
    render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
        onFocusOut={onFocusOut}
      />
    );

    fireEvent.click(screen.getByRole("textbox"));

    fireEvent.blur(screen.getByRole("textbox"));

    expect(onFocusOut).toHaveBeenCalled();
  });

  it("should call onChangeValue when input value changes", () => {
    const onChangeValue = jest.fn();
    render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
        onChangeValue={onChangeValue}
      />
    );

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Test" },
    });

    expect(onChangeValue).toHaveBeenCalled();
  });

  it("should call onChange when an option is selected", () => {
    const onChange = jest.fn();
    render(
      <Dropdown
        displayValue={mockData.displayValue}
        options={mockData.options}
        onChange={onChange}
      />
    );

    fireEvent.click(screen.getByRole("textbox"));

    fireEvent.click(screen.getByText("Test"));

    expect(onChange).toHaveBeenCalled();
  });
});
