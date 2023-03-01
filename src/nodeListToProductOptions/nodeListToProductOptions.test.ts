import { ProductOption } from '../interfaces/ProductOption.js';
import { nodeListToProductOptions } from './nodeListToProductOptions.js';

describe('nodeListToProductOptions', () => {
   const mockNodeList = [
      {
         querySelector: (selector: string) =>
            selector === 'div.header > h3'
               ? { textContent: 'Option 1' }
               : selector === 'div.package-features div.package-description'
               ? {
                    textContent: 'Description 1',
                 }
               : undefined,
      },
      {
         querySelector: (selector: string) =>
            selector === 'div.package-features div.package-price p'
               ? { textContent: 'Discount 2' }
               : selector ===
                 'div.package-features div.package-price span.price-big'
               ? {
                    textContent: '£12.99',
                 }
               : undefined,
      },
   ] as unknown as Element[];

   it('should return an array of ProductOption objects', () => {
      const expected: ProductOption[] = [
         {
            optionTitle: 'Option 1',
            description: 'Description 1',
            price: 0,
            discount: 'No discount',
         },
         {
            optionTitle: 'No title',
            description: 'No description',
            price: 12.99,
            discount: 'Discount 2',
         },
      ];
      expect(nodeListToProductOptions(mockNodeList)).toEqual(expected);
   });

   it('should handle empty inputs', () => {
      expect(nodeListToProductOptions([])).toEqual([]);
   });
});
