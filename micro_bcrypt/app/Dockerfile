# FROM node:14

# # Use latest version of npm
# RUN npm i npm@latest -g

# COPY package.json package-lock.json* ./

# RUN npm install --no-optional && npm cache clean --force

# # copy in our source code last, as it changes the most
# WORKDIR /usr/src/app

# COPY . .

# EXPOSE 5000

# CMD [ "npm" , "run" , "server-micro" ]

FROM node:14
RUN npm install -g nodemon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
EXPOSE 5000
CMD ["npm", "run" , "server-micro"]