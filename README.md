# Remove black pixels App

A fullstack app with a gRPC server featuring an envoy proxy with redis mounted over docker
compose, and a react client featuring the canvas api. Written in typescript, the app randomly
generates a Matrix of pixels(1s and 0s), then processes it using a deep first search algorithm
to remove isolated Island of black pixels which are not connected to a black pixel in the borders
of the matrix, it uses streams to communicate over the network.

## Tech stack

This project uses the following technologies.

- Package manager: Yarn
- Language: Typescript
- Testing framework: Jest
- backend tools: gRPC, Redis, Envoy, Docker Compose

## To Run this

### Run the backend

- Clone this repo
- navigate to the root folder
- In the terminal, run:

```bash
  yarn
  yarn start
```

### Run Envoy Proxy

- navigate to the root folder and make sure docker is running in your machine, then run

```bash
docker compose up
```

### Run client

- navigate to the root folder, then run

```bash
cd src/client
yarn
yarn start
```

- visit [http://localhost:3000/](http://localhost:3000/) in your browser

## Avalable scripts

- Code coverage: log the code coverage to the console

```bash
yarn test
```

- Test driven development mode:

```bash
yarn test:dev
```

## Contact me

- Site: [adrio.now.sh](https://adrio.now.sh/)
- [LinkedIn](https://www.linkedin.com/in/adrio1992/)

## Developed in 🇲🇽🇲🇽🇲🇽 by Armando del Río (SPECTER-B)
