import { forwardRef, useImperativeHandle } from "react";
import { ProgressBarInterface } from "./progressBar.model";
import { Progress, ProgressBarContainer } from "./progressBar.styled";

export const ProgressBar = forwardRef(({ percentage }: ProgressBarInterface, ref) => {
  useImperativeHandle(ref, () => ({}));
  return (
    <ProgressBarContainer>
      <Progress data-testid='ProgressBar' $percentage={percentage} />
    </ProgressBarContainer>
  );
});

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
