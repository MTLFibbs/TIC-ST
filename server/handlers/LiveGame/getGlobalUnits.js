"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint displays all units shared by all factions except the ones with specific upgrades

const getGlobalUnits = async (req,res) => {
  const client = new MongoClient(MONGO_URI,options);
  const yes = "Yes"

  
  try{
    await client.connect();
    const db = client.db("FinalProject");
    const result = await db.collection("Units").aggregate([{$unwind:"$units"}, {$match:{"units.unitGlobal": yes}}]).toArray();
    const mappedResult = result.map(e => e.units.unitName)
    res.status(200).json({ status: 200, data: mappedResult, message: "Global shared unit list found!" });
  }catch(err){
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
}
client.close();
};

module.exports = {getGlobalUnits};