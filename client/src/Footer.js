import styled from "styled-components";

const Footer = () => {
    
    return(
        <Wrapper>
            <IconWrapper>
                <a href = "https://www.linkedin.com/in/philippe-pellerin-58451a118" target="_blank" rel="noopener noreferrer" >
                <Icon> Linkedin</Icon>
                </a>
                <a href = "https://github.com/MTLFibbs" target="_blank" rel="noopener noreferrer">
                <Icon>Github</Icon>
                </a>
            </IconWrapper>
            <FooterNote> 2023 Philippe Pellerin</FooterNote>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-between;
font-weight: normal;
background-color: #370D32;
height: 10vh;

`

const IconWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content:space-between;
color:white;
padding-top: 2vh;
`

const Icon = styled.button`
margin-left:1vw;
margin-right: 1vw;
padding: 1vh;
border: 1px solid white;
border-radius: 16px;
background:transparent;
color:white;
cursor:pointer;
`

const FooterNote = styled.div`
color:white;
padding-bottom: 1vh;
`

export default Footer;