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
    const objectiveValue = req.body.objectiveValue;
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
    const secret = req.body.secret;
    const playerIndex = req.body.playerIndex;
    const points = req.body.points;

    try{
        await client.connect();
        const db = client.db("FinalProject");

        const included = await db.collection("LiveGames").find({_id:_id}).project({"players":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0 }).toArray();
        const targetIncluded = included[0].drawnObjectives
        const playerCheck = await db.collection("LiveGames").find({_id:_id}).project({"drawnObjectives":0,"drawnSecretObjectives":0,"throneSupporters":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0 }).toArray();
        const secretObjectivesCheck = await db.collection("LiveGames").find({_id:_id}).project({"drawnObjectives":0,"throneSupporters":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0, "players":0 }).toArray();
        const mappedPlayerCheck = playerCheck[0].players.map((e,i) => e.pointsOrigin.publicObjectives).flat();

        
        //If the updated variable is the objective, we check if it is trying to be added or removed to then add or substract points to the players that had this objective selected or not
        if(gameObjective){
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
                    const deleteResultValue2 = await db.collection("LiveGames").updateOne({_id:_id},{$pull:{"players.$[elem].pointsOrigin.publicObjectives": gameObjective}},{arrayFilters:[{"elem.nickname": playerCheck[0].players[i].nickname}]})
                }
                res.status(201).json({ status: 201, data: {removeObjective:result, targetedObjective: gameObjective}, message: `Objective ${gameObjective} removed from live game ${_id} && players had their points deducted`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{drawnObjectives: gameObjective}});
                res.status(201).json({ status: 201, data: {removeObjective:result, targetedObjective: gameObjective}, message: `Objective ${gameObjective} removed from live game ${_id}`});
            }
            
        }
        //If the variable is to score Mecatol Rex points, we check the total amount of points the player has and whether to add or substract to the value
        else if(mecatolScore || mecatolScore === 0){
            if(mecatolScore >= 10){
                res.status(400).json({ status: 400, data: {score: mecatolScore, player: player}, message: `A player can only score 10 points with Mecatol Rex`});
            }
            else{
            const result = await db.collection("LiveGames").updateOne({_id:_id},{$set:{"players.$[elem].pointsOrigin.mecatolScore": mecatolScore}},{arrayFilters:[{"elem.nickname":{$eq:nickname}}]})
            res.status(201).json({ status: 201, data: {result: result, player: nickname}, message: `Mecatol score for player ${nickname} updated in live game ${_id}`});
            }
        }
        //If the variable is for the throne support, we check whether the supporter has already supported another player and whether to add or remove a point
        else if(supporter && supported){
            const throneCheck = await db.collection("LiveGames").find({_id:_id}).project({"drawnObjectives":0,"drawnSecretObjectives":0, "_id":0, "host":0, "gameName":0, "playerCount":0,"roundCount":0, "players":0 }).toArray();
            if(manip === "push"){
                if(throneCheck[0].throneSupporters.includes(supporter)){
                    res.status(400).json({ status: 400, data: {supporter: supporter, supported: supported}, message: `A player can only support 1 player for the throne`});
                }
                else{
                    const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].pointsOrigin.supportedBy": supporter}}, {arrayFilters:[{"elem.nickname":{$eq:supported}}]});
                    const globalResult = await db.collection("LiveGames").updateOne({_id: _id},{$push:{throneSupporters: supporter}});
                    res.status(201).json({ status: 201, data: {result:result, supporter: supporter, supported: supported}, message: `Supporter ${supporter} added to the throne array of player ${supported}`});    
                }
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].pointsOrigin.supportedBy": supporter}}, {arrayFilters:[{"elem.nickname":{$eq:supported}}]});
                const globalResult = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{throneSupporters: supporter}});
                res.status(201).json({ status: 201, data: {result:result, supporter: supporter, supported: supported}, message: `Supporter ${supporter} removed from the throne array of player ${supported}`});
            }
        }
        //If the variable is to score an objective, we check whether it is to add or remove the score and the assignation of the objective in the scored array
        else if(scorer && scored){
            if(manip === "push" && objectiveValue === 2){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                const resultValue2 = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                res.status(201).json({ status: 201, data: {result:result, objective: scored, player: scorer}, message: `Objective ${scored} added to the public objectives array of player ${scorer}`});
            }
            else if(manip === "push" && objectiveValue !== 2){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                res.status(201).json({ status: 201, data: {result:result, objective: scored, player: scorer}, message: `Objective ${scored} added to the public objectives array of player ${scorer}`});
            }
            else if(manip === "pull" && objectiveValue === 2){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                const resultValue2 = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                res.status(201).json({ status: 201, data: {result:result, objective: scored, player: scorer}, message: `Objective ${scored} removed from the public objectives array of player ${scorer}`});
            }
            else if(manip === "pull" && objectiveValue !== 2){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].pointsOrigin.publicObjectives": scored}}, {arrayFilters:[{"elem.nickname":{$eq:scorer}}]});
                res.status(201).json({ status: 201, data: {result:result, objective: scored, player: scorer}, message: `Objective ${scored} removed from the public objectives array of player ${scorer}`});
            }
        }
        //If the variable is for the round, we check to either increment or decrement it
        else if(round || round === 0){
            const result = await db.collection("LiveGames").updateOne({_id:_id},{$set:{roundCount: round}});
            res.status(201).json({ status: 201, data: {result: result,}, message: `Round updated to ${round} in live game ${_id}`});
        }
        //If the variable is for unit research, we check to whether push or pull it from the specified player's array
        else if(unit){
            if(manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].unitsUpgraded": unit}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                const resultGlobal = await db.collection("LiveGames").updateOne({_id: _id},{$push:{drawnUnits: unit}});
                res.status(201).json({ status: 201, data: {result:result, unit: unit, player: player}, message: `Unit ${unit} added to the unit array of player ${player}`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].unitsUpgraded": unit}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                const resultGlobal = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{drawnUnits: unit}});
                res.status(201).json({ status: 201, data: {result:result, unit: unit, player: player}, message: `Unit ${unit} removed from the unit array of player ${player}`});
            }
        }
        //If the variable is for tech research, we check to whether push or pull it from the specified player's array
        else if(tech){
            if(manip === "push"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].techsUpgraded": tech}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                const resultGlobal = await db.collection("LiveGames").updateOne({_id: _id},{$push:{drawnTechnologies: tech}});
                res.status(201).json({ status: 201, data: {result:result, tech: tech, player: player}, message: `Tech ${tech} added to the tech array of player ${player}`});
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].techsUpgraded": tech}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                const resultGlobal = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{drawnTechnologies: tech}});
                res.status(201).json({ status: 201, data: {result:result, tech: tech, player: player}, message: `Tech ${tech} removed from the tech array of player ${player}`});
            }
        }
        //If the manip is to score secret objectives, we check to whether push or pull it from the specified player's array
        else if(secret){
            const secretsPlayerCheck = playerCheck[0].players[playerIndex].pointsOrigin.secretObjectives
            if(manip === "push"){
                if(secretsPlayerCheck.length >= 3){
                    res.status(400).json({ status: 400, data: {secret: secret, player: player}, message: `A player can only score 3 points with secret objectives`});
                }
                else if(secretObjectivesCheck[0].drawnSecretObjectives.includes(secret)){
                    res.status(400).json({ status: 400, data: {secret: secret, player: player}, message: `Secret objective ${secret} can only be played once per game`});
                }
                else{
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$push:{"players.$[elem].pointsOrigin.secretObjectives": secret}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                const globalResult = await db.collection("LiveGames").updateOne({_id: _id},{$push:{drawnSecretObjectives: secret}});
                res.status(201).json({ status: 201, data: {result:result, secret: secret, player: player}, message: `Secret objective ${secret} added to the objectives array of player ${player}`});
                }
            }
            else if(manip === "pull"){
                const result = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{"players.$[elem].pointsOrigin.secretObjectives": secret}}, {arrayFilters:[{"elem.nickname":{$eq:player}}]});
                const globalResult = await db.collection("LiveGames").updateOne({_id: _id},{$pull:{drawnSecretObjectives: secret}});
                res.status(201).json({ status: 201, data: {result:result, secret: secret, player: player}, message: `Secret objective ${secret} removed from the objectives array of player ${player}`});
            }
        }
        //If the manip is to update or lock in points, we make sure to set the points to the specified amount
        else if(points){
            const result = await db.collection("LiveGames").updateOne({_id:_id},{$set:{"players.$[elem].points": points}},{arrayFilters:[{"elem.nickname":{$eq:nickname}}]})
            res.status(201).json({status: 201, data: result, message:`Points updated to ${points} for player ${nickname}`});
        }
        
    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {patchLiveGame};