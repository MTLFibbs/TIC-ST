"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint displays a specific unit object from the database
const getUnit = async (req,res) => {
  const client = new MongoClient(MONGO_URI,options);

  const {unit} = req.params;

  try{
    await client.connect();
    const db = client.db("FinalProject");
    const result = await db.collection("Units").aggregate([{$unwind: "$units"}, {$match:{"units.unitName":{$eq: unit}}}, {$replaceRoot:{newRoot: "$units"}}]).toArray();
    res.status(200).json({ status: 200, data: result, message: `Unit ${unit} found!`});
}catch(err){
  console.log(err.stack);
  res.status(500).json({ status: 500, data: req.body, message: err.message });
}
client.close();
};

module.exports = {getUnit};