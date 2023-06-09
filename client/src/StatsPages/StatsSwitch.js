import styled from "styled-components";
import { NavLink, Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";
//This component lets the users switch between what is displayed on the stats landing page
const StatsSwitch = ({selector, setSelector}) => {

    const factions = ["Arborec","Letnev","Muaat", 
    "Saar","Hacan", "Sol", "Creuss", "L1Z1X", 
    "Mentak", "Naalu","Nekro","Sardakk","JolNar",
    "Winnu", "Xxcha", "Yin", "Yssaril"
];

    const handleSelector = (selectorValue) => {
        setSelector(selectorValue)
    }

    return(
        <Wrapper>
            <SelectorWrapper>
                <WordWrapper onClick = {()=> handleSelector("global")} selector = {selector}>
                    <SelectorText>ALL GAMES</SelectorText>
                </WordWrapper>
                <WordWrapperUser onClick = {()=> handleSelector("user")} selector = {selector}>
                    <SelectorText >YOUR GAMES</SelectorText>
                </WordWrapperUser>
            </SelectorWrapper>
            <FactionWrapper>
                {factions.map((e,i)=> {
                    return(
                        <SubSelectorWrapper key = {i} faction = {e} selector = {selector} onClick = {()=> handleSelector(e)} >
                            <SubSelectorText key = {e}>{e}</SubSelectorText>
                        </SubSelectorWrapper>
                    ) 
                })

                }
            </FactionWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: 99vw;
height: 10vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color: #25282d;
box-shadow: inset 0 0 10px black;
`

const SelectorWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 100%;
height: 5vh;
`
const FactionWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
`

const WordWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 100%;
width: 14vw;
border-radius:16px;
cursor:pointer;
&:hover{
    background-color: #370D32;
    color:blue;
}
background-color: ${props => (props.selector === "global" ? "#370D32" : "transparent")};
`

const WordWrapperUser = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 100%;
width: 14vw;
border-radius:16px;
cursor:pointer;
&:hover{
    background-color: #370D32;
    color:blue;
}
background-color: ${props => (props.selector === "user" ? "#370D32" : "transparent")};
`

const SubSelectorWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 4vh;
width: 100%;
margin-left: 0.2vw;
margin-right: 0.2vw;
border-radius:16px;
cursor:pointer;
&:hover{
    background-color: #370D32;
    color:blue;
}

background-color: ${props => (props.faction === props.selector ? "#370D32" : "transparent")};
`

const SelectorText = styled.div`
margin-left:1vw;
margin-right: 1vw;
font-size:1vw;
color:white;
border-radius:8px;
`
const SubSelectorText = styled.div`
margin-left:1vw;
margin-right: 1vw;
font-size:1vw;
color:white;
border-radius:8px;
`
export default StatsSwitch;