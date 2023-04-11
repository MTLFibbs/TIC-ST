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
//This component is a graph on the stats landing page in the faction subsection
const FactionTechPopularity = ({factionTechSpecific, factionTechs, selector, switcher}) => {

    const [data, setData] = useState(null);

    const emptyArr = [];
	const dataArr = [];
	const formattedData = [];

	const flatArr = factionTechSpecific.flat();

    const techs = factionTechs.map((e,i) => {
        if(e.techGlobal === "Yes" || e.techUnique === selector){
            return e.techName
        }
        else{
            return null
        }
    }).filter(n => n);

    const techCount = factionTechSpecific.map((e,i) => {
        if(e.faction === selector){
            return e.techsUpgraded
        }
    })

    const handleArr = () => { 
        let i = 0
        for (i = 0; i <flatArr.length; i++){
            if(flatArr[i].faction === selector){
                emptyArr.push(flatArr[i].techsUpgraded)
            }
        }
    }

    const handleCount = () => {
        techs.map((e,i) => {
            dataArr.push({tech:e, count: emptyArr.filter((v) => (v.includes(e))).length})
        })
    }

    const handleSort = () => {
        dataArr.sort((a,b) => b.count - a.count)
    }

    const handleFormat = () => {
        let i = 0;
        for(i=0; i<dataArr.length; i++){
            if(!formattedData.find(({name}) => name === (dataArr[i].tech))){
                formattedData.push({name: dataArr[i].tech, "Count": dataArr[i].count});
            }

        }
    }

    useEffect(()=> {
        handleArr();
        handleCount();
        handleSort();
        handleFormat();
        setData(formattedData);
    }, [selector])

    return (
        <Wrapper>
            <TitleText>Technologies sorted by Popularity</TitleText>
            {!data
            ?<></>
            :
            <ResponsiveContainer width= "100%" height = "92%">
            <BarChart
                data={data}
                layout = "vertical"
                margin={{
                top: 0,
                right: 20,
                left: 40,
                bottom: 0
                }}
            >
                
                <CartesianGrid strokeDasharray="1 1"/>
                <YAxis dataKey="name" type = "category" tick = {{fontSize: 12}} interval = {0} stroke = "white"></YAxis>
                <XAxis type = "number" stroke = "white">
                </XAxis>

                <Tooltip />
                <Bar dataKey="Count" fill="#8884d8" />
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
height: 70vh;
margin-top: 1vh;
margin-bottom: 0vh;
border: 2px solid white;
box-shadow: 2px 2px 2px white;
border-radius: 16px;
background-color:none;
`

const TitleText = styled.div`
margin-top: 2vh;
margin-bottom: 1vh;
font-style:bold;
font-size: 1.3vw;
text-decoration: underline;
color:white;
`

export default FactionTechPopularity;