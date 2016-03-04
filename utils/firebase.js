var config = require('config')
var request = require('request')
var debug = require('debug')('seed:request')
var FirebaseTokenGenerator = require('firebase-token-generator')

const SECRET = config.get('secret')
const APP_ID = config.get('appId')

var tokenGenerator = new FirebaseTokenGenerator(SECRET)
var token = tokenGenerator.createToken({uid: 'server_worker'})

module.exports.get = function getData (path, qs) {
  debug(`get data from /${path}.json`)

  const options = {
    uri: `https://${APP_ID}.firebaseio.com/${path}.json`,
    method: 'get',
    json: true,
    time: true,
    qs: Object.assign({
      auth: token
    }, qs)
  }

  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      debug('get data elapsedTime: %d ms', res.elapsedTime)
      if (err) return reject(err)
      if (res.statusCode !== 200) return reject(new Error(res.statusMessage))
      resolve(body)
    })
  })
}

module.exports.update = function updateData (path, json, qs) {
  debug(`update data for /${path}.json`)

  const options = {
    uri: `https://${APP_ID}.firebaseio.com/${path}.json`,
    method: 'patch',
    json,
    time: true,
    qs: Object.assign({
      auth: token
    }, qs)
  }

  return new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      debug('update data elapsedTime: %d ms', res.elapsedTime)
      if (err) return reject(err)
      if (res.statusCode !== 200) return reject(new Error(res.statusMessage))
      resolve(body)
    })
  })
}

module.exports.set = function setData (path, json, callback) {
  debug(`set data to /${path}.json`)
  request({
    uri: `https://${APP_ID}.firebaseio.com/${path}.json`,
    method: 'put',
    json,
    time: true,
    qs: {
      auth: token
    }
  }, (err, res, body) => {
    debug('set data elapsedTime: %d ms', res.elapsedTime)
    callback(err, body)
  })
}

module.exports.push = function pushData (path, data, callback) {
  debug(`set data to /${path}.json`)

  request({
    uri: `https://${APP_ID}.firebaseio.com/${path}.json`,
    method: 'post',
    json: data,
    time: true,
    qs: {
      auth: token
    }
  }, (err, res, body) => {
    debug('push data elapsedTime: %d ms', res.elapsedTime)
    callback(err, body)
  })
}
