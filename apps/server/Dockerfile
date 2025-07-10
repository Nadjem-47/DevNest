# Development Stage
FROM node:18.18.0-alpine AS dev
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
EXPOSE 5000
CMD ["yarn", "start"]
