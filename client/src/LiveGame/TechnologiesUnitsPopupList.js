import styled from "styled-components";

import UnitBox from "./UnitBox";
import TechBox from "./TechBox";
//This component is the wrapper around the list of units and technologies for each player
const TechnologiesUnitsPopupList = ({playerIndex, techData, faction, unitData, gameData}) => {
    
    
    return (
        <Wrapper>
            <GlobalWrapper>
                <TechWrapperGlobal>
                    {techData.filter((e) => e.techGlobal === "Yes").map((e, i) =>{
                    return(
                        <TechBox key = {e.techName} gameData = {gameData} playerIndex = {playerIndex} tech = {e.techName}/>                    )
                    })}
                </TechWrapperGlobal>
                <UnitWrapperGlobal>
                    {unitData.filter((e) => e.unitGlobal === "Yes" && e.unitAttribution.includes(faction)).map((e,i)=> {
                        return(
                            <UnitBox key = {e.unitName} gameData = {gameData} playerIndex = {playerIndex} unit = {e.unitName}/>
                        )
                    })}
                </UnitWrapperGlobal>
            </GlobalWrapper>
            <UniqueWrapper>
                <TechWrapperUnique>
                {techData.filter((e) => e.techGlobal === "No" && e.techUnique === faction).map((e, i) =>{
                    return(
                        <TechBox key = {e.techName} gameData = {gameData} playerIndex = {playerIndex} tech = {e.techName}/>
                    )
                })}
                </TechWrapperUnique>
                <UnitWrapperUnique>
                    {unitData.filter((e) => e.unitGlobal === "No" && e.unitAttribution.includes(faction)).map((e,i)=> {
                        return(
                            <UnitBox key = {e.unitName} gameData = {gameData} playerIndex = {playerIndex} unit = {e.unitName}/>
                        )
                    })}
                </UnitWrapperUnique>
            </UniqueWrapper>
        </Wrapper>
        
    )
};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
margin-top: 2vh;
margin-right: 0vw;

border-radius: 8px;
width:90%;
height:89%;
`
const GlobalWrapper = styled.div`
display:flex;
flex-direction:column;
`

const UniqueWrapper = styled.div`
display:flex;
flex-direction:column;
margin-left: 0.5vw;
`

const TechWrapperGlobal = styled.div`
display:grid;
grid-template-columns: repeat(4, 10vw);
grid-template-rows: repeat(4, 7vh);
grid-gap: 5px;
width:41vw;
height:29.8vh;
border-radius:8px;
`

const TechWrapperUnique = styled.div`
display:grid;
grid-template-columns: repeat(4, 10vw);
grid-template-rows: repeat(4, 7vh);
grid-gap: 5px;
width:29.5vw;
width:30.2vw;
border-radius:8px;
`

const UnitWrapperGlobal = styled.div`
display:grid;
grid-template-columns: repeat(4, 10vw);
grid-template-rows: repeat(4, 7vh);
grid-gap: 5px;
width:41vw;
height:22vh;
margin-top: 0.6vh;
border-radius:8px;
`
const UnitWrapperUnique = styled.div`
display:grid;
grid-template-columns: repeat(4, 10vw);
grid-template-rows: repeat(4, 7vh);
grid-gap: 5px;
width:30.2vw;
height:22vh;
margin-top: 0.6vh;
border-radius:8px;
`




export default TechnologiesUnitsPopupList;