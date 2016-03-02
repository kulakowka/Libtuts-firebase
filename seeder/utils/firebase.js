var config = require('config')
var request = require('request')
var debug = require('debug')('seed:request')
var FirebaseTokenGenerator = require('firebase-token-generator')

const SECRET = config.get('secret')
const UID = config.get('seeder.uid')
const APP_ID = config.get('appId')

var tokenGenerator = new FirebaseTokenGenerator(SECRET)
var token = tokenGenerator.createToken(
  {uid: UID.toString()},
  {admin: true}
)

module.exports.get = function getData (path, callback) {
  debug(`get data from /${path}.json`)
  request({
    uri: `https://${APP_ID}.firebaseio.com/${path}.json`,
    method: 'get',
    json: true,
    time: true,
    qs: {
      auth: token
    }
  }, (err, res, body) => {
    debug('get data elapsedTime: %d ms', res.elapsedTime)
    callback(err, body)
  })
}

module.exports.set = function setData (path, data, callback) {
  debug(`set data to /${path}.json`)
  request({
    uri: `https://${APP_ID}.firebaseio.com/${path}.json`,
    method: 'put',
    json: data,
    time: true,
    qs: {
      auth: token
    }
  }, (err, res, body) => {
    debug('set data elapsedTime: %d ms', res.elapsedTime)
    callback(err, body)
  })
}
