import fastify from 'fastify'
import { MitigaWeatherRecommendationController } from './controllers/MitigaWeatherRecommendationController'
import { MitigaWeatherRecommendationService } from './services/MitigaWeatherRecommendationService'
import { OpenWeatherDriver } from './drivers/OpenWeatherDriver'
import { config } from './config'
import { HttpServer } from './HttpServer'

const openWeatherDriver = new OpenWeatherDriver(config.get('openWeatherMapApiKey'))
const mitigaTravelService = new MitigaWeatherRecommendationService(openWeatherDriver)
const mitigaTravelController = new MitigaWeatherRecommendationController(mitigaTravelService)

const port = config.get('port')
const httpServer = new HttpServer(port, mitigaTravelController)
httpServer.start().catch((error) => {
  console.error(error)
  process.exit(1)
})
