FROM node:lts

RUN apt-get install git
RUN git config --global user.name jonathan-c-ch
RUN git config --global user.email jonathan.canales.hds@gmail.com

RUN npm i @nestjs/cli -g

COPY [".", "/usr/nest-project/"]

WORKDIR /usr/nest-project

EXPOSE 3000
