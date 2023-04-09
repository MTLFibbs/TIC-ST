import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({gameData}) => {

    const [isFetching, setIsFetching] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handlePopup = (e) => {
        if(show === false){
            setShow(true);
        }
        else if(show === true && e.target.id === "closeButton"){
            setShow(false);
        }
    }

    const handleDeletion = () => {
        setIsFetching(true);
        fetch(`/api/delete-live-game/${gameData._id}`,{
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({_id: gameData._id}),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 400 || data.status === 500 ) {
                window.alert(data.message);
                setIsFetching(false);
            }
            else{
                setIsFetching(false);
                navigate(`/livegames/${gameData.host}`)
            }
        })
        .catch((error) => {
            window.alert(error);
        });
    };

    return (
        <Wrapper onClick = {handlePopup}>
            <TitleText>Delete</TitleText>
            {show === true
            ?<PopUpHandler>
                <PopUp>
                    <PopUpText>Are you sure you want to delete this live game?</PopUpText>
                    <PopUpDelete onClick = {handleDeletion}>Delete</PopUpDelete>
                    <PopUpButton id = "closeButton" onClick = {(e) => handlePopup(e)}>Cancel</PopUpButton>
                </PopUp>
            </PopUpHandler>
            : <></>
        }
        </Wrapper>
    )
};


const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:5vh;
width: 10vw;
border: 2px solid white;
border-radius:8px;
box-shadow: 2px 2px 2px white;
font-style:bold;
color:white;
margin-left: 3.5vw;
margin-top: 0vh;
cursor:pointer;
background-color: rgb(255,0,0,1);
`
const TitleText = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size: 0.9vw;
`
const PopUpText = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size: 1.5vw;
margin-top: 2vh;
`
const PopUpHandler = styled.div`
display: block;
position: fixed;
padding-top: 250px;
top: 0; left: 0;
width: 100%; 
height: 100%;
background-color: rgba(0 ,0 ,0 , 0.5);
`
const PopUp = styled.div`
display:flex;
justify-content:start;
align-items:center;
text-align:top;
flex-direction:column;
z-index: 50;
margin: auto;
width: 40%;
height: 40%;
background-color: #370D32;
color:white;
border-radius: 8px;
border: 2px solid white;
`

const PopUpButton = styled.button`
display:flex;
position:absolute;
justify-content:center;
align-items:center;
text-align:center;
height: 4vh;
width:8vw;
margin-top: 15vh;
margin-left:15vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(0,200,0,0.5);
cursor:pointer;
&:hover{
    background-color: lightgreen;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`
const PopUpDelete = styled.button`
display:flex;
position:absolute;
justify-content:center;
align-items:center;
text-align:center;
height: 4vh;
width:8vw;
margin-top: 15vh;
margin-left:-15vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(200,0,0,0.5);
cursor:pointer;
&:hover{
    background-color:red;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`

export default DeleteButton;