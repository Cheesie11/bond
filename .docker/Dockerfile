
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

# Lints Code
# FROM base AS linting
# ENV NODE_ENV=development
# RUN npm install
# CMD ["dumb-init", "npm", "run", "lint"]

# Runs Unit Tests
# docker build --target unit-tests -t NodeDEV:latest
# FROM base as unit-tests
# RUN npm test

FROM base as development
#EXPOSE "7090:7090"
ENV NODE_ENV=development
RUN npm config set unsafe-perm true &&      \
    npm install -g nodemon &&               \
    # install the dotenv package from the npm as a dev dependencies
    npm install dotenv --save-dev && \
    npm install eslint --save-dev
# HEALTHCHECK --interval=5s \
#             --timeout=5s \
#             --retries=6 \
#             CMD curl --fail http://localhost:7090/ || exit 1
CMD ["dumb-init", "npm", "run", "serve"]

# Build the frontend
FROM base AS builder
ENV NODE_ENV=production
# npm ci works similarly to npm i, but skips the expensive dependency resolution step
RUN npm ci
# run our quality checks and build
# fail as quickly as possible
# RUN npm run format
RUN npm run lint
RUN npm run test
# Build for production.
RUN npm run build --production
# Install `serve` to run the application.
RUN npm install -g serve
# get rid of any development dependencies
RUN npm prune --production
CMD ["dumb-init", "npm", "run", "serve", "-s build"]
