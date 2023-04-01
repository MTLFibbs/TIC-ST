import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
                <Supported>👑: {gameData.pointsOrigin.supportedBy.join(" / ")}</Supported>
            </PlayerScoreBox>
        </Wrapper>
    )
};

const Wrapper = styled.div`
border: 2px solid black;
box-shadow: 4px 5px 5px black;
border-radius: 8px;
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
`

const FactionImage = styled.img`
`
const PlayerNameText = styled.div`
`
const PlayerFactionText = styled.div`
font-size: 1vw;
`
const PlayerScoreText = styled.div`
margin-bottom: -3vh;
`
const Supported = styled.div`
display:flex;
justify-content:center;
text-align:center;
font-size: 1vw;
width: 8vw;
height: 2vh;
font-weight:normal;
margin-top:1.5vh;
`

export default LiveGamePlayerBox;