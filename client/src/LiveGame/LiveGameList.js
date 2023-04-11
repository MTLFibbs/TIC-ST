import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiveGameBox from "./LiveGameBox";
import { User, useAuth0 } from "@auth0/auth0-react";
import logo from "../Images/loader.gif"

import LiveGameCreateButton from "./LiveGameCreateButton";
//This component lists all LiveGameBoxes which each represent 1 live game
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
        ? <Wrapper> <Image src = {logo} alt = "Loading..." /> </Wrapper>
        : 
        <Wrapper>
            <BoxWrapper>
                <HeaderWrapper>
                    <HeaderText>Live games hosted by {user.nickname}</HeaderText>
                    <LiveGameCreateButton factions = {factions}/>
                </HeaderWrapper>
            </BoxWrapper>
        <ListBox>
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
flex-direction: column;
align-items: center;
justify-content:center;
padding-top: 3vh;
background-color: #25282d;
height:90vh;
`

const ListBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:start;
width:50vw;
height: 70vh;
color:white;
overflow-y:auto;
`

const BoxWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:start;
width:40vw;
height: 10vh;
color:white;
`

const Image = styled.img`
`

const HeaderWrapper = styled.div`
width:70%;
height:10vh:
margin-bottom: 2vh;
`

const HeaderText = styled.div`
font-size: 2vw;
margin-bottom: 4vh;

`

export default LiveGameList;