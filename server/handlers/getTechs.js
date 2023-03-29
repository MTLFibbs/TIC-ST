"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint displays all tech objects from the database
const getTechs = async (req,res) => {
  const client = new MongoClient(MONGO_URI,options);
  try{
    await client.connect();
    const db = client.db("FinalProject");
    const result = await db.collection("Technologies").find().toArray();
    res.status(200).json({ status: 200, data: result[0].technologies, message: "Technology list found!" });
  }catch(err){
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
  client.close();
};



module.exports = {getTechs};