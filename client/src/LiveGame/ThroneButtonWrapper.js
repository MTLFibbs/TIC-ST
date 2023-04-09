import styled from "styled-components";
import ThroneButton from "./ThroneButton";

const ThroneButtonWrapper = ({name, gameData, index}) => {
    return(
        <MapWrapper >
        <PlayerNameText >{name}</PlayerNameText>
        <ButtonWrapper>
            {gameData.players.filter(el => el.nickname !== name ).map((e,i) =>{
            return (
                <ThroneButton key = {e.nickname} index = {index} gameData = {gameData} supportedName = {name} supporterName = {e.nickname} nickname = {e.nickname.charAt(0) + e.nickname.charAt(e.nickname.length-1)} />
        )})}
        </ButtonWrapper>
        </MapWrapper>
    )
};

const MapWrapper = styled.div`
width:70%;
`
const PlayerNameText = styled.div`
display:flex;
justify-content:start;
align-items:center;
text-align:center;
font-size: 1vw;
`
const ButtonWrapper = styled.div`
display:grid;
align-items: center;
grid-template-columns: repeat(3, 2vw);
grid-template-rows: repeat(2,5fr);
`

export default ThroneButtonWrapper;