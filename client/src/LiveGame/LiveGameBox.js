import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Link } from "react-router-dom"

const LiveGameBox = ({liveGames}) => {
    return(
        <Wrapper to = {`/livegame/${liveGames._id}`}>
        <GameName>{liveGames.gameName}</GameName>
        <HostAndRounds>
            <Rounds>Round: {liveGames.roundCount}</Rounds>
            <Host>Host: {liveGames.host}</Host>
        </HostAndRounds>
        </Wrapper>
    )
};

const Wrapper = styled(Link)`
margin-bottom: 20px;
border: 1px solid white;
border-radius: 8px;
width: 600px;
height: 100px;
box-shadow: 2px 2px 2px white;
cursor: pointer;
&:hover{
    background-color: #370D32;
}
`
const GameName = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top: 10px;
text-decoration:underline;
`
const HostAndRounds = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-top: 45px;
margin-right: 10px;
margin-left: 10px;
`
const Host = styled.div`
`
const Rounds = styled.div`
`



export default LiveGameBox;