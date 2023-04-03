import styled from "styled-components";
import StatsSwitch from "./StatsSwitch";
import { useState, useEffect, useContext } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";

const StatsLandingUser = () => {

    const [selector, setSelector] = useState("Global");
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();


    return (
        <Wrapper>
            <IntroText>User Twilight Imperium Statistics</IntroText>
            <StatsSwitch selector = {selector} setSelector = {setSelector}/>
            <p>USER</p>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`
const IntroText = styled.div`
display:flex;
justify-content:center;
font:bold;
font-size:2vw;
`

export default StatsLandingUser;