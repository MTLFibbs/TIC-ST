import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//This component shows a player, their faction and their score 
const LiveGamePlayerBox = ({gameData, index}) => {
    
    
    return(
        <Wrapper>
            <PlayerNameBox>
                <PlayerNameText>{gameData.nickname}</PlayerNameText>
                <PlayerFactionText>{gameData.faction}</PlayerFactionText>
            </PlayerNameBox>
            <PlayerScoreBox>
                <PlayerScoreText>{parseInt(gameData.pointsOrigin.mecatolScore)+parseInt(gameData.pointsOrigin.riderScore)+gameData.pointsOrigin.supportedBy.length+gameData.pointsOrigin.secretObjectives.length+gameData.pointsOrigin.publicObjectives.length}
</PlayerScoreText>
                <Supported>👑: {gameData.pointsOrigin.supportedBy.map((e)=> e[0]+e[e.length-1]).join(" / ")}</Supported>
                <Secrets>S: {gameData.pointsOrigin.secretObjectives.length}</Secrets>
            </PlayerScoreBox>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 9vw;
margin:0;
border: 2px solid white;
box-shadow: 2px 2px 2px white;
border-radius: 8px;
color:black;
`
const PlayerNameBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-weight:bold;
font-size:2vw;
margin-top:5px;
`
const PlayerScoreBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-weight:bold;
font-size:12vh;
color:white;
`

const FactionImage = styled.img`
`
const PlayerNameText = styled.div`
font-size: 1vw;
color:white;

`
const PlayerFactionText = styled.div`
font-size: 1vw;
color:white;
`
const PlayerScoreText = styled.div`
margin-bottom: -3vh;
`
const Supported = styled.div`
display:flex;
justify-content:center;
text-align:center;
font-size: 0.7vw;
width: 8vw;
height: 2vh;
font-weight:normal;
margin-top:2vh;
`

const Secrets = styled.div`
display:flex;
justify-content:center;
text-align:center;
font-size: 1vw;
width: 8vw;
height: 2vh;
font-weight:normal;
margin-top:1vh;
`

export default LiveGamePlayerBox;