# TypeScript and Fastify Service Boilerplate
Welcome, fellow Mitiga candidate. We're glad you're here :-)

Please follow the directions to get started with this boilerplate. Make sure the server and tests are running on your machine **before** the interview.

We wish you the best of luck :-)

## Getting Started
1. Clone the repository: 
  
    ```git clone https://github.com/mitiga-recruiting/service-boilerplate-ts.git```

2. You need to set your API key you got from Mitiga:
   
   ```export OPEN_WEATHER_MAP_API_KEY=<PASTE API KEY>```

3. Install dependencies and start the server

    `yarn`:
    ```
    yarn install
    yarn start
    ```
    `npm`:
    ```
    npm install
    npm start
    ```

4. After the service has started, you should see:

    ```
    Server listening at http://127.0.0.1:8080
    ```
5. Make sure the server is responding as expected:

    ```
    $ curl http://localhost:8080/travel/location/32.0853/34.7818/weather

    {"cityName":"Tel Aviv-Yafo","weather":"scattered clouds","temperature":25.04,"feelsLike":25.35}
    ```

## Running lint
`yarn`:
```
  yarn lint
```
`npm`:
```
  npm run lint
```

## Running tests
`yarn`:
```
  yarn test
```
`npm`:
```
  npm test
```

You should see one test that passes:
```
$ yarn test
yarn run v1.22.19
$ vitest --run

 RUN  v0.34.1 /Users/schachar/work/features/tng/service-boilerplate-ts

stdout | test/HttpServer.spec.ts > HttpServer > Verify lat and lon are passed to controller
Server listening at 127.0.0.1:1025

 ✓ test/services/MitigaWeatherRecommendationService.spec.ts (3)
 ✓ test/HttpServer.spec.ts (1)

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  08:37:01
   Duration  1.14s (transform 107ms, setup 2ms, collect 599ms, tests 28ms, environment 0ms, prepare 787ms)

✨  Done in 3.01s.
```


