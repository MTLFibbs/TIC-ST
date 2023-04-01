import styled from "styled-components";
import ObjectiveButton from "./ObjectiveButton";
import { useEffect, useState } from "react";


const ObjectiveButtonWrapper = ({objectiveTitle, gameData}) => {


    return(
        <MapWrapper >
        <ButtonWrapper>
            {gameData.players.map((e,i) =>{
            return <ObjectiveButton key = {e.nickname} objective = {objectiveTitle} index = {i} gameData = {gameData} scorerName = {e.nickname} nickname = {e.nickname.charAt(0) + e.nickname.charAt(e.nickname.length-1)} />
        })}
        </ButtonWrapper>
        </MapWrapper>
    )
};

const MapWrapper = styled.div`
width: 10vw;
text-align:center;
justify-content:center;
align-items:center;
`

const ButtonWrapper = styled.div`
display:inline-block;
text-align:center;
justify-content:center;
align-items:center;
width:10.9vw;
height: 4vh;
`

export default ObjectiveButtonWrapper;