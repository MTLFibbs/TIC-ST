const units = require("./unitData")
const technologies = require("./techData")

const list = ["Arborec","Letnev","Muaat", "Saar","Hacan", "Sol", "Creuss", "L1Z1X", "Mentak", "Naalu","Nekro","Sardakk","JolNar","Winnu", "Xxcha", "Yin", "Yssaril"]


const factions = [
    {
        factionName:"The Arborec", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Arborec") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Arborec") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Arborec") ),
    },
    {
        factionName:"The Barony of Letnev", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Letnev") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Letnev") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Letnev") ),
    },
    {
        factionName:"The Clan of Saar", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Saar") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Saar") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Saar") ),
    },
    {
        factionName:"The Embers of Muaat", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Muuat") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Muuat") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Muuat") ),
    },
    {
        factionName:"The Emirates of Hacan", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Hacan") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Hacan") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Hacan") ),
    },
    {
        factionName:"The Federation of Sol", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Sol") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Sol") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Sol") ),
    },
    {
        factionName:"The Ghosts of Creuss", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Creuss") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Creuss") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Creuss") ),
    },
    {
        factionName:"The L1Z1X Mindent", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("L1Z1X") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("L1Z1X") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("L1Z1X") ),
    },
    {
        factionName:"The Mentak Coalition", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Mentak") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Mentak") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Mentak") ),
    },
    {
        factionName:"The Naalu Collective", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Naalu") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Naalu") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Naalu") ),
    },
    {
        factionName:"The Nekro Virus", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Nekro") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Nekro") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => !obj.techUnique === "No" ),
    },
    {
        factionName:"Sardakk N'orr", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Sardakk") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Sardakk") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Sardakk") ),
    },
    {
        factionName:"The Universities of Jol-Nar", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("JolNar") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("JolNar") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("JolNar") ),
    },
    {
        factionName:"The Winnu", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Winnu") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Winnu") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Winnu") ),
    },
    {
        factionName:"The Xxcha Kingdom", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Xxcha") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Xxcha") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Xxcha") ),
    },
    {
        factionName:"The Yin Brotherhood", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Yin") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Yin") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Yin") ),
    },
    {
        factionName:"The Yssaril Tribes", 
        globalUnits: units.units.filter(obj => obj.unitAttribution.includes("Yssaril") && obj.unitGlobal === "Yes" ),
        factionUnits: units.units.filter(obj => obj.unitAttribution.includes("Yssaril") && obj.unitGlobal === "No" ),
        globalTechs: technologies.technologies.filter(obj => obj.techGlobal === "Yes" ),
        factionTechs: technologies.technologies.filter(obj => obj.techUnique.includes("Yssaril") ),
    },
]

console.log(JSON.stringify(factions))
module.exports = {factions};