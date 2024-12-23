import { render, screen } from '@testing-library/react';
import {Icon} from './icon';

jest.mock('./outilineIcons', () => ({
  ArrowDownIcon: <svg data-testid='outline-icon-1' />,
}));

jest.mock('./solidIcons', () => ({
  ArrowDownIcon: <svg data-testid='solid-icon-1' />,
}));

describe('Icon Component', () => {
  it('renders the correct outline icon when type is "outline"', () => {
    render(<Icon icon='ArrowDownIcon' type='outline' />);
    const outlineIcon = screen.queryByTestId('outline-icon-1');
    expect(outlineIcon).toBeInTheDocument();
  });

  it('renders the correct solid icon when type is "solid"', () => {
    render(<Icon icon='ArrowDownIcon' type='solid' />);
    const solidIcon = screen.queryByTestId('solid-icon-1');
    expect(solidIcon).toBeInTheDocument();
  });
});
