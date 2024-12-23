import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  gap: var(--gap-md);
  padding-top: var(--padding-header);
`;

export const LoginTopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-secondary-background);
    padding: var(--padding-gap-md);
    margin: var(--margin-gap-md);
    border-radius: var(--border-radius);
    border-bottom-left-radius: 40px;
    width: 50%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
    max-width: 600px;
    max-height: 400px;
    &::after {
        padding-top: 74%;
        display: block;
        content: '';
    }
`;

interface LoginImageProps {
    $src: string;
}
export const LoginImageDiv = styled.div<LoginImageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.$src});
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 600px;
    background-size: cover;
    border-radius: var(--border-radius);
    border-bottom-left-radius: 20px;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
`;

export const LoginTopBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-secondary-complementary-background);
    width: 300px;
    border-radius: 10px;
    flex-direction: column;
    padding: var(--padding-gap-md);
    gap: var(--gap-sm);
    margin: var(--margin-gap-md);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--gap-lg);
    width: 100%;
    max-width: 350px;
    margin: var(--margin-gap-md);
`;

export const AlertsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 350px;
    margin: 0px var(--margin-gap-md);
    position: absolute;
    top: 70px;
`;