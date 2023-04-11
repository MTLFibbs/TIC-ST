import styled from "styled-components";
import LoginButton from "./LoginButton";
import { User, useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// This component is the page a user sees if they are not logged in upon accessing the website
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
background-color: #25282d;
height:90vh;
`

const LoginWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 22vw;
height: 16vh;
border: 2px solid white;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
color:white;
border-radius: 8px;
margin-top: 0vh;
`

const TextWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
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