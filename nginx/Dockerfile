FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

RUN chown root /usr/share/nginx/html/*

RUN chmod 755 /usr/share/nginx/html/*

EXPOSE 7233

CMD ["nginx", "-g", "daemon off;"]