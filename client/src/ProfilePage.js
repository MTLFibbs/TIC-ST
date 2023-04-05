import { User, useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const ProfilePage = () => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();
    
    return(
        <PageWrapper>
            <ProfileWrapper>
                <ProfileTop>
                    s
                </ProfileTop>
                <ProfileBot>
                    s
                </ProfileBot>
            </ProfileWrapper>
        </PageWrapper>
    )
};

const PageWrapper = styled.div`
background-color:pink;
display:flex;
justify-content:center;
width:100vw;
height: 87vh;
`

const ProfileWrapper = styled.div`
margin-top: 5vh;
width: 70vw;
height: 69vh;
border: 2px solid black;
border-radius: 16px;
`

const ProfileTop = styled.div`
background-color:lightblue;
width: 100%;
height: 30%;
border-bottom: 2px solid black;
`

const ProfileBot = styled.div`
background-color:orange;
width: 100%;
height: 70%;
`

export default ProfilePage;