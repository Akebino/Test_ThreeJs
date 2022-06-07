FROM ubuntu:latest

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl

RUN apt-get install -y nodejs npm

ADD package.json .
RUN npm install