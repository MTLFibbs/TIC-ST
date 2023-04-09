import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";


const RoundCounter = ({gameData}) => {
    
    const [isFetch, setIsFetch] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const increment = "plus"
    const decrement = "minus"

    const round = gameData[0].roundCount;

    const handleRoundChange = (change) => {

        setIsFetch(true);
        fetch(`/api/update-live-game/${gameData[0]._id}`, {
            method: "PATCH",
            headers:{Accept: "application/json", "Content-Type": "application/json",},
            body: JSON.stringify({roundScore: change === increment ? (parseInt(round) + 1) : (parseInt(round) - 1) , manip: "update"}),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === 400 || data.status === 500){
                throw new Error(data.message);
            }
            else{
                if(assign === false){
                    setAssign(true);
                }
                else if(assign === true){
                    setAssign(false)
                }
                setIsFetch(false);
            }
        })
        .catch((error) => {
            window.alert(error);
        });
    };


    return (
        <Wrapper>
            <RoundText>ROUND: {gameData[0].roundCount}</RoundText>
            <RoundWrapper >
                <RoundDecrementer  disabled = {isFetch === true || gameData[0].roundCount === 0 }  onClick = {() => handleRoundChange(decrement)}> - </RoundDecrementer>
                <RoundIncrementer  disabled = {isFetch === true}  onClick = {() => handleRoundChange(increment)}> + </RoundIncrementer>
            </RoundWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100%;
width: 94%;
border: 2px solid white;
border-radius:8px;
box-shadow: 2px 2px 2px white;
font-size:2vw;
font-style:bold;
`
const RoundText = styled.div`
margin:0;
color:white;
`
const RoundWrapper = styled.div`
margin-bottom:0;
`

const RoundIncrementer = styled.button`
width: 2.6vw;
height: 3vh;
color:black;
border-color:white;
cursor:pointer;
background-color: #25282d;
color:white;
&:hover{
    background-color:lightgreen;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`
const RoundDecrementer = styled.button`
height: 3vh;
width:2.6vw;
color:black;
border-color:white;
cursor:pointer;
background-color: #25282d;
color:white;
&:hover{
    background-color:red;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`

export default RoundCounter;