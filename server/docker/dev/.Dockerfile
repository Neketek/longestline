FROM node:8.16.0-alpine

WORKDIR server

COPY ./docker/dev/*.sh ./docker/dev/
COPY ./package*.json ./

RUN sh docker/dev/install.sh
COPY . .

ENTRYPOINT ["/bin/sh"]
CMD ["docker/dev/cmd.sh"]
