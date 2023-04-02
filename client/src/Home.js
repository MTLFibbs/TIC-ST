import styled from "styled-components";
import { NavLink, Link } from "react-router-dom"
import { LiveGameProvider } from './LiveGameContext';

const Home = () => {

    return(
        <Wrapper>
        <StyledButton to = {`/livegames/Fibbs`}> Live Game </StyledButton>
        <StyledButton> Stats </StyledButton>
        </Wrapper>

    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const HeaderBox = styled.div`
`

const StyledButton = styled(Link)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 200px;
height: 100px;
margin-left: 30px;
margin-right: 30px;
border: 2px solid red;
`

export default Home;