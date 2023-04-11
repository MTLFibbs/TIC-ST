import styled from "styled-components";
import StatsSwitch from "./StatsSwitch";
import { useState, useEffect, useContext } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";
import { LiveGameContext } from "../LiveGameContext";
import logo from "../Images/loader.gif"

import FactionPopularity from "./FactionPopularity";
import FactionVP from "./FactionVP";
import TechPopularity from "./TechPopularity";
import UnitPopularity from "./UnitPopularity";
import ObjectivePopularity from "./ObjectivePopularity";
import SecretObjectivePopularity from "./SecretObjectivePopularity";
import FactionPlacement from "./FactionPlacement";
import FactionTechPopularity from "./FactionTechPopularity";
import FactionUnitPopularity from "./FactionUnitPopularity";
//This component is the stats landing page, it handles all fetch requests before displaying all the graphs, letting users switch between them with 0 latency
//at the cost of increased initial load times
const StatsLanding = () => {

    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)

    const [switcher, setSwitcher] = useState(false);
    const [selector, setSelector] = useState("global");
    const {user} = useAuth0();

    const [placement, setPlacement] = useState(null);
    const [factionTechs, setFactionTechs] = useState(null);
    const [factionTechSpecific, setFactionTechSpecific] = useState(null);
    const [factionUnits, setFactionUnits] = useState(null);
    const [factionUnitSpecific, setFactionUnitSpecific] = useState(null);

    const [techCountUser, setTechCountUser] = useState(null);
    const [unitCountUser, setUnitCountUser] = useState(null);
    const [objectiveCountUser, setObjectiveCountUser] = useState(null);
    const [secretCountUser, setSecretCountUser] = useState(null);
    const [popularityUser, setPopularityUser] = useState(null);
    const [vpCountUser, setVpCountUser] = useState(null);
    const [globalTechs, setGlobalTechs] = useState(null);
    const [globalUnits, setGlobalUnits] = useState(null);
    const [globalObjectives, setGlobalObjectives] = useState(null);
    const [ globalSecret, setGlobalSecret] = useState(null);
    const [techCount, setTechCount] = useState(null);
    const [unitCount, setUnitCount] = useState(null);
    const [objectiveCount, setObjectiveCount] = useState(null);
    const [secretCount, setSecretCount] = useState(null);
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
        const objectivesGlobal = await fetch("/api/get-objectives").then((res) => res.json());
            if(objectivesGlobal.status !== 200){
                window.alert(objectivesGlobal.message);
                throw new Error(objectivesGlobal.message);
            }
            setGlobalObjectives(objectivesGlobal.data.public);
        const countObjectives = await fetch("/api/get-popular-objectives").then((res) => res.json());
            if(countObjectives.status !== 200){
                window.alert(countObjectives.message);
                throw new Error(countObjectives.message);
            }
            setObjectiveCount(countObjectives.data);
        const secretGlobal = await fetch("/api/get-objectives").then((res) => res.json());
            if(secretGlobal.status !== 200){
                window.alert(secretGlobal.message);
                throw new Error(secretGlobal.message);
            }
            setGlobalSecret(secretGlobal.data.secret);
        const countSecretObjectives = await fetch("/api/get-popular-secret-objectives").then((res) => res.json());
            if(countSecretObjectives.status !== 200){
                window.alert(countSecretObjectives.message);
                throw new Error(countSecretObjectives.message);
            }
            setSecretCount(countSecretObjectives.data);
        
            const popularityCountUser = await fetch(`/api/get-faction-popularity/${user.nickname}`).then((res) => res.json());
            if(popularityCountUser.status !== 200){
                window.alert(popularityCountUser.message);
                throw new Error(popularityCountUser.message);
            }
            setPopularityUser(popularityCountUser.data);
        const victoryCountUser = await fetch(`/api/get-faction-vp/${user.nickname}`).then((res) => res.json());
            if(victoryCountUser.status !== 200){
                window.alert(victoryCountUser.message);
                throw new Error(victoryCountUser.message);
            }
            setVpCountUser(victoryCountUser.data);
        const countUnitUser = await fetch(`/api/get-popular-units/${user.nickname}`).then((res) => res.json());
            if(countUnitUser.status !== 200){
                window.alert(countUnitUser.message);
                throw new Error(countUnitUser.message);
            }
            setUnitCountUser(countUnitUser.data);    
        const countObjectivesUser = await fetch(`/api/get-popular-objectives/${user.nickname}`).then((res) => res.json());
            if(countObjectivesUser.status !== 200){
                window.alert(countObjectivesUser.message);
                throw new Error(countObjectivesUser.message);
            }
            setObjectiveCountUser(countObjectivesUser.data);
        const countSecretObjectivesUser = await fetch(`/api/get-popular-secret-objectives/${user.nickname}`).then((res) => res.json());
            if(countSecretObjectivesUser.status !== 200){
                window.alert(countSecretObjectivesUser.message);
                throw new Error(countSecretObjectivesUser.message);
            }
            setSecretCountUser(countSecretObjectivesUser.data);
        const countTechUser = await fetch(`/api/get-popular-techs/${user.nickname}`).then((res) => res.json());
            if(countTechUser.status !== 200){
                window.alert(countTechUser.message);
                throw new Error(countTechUser.message);
            }
            setTechCountUser(countTechUser.data);
        const placementValue = await fetch(`/api/get-faction-placement`).then((res) => res.json());
            if(placementValue.status !== 200){
                window.alert(placementValue.message);
                throw new Error(placementValue.message);
            }
            setPlacement(placementValue.data);
        const techFactionGlobal = await fetch(`/api/get-techs`).then((res) => res.json());
            if(techFactionGlobal.status !== 200){
                window.alert(techFactionGlobal.message);
                throw new Error(techFactionGlobal.message);
            }
            setFactionTechs(techFactionGlobal.data);
        const techFactionSpecific = await fetch(`/api/get-faction-tech-popularity`).then((res) => res.json());
            if(techFactionSpecific.status !== 200){
                window.alert(techFactionSpecific.message);
                throw new Error(techFactionSpecific.message);
            }
            setFactionTechSpecific(techFactionSpecific.data);
        const unitFactionSpecific = await fetch(`/api/get-faction-units-popularity`).then((res) => res.json());
            if(unitFactionSpecific.status !== 200){
                window.alert(unitFactionSpecific.message);
                throw new Error(unitFactionSpecific.message);
            }
            setFactionUnitSpecific(unitFactionSpecific.data);
        const unitFactionGlobal = await fetch(`/api/get-units`).then((res) => res.json());
            if(unitFactionGlobal.status !== 200){
                window.alert(unitFactionGlobal.message);
                throw new Error(unitFactionGlobal.message);
            }
            setFactionUnits(unitFactionGlobal.data);

        const countTech = await fetch("/api/get-popular-techs").then((res) => res.json());
            if(techGlobal.status !== 200){
                window.alert(countTech.message);
                throw new Error(countTech.message);
            }
            setTechCount(countTech.data);

    };

    const fetchRender = () => {
        if(switcher === true){
            setSwitcher(false)
        }
        if(switcher === false){
            setSwitcher(true)
        }
    }

    useEffect(() => {
        fetchAll();
    }, [user])

    useEffect(()=> {
        fetchRender();
    },[selector])

    return (
        <Wrapper>
            <StatsSwitch selector = {selector} setSelector = {setSelector}/>
            <>
            {(!popularity || 
            !vpCount || 
            !globalTechs || 
            !globalUnits || 
            !unitCount || 
            !globalObjectives || 
            !objectiveCount || 
            !secretCount ||
            !globalSecret||
            !popularityUser || 
            !vpCountUser || 
            !unitCountUser || 
            !objectiveCountUser || 
            !secretCountUser ||
            !techCountUser||
            !placement||
            !factionTechs ||
            !factionTechSpecific||
            !factionUnits ||
            !factionUnitSpecific ||
            !techCount)
            ?<IntroText><Image src = {logo} alt = "Loading..."/></IntroText>
            : selector === ("global" || null)
            ?  
            <StatsWrapper>
            <FactionPopularity popularity = {popularity} assign = {assign} setAssign = {setAssign} selector = {selector}/>
            <FactionVP vpCount = {vpCount}  />
            <TechPopularity globalTechs = {globalTechs} techCount = {techCount} />
            <UnitPopularity  unitCount = {unitCount} globalUnits = {globalUnits}/>
            <ObjectivePopularity  globalObjectives={globalObjectives} objectiveCount={objectiveCount}/>
            <SecretObjectivePopularity  globalObjectives={globalSecret} objectiveCount={secretCount}/>
            </StatsWrapper>  

            : selector === "user"
            ?
            <StatsWrapper>
            <FactionPopularity popularity = {popularityUser} />
            <FactionVP vpCount = {vpCountUser}/>
            <TechPopularity globalTechs = {globalTechs} techCount = {techCountUser}/>
            <UnitPopularity  unitCount = {unitCountUser} globalUnits = {globalUnits}/>
            <ObjectivePopularity globalObjectives={globalObjectives} objectiveCount={objectiveCountUser}/>
            <SecretObjectivePopularity globalObjectives={globalSecret} objectiveCount={secretCountUser}/>
            </StatsWrapper>  
            : selector !== ("global" || null || "user")
            ?
            <WrapperWrapper>
                <FactionWrapper1>
                <FactionPlacement placement = {placement} selector = {selector} />
                </FactionWrapper1>
                <FactionWrapper2>
                    <FactionTechPopularity selector = {selector} factionTechSpecific = {factionTechSpecific} factionTechs = {factionTechs}/>
                </FactionWrapper2>
                <FactionWrapper2>
                    <FactionUnitPopularity selector = {selector} factionUnitSpecific = {factionUnitSpecific} factionUnits = {factionUnits}/>
                </FactionWrapper2>
            </WrapperWrapper>

            : <></>
            }
            </>

        </Wrapper>
    )
};

const Wrapper = styled.div`
width:100%;
height:90vh;
background-color: #25282d;
`
const IntroText = styled.div`
display:flex;
justify-content:center;
font:bold;
font-size:2vw;
`
const Image = styled.img`
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
const WrapperWrapper = styled.div`
display:flex;
flex-direction: row;
width: 100%;
height:100%;
`
const FactionWrapper1 = styled.div`
display:flex;
text-align:center;
justify-content:center;
align-items:center;
height:72vh;
width: 33%;
margin-left: 2vw;
`
const FactionWrapper2 = styled.div`
display:flex;
text-align:center;
justify-content:center;
align-items:center;
height:72vh;
width: 33%;
margin-left: 0vw;
margin-right: -1.5vw;
`
export default StatsLanding;