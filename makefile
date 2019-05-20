.PHONY: all
all:

.PHONY: dev-run
dev-run: dev-stop dev-build
	docker-compose -f dev.docker-compose.yml up

.PHONY: dev-build
dev-build:
	docker-compose -f dev.docker-compose.yml build

.PHONY: dev-stop
dev-stop:
	docker-compose -f dev.docker-compose.yml down


.PHONY: dev-run-app
dev-run-app:
	docker-compose -f dev.docker-compose.yml run --rm --no-deps --entrypoint /bin/sh app


.PHONY: dev-run-server
dev-run-server:
	docker-compose -f dev.docker-compose.yml build server;
	docker-compose -f dev.docker-compose.yml \
	run --rm --no-deps \
	--service-ports \
	--entrypoint /bin/sh server


.PHONY: dev-run-server-full
.ONESHELL:
dev-run-server-full:
	docker-compose -f dev.docker-compose.yml build server database redis;
	docker-compose -f dev.docker-compose.yml \
	run --rm \
	--service-ports \
	--entrypoint /bin/sh server
	docker container stop longestline-database longestline-redis


.PHONY: dev-run-database
.ONESHELL:
dev-run-database:
	docker-compose -f dev.docker-compose.yml build database ;
	docker-compose -f dev.docker-compose.yml \
	run --rm --no-deps \
	--entrypoint /bin/sh \
	database

.PHONY: ssh-dev-server
ssh-dev-server:
	docker exec -it longestline-server /bin/sh


.PHONY: ssh-dev-database
ssh-dev-database:
	docker exec -it longestline-database /bin/sh
