'use strict'

var debug = require('debug')('app:seed:languages')
var ref = require('../../utils/firebase')
var data = require('./dataObj')

// Save data to firebase
ref
.child('languages')
.set(data)
.then(() => debug('seed complete'))
.then(() => process.exit(0))
.catch(console.log)

// Это оставим на время разработки
// data = data.reduce((data, name) => {
//   const id = name.toLowerCase().replace(/\s/g, '-').replace(/\#/g, 'sharp').replace(/\+/g, 'p')
//   data[id] = {
//     name,
//     tutorialsCount: 0,
//     projectsCount: 0
//   }
//   return data
// }, {})
// console.log(JSON.stringify(data, null, '\t'))
