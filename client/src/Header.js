import styled from "styled-components";
import { NavLink, Link } from "react-router-dom"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { User, useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();

    return(
        <Wrapper>
        {isAuthenticated
        ?
        <>
        <HeaderBox to ={`/home`}> THIS IS A VERY NICE LOGGED IN HEADER </HeaderBox>
        <LogWrapper>
            <Link to = {`/profile/${user.nickname}`} >
            <UserImage src = {user.picture} alt = {user?.nickname}/>
            </Link>

            <LogoutButton/>
        </LogWrapper>
        </>
        :<>
        <HeaderBox to ={`/`}> THIS IS A VERY NICE LOGGED OUT HEADER </HeaderBox>
        </>
        }

        </Wrapper>

    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:center;
padding-bottom: 70px;
padding-top: 30px;
margin-top: 0px;
font-weight: bold;
background-color: lightblue;
`

const HeaderBox = styled(Link)`
background-color: orange;
`

const LogWrapper = styled.div`
display:flex;
align-items: center;
justify-content:center;
background-color: pink;
width: 8vw;
height: 2vh;
`

const UserImage = styled.img`
width: 3vw;
height: 6vh;
border: 3px solid green;
border-radius: 30px;
`

export default Header;