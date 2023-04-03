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
            <>
            {!popularity
            ?<IntroText>LOADING</IntroText>
            :           
            <StatsWrapper>
            <FactionPopularity popularity = {popularity}/>
            <FactionPopularity popularity = {popularity}/>
            <FactionPopularity popularity = {popularity}/>
            <FactionPopularity popularity = {popularity}/>
            <FactionPopularity popularity = {popularity}/>
            <FactionPopularity popularity = {popularity}/>
            </StatsWrapper>  
            }

            </>

        </Wrapper>
    )
};

const Wrapper = styled.div`
width:100%;
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
grid-template-columns: repeat(3, 33%);
grid-template-rows: repeat(2, 1fr);
grid-gap: 0.5vh;
margin-left: 2vw;
margin-right: 0vw;
`
export default StatsLanding;