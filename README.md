# Wireless Logic

This repo is my solution to the Wireless Logic Software Engineering Technical Test:

## Software Engineering Technical Test
### Test Description
This task is intended to test your ability to consume a webpage, process some data and present it.
While there is no specific time limit, we would not expect you to spend any longer than 2 hours
completing this.

We are looking for concise, testable, clean, well commented code and that you have chosen the
right tools for the right job. We will also be looking at your app structure as a whole.

### Requirements
Using best practice coding methods, build a console application that scrapes the following website
url https://wltest.dns-systems.net/ and returns a JSON array of all the product options on the page.
Each element in the JSON results array should contain ‘option title, ‘description’, ‘price’ and
‘discount’ keys corresponding to items in the table. The items should be ordered by annual price
with the most expensive package first.

Your code should:

• Include appropriate tests.

• Include a README.md file in the root describing how to run the app, how to run tests and any
dependencies needed from the system

• Be uploaded to a code repository such as https://github.com/ please do not send your
submissions via email.

You may use a dependency management system and as many dependencies as you like.

## Development Environment

The test is written in TypeScript 4.9.5 and executes in Node.js 16.16.0.

The tests are written using the Jest testing framework.

The IDE used is WebStorm 2022.3.2.

## Running the Application

To run the application, pull the repo, navigate to the root and execute the following command:

```bash
npm i
npm run start
```

This will launch the application and save the results by default to `product-options.json`.

Alternatively, to save the produced JSON to another location, execute the following command:

```bash
npm i
tsc -p tsconfig.json
node ./dist/product-options.js <outfile.json>
```

## Running the Tests

Having installed the packages with `npm i`, run the tests by executing the following command:

```bash
npx jest
```

## Improvements and Further Work

The following improvements could be made to the application:

- more error `try`/`catch` checking in the modules other than the main module, although ostensibly we could say this is covered by the client code
- testing should be applied to the `fetch.ts` module. I ran out of time, and it wasn't apparent how to mock `https` correctly
- the entry point `product-options.ts` should be more structured to lend itself to be tested
- `esbuild` might have been used rather than `tsc` to improve transpilation speed and bundle the output into a single file
- mock out `currencyToNumher.ts` properly in the testing of the `nodeListToProductOptions.ts` module