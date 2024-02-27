FROM node:bullseye-slim

WORKDIR /app

RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get autoremove -y && \
  rm -rf /var/lib/apt/lists

COPY ./src /app
