import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import { MitigaWeatherRecommendationController } from './controllers/MitigaWeatherRecommendationController'
import { AddressInfo } from 'net'

export class HttpServer {
  constructor(
    private readonly port: number,
    private readonly mitigaTravelController: MitigaWeatherRecommendationController
  ) {}

  private readonly server = fastify()

  public async start(): Promise<void> {
    this.server.get('/travel/location/:lat/:lon/weather', async (request: FastifyRequest<{ Params: { lat: string; lon: string } }>, reply: FastifyReply) => {
      const currentWeather = await this.mitigaTravelController.currentWeatherAtLocation(request.params.lat, request.params.lon)
      reply.send(currentWeather).code(200)
    })

    await this.server.listen({ port: this.port })
    console.log(`Server listening at ${(this.server.server.address() as AddressInfo).address}:${(this.server.server.address() as AddressInfo).port}`)
  }

  public async stop(): Promise<void> {
    await this.server.close()
  }
}
