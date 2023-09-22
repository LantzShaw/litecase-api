FROM alpine:3.17

# LABEL author="Lantz"

WORKDIR /

RUN mkdir /usr

ADD source dest

ENV NODE_VERSION=18.16.0

RUN echo 'hello world'

