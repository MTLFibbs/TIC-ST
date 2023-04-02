import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LiveGameContext } from "../LiveGameContext";

import LiveGameCreateForm from "./LiveGameCreateForm";

const LiveGameCreateButton = ({factions}) => {

    const [isFetching, setIsFetching] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [form, setForm] = useState({
        gameName:"",
        host:"Fibbs",
        playerAmount:"3",
        player1:"Fibbs",

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const ordered = Object.keys(form).sort().reduce(
            (obj, key) => { 
            obj[key] = form[key]; 
            return obj;
        }, 
        {}
        );
        
        const playerCount = ordered.playerAmount;
        const gameName = ordered.gameName;
        const host = ordered.host;
        
        const playerOne = form.player1;
        const playerTwo = form.player2;
        const playerThree = form.player3;
        const playerFour = form.player4;
        const playerFive = form.player5;
        const playerSix = form.player6;
        
        const newSet = {$set:{gameName:gameName, host: host, playerCount:playerCount, 
            players:{
                [playerOne]:form.faction1,
                [playerTwo]:form.faction2,
                [playerThree]:form.faction3,
                [playerFour]:form.faction4,
                [playerFive]:form.faction5,
                [playerSix]:form.faction6,
            }
        }};

        console.log(newSet.$set);
        
        setIsFetching(true)

        fetch(`/api/add-new-live-game`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSet.$set)
        })
            .then(res => res.json())
            .then((data) => {
                if(data.status === 400 || data.status === 500){
                    throw new Error(data.message);
                }
                else{
                    navigate(`/`)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            setIsFetching(false);
            
    };


    const handlePopup = (e) => {
        if(show === false){
            setShow(true);
        }
        else if(show === true && e.target.id === "closeButton"){
            setShow(false);
        }
    }

    return (
        <Wrapper id = "wrapper" disabled = {isFetching === true} onClick = {(e) => handlePopup(e)}>
            <TitleText>Create</TitleText>
            {show === true && isFetching === false
            ?<PopUpHandler id = "popUpHandler">
                <PopUp id = "popUp" >
                    <PopUpText>Game Setup</PopUpText>
                    <LiveGameCreateForm isFetching = {isFetching} setIsFetching = {setIsFetching} form = {form} setForm = {setForm} factions = {factions}/>
                    <PopUpPost form = "my-form" id = "postButton" onClick = {handleSubmit} type = "submit">Create</PopUpPost>
                    <PopUpButton disabled = {isFetching === true} id = "closeButton" onClick = {(e) => handlePopup(e)}>Cancel</PopUpButton>
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
border: 2px solid black;
border-radius:8px;
box-shadow: 4px 5px 5px black;
font-style:bold;
color:white;
margin-left: 27vw;
margin-top: -3vh;
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
border: 2px solid black;
`

const PopUpButton = styled.button`
display:flex;
position:absolute;
justify-content:center;
align-items:center;
text-align:center;
height: 4vh;
width:8vw;
margin-top: 83vh;
margin-left:15vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(200,0,0,0.5);
cursor:pointer;
&:hover{
    background-color:pink;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`
const PopUpPost = styled.button`
display:flex;
position:absolute;
justify-content:center;
align-items:center;
text-align:center;
height: 4vh;
width:8vw;
margin-top: 83vh;
margin-left:-15vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(0,200,0,0.5);
cursor:pointer;
&:hover{
    background-color:pink;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`

export default LiveGameCreateButton;