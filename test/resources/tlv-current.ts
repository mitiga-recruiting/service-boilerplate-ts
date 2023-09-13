import { CurrentWeather, Location } from 'openweather-api-node'

export const TlvCurrent: CurrentWeather = {
  lat: 32.0892,
  lon: 34.7808,
  dt: new Date('2023-09-13T13:09:18.000Z'),
  dtRaw: 1694610558,
  timezone: undefined,
  timezoneOffset: 10800,
  astronomical: {
    sunrise: new Date('2023-09-13T03:23:17.000Z'),
    sunriseRaw: 1694575397,
    sunset: new Date('2023-09-13T15:51:00.000Z'),
    sunsetRaw: 1694620260,
  },
  weather: {
    temp: { cur: 28.81 },
    feelsLike: { cur: 32.67 },
    pressure: 1010,
    humidity: 72,
    dewPoint: undefined,
    clouds: 40,
    uvi: undefined,
    visibility: 10000,
    wind: { deg: 300, gust: undefined, speed: 5.66 },
    rain: 0,
    snow: 0,
    conditionId: 802,
    main: 'Clouds',
    description: 'scattered clouds',
    icon: { url: 'http://openweathermap.org/img/wn/03d@2x.png', raw: '03d' },
  },
}
export const TlvLocation: Location = {
  name: 'Tel Aviv-Yafo',
  local_names: {},
  lat: 32.0852997,
  lon: 34.7818064,
  country: 'IL',
  state: 'Tel Aviv District',
}
