/**
 * @param {date} - string text
 * @return true -> 0625018 , false -> testing
 */
export const checkNumber = (x) => { return (/^\d+$/).test(x) }

/**
 * @param {x} - usually is number
 * @return 2.345 , 1.000.000 etc
 */
 export const priceSeparator = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }
