# Pokedex Project

## Tech Stack
- **Vite**: Compiler
- **TypeScript**: Programming Language
- **Jest & React Testing Library**: Unit Testing
- **Styled-components**: Styling
- **React Query (TanStack)**: API caching and debouncing

## Justifications

- **Vite**: Chosen for its speed and minimal bundle overhead compared to Create React App and other alternatives.
- **TypeScript**: Enhances code readability and maintainability through types and interfaces, facilitating autocomplete and error checking.
- **Styled-components**: Preferred for its clean, reusable styling approach and the single source of truth for styles, compared to alternatives like Tailwind.
- **React Query (TanStack)**: Manages API caching and debouncing efficiently, providing well-documented solutions for future developers.

## Highlights

- **Token Encryption**: Tokens are encrypted and stored in session storage.
- **Environment Variables**: Secret keys are stored in environment variables (commented out for simplicity, but noted for a real project).
- **Lazy Load System**: Implements lazy loading for Pokémon images. Images load when more than 50% of a card is visible, updating the React Query to fetch new elements and leveraging cache for already loaded elements.
- **Efficient API Calls**: No unnecessary or duplicate API calls.
- **Sorting and Typeahead**: Pokémon are sorted, and a typeahead feature is included.
- **Detail View Loading**: Additional elements load when the detail view is accessed.
- **Component Testing**: All components are tested.
- **Generic Components**: Components are designed for various implementations.
- **Component Creation Script**: A script is included to generate base components with the necessary files and imports.

## Future Improvements (time permitting)
- **More Comprehensive Testing**: Only one page was tested due to time constraints.
- **Enhanced Session Security**: Although the current configuration prevents password theft, you can still copy the token to a new session and log in this way, a more secure session protection method would be ideal.
- **Full Responsiveness**: While the project is somewhat responsive, full responsiveness is a desired goal.

## Commands and Setup
- **Install dependencies**: `npm i`
- **Run the project**: `npm run dev`
- **Run tests**: `npm run test`
- **Create a new component**: `npm run createComponent 'Name Of The Component'`
