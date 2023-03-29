import styled from "styled-components";

const LiveGameMecatolCounter = ({gameData}) => {
    return(
        <Wrapper>
            <MecatolNameBox>
                <TitleText>MECATOL COUNTER</TitleText>
            </MecatolNameBox>
            <PlayerBox>
                {gameData.players.map((e,i)=>{
                    return(
                        <PlayerNameText key = {i}>{e.nickname}: {e.pointsOrigin.mecatolScore}</PlayerNameText>
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
const MecatolNameBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`
const TitleText = styled.div`
font-weight:bold;
font-size: 24px;
margin-top: 8px;
`
const PlayerBox = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height: 80%;
margin-top: 15px;
margin-left: 15px;
font-size:24px;
`
const PlayerNameText = styled.div`

`
const PlayerScoreText = styled.div`
`

export default LiveGameMecatolCounter;