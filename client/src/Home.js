import styled from "styled-components";
import { NavLink, Link } from "react-router-dom"
import { LiveGameProvider } from './LiveGameContext';
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {
    const {user} = useAuth0();
    return(
        <Wrapper>
        <StyledButton to = {`/livegames/${user.nickname}`}> Live Games </StyledButton>
        <StyledButton to = {`/stats`}> Stats </StyledButton>
        </Wrapper>

    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #25282d;
height:90vh;
`

const HeaderBox = styled.div`
`

const StyledButton = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 20vw;
height: 30vh;
margin-left: 2vw;
margin-right: 2vw;
border: 2px solid white;
color:white;
border-radius: 16px;
&:hover{
    background-color: #370D32;
}
`

export default Home;