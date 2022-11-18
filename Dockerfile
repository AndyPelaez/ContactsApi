FROM node:gallium
WORKDIR /app
COPY package.json /app
RUN npm i
COPY . /app
RUN npm run tsc
ENV NODE_ENV production
EXPOSE 3001
CMD npm start