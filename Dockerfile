# Use the official Node.js 14 image as the base image
FROM node:19-alpine
ARG PACKAGE
ARG PORT

# Set the working directory inside the container
WORKDIR /base

COPY . .

RUN yarn
RUN yarn build

# Expose the port on which the application will listen
EXPOSE $PORT

# Start the application
ENV PACKAGE=$PACKAGE
CMD ["sh", "-c", "yarn workspace ${PACKAGE} start"]
