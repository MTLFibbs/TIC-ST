import styled from "styled-components";
import StatsSwitch from "./StatsSwitch";
import { useState, useEffect, useContext } from "react";

const StatsLanding = () => {

    const [selector, setSelector] = useState("Global");

    return (
        <Wrapper>
            <IntroText>Global Twilight Imperium Statistics</IntroText>
            <StatsSwitch selector = {selector} setSelector = {setSelector}/>
            <p>GLOBAL</p>
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
export default StatsLanding;