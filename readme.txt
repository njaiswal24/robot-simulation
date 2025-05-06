API Documentation
1. Map Service API
Overview
Provides CRUD operations for managing maps in the system. Built with Fastify following RESTful conventions.

Endpoints
Create Map
POST /maps

Request:

json
{
  "name": "string",
  "description": "string",
  "config": {}
}
Response:

json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "config": {},
    "createdAt": "ISO8601"
  }
}
Get All Maps
GET /maps

Response:

json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "config": {},
      "createdAt": "ISO8601"
    }
  ]
}
Get Single Map
GET /maps/:id

Response:

json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "config": {},
    "createdAt": "ISO8601"
  }
}
Update Map
PUT /maps/:id

Request:

json
{
  "name": "string",
  "description": "string",
  "config": {}
}
Response:

json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "description": "string",
    "config": {},
    "createdAt": "ISO8601"
  }
}
Delete Map
DELETE /maps/:id

Response:

json
{
  "success": true
}
Error Responses
json
{
  "success": false,
  "error": "Error message"
}
Status Codes:

400: Bad Request

404: Not Found

500: Server Error

2. Robot Command API
Overview
Provides command execution functionality for robot control systems.

Endpoints
Get Available Commands
GET /commands

Response:

json
{
  "success": true,
  "data": {
    "commands": ["MOVE", "LEFT", "RIGHT", "REPORT"]
  }
}
Execute Commands
POST /command-sets/execute

Request:

json
{
  "commands": ["MOVE", "RIGHT"],
  "initialPosition": {
    "x": 0,
    "y": 0
  },
  "initialDirection": "NORTH"
}
Response:

json
{
  "success": true,
  "data": {
    "results": [
      {
        "command": "MOVE",
        "oldPosition": {"x":0,"y":0},
        "newPosition": {"x":0,"y":1},
        "oldDirection": "NORTH",
        "newDirection": "NORTH"
      },
      {
        "command": "RIGHT",
        "oldPosition": {"x":0,"y":1},
        "newPosition": {"x":0,"y":1},
        "oldDirection": "NORTH",
        "newDirection": "EAST"
      }
    ],
    "finalPosition": {"x":0,"y":1},
    "finalDirection": "EAST"
  }
}
Error Responses
json
{
  "success": false,
  "error": "Invalid command: JUMP"
}
Status Codes:

400: Invalid command

500: Server Error

Setup & Usage
Install dependencies:

bash
npm install
Start server:

bash
npm run dev
Access API at:

http://localhost:3000
