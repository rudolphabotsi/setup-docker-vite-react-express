FROM node:16-bullseye

WORKDIR usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]
