#!/bin/bash
echo RUNNING THE DEPLOY SCRIPT
ls

echo INSTALLING CLIENT DEPENDENCIES
cd client/
yarn

echo INSTALLING SERVER DEPENDENCIES
cd ../server/
yarn

echo FINAL ls
cd ../
ls