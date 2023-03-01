/**
 * Converts a currency string to a number
 * @param str
 */
export const currencyToNumber = (str: string = '') => {
   const parsed = parseFloat(str.replace(/[^\d.-]/g, ''));
   return isNaN(parsed) ? 0 : parsed;
};
