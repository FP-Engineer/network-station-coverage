FROM node:19-alpine
ARG PACKAGE
ARG PORT
ENV NODE_ENV=production

WORKDIR /base

COPY package.json .
COPY yarn.lock .
COPY lerna.json .

COPY packages/api-schemas/package.json packages/api-schema/
COPY packages/${PACKAGE}/package-lock.json packages/${PACKAGE}/

RUN yarn

COPY . .
RUN yarn build

EXPOSE $PORT
ENV PACKAGE=$PACKAGE
CMD ["sh", "-c", "yarn workspace ${PACKAGE} start"]
