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

POST /api/v1/url
- Create a shortened URL

GET /api/v1/urls
- Display all URLS

GET /api/v1/url/:id
- Display URL based upon id

POST /api/v1/url/:id
- Update URL based upon id

DELETE /api/v1/url/:id
- Delete url based upon id