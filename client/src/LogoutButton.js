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
background-color:transparent;
border: 2px solid white;
color:white;
border-radius:8px;
&:hover{
    background-color: #370D32;
}
`

export default LogoutButton;