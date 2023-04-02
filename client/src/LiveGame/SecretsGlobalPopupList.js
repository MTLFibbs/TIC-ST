import styled from "styled-components";
import SecretsBox from "./SecretsBox";

const SecretsGlobalPopupList = ({playerIndex, secretData, gameData, playerName, nickname}) => {
    
    

    return (
        <Wrapper>
                <SecretsWrapperGlobal>
                    {secretData.map((e, i) =>{
                    return(
                        <SecretsBox key = {e.objectiveName} gameData = {gameData} playerIndex = {playerIndex} secret = {e.objectiveName}/>                    )
                    })}
                </SecretsWrapperGlobal>
        </Wrapper>
        
    )
};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
margin-top: 5vh;
margin-right: 0vw;
border: 2px solid white;
border-radius: 8px;
width: 91.5%;
height: 40vh;
`

const SecretsWrapperGlobal = styled.div`
display:grid;
grid-template-columns: repeat(4, 10vw);
grid-template-rows: repeat(4, 7vh);
grid-gap: 5px;
width:90vw;
height:52vh;
border-radius:8px;
margin-top:15vh;
`






export default SecretsGlobalPopupList;