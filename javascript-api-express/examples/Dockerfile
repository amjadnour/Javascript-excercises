# This file is a pre-cooked sample for the Docker session
# ...as this is a very simple node app

FROM alpine:latest

RUN apk add --update nodejs npm

RUN mkdir /app
COPY * /app/
RUN cd /app && npm install

EXPOSE 8080

ENTRYPOINT ["node", "/app/server.js"]

# Then build this with "docker build --tag my-simple-express-app ."
# The run with "docker run --name marks-app -p 5100:5100 -d my-simple-express-app:latest"
