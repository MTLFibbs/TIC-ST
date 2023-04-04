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


const FactionPopularity = ({popularity, techCount}) => {

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
        setData(formattedData);
    }
    

    useEffect(()=>{
        handleCount(); 
        handleFormat();
    },[popularity,techCount])

    return (
        <Wrapper>
            <TitleText>Percentage of times a faction is picked</TitleText>
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
                
                <CartesianGrid strokeDasharray="1 1"/>
                <YAxis dataKey="faction" type = "category" tick = {{fontSize: 17}} interval = {0}></YAxis>
                <XAxis type = "number">
                </XAxis>

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
margin-top: 2vh;
margin-bottom: 2vh;
font-style:bold;
font-size: 1.3vw;
text-decoration: underline;
`

export default FactionPopularity;