FROM alpine:3.9

WORKDIR mongodb

COPY ./docker/dev/*.sh docker/dev/

RUN sh docker/dev/install.sh

VOLUME ["/data"]

EXPOSE 27017

ENTRYPOINT ["/bin/sh"]
CMD ["docker/dev/cmd.sh"]
