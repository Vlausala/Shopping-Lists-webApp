FROM denoland/deno:alpine-1.29.2

EXPOSE 7777

WORKDIR /

COPY /shopping-lists/deps.js .

RUN deno cache deps.js

COPY /shopping-lists .

CMD [ "run", "--unstable", "--watch", "--allow-net", "--allow-read", "--allow-env", "--no-check", "app.js" ]