import { MitigaWeatherRecommendationService } from '../services/MitigaWeatherRecommendationService'
import { CurrentWeatherDTO } from '../travel-service-dto-s'

export class MitigaWeatherRecommendationController {
  constructor(private readonly mitigaTravelService: MitigaWeatherRecommendationService) {}

  public async currentWeatherAtLocation(lat: string, lon: string): Promise<CurrentWeatherDTO> {
    const currentWeather = this.mitigaTravelService.getCurrentWeather(+lat, +lon)
    return currentWeather
  }
}
