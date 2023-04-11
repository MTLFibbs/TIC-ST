import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";


//This component is the log out button for the Auth0 integration of the profile
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
cursor:pointer;
&:hover{
    background-color: #370D32;
}
`

export default LogoutButton;