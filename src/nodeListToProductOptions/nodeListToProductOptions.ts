import { ProductOption } from '../interfaces/ProductOption.js';
import { currencyToNumber } from './currencyToNumber.js';

/**
 * Transforms a list of HTML elements to an array of ProductOption
 * @param nodeList - the HTML elements of the product options
 * @returns {ProductOption[]} - An array of ProductOption
 */
export const nodeListToProductOptions = (
   nodeList: Element[]
): ProductOption[] => {
   let productOptions: ProductOption[] = [];

   nodeList.forEach(node => {
      const optionTitle =
         node.querySelector('div.header > h3')?.textContent || 'No title';
      // Using more general selectors, in case these things move around
      const description =
         node.querySelector('div.package-features div.package-description')
            ?.textContent || 'No description';
      // The spec is a little ambiguous – guessing the red text is what you're after
      const discount =
         node.querySelector('div.package-features div.package-price p')
            ?.textContent || 'No discount';
      const price =
         currencyToNumber(
            node.querySelector(
               'div.package-features div.package-price span.price-big'
            )?.textContent
         ) || 0;
      productOptions.push({ optionTitle, description, price, discount });
   });

   return productOptions;
};
