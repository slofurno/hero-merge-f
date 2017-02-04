from nginx:latest

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
     ca-certificates curl xz-utils \
  && rm -rf /var/lib/apt/lists/*

RUN curl -SL https://nodejs.org/dist/v6.3.1/node-v6.3.1-linux-x64.tar.xz |\
    tar -xJ -C /usr/local --strip-components=1

COPY nginx.conf /etc/nginx

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN npm install
RUN npm run webpack && cp -r public/. /usr/share/nginx/html

