import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";

import SecretsButton from "./SecretsButton";

const SecretObjectivesWrapper = ({gameData, secretData, secretsDrawn}) => {
    return (
        <Wrapper>
            <TitleText>Secret Objectives Attribution List</TitleText>
            <ButtonWrapper>
            {gameData.players.map((e,i) =>{
            return (
                <SecretsButton key = {i} playerIndex = {i} secretData = {secretData} gameData = {gameData} playerName = {e.nickname} faction = {e.faction} nickname = {e.nickname.charAt(0) + e.nickname.charAt(e.nickname.length-1)} />
            )})}
            </ButtonWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.button`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:10vh;
width: 15vw;
border: 2px solid black;
border-radius:8px;
box-shadow: 4px 5px 5px black;
font-style:bold;
margin-left: 2vw;
margin-top: -2vh;
background-color: lightblue;
`
const TitleText = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size: 0.9vw;
`
const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
`
/*
const TechButton = styled.button`
height: 3vh;
width:2.6vw;
margin-top: -1vh;
font-size:0.8vw;
color:black;
border-color:black;
cursor:pointer;
background-color:rgb(0,200,0,0.5);
&:hover{
    background-color:pink;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`
*/

export default SecretObjectivesWrapper;