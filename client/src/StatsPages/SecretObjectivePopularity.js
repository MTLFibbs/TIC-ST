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
const SecretObjectivePopularity = ({techCount,objectiveCount, globalObjectives}) => {

    const objectives = globalObjectives.map ((e,i) => {
        return e.objectiveName
    });
    const [data, setData] = useState(null);

    const flatObjectives = objectiveCount.flat();
    const mapped = objectives.map((e,i) => {
        return {objectives: e, count:flatObjectives.filter((v)=> (v === e)).length}
    })
    const sorted = mapped.sort((a,b) => b.count - a.count)
    const sliced = sorted.slice(0, 5);

    const formattedData = [];

    const handleFormat = () => {
        let i = 0;
        for(i=0; i<sliced.length; i++){
            if(!formattedData.find(({name}) => name === (sliced[i].objectives))){
                formattedData.push({name: sliced[i].objectives, count: sliced[i].count});                
            }

        }
    }

    useEffect(()=> {
        handleFormat();
        setData(formattedData);
    }, [objectiveCount, techCount])

    return (
        <Wrapper>
            <TitleText>Most popular secret objectives</TitleText>
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
                <YAxis dataKey="name" type = "category" tick = {{fontSize: 13}} interval = {0} stroke = "white"></YAxis>
                <XAxis  dataKey="count" type = "number" stroke = "white">
                </XAxis>

                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
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

export default SecretObjectivePopularity;