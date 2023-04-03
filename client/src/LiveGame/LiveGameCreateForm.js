import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LiveGameContext } from "../LiveGameContext";
import { User, useAuth0 } from "@auth0/auth0-react";


const LiveGameCreateForm = ({factions,form,setForm, isFetching, setIsFetching, handleSubmit}) => {

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

    return(
        <Wrapper id = "my-form">
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

        </Wrapper>
    )
};

const Wrapper = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:pink;
color:black;
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
background-color:red;
height:70%;
width:50%;
margin-top: 10vh;
margin-right: 30vw;
`

const UnitWrappers = styled.div`
display:flex;
flex-direction:column;
`

export default LiveGameCreateForm;