"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint   
const addCompletedGame = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    const {_id} = req.params;
    
   

    try{
        await client.connect();
        const db = client.db("FinalProject");

        const playerCheck = await db.collection("LiveGames").find({_id:_id}).project({"drawnObjectives":0,"drawnSecretObjectives":0,"throneSupporters":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0 }).toArray();
        const playerCheckArray = playerCheck[0].players;

        if(playerCheck.length === 0){
            res.status(400).json({ status: 400, data: _id, message: `Make sure the game Id is valid!` })
        }

        else{
            const drawnObjectivesCheck = await db.collection("LiveGames").find({_id:_id}).project({"players":0,"drawnSecretObjectives":0,"throneSupporters":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0 }).toArray();
            const pointTotalCheck = playerCheckArray.map((e,i) => {
                return e.points;
            })
            const objectiveTotalCheck = drawnObjectivesCheck[0].drawnObjectives
    
    
            if(!pointTotalCheck.includes(10) && objectiveTotalCheck.length < 10){
                res.status(400).json({ status: 400, data: {points: pointTotalCheck, objectives:objectiveTotalCheck}, message: `Make sure one of your players has 10 points or that 10 objectives have been revealed` })
            }

            else{
                const pointsMapped = playerCheckArray.map((e, i) => {
                    return ({nickname: e.nickname, points: e.points})
                })
                const objectMap = pointsMapped.map((e) => Object.values(e)).sort((a,b) => b[1] - a[1])
                const neededValues = objectMap.map((e) => e[0])
                const placementCalculator = neededValues.map((e) => ({nickname: e , placement: (neededValues.indexOf(e)+1)}))
        
                let i = 0;
        
                for(i=0; i < placementCalculator.length; i++){
                    const attributePlacement = await db.collection("LiveGames").updateOne({_id:_id}, {$set:{"players.$[elem].placementValue": placementCalculator[i].placement}},{arrayFilters:[{"elem.nickname":{$eq:placementCalculator[i].nickname}}]})
                }
                
                const Set = await db.collection("LiveGames").find({_id: _id}).toArray()
                const result = await db.collection("CompletedGames").insertOne(Set[0]);
                const deletedGame = await db.collection("LiveGames").deleteOne({_id:_id});
                res.status(201).json({ status: 201, data: result, message: `Game ${_id} successfully completed and sent to be statted` })

            }
        }

    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {addCompletedGame};