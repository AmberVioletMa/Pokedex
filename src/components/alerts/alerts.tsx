import { forwardRef, useImperativeHandle } from "react";
import { AlertType, AlertsInterface } from "./alerts.model";
import {
  AlertContainer,
  CloseIconContainer,
  Container,
  IconContainer,
  LeftContainer,
  Text,
  TextContainer,
  Title,
} from "./alerts.styled";
import { Icon } from "@/components";

export const Alerts = forwardRef(
  ({ alerts, onRemove, displayCloseButton = true }: AlertsInterface, ref) => {
    useImperativeHandle(ref, () => ({}));
    return (
      <Container>
        {alerts.map((alert: AlertType, index: number) => (
          <AlertContainer
            data-testid={`alert-type-${alert.type}`}
            $type={alert.type}
            key={alert.text}
          >
            <LeftContainer>
              <IconContainer $type={alert.type}>
                <Icon icon="ExclamationCircleIcon" type="outline" />
              </IconContainer>
              <TextContainer>
                {alert.title && <Title>{alert.title}</Title>}
                {alert.text && <Text>{alert.text}</Text>}
              </TextContainer>
            </LeftContainer>
            {displayCloseButton && (
              <CloseIconContainer onClick={() => onRemove(index)}>
                <Icon icon="XMarkIcon" type="outline" />
              </CloseIconContainer>
            )}
          </AlertContainer>
        ))}
      </Container>
    );
  }
);

Alerts.displayName = "Alerts";
