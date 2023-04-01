import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "../LiveGameContext";
import { useEffect, useState } from "react";


const ThroneButton = ({index,nickname,supportedName, supporterName, gameData}) =>{

    const [fetches, setFetches] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)

    const handleToggle = () =>{
        if(gameData.players[index].pointsOrigin.supportedBy.includes(supporterName)){
            handleFetch(true)
        }
        else{
            handleFetch(false)
        }
    };

    const handleFetch = (test) => {
        setFetches(true);
            fetch(`/api/update-live-game/${gameData._id}`, {
                method: "PATCH",
                headers:{Accept: "application/json", "Content-Type": "application/json",},
                body: JSON.stringify({throneSupporter: supporterName , throneTarget: supportedName, manip: test === false ? "push" : "pull"}),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === 400 || data.status === 500){
                    setFetches(false);
                    throw new Error(data.message);
                }
                else{
                    if(assign === false){
                        setAssign(true);
                    }
                    else if(assign === true){
                        setAssign(false)
                    }
                    setFetches(false);
                }
            })
            .catch((error) => {
                window.alert(error);
            });
        }

    return(
        <>
        {//toggle === false
        //?<FalseButton  disabled= {fetches === true} onClick = {handleToggle}>{nickname}</FalseButton>
        <TrueButton  disabled= {fetches === true} onClick = {handleToggle}>{nickname}</TrueButton>
        }

        </>
    )
};

const FalseButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
width: 1.8vw;
height: 2.2vh;
margin-bottom: 0.4vh;
background-color:transparent;
&:hover{
    background-color:pink;
}
`
const TrueButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
width: 1.8vw;
height: 2.2vh;
margin-bottom: 0.4vh;
background-color:rgb(50, 0, 50, 0.3);
&:hover{
    background-color:pink;
}
`
export default ThroneButton;