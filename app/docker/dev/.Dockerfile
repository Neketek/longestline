FROM node:8.16.0-alpine

WORKDIR app

COPY ./docker/dev/*.sh ./docker/dev/
COPY ./package*.json ./

RUN sh docker/dev/install.sh
COPY . .

EXPOSE 3000

VOLUME ["/app"]

ENTRYPOINT ["/bin/sh"]
CMD ["docker/dev/cmd.sh"]
