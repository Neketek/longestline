FROM python:3.7-alpine

WORKDIR server

COPY docker/dev/ docker/dev

RUN sh docker/dev/install.sh

COPY ./ ./

ENTRYPOINT ["/bin/sh"]

CMD ["docker/dev/cmd.sh"]
