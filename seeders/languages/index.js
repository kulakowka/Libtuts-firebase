'use strict'

var debug = require('debug')('app:seed:languages')
var ref = require('../../utils/firebase')
var data = require('./data')

ref
.child('languages')
.set(data)
.then(() => debug('seed complete'))
.then(() => process.exit(0))
.catch(console.log)
