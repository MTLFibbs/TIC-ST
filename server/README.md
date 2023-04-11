# Backend README

There are 29 gets, 2 posts a patch and a delete for this project, please see below for the expected input/output of each separated by request type.

## GET

### /api/get-factions

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"nickname": "Arborec",
			"factionName": "The Arborec",
			"globalUnits": [
				"War Sun",
				"Cruiser II",
				"Dreadnought II",
				"Destroyer II",
				"PDS II",
				"Carrier II",
				"Fighter II",
				"Space Dock II"
			],
			"factionUnits": [
				"Letani Warrior II"
			],
			"globalTechs": [
				"Light/Wave Deflector",
				"Fleet Logistics",
				"Gravity Drive",
				"Antimass Deflectors",
				"Integrated Economy",
				"Transit Diodes",
				"Graviton Laser System",
				"Sarween Tools",
				"Assault Cannon",
				"Duranium Armor",
				"Magen Defense Grid",
				"Plasma Scoring",
				"X-89 Bacterial Weapon",
				"Hyper Metabolism",
				"Dacxive Animators",
				"Neural Motivator"
			],
			"factionTechs": [
				"Bioplasmosis"
			]
		}, {...}, {...} ]
	"message": "Faction list found!"
}
```

### /api/get-faction/:faction

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"nickname": "Letnev",
			"factionName": "The Barony of Letnev",
			"globalUnits": [
				"War Sun",
				"Cruiser II",
				"Dreadnought II",
				"Destroyer II",
				"PDS II",
				"Carrier II",
				"Fighter II",
				"Infantry II",
				"Space Dock II"
			],
			"factionUnits": [],
			"globalTechs": [
				"Light/Wave Deflector",
				"Fleet Logistics",
				"Gravity Drive",
				"Antimass Deflectors",
				"Integrated Economy",
				"Transit Diodes",
				"Graviton Laser System",
				"Sarween Tools",
				"Assault Cannon",
				"Duranium Armor",
				"Magen Defense Grid",
				"Plasma Scoring",
				"X-89 Bacterial Weapon",
				"Hyper Metabolism",
				"Dacxive Animators",
				"Neural Motivator"
			],
			"factionTechs": [
				"L4 Disruptors",
				"Non-Euclidean Shielding"
			]
		}
	],
	"message": "Faction Letnev found!"
}
```

### /api/get-techs

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"techName": "Light/Wave Deflector",
			"techColor": "Blue",
			"techText": "Your ships can move through systems that contain other player's ships.",
			"techGlobal": "Yes",
			"techUnique": "No"
		},
		{
			"techName": "Fleet Logistics",
			"techColor": "Blue",
			"techText": "During each of your turns of the action phase, you may perform 2 actions instead of 1.",
			"techGlobal": "Yes",
			"techUnique": "No"
		}, {...}, {...}]
	"message": "Technology list found!"
}
```
### /api/get-global-techs

**_Output_**
```
{
	"status": 200,
	"data": [
		"Light/Wave Deflector",
		"Fleet Logistics",
		"Gravity Drive",
		"Antimass Deflectors",
		"Integrated Economy",
		"Transit Diodes",
		"Graviton Laser System",
		"Sarween Tools",
		"Assault Cannon",
		"Duranium Armor",
		"Magen Defense Grid",
		"Plasma Scoring",
		"X-89 Bacterial Weapon",
		"Hyper Metabolism",
		"Dacxive Animators",
		"Neural Motivator"
	],
	"message": "Global shared tech list found!"
}
```
### /api/get-faction-techs/:tech

**_Output_**
```
{
	"status": 200,
	"data": [
		"L4 Disruptors",
		"Non-Euclidean Shielding"
	],
	"message": "Global shared tech list found!"
}
```
### /api/get-specific-tech/:tech

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"techName": "Bioplasmosis",
			"techColor": "Green",
			"techText": "At the end of the status phase, you may remove any number of infantry from the planets you control and place them on 1 or more planets you control in the same or adjacent systems.",
			"techGlobal": "No",
			"techUnique": "Arborec"
		}
	],
	"message": "Tech Bioplasmosis found!"
}
```
### /api/get-global-units

**_Output_**
```
{
	"status": 200,
	"data": [
		"War Sun",
		"Cruiser II",
		"Dreadnought II",
		"Destroyer II",
		"PDS II",
		"Carrier II",
		"Fighter II",
		"Infantry II",
		"Space Dock II"
	],
	"message": "Global shared unit list found!"
}
```
### /api/get-faction-units/:faction

**_Output_**
```
{
	"status": 200,
	"data": [
		"Spec Ops II",
		"Advanced Carrier II"
	],
	"message": "Faction unit list for Sol found!"
}
```
### /api/get-specific-unit/:unit

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"unitName": "Carrier II",
			"targetedUnit": "Carrier",
			"unitGlobal": "Yes",
			"unitAttribution": [
				"Arborec",
				"Letnev",
				"Saar",
				"Muaat",
				"Hacan",
				"Creuss",
				"L1Z1X",
				"Mentak",
				"Naalu",
				"Nekro",
				"Sardakk",
				"JolNar",
				"Winnu",
				"Xxcha",
				"Yin",
				"Yssaril"
			]
		}
	],
	"message": "Unit Carrier II found!"
}
```
### /api/get-public-objective/:objective

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"objectiveName": "Expand Borders",
			"objectiveText": "Control 6 planets in non-home systems",
			"objectiveValue": 1
		}
	],
	"message": "Objective Expand Borders found!"
}
```
### /api/get-secret-objective/:objective

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"objectiveName": "Unveil Flagship",
			"objectiveText": "Win a space combat in a system that contains your flagship. You cannot score this objective if your flagship is destroyed in the combat",
			"objectiveValue": 1
		}
	],
	"message": "Objective Unveil Flagship found!"
}
```
### /api/get-objectives

**_Output_**
```
{
	"status": 200,
	"data": {
		"_id": "Objectives",
		"public": [
			{
				"objectiveName": "Corner the Market",
				"objectiveText": "Control 4 planets that each have the same planet trait",
				"objectiveValue": 1
			},
			{
				"objectiveName": "Develop Weaponry",
				"objectiveText": "Own 2 unit upgrade technologies",
				"objectiveValue": 1
			},
			{
				"objectiveName": "Diversify Research",
				"objectiveText": "Own 2 technologies in each of 2 colors",
				"objectiveValue": 1
			},{...}, {...} ]
	"message": "Objective list found!"
	}
}
```
### /api/get-live-game/:_id

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"_id": "a4950e21-7517-4a1a-8c8a-5234fb83368a",
			"host": "Fibbs",
			"gameName": "TESTING GROUNDS 4 players",
			"playerCount": "4",
			"roundCount": 1,
			"drawnObjectives": [
				"Diversify Research",
				"Expand Borders",
				"Subdue the Galaxy"
			],
			"drawnSecretObjectives": [],
			"throneSupporters": [
				"Guest2",
				"Guest3",
				"Fibbs"
			],
			"players": [
				{
					"position": "player1",
					"nickname": "Fibbs",
					"faction": "Arborec",
					"unitsUpgraded": [],
					"techsUpgraded": [],
					"pointsOrigin": {
						"mecatolScore": 1,
						"riderScore": 0,
						"publicObjectives": [
							"Diversify Research"
						],
						"secretObjectives": [],
						"supportedBy": [
							"Guest2"
						]
					},
					"points": 3,
					"placementValue": 2
				},
				{
					"position": "player2",
					"nickname": "Guest1",
					"faction": "Letnev",
					"unitsUpgraded": [],
					"techsUpgraded": [],
					"pointsOrigin": {
						"mecatolScore": 0,
						"riderScore": 0,
						"publicObjectives": [
							"Expand Borders",
							"Subdue the Galaxy",
							"Subdue the Galaxy"
						],
						"secretObjectives": [],
						"supportedBy": []
					},
					"points": 3,
					"placementValue": 3
				},
				{
					"position": "player3",
					"nickname": "Guest2",
					"faction": "Muaat",
					"unitsUpgraded": [],
					"techsUpgraded": [],
					"pointsOrigin": {
						"mecatolScore": 1,
						"riderScore": 0,
						"publicObjectives": [],
						"secretObjectives": [],
						"supportedBy": [
							"Guest3"
						]
					},
					"points": 2,
					"placementValue": 4
				},
				{
					"position": "player4",
					"nickname": "Guest3",
					"faction": "Naalu",
					"unitsUpgraded": [],
					"techsUpgraded": [],
					"pointsOrigin": {
						"mecatolScore": 1,
						"riderScore": 0,
						"publicObjectives": [
							"Subdue the Galaxy",
							"Subdue the Galaxy"
						],
						"secretObjectives": [],
						"supportedBy": [
							"Fibbs"
						]
					},
					"points": 4,
					"placementValue": 1
				}
			]
		}
	],
	"message": "Live game with id a4950e21-7517-4a1a-8c8a-5234fb83368a found!"
}
```
### /api/get-live-games/:host

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"_id": "a4950e21-7517-4a1a-8c8a-5234fb83368a",
			"host": "Fibbs",
			"gameName": "TESTING GROUNDS 4 players",
			"playerCount": "4",
			"roundCount": 1,
			"drawnSecretObjectives": [],
			"throneSupporters": [
				"Guest2",
				"Guest3",
				"Fibbs"
			]
		},
		{
			"_id": "3789546c-d5fd-452c-94b1-711019d73a70",
			"host": "Fibbs",
			"gameName": "Test Game Creation",
			"playerCount": "4",
			"roundCount": 1,
			"drawnSecretObjectives": [],
			"throneSupporters": []
		},
		{
			"_id": "738f69f4-1e74-4397-a525-51daf3a5adfa",
			"host": "Fibbs",
			"gameName": "TESTING THIS",
			"playerCount": "6",
			"roundCount": 1,
			"drawnSecretObjectives": [],
			"throneSupporters": []
		}
	],
	"message": "Live games of host:Fibbs found!"
}
```
### /api/get-faction-popularity

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Arborec",
			"Letnev",
			"Saar",
			"Muaat"
		],
		[
			"JolNar",
			"Yin",
			"Letnev"
		],
		[
			"Letnev",
			"Mentak",
			"L1Z1X",
			"Yssaril",
			"Yin"
		],
		[
			"Creuss",
			"Sol",
			"Hacan",
			"Mentak"
		],
		[
			"Sardakk",
			"Nekro",
			"Winnu"
		]
	],
	"message": "This is the faction popularity"
}
```
### /api/get-faction-popularity/:user

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Arborec",
			"Letnev",
			"Saar",
			"Muaat"
		],
		[
			"JolNar",
			"Yin",
			"Letnev"
		],
		[
			"Letnev",
			"Mentak",
			"L1Z1X",
			"Yssaril",
			"Yin"
		],
		[
			"Creuss",
			"Sol",
			"Hacan",
			"Mentak"
		]
	],
	"message": "This is the faction popularity for games the user has been involved in"
}
```

### /api/get-faction-vp

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			{
				"faction": "Arborec",
				"points": 10
			},
			{
				"faction": "Letnev",
				"points": 8
			},
			{
				"faction": "Saar",
				"points": 6
			},
			{
				"faction": "Muaat",
				"points": 4
			}
		],
		[
			{
				"faction": "JolNar",
				"points": 10
			},
			{
				"faction": "Yin",
				"points": 5
			},
			{
				"faction": "Letnev",
				"points": 4
			}
		], [...], [...] ]
	"message": "Here are all games separated in arrays with objects containing each faction and their respective VP value for the game"
}
```
### /api/get-faction-vp/:user

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			{
				"faction": "Arborec",
				"points": 10
			},
			{
				"faction": "Letnev",
				"points": 8
			},
			{
				"faction": "Saar",
				"points": 6
			},
			{
				"faction": "Muaat",
				"points": 4
			}
		],
		[
			{
				"faction": "JolNar",
				"points": 10
			},
			{
				"faction": "Yin",
				"points": 5
			},
			{
				"faction": "Letnev",
				"points": 4
			}
		], [...], [...] ]
	"message": "Here are all games separated in arrays with objects containing each faction and their respective VP value for the game"
}
```
### /api/get-popular-techs

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Light/Wave Deflector",
			"Bioplasmosis",
			"Antimass Deflectors",
			"Gravity Drive",
			"Fleet Logistics",
			"Plasma Scoring",
			"Duranium Armor",
			"Non-Euclidean Shielding",
			"Plasma Scoring",
			"Magen Defense Grid",
			"Duranium Armor",
			"Sarween Tools",
			"Antimass Deflectors",
			"Gravity Drive",
			"Sarween Tools",
			"Neural Motivator",
			"Hyper Metabolism",
			"Chaos Mapping",
			"Transit Diodes",
			"Graviton Laser System",
			"Magmus Reactor",
			"Plasma Scoring",
			"Duranium Armor",
			"Assault Cannon",
			"Sarween Tools",
			"Antimass Deflectors",
			"Gravity Drive"
		],[...], [...] ]
	"message": "Here are all technologies separated in arrays per game"
}
```
### /api/get-popular-techs/:user

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Light/Wave Deflector",
			"Bioplasmosis",
			"Antimass Deflectors",
			"Gravity Drive",
			"Fleet Logistics",
			"Plasma Scoring",
			"Duranium Armor",
			"Non-Euclidean Shielding",
			"Plasma Scoring",
			"Magen Defense Grid",
			"Duranium Armor",
			"Sarween Tools",
			"Antimass Deflectors",
			"Gravity Drive",
			"Sarween Tools",
			"Neural Motivator",
			"Hyper Metabolism",
			"Chaos Mapping",
			"Transit Diodes",
			"Graviton Laser System",
			"Magmus Reactor",
			"Plasma Scoring",
			"Duranium Armor",
			"Assault Cannon",
			"Sarween Tools",
			"Antimass Deflectors",
			"Gravity Drive"
		],[...], [...] ]
	"message": "Here are all technologies separated in arrays per game"
}
```
### /api/get-popular-units

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Letani Warrior II",
			"Dreadnought II",
			"Dreadnought II",
			"War Sun",
			"War Sun",
			"Prototype War Sun II"
		],
		[
			"Fighter II",
			"Dreadnought II",
			"PDS II",
			"PDS II"
		],
		[
			"Fighter II",
			"Carrier II",
			"Infantry II",
			"Super Dreadnought II",
			"Fighter II",
			"War Sun",
			"PDS II",
			"Destroyer II",
			"Dreadnought II",
			"Cruiser II"
		],
		[
			"Dreadnought II",
			"PDS II",
			"War Sun",
			"Cruiser II",
			"Fighter II",
			"Space Dock II",
			"Spec Ops II",
			"Destroyer II",
			"Fighter II",
			"Dreadnought II",
			"Carrier II",
			"PDS II"
		],
		[
			"War Sun",
			"Exotrireme II",
			"Destroyer II",
			"Carrier II",
			"Cruiser II",
			"PDS II"
		]
	],
	"message": "Here are all technologies separated in arrays per game"
}
```
### /api/get-popular-units/:user

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Letani Warrior II",
			"Dreadnought II",
			"Dreadnought II",
			"War Sun",
			"War Sun",
			"Prototype War Sun II"
		],
		[
			"Fighter II",
			"Dreadnought II",
			"PDS II",
			"PDS II"
		],
		[
			"Fighter II",
			"Carrier II",
			"Infantry II",
			"Super Dreadnought II",
			"Fighter II",
			"War Sun",
			"PDS II",
			"Destroyer II",
			"Dreadnought II",
			"Cruiser II"
		],
		[
			"Dreadnought II",
			"PDS II",
			"War Sun",
			"Cruiser II",
			"Fighter II",
			"Space Dock II",
			"Spec Ops II",
			"Destroyer II",
			"Fighter II",
			"Dreadnought II",
			"Carrier II",
			"PDS II"
		],
		[
			"War Sun",
			"Exotrireme II",
			"Destroyer II",
			"Carrier II",
			"Cruiser II",
			"PDS II"
		]
	],
	"message": "Here are all technologies separated in arrays per game"
}
```
### /api/get-popular-objectives

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Develop Weaponry",
			"Corner the Market",
			"Negociate Trade Routes",
			"Diversify Research",
			"Expand Borders",
			"Galvanize the People"
		],
		[
			"Develop Weaponry",
			"Erect a Monument",
			"Lead from the Front",
			"Corner the Market",
			"Expand Borders"
		],
		[
			"Corner the Market",
			"Erect a Monument",
			"Develop Weaponry",
			"Diversify Research",
			"Intimidate Council",
			"Found a Golden Age"
		],
		[
			"Corner the Market",
			"Develop Weaponry",
			"Diversify Research",
			"Sway the Council",
			"Lead from the Front"
		],
		[
			"Corner the Market",
			"Diversify Research",
			"Found Research Outposts",
			"Develop Weaponry",
			"Intimidate Council",
			"Galvanize the People"
		]
	],
	"message": "Here are all drawn objectives separated in arrays per game"
}
```
### /api/get-popular-objectives/:user

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Develop Weaponry",
			"Corner the Market",
			"Negociate Trade Routes",
			"Diversify Research",
			"Expand Borders",
			"Galvanize the People"
		],
		[
			"Develop Weaponry",
			"Erect a Monument",
			"Lead from the Front",
			"Corner the Market",
			"Expand Borders"
		],
		[
			"Corner the Market",
			"Erect a Monument",
			"Develop Weaponry",
			"Diversify Research",
			"Intimidate Council",
			"Found a Golden Age"
		],
		[
			"Corner the Market",
			"Develop Weaponry",
			"Diversify Research",
			"Sway the Council",
			"Lead from the Front"
		],
		[
			"Corner the Market",
			"Diversify Research",
			"Found Research Outposts",
			"Develop Weaponry",
			"Intimidate Council",
			"Galvanize the People"
		]
	],
	"message": "Here are all drawn objectives separated in arrays per game"
}
```
### /api/get-popular-secret-objectives

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Destroy Their Greatest Ship",
			"Learn the Secrets of the Cosmos",
			"Threaten Enemies",
			"Occupy the Seat of the Empire",
			"Monopolize Production",
			"Mine Rare Metals",
			"Fuel the War Machine",
			"Cut Supply Lines"
		],
		[
			"Establish a Perimeter",
			"Become the Gatekeeper",
			"Turn Their Fleets to Dust ",
			"Adapt New Strategies",
			"Gather a Mighty Fleet",
			"Spark a Rebellion",
			"Forge an Alliance",
			"Monopolize Production"
		],
		[
			"Unveil Flagship",
			"Gather a Mighty Fleet",
			"Occupy the Seat of the Empire",
			"Control the Region",
			"Spark a Rebellion",
			"Mine Rare Metals"
		],
		[
			"Destroy Their Greatest Ship",
			"Unveil Flagship",
			"Cut Supply Lines",
			"Adapt New Strategies",
			"Forge an Alliance"
		],
		[
			"Unveil Flagship",
			"Destroy Their Greatest Ship"
		]
	],
	"message": "Here are all drawn secret objectives separated in arrays per game"
}
```
### /api/get-popular-secret-objectives/:user

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			"Destroy Their Greatest Ship",
			"Learn the Secrets of the Cosmos",
			"Threaten Enemies",
			"Occupy the Seat of the Empire",
			"Monopolize Production",
			"Mine Rare Metals",
			"Fuel the War Machine",
			"Cut Supply Lines"
		],
		[
			"Establish a Perimeter",
			"Become the Gatekeeper",
			"Turn Their Fleets to Dust ",
			"Adapt New Strategies",
			"Gather a Mighty Fleet",
			"Spark a Rebellion",
			"Forge an Alliance",
			"Monopolize Production"
		],
		[
			"Unveil Flagship",
			"Gather a Mighty Fleet",
			"Occupy the Seat of the Empire",
			"Control the Region",
			"Spark a Rebellion",
			"Mine Rare Metals"
		],
		[
			"Destroy Their Greatest Ship",
			"Unveil Flagship",
			"Cut Supply Lines",
			"Adapt New Strategies",
			"Forge an Alliance"
		],
		[
			"Unveil Flagship",
			"Destroy Their Greatest Ship"
		]
	],
	"message": "Here are all drawn secret objectives separated in arrays per game"
}
```
### /api/get-faction-placement

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"playerCount": "4",
			"players": [
				{
					"faction": "Arborec",
					"placementValue": 1
				},
				{
					"faction": "Letnev",
					"placementValue": 2
				},
				{
					"faction": "Saar",
					"placementValue": 3
				},
				{
					"faction": "Muaat",
					"placementValue": 4
				}
			]
		},
		{
			"playerCount": "3",
			"players": [
				{
					"faction": "JolNar",
					"placementValue": 1
				},
				{
					"faction": "Yin",
					"placementValue": 2
				},
				{
					"faction": "Letnev",
					"placementValue": 3
				}
			]
		},{...},{...}]
	"message": "Here are all games separated in arrays with objects containing each faction and their respective placement value for the game"
}
```
### /api/get-faction-tech-popularity

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			{
				"faction": "Arborec",
				"techsUpgraded": [
					"Light/Wave Deflector",
					"Bioplasmosis",
					"Antimass Deflectors",
					"Gravity Drive",
					"Fleet Logistics",
					"Plasma Scoring",
					"Duranium Armor"
				]
			},
			{
				"faction": "Letnev",
				"techsUpgraded": [
					"Non-Euclidean Shielding",
					"Plasma Scoring",
					"Magen Defense Grid",
					"Duranium Armor",
					"Sarween Tools",
					"Antimass Deflectors",
					"Gravity Drive"
				]
			},
			{
				"faction": "Saar",
				"techsUpgraded": [
					"Sarween Tools",
					"Neural Motivator",
					"Hyper Metabolism",
					"Chaos Mapping",
					"Transit Diodes",
					"Graviton Laser System"
				]
			},
			{
				"faction": "Muaat",
				"techsUpgraded": [
					"Magmus Reactor",
					"Plasma Scoring",
					"Duranium Armor",
					"Assault Cannon",
					"Sarween Tools",
					"Antimass Deflectors",
					"Gravity Drive"
				]
			}
		],[...], [...]]
	"message": "Here are all games separated in arrays with objects containing each faction and their 		  respective researched technologies for the game"
}
```
### /api/get-faction-units-popularity

**_Output_**
```
{
	"status": 200,
	"data": [
		[
			{
				"faction": "Arborec",
				"unitsUpgraded": [
					"Letani Warrior II",
					"Dreadnought II"
				]
			},
			{
				"faction": "Letnev",
				"unitsUpgraded": [
					"Dreadnought II",
					"War Sun"
				]
			},
			{
				"faction": "Saar",
				"unitsUpgraded": [
					"War Sun"
				]
			},
			{
				"faction": "Muaat",
				"unitsUpgraded": [
					"Prototype War Sun II"
				]
			}
		],[...], [...]]
		"message": "Here are all games separated in arrays with objects containing each faction and their respective researched units for the game"
}

```
### /api/get-completed-games/:user

**_Output_**
```
{
	"status": 200,
	"data": [
		{
			"_id": "a2059faa-0332-4bcc-ba49-7ea41d23c9c3",
			"host": "MTLFibbs",
			"gameName": "TEST1",
			"playerCount": "4",
			"roundCount": 5,
			"drawnObjectives": [
				"Develop Weaponry",
				"Corner the Market",
				"Negociate Trade Routes",
				"Diversify Research",
				"Expand Borders",
				"Galvanize the People"
			],
			"drawnSecretObjectives": [
				"Destroy Their Greatest Ship",
				"Learn the Secrets of the Cosmos",
				"Threaten Enemies",
				"Occupy the Seat of the Empire",
				"Monopolize Production",
				"Mine Rare Metals",
				"Fuel the War Machine",
				"Cut Supply Lines"
			],
			"drawnTechnologies": [
				"Light/Wave Deflector",
				"Bioplasmosis",
				"Antimass Deflectors",
				"Gravity Drive",
				"Fleet Logistics",
				"Plasma Scoring",
				"Duranium Armor",
				"Non-Euclidean Shielding",
				"Plasma Scoring",
				"Magen Defense Grid",
				"Duranium Armor",
				"Sarween Tools",
				"Antimass Deflectors",
				"Gravity Drive",
				"Sarween Tools",
				"Neural Motivator",
				"Hyper Metabolism",
				"Chaos Mapping",
				"Transit Diodes",
				"Graviton Laser System",
				"Magmus Reactor",
				"Plasma Scoring",
				"Duranium Armor",
				"Assault Cannon",
				"Sarween Tools",
				"Antimass Deflectors",
				"Gravity Drive"
			],
			"drawnUnits": [
				"Letani Warrior II",
				"Dreadnought II",
				"Dreadnought II",
				"War Sun",
				"War Sun",
				"Prototype War Sun II"
			],
			"throneSupporters": [
				"G1",
				"MTLFibbs",
				"G3",
				"G2"
			],
			"playerList": [
				"MTLFibbs",
				"G1",
				"G2",
				"G3"
			],
			"factionList": [
				"Arborec",
				"Letnev",
				"Saar",
				"Muaat"
			],
			"players": [
				{
					"position": "player1",
					"nickname": "MTLFibbs",
					"faction": "Arborec",
					"unitsUpgraded": [
						"Letani Warrior II",
						"Dreadnought II"
					],
					"techsUpgraded": [
						"Light/Wave Deflector",
						"Bioplasmosis",
						"Antimass Deflectors",
						"Gravity Drive",
						"Fleet Logistics",
						"Plasma Scoring",
						"Duranium Armor"
					],
					"pointsOrigin": {
						"mecatolScore": 3,
						"riderScore": 0,
						"publicObjectives": [
							"Galvanize the People",
							"Galvanize the People",
							"Develop Weaponry",
							"Diversify Research"
						],
						"secretObjectives": [
							"Destroy Their Greatest Ship",
							"Learn the Secrets of the Cosmos"
						],
						"supportedBy": [
							"G1"
						]
					},
					"points": 10,
					"placementValue": 1
				},
				{
					"position": "player2",
					"nickname": "G1",
					"faction": "Letnev",
					"unitsUpgraded": [
						"Dreadnought II",
						"War Sun"
					],
					"techsUpgraded": [
						"Non-Euclidean Shielding",
						"Plasma Scoring",
						"Magen Defense Grid",
						"Duranium Armor",
						"Sarween Tools",
						"Antimass Deflectors",
						"Gravity Drive"
					],
					"pointsOrigin": {
						"mecatolScore": 0,
						"riderScore": 0,
						"publicObjectives": [
							"Corner the Market",
							"Expand Borders",
							"Diversify Research",
							"Develop Weaponry"
						],
						"secretObjectives": [
							"Threaten Enemies",
							"Occupy the Seat of the Empire",
							"Monopolize Production"
						],
						"supportedBy": [
							"MTLFibbs"
						]
					},
					"points": 8,
					"placementValue": 2
				},
				{
					"position": "player3",
					"nickname": "G2",
					"faction": "Saar",
					"unitsUpgraded": [
						"War Sun"
					],
					"techsUpgraded": [
						"Sarween Tools",
						"Neural Motivator",
						"Hyper Metabolism",
						"Chaos Mapping",
						"Transit Diodes",
						"Graviton Laser System"
					],
					"pointsOrigin": {
						"mecatolScore": 1,
						"riderScore": 0,
						"publicObjectives": [
							"Expand Borders",
							"Diversify Research",
							"Negociate Trade Routes"
						],
						"secretObjectives": [
							"Mine Rare Metals"
						],
						"supportedBy": [
							"G3"
						]
					},
					"points": 6,
					"placementValue": 3
				},
				{
					"position": "player4",
					"nickname": "G3",
					"faction": "Muaat",
					"unitsUpgraded": [
						"Prototype War Sun II"
					],
					"techsUpgraded": [
						"Magmus Reactor",
						"Plasma Scoring",
						"Duranium Armor",
						"Assault Cannon",
						"Sarween Tools",
						"Antimass Deflectors",
						"Gravity Drive"
					],
					"pointsOrigin": {
						"mecatolScore": 0,
						"riderScore": 0,
						"publicObjectives": [
							"Develop Weaponry"
						],
						"secretObjectives": [
							"Fuel the War Machine",
							"Cut Supply Lines"
						],
						"supportedBy": [
							"G2"
						]
					},
					"points": 4,
					"placementValue": 4
				}
			]
		},{...}, {...}]
	"message": "These are all completed games"
}
```

## PATCH

### /api/update-live-game/:_id
This one is a real doozy, there are tens of possible inputs depending what is being updated at that time in the live game state, I recommend taking a look in the update live game file itself as documenting it would take as much space as the other endpoints combined.

## DELETE

### /api/delete-live-game/:_id

**_Output_**
```
{
	"status": 200,
	"data": {
		"acknowledged": true,
		"deletedCount": 1
	},
	"message": "Live game with id a4950e21-7517-4a1a-8c8a-5234fb83368a deleted!"
}
```

## POST

### /api/add-new-live-game

**_Input_**
```
{
	"host": "MTLFibbs",
	"gameName":"ReadMe Example",
	"playerCount": "3",
	"players":
	{
		"MtlFibbs":"Arborec",
		"Guest1":"Letnev",
		"Guest2": "Sol"
	}
	
}
```
**_Output_**
```
{
	"status": 200,
	"data": {
		"_id": "ecc76654-0d8c-4e4a-8d1c-4dfe87e7b3c3",
		"host": "MTLFibbs",
		"gameName": "ReadMe Example",
		"playerCount": "3",
		"roundCount": 1,
		"drawnObjectives": [],
		"drawnSecretObjectives": [],
		"drawnTechnologies": [],
		"drawnUnits": [],
		"throneSupporters": [],
		"playerList": [
			"MtlFibbs",
			"Guest1",
			"Guest2"
		],
		"factionList": [
			"Arborec",
			"Letnev",
			"Sol"
		],
		"players": [
			{
				"position": "player1",
				"nickname": "MtlFibbs",
				"faction": "Arborec",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player2",
				"nickname": "Guest1",
				"faction": "Letnev",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player3",
				"nickname": "Guest2",
				"faction": "Sol",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			}
		]
	},
	"message": "Live game with _id "ecc76654-0d8c-4e4a-8d1c-4dfe87e7b3c3" added to the LiveGames collection"
}
```

### /api/add-completed-game/:_id

**_Input_**
```
{
		"_id": "ecc76654-0d8c-4e4a-8d1c-4dfe87e7b3c3",
		"host": "MTLFibbs",
		"gameName": "ReadMe Example",
		"playerCount": "3",
		"roundCount": 1,
		"drawnObjectives": [],
		"drawnSecretObjectives": [],
		"drawnTechnologies": [],
		"drawnUnits": [],
		"throneSupporters": [],
		"playerList": [
			"MtlFibbs",
			"Guest1",
			"Guest2"
		],
		"factionList": [
			"Arborec",
			"Letnev",
			"Sol"
		],
		"players": [
			{
				"position": "player1",
				"nickname": "MtlFibbs",
				"faction": "Arborec",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player2",
				"nickname": "Guest1",
				"faction": "Letnev",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player3",
				"nickname": "Guest2",
				"faction": "Sol",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			}
		]
	}
```
**_Output_**
```
{
	"status": 201,
	"data": {
		"_id": "ecc76654-0d8c-4e4a-8d1c-4dfe87e7b3c3",
		"host": "MTLFibbs",
		"gameName": "ReadMe Example",
		"playerCount": "3",
		"roundCount": 1,
		"drawnObjectives": [],
		"drawnSecretObjectives": [],
		"drawnTechnologies": [],
		"drawnUnits": [],
		"throneSupporters": [],
		"playerList": [
			"MtlFibbs",
			"Guest1",
			"Guest2"
		],
		"factionList": [
			"Arborec",
			"Letnev",
			"Sol"
		],
		"players": [
			{
				"position": "player1",
				"nickname": "MtlFibbs",
				"faction": "Arborec",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player2",
				"nickname": "Guest1",
				"faction": "Letnev",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player3",
				"nickname": "Guest2",
				"faction": "Sol",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectives": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			}
		]
	},
	"message": "Game ecc76654-0d8c-4e4a-8d1c-4dfe87e7b3c3 successfully completed and sent to be statted"
}
```