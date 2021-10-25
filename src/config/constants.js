import config from "."

const constants = {}

constants.LIST_PRODUCT = 'LIST_PRODUCT'
constants.LIST_PRODUCT_SUCCESS = 'LIST_PRODUCT_SUCCESS'
constants.LIST_PRODUCT_FAILURE = 'LIST_PRODUCT_FAILURE'

constants.URL = config.URL[config.environment]

export default constants