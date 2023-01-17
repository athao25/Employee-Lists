#!/bin/bash

# Start the Node.js server
cd server
yarn start &
echo SERVER_PID=$! "<- Is the PID"

# Start the React development server
cd ../client 
yarn start &

echo "React and Node servers started!"


trap "echo 'CTRL+C detected, stopping the server...'; kill -9 $SERVER_PID" SIGINT SIGTERM
read -p "Press [Enter] to exit the script..."
