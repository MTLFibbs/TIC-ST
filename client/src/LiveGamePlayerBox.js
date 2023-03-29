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
font-size:34px;
margin-top:5px;
`
const PlayerScoreBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
font-weight:bold;
font-size:18vh;
`

const FactionImage = styled.img`
`
const PlayerNameText = styled.div`
`
const PlayerScoreText = styled.div`
`

export default LiveGamePlayerBox;