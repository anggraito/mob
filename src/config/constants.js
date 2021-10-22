import config from "."

const constants = {}


constants.URL = config.URL[config.environment]

export default constants