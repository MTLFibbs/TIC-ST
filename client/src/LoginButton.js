import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

//This component is the log in button for the Auth0 integration of the profile
const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <Login onClick = {() => loginWithRedirect()}>
                Sign In
            </Login>
        )
    )
};

const Login = styled.button`
background-color: transparent;
color:white;
border: 2px solid white;
border-radius: 8px;
width: 6vw;
height: 4vh;
cursor:pointer;
&:hover{
    background-color:#370D32;
}
`

export default LoginButton;