import styled from 'styled-components';

interface StyledAlertProps {
  $type: 'success' | 'error' | 'warning' | 'info';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #263238;
`;

export const AlertContainer = styled.div<StyledAlertProps>`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => {
    switch (props.$type) {
      case 'success':
        return '#ECFDF5';
      case 'error':
        return '#FEF2F2';
      case 'warning':
        return '#FFFBEB';
      case 'info':
        return '#E3F2FD';
      default:
        return '#000000';
    }
  }};
  border: 1px solid
    ${(props) => {
      switch (props.$type) {
        case 'success':
          return '#10B981';
        case 'error':
          return '#EF4444';
        case 'warning':
          return '#F59E0B';
        case 'info':
          return '#2196F3';
        default:
          return '#000000';
      }
    }};
`;

export const IconContainer = styled.div<StyledAlertProps>`
  & svg {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => {
      switch (props.$type) {
        case 'success':
          return '#10B981';
        case 'error':
          return '#EF4444';
        case 'warning':
          return '#F59E0B';
        case 'info':
          return '#2196F3';
        default:
          return '#000000';
      }
    }};
  }
`;

export const CloseIconContainer = styled.div`
  & svg {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #546E7A;
  text-align: left;
`;