FROM node:16

WORKDIR /usr/src/app

RUN git clone https://github.com/softwarearchaeologist/meso-api.git ./

RUN yarn

EXPOSE 8080

CMD ["yarn", "start"]
