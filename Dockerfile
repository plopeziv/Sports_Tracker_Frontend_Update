# pull official base image
FROM node:18.2.0-alpine3.15

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

#Exposes the port for React Default
EXPOSE 3000

# start app
CMD ["npm", "start"]