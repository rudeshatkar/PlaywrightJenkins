
#Use this for a quick build
FROM mcr.microsoft.com/playwright:v1.18.1-focal

# update environment
RUN apt-get -y upgrade
RUN apt-get -y update
RUN apt-get -y --with-new-pkgs upgrade
RUN apt-get -y autoremove

# install curl
RUN apt-get -y install curl wget

#install node
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get -y install nodejs
RUN node --version
RUN npm --version
RUN apt-get update -qq && apt-get install -y build-essential nodejs

#install git
RUN apt-get -y install git

#install app dependencies
COPY package.json ./

#install dependencies
RUN npm install

# Bundle app source
COPY . .

#install app dependencies
COPY package.json .

#install dependencies
RUN npm install

#install last version of chromedriver
RUN npm install chromedriver@*
RUN npx playwright install-deps    

# Bundle app source
COPY . /

CMD  npm run test



