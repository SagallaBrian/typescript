# Getting Started with TypeScript 
## What is typescript 

1. TypeScript is an open-source programming language developed and maintained by Microsoft. 
2. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.
3. Since Browsers do not read TypeScript, it has to be compiled to JavaScript using the Typescript compiler. 
4. The command to compile is tsc filename.ts 

## Advantages of TypeScript 

1. Static type Checking 
2. Class based objects 
3. Modularity 
4. ES6 features such as let, const, classes,  arrow functions etc. 

## Installing TypeScript 

1. Check if TypeScript is installed in your system. Run the command: tsc --version
2. Run the command: npm install -g typescript.  
3. Note: due to some root permission you need to add sudo hence sudo npm install -g typescript 

## Compiling TypeScript to JavaScript 

1. Compile the typescript file using the command:  tsc filename.ts 
2. When compiling typescript files you can use several flags 
  * The no emit on error flag tsc --noEmitOnError filename.ts prevents a file to be compiled to javascript when there is an error 
  * The watch flag: tsc  filename.ts -w . This keeps track of any changes to a file    


## Tsconfig.json 
1. The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. 
2. The tsconfig.json file specifies the root files and the compiler options required to compile the project.
3. To generate tsconfig.json file type: tsc --init    
