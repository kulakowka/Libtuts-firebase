'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')
const tasks = requireDir('./tasks', { recurse: true })

const config = {
  clean: ['public'],
  assets: {
    showFiles: true,
    dest: 'public',
    src: 'client/*'
  },
  watch: {
    javascripts: 'client/js/**/*',
    styles: 'client/css/**/*',
    views: 'views/**/*'
  },
  javascripts: {
    filename: 'app.js',
    showFiles: true,
    dest: 'public/js',
    src: 'client/js/app.js'
  },
  styles: {
    compress: true,
    showFiles: true,
    dest: 'public/css',
    src: 'client/css/app.styl'
  },
  images: {
    progressive: true,
    showFiles: true,
    dest: 'public/images',
    src: 'client/images/**'
  },
  build: {
    showFiles: true,
    dest: 'public',
    src: [
      'public/css/app.css',
      'public/js/app.js'
    ],
    preTasks: ['assets', 'images', 'javascripts', 'styles']
  }
}

for (let task in tasks) {
  let pre = config[task].preTasks || []
  config[task].isProduction = process.env.NODE_ENV === 'production'
  gulp.task(task, pre, tasks[task](config[task]))
}

gulp.task('default', ['assets', 'images', 'javascripts', 'styles', 'watch'])
