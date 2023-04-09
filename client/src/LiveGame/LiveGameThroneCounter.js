import styled from "styled-components";
import { useEffect, useState } from "react";

import ThroneButtonWrapper from "./ThroneButtonWrapper";

const LiveGameThroneCounter = ({gameData}) => {


    return(
        <Wrapper>
            <ThroneNameBox>
                <TitleText>👑 THRONE SUPPORT COUNTER 👑</TitleText>
            </ThroneNameBox>
            <PlayerBox>
                {gameData.players.map((e,i)=>{
                    return(
                        <ThroneButtonWrapper key = {i} name = {e.nickname} gameData = {gameData} index = {i} />
                    )
                })}
            </PlayerBox>
        </Wrapper>
    )
};

const Wrapper = styled.div`
border: 2px solid white;
box-shadow: 2px 2px 2px white;
border-radius: 8px;
height: 40%;
margin-bottom: 20px;
`
const ThroneNameBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const TitleText = styled.div`
font-weight:bold;
font-size: 1.0vw;;
margin-top: 0.5vh;
color:white;
`
const PlayerBox = styled.div`
display:grid;
flex-direction:column;
justify-content:space-between;
grid-template-columns: repeat(2, 2fr);
grid-template-rows: repeat(3,2fr);
height: 80%;
margin-top: 1vh;
margin-left: 1vw;
font-size:1.3vw;
color:white;
`
const PlayerNameText = styled.div`
display:flex;
justify-content:center;
color:white;
`
const PlayerScoreText = styled.div`
`
const MapWrapper = styled.div`
width:70%;
`

const ButtonWrapper = styled.div`
display:grid;
align-items: center;
grid-template-columns: repeat(3, 2vw);
grid-template-rows: repeat(2,5fr);
`
const PlayerButtons = styled.button`
`

export default LiveGameThroneCounter;