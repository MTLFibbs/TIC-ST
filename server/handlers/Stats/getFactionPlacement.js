"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
//This endpoint gets an array of all games with each object being the faction and their placement value for the game
const getFactionPlacement = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);
    
    try{
        await client.connect();
        const db = client.db("FinalProject");

        const result = await db.collection("CompletedGames").find({}).project({"_id":0, 
        "host":0, 
        "gameName":0, 
        "roundCount":0, 
        "drawnObjectives":0,
        "drawnSecretObjectives":0, 
        "drawnTechnologies":0,
        "drawnUnits":0, 
        "throneSupporters":0, 
        "playerList":0, 
        "factionList":0, 
        "players.position":0, "players.nickname":0, "players.unitsUpgraded":0, "players.techsUpgraded":0, "players.pointsOrigin":0, "players.points":0
        } ).toArray();

        //const players = result[0].players
        const mapped = result.map((e,i) => {
            return e.players
        })


        res.status(200).json({status:200, data: result, message: "Here are all games separated in arrays with objects containing each faction and their respective placement value for the game"});

    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {getFactionPlacement};