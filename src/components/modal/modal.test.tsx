import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./modal";
import { forwardRef, useRef } from "react";

describe("Modal Component", () => {
  it("should render the modal with title and children", () => {
    render(
      <Modal
        title="Test Modal"
        handleClose={jest.fn()}
        show={true}
        modalFitContent={false}
        dontShowCloseButton={false}
      >
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("should not display the modal when show is false", () => {
    render(
      <Modal
        title="Test Modal"
        handleClose={jest.fn()}
        show={false}
        modalFitContent={false}
        dontShowCloseButton={false}
      >
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByText("Test Modal")).not.toBeVisible();
  });

  it("should call handleClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <Modal
        title="Test Modal"
        handleClose={handleClose}
        show={true}
        modalFitContent={false}
        dontShowCloseButton={false}
      >
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should not render the close button when dontShowCloseButton is true", () => {
    render(
      <Modal
        title="Test Modal"
        handleClose={jest.fn()}
        show={true}
        modalFitContent={false}
        dontShowCloseButton={true}
      >
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});