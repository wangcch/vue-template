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

### GET

```js
/**
 * GET api
 * @param {String} getfix url head
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 */
api.getUrlData("user/info", data, (res, isErr) => {
  console.log(res, isErr);
});
```

### DELETE

```js
/**
 * GET api
 * @param {String} getfix url head
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 */
api.deleteUrlData("user/del", data, (res, isErr) => {
  console.log(res, isErr);
});
```

### POST

```js
/**
 * GET api
 * @param {String} getfix url head
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 * @param {Boolean} isJson form_data/json
 */
api.postUrlData("user/login", data, (res, isErr) => {
	console.log(res, isErr);
}, true);
```

### PUT

```js
/**
 * GET api
 * @param {String} getfix url head
 * @param {Object} data parameters
 * @param function res:Object response; isErr:Boolean undefined/true
 * @param {Boolean} isJson form_data/json
 */
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
