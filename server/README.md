# Backend README

## POST

### /api/add-new-live-game

**_Input_**
```
{
	"host": "Fibbs",
	"playerCount": "4",
	"players":
		{
			"Fibbs": "Arborec",
			"Guest1": "Letnev",
			"Guest2":"Muaat",
			"Guest3":"Naalu"
		}
}
```
**_Output_**
```
{
	"status": 200,
	"data": {
		"_id": "8d3808f0-7336-46e5-bd7b-b4ffa3bdce53",
		"host": "Fibbs",
		"playerCount": "4",
		"roundCount": 0,
		"drawnObjectives": [],
		"players": [
			{
				"position": "player1",
				"nickname": "Fibbs",
				"faction": "Arborec",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectivesValueOne": [],
					"publicObjectivesValueTwo": [],
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
					"publicObjectivesValueOne": [],
					"publicObjectivesValueTwo": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player3",
				"nickname": "Guest2",
				"faction": "Muaat",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectivesValueOne": [],
					"publicObjectivesValueTwo": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			},
			{
				"position": "player4",
				"nickname": "Guest3",
				"faction": "Naalu",
				"unitsUpgraded": [],
				"techsUpgraded": [],
				"pointsOrigin": {
					"mecatolScore": 0,
					"riderScore": 0,
					"publicObjectivesValueOne": [],
					"publicObjectivesValueTwo": [],
					"secretObjectives": [],
					"supportedBy": []
				},
				"points": 0,
				"placementValue": null
			}
		]
	},
	"message": "TEST"
}
```