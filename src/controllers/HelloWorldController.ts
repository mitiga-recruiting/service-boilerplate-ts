import { FastifyReply, FastifyRequest } from "fastify";
import { HelloWorldService } from "../services/HelloWorldService";

export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  public async getHelloWorld(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    const helloWorldString = this.helloWorldService.getHelloWorldString()

    await reply.status(200).send({ 'greeting': helloWorldString })
  }
}