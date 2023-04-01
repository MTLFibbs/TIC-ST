import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";

import TechnologyButton from "./TechnologyButton";

const TechnologyWrapper = ({gameData, techData, unitData}) => {

    const [show, setShow] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)

    const handleGlobalTechs = () => {

    }
        
    return (
        <Wrapper>
            
            <TitleText>Technology Attribution List</TitleText>
            <ButtonWrapper>
            {gameData[0].players.map((e,i) =>{
            return (
                <TechnologyButton key = {i} playerIndex = {i} unitData = {unitData} techData = {techData} gameData = {gameData} playerName = {e.nickname} faction = {e.faction} nickname = {e.nickname.charAt(0) + e.nickname.charAt(e.nickname.length-1)} />
            )})}
            </ButtonWrapper>
        </Wrapper>
    )
};


const Wrapper = styled.div`
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
font-size: 1vw;
`
const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
`

const PopUpHandler = styled.div`
display: block;
position: fixed;
padding-top: 250px;
top: 0; left: 0;
width: 100%; height: 100%;
background-color: rgba(0 ,0 ,0 , 0.5);
`
const PopUp = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
flex-direction:column;
z-index: 50;
margin: auto;
width: 50%;
height: 80%;
background-color: rgba(0 ,0 ,0 , 0.95);
color:white;
border-radius: 8px;
border: 2px solid black;
`

const PopUpButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
height: 3vh;
width:2.6vw;
margin-top: 1vh;
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


export default TechnologyWrapper;