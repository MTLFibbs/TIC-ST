import styled from "styled-components";


import TechnologyButton from "./TechnologyButton";

const TechnologyWrapper = ({gameData, techData, unitData}) => {

    return (
        <Wrapper>
            
            <TitleText>Technology & Units Attribution List</TitleText>
            <ButtonWrapper>
            {gameData.players.map((e,i) =>{
            return (
                <TechnologyButton key = {i} playerIndex = {i} unitData = {unitData} techData = {techData} gameData = {gameData} playerName = {e.nickname} faction = {e.faction} nickname = {e.nickname.charAt(0) + e.nickname.charAt(e.nickname.length-1)} />
            )})}
            </ButtonWrapper>
        </Wrapper>
    )
};


const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:10vh;
width: 15vw;
border: 2px solid black;
border-radius:8px;
box-shadow: 4px 5px 5px black;
font-style:bold;
margin-left: 2vw;
margin-top: -2vh;
background-color: lightblue;
`
const TitleText = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size: 0.9vw;
`
const ButtonWrapper = styled.div`
display:flex;
flex-direction:row;
`

export default TechnologyWrapper;