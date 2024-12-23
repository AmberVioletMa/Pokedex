import { render, screen, fireEvent } from '@testing-library/react';
import { Titlespill } from './titlespill';

describe('Titlespill Component', () => {
    const titles = ['Title1', 'Title2', 'Title3'];
    const activeTitle = 'Title2';
    const onTitleClick = jest.fn();

    it('renders all titles', () => {
        render(<Titlespill titles={titles} activeTitle={activeTitle} onTitleClick={onTitleClick} />);
        titles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    it('highlights the active title', () => {
        render(<Titlespill titles={titles} activeTitle={activeTitle} onTitleClick={onTitleClick} />);
        const activeButton = screen.getByText(activeTitle);
        expect(activeButton).toHaveStyle('background-color: ButtonFace');
    });

    it('calls onTitleClick when a title is clicked', () => {
        render(<Titlespill titles={titles} activeTitle={activeTitle} onTitleClick={onTitleClick} />);
        const titleButton = screen.getByText('Title1');
        fireEvent.click(titleButton);
        expect(onTitleClick).toHaveBeenCalledWith('Title1');
    });
});