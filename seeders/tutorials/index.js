'use strict'

var debug = require('debug')('seed:tutorials')
var assert = require('assert')
var firebase = require('../../utils/firebase')
var data = require('./data')

// Prepare data in the right format
var tutorials = data.map((item) => {
  return Object.assign(item, {
    commentsCount: 0
  })
})

// Save data to firebase
tutorials.forEach((tutorial) => firebase.push('tutorials', tutorial, (err, result) => {
  assert.ifError(err)
  assert.ok(result)

  debug('tutorial (%s) has been pushed', result.name)
}))

