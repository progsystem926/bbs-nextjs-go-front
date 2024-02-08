init:
	@make build
	@make up
	@make install
install:
	docker-compose exec front yarn
build:
	docker-compose build --no-cache
stop:
	docker-compose stop
up:
	docker-compose up -d
down:
	docker-compose down
app:
	docker-compose exec front bash
generate:
	docker-compose exec front yarn generate
dev:
	docker-compose exec front yarn dev
build-app:
	docker-compose exec front yarn build
start-app:
	docker-compose exec front yarn start
fix:
	@make lint
	@make format
lint:
	docker-compose exec front yarn lint:fix
format:
	docker-compose exec front yarn format:fix
test:
	docker-compose exec front yarn jest
