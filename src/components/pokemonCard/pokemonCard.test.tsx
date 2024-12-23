import { render, screen, fireEvent } from '@testing-library/react';
import { PokemonCard } from './pokemonCard';

describe('PokemonCard', () => {
    const mockOnIntersection = jest.fn();
    const mockOnClick = jest.fn();
    const mockData = {
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders PokemonCard with name and image', () => {
        render(<PokemonCard name="Bulbasaur" onIntersection={mockOnIntersection} data={mockData} onClick={mockOnClick} />);
        
        expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
        expect(screen.getByTestId('cardImage')).toHaveStyle(`background-image: url(${mockData.sprites.front_default})`);
    });

    test('calls onClick when card is clicked', () => {
        render(<PokemonCard name="Bulbasaur" onIntersection={mockOnIntersection} data={mockData} onClick={mockOnClick} />);
        
        fireEvent.click(screen.getByTestId('cardImage'));
        expect(mockOnClick).toHaveBeenCalled();
    });

    test('displays loading animation when data is not available', () => {
        jest.mock('../../assets/loading_pokeball.gif', () => '');
        render(<PokemonCard name="Bulbasaur" onIntersection={mockOnIntersection} data={null} onClick={mockOnClick} />);
        
        expect(screen.getByTestId('cardImage')).toHaveStyle('background-image: url(test-file-stub)');
    });
});
