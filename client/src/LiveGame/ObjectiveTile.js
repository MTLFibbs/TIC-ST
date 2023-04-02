import styled from "styled-components";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { LiveGameContext } from "../LiveGameContext";
import Select from 'react-select'
import ObjectiveSelectedTile from "./ObjectiveSelectedTile";

const ObjectiveTile = ({gameData, number, objectiveData, drawn}) => {

    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [exists, setExists] = useState(null);
    const [open, setOpen] = useState(false);
    const [specificObjective, setSpecificObjective] = useState(null);

    const options = objectiveData.map((e,i)=>{
        return {gameObjective: e.objectiveName, label:e.objectiveName}
    });

    const handleOpen = () => {
        if(open === false){
            setOpen(true)
        }
    };

    const handleObjectiveChange = (selectedOption) => {
        if(drawn[(parseInt(number) -2)] === undefined && number != 1){
            setOpen(false);
            window.alert("Objectives must be entered in order")
        }
        else{
            //console.log("handlechange", selectedOption);
            fetch(`/api/update-live-game/${gameData._id}`, {
                method: "PATCH",
                headers:{Accept: "application/json", "Content-Type": "application/json",},
                body: JSON.stringify({gameObjective: selectedOption.gameObjective, manip: "push"}),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 400 || data.status === 500){
                    throw new Error(data.message);
                }
                else{
                    setSpecificObjective(data.targetedObjective)
                    if(assign === false){
                        setAssign(true);
                    }
                    else if(assign === true){
                        setAssign(false)
                    }
                }
            })
            .catch((error) => {
                window.alert(error);
            });
        }
    }

    const falsyChecker = () => {
        if(typeof drawn[(parseInt(number)-1)] !== "undefined") {
            setExists(true);
        }
        else {
            setExists(false);
        }
    };

    useEffect(()=> {
        falsyChecker();
    }, [handleObjectiveChange]);

    return(
        <Wrapper>
            {exists === false || exists === null
            ?
            <>
            <ObjectiveNameBox>
                <ObjectiveNameText>Objective {number}</ObjectiveNameText>
            </ObjectiveNameBox>
            <ObjectiveTextBox>
                <ObjectiveBoxText disabled = {drawn[(parseInt(number) -2)] === undefined && number != 1} onClick = {handleOpen}>
                    {open === false || (drawn[(parseInt(number) -2)] === undefined && number != 1)
                        ?
                        <>
                        </>
                        :
                        <Select onChange = {handleObjectiveChange} options = {options}/>
                    }
                </ObjectiveBoxText>
            </ObjectiveTextBox>
            </>
            :
            <>
            <ObjectiveNameBox>
                <SelectedObjectiveNameText>{drawn[(parseInt(number)-1)]}</SelectedObjectiveNameText>
            </ObjectiveNameBox>
            <ObjectiveTextBox>
                <ObjectiveSelectedTile open = {open} setOpen = {setOpen} gameData = {gameData} objective = {drawn[(parseInt(number)-1)]}/>
            </ObjectiveTextBox>
            </>
            }

        </Wrapper>
    )
};

const Wrapper = styled.div`
border: 2px solid black;
box-shadow: 4px 5px 5px black;
border-radius: 8px;
&:hover{
    background-color: pink;
}
`
const ObjectiveNameBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
font-weight:bold;
font-size:1.2vw;
margin-top:5px;
height:10%;
padding-top:1vh;
`
const ObjectiveTextBox = styled.div`
font-weight:bold;
height:90%;

`
const PopupWrapper = styled.div`
`

const FactionImage = styled.img`
`
const ObjectiveNameText = styled.div`
`
const SelectedObjectiveNameText = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
font-size:80%;
`
const ObjectiveBoxText = styled.button`
height:96%;
width: 100%;
font-size:1vw;
background-color: transparent;
border-color:transparent;
border-radius:15px;
cursor:pointer;
&:disabled{
background: repeating-linear-gradient(
-45deg,
transparent,
transparent 4px,
transparent 1px,
green 7px
),
linear-gradient(
to bottom,
transparent,
transparent
)
}
`
const NameList = styled.select`
list-style-type: none;
font-size:0.5vw;
width: 100%;
`

export default ObjectiveTile