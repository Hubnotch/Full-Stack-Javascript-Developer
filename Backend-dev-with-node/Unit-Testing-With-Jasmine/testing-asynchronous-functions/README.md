# Configuring Jasmine
Jasmine tests the complied JavaScript:

**Running Jasmine after Code Has Compiled to Javascript**

## Install Jasmine:

To install Jasmine run:
`npm i jasmine `
Add a reporter for outputting Jasmine results to the terminal:
`npm i jasmine-spec-reporter`
Add type definitions for Jasmine with :
`npm i --save-dev @types/jasmine`

## Add Testing Scripts:
Find the `scripts` object in the `package.json` and add the following to run jasmine:
```json
"jasmine": "jasmine"
```
## Set Up the File Structure:
In the root directory of the project, create a folder named spec.
In the spec folder, create a folder named support.
In the support folder, create a file named jasmine.json to hold the primary configurations for Jasmine.
In the src folder, add a folder named tests.
In tests add a file named indexSpec.ts to hold the tests for code in the index.js file.
In the tests folder, add another folder named helpers.
In helpers, add a file named reporter.ts. This will be the primary configuration for your spec reporter.

## File Structure

├── node_modules
├── spec
│      └── support
│           └── jasmine.json
├── src
│     ├──  tests
│     │     ├── helpers
│     │     │      └── reporter.ts
│     │     └── indexSpec.ts
│     └── index.ts
├── package-lock.json
├── package.json
└── tsconfig.json

## Best Practices For File Naming
When creating files for tests, a best practice is to name the .ts file the 
same as the .js file to be tested with Spec appended to the end. The more 
tests needed to be run, the more test files will need to be created. 
Be sure to follow this best practice to keep track of the test file 
that contains the tests for each .js file.