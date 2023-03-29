import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LiveGamePlayerBox from "./LiveGamePlayerBox";
import LiveGameMecatolCounter from "./LiveGameMecatolCounter";
import LiveGameThroneCounter from "./LiveGameThroneCounter";

const SpecificLiveGame = () => {

    const {_id} = useParams();

    const [gameData, setGameData] = useState(null);

    useEffect(()=> {
        fetch(`/api/get-live-game/${_id}`)
        .then(res=> res.json())
        .then((data)=>{
            setGameData(data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return(
        <Wrapper>
            {!gameData
            ? <p>LOADING</p>
            :
            <>
            <PlayersWrapper>
            {gameData[0].players.map((e,i)=>{
                return <LiveGamePlayerBox key = {i} gameData = {gameData[0].players[i]}></LiveGamePlayerBox>
            })}
            </PlayersWrapper>
            <FieldWrapper>
                <ObjectivesWrapper>POG</ObjectivesWrapper>
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
height:80vh;
margin-left: 2vw;
margin-right: 2vw;
margin-top:4vh;
background-color:black;
color:white;
`

const ObjectivesWrapper = styled.div`
background-color: blue;
color:white;

`

const MecatolWrapper = styled.div`
background-color:grey;
width:18vw;
height:80vh;
margin-top:4vh;
margin-right: 1vw;
`



export default SpecificLiveGame