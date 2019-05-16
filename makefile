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
dev-run-server: dev-build
	docker-compose -f dev.docker-compose.yml run --rm --no-deps --entrypoint /bin/sh server


.PHONY: ssh-dev-server
ssh-dev-server:
	docker exec -it longestline-server /bin/sh
