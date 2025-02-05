FROM node:23-slim

RUN apt-get update -y &&\
  apt-get install openssl procps -y &&\
  npm install -g @nestjs/cli@11.0.2

USER node

WORKDIR /home/node/app

RUN command

CMD [ "tail", "-f", "/dev/null" ]