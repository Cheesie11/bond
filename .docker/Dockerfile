
# syntax=docker/dockerfile:1

FROM node:lts-buster AS base
WORKDIR /opt/nodeDEV/code
# COPY ./code/ .
RUN apt-get update &&           \
    apt-get install -y          \
    apt-utils
RUN apt-get update &&           \
    apt-get install -y          \
    curl                        \
    git                         \
    dos2unix                    \
    wget                        \
    yarn                        \
    dumb-init                   \
    --no-install-recommends &&  \
    apt-get clean &&            \
    rm -rf /var/lib/apt/lists/*
RUN npm config set port $NODE_PORT && \
    npm config set unsafe-perm true && \
    npm install -g nodemon \
    mocha \
    dotenv \
    commitizen \
    standard-changelog \
    eslint
# smoke tests
RUN echo "NodeJS Version:" "$(node -v)" && \
    echo "NPM Version:" "$(npm -v)" && \
    echo "NPM Modules:" "$(npm -g ls)"
# replace this with your application's default port
EXPOSE $NODE_PORT
ENTRYPOINT [ "./entrypoint.sh" ]
