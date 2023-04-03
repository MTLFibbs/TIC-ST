"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint displays a specific tech object from the database
const getTech = async (req,res) => {
  const client = new MongoClient(MONGO_URI,options);

  const {tech} = req.params;

  try{
    await client.connect();
    const db = client.db("FinalProject");
    const result = await db.collection("Technologies").aggregate([{$unwind: "$technologies"}, {$match:{"technologies.techName":{$eq: tech}}}, {$replaceRoot:{newRoot: "$technologies"}}]).toArray();
    res.status(200).json({ status: 200, data: result, message: `Tech ${tech} found!`});
}catch(err){
  console.log(err.stack);
  res.status(500).json({ status: 500, data: req.body, message: err.message });
}
client.close();
};

module.exports = {getTech};