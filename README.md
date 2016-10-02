# URL-Shortener
URL shortener application
## Installation instructions
```
$ npm install body-parser
$ npm install express
$ npm install --save-dev chai
$ npm install --save-dev expect
$ npm install --save-dev mocha
$ npm install --save-dev supertest
$ npm install sequelize
$ npm install mysql
$ npm install dotenv --save
```
## Endpoints


GET /api/v1/url

```javascript
{"url":{"user_url":"http://www.apple.com/iphone-7/","shortened_url":"to1ejk"}}
```