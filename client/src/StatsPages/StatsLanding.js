import styled from "styled-components";
import StatsSwitch from "./StatsSwitch";
import { useState, useEffect, useContext } from "react";
import FactionPopularity from "./FactionPopularity";
import FactionVP from "./FactionVP";
import TechPopularity from "./TechPopularity";
import UnitPopularity from "./UnitPopularity";

const StatsLanding = () => {

    const [globalTechs, setGlobalTechs] = useState(null);
    const [globalUnits, setGlobalUnits] = useState(null);
    const [techCount, setTechCount] = useState(null);
    const [unitCount, setUnitCount] = useState(null);
    const [selector, setSelector] = useState("Global");
    const [popularity, setPopularity] = useState(null);
    const [vpCount, setVpCount] = useState(null);
    
    const fetchAll = async () => {
        const popularityCount = await fetch("/api/get-faction-popularity").then((res) => res.json());
            if(popularityCount.status !== 200){
                window.alert(popularityCount.message);
                throw new Error(popularityCount.message);
            }
            setPopularity(popularityCount.data);
        const victoryCount = await fetch("/api/get-faction-vp").then((res) => res.json());
            if(victoryCount.status !== 200){
                window.alert(victoryCount.message);
                throw new Error(victoryCount.message);
            }
            setVpCount(victoryCount.data);
        const techGlobal = await fetch("/api/get-global-techs").then((res) => res.json());
            if(techGlobal.status !== 200){
                window.alert(techGlobal.message);
                throw new Error(techGlobal.message);
            }
            setGlobalTechs(techGlobal.data);
        const unitGlobal = await fetch("/api/get-global-units").then((res) => res.json());
            if(unitGlobal.status !== 200){
                window.alert(unitGlobal.message);
                throw new Error(unitGlobal.message);
            }
            setGlobalUnits(unitGlobal.data);
        const countUnit = await fetch("/api/get-popular-units").then((res) => res.json());
            if(countUnit.status !== 200){
                window.alert(countUnit.message);
                throw new Error(countUnit.message);
            }
            setUnitCount(countUnit.data);
        const countTech = await fetch("/api/get-popular-techs").then((res) => res.json());
            if(techGlobal.status !== 200){
                window.alert(countTech.message);
                throw new Error(countTech.message);
            }
            setTechCount(countTech.data);

    };

    useEffect(() => {
        fetchAll();
    }, [])

    return (
        <Wrapper>
            <IntroText>Global Twilight Imperium Statistics</IntroText>
            <StatsSwitch selector = {selector} setSelector = {setSelector}/>
            <>
            {(!popularity || !vpCount || !globalTechs || !globalUnits || !unitCount || !techCount)
            ?<IntroText>LOADING</IntroText>
            :           
            <StatsWrapper>
            <FactionPopularity popularity = {popularity} techCount = {techCount}/>
            <FactionVP vpCount = {vpCount} techCount = {techCount} />
            <TechPopularity globalTechs = {globalTechs} techCount = {techCount}/>
            <UnitPopularity techCount = {techCount} unitCount = {unitCount} globalUnits = {globalUnits}/>
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