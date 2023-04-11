import styled from "styled-components";
//This component displays the most used unit by the player on their profile
const FavoriteUnit = ({userGameData}) => {
    
    const mapped = userGameData.map((e,i) => {
        return e.players[0].unitsUpgraded;
    })
    
    const getCount = mapped.flat().map((e,i) => {
        return {unit: e, count: mapped.flat().filter((v) => (v === e)).length}
    })
    
    const sorted = getCount.sort((a,b) => b.count - a.count)
    
    const sliced = sorted.slice(0, 1);

    const final = sliced[0].unit

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
font-size: 1.5vw;
text-decoration:none;
color:white;
`

export default FavoriteUnit;