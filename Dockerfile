FROM node:12 as builder
LABEL stage=builder

WORKDIR ./build

COPY package*.json ./
RUN npm install


FROM node:lts-alpine3.10

WORKDIR ./app

COPY --from=builder ./build/node_modules ./node_modules
COPY ./server.js .

CMD [ "node", "server" ]
