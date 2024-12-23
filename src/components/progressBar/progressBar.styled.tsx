import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  border-radius: 12px;
  overflow: hidden;
`;

interface ProgressBarInterface {
  $percentage: number;
}

export const Progress = styled.div<ProgressBarInterface>`
  width: ${({ $percentage }) => $percentage}%;
  background-color: var(--color-button-primary);
  height: 24px;
  border-radius: 12px;
  transition: width 0.3s ease-in-out;
`;
