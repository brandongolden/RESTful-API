// Brandon Golden
// Assignment 10: Automated Version Bumping


// $ npm install --global gulp-cli
// $ npm install --save-dev gulp
// $ npm install --save-dev gulp-bump
// $ npm install --save-dev gulp-util
// $ npm install --save-dev gulp-git

// cd ~/Desktop/URL-Shortener
// Run gulp


var gulp = require('gulp');
var bump = require('gulp-bump');
var gutil = require('gulp-util');
var git = require('gulp-git');



// Patch
// $ gulp patch
gulp.task('patch', function() {
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

// Git Commit
// $ gulp commit
gulp.task('commit', function () {
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit('Version Bump'));
});


// Default - Patch version bump and git commit changes
// $ gulp
gulp.task('default', function() {    

	// Patch version bump
    return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({type: "patch"}).on('error', gutil.log))
    .pipe(gulp.dest('./'))

    // Git commit version bump
    .pipe(git.add())
    .pipe(git.commit('Version Bump'));

});