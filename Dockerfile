FROM node:latest

RUN npm i -g @nestjs/cli
RUN npm i -g nodemon

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
RUN npm install
