"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };


  //This endpoint gets an array of all factions and their average pickrate separated in an array per game

const getFactionPopularity = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    try{
        await client.connect();
        const db = client.db("FinalProject");

        const result = await db.collection("CompletedGames").find({}).project({"_id":0,
        "host":0, 
        "gameName":0, 
        "playerCount":0, 
        "roundCount":0, 
        "drawnObjectives":0,
        "drawnSecretObjectives":0, 
        "drawnTechnologies":0,
        "drawnUnits":0, 
        "throneSupporters":0, 
        "playerList":0, 
        "players":0
        }).toArray();
        const mapped = result.map((e) => {
            return e.factionList;
        })
        res.status(200).json({status:200, data: mapped, message: "This is the faction popularity"});

    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {getFactionPopularity};