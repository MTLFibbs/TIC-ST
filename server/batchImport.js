const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

//These variables represent the data that needs to be imported on Mongodb
const factionData = require("./data/factionData")
const techData = require("./data/techData")
const unitData = require("./data/unitData")
const actionData = require("./data/actionData")
const objectiveData = require("./data/objectiveData")

// This function takes the objects and sends them to the Mongodb FinalProject database in their respective collection
const batchImport = async () =>{
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("FinalProject");
        const factionList = await db.collection("Factions").insertOne({_id: "Factions", factions: factionData.factions});
        const techList = await db.collection("Technologies").insertOne({_id:"Technologies", technologies: techData.technologies});
        const unitList = await db.collection("Units").insertOne({_id: "Units", units: unitData.units});
        const actionList = await db.collection("Actions").insertOne({_id: "Actions", actions: actionData.actions});
        const objectiveList = await db.collection("Objectives").insertOne({_id: "Objectives", public: objectiveData.publicObjectives, secret: objectiveData.secretObjectives});
    }catch(err){
        console.log(err.stack);
    }
    client.close();
};

batchImport();
