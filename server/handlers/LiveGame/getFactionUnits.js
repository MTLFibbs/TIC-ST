"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint displays all units owned by the faction in the /:faction param
const getFactionUnits = async (req,res) => {
  const client = new MongoClient(MONGO_URI,options);

  const {faction} = req.params
  const no = "No"

  try{
    await client.connect();
    const db = client.db("FinalProject");
    const result = await db.collection("Units").aggregate([{$unwind:"$units"}, {$match:{$and:[{"units.unitGlobal": no}, {"units.unitAttribution": faction}]}}]).toArray();
    const mappedResult = result.map(e => e.units.unitName)
    res.status(200).json({ status: 200, data: mappedResult, message: `Faction unit list for ${faction} found!` });
  }catch(err){
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
}
client.close();
};

module.exports = {getFactionUnits};