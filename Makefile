create-bucket: 
	npm run aws:create-bucket

build: 
	mkdir -p deploy && npm run aws:prepare-deploy && npm run aws:create-stack

deploy:
	npm run aws:deploy-stack