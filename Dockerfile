FROM node:10

WORKDIR /usr/src/app

# Copy npmrc file 
COPY .npmrc .npmrc

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build
CMD [ "npm", "run", "test" ]
EXPOSE 3000
CMD [ "npm", "start" ]
