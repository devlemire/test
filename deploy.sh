#!/bin/bash
echo RUNNING THE DEPLOY SCRIPT
ls
cd client && yarn && cd ../
ls
cd server && yarn && cd ../
ls