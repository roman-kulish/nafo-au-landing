DIR=$(shell pwd)
FRONTEND=$(DIR)/frontend
INFRA=$(DIR)/infra
BUCKET=nafo.ukrainians.org.au

install: ## Install Node modules.
	@cd $(FRONTEND) && npm install

dev: ## Run development environment.
	@cd $(FRONTEND) && npm run dev

build: ## Build frontend
	@cd $(FRONTEND) && npm run build

deploy: build ## Deploy stack to AWS.
	@cd $(INFRA) && cdk deploy --require-approval never

sync: build ## Sync local assets with S3 bucket.
	@cd $(FRONTEND) && \
	aws s3 cp index.html $(BUCKET) && \
	aws s3 sync --delete assets $(BUCKET)/assets

.DEFAULT_GOAL:=help
.PHONY: help

help:           ## Show this help.
	@awk 'BEGIN {FS = ":.*##"; printf "Usage: make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)