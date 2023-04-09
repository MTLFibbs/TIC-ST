import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";

const TechBox = ({gameData, playerIndex, tech}) => {

    const [fetchz, setFetchz] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [techIsScored, setTechIsScored] = useState(false)

    const handleToggle = () =>{
        if(gameData.players[playerIndex].techsUpgraded.includes(tech)){
            handleFetch(true)
        }
        else{
            handleFetch(false)
        }
    };

    const handleFetch = (test) => {
        setFetchz(true);
            fetch(`/api/update-live-game/${gameData._id}`, {
                method: "PATCH",
                headers:{Accept: "application/json", "Content-Type": "application/json",},
                body: JSON.stringify({player: gameData.players[playerIndex].nickname , tech: tech, manip: test === false ? "push" : "pull"}),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 400 || data.status === 500){
                    setFetchz(false);
                    throw new Error(data.message);
                }
                else{
                    if(assign === false){
                        setAssign(true);
                    }
                    else if(assign === true){
                        setAssign(false)
                    }
                    setFetchz(false);
                }
            })
            .catch((error) => {
                window.alert(error);
            });
        };

        useEffect(()=>{
            if(gameData.players[playerIndex].techsUpgraded.includes(tech)){
                setTechIsScored(true);
            }
            else{
                setTechIsScored(false);
            }
        }, [handleFetch])

    return (
        <>
            {techIsScored === true
            ?   <ScoredTechBoxed  disabled = {fetchz === true} onClick={handleToggle}>{tech}</ScoredTechBoxed>
            :   <TechBoxed disabled = {fetchz === true} onClick={handleToggle}>{tech}</TechBoxed>
        }
        </>
    )

};

const TechBoxed = styled.button`
display:flex;
align-items:center;
justify-content:center;
height:7vh;
width: 10vw;
background-color:blue;
border: 2px solid white;
border-radius:8px;
cursor:pointer;
color:white;
&:hover{
    background-color: #370D32;
}
&:disabled{
    background-color:grey;
}
`

const ScoredTechBoxed = styled.button`
display:flex;
align-items:center;
justify-content:center;
height:7vh;
width: 10vw;
background-color:green;
border: 2px solid white;
border-radius:8px;
cursor:pointer;
color:white;
&:hover{
    background-color:pink;
}
&:disabled{
    background-color:grey;
}
`

export default TechBox;