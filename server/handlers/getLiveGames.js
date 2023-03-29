"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint gets a list of all live games owned by the specified host
const getLiveGames = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    const {host} = req.params;
    
    try{
        await client.connect();
        const db = client.db("FinalProject");
        const result = await db.collection("LiveGames").find({host: host}).project({"drawnObjectives":0, "players":0}).toArray();
        res.status(200).json({ status: 200, data: result, message: `Live games of host:${host} found!`});

    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {getLiveGames};