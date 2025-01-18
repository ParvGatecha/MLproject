FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy build artifacts from local machine to nginx container
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]