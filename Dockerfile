FROM node:18-alpine3.17

# set work directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies

COPY package.json package-lock.json ./
RUN npm install

# copy project

COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"]