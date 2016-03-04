'use strict'

var debug = require('debug')('worker:languages')
var firebase = require('../../utils/firebase')
var async = require('async')
var co = require('co')

// Repeat task each {sleep} milliseconds
const sleep = 1000 * 60 * 10   // 10 min

// Start worker
startProcess()

// Get all languages and update data for each language
function startProcess () {
  firebase
  .get('languages', {shallow: true})
  .then(Object.keys)
  .then(processLanguages)
  .then(() => setTimeout(startProcess, sleep))
  .catch(console.log)
}

// Helpers

function processLanguages (languages) {
  return new Promise((resolve, reject) => {
    async.mapSeries(languages, processLanguage, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

function processLanguage (id, callback) {
  co(function *() {
    return yield {
      id,
      data: {
        projectsCount: getProjectsCount(id)
      }
    }
  }).then(updateLanguage).then(callback).catch(console.log)
}

function updateLanguage (result) {
  return firebase
        .update('languages/' + result.id, result.data)
        .then((data) => debug('%s: %d projects', result.id, data.projectsCount))
}

function getProjectsCount (id) {
  return firebase.get('language_projects/' + id, {shallow: true}).then(getNumChildren)
}

function getNumChildren (obj) {
  return Object.keys(obj).length
}
