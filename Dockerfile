FROM node:19-alpine
ARG PACKAGE
ARG PORT
ENV NODE_ENV=production

WORKDIR /base

# Dependecies
COPY package.json .
COPY yarn.lock .
COPY lerna.json .

COPY packages/api-schemas/package.json packages/api-schema/
COPY packages/${PACKAGE}/package.json packages/${PACKAGE}/

RUN yarn

# Build
COPY tsconfig.json .
COPY packages/tsconfig.packages.json packages/
COPY packages/api-schemas/ packages/api-schema/
COPY packages/${PACKAGE}/ packages/${PACKAGE}/

RUN yarn build

EXPOSE $PORT
ENV PACKAGE=$PACKAGE
CMD ["sh", "-c", "yarn workspace ${PACKAGE} start"]
