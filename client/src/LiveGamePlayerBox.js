import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LiveGamePlayerBox = ({gameData}) => {
    

    return(
        <Wrapper>
            <PlayerNameBox>
                <PlayerNameText>{gameData.nickname}</PlayerNameText>
            </PlayerNameBox>
            <PlayerScoreBox>
                <PlayerScoreText>{gameData.points}</PlayerScoreText>
                <Supported>Th: {gameData.pointsOrigin.supportedBy.join(" / ")}</Supported>
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
flex-direction:row;
justify-content:center;
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
font-size:18vh;
`

const FactionImage = styled.img`
`
const PlayerNameText = styled.div`
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
`

export default LiveGamePlayerBox;