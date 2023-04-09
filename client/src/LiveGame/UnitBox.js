import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";

const UnitBox = ({gameData, playerIndex, unit}) => {

    const [fetchd, setFetchd] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [unitIsScored, setUnitIsScored] = useState(false)

    const handleToggle = () =>{
        if(gameData.players[playerIndex].unitsUpgraded.includes(unit)){
            handleFetch(true)
        }
        else{
            handleFetch(false)
        }
    };

    const handleFetch = (test) => {
        setFetchd(true);
            fetch(`/api/update-live-game/${gameData._id}`, {
                method: "PATCH",
                headers:{Accept: "application/json", "Content-Type": "application/json",},
                body: JSON.stringify({player: gameData.players[playerIndex].nickname , unit: unit, manip: test === false ? "push" : "pull"}),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 400 || data.status === 500){
                    setFetchd(false);
                    throw new Error(data.message);
                }
                else{
                    if(assign === false){
                        setAssign(true);
                    }
                    else if(assign === true){
                        setAssign(false)
                    }
                    setFetchd(false);
                }
            })
            .catch((error) => {
                window.alert(error);
            });
        };

        useEffect(()=>{
            if(gameData.players[playerIndex].unitsUpgraded.includes(unit)){
                setUnitIsScored(true);
            }
            else{
                setUnitIsScored(false);
            }
        }, [handleFetch])

    return (
        <>
            {unitIsScored === true
            ?   <ScoredUnitBoxed  disabled = {fetchd === true} onClick={handleToggle}>{unit}</ScoredUnitBoxed>
            :   <UnitBoxed disabled = {fetchd === true} onClick={handleToggle}>{unit}</UnitBoxed>
        }
        </>
    )

};

const UnitBoxed = styled.button`
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

const ScoredUnitBoxed = styled.button`
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
    background-color: #370D32;
}
&:disabled{
    background-color:grey;
}
`

export default UnitBox;