FROM nginx:alpine

RUN apk update
RUN apk upgrade

RUN apk add --update git

RUN git clone https://github.com/wikinota/wikinota.git

RUN cp /wikinota/configs/nginx-wikinota /etc/nginx/nginx-wikinota.conf
#RUN rm /etc/nginx/default.conf

EXPOSE 80 443
