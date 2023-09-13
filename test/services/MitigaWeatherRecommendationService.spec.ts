import { mock } from 'vitest-mock-extended'
import { MitigaWeatherRecommendationService } from '../../src/services/MitigaWeatherRecommendationService'
import { OpenWeatherDriver } from '../../src/drivers/OpenWeatherDriver'
import { TlvCurrent, TlvLocation } from '../resources/tlv-current'
import { CurrentWeatherDTO } from '../../src/travel-service-dto-s'

describe('MitigaWeatherRecommendationService', () => {
  test('Should return the weather from driver as DTO', async () => {
    const driver = mock<OpenWeatherDriver>()
    driver.getCurrentWeather.mockResolvedValue(TlvCurrent)
    driver.getCityForLocation.mockResolvedValue(TlvLocation)
    const service = new MitigaWeatherRecommendationService(driver)
    const expected: CurrentWeatherDTO = {
      cityName: 'Tel Aviv-Yafo',
      feelsLike: 32.67,
      temperature: 28.81,
      weather: 'scattered clouds',
    }
    expect(await service.getCurrentWeather(32.0853, 34.7818)).toStrictEqual(expected)
  })
  test('Verify 500 is thrown on location error', async () => {
    const driver = mock<OpenWeatherDriver>()
    driver.getCurrentWeather.mockResolvedValue(TlvCurrent)
    driver.getCityForLocation.mockRejectedValue(new Error('Some driver error'))
    const service = new MitigaWeatherRecommendationService(driver)
    await expect(() => service.getCurrentWeather(32.0853, 34.7818)).rejects.toThrowError('Could not get weather for location')
  })

  test('Verify 500 is thrown on weather error', async () => {
    const driver = mock<OpenWeatherDriver>()
    driver.getCurrentWeather.mockRejectedValue(new Error('Some driver error'))
    driver.getCityForLocation.mockResolvedValue(TlvLocation)
    const service = new MitigaWeatherRecommendationService(driver)
    await expect(() => service.getCurrentWeather(32.0853, 34.7818)).rejects.toThrowError('Could not get weather for location')
  })
})
