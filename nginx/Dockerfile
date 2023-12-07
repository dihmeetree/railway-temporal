FROM nginx:alpine

USER 0

COPY ./nginx.conf /etc/nginx/nginx.conf

ENV ENABLE_ALPINE_PRIVATE_NETWORKING=true

EXPOSE 7233