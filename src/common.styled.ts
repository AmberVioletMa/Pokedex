import styled from "styled-components";

export const Input = styled.input`
  width: calc(100% - 26px); // 26px is the width of the padding + border
  padding: var(--margin-gap-sm);
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 31px;
  font-size: 1.2rem;
  &:disabled {
    background-color: #f3f3f3;
  }
`;

export const Title = styled.h1`
    font-size: 1.4rem;
    text-align: left;
    margin: 0;
    width: 100%;
    color: #ffffff;
    line-height: 1.4rem;
`;

interface ButtonProps {
  $type: 'primary' | 'secondary';
  $fitToContent?: boolean;
  $rounded?: boolean;
}
export const Button = styled.button<ButtonProps>`
    background-color: ${props => props.$type === 'primary' ? 'var(--color-button-primary)' : 'var(--color-button-secondary)'};
    color: #ffffff;
    border: none;
    border-radius: ${props => props.$rounded ? 'var(--border-radius)' : 'var(--border-radius-s)'};
    padding: var(--padding-gap-sm);
    cursor: pointer;
    width: ${props => props.$fitToContent ? 'fit-content' : '100%'};
    font-size: 1.2rem;
    &:hover {
        background-color: ${props => props.$type === 'primary' ? 'var(--color-button-primary-hover)' : 'var(--color-button-secondary-hover)'};
    }
`;
