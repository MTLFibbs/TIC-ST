import styled from "styled-components";
import { useContext } from "react";
import { LiveGameContext } from "./LiveGameContext";
import { useEffect, useState } from "react";


const ThroneButton = ({nickname,supportedName, supporterName, gameData}) =>{

    const [fetches, setFetches] = useState(false);
    const {assign} = useContext(LiveGameContext)
    const {setAssign} = useContext(LiveGameContext)
    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    };

    useEffect(()=>{
        /*setFetches(true);
        if(toggle === true){
            fetch(`/api/update-live-game/${gameData._id}`, {
                method: "PATCH",
                headers:{Accept: "application/json", "Content-Type": "application/json",},
                body: JSON.stringify({throneSupporter: supporterName , throneTarget: supportedName, manip: "push"}),
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
                    setFetches(false);
                }
            })
            .catch((error) => {
                window.alert(error);
            });
        }
        else if(toggle === false){
        if(toggle === true){
            fetch(`/api/update-live-game/${gameData._id}`, {
                method: "PATCH",
                headers:{Accept: "application/json", "Content-Type": "application/json",},
                body: JSON.stringify({ThroneSupporter: supporterName , ThroneTarget: supportedName, manip: "pull"}),
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
                    setFetches(false);
                }
            })
            .catch((error) => {
                window.alert(error);
            });
        }
        }*/
    }, [handleToggle])

    return(
        <>
        {toggle === false
        ?<FalseButton onClick = {handleToggle}>{nickname}</FalseButton>
        :<TrueButton onClick = {handleToggle}>{nickname}</TrueButton>
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