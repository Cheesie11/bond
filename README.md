# Bond
In today's digital world, people are looking for a practical and secure way to record their thoughts and memories. Paper-based journals are often unusable, and traditional text editors don't provide the search and organization functionality desired. Creating a web-based journal application that is tailored to user needs can close this gap.

![Alt Text](https://github.com/Cheesie11/nodeDEV/blob/main/code/public/img/bondgit.png)

## How to get started

**Needed Software Applications**
- Docker Desktop
- Code Editor (VisualStudioCode)

**How to start the Docker Container**
- Open the entire Folder in your Code Editor
- Open your Terminal
- Run: `docker-compose up -d --build`
- Check if its successfully running on Docker Desktop

**How to access the Webapplication**
- Open your Terminal in your Code Editor
- Switch to the "code" folder with `cd code`
- Run `node server.js`
- If everything worked you should get a generated Secret Key and the message "Listening on port 3000..."
- Click the following link to open the Webapplication: [`localhost`](http://localhost:3000/)



The Visual Studio Code [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension lets you use any remote machine with a SSH server as your development environment.

**Since everything that has to do with the stack, only runs in the container, you have to put the commands into the corresponding container.**

**The local folder `code` is mapped to `/opt/nodeDEV/code` in the container**

**After cloning this repository you should rename `.env.example` to `.env` and adapt as needed**

## Installed vscode extensions

- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script): npm support for VS Code.
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Visual Studio Code plugin that autocompletes npm modules in import statements.
- [OpenAPI Preview](https://marketplace.visualstudio.com/items?itemName=zoellner.openapi-preview): Preview OpenAPI Docs
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): REST Client for Visual Studio Code.
- [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer): Swagger Viewer lets you preview and validate Swagger 2.0 and OpenAPI files as you type in Visual Studio Code.
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner): Run code snippet or code file for multiple languages.
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv): Support for dotenv file syntax.
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): Improve highlighting of errors, warnings and other language diagnostics.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint JavaScript into VS Code.
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph): View a Git Graph of your repository, and perform Git actions from the graph.
- [gitignore](https://marketplace.visualstudio.com/items?itemName=michelemelluso.gitignore): Add file to .gitignore.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Visual Studio Code plugin that autocompletes filenames.
- [Resource Monitor](https://marketplace.visualstudio.com/items?itemName=mutantdino.resourcemonitor): Displays current CPU stats, memory/disk consumption, and battery percentage remaining.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code formatter using prettier
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint): Format JavaScript and TypeScript code using the prettier-eslint
