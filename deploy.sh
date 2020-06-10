#!/bin/bash
echo RUNNING THE DEPLOY SCRIPT
ls

echo INSTALLING CLIENT DEPENDENCIES
cd client/
yarn
cd ../

echo INSTALLING SERVER DEPENDENCIES
cd server/
yarn
cd ../

echo BUILDING THE CLIENT
cd client/
yarn build
cd ../

echo RUNNING THE TESTS
cd client/
yarn test
cd ../

echo DEPLOYSH FINISHED