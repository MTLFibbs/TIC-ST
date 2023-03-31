"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint updates a specific livegame with new data targeting the :_id of the livegame

const patchLiveGame = async (req,res) =>{
    const client = new MongoClient(MONGO_URI,options);

    const {_id} = req.params;
    const gameObjective = req.body.gameObjective;
    const manip = req.body.manip;
    const mecatolScore = req.body.mecatolScore;
    const nickname = req.body.nickname;
    const supporter = req.body.throneSupporter;
    const supported = req.body.throneTarget

    try{
        await client.connect();
        const db = client.db("FinalProject");

        if(gameObjective){
            const included = await db.collection("LiveGames").find({_id:_id}).project({"players":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0 }).toArray();
            const targetIncluded = included[0].drawnObjectives
    
            if(targetIncluded.includes(gameObjective) === true && manip ==="push"){
                res.status(400).json({ status: 400, data: {Objective:gameObjective, alreadyIncludedObjectives: targetIncluded}, message: `Objective ${gameObjective} cannot be added to live game ${_id} as it already exists within the game`});
            }
            else if(gameObjective && manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{drawnObjectives: gameObjective}});
                res.status(201).json({ status: 201, data: {result:result, targetedObjective: gameObjective}, message: `Objective ${gameObjective} added to live game ${_id}`});
            }
            else if(gameObjective && manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{drawnObjectives: gameObjective}});
                res.status(201).json({ status: 201, data: {result:result, targetedObjective: gameObjective}, message: `Objective ${gameObjective} removed from live game ${_id}`});
            }
        }
        else if(mecatolScore){
            const result = await db.collection("LiveGames").updateOne({_id:_id},{$set:{"players.$[elem].pointsOrigin.mecatolScore": mecatolScore}},{arrayFilters:[{"elem.nickname":{$eq:nickname}}]})
            res.status(201).json({ status: 201, data: {result: result, player: nickname}, message: `Mecatol score for player ${nickname} updated in live game ${_id}`});
        }
        else if(supporter && supported){
            if(manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].pointsOrigin.supportedBy": supporter}}, {arrayFilters:[{"elem.nickname":{$eq:supported}}]});
                res.status(201).json({ status: 201, data: {result:result, supporter: supporter, supported: supported}, message: `Supporter ${supporter} added to the throne array of player ${supported}`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].pointsOrigin.supportedBy": supporter}}, {arrayFilters:[{"elem.nickname":{$eq:supported}}]});
                res.status(201).json({ status: 201, data: {result:result, supporter: supporter, supported: supported}, message: `Supporter ${supporter} removed from the throne array of player ${supported}`});
            }
        }
        
    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {patchLiveGame};