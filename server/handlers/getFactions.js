"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint lists all the factions of the game with arrays of theiur units and technologies
const getFactions = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    try{
        await client.connect();
        const db = client.db("FinalProject");
        const result = await db.collection("Factions").find().project().toArray();
        res.status(200).json({ status: 200, data: result[0].factions, message: "Faction list found!" });
    }catch(err){

    }
    client.close();
};

module.exports = {getFactions};