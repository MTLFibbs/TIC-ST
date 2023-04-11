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
const FactionPlacement = ({placement, selector, switcher}) => {

    const place = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"];

    const [data, setData] = useState(null);

    const firstPlace = [];
    const secondPlace = [];
    const thirdPlace = [];
    const fourthPlace = [];
    const fifthPlace = [];
    const sixthPlace = [];

    const tempArr = [];
    const formattedData = [];



    const filteredArr = placement.map((e,i) => {
        return {playerCount:e.playerCount, placement: e.players.filter((v) => (v.faction === selector))}
    })

    const filterAgain = filteredArr.filter ((v) => (v.placement.length !== 0))

    const handleCount = () => {
        let i =0
        for(i =0; i<filterAgain.length; i++){
            if(filterAgain[i].placement[0].placementValue === 1){
                firstPlace.push(filterAgain[i].playerCount)
            }
            if(filterAgain[i].placement[0].placementValue === 2){
                secondPlace.push(filterAgain[i].playerCount)
            }
            if(filterAgain[i].placement[0].placementValue === 3){
                thirdPlace.push(filterAgain[i].playerCount)
            }
            if(filterAgain[i].placement[0].placementValue === 4){
                fourthPlace.push(filterAgain[i].playerCount)
            }
            if(filterAgain[i].placement[0].placementValue === 5){
                fifthPlace.push(filterAgain[i].playerCount)
            }
            if(filterAgain[i].placement[0].placementValue === 6){
                sixthPlace.push(filterAgain[i].playerCount)
            }
        }
    }

    const handleFormat = () => {
        let i = 0;
        for(i=0; i<place.length; i++){
            if(place[i] === "First" && !formattedData.find(({name}) => name === (place[i]))){
                formattedData.push({
                    name: place[i], 
                    three: firstPlace.filter((v) => (v === "3")).length,
                    four: firstPlace.filter((v) => (v === "4")).length,
                    five: firstPlace.filter((v) => (v === "5")).length,
                    six: firstPlace.filter((v) => (v === "6")).length,
                });
            }
            else if(place[i] === "Second" && !formattedData.find(({name}) => name === (place[i]))){
                formattedData.push({
                    name: place[i], 
                    three: secondPlace.filter((v) => (v === "3")).length,
                    four: secondPlace.filter((v) => (v === "4")).length,
                    five: secondPlace.filter((v) => (v === "5")).length,
                    six: secondPlace.filter((v) => (v === "6")).length,
                });
            }
            else if(place[i] === "Third" && !formattedData.find(({name}) => name === (place[i]))){
                formattedData.push({
                    name: place[i], 
                    three: thirdPlace.filter((v) => (v === "3")).length,
                    four: thirdPlace.filter((v) => (v === "4")).length,
                    five: thirdPlace.filter((v) => (v === "5")).length,
                    six: thirdPlace.filter((v) => (v === "6")).length,
                });
            }
            else if(place[i] === "Fourth" && !formattedData.find(({name}) => name === (place[i]))){
                formattedData.push({
                    name: place[i], 
                    three: fourthPlace.filter((v) => (v === "3")).length,
                    four: fourthPlace.filter((v) => (v === "4")).length,
                    five: fourthPlace.filter((v) => (v === "5")).length,
                    six: fourthPlace.filter((v) => (v === "6")).length,
                });
            }
            else if(place[i] === "Fifth" && !formattedData.find(({name}) => name === (place[i]))){
                formattedData.push({
                    name: place[i], 
                    three: fifthPlace.filter((v) => (v === "3")).length,
                    four: fifthPlace.filter((v) => (v === "4")).length,
                    five: fifthPlace.filter((v) => (v === "5")).length,
                    six: fifthPlace.filter((v) => (v === "6")).length,
                });
            }
            else if(place[i] === "Sixth" && !formattedData.find(({name}) => name === (place[i]))){
                formattedData.push({
                    name: place[i], 
                    three: sixthPlace.filter((v) => (v === "3")).length,
                    four: sixthPlace.filter((v) => (v === "4")).length,
                    five: sixthPlace.filter((v) => (v === "5")).length,
                    six: sixthPlace.filter((v) => (v === "6")).length,
                });
            }
        }
    }

    useEffect(()=> {
        handleCount();
        handleFormat();
        setData(formattedData);
    }, [selector])

    return (
        <Wrapper>
            <TitleText>Placement Value per Player Count</TitleText>
            {!data
            ?<></>
            :
            <ResponsiveContainer width= "100%" height = "80%">
            <BarChart
                data={data}
                layout = "horizontal"
                margin={{
                top: 0,
                right: 20,
                left: 0,
                bottom: 0
                }}
            >
                
                <CartesianGrid strokeDasharray="1 1"/>
                <XAxis dataKey="name" type = "category" tick = {{fontSize: 13}} interval = {0} stroke="white"></XAxis>
                <YAxis  dataKey="count" type = "number" domain = {[0,10]} stroke="white">
                </YAxis>

                <Tooltip />
                <Bar dataKey="three" stackId = "a" fill="#8884d8" />
                <Bar dataKey="four" stackId = "a" fill="#89ca9d" />
                <Bar dataKey="five" stackId = "a" fill="#2b827f" />
                <Bar dataKey="six" stackId = "a" fill="#db7e1a" />
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
width: 35vw;
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


export default FactionPlacement;