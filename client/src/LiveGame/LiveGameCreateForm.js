import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LiveGameContext } from "../LiveGameContext";
import { User, useAuth0 } from "@auth0/auth0-react";


const LiveGameCreateForm = ({factions,form,setForm, isFetching, setIsFetching, handlePopup}) => {

    const { user} = useAuth0();

    let n = (parseInt(form.playerAmount) -1 );
    const arr = Array(n).fill(0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setForm({
            ...form,
            [e.target.name]:value
        });
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const ordered = Object.keys(form).sort().reduce(
            (obj, key) => { 
            obj[key] = form[key]; 
            return obj;
        }, 
        {}
        );
        
        let i = 0
        const playerCount = ordered.playerAmount;
        const gameName = ordered.gameName;
        const host = ordered.host;

        const factions = [form.faction1, form.faction2, form.faction3, form.faction4, form.faction5, form.faction6];
        const filteredFactions = factions.filter(v => v);
        const uniqueFactions = [...new Set(filteredFactions)];

        const players = [form.player1, form.player2, form.player3, form.player4, form.player5, form.player6];
        const filteredPlayers = players.filter(v => v);
        const uniquePlayers = [...new Set(filteredPlayers)];

        
        const playerOne = form.player1;
        const playerTwo = form.player2;
        const playerThree = form.player3;
        const playerFour = form.player4;
        const playerFive = form.player5;
        const playerSix = form.player6;
        
        const newSet = {$set:{gameName:gameName, host: host, playerCount:playerCount, 
            players:{
                [playerOne]:form.faction1,
                [playerTwo]:form.faction2,
                [playerThree]:form.faction3,
                [playerFour]:form.faction4,
                [playerFive]:form.faction5,
                [playerSix]:form.faction6,
            }
        }};



        if(gameName.length === 0){
            window.alert("Game must have a Name")
        }

        else if(Object.keys(newSet.$set.players).length < playerCount || Object.keys(newSet.$set.players).slice(0,playerCount).includes("undefined")){
            console.log(Object.keys(newSet.$set.players).slice(0,playerCount))
            window.alert("All players need a name")
        }

        else if(uniquePlayers.length !== filteredPlayers.length){
            window.alert("Names cannot be duplicates")
        }

        else if(Object.values(newSet.$set.players).length < playerCount || Object.values(newSet.$set.players).slice(0,playerCount).includes("...") ||  Object.values(newSet.$set.players).slice(0,playerCount).includes(undefined)){
            window.alert("All players need a faction")
        }

        else if(uniqueFactions.length !== filteredFactions.length){
            window.alert("Factions cannot be duplicates")
        }

        else{
            setIsFetching(true)
            fetch(`/api/add-new-live-game`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newSet.$set)
            })
                .then(res => res.json())
                .then((data) => {
                    if(data.status === 400 || data.status === 500){
                        throw new Error(data.message);
                    }
                    else{
                        navigate(`/home`)
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
                setIsFetching(false);
            }

    };

    return(
        <Wrapper id = "my-form" onSubmit = {handleSubmit}>
            <TextWrapper>
            <StyledLabel htmlFor = "game-name">Game Name</StyledLabel>
            <StyledInput  onChange = {handleChange} type ="text" name = "gameName" value = {form.gameName} id = "game-name"/>
            <StyledLabel htmlFor = "host">Host</StyledLabel>
            <StyledInput  onChange = {handleChange} disabled type ="text" name = "host" value = {user.nickname} id = "host"/>
            <StyledLabel htmlFor = "player-amount">How Many Players?</StyledLabel>
            <StyledSelect  onChange = {handleChange} type ="text" name = "playerAmount" value = {form.playerAmount} id = "player-amount">
                <StyledOption value = "">...</StyledOption>
                <StyledOption value = "3">3 Players</StyledOption>
                <StyledOption value = "4">4 Players</StyledOption>
                <StyledOption value = "5">5 Players</StyledOption>
                <StyledOption value = "6">6 Players</StyledOption>
            </StyledSelect>
            </TextWrapper>
            <GridWrapper>
                <UnitWrappers>
                    <StyledLabel>Host</StyledLabel>
                    <StyledInput  onChange = {handleChange} disabled name = "player1" type = "text" value = {user.nickname}/>
                    <StyledSelect  onChange = {handleChange} type = "text" name = "faction1" value = {form.faction}>
                            <StyledOption value = "">...</StyledOption>
                        {factions.map((el, i) => {
                            return <StyledOption key = {el.factionName} value = {`${el.nickname}`}>{el.factionName}</StyledOption>
                        })}
                        </StyledSelect>
                </UnitWrappers>

            {arr.map((e, index) => {
                return (
                    <UnitWrappers key = {index}>
                    <StyledLabel> Guest {index+1}</StyledLabel>
                    <StyledInput  onChange = {handleChange} name = {`player${index+2}`} type = "text" value = {form.playerName}/>
                    <StyledSelect  onChange = {handleChange} type = "text" name = {`faction${index+2}`} value = {form.faction}>
                        <StyledOption value = "">...</StyledOption>
                    {factions.map((el, i) => {
                        return <StyledOption key = {el.nickname} value = {`${el.nickname}`}>{el.factionName}</StyledOption>
                    })}
                    </StyledSelect>
                    </UnitWrappers>
                )
            })}
            </GridWrapper>
            <PopUpPost form = "my-form" id = "postButton" type = "submit">Create</PopUpPost>
            <PopUpButton disabled = {isFetching === true} id = "closeButton" onClick = {(e) => handlePopup(e)}>Cancel</PopUpButton>
        </Wrapper>
    )
};

const Wrapper = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;
height:85%;
width:90%;
cursor:default;
`

const FirstSection = styled.div`
`

const StyledLabel = styled.label`
margin-top: 1vh;
`

const StyledInput = styled.input`
width: 18vw;
height:2vh;
`
const StyledSelect = styled.select`
width: 18vw;
height:2.5vh;
`
const StyledOption = styled.option`
`

const TextWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top: 3vh;
`

const GridWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
grid-gap: 3vw;
height:70%;
width:50%;
margin-top: 10vh;
margin-right: 30vw;
`

const UnitWrappers = styled.div`
display:flex;
flex-direction:column;
`

const PopUpPost = styled.button`
display:flex;
position:absolute;
justify-content:center;
align-items:center;
text-align:center;
height: 4vh;
width:8vw;
margin-top: 83vh;
margin-left:-15vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(0,200,0,0.5);
cursor:pointer;
&:hover{
    background-color:lightgreen;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`
const PopUpButton = styled.button`
display:flex;
position:absolute;
justify-content:center;
align-items:center;
text-align:center;
height: 4vh;
width:8vw;
margin-top: 83vh;
margin-left:15vw;
font-size:0.8vw;
color:white;
border-color:white;
background-color:rgb(200,0,0,0.5);
cursor:pointer;
&:hover{
    background-color:red;
}
&:disabled{
    background-color:rgb(200,0,0,0.5);
}
`

export default LiveGameCreateForm;