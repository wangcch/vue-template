# vue-template

> vue page template (vue + vue-router + axios)

## Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## API

> /src/util/api.js

| name     | API             |
| -------- | --------------- |
| GET      | getUrlData()    |
| DELETE   | deleteUrlData() |
| POST     | postUrlData()   |
| PUT      | putUrlData()    |
| Download | downloadUrl()   |

```js
import api from "@/util/api.js";
```

Data DMEO:

```
const data = {
	name: 'demo'
}
```

### Proxy

> /build/webpack.dev.conf.js -> devServer.proxy

```js
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
```
More: [Webpack dev-server #devserver-proxy ](https://webpack.js.org/configuration/dev-server/#devserver-proxy)

### GET

```js
/**
 * GET api
 * @param {String} suffix url address suffix
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 */
api.getUrlData(suffix, data, callback);
```

```js
api.getUrlData("user/info", data, (res, isErr) => {
  console.log(res, isErr);
});
```

### DELETE

```js
/**
 * GET api
 * @param {String} suffix url address suffix
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 */
api.deleteUrlData(suffix, data, callback);
```

```js
api.deleteUrlData("user/del", data, (res, isErr) => {
  console.log(res, isErr);
});
```

### POST

```js
/**
 * GET api
 * @param {String} suffix url address suffix
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 * @param {Boolean} isJson form_data/json
 */
api.postUrlData(suffix, data, callback, isJson);
```

```js
api.postUrlData("user/login", data, (res, isErr) => {
  console.log(res, isErr);
}, true);
```

### PUT

```js
/**
 * GET api
 * @param {String} suffix url address suffix
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 * @param {Boolean} isJson form_data/json
 */
api.putUrlData(suffix, data, callback, isJson);
```

```js
api.putUrlData("user/info", data, (res, isErr) => {
  console.log(res, isErr);
}, true);
```

### Download

```js
/**
 * GET Download
 * @param {String} url download url
 */
api.downloadUrl(url);
```

## Licence

MIT
