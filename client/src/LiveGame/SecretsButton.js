import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";
import SecretsGlobalPopupList from "./SecretsGlobalPopupList";

const SecretsButton = ({playerIndex, secretData, gameData, playerName, faction, nickname}) => {
    
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
                    <TitleText>Secret Objectives for {playerName}</TitleText>
                    <SecretsGlobalPopupList playerIndex = {playerIndex} secretData = {secretData} gameData = {gameData}/>
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
border:1px solid black;
cursor:pointer;
&:hover{
    background-color:pink;
}
margin-left: 0.2vw;
margin-right: 0.2vw;
`
const TitleText = styled.div`
margin-top :1vh;
font-size: 1vw;
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
width: 45%;
height: 80%;
background-color: rgba(0 ,0 ,0 , 0.95);
color:white;
border-radius: 8px;
border: 2px solid black;
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
margin-left:41vw;
font-size:0.8vw;
color:white;
border-color:black;
background-color:rgb(0,200,0,0.5);
cursor:pointer;
&:hover{
    background-color:pink;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`

export default SecretsButton;