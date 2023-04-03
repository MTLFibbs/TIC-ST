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


const FactionPopularity = ({popularity}) => {

    const factions = ["Arborec","Letnev","Muaat", 
        "Saar","Hacan", "Sol", "Creuss", "L1Z1X", 
        "Mentak", "Naalu","Nekro","Sardakk","JolNar",
        "Winnu", "Xxcha", "Yin", "Yssaril"
    ];

    const [data, setData] = useState(null);

    const popularityArr = [];
    const formattedData = [];

    const flatArr = popularity.flat();


    const handleCount = () => {
        let i = 0;
        for(i=0; i<factions.length; i++){
            popularityArr.push((((flatArr.filter((v) => (v === factions[i])).length) / popularity.length))*100);
        }
    }

    const handleFormat = () => {
        let i = 0;
        for(i=0; i<factions.length; i++){
            formattedData.push({name: (factions[i].charAt(0)+ factions[i].charAt(factions[i].length -1)), faction: factions[i], "%": popularityArr[i]});
        }
    }

    useEffect(()=>{
        handleCount(); 
        handleFormat();
        setData(formattedData);
    },[popularity])

    return (
        <Wrapper>
            <TitleText>Amount of times a faction is picked</TitleText>
            {!data
            ?<></>
            :
            <ResponsiveContainer width= "100%" height = "80%">
            <BarChart
                data={data}
                margin={{
                top: 0,
                right: 20,
                left: -10,
                bottom: 0
                }}
            >
                
                <CartesianGrid strokeDasharray="1 1"/>
                <XAxis dataKey="name" tick = {{fontSize: 20}} interval = {0}>
                </XAxis>
                <YAxis />
                <Tooltip />
                <Bar dataKey="%" fill="#8884d8" />
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
margin-top: 0vh;
margin-bottom: 4vh;
font-style:bold;
font-size: 1.3vw;
`

export default FactionPopularity;