'use strict'

const browserify = require('browserify')
const gulp = require('gulp')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps')
const gutil = require('gulp-util')
const size = require('gulp-size')
// const plumber = require('gulp-plumber')
const livereload = require('gulp-livereload')
const gulpif = require('gulp-if')
const envify = require('envify/custom')
const config = require('config')
const APP_ID = config.get('appId')

module.exports = function (config) {
  const dest = config.dest
  const entries = config.src
  const showFiles = config.showFiles
  const filename = config.filename
  const isDev = !config.isProduction

  var b = browserify({
    transform: ['mithrilify'],
    entries
  })

  b.transform(envify({
    NODE_ENV: process.env.NODE_ENV || 'development',
    APP_ID
  }))

  return () => b.bundle()
    .pipe(source(filename))
    .pipe(buffer())
    .pipe(gulpif(isDev, sourcemaps.init()))
        // .pipe(plumber())
        // Add transformation tasks to the pipeline here.
        .pipe(gulpif(!isDev, uglify()))
        .on('error', gutil.log)
    .pipe(gulpif(isDev, sourcemaps.write('.')))
    .pipe(size({showFiles}))
    .pipe(gulp.dest(dest))
    .pipe(livereload())
}
