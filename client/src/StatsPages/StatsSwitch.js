import styled from "styled-components";
import { NavLink, Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";

const StatsSwitch = ({selector, setSelector}) => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();

    return(
        <Wrapper>
            <SelectorWrapper>
                <SelectorText to = {"/stats"}>GLOBAL</SelectorText>
                <SelectorText to = {`/stats/${user.nickname}`}>USER</SelectorText>
            </SelectorWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 100vw;
height: 10vh;
background-color:pink;
display:flex;
justify-content:center;
align-items:center;
`

const SelectorWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 10vw;
height: 7vh;
background-color:orange;
border-radius:16px;
border: 2px solid black;
`

const SelectorText = styled(NavLink)`
margin-left:1vw;
margin-right: 1vw;
font-size:1vw;
color:black;
&:active{
    color:blue;
}
`

export default StatsSwitch;