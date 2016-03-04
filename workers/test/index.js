var debug = require('debug')('app:worker:test')
var ref = require('../../utils/firebase')
var Queue = require('firebase-queue')

var queueRef = ref.child('queue')

// Create queue
var options = {
  'numWorkers': 1
}
var queue = new Queue(queueRef, options, function (data, progress, resolve, reject) {
  // Read and process task data
  debug('process task data', data)

  // Do some work
  var percentageComplete = 0
  var interval = setInterval(function () {
    percentageComplete += 20
    if (percentageComplete >= 100) {
      clearInterval(interval)

      data.fromServer = 'Hello from server!!!'

      // Finish the task
      ref.child('test_tasks').push(data, function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    } else {
      progress(percentageComplete)
    }
  }, 1000)
})

// Safe queue shutdown
process.on('SIGINT', () => queue.shutdown().then(() => process.exit(0)))
