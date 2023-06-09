const units = require("./unitData")
const technologies = require("./techData")

const list = ["Arborec","Letnev","Muaat", "Saar","Hacan", "Sol", "Creuss", "L1Z1X", "Mentak", "Naalu","Nekro","Sardakk","JolNar","Winnu", "Xxcha", "Yin", "Yssaril"]


const factions = [
    {
        nickname: "Arborec",
        factionName:"The Arborec", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Arborec") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Arborec") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Arborec")).map(obj =>obj.techName),
    },
    {
        nickname: "Letnev",
        factionName:"The Barony of Letnev", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Letnev") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Letnev") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Letnev")).map(obj =>obj.techName),
    },
    {
        nickname: "Saar",
        factionName:"The Clan of Saar", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Saar") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Saar") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Saar")).map(obj =>obj.techName),
    },
    {
        nickname: "Muaat",
        factionName:"The Embers of Muaat", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Muaat") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Muaat") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Muaat")).map(obj =>obj.techName),
    },
    {
        nickname: "Hacan",
        factionName:"The Emirates of Hacan", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Hacan") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Hacan") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Hacan")).map(obj =>obj.techName),
    },
    {
        nickname: "Sol",
        factionName:"The Federation of Sol", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Sol") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Sol") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Sol")).map(obj =>obj.techName),
    },
    {
        nickname: "Creuss",
        factionName:"The Ghosts of Creuss", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Creuss") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Creuss") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Creuss")).map(obj =>obj.techName),
    },
    {
        nickname: "L1Z1X",
        factionName:"The L1Z1X Mindent", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("L1Z1X") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("L1Z1X") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("L1Z1X")).map(obj =>obj.techName),
    },
    {
        nickname: "Mentak",
        factionName:"The Mentak Coalition", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Mentak") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Mentak") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Mentak")).map(obj =>obj.techName),
    },
    {
        nickname: "Naalu",
        factionName:"The Naalu Collective", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Naalu") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Naalu") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Naalu")).map(obj =>obj.techName),
    },
    {
        nickname: "Nekro",
        factionName:"The Nekro Virus", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Nekro") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique !== "Yes").map(obj =>obj.techName),
    },
    {
        nickname: "Sardakk",
        factionName:"Sardakk N'orr", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Sardakk") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Sardakk") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Sardakk")).map(obj =>obj.techName),
    },
    {
        nickname: "JolNar",
        factionName:"The Universities of Jol-Nar", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("JolNar") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("JolNar") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("JolNar")).map(obj =>obj.techName),
    },
    {
        nickname: "Winnu",
        factionName:"The Winnu", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Winnu") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Winnu") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Winnu")).map(obj =>obj.techName),
    },
    {
        nickname: "Xxcha",
        factionName:"The Xxcha Kingdom", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Xxcha") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Xxcha") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Xxcha")).map(obj =>obj.techName),
    },
    {
        nickname: "Yin",
        factionName:"The Yin Brotherhood", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Yin") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Yin") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Yin")).map(obj =>obj.techName),
    },
    {
        nickname: "Yssaril",
        factionName:"The Yssaril Tribes", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Yssaril") && obj.unitGlobal === "Yes" ).map(obj =>obj.unitName),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Yssaril") && obj.unitGlobal === "No" ).map(obj =>obj.unitName),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ).map(obj =>obj.techName),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Yssaril")).map(obj =>obj.techName),
    }
]

module.exports = {factions};