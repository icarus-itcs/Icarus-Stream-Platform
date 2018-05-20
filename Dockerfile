FROM node:9

RUN mkdir /src

WORKDIR /src

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json
RUN npm install --silent

COPY ./ /src

EXPOSE 6969

CMD ["npm", "start"]
