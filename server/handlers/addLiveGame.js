"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { v4: uuidv4 } = require("uuid");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//This endpoint adds a livegame with an _id of uuidv4(); to the live games collection

const addLiveGame = async (req,res) => {
    const client = new MongoClient(MONGO_URI,options);

    const host = req.body.host;
    const gameName = req.body.gameName;
    const playerCount = req.body.playerCount;
    const playersObject = req.body.players;
    const playersList = Object.keys(playersObject);

    try{
        await client.connect();
        const db = client.db("FinalProject");
        const newSet = {
            $set:{
            _id: uuidv4(), 
            host: host, 
            gameName: gameName,
            playerCount: playerCount, 
            roundCount: 0, 
            drawnObjectives:[],
            players: Object.keys(playersObject).map((e,i) => {
                const nick = playersList[i];
                return {position: `player${(parseInt([i])+1)}`, 
                    nickname: nick, 
                    faction: playersObject[nick],
                    unitsUpgraded: [],
                    techsUpgraded: [],
                    pointsOrigin: 
                        {
                            mecatolScore: 0,
                            riderScore: 0,
                            publicObjectives:[],
                            secretObjectives:[],
                            supportedBy:[]
                        },
                    points: 0,
                    placementValue: null
                }
            }),
            
        }}
        const result = await db.collection("LiveGames").insertOne(newSet.$set)
        res.status(200).json({ status: 200, data: newSet.$set, message: "TEST" });
    }catch(err){
        console.log(err.stack);
        res.status(500).json({ status: 500, data: req.body, message: err.message });
    }
    client.close();
};

module.exports = {addLiveGame};