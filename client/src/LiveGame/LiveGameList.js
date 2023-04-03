import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiveGameBox from "./LiveGameBox";
import { User, useAuth0 } from "@auth0/auth0-react";

import LiveGameCreateButton from "./LiveGameCreateButton";

const LiveGameList = () => {
    const {user} = useAuth0();

    const {host} = useParams();

    const [liveGames, setLiveGames] = useState(null);
    
    const [factions, setFactions] = useState(null);


    useEffect(()=>{
        fetch(`/api/get-live-games/${host}`)
        .then(res => res.json())
        .then((data)=>{
            setLiveGames(data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    useEffect(()=>{
        fetch(`/api/get-factions`)
        .then(res => res.json())
        .then((data)=>{
            setFactions(data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);


    return(
        <>
        {!liveGames
        ? <p>LOADING</p>
        : 
        <Wrapper>
        <ListBox>
            <HeaderWrapper>
                <HeaderText>Live games hosted by {user.nickname}</HeaderText>
                <LiveGameCreateButton factions = {factions}/>
            </HeaderWrapper>
        {liveGames.map((e, i) => {
            return(
            <LiveGameBox key = {i} liveGames = {liveGames[i]}/>
            )
        })}
        </ListBox>
        </Wrapper>
        }
        </>


    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
margin-top: 40px;
`

const ListBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width:40vw;
color:black;
background-color:pink;
`

const HeaderWrapper = styled.div`
width:50%
height:20%:
background-color:orange;
margin-bottom: 2vh;
`

const HeaderText = styled.div`
font-size: 2vw;
margin:0;

`

export default LiveGameList;