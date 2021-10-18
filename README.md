# Node.js Development Environment

* Node.js with nodemon, eslint, dotenv, mocha, serve, .... for development.

The Visual Studio Code [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension lets you use a Docker container as a full-featured development environment. It allows you to open any folder or repository inside a container and take advantage of Visual Studio Code's full feature set. The [`devcontainer.json`](./.devcontainer.json) file tells VS Code how to access (or create) the development container with well-defined tool and runtime stack.

**Since everything that has to do with the stack, only runs in the container, you have to put the commands into the corresponding container.**

**The local folder `code` is mapped to `/opt/code` in the container**

## Installed utilities

* [nodemon](https://www.npmjs.com/package/nodemon): a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint) a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [dotenv](https://www.npmjs.com/package/dotenv): a module that loads environment variables from a `.env` file into `process.env`.
* [mocha](https://www.npmjs.com/package/mocha): Simple, flexible, fun JavaScript test framework for Node.js

## Installed vscode extensions

* [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script): npm support for VS Code.
* [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Visual Studio Code plugin that autocompletes npm modules in import statements.
* [OpenAPI (Swagger) Editor](https://marketplace.visualstudio.com/items?itemName=42Crunch.vscode-openapi): OpenAPI extension for Visual Studio Code.
* [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): REST Client for Visual Studio Code.
* [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer): Swagger Viewer lets you preview and validate Swagger 2.0 and OpenAPI files as you type in Visual Studio Code.
* [Abracadabra](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra): Automated refactorings for VS Code, in JavaScript and TypeScript.
* [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner): Run code snippet or code file for multiple languages.
* [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv): Support for dotenv file syntax.
* [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): Improve highlighting of errors, warnings and other language diagnostics.
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint JavaScript into VS Code.
* [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph): View a Git Graph of your repository, and perform Git actions from the graph.
* [gitignore](https://marketplace.visualstudio.com/items?itemName=michelemelluso.gitignore): Add file to .gitignore.
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Supercharge the Git capabilities built into Visual Studio Code.
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Visual Studio Code plugin that autocompletes filenames.
* [Resource Monitor](https://marketplace.visualstudio.com/items?itemName=mutantdino.resourcemonitor): Displays current CPU stats, memory/disk consumption, and battery percentage remaining.
