import { render, screen } from "@testing-library/react";
import {Alerts} from './alerts';
import { AlertType } from './alerts.model';

describe('Alerts Component', () => {
  const alerts: AlertType[] = [
    { type: 'error', text: 'Error Alert' },
    { type: 'success', text: 'Success Alert' },
    { type: 'warning', text: 'Warning Alert' },
    { type: 'info', text: 'Info Alert' },
  ];

  it('renders alerts correctly', () => {
    render(<Alerts alerts={alerts} onRemove={jest.fn()} />);
    expect(screen.getByText('Error Alert')).toBeInTheDocument();
    expect(screen.getByText('Success Alert')).toBeInTheDocument();
    expect(screen.getByText('Warning Alert')).toBeInTheDocument();
    expect(screen.getByText('Info Alert')).toBeInTheDocument();
  });

  it('does not render close button when displayCloseButton is false', () => {
    render(
      <Alerts alerts={alerts} onRemove={jest.fn()} displayCloseButton={false} />
    );
    const closeButtons = screen.queryAllByRole('button');
    expect(closeButtons.length).toBe(0);
  });

  it('renders alerts with correct colors based on type', () => {
    render(<Alerts alerts={alerts} onRemove={jest.fn()} />);
    const errorAlert = screen.getByTestId('alert-type-error');
    const successAlert = screen.getByTestId('alert-type-success');
    const warningAlert = screen.getByTestId('alert-type-warning');
    const infoAlert = screen.getByTestId('alert-type-info');
    
    expect(errorAlert).toHaveStyle('background-color: #FEF2F2');
    expect(successAlert).toHaveStyle('background-color: #ECFDF5');
    expect(warningAlert).toHaveStyle('background-color: #FFFBEB');
    expect(infoAlert).toHaveStyle('background-color: #E3F2FD');
  });
});
