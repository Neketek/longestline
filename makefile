.PHONY: all
all:

.PHONY: dev-build
dev-build:
	docker-compose -f dev.docker-compose.yml build

.PHONY: dev-run
dev-run: dev-stop
	docker-compose -f dev.docker-compose.yml up

.PHONY: dev-stop
dev-stop:
	docker-compose -f dev.docker-compose.yml down
