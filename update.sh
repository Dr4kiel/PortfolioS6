#!/bin/bash

# Script de mise à jour du site

git pull
pm2 stop portfolio
npm run build
pm2 start portfolio
