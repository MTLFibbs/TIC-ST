import styled from "styled-components";
import { useEffect, useState } from "react";
import { useContext } from "react";

import { LiveGameContext } from "./LiveGameContext";

const ObjectiveSelectedTile = ({objective,gameData, open, setOpen}) => {
    
    const [objectiveText, setObjectiveText] = useState(null)
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)

    /*const fetchObjectiveData = async () => {
        const selectedObjective = await fetch(`/api/get-public-objective/${objective.objective}`).then((res)=> res.json());
        console.log(selectedObjective.data[0])
        setObjectiveText(selectedObjective.data[0])
        if(selectedObjective.status !== 200) {
            window.alert(selectedObjective.message);
            throw new Error(selectedObjective.message);
        }
    };*/

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
    }, [])

    const handleDeletion = (e) =>{
        fetch(`/api/update-live-game/${gameData._id}`, {
            method: "PATCH",
            headers:{Accept: "application/json", "Content-Type": "application/json",},
            body: JSON.stringify({gameObjective: objective, manip: "pull"}),
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
            <DeleteButton onClick = {handleDeletion}>D</DeleteButton>
            </>
        }
        </Wrapper>
    )
};

const Wrapper = styled.div`
display:table;
margin-left:18px;
height:95%;
width:100%;
text-align:center;
padding-bottom: 20px;
margin:0;
font-size:1.3vw;
padding-right:4px;
padding-left:4px;
`
const Text = styled.div`
display:table-cell;
justify-content:center;
text-align:center;
width:170px;
overflow-wrap: break-word;
`
const LoadedText = styled.div`
display:table-cell;
vertical-align:middle;
text-align:center;
cursor:pointer;
`

const DeleteButton = styled.button`
position:absolute;
margin-top:285px;
margin-left:-25px;
border-radius:30px;
background-color:red;
border:none;
cursor:pointer;
`

export default ObjectiveSelectedTile;