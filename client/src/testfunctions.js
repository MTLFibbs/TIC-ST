const factions = ["Arborec","Letnev","Muaat", "Saar","Hacan", "Sol", "Creuss", "L1Z1X", "Mentak", "Naalu","Nekro","Sardakk","JolNar","Winnu", "Xxcha", "Yin", "Yssaril"];

const testOutput = [[{faction: "Yssaril", points: 10}, {faction: "Creuss", points: 5}], 
                    [{faction: "Muaat", points: 5}, {faction: "Yssaril", points: 2}], 
                    [{faction: "Creuss", points: 1}, {faction: "Letnev", points: 10}, {faction: "Yssaril", points: 10}]];

const vpArr = [];
const formattedData = [];

const flatArr = testOutput.flat();

const handleCount = () => {
    let i = 0;
    for(i=0; i<factions.length; i++){
        vpArr.push(
            {   faction: factions[i], 
                timesPlayed: (flatArr.filter((v) => (v.faction === factions[i])).length),
                pointsAccrued: flatArr.map((e,index) => {
                    if(e.faction === factions[i]){
                        return e.points;
                    }
                    else{
                        return null
                    }
                })
            });
    }
}

const handleCleaning = () => {
    let i = 0;
    for(i=0; i<factions.length; i++){
        vpArr[i].pointsAccrued =  vpArr[i].pointsAccrued.filter(n => n);
    }
}
const handleFormat = () => {
    let i = 0;
    for(i=0; i<factions.length; i++){
        const sum = vpArr[i].pointsAccrued.reduce((partialSum, a) => partialSum + a, 0);

        if((sum /vpArr[i].timesPlayed).toFixed(2) === "NaN"){
            formattedData.push({name: factions[i], "VP": 0});
        }
        else{
            formattedData.push({name: factions[i], "VP": (sum /vpArr[i].timesPlayed).toFixed(2)});
        }
    }
}

handleCount(); 
handleCleaning();
handleFormat();
console.log(formattedData);