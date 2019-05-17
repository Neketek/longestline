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
	docker-compose -f dev.docker-compose.yml \
	run --rm --no-deps \
	--service-ports \
	--entrypoint /bin/sh server


.PHONY: dev-clear-mongodb-data
.ONESHELL:
dev-clear-mongodb-data:
	cd mongodb/data;
	mv db/.gitignore .gitignore-data ;
	mv logs/.gitignore .gitignore-logs ;

	cd db && rm -rf * ;
	cd .. ;

	cd logs && rm -rf * ;
	cd .. ;

	mv .gitignore-logs logs/.gitignore ;
	mv .gitignore-data db/.gitignore ;


.PHONY: dev-run-server-full
.ONESHELL:
dev-run-server-full: dev-build
	docker-compose -f dev.docker-compose.yml \
	run --rm \
	--service-ports \
	--entrypoint /bin/sh server
	docker container stop longestline-mongodb

.PHONY: ssh-dev-server
ssh-dev-server:
	docker exec -it longestline-server /bin/sh
