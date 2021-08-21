FROM node:latest

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002


RUN npm i --global expo-cli 
RUN npm i --global @expo/ngrok@^4.1.0

WORKDIR /app
COPY package.json ./

RUN npm install
COPY . /app

CMD ["expo" , "start", "--tunnel"]