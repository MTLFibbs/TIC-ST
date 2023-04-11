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

//This component is a graph on the stats landing page in the main section
const FactionPopularity = ({popularity, assign, setAssign, selector}) => {

    const factions = ["Arborec","Letnev","Muaat", 
        "Saar","Hacan", "Sol", "Creuss", "L1Z1X", 
        "Mentak", "Naalu","Nekro","Sardakk","JolNar",
        "Winnu", "Xxcha", "Yin", "Yssaril"
    ];

    const [data, setData] = useState(null);

    const popularityArr = [];
    const formattedData = [];




    const handleCount = () => {
        const flatArr = popularity.flat();
        let i = 0;
        for(i=0; i<factions.length; i++){
            popularityArr.push((((flatArr.filter((v) => (v === factions[i])).length) / popularity.length))*100);
        }
    }

    const handleFormat = () => {
        let i = 0;
        for(i=0; i<factions.length; i++){
            if(!formattedData.find(({name}) => name === (factions[i].charAt(0)+ factions[i].charAt(factions[i].length -1)))){
                formattedData.push({name: (factions[i].charAt(0)+ factions[i].charAt(factions[i].length -1)), faction: factions[i], "%": popularityArr[i]});
            }
        }
        setData(formattedData)
    }
    
    useEffect(()=>{
        handleCount(); 
        handleFormat();
    },[selector])

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
                <YAxis dataKey="faction" type = "category" tick = {{fontSize: 17}} interval = {0} stroke = "white"></YAxis>
                <XAxis type = "number" domain = {[0,100]} stroke = "white">
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
border: 2px solid white;
border-radius: 16px;
background-color:none;
box-shadow: 2px 2px 2px white;
`

const TitleText = styled.div`
margin-top: 2vh;
margin-bottom: 2vh;
font-style:bold;
font-size: 1.3vw;
text-decoration: underline;
color:white;
`

export default FactionPopularity;