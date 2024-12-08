import { mock } from 'vitest-mock-extended'
import { MitigaWeatherRecommendationController } from '../src/controllers/MitigaWeatherRecommendationController'
import { HttpServer } from '../src/HttpServer'
import findFreePorts from 'find-free-ports'
import axios from 'axios'
describe('HttpServer', () => {
  async function givenStartedHttpServer(): Promise<{ httpServer: HttpServer; mitigaTravelController: MitigaWeatherRecommendationController; port: number }> {
    const mitigaTravelController = mock<MitigaWeatherRecommendationController>()
    const [port] = await findFreePorts(1)
    const httpServer = new HttpServer(port, mitigaTravelController)
    await httpServer.start()
    return { httpServer, mitigaTravelController, port }
  }
  test('Verify lat and lon are passed to controller', async () => {
    const { mitigaTravelController, port } = await givenStartedHttpServer()
    await axios.get(`http://localhost:${port}/travel/location/100/200/weather`)
    expect(mitigaTravelController.currentWeatherAtLocation).toBeCalledWith('100', '200')
  })
})
