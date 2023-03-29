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
                        <PlayerNameText key = {i}>{e.nickname}: {e.pointsOrigin.supportedBy}</PlayerNameText>
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
`
const ThroneNameBox = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`
const TitleText = styled.div`
font-weight:bold;
font-size: 18px;
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

export default LiveGameThroneCounter;