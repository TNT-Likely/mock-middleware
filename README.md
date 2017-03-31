# mock-middleware
mock middleware for express

## Quick Start 

Install mock-moddleware in project root .

```
$ npm install mock-middleware --save
```

```js
var express = require('express')
var middleware = require('mock-middleware')

var app = express()

app.use(middleware({
  basePath: __dirname,
  mockFolder: 'mocks',
  routeFile: 'route.js'
}))

```

## Configuration

### basePath

The base path of the project, all other folder settings are related to base path.

### mockFolder

default: 'mocks'

Save you mock data into this folder.

### routeFile

default: 'route.js'

Routes mapping file

## Routes

Routes is stored in `route.js` as key/value pairs by default.

Sample:

```js
module.exports = {
    // set json api with a json/js file in mock folder
    'POST::/test':         'mock::test.js'
    
}
```
the rule is `'[method]::[route_url]': '[template_file]'`.

Allowed method: `GET`, `POST`, `PUT`, `PATCH`, `DETELE`

`GET` will be used if it is not specified.

## Response Body 

```js
module.exports = {
	'$$statusCode':404,
	'$$delay':3000,
	'$$header':{
		'Content-Type':'application/json'
	},
	'message':'hello world'
}

```

### $$statusCode

deafult: 200

The http response status

### $$delay

default: 0

The http response delay

### $$header

The http response header
