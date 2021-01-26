# Desenvolvido por Hernani Amancio de Almeida


## Executar projeto

Para executar o projeto, sera necessario instalar os seguintes programas em seu computador:

- Nodejs 
- Docker
- Docker Compose
- Postbird
- yarn

## Desenvolvimento

Para iniciar o desenvolvimento e necessario clonar o projeto do Github num diretorio de sua preferencia com os seguintes comandos:


- `cd "diretorio de sua preferencia"`
- `git clone https://github.com/2020nani/nodeApi.git`
- `cd nodeApi`


Apos clonar o projeto em seu computador e necessario instalar as dependencias que o projeto utiliza com o seguinte comando:


- `npm install` ou `yarn` 


Crie um container docker para rodar uma imagem postgres para o banco de dados com o comando

- `docker-compose up`


- Acesse seu container com o Postbird que pedira as variaveis contidas no arquivo docker-compose.yml
- username = POSTGRES_USER
- password = POSTGRES_PASSWORD
- porta = 5432


Rode o programa em seu computador na porta 3333 com os seguintes comando


- `yarn sequelize db:migrate` para criar as tabelas no banco de dados postgres
- `npm run dev` ou 
- `yarn dev` 




