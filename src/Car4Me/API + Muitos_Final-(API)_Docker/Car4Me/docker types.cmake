docker exec -it 9df7c0982f7bb6cd412f24123dc039434d66a480f56e1bad0084ea666007179d mysql -u root -p
USE schedule;
SHOW TABLES;docker volume prune -f

(para consultar mysql)

docker volume prune -f
docker-compose up -d
docker-compose down -v
crtl+c parar 
docker tag <nome da imagem>:latest username/<nome do repositorio>:<versão>
docker tag car4me-node a046363/inf25dw1g31:10.0.0  
docker tag car4me-mysql:latest a046363/inf25dw1g31-mysql:10.0.0
docker push username/repo-api:latest

docker push a046363/inf25dw1g31-mysql:10.0.0
npx @openapitools/openapi-generator-cli generate -i openapi.yaml -g nodejs-express-server -o ./express-server
docker push a046363/inf25dw1g31:10.0.0  

docker container prune
docker rmi $(docker images -q)


docker build -t a046363/inf25dw1g31-mysql:2.0.0 .
docker push a046363/inf25dw1g31-mysql:2.0.0


docker run -it --rm --entrypoint sh myslq:8