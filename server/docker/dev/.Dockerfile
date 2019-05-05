FROM node:8.16.0-alpine

WORKDIR server

COPY ./docker/dev/*.sh ./docker/dev/
COPY ./package*.json ./

RUN sh docker/dev/install.sh

CMD sh docker/dev/entry.sh docker/dev/cmd.sh
ENTRYPOINT sh docker/dev/entry.sh
