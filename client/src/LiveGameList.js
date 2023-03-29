import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LiveGameBox from "./LiveGameBox";

const LiveGameList = () => {

    const {host} = useParams();

    const [liveGames, setLiveGames] = useState(null);

    useEffect(()=>{
        fetch(`/api/get-live-games/${host}`)
        .then(res => res.json())
        .then((data)=>{
            setLiveGames(data.data);
            console.log(liveGames);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);


    return(
        <>
        { !liveGames
        ? <p>LOADING</p>
        : 
        <Wrapper>
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
width:600px;
color:black;
`

export default LiveGameList;