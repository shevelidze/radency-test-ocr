FROM node:19.0-alpine3.16

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .

CMD npm run start:dev

