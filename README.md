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

$ npm install --global gulp-cli
$ npm install --save-dev gulp
$ npm install --save-dev gulp-bump
$ npm install --save-dev gulp-util
$ npm install --save-dev gulp-git
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

## Workflow
```
1.) Create new branch from master
2.) Make changes to code
3.) New pull request
4.) Merge into master branch
5.) Tag release
5.) New pull request
6.) Merge into release branch to automatically deploy application to production
```

## Automated Version Bumping

### Patch version bump and git commit changes
```
$ gulp
```

### Minor version bump
```
$ gulp minor
$ gulp commit
```

### Major version bump
```
$ gulp major
$ gulp commit
```