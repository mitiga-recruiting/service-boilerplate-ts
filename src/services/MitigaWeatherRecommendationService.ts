import createHttpError from 'http-errors'
import { OpenWeatherDriver } from '../drivers/OpenWeatherDriver'
import { CurrentWeatherDTO } from '../travel-service-dto-s'
import { CurrentWeather, Location } from 'openweather-api-node'

export class MitigaWeatherRecommendationService {
  constructor(private readonly openWeatherDriver: OpenWeatherDriver) {}
  public async getCurrentWeather(lat: number, lon: number): Promise<CurrentWeatherDTO> {
    const promises: Promise<unknown>[] = []
    promises.push(this.openWeatherDriver.getCurrentWeather(lat, lon))
    promises.push(this.openWeatherDriver.getCityForLocation(lat, lon))
    try {
      const [weather, location] = (await Promise.all(promises)) as [CurrentWeather, Location]
      return {
        cityName: location.name,
        weather: weather.weather.description,
        temperature: weather.weather.temp.cur,
        feelsLike: weather.weather.feelsLike.cur,
      }
    } catch (error: unknown) {
      throw createHttpError(500, 'Could not get weather for location', { error })
    }
  }
}
