
# syntax=docker/dockerfile:1

FROM node:lts-buster AS base
WORKDIR /opt/nodeDEV/code
COPY ./code/ .
RUN apt-get update &&           \
    apt-get install -y          \
    curl                        \
    git                         \
    dos2unix                    \
    wget                        \
    --no-install-recommends &&  \
    apt-get clean &&            \
    rm -rf /var/lib/apt/lists/*
RUN npm config set port $NODE_PORT && \
    npm config set unsafe-perm true && \
    npm install -g nodemon && \
    npm install -g mocha && \
    npm install -g db-migrate db-migrate-pg && \
    npm install -g dotenv && \
    npm install -g @supabase/supabase-js && \
    npm install -g eslint
# smoke tests
RUN echo "NodeJS Version:" "$(node -v)" && \
    echo "NPM Version:" "$(npm -v)" && \
    echo "NPM Modules:" "$(npm -g ls)"
# replace this with your application's default port
EXPOSE $NODE_PORT
# use a lightweight init system
ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init
