/**
 * @param {date} - string text
 * @return true -> 0625018 , false -> testing
 */
export const checkNumber = (x) => { return (/^\d+$/).test(x) }