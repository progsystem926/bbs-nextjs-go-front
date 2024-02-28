FROM nginx:1.25.4-alpine3.18

COPY .docker/nginx/conf.d /etc/nginx/conf.d
COPY .docker/nginx/cert/localhost+1.pem /etc/certs/localhost.pem
COPY .docker/nginx/cert/localhost+1-key.pem /etc/certs/localhost-key.pem
