import styled from "styled-components";
import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label
  } from "recharts";


const FactionVP = ({vpCount,techCount}) => {

    const factions = ["Arborec","Letnev","Muaat", 
        "Saar","Hacan", "Sol", "Creuss", "L1Z1X", 
        "Mentak", "Naalu","Nekro","Sardakk","JolNar",
        "Winnu", "Xxcha", "Yin", "Yssaril"
    ];

    const [data, setData] = useState(null);

    const vpArr = [];
    const formattedData = [];
    
    const flatArr = vpCount.flat();

    
    const handleCount = () => {
        let i = 0;
        for(i=0; i<factions.length; i++){
            vpArr.push(
                {   faction: factions[i], 
                    timesPlayed: (flatArr.filter((v) => (v.faction === factions[i])).length),
                    pointsAccrued: flatArr.map((e,index) => {
                        if(e.faction === factions[i]){
                            return e.points;
                        }
                        else{
                            return null
                        }
                    })
                });
        }
    }
    
    const handleCleaning = () => {
        let i = 0;
        for(i=0; i<factions.length; i++){
            vpArr[i].pointsAccrued =  vpArr[i].pointsAccrued.filter(n => n);
        }
    }
    const handleFormat = () => {
        let i = 0;
        for(i=0; i<factions.length; i++){
            const sum = vpArr[i].pointsAccrued.reduce((partialSum, a) => partialSum + a, 0);
    
            if((sum /vpArr[i].timesPlayed).toFixed(2) === "NaN"){
                formattedData.push({name: factions[i], "VP": "0"});
            }
            else{
                formattedData.push({name: factions[i], "VP": (sum /vpArr[i].timesPlayed).toFixed(1)});
            }
        }
    }
    
    useEffect(()=>{
        handleCount(); 
        handleCleaning();
        handleFormat();
        setData(formattedData);
    },[vpCount,techCount])
    
    return (
        <Wrapper>
            <TitleText>Average VP per game for each faction</TitleText>
            {!data
            ?<></>
            :
            <ResponsiveContainer width= "100%" height = "80%">
            <BarChart
                data={data}
                layout = "vertical"
                margin={{
                top: 0,
                right: 20,
                left: 20,
                bottom: 0
                }}
            >
                
                <CartesianGrid strokeDasharray="3 3"/>
                <YAxis dataKey="name" type = "category" tick = {{fontSize: 17}} interval = {0}></YAxis>
                <XAxis scale = "auto" type = "number" domain = {[0,10]}>
                </XAxis>
                <Tooltip />
                <Bar dataKey="VP" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
            }

        </Wrapper>

    )
};

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width: 30vw;
height: 35vh;
margin-top: 1vh;
border: 2px solid black;
border-radius: 16px;
background-color:none;
`

const TitleText = styled.div`
margin-top: 2vh;
margin-bottom: 2vh;
font-style:bold;
font-size: 1.3vw;
text-decoration: underline;
`

export default FactionVP;