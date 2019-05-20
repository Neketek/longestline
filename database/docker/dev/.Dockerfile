FROM postgres:11.1-alpine

WORKDIR /

COPY docker/dev docker/dev

RUN sh docker/dev/configure.sh

EXPOSE 5432
