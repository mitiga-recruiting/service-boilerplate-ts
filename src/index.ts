import fastify from 'fastify'
import { HelloWorldController } from './controllers/HelloWorldController'
import { HelloWorldService } from './services/HelloWorldService'

const helloWorldController = new HelloWorldController(new HelloWorldService())

const server = fastify()

server.get('/hello-world', helloWorldController.getHelloWorld.bind(helloWorldController))

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})