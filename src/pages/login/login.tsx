import { useState } from "react";
import { useAuth, useCryptoJS } from "@/hooks";
import { AlertsContainer, ButtonsContainer, LoginContainer, LoginImageDiv, LoginTopBottom, LoginTopContainer } from "./login.styled";
import sleepingAnimation from '@/assets/sleepingAnimation.gif';
import cutLoopAnimation from '@/assets/cut-loop.gif';
import { Button, Input, Title } from "@/common.styled";
import { Alerts } from "@/components";
import { AlertType } from "@/components/interfaces";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { encryptAES } = useCryptoJS();
    const { login } = useAuth();
    const history = useNavigate();
    const [admin, setAdmin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [alerts, setAlerts] = useState<AlertType[]>([]);
    const [currentAnimation, setCurrentAnimation] = useState<string>(sleepingAnimation);

    const loginFunction = async () => {
        const encriptedToken = encryptAES(password);
        if (encriptedToken === 'CinA5MJWDvBTvOJSvluE4g==' && admin === 'admin') {
            const token = encryptAES(encriptedToken);
            sessionStorage.setItem('token', token);
            setCurrentAnimation(cutLoopAnimation);
            setTimeout(() => {
                login && login();
                history('/home');
            }, 2000);
        } else {
            const newAlert: AlertType = {
                type: 'error',
                text: 'Invalid username or password'
            };
            setAlerts([...alerts, newAlert]);
        }

    }

    const cancelLogin = () => {
        setAdmin('');
        setPassword('');
    }

    const onRemove = (index: number) => {
        const newAlerts = alerts.filter((_, i) => i !== index);
        setAlerts(newAlerts);
    }

    return (
        <LoginContainer>
            <AlertsContainer>
                <Alerts alerts={alerts} onRemove={(index: number) => onRemove(index)} />
            </AlertsContainer>
            <LoginTopContainer>
                <LoginImageDiv $src={currentAnimation} />
            </LoginTopContainer>
            <LoginTopBottom>
                <Title>Username:</Title>
                <Input data-testid='username' value={admin} onChange={(e) => setAdmin(e.target.value)} />
                <Title>Password:</Title>
                <Input data-testid='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </LoginTopBottom>
            <ButtonsContainer>
                <Button $type="primary" onClick={loginFunction}>Login</Button>
                <Button $type="secondary" onClick={cancelLogin} >Cancel</Button>
            </ButtonsContainer>
        </LoginContainer>

    );
};