import { fetch } from './fetch/fetch.js';
import { JSDOM, VirtualConsole } from 'jsdom';
import { nodeListToProductOptions } from './nodeListToProductOptions/nodeListToProductOptions.js';
import fs from 'node:fs';

const dnsSystemsUrl = 'https://wltest.dns-systems.net/';

// Grab the output filename from the command line
const args = process.argv.slice(2);

if (args.length !== 1) {
   console.log('Usage: node product-options.js <outfile>');
   process.exit(1);
}

const outFilename = args[0];

// Fetch the HTML from the URL
const body = await fetch(dnsSystemsUrl);

// Silence "Error: Could not parse CSS stylesheet"
const virtualConsole = new VirtualConsole();
virtualConsole.on('error', () => {});

let dom;
let nodeList: Element[];

// Parse the HTML and collate package options
try {
   dom = new JSDOM(body, { virtualConsole });

   // Select all elements with class "package"
   nodeList = [...dom.window.document.querySelectorAll('.package')];
} catch (e) {
   console.log('Error parsing HTML', e);
}

// Map HTML options to ProductOption array and save
try {
   const productOptions = nodeListToProductOptions(nodeList);

   // Sort product options descending by price
   productOptions.sort((a, b) => b.price - a.price);

   try {
      await fs.promises.writeFile(outFilename, JSON.stringify(productOptions));
   } catch (e) {
      console.log('Error writing file', e);
   }
} catch (e) {
   console.log('Error converting to product options', e);
}
