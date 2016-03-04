'use strict'

var assert = require('assert')
var debug = require('debug')('worker:platforms')
var firebase = require('../../utils/firebase')
var async = require('async')

const qs = {}
firebase.get('platforms', qs, (err, result) => {
  assert.ifError(err)
  assert.ok(result)

  const platforms = Object.keys(result).map((key) => result[key])
  async.eachSeries(platforms, processPlatform, () => {
    console.log('All platforms has been processed')
  })
})

function processPlatform (item, callback) {
  console.log('process platform %s', item.name)

  getProjectsCount(item)

  setTimeout(callback, 500)
}

function getProjectsCount (item) {
  const qs = {
    // shallow: true,
    orderBy: '"$value"',
    equalTo: item.id
  }

  firebase.get('projects', qs, (err, result) => {
    assert.ifError(err)
    assert.ok(result)

    console.log('projects for platform %s', item.name, result)
  })
}
