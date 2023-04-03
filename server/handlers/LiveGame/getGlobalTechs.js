"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint displays all techs shared by all factions
const getGlobalTechs = async (req,res) => {
  const client = new MongoClient(MONGO_URI,options);
  const yes = "Yes"

  try{
    await client.connect();
    const db = client.db("FinalProject");
    const result = await db.collection("Technologies").aggregate([{$unwind:"$technologies"}, {$match:{"technologies.techGlobal": yes}}]).toArray();
    const mappedResult = result.map(e => e.technologies.techName)
    res.status(200).json({ status: 200, data: mappedResult, message: "Global shared tech list found!" });
  }catch(err){
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
}
client.close();
};

module.exports = {getGlobalTechs};