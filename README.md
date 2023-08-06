# TypeScript and Fastify Service Boilerplate
Welcome, fellow Mitiga candidate. We're glad you're here :-)

Please follow the directions to get started with this boilerplate. Make sure the server and tests are running on your machine **before** the interview.

We wish you the best of luck :-)

## Getting Started

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

After the service has started, you should see:

```
Server listening at http://127.0.0.1:8080
```
Make sure the server is responding as expected:

```
$ curl http://127.0.0.1:8080/hello-world

{"greeting":"Hello, world!"}%             
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
$ vitest

 DEV  v0.34.1 /your/machine/service-boilerplate-ts

 ✓ test/services/HelloWorldService.spec.ts (1)
   ✓ getHelloWorldString (1)
     ✓ should return a hello world string

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  12:16:50
   Duration  921ms (transform 47ms, setup 0ms, collect 17ms, tests 3ms, environment 0ms, prepare 601ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```


