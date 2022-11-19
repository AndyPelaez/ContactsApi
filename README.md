# ContactsApi

This project was generated with [node](https://nodejs.org/en/) version v16.16.0 and **npm** version 8.11.0.
### Steps to install:

> - Clone the repository -->>  git clone https://github.com/AndyPelaez/ContactsApi.git
> - Ensure you installed mongoDB server([link](https://www.mongodb.com/docs/manual/installation/))
> - cd [path]/ContactsApi
> - npm i

## LOCAL
### DEVELOPMENT MODE

> - Before running the api, ensure the connection string is rigth in the env file(.env.development)
> - Run “npm run migrate:up” to execute all migrations
> - RUN “npm run start:dev” to run the api server


### TESTING MODE

> - Before running the api, ensure the connection string is rigth in the env file(.env.testing)
> - RUN “npm run test” to run the api tests


## AUTOMATIC BUILD
> - Ensure you have installed docker on your machine([link](https://docs.docker.com/engine/install/))
> - Ensure you do not have any service running on ports 4200 and 3001.
> - Clone the Angular app [repository](https://github.com/AndyPelaez/ContactsApp) and store it in the same project's folder.
> - Run automatic build “docker-compose up --build -d”
> - Check services are running correctly in http://localhost:4200,
> - **Note**: This may take some time installing “serve” package using npx.
> - Run “npm run migrate:up” to add initial data.