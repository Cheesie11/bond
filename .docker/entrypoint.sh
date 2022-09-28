#!/usr/bin/env bash

# We're using the entrypoint.sh script to install npm dependencies
# whenever a Docker container is spawned. This helps to always keep
# your dependencies up to date when multiple people work on the same project.

# exit when a command fails
set -e
# return the exit code of piped commands that error
set -o pipefail
# exit when trying to use undefined variable
set -u

# calculate the md5 sum of the package.json and save it in the node_module directory
function calc_package_md5 {
  md5sum ./package.json  | awk '{print $1}' > ./node_modules/package_json_md5
}

# install npm dependencies
function yarni {
  yarn install # will dedupe and prune
}

# install / update dependencies only if necessary
function prepare {
  # ok, is there a node_modules folder?
  if [[ ! -d './node_modules' ]]; then
    yarni
    calc_package_md5
    return
  fi

  # ok, node_modules folder there, but is there an old package_json_md5 file?
  if [[ ! -f './node_modules/package_json_md5' ]]; then
    yarni
    calc_package_md5
    return
  fi

  # ok all is there, but did the package json update?
  if [[ "$(md5sum ./package.json  | awk '{print $1}')" != "$(cat ./node_modules/package_json_md5)" ]]; then
    yarni
    calc_package_md5
    return
  fi
}

# install / update dependencies if necessary
prepare

# run the actual command given
# - use double quotes to prevent splitting of arguments with spaces
exec "$@"
