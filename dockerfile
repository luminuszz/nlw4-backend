FROM node:14

USER root

WORKDIR /home/service

COPY package.json .
COPY yarn.lock .


RUN yarn

CMD yarn start:docker:dev
