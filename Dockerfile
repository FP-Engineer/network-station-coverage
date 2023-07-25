FROM node:19-alpine
ARG PACKAGE
ARG PORT

WORKDIR /base

COPY . .
RUN yarn plugin import workspace-tools
RUN yarn workspaces focus $PACKAGE --production

EXPOSE $PORT
ENV PACKAGE=$PACKAGE
CMD ["sh", "-c", "yarn workspace ${PACKAGE} start"]