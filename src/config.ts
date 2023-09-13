import convict from 'convict'

export type Config = {
  openWeatherMapApiKey: string
  port: number
}

export const config = convict<Config>({
  openWeatherMapApiKey: {
    doc: 'Open Weather Map API Key',
    default: null,
    nullable: false,
    format: String,
    env: 'OPEN_WEATHER_MAP_API_KEY',
  },
  port: {
    default: 8080,
    format: 'port',
    env: 'TRAVEL_SERVICE_PORT',
  },
}).validate()
