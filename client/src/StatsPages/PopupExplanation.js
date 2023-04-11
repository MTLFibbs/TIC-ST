//AN ARTIFACT LOST TO TIME

/*import styled from "styled-components";
import { useState, useEffect, useContext } from "react";

const PopupExplanation = ({show, setShow, handlePopup, type}) => {

    
    const [show, setShow] = useState(false);
    const handlePopup = (e) => {
        if(show === false){
            setShow(true);
        }
        else if(show === true && e.target.id === "closeButton"){
            setShow(false);
        }
    }
    
    return (
        <>
        {show === true
            ?<PopUpHandler>
                <PopUp>
                    <TitleText></TitleText>
                    <PopUpButton id = "closeButton" onClick = {(e) => handlePopup(e)}>Close</PopUpButton>
                </PopUp>
            </PopUpHandler>
            : <></>
        }
        </>
    )
};


const TitleText = styled.div`
margin-top :1vh;
font-size: 1vw;
`

const PopUpHandler = styled.div`
display: block;
position: fixed;
padding-top: 250px;
top: 0; left: 0;
width: 100vw; 
height: 100vh;
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
width: 45%;
height: 80%;
background-color: #25282d;
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
height: 3vh;
width:2.6vw;
margin-top: 54.5vh;
margin-left:41vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(0,200,0,0.5);
cursor:pointer;
&:hover{
    background-color: #370D32;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`


export default PopupExplanation; */