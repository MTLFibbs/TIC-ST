import styled from "styled-components";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { LiveGameContext } from "../LiveGameContext";
import ObjectiveButtonWrapper from "./ObjectiveButtonWrapper";

const ObjectiveSelectedTile = ({objective,gameData, open, setOpen}) => {
    
    const [objectiveText, setObjectiveText] = useState(null)
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)

    useEffect(() => {
        fetch(`/api/get-public-objective/${objective}`)
        .then(res => res.json())
        .then((data)=>{
            if(data.status === 400 || data.status === 500){
                throw new Error(data.message);
            }
            setObjectiveText(data.data)
        })
        .catch((error)=>{
            window.alert(error);
        })
    }, [objective])

    const handleDeletion = (e) =>{
        fetch(`/api/update-live-game/${gameData._id}`, {
            method: "PATCH",
            headers:{Accept: "application/json", "Content-Type": "application/json",},
            body: JSON.stringify({gameObjective: objective, objectiveValue: objectiveText[0].objectiveValue, manip: "pull"}),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === 400 || data.status === 500){
                throw new Error(data.message);
            }
            else{
                if(assign === false){
                    setAssign(true);
                    setOpen(false);
                }
                else if(assign === true){
                    setAssign(false)
                    setOpen(false);
                }
            }
        })
        .catch((error) => {
            window.alert(error);
        });
    };

    return(
        <Wrapper>
        {!objectiveText
            ?<Text>LOADING</Text>
            :
            <>
            <LoadedText>{objectiveText[0].objectiveText}</LoadedText>
            <ObjectiveButtonWrapper objectiveTitle = {objectiveText[0].objectiveName} objectiveValue = {objectiveText[0].objectiveValue} gameData = {gameData} />
            <DeleteButton onClick = {handleDeletion}>D</DeleteButton>
            </>
        }
        </Wrapper>
    )
};

const Wrapper = styled.div`
margin-left:18px;
height:95%;
width:100%;
margin:0;
font-size:1.3vw;
padding-right:4px;
padding-left:4px;
`
const Text = styled.div`
justify-content:center;
text-align:center;
width:170px;
overflow-wrap: break-word;
`
const LoadedText = styled.div`
display:flex;
height: 22vh;
justify-content:center;
align-items:center;
text-align:center;
cursor:pointer;
`

const DeleteButton = styled.button`
position:absolute;
margin-top:-25.5vh;
margin-left:0vw;
border-radius:30px;
width:1.2vw;
height:2vh;
font-size: 0.8vw;
background-color:red;
border:none;
display:flex;
text-align:center;
justify-content:center;
align-items:center;
cursor:pointer;
`

export default ObjectiveSelectedTile;