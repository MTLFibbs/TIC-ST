import styled from "styled-components";
import LoginButton from "./LoginButton";
import { User, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

const LandingPage = () => { 

    const {loginWithRedirect, isAuthenticated, user} = useAuth0();
    const navigate = useNavigate();

    const autoNavigate = () => {
        if (isAuthenticated){
            navigate("/home");
        }
    }

    useEffect(() => {
        autoNavigate();
    }, [isAuthenticated])

    return (
        <Wrapper>
        <LoginWrapper>
            <TextWrapper>
            <LoginText>Please Login</LoginText>
            <ExText>The full suite of features is only available upon login</ExText>
            </TextWrapper>
            <LoginButton/>
        </LoginWrapper>
        </Wrapper>
    )
};

const Wrapper =styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const LoginWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:orange;
width: 22vw;
height: 16vh;
border: 1px solid black;
border-radius: 8px;
margin-top: 22vh;
`

const TextWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const LoginText = styled.div`
margin-bottom: 0vh;
margin-top:0vh;
font-style:bold;
font-size: 2vw;
`
const ExText = styled.div`
padding-bottom: 4vh;
`
export default LandingPage;