image: 
	@make bld
	@cd be && docker build -t jeffthenaef/pbui . 
	@docker push jeffthenaef/pbui

bld:
	@cd be/cmd && rm -rf kodata  && cd ../ && yarn && yarn build
	@mv build kodata && mv kodata be/cmd
	@cd be/cmd && go mod tidy && go build -o be main.go

release:
	@make bld
	@make image

ko:
	@export KO_DOCKER_REPO=gcr.io/mineonlium && ko apply -f ko.yaml