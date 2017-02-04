.PHONY: build run

build:
	docker build -t hero-merge-f .

run:
	docker run --rm --name heromergef -p 8080:8080 --net=host hero-merge-f
