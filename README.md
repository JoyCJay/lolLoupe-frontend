# loltool-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker
docker build -t joycjay/lol-loupe:dev-front .

docker run -it -p 8080:80 --rm --name front-end joycjay/lol-loupe:dev-front

docker push joycjay/lol-loupe:dev-front