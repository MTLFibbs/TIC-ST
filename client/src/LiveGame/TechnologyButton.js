import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";

import TechnologiesGlobalPopupList from "./TechnologiesUnitsPopupList";
//This component opens the technologies popup for each player
const TechnologyButton = ({playerIndex, gameData, playerName, nickname, techData, faction, unitData}) => {
    
    const [show, setShow] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)


    const handlePopup = (e) => {
        if(show === false){
            setShow(true);
        }
        else if(show === true && e.target.id === "closeButton"){
            setShow(false);
        }
    }

    return(
        <Wrapper onClick = {handlePopup}>
            {nickname}
        {show === true
            ?<PopUpHandler>
                <PopUp>
                    <TitleText>Technologies and Unit Upgrades for {playerName}</TitleText>
                    <TechnologiesGlobalPopupList playerIndex = {playerIndex} unitData = {unitData} faction = {faction} techData = {techData} gameData = {gameData}/>
                    <PopUpButton id = "closeButton" onClick = {(e) => handlePopup(e)}>Close</PopUpButton>
                </PopUp>
            </PopUpHandler>
            : <></>
        }
        </Wrapper>
    )
};

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width: 1.8vw;
height: 2.2vh;
margin-bottom: 0.4vh;
margin-top: 0.4vh;
background-color:transparent;
border:1px solid white;
color:white;
cursor:pointer;
&:hover{
    background-color: #370D32;
}
margin-left: 0.2vw;
margin-right: 0.2vw;
`
const TitleText = styled.div`
margin-top :1vh;
font-size: 1vw;
color:white;
`

const PopUpHandler = styled.div`
display: block;
position: fixed;
padding-top: 250px;
top: 0; left: 0;
width: 100%; 
height: 100%;
background-color: rgba(0 ,0 ,0 , 0.5);
`
const PopUp = styled.div`
display:flex;
justify-content:start;
align-items:center;
text-align:top;
flex-direction:column;
z-index: 50;
margin: auto;
width: 80%;
height: 80%;
background-color: #25282d;
color:white;
border-radius: 8px;
border: 2px solid white;
`

const PopUpButton = styled.button`
display:flex;
position:absolute;
justify-content:center;
align-items:center;
text-align:center;
height: 3vh;
width:2.6vw;
margin-top: 54.5vh;
margin-left: 75.5vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(0,200,0,0.5);
cursor:pointer;
&:hover{
    background-color: #370D32;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`


export default TechnologyButton;