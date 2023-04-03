import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

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
color:black;
border: 2px solid black;
border-radius: 8px;
width: 6vw;
height: 4vh;
cursor:pointer;
&:hover{
    background-color:pink;
}
`

export default LoginButton;