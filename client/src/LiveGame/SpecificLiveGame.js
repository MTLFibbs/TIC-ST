import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import logo from "../Images/loader.gif"

import { LiveGameContext } from "../LiveGameContext";
import LiveGamePlayerBox from "./LiveGamePlayerBox";
import LiveGameMecatolCounter from "./LiveGameMecatolCounter";
import LiveGameThroneCounter from "./LiveGameThroneCounter";
import ObjectiveTile from "./ObjectiveTile";
import RoundCounter from "./RoundCounter";
import SecretObjectivesWrapper from "./SecretObjectivesWrapper";
import TechnologyWrapper from "./TechnologyWrapper";
import DeleteButton from "./DeleteButton";
import PostButton from "./PostButton";
//This component houses the structure for all other components in the live game
const SpecificLiveGame = () => {

    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const {_id} = useParams();
    const [gameData, setGameData] = useState(null);
    const [objectiveData, setObjectiveData] = useState(null);
    const [techData, setTechData] = useState(null);
    const [unitData, setUnitData] = useState(null);

    const objectiveAmount = [1,2,3,4,5,6,7,8,9,10];

    const fetchAll = async () => {
        const objectives = await fetch(`/api/get-objectives`).then((res)=>res.json());
        if(objectives.status !== 200) {
            window.alert(objectives.message);
            throw new Error(objectives.message);
        }
        setObjectiveData(objectives.data);
        const tech = await fetch(`/api/get-techs`).then((res)=>res.json());
        if(tech.status !== 200) {
            window.alert(tech.message);
            throw new Error(tech.message);
        }
        setTechData(tech.data);
        const units = await fetch(`/api/get-units`).then((res)=>res.json());
        if(units.status !== 200) {
            window.alert(units.message);
            throw new Error(units.message);
        }
        setUnitData(units.data)
    };

    const fetchGame = () => {
        fetch(`/api/get-live-game/${_id}`)
        .then(res => res.json())
        .then((data) => {
            if(data.status === 400 || data.status === 500){
                throw new Error(data.message);
            }
            else{
                setGameData(data.data)
            }
        })
        .catch((error)=>{
            window.alert(error);
        })
    };

    useEffect(() =>{
        fetchGame();
    }, [assign])

    useEffect(()=> {
        fetchAll();
    }, []);

    return(
        <Wrapper>
            {((!gameData && !objectiveData)|| (gameData && !objectiveData)|| (!gameData && objectiveData))
            ? <ImageWrapper><Image src = {logo} alt = "Loading..."/></ImageWrapper>
            :
            <>
            <PlayersWrapper>
            {gameData[0].players.map((e,i)=>{
                return <LiveGamePlayerBox key = {i} index = {i} gameData = {gameData[0].players[i]}></LiveGamePlayerBox>
            })}
            </PlayersWrapper>
            <RoundWrapper>
                <RoundCounter gameData = {gameData}/>
            </RoundWrapper>
            <MiddleWrapper>
                <FieldWrapper>
                    {objectiveAmount.map((e,i)=>{
                        return(
                            <ObjectiveTile key = {i} gameData = {gameData[0]} number = {objectiveAmount[i]} objectiveData = {objectiveData.public} drawn = {gameData[0].drawnObjectives}/>
                        )
                    })}
                </FieldWrapper>
                <SecretAndTechWrapper>
                    <SecretObjectivesWrapper gameData = {gameData[0]} secretData = {objectiveData.secret} secretsDrawn = {gameData[0].drawnSecretObjectives}/>
                    <TechnologyWrapper gameData = {gameData[0]} techData = {techData} unitData = {unitData}/>
                    <DeleteButton gameData = {gameData[0]} />
                    <PostButton gameData = {gameData[0]}/>
                </SecretAndTechWrapper>
            </MiddleWrapper>
            <MecatolWrapper>
            <LiveGameMecatolCounter gameData = {gameData[0]} />
            <LiveGameThroneCounter gameData = {gameData[0]}/>
            </MecatolWrapper>
            </>
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
background-color: #25282d;
height:90vh;
`

const PlayersWrapper = styled.div`
width:18vw;
height:80vh;
margin-top:4vh;
margin-left: 1vw;
color:white;
display:grid;
grid-template-columns: repeat(2, 9.5vw);
grid-template-rows: repeat(3, 33%);
grid-column-gap: 0vw;
grid-row-gap: 1vh;
`

const MiddleWrapper = styled.div`
display:flex;
flex-direction:column;
`
const ImageWrapper = styled.div`
width:100%;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`
const SecretAndTechWrapper = styled.div`
display:flex;
flex-direction:row;
`
const Image = styled.img`
display:flex;
justify-content:center;
align-items:center;
`
const FieldWrapper = styled.div`
width:58vw;
height:68vh;
margin-left: 2vw;
margin-right: 2vw;
margin-top:4vh;
color:white;
display:grid;
grid-template-columns: repeat(5, 5fr);
grid-template-rows: repeat(2, 45%);
grid-column-gap: 15px;
grid-row-gap: 20px;
`

const RoundWrapper = styled.div`
position:absolute;
width: 18vw;
height: 12vh;
margin-top: 4vh;
margin-left: 81vw;
`

const ObjectivesWrapper = styled.div`
color:white;
width: 100%;
height: 100%;
`

const MecatolWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:end;
width:18vw;
height:80vh;
margin-top:6vh;
margin-right: 1vw;
margin-bottom: -1vw;
`


export default SpecificLiveGame