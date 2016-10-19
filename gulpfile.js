// Brandon Golden
// Assignment 10: Automated Version Bumping


// $ npm install --global gulp-cli
// $ npm install --save-dev gulp
// $ npm install --save-dev gulp-bump
// $ npm install --save-dev gulp-util


// cd ~/Desktop/URL-Shortener
// Run gulp


var gulp = require('gulp');
var bump = require('gulp-bump');
var gutil = require('gulp-util');



// Patch - default
// $ gulp
gulp.task('default', function() {
    return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({type: "patch"}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

// Minor
// $ gulp minor
gulp.task('minor', function() {
    return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({type: "minor"}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

// Major 
// $ gulp major
gulp.task('major', function() {
    return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({type: "major"}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});