FROM node:8
COPY . /src
WORKDIR /src
RUN yarn && yarn build

FROM nginx
COPY --from=0 /src/dist/ /usr/share/nginx/html/test-client/
COPY --from=0 /src/dist/ /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf
