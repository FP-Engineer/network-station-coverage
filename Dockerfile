FROM node:19-alpine
ARG PACKAGE
ARG PORT

WORKDIR /base

# Dependecies
COPY package.json .
COPY yarn.lock .
COPY ./packages/api-schemas/package.json packages/api-schemas/
COPY ./packages/$PACKAGE/package.json packages/$PACKAGE/

RUN yarn set version 3.6.1
RUN yarn

# Build
COPY lerna.json .
COPY tsconfig.json .
COPY ./packages/tsconfig.packages.json packages/
COPY ./packages/api-schemas packages/api-schemas
COPY ./packages/$PACKAGE packages/$PACKAGE

RUN yarn build

EXPOSE $PORT
ENV PACKAGE=$PACKAGE
CMD ["sh", "-c", "yarn workspace ${PACKAGE} start"]