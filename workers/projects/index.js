'use strict'

var assert = require('assert')
var debug = require('debug')('worker:projects')
var firebase = require('../../utils/firebase')
var request = require('request').defaults({timeout: 5000})
var async = require('async')

const config = {
  'apiKey': '55830a25cdfb7da183e04d2757e89ebb',
  'total': 1132342,
  'perPage': 30
}

let totalPages = parseInt(config.total / config.perPage, 10)

start(1)

// helpers

function start (page) {
  debug('Start parsing. Page: %d of %d', page, totalPages)
  async.waterfall([
    async.constant(page),
    loadPage,
    prepareData,
    saveData
  ], end)
}

// 1
function loadPage (page, next) {
  async.retry(5, fetchPage(page), (err, projects) => {
    if (err) return next(null, page, [])
    next(null, page, projects)
  })
}

// 2
function fetchPage (page) {
  let url = getSearchUrl(page)
  return (callback, results) => {
    request({url, json: true}, (err, res, projects) => {
      if (err) return callback(err.message)
      if (res.statusCode !== 200) return callback(res.statusMessage)
      debug(res.statusCode + ' ' + res.statusMessage + ' ' + url)
      callback(null, projects)
    })
  }
}

// 3
function prepareData (page, projectsArr, next) {
  let projects = projectsArr.reduce((projectsObj, rawProject) => {
    let project = projectAttributeNormalizer(rawProject)

    projectsObj[project.id] = project

    return projectsObj
  }, {})
  next(null, page, projects)
}

// 3
function saveData (page, projects, next) {
  firebase.set('projects', projects, (err, result) => {
    assert.ifError(err)
    assert.ok(result)

    const count = Object.keys(result).length

    next(null, page, count)
  })
}

function end (err, page, count) {
  assert.ifError(err)

  debug('%d projects saved. Page: %d', count, page)
  page++
  if (page < totalPages) start(page)
  else debug('The end')
}

function getSearchUrl (page) {
  return `https://libraries.io/api/search?order=desc&sort=rank&page=${page}`
}

function projectAttributeNormalizer (project) {
  return {
    id: (project.platform + '~' + project.name).toLowerCase(),
    name: project.name.toLowerCase(),
    platform: project.platform.toLowerCase(),
    homepageUrl: project.homepage,
    repositoryUrl: project.repository_url,
    packageManagerUrl: project.package_manager_url,
    description: project.description,
    keywords: project.keywords && project.keywords.map((k) => k && k.toLowerCase()),
    language: project.language && project.language.toLowerCase(),
    stars: project.stars,
    rank: project.rank,
    tutorialsCount: 0,
    projectsCount: 0
  }
}
