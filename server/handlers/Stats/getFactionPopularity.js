"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };


  //This endpoint gets an array of all factions and their average pickrate

const getFactionPopularity = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    try{
        await client.connect();
        const db = client.db("FinalProject");

        

    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {getFactionPopularity};