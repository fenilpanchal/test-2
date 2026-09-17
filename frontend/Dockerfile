
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm"]

CMD ["run", "dev", "--", "--host", "0.0.0.0"]

