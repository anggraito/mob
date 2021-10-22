const config = {}

config.environment = 'staging'
// config.environment = 'production'

config.URL = {}
config.URL.staging = 'https://pokeapi.co/api/v2'
// config.URL.production = 'https://pokeapi.co/v2'

config.APP_VERSION = {}
config.APP_VERSION.ios = '0.0.1'
config.APP_VERSION.android = '0.0.1'

export default config