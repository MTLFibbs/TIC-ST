import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <Login onClick = {() => logout()}>
                Sign Out
            </Login>
        )
    )
};

const Login = styled.button`
`

export default LogoutButton;