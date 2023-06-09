'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 8888;
//THESE ARE LIVEGAME ENDPOINTS
const {getFactions} = require("./handlers/LiveGame/getFactions")
const {getFaction} = require("./handlers/LiveGame/getFaction")
const {getTechs} = require("./handlers/LiveGame/getTechs")
const {getGlobalTechs} = require("./handlers/LiveGame/getGlobalTechs")
const {getFactionTechs} = require("./handlers/LiveGame/getFactionTechs")
const {getTech} = require("./handlers/LiveGame/getTech")
const {getUnits} = require("./handlers/LiveGame/getUnits")
const {getGlobalUnits} = require("./handlers/LiveGame/getGlobalUnits")
const {getFactionUnits} = require("./handlers/LiveGame/getFactionUnits")
const {getUnit} = require("./handlers/LiveGame/getUnit")
const {getLiveGame} = require("./handlers/LiveGame/getLiveGame")
const {getLiveGames} = require("./handlers/LiveGame/getLiveGames")
const {getPublicObjective} = require("./handlers/LiveGame//getPublicObjective")
const {getSecretObjective} = require("./handlers/LiveGame/getSecretObjective")
const {getObjectives} = require("./handlers/LiveGame/getObjectives")

const {addLiveGame} = require("./handlers/LiveGame/addLiveGame")
const {addCompletedGame} = require("./handlers/LiveGame/addCompletedGame")
const {deleteLiveGame} = require("./handlers/LiveGame/deleteLiveGame")

const {patchLiveGame} = require("./handlers/LiveGame/patchLiveGame")

//THESE ARE STATS PAGE ENDPOINTS

const {getFactionPopularity} = require("./handlers/Stats/getFactionPopularity")
const {getFactionVP} = require("./handlers/Stats/getFactionVP");
const { getPopularTechs } = require('./handlers/Stats/getPopularTechs');
const { getPopularUnits } = require('./handlers/Stats/getPopularUnits');
const { getPopularObjectives } = require('./handlers/Stats/getPopularObjectives');
const { getPopularSecretObjectives } = require('./handlers/Stats/getPopularSecretObjectives');
const {getFactionPopularityUser} = require("./handlers/Stats/getFactionPopularityUser")
const {getFactionVPUser} = require("./handlers/Stats/getFactionVPUser");
const { getPopularTechsUser } = require('./handlers/Stats/getPopularTechsUser');
const { getPopularUnitsUser } = require('./handlers/Stats/getPopularUnitsUser');
const { getPopularObjectivesUser } = require('./handlers/Stats/getPopularObjectivesUser');
const { getPopularSecretObjectivesUser } = require('./handlers/Stats/getPopularSecretObjectivesUser');
const { getFactionPlacement } = require('./handlers/Stats/getFactionPlacement');
const { getCompletedGames } = require('./handlers/Stats/getCompletedGames');
const { getFactionTechPopularity } = require('./handlers/Stats/getFactionTechPopularity');
const { getFactionUnitsPopularity } = require('./handlers/Stats/getFactionUnitsPopularity');

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
.get("/api/get-public-objective/:objective", getPublicObjective)
.get("/api/get-secret-objective/:objective", getSecretObjective)
.get("/api/get-objectives", getObjectives)

// These endpoints are related to the live game tracker
.get("/api/get-live-game/:_id", getLiveGame)
.get("/api/get-live-games/:host", getLiveGames)

.post("/api/add-new-live-game", addLiveGame)
.post("/api/add-completed-game/:_id", addCompletedGame)
.patch("/api/update-live-game/:_id", patchLiveGame)

.delete("/api/delete-live-game/:_id", deleteLiveGame)

//These endpoints are related to the stats page
.get("/api/get-faction-popularity", getFactionPopularity)
.get("/api/get-faction-vp", getFactionVP)
.get("/api/get-popular-techs", getPopularTechs)
.get("/api/get-popular-units", getPopularUnits)
.get("/api/get-popular-objectives", getPopularObjectives)
.get("/api/get-popular-secret-objectives", getPopularSecretObjectives)

.get("/api/get-faction-popularity/:user", getFactionPopularityUser)
.get("/api/get-faction-vp/:user", getFactionVPUser)
.get("/api/get-popular-techs/:user", getPopularTechsUser)
.get("/api/get-popular-units/:user", getPopularUnitsUser)
.get("/api/get-popular-objectives/:user", getPopularObjectivesUser)
.get("/api/get-popular-secret-objectives/:user", getPopularSecretObjectivesUser)

.get("/api/get-faction-placement", getFactionPlacement)
.get("/api/get-faction-tech-popularity", getFactionTechPopularity)
.get("/api/get-faction-units-popularity", getFactionUnitsPopularity)

.get(`/api/get-completed-games/:user`, getCompletedGames)


// this is our catch all endpoint.
.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})

.listen(PORT, () => console.info(`Listening on port ${PORT}`));
