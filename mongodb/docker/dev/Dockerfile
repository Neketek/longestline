FROM alpine:3.9

WORKDIR mongodb

COPY ./docker/dev/*.sh docker/dev/

RUN sh install.sh

CMD ["cmd.sh"]
