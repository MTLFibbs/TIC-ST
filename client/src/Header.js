import styled from "styled-components";
import { NavLink, Link } from "react-router-dom"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { User, useAuth0 } from "@auth0/auth0-react";
import { IconHexagonLetterG } from '@tabler/icons-react';
const Header = () => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();

    return(
        <>
        {isAuthenticated
        ?
        <Wrapper to = {"/home"}>
            <HeaderBox> Galactic Companion </HeaderBox>
            <LogWrapper>
                <Link to = {`/profile/${user.nickname}`} >
                <UserImage src = {user.picture} alt = {user?.nickname}/>
                </Link>
                <LogoutButton/>
            </LogWrapper>
        </Wrapper>
        :<Wrapper to ={"/"}>
            <HeaderBox> Galactic Companion </HeaderBox>
        </Wrapper>
        }
        </>
    )
};

const Wrapper = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
padding-bottom: 4vh;
padding-top: 0vh;
margin-top: 0px;
font-weight: bold;
background-color: #370D32;
height: 10vh;

`

const HeaderBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
color:white;
font-size:4vw;
height: 10vh;
margin-top: 3vh;
`

const LogWrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
width: 8vw;
height: 2vh;
margin-top: 4vh;
`

const UserImage = styled.img`
width: 3vw;
height: 6vh;
border: 3px solid green;
border-radius: 30px;
`

export default Header;