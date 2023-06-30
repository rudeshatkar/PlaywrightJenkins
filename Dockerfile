
#Use this for a quick build

FROM mcr.microsoft.com/playwright:v1.18.1-focal

# # create a folder where our project will be stored
# RUN mkdir /playwrightgherkin
# # we make it our work directory
# WORKDIR /playwrightgherkin
# ADD . /playwrightgherkin/

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
# install the playwright dependencies in the work dirctory
RUN apt-get update -qq && apt-get install -y build-essential nodejs



#install chrome
# RUN curl -LO https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# RUN apt-get install -y ./google-chrome-stable_current_amd64.deb
# RUN rm google-chrome-stable_current_amd64.deb

#install git
RUN apt-get -y install git

#install app dependencies
COPY package.json /

#install dependencies


#install app dependencies
COPY package.json .

#install dependencies


#install last version of chromedriver
RUN npm install chromedriver@*

# Bundle app source
COPY . /

CMD  npm run testJenkins

#install last version of chromedriver
# RUN npm install chromedriver@*

# Bundle app source
# COPY . /

# FROM playwright/included:8.11.0

# let us copy the useful files that we MUST use to run our scripts

#Executable commands the contaioner will use [Exec Form]
# ENTRYPOINT ["npx", "playwright", "test"]
# with cmd in this case , we can specify more parameters to the last entrypoint
# CMD npm test

