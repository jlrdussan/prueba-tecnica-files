# develop stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN  npm i -g @quasar/cli
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]