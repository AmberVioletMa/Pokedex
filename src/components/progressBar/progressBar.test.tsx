import { render, screen } from "@testing-library/react";
import ProgressBar from "./progressBar";

describe("ProgressBar Component", () => {
  it("should render ProgressBar Component correctly", () => {
    const { container } = render(<ProgressBar percentage={0} />);
    expect(container).toBeInTheDocument();
  });

  describe("ProgressBar", () => {
    test("renders with correct percentage", () => {
      render(<ProgressBar percentage={50} />);
      const progressElement = screen.getByTestId("ProgressBar");
      expect(progressElement).toHaveStyle({ width: "50%" });
    });

    test("renders with 0 percentage if no percentage is passed", () => {
      render(<ProgressBar percentage={0} />);
      const progressElement = screen.getByTestId("ProgressBar");
      expect(progressElement).toHaveStyle({ width: "0%" });
    });
  });
});
