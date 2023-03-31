import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";

import { LiveGameContext } from "./LiveGameContext";
import LiveGamePlayerBox from "./LiveGamePlayerBox";
import LiveGameMecatolCounter from "./LiveGameMecatolCounter";
import LiveGameThroneCounter from "./LiveGameThroneCounter";
import ObjectiveTile from "./ObjectiveTile";

const SpecificLiveGame = () => {

    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const {_id} = useParams();
    const [gameData, setGameData] = useState(null);
    const [objectiveData, setObjectiveData] = useState(null);

    const objectiveAmount = [1,2,3,4,5,6,7,8,9,10];

    const fetchAll = async () => {
        const game = await fetch(`/api/get-live-game/${_id}`).then((res)=> res.json());
        if(game.status !== 200) {
            window.alert(game.message);
            throw new Error(game.message);
        }
        setGameData(game.data);
        const objectives = await fetch(`/api/get-objectives`).then((res)=>res.json());
        if(objectives.status !== 200) {
            window.alert(objectives.message);
            throw new Error(objectives.message);
        }
        setObjectiveData(objectives.data);
    };

    const fetchGameData = async () => {
        const game = await fetch(`/api/get-live-game/${_id}`).then((res)=> res.json());
        if(game.status !== 200) {
            window.alert(game.message);
            throw new Error(game.message);
        }
    };

    useEffect(()=> {
        fetchAll();
    }, []);

    useEffect(()=> {
        fetchAll();
    }, [assign]);

    return(
        <Wrapper>
            {((!gameData && !objectiveData)|| (gameData && !objectiveData)|| (!gameData && objectiveData))
            ? <p>LOADING</p>
            :
            <>
            <PlayersWrapper>
            {gameData[0].players.map((e,i)=>{
                return <LiveGamePlayerBox key = {i} gameData = {gameData[0].players[i]}></LiveGamePlayerBox>
            })}
            </PlayersWrapper>
            <FieldWrapper>
                {objectiveAmount.map((e,i)=>{
                    return(
                        <ObjectiveTile key = {i} gameData = {gameData[0]} number = {objectiveAmount[i]} objectiveData = {objectiveData.public} drawn = {gameData[0].drawnObjectives}/>
                    )
                })}
            </FieldWrapper>
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
background-color:orange;
`

const PlayersWrapper = styled.div`
background-color: red;
width:18vw;
height:80vh;
margin-top:4vh;
margin-left: 1vw;
color:white;
display:grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 33%);
grid-gap: 5px;
`

const FieldWrapper = styled.div`
width:58vw;
height:68vh;
margin-left: 2vw;
margin-right: 2vw;
margin-top:16vh;
background-color:blue;
color:white;
display:grid;
grid-template-columns: repeat(5, 5fr);
grid-template-rows: repeat(2, 45%);
grid-column-gap: 15px;
grid-row-gap: 20px;

`

const ObjectivesWrapper = styled.div`
background-color: blue;
color:white;
width: 100%;
height: 100%;
`

const MecatolWrapper = styled.div`
background-color:grey;
width:18vw;
height:80vh;
margin-top:4vh;
margin-right: 1vw;
`



export default SpecificLiveGame