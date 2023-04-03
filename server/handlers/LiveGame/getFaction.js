"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint lists a specific faction with its /:faction param 
const getFaction = async (req,res) => {
  const client = new MongoClient(MONGO_URI,options);

  const {faction} = req.params;

  try{
      await client.connect();
      const db = client.db("FinalProject");
      const result = await db.collection("Factions").aggregate([{$unwind: "$factions"}, {$match:{"factions.nickname":{$eq: faction}}}, {$replaceRoot:{newRoot: "$factions"}}]).toArray();
      res.status(200).json({ status: 200, data: result, message: `Faction ${faction} found!`});
  }catch(err){
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
};

module.exports = {getFaction};