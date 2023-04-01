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
    const supported = req.body.throneTarget;
    const scorer = req.body.scorerName;
    const scored = req.body.scoredObjective;
    const round = req.body.roundScore;
    const unit = req.body.unit;
    const tech = req.body.tech;
    const player = req.body.player;

    try{
        await client.connect();
        const db = client.db("FinalProject");

        if(gameObjective){
            const included = await db.collection("LiveGames").find({_id:_id}).project({"players":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0 }).toArray();
            const targetIncluded = included[0].drawnObjectives
            const playerCheck = await db.collection("LiveGames").find({_id:_id}).project({"drawnObjectives":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0 }).toArray();
            const mappedPlayerCheck = playerCheck[0].players.map((e,i) => e.pointsOrigin.publicObjectives).flat();
            //res.status(201).json({ status: 201, data: playerCheck[0].players[0].nickname, message: `TEST`});
            
            if(targetIncluded.includes(gameObjective) === true && manip ==="push"){
                res.status(400).json({ status: 400, data: {Objective:gameObjective, alreadyIncludedObjectives: targetIncluded}, message: `Objective ${gameObjective} cannot be added to live game ${_id} as it already exists within the game`});
            }
            else if(manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{drawnObjectives: gameObjective}});
                res.status(201).json({ status: 201, data: {result:result, targetedObjective: gameObjective}, message: `Objective ${gameObjective} added to live game ${_id}`});
            }
            else if(manip === "pull" && mappedPlayerCheck.includes(gameObjective)){
                let i = 0;
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{drawnObjectives: gameObjective}});
                for(i = 0; i < playerCheck[0].players.length; i++){
                    const deleteResult = await db.collection("LiveGames").updateOne({_id:_id},{$pull:{"players.$[elem].pointsOrigin.publicObjectives": gameObjective}},{arrayFilters:[{"elem.nickname": playerCheck[0].players[i].nickname}]})
                }
                res.status(201).json({ status: 201, data: {removeObjective:result, targetedObjective: gameObjective}, message: `Objective ${gameObjective} removed from live game ${_id} && players had their points deducted`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{drawnObjectives: gameObjective}});
                res.status(201).json({ status: 201, data: {removeObjective:result, targetedObjective: gameObjective}, message: `Objective ${gameObjective} removed from live game ${_id}`});
            }
            
        }
        else if(mecatolScore || mecatolScore === 0){
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
        else if(scorer && scored){
            if(manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                res.status(201).json({ status: 201, data: {result:result, objective: scored, player: scorer}, message: `Objective ${scored} added to the public objectives array of player ${scorer}`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                res.status(201).json({ status: 201, data: {result:result, objective: scored, player: scorer}, message: `Objective ${scored} removed from the public objectives array of player ${scorer}`});
            }
        }
        else if(round || round === 0){
            const result = await db.collection("LiveGames").updateOne({_id:_id},{$set:{roundCount: round}});
            res.status(201).json({ status: 201, data: {result: result,}, message: `Round updated to ${round} in live game ${_id}`});
        }
        else if(unit){
            if(manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].unitsUpgraded": unit}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                res.status(201).json({ status: 201, data: {result:result, unit: unit, player: player}, message: `Unit ${unit} added to the unit array of player ${player}`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].unitsUpgraded": unit}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                res.status(201).json({ status: 201, data: {result:result, unit: unit, player: player}, message: `Unit ${unit} removed from the unit array of player ${player}`});
            }
        }
        else if(tech){
            if(manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].techsUpgraded": tech}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                res.status(201).json({ status: 201, data: {result:result, tech: tech, player: player}, message: `Tech ${tech} added to the tech array of player ${player}`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].techsUpgraded": tech}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                res.status(201).json({ status: 201, data: {result:result, tech: tech, player: player}, message: `Tech ${tech} removed from the tech array of player ${player}`});
            }
        }
        
    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {patchLiveGame};