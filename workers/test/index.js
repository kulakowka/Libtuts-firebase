'use strict'

var debug = require('debug')('app:worker:test')
var ref = require('../../utils/firebase')
var Queue = require('firebase-queue')
var marked = require('marked')

// Create queue
var options = {
  'numWorkers': 1
}
let count = 0
var queue = new Queue(ref.child('queue/comments'), options, function (data, progress, resolve, reject) {

  data.contentHtml = marked(data.content)
  delete data.content

  // Read and process task data
  console.log('')
  console.log('process %d task data', count++, data)

  setTimeout(function () {
    resolve(data)
  }, 15000)

  // Finish the task
  ref.child('Comments').push(data, function (err) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

// Safe queue shutdown
process.on('SIGINT', () => queue.shutdown().then(() => process.exit(0)))
