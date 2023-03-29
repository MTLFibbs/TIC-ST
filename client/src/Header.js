import styled from "styled-components";

const Header = () => {
    return(
        <Wrapper>
        <HeaderBox> THIS IS A VERY NICE HEADER </HeaderBox>
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

const HeaderBox = styled.div`
`

export default Header;