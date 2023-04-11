import styled from "styled-components";
//This component displays the most used faction by the player on their profile
const FavoriteFaction = ({userGameData}) => {
    
    const mapped = userGameData.map((e,i) => {
        return e.players[0].faction;
    })
    
    const getCount = mapped.map((e,i) => {
        return {faction: e, count: mapped.filter((v) => (v === e)).length}
    })
    
    const sorted = getCount.sort((a,b) => b.count - a.count)
    
    const sliced = sorted.slice(0, 1);

    const final = sliced[0].faction

    return(
        <ProfileTextWrapper>
            <ProfileTextOutput2>{final}</ProfileTextOutput2>
        </ProfileTextWrapper>
    )
};

const ProfileTextWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-bottom: none;
text-decoration:none;

`

const ProfileTextOutput2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-top: 4vh;
font-size: 2vw;
text-decoration:none;
color:white;
`

export default FavoriteFaction;