import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Login } from './login';
import { useAuth, useCryptoJS } from '@/hooks';
import { useNavigate } from 'react-router-dom';

jest.mock('@/hooks');
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Login Component', () => {
    const mockLogin = jest.fn();
    const mockEncryptAES = jest.fn();
    const mockNavigate = jest.fn();

    beforeEach(() => {
        (useAuth as jest.Mock).mockReturnValue({ login: mockLogin });
        (useCryptoJS as jest.Mock).mockReturnValue({ encryptAES: mockEncryptAES });
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders login form', () => {
        render(<Login />);
        expect(screen.getByText('Username:')).toBeInTheDocument();
        expect(screen.getByText('Password:')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    test('shows error alert on invalid login', async () => {
        mockEncryptAES.mockReturnValue('invalidToken');
        render(<Login />);
        fireEvent.change(screen.getByTestId('username'), { target: { value: 'wrongUser' } });
        fireEvent.change(screen.getByTestId('password'), { target: { value: 'wrongPass' } });
        fireEvent.click(screen.getByText('Login'));
        expect(await screen.findByText('Invalid username or password')).toBeInTheDocument();
    });

    test('clears input fields on cancel', () => {
        render(<Login />);
        fireEvent.change(screen.getByTestId('username'), { target: { value: 'admin' } });
        fireEvent.change(screen.getByTestId('password'), { target: { value: 'password' } });
        fireEvent.click(screen.getByText('Cancel'));
        expect(screen.getByTestId('username')).toHaveValue('');
        expect(screen.getByTestId('password')).toHaveValue('');
    });
});