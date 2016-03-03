'use strict'

var debug = require('debug')('seed:platforms')
var assert = require('assert')
var firebase = require('../../utils/firebase')
var data = require('./data')

// Prepare data in the right format
data = data.reduce((data, name) => {
  const id = name.toLowerCase().replace(/\s/g, '-').replace(/\#/g, 'sharp').replace(/\+/g, 'p')
  data[id] = {
    id,
    name,
    projectsCount: 0
  }
  return data
}, {})

// Save data to firebase
firebase.set('platforms', data, (err, result) => {
  assert.ifError(err)
  assert.ok(result)

  const count = Object.keys(result).length

  debug(`${count} platforms has been set`)
})
