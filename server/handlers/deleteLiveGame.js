"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint deletes a specific live game from its _id
const deleteLiveGame = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    const {_id} = req.params;

    try{
        await client.connect();
        const db = client.db("FinalProject");
        const result = await db.collection("LiveGames").deleteOne({_id: _id});
        res.status(200).json({ status: 200, data: result, message: `Live game with id ${_id} deleted!`});

    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {deleteLiveGame};