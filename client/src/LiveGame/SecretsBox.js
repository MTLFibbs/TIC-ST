import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";

const SecretsBox = ({gameData, playerIndex, secret}) => {

    const [fetchz, setFetchz] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [secretIsScored, setSecretIsScored] = useState(false)

    const handleToggle = () =>{
        if(gameData.players[playerIndex].pointsOrigin.secretObjectives.includes(secret)){
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
                body: JSON.stringify({player: gameData.players[playerIndex].nickname , playerIndex: playerIndex, secret: secret, manip: test === false ? "push" : "pull"}),
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
            if(gameData.players[playerIndex].pointsOrigin.secretObjectives.includes(secret)){
                setSecretIsScored(true);
            }
            else{
                setSecretIsScored(false);
            }
        }, [handleFetch])

    return (
        <>
            {secretIsScored === true
            ?   <ScoredSecretBoxed  disabled = {fetchz === true} onClick={handleToggle}>{secret}</ScoredSecretBoxed>
            :   <SecretBoxed disabled = {fetchz === true} onClick={handleToggle}>{secret}</SecretBoxed>
        }
        </>
    )

};

const SecretBoxed = styled.div`
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
    background-color:pink;
}
&:disabled{
    background-color:grey;
}
`

const ScoredSecretBoxed = styled.div`
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

export default SecretsBox;