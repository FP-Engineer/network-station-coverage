FROM node:19-alpine
ARG PACKAGE
ARG PORT

WORKDIR /base
COPY . .

RUN yarn
RUN yarn build

EXPOSE $PORT
ENV PACKAGE=$PACKAGE
CMD ["sh", "-c", "yarn workspace ${PACKAGE} start"]
