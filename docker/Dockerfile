# FROM node:18.3-slim
# FROM node:18.3.0-buster
# FROM alpine:3.16
FROM ubuntu:latest

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_10.x
    # curl -sLf -o /dev/null 'https://deb.nodesource.com/node_10.x/dists/jammy/Release'
RUN apt-get install -y nodejs npm

ADD package.json .
RUN npm install

ENTRYPOINT npm run watch