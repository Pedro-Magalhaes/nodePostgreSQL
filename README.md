# nodePostgreSQL
nodejs + express + postgre teste development

O postgres esta num docker:
para subir temos que ter o docker-composer
bastar ir na pasta do postgres10
docker-compose up

webapp = localhost:8080
login: admin , pass: 1234
usuario: postgres
pass: 123456

a porta do banco eh 5432

para subir o servidor temos que fazer na pasta files
$ npm run start:dev

aṕos isso, devemos ir na raiz "files" e:
dar 
$ npm install
após devemos usar
$ sequelize db:migrate

obs: O sequelize deve estar instalado global. $ npm install -g sequelize-cli
$ npm install --save sequelize pg pg-hstore