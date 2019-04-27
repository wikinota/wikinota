FROM ubuntu:19.04

RUN apt-get update && apt-get -y upgrade && apt-get -y dist-upgrade

RUN apt-get -y install nginx git

RUN git clone https://github.com/wikinota/wikinota.git

RUN cp /wikinota/configs/nginx-wikinota /etc/nginx/sites-enabled/
RUN rm /etc/nginx/sites-enabled/default

EXPOSE 80 443

ENTRYPOINT service nginx restart && bash

