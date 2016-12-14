var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require("gulp-rename");
var del = require('del');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Copy assets to dist/.
 */
gulp.task('copy', ['clean'], function() {
  return gulp.src('html/index.html').pipe(gulp.dest('dist/'));
});

/**
 * Clear the dist folder
 */
gulp.task('clean', function() {
  return del.sync([
    'reports/**',
    'dist/**'
  ], {force: true});
});

/**
 * Use Webpack to bundle our TypeScript files.
 */
gulp.task('webpack', ['copy'], function() {
  return gulp.src('./src/main.ts')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('dist/js/'))
  .on('end', function() {
    console.log('Webpacked src/main.ts to dist/js/main.js');
  });
});

/**
 * Default run.
 */
gulp.task('default', ['webpack']);