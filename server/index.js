'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 8888;

const {getFactions} = require("./handlers/getFactions")
const {getFaction} = require("./handlers/getFaction")
const {getTechs} = require("./handlers/getTechs")
const {getGlobalTechs} = require("./handlers/getGlobalTechs")
const {getFactionTechs} = require("./handlers/getFactionTechs")
const {getTech} = require("./handlers/getTech")
const {getUnits} = require("./handlers/getUnits")
const {getGlobalUnits} = require("./handlers/getGlobalUnits")
const {getFactionUnits} = require("./handlers/getFactionUnits")
const {getUnit} = require("./handlers/getUnit")
const {getLiveGame} = require("./handlers/getLiveGame")
const {getLiveGames} = require("./handlers/getLiveGames")
const {addLiveGame} = require("./handlers/addLiveGame")
const {deleteLiveGame} = require("./handlers/deleteLiveGame")



express()
.use(function(req, res, next) {
    res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
})
.use(morgan('tiny'))
//.use(express.static('./server/assets'))
.use(express.json())
.use(express.urlencoded({ extended: false }))
//.use('/', express.static(__dirname + '/'))

// REST endpoints
//All these endpoints gather initial data from the database
.get("/api/get-factions", getFactions )
.get("/api/get-faction/:faction", getFaction )
.get("/api/get-techs", getTechs )
.get("/api/get-global-techs", getGlobalTechs )
.get("/api/get-faction-techs/:faction", getFactionTechs )
.get("/api/get-specific-tech/:tech", getTech )
.get("/api/get-units", getUnits )
.get("/api/get-global-units", getGlobalUnits )
.get("/api/get-faction-units/:faction", getFactionUnits )
.get("/api/get-specific-unit/:unit", getUnit )

// These endpoints are related to the live game tracker
.get("/api/get-live-game/:_id", getLiveGame)
.get("/api/get-live-games/:host", getLiveGames)

.post("/api/add-new-live-game", addLiveGame)

.delete("/api/delete-live-game/:_id", deleteLiveGame)


// this is our catch all endpoint.
.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})

.listen(PORT, () => console.info(`Listening on port ${PORT}`));
