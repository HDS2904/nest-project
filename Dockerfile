FROM node:lts

RUN apt-get install git
RUN git config --global user.name jonathan-c-ch
RUN git config --global user.email jonathan.canales.hds@gmail.com
RUN git config --global --add safe.directory /usr/nest-project

RUN npm i @nestjs/cli -g

COPY ["package.json", "package-lock.json", "/usr/nest-project/"]

WORKDIR /usr/nest-project

RUN npm install

COPY [".", "/usr/nest-project/"]

EXPOSE 3000
