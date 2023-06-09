import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";
//This component hosts the counting of the points from Mecatol Rex in the SpecificLiveGame
const LiveGameMecatolCounter = ({gameData}) => {

    const [isFetching, setIsFetching] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const increment = "plus"
    const decrement = "minus"

    const handleMecatolChange = ( change, name, score) => {
        setIsFetching(true);
                fetch(`/api/update-live-game/${gameData._id}`, {
                    method: "PATCH",
                    headers:{Accept: "application/json", "Content-Type": "application/json",},
                    body: JSON.stringify({nickname: name , mecatolScore: change === increment ? (parseInt(score) + 1) : (parseInt(score) - 1) , manip: "update"}),
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
                        setIsFetching(false);
                    }
                })
                .catch((error) => {
                    window.alert(error);
                });
        };
    

    return(
        <Wrapper>
            <MecatolNameBox>
                <TitleText>MECATOL COUNTER</TitleText>
            </MecatolNameBox>
            <PlayerBox>
                {gameData.players.map((e,i)=>{
                    return(
                        <MapWrapper key={i}>
                        <PlayerNameText >{e.nickname.charAt(0) + e.nickname.charAt(e.nickname.length-1)}: {e.pointsOrigin.mecatolScore}</PlayerNameText>
                        <ScoreWrapper >
                            <ScoreDecrementer key = {`decrementer number ${i}`}  disabled = {e.pointsOrigin.mecatolScore === 0 || isFetching} onClick = {() => handleMecatolChange(decrement, e.nickname, e.pointsOrigin.mecatolScore)}> - </ScoreDecrementer>
                            <ScoreIncrementer key = {`incrementer number ${i}`} disabled = {e.pointsOrigin.mecatolScore === 10 || isFetching} onClick = {() => handleMecatolChange(increment, e.nickname, e.pointsOrigin.mecatolScore)}> + </ScoreIncrementer>
                        </ScoreWrapper>
                        </MapWrapper>
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
const MecatolNameBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const TitleText = styled.div`
font-weight:bold;
font-size: 1.5vw;
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
font-size:1vw;
`
const PlayerNameText = styled.div`
color:white;
`
const PlayerScoreText = styled.div`
`

const ScoreWrapper = styled.div`
margin-top:0vh;
margin-bottom:0;
`

const MapWrapper = styled.div`
overflow:hidden;
`

const ScoreIncrementer = styled.button`
width: 1.6vw;
cursor:pointer;
background-color: #25282d;
color:white;
border-color:white;
&:hover{
    background-color:lightgreen;
}
`
const ScoreDecrementer = styled.button`
width:1.6vw;
cursor:pointer;
background-color: #25282d;
color:white;
border-color:white;
&:hover{
    background-color:red;
}
`

export default LiveGameMecatolCounter;