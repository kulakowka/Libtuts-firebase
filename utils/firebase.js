'use strict'

var debug = require('debug')('app:firebase')
var config = require('config')
var Firebase = require('firebase')
var FirebaseTokenGenerator = require('firebase-token-generator')
var tokenGenerator = new FirebaseTokenGenerator(config.get('secret'))

var ref = new Firebase('https://' + config.get('appId') + '.firebaseio.com')

var token = tokenGenerator.createToken({uid: 'server_worker'})

ref.authWithCustomToken(token, (err, authData) => {
  if (err) return debug('Login failed with error: ', err)
  debug('Authenticated successfully')
})

module.exports = ref
