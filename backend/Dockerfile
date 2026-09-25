FROM node:22-alpine

WORKDIR /usr/src/app

ENV PORT=3000
ENV MONGO_URI=mongodb://admin:123456@mongodb:27017/auth?authSource=admin


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]