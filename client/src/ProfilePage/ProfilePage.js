import { User, useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useEffect, useState } from "react";

import FavoriteFaction from "./FavoriteFaction";
import FavoriteUnit from "./FavoriteUnit";
import FavoriteTech from "./FavoriteTech";

const ProfilePage = () => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();
    
    const [userGameData, setUserGameData] = useState(null);
    
    
    
    useEffect(()=>{
        fetch(`/api/get-completed-games/${user.nickname}`)
        .then(res => res.json())
        .then((data)=>{
            setUserGameData(data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);




    return(
        <PageWrapper>
            {!userGameData
                ? <p>LOADING</p>
                :
                <ProfileWrapper>
                <ProfileTop>
                    <ImageWrapper><Image src = {user.picture}/></ImageWrapper>
                    <ProfileTextName> {user.nickname}</ProfileTextName>
                </ProfileTop>
                <ProfileBot>
                <ProfileInfoWrapper>
                        <ProfileTextWrapper><Bold>Games Played</Bold></ProfileTextWrapper>
                        <ProfileTextOutput>{userGameData.length}</ProfileTextOutput>
                    </ProfileInfoWrapper>
                    <ProfileInfoWrapper>
                        <ProfileTextWrapper><Bold>Favorite Faction</Bold></ProfileTextWrapper>
                        <FavoriteFaction userGameData = {userGameData}/>
                    </ProfileInfoWrapper>
                    <ProfileInfoWrapper>
                        <ProfileTextWrapper><Bold>Favorite Technology</Bold></ProfileTextWrapper>
                        <FavoriteTech userGameData = {userGameData}/>
                    </ProfileInfoWrapper>
                    <ProfileInfoWrapper>
                        <ProfileTextWrapper><Bold>Favorite Unit</Bold></ProfileTextWrapper>
                        <FavoriteUnit userGameData = {userGameData}/>
                    </ProfileInfoWrapper>
                </ProfileBot>
            </ProfileWrapper>
            }
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
display:flex;
flex-direction: column;
margin-top: 5vh;
width: 50vw;
height: 69vh;
border: 2px solid black;
border-radius: 16px;
`

const ProfileTop = styled.div`
background-color:lightblue;
display:flex;
flex-direction: row;
justify-content:start;
align-items:center;
width: 100%;
height: 30%;
border-bottom: 2px solid black;
`

const ImageWrapper = styled.div`
background-color:blue;
display:flex;
justify-content:center;
align-items:center;
width: 9vw;
`

const Image = styled.img`
border: 2px solid white;
border-radius: 200px;
width: 8vw;
`

const ProfileTextName = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
font-size:2vw;
margin-top: 0vh;
`

const ProfileTextWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top: 1vh;
font-size: 1vw;
border-bottom: 2px solid black;
`

const ProfileTextOutput = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top: 2vh;
font-size: 4vw;
`

const ProfileTextOutput2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-top: 4vh;
font-size: 2vw;
`
const ProfileTextOutput3 = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-top: 4vh;
font-size: 1vw;
inline-size: min-content;
`

const ProfileInfoWrapper = styled.div`
background-color:white;
border: 2px solid black;
border-radius: 16px;
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;
height:18.4vh;
width:10vw;
`

const Bold = styled.span`
font-weight:bold;
`

const ProfileBot = styled.div`
background-color:orange;
display:flex;
justify-content:space-around;
align-items:center;
width: 100%;
height: 100%;
`

export default ProfilePage;