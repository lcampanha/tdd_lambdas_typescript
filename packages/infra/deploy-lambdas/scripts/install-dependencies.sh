#!/bin/sh

# Install Yarn workspace dependencies to Lambda Layer directory
yarn install --flat --modules-folder lambda-layer/nodejs/node_modules --non-interactive --production --silent

# Remove workspace directories from Lambda Layer node_modules
# to prevent circular references
rm -rf \
  lambda-layer/nodejs/node_modules/use-cases/get-user \
  lambda-layer/nodejs/node_modules/lambdas/get-user \
  lambda-layer/nodejs/node_modules/infra/deploy-lambdas 

# Copy common utilities
mkdir -p lambda-layer/nodejs/use-cases/get-user

cp -r ../../use-cases/get-user/dist/ lambda-layer/nodejs/use-cases/get-user/
echo '{"main": "dist/uc-get-user.js"}' > lambda-layer/nodejs/use-cases/get-user/package.json
