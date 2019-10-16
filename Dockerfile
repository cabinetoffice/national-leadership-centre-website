FROM node:alpine

WORKDIR /usr/src

COPY package.json /usr/src

RUN npm install -g