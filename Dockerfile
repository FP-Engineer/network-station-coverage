# Use the official Node.js 14 image as the base image
FROM node:19-alpine
ARG PACKAGE
ARG PORT

# Set the working directory inside the container
WORKDIR /base

# Copy dependecies
COPY package.json .
COPY yarn.lock .
COPY ./packages/$PACKAGE/package.json packages/$PACKAGE/

COPY ./packages/$PACKAGE packages/$PACKAGE

# Install production dependencies using yarn
RUN yarn install --immutable
RUN yarn workspace $PACKAGE build

# Expose the port on which the application will listen
EXPOSE $PORT

# Start the application
ENV PACKAGE ${PACKAGE}
CMD yarn workspace $PACKAGE start
