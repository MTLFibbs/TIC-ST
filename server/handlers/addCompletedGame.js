"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint   
const addCompletedGame = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    const test = req.body;
    const {_id} = req.params;
    

    try{
        await client.connect();
        const db = client.db("FinalProject");
        res.status(201).json({ status: 201, data: req.body, message: "TEST SUCCESSFUL" });

    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {addCompletedGame};