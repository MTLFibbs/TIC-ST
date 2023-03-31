import styled from "styled-components";

const LiveGameThroneCounter = ({gameData}) => {
    return(
        <Wrapper>
            <ThroneNameBox>
                <TitleText>THRONE SUPPORT COUNTER</TitleText>
            </ThroneNameBox>
            <PlayerBox>
                {gameData.players.map((e,i)=>{
                    return(
                        <MapWrapper>
                        <PlayerNameText key = {i}>{e.nickname}: {e.pointsOrigin.supportedBy}</PlayerNameText>
                        <ButtonWrapper>
                            {gameData.players.filter(el => el.nickname !== e.nickname ).map((e,i) =>{
                            return (<>
                                <PlayerButtons>{e.nickname.charAt(0) + e.nickname.charAt(e.nickname.length-1)}</PlayerButtons>
                            </>
                        )})}
                        </ButtonWrapper>
                        </MapWrapper>

                    )
                })}
            </PlayerBox>
        </Wrapper>
    )
};

const Wrapper = styled.div`
border: 2px solid black;
box-shadow: 4px 5px 5px black;
border-radius: 8px;
height: 40%;
margin-bottom: 20px;
`
const ThroneNameBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const TitleText = styled.div`
font-weight:bold;
font-size: 1.0vw;;
margin-top: 0.5vh;
`
const PlayerBox = styled.div`
display:grid;
flex-direction:column;
justify-content:space-between;
grid-template-columns: repeat(2, 2fr);
grid-template-rows: repeat(3,2fr);
height: 80%;
margin-top: 1vh;
margin-left: 1vw;
font-size:1.3vw;
`
const PlayerNameText = styled.div`

`
const PlayerScoreText = styled.div`
`
const MapWrapper = styled.div`
`

const ButtonWrapper = styled.div`
display:grid;
align-items: center;
grid-template-columns: repeat(3, 2vw);
grid-template-rows: repeat(2,5fr);
`
const PlayerButtons = styled.button`
cursor:pointer;
width: 1.8vw;
height: 2.2vh;
margin-bottom: 0.4vh;
background-color:transparent;
&:hover{
    background-color:pink;
}
`

export default LiveGameThroneCounter;