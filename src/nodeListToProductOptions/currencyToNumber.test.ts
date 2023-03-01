import { currencyToNumber } from './currencyToNumber.js';

describe('currencyToNumber', () => {
   it('should convert a currency string to a number', () => {
      expect(currencyToNumber('£10.50')).toEqual(10.5);
      expect(currencyToNumber('$20.99')).toEqual(20.99);
      expect(currencyToNumber('10.00')).toEqual(10);
      expect(currencyToNumber('10.00abc')).toEqual(10);
   });

   it('should return 0 if input is not a valid currency string', () => {
      expect(currencyToNumber('')).toEqual(0);
      expect(currencyToNumber('abc')).toEqual(0);
   });
});
