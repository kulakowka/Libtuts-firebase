'use strict'

var debug = require('debug')('seed:languages')
var assert = require('assert')
var firebase = require('../utils/firebase')
var data = require('./data')

// Prepare data in the right format
data = data.reduce((data, name) => {
  const slug = name.toLowerCase().replace(/\s/g, '-').replace(/\#/g, 'sharp').replace(/\+/g, 'p')
  data[slug] = {
    name,
    slug,
    tutorialsCount: 0,
    projectsCount: 0
  }
  return data
}, {})

// Save data to firebase
firebase.set('languages', data, (err, result) => {
  assert.ifError(err)
  assert.ok(result)

  const count = Object.keys(result).length

  debug(`${count} languages has been set`)
})
