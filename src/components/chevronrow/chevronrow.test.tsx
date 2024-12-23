import { render, screen, fireEvent } from "@testing-library/react";
import { Chevronrow } from "./chevronrow";

describe("Chevronrow component", () => {
    test("renders title correctly", () => {
        render(<Chevronrow title="Test Title">Test Content</Chevronrow>);
        expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    test("toggles content visibility on icon click", () => {
        render(<Chevronrow title="Test Title">Test Content</Chevronrow>);
        const icon = screen.getByTestId("ChevronDownIcon");

        expect(screen.queryByText("Test Content")).not.toBeInTheDocument();

        fireEvent.click(icon);
        expect(screen.getByText("Test Content")).toBeInTheDocument();

        fireEvent.click(icon);
        expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
    });

    test("displays ChevronDownIcon initially", () => {
        render(<Chevronrow title="Test Title">Test Content</Chevronrow>);
        expect(screen.getByTestId("ChevronDownIcon")).toBeInTheDocument();
    });

    test("displays ChevronUpIcon when open", () => {
        render(<Chevronrow title="Test Title">Test Content</Chevronrow>);
        const icon = screen.getByTestId("ChevronDownIcon");

        fireEvent.click(icon);
        expect(screen.getByTestId("ChevronUpIcon")).toBeInTheDocument();
    });
});