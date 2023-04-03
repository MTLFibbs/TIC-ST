import styled from "styled-components";
import StatsSwitch from "./StatsSwitch";
import { useState, useEffect, useContext } from "react";
import FactionPopularity from "./FactionPopularity";

const StatsLanding = () => {

    const [selector, setSelector] = useState("Global");
    const [popularity, setPopularity] = useState(null);
    
    useEffect(() => {
        fetch("/api/get-faction-popularity")
        .then(res => res.json())
        .then((data) => {
            setPopularity(data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <Wrapper>
            <IntroText>Global Twilight Imperium Statistics</IntroText>
            <StatsSwitch selector = {selector} setSelector = {setSelector}/>
            <StatsWrapper>
                <FactionPopularity/>
            </StatsWrapper>  
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
const StatsWrapper = styled.div`
display:grid;
text-align:center;
justify-content:center;
align-items:center;
height:72vh;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
`
export default StatsLanding;