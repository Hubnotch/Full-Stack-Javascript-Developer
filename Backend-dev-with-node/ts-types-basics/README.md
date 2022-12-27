# Typescript Set Up (Development Environment)

Initialize npm and add your details
`npm init -y`
Add `typescript`, `ts-node` and `@types/node` definitions to dev dependencies.
`npm i --save-dev typescript`
`npm i --save-dev ts-node`
`npm i --save-dev @types/node`
Add the default TypeScript configuration file.
`npx tsc --init`
Add a build script to your package.json file
`"build": "npx tsc"`
Check the configuration file `tsconfig.json` and apply the following settings:
```json
"target": "es5",
"lib": ["ES6"],
"outDir": "./build",
"strict": true,
"noImplicitAny": true
```
and exclude checking of node modules by adding an `"exclude"` parameter after the `"compilerOptions"`
`"exclude": ["node_modules"]`
Run the build script

`npm run build`
Run the completed index file

`node build/.`


## ES6 Modules
Now that we are using TypeScript for our application, we can also easily 
utilize the ES6 module system instead of the CommonJS module system. 
Destructuring should only be used when you are exporting the functions individually. 
If choosing to use export default, you must import the entire default as a module.

### Import
For importing modules, use the following syntax

```javascript
// Rename the module
import 'name' from 'module';
```

```javascript
// Use destructuring to pull in specific functions when they are exported individually
import {function, function} from 'module';
```
### Export

```javascript
// Export an individual function or other type of object in code
export const myFunction = () => {};

// Export a single item at the end
export default object;

// Export a list of objects
export default {object1, object2};
```

