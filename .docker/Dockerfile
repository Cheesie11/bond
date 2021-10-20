
# syntax=docker/dockerfile:1

FROM node:lts-alpine AS base
# smoke tests
RUN echo "NodeJS Version:" "$(node -v)" && \
    echo "NPM Version:" "$(npm -v)"
WORKDIR /opt/code
COPY ./code/ .
RUN npm config set port $NODE_PORT && \
    npm config set unsafe-perm true && \
    npm install -g nodemon && \
    npm install -g mocha && \
    npm install -g dotenv && \
    npm install -g eslint
# use a lightweight init system
ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init
