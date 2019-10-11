FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .

RUN npm i -g yarn
RUN yarn install

# Bundle app source
COPY . .

ENV docker true
EXPOSE 9000 9001 9002 9003
CMD ["npx", "@adamite/cli", "start"]