import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { User, useAuth0 } from "@auth0/auth0-react";

import LiveGameCreateForm from "./LiveGameCreateForm";

const LiveGameCreateButton = ({factions}) => {
    
    const {user} = useAuth0();

    const [isFetching, setIsFetching] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [form, setForm] = useState({
        gameName:"",
        host:`${user.nickname}`,
        playerAmount:"3",
        player1:`${user.nickname}`,

    });

    


    const handlePopup = (e) => {
        if(show === false){
            setShow(true);
        }
        else if(show === true && e.target.id === "closeButton"){
            setShow(false);
            setForm({
                gameName:"",
                host:`${user.nickname}`,
                playerAmount:"3",
                player1:`${user.nickname}`,
            })
        }
    }

    return (
        <Wrapper id = "wrapper" disabled = {isFetching === true} onClick = {(e) => handlePopup(e)}>
            <TitleText>Create</TitleText>
            {show === true && isFetching === false
            ?<PopUpHandler id = "popUpHandler">
                <PopUp id = "popUp" >
                    <PopUpText>Game Setup</PopUpText>
                    <LiveGameCreateForm handlePopup = {handlePopup} isFetching = {isFetching} setIsFetching = {setIsFetching} form = {form} setForm = {setForm} factions = {factions}/>
                </PopUp>
            </PopUpHandler>
            : <></>
        }
        </Wrapper>
    )
};

const Wrapper = styled.div`
display:flex;
position:absolute;
flex-direction:column;
justify-content:center;
align-items:center;
height:3vh;
width: 4vw;
border: 2px solid white;
border-radius:8px;
box-shadow: 2px 2px 2px white;
font-style:bold;
color:white;
margin-left: 27vw;
margin-top: -7.5vh;
cursor:pointer;
background-color: rgb(50,200,50,1);
`
const TitleText = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size: 0.9vw;
`
const PopUpText = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size: 1.5vw;
margin-top: 2vh;
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
margin-top: -20vh;
width: 70%;
height: 120%;
background-color: rgba(0 ,0 ,0 , 0.95);
color:white;
border-radius: 8px;
border: 2px solid white;
background-color: #370D32;
`




export default LiveGameCreateButton;