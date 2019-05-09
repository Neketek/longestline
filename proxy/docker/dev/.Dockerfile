FROM nginx:1.15-alpine

WORKDIR proxy

COPY docker/dev docker/dev

RUN sh docker/dev/configure.sh

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["/bin/sh"]
CMD ["docker/dev/cmd.sh"]
