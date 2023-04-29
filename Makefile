DIR=$(shell pwd)
BUCKET=nafo.ukrainians.org.au

dev: ## Run development environment.
	@hugo serve --buildDrafts --buildFuture --buildExpired

install: ## Install Node modules.
	npm install
	npm install -g postcss-cli esbuild

build: ## Build frontend
	@hugo --buildExpired

all: install build ## Install Node modules and build.

.DEFAULT_GOAL:=help
.PHONY: help

help: ## Show this help.
	@awk 'BEGIN {FS = ":.*##"; printf "Usage: make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)