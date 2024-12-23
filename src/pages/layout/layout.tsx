import { Outlet } from "react-router-dom";
import { BottomBar, ButtonContainer, LayoutContainer, OutletContainer } from "./layout.styled";
import { Button } from "@/common.styled";
import { useAuth } from "@/hooks";

export const Layout = () => {
    const {logout} = useAuth();

    return (
        <LayoutContainer>
            <OutletContainer>
                <Outlet />
            </OutletContainer>
            <BottomBar>
                <ButtonContainer>
                    <Button $fitToContent={true} $type="primary" onClick={logout}>Logout</Button>
                </ButtonContainer>
            </BottomBar>
        </LayoutContainer>
    );
};