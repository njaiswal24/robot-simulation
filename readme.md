# Robot Command Control System

A TypeScript implementation for controlling a robot's movements and direction through a set of commands, with REST API support via Fastify.

## Features

- Execute single or multiple robot commands
- Track robot position and direction
- Generate reports of current state
- REST API endpoint for command execution
- Fully typed with TypeScript

## Command Types

The system supports the following commands:

- `MOVE`: Advance the robot one unit in its current direction
- `LEFT`: Rotate the robot 90° left
- `RIGHT`: Rotate the robot 90° right
- `REPORT`: Get the current position and direction

## Directions

The robot can face one of four cardinal directions:

- `NORTH`
- `SOUTH`
- `EAST`
- `WEST`

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install

   
