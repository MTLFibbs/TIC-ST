import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";

const ObjectiveButton = ({index, objectiveValue, nickname,gameData,scorerName, objective}) => {
    
    const [fetcherino, setFetcherino] = useState(false)
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [scored, setScored] = useState(false);
    
    const handleChange = () => {
        if(scored === true){
            handleObjectiveScore(true);
        }
        else{
            handleObjectiveScore(false);
        }
    }

    const handleObjectiveScore = (test) => {
        setFetcherino(true);
            fetch(`/api/update-live-game/${gameData._id}`, {
                method: "PATCH",
                headers:{Accept: "application/json", "Content-Type": "application/json",},
                body: JSON.stringify({scorerName: scorerName , scoredObjective: objective, objectiveValue: objectiveValue, manip: test === false ? "push" : "pull"}),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 400 || data.status === 500){
                    setFetcherino(false);
                    throw new Error(data.message);
                }
                else{
                    if(assign === false){
                        setAssign(true);
                    }
                    else if(assign === true){
                        setAssign(false)
                    }
                    setFetcherino(false);
                }
            })
            .catch((error) => {
                window.alert(error);
            });
    };

    useEffect(()=>{
        if(gameData.players[index].pointsOrigin.publicObjectives.includes(objective)){
            setScored(true);
        }
        else{
            setScored(false);
        }
    }, [handleObjectiveScore])
    
    return (
        <>
        {scored === true
            ?<ScoredButton  disabled = {fetcherino === true} onClick = {handleChange}>{nickname}</ScoredButton>
            :<UnscoredButton disabled = {fetcherino === true} onClick = {handleChange}>{nickname}</UnscoredButton>
        }

        </>

    )
};

const ScoredButton = styled.button`
display:inline-block;
margin-right: 0.4vw;
text-align:center;
padding: 0px;
justify-content:center;
align-items:center;
cursor:pointer;
width: 1.4vw;
height: 2.2vh;
margin-bottom: 0.4vh;
color:white;
border-color:white;
background-color:rgb(0, 150, 0, 1);
&:hover{
    background-color:lightgreen;
}
`
const UnscoredButton = styled.button`
display:inline-block;
margin-right: 0.4vw;
text-align:center;
padding: 0px;
justify-content:center;
align-items:center;
cursor:pointer;
width: 1.4vw;
height: 2.2vh;
margin-bottom: 0.4vh;
color:white;
border-color:white;
background-color:rgb(0, 0, 0, 0.3);
&:hover{
    background-color:lightgreen;
}
`



export default ObjectiveButton;