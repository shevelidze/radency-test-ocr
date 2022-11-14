FROM node:19.0-alpine3.16

COPY ./package.json ./

RUN npm install

COPY . .

CMD npm run start:dev

