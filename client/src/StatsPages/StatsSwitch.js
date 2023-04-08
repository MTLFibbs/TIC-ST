import styled from "styled-components";
import { NavLink, Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { User, useAuth0 } from "@auth0/auth0-react";

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
width: 100vw;
height: 10vh;
background-color:pink;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const SelectorWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width: 100%;
height: 5vh;
background-color:orange;
`
const FactionWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
background-color:grey;
`

const WordWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 100%;
width: 14vw;
cursor:pointer;
&:hover{
    background-color:white;
    color:blue;
}
background-color: ${props => (props.selector === "global" ? "green" : "transparent")};
`

const WordWrapperUser = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 100%;
width: 14vw;
cursor:pointer;
&:hover{
    background-color:white;
    color:blue;
}
background-color: ${props => (props.selector === "user" ? "green" : "transparent")};
`

const SubSelectorWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 4vh;
width: 100%;
margin-left: 0.6vw;
margin-right: 0.6vw;
cursor:pointer;
&:hover{
    background-color:white;
    color:blue;
}

background-color: ${props => (props.faction === props.selector ? "green" : "transparent")};
`

const SelectorText = styled.div`
margin-left:1vw;
margin-right: 1vw;
font-size:1vw;
color:black;
border-radius:8px;
`
const SubSelectorText = styled.div`
margin-left:1vw;
margin-right: 1vw;
font-size:1vw;
color:black;
border-radius:8px;
`
export default StatsSwitch;