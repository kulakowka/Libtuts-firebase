'use strict'

var debug = require('debug')('worker:platforms')
var firebase = require('../../utils/firebase')
var async = require('async')
var co = require('co')

// Repeat task each {sleep} milliseconds
const sleep = 1000 * 60 * 10   // 10 min

// Start worker
startProcess()

// Get all platforms and update data for each platform
function startProcess () {
  firebase
  .get('platforms', {shallow: true})
  .then(Object.keys)
  .then(processPlatforms)
  .then(() => setTimeout(startProcess, sleep))
  .catch(console.log)
}

// Helpers

function processPlatforms (platforms) {
  return new Promise((resolve, reject) => {
    async.mapSeries(platforms, processPlatform, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

function processPlatform (id, callback) {
  co(function *() {
    return yield {
      id,
      data: {
        projectsCount: getProjectsCount(id)
      }
    }
  }).then(updatePlatform).then(callback).catch(console.log)
}

function updatePlatform (result) {
  return firebase
        .update('platforms/' + result.id, result.data)
        .then((data) => debug('%s: %d projects', result.id, data.projectsCount))
}

function getProjectsCount (id) {
  return firebase.get('platform_projects/' + id, {shallow: true}).then(getNumChildren)
}

function getNumChildren (obj) {
  return Object.keys(obj).length
}
