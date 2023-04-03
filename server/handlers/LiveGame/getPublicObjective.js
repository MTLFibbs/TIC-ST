"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint lists a specific objective with its /:objective param
const getPublicObjective = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    const {objective} = req.params

    try{
        await client.connect();
        const db = client.db("FinalProject");
        const result = await db.collection("Objectives").aggregate([{$unwind: "$public"}, {$match:{"public.objectiveName":{$eq: objective}}}, {$replaceRoot:{newRoot: "$public"}}]).toArray();
        res.status(200).json({ status: 200, data: result, message: `Objective ${objective} found!`});
  
    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
}

module.exports = {getPublicObjective};