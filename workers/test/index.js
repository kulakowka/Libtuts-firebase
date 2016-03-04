var config = require('config')
var Queue = require('firebase-queue')
var Firebase = require('firebase')
var FirebaseTokenGenerator = require('firebase-token-generator')

const SECRET = config.get('secret')
const APP_ID = config.get('appId')

var tokenGenerator = new FirebaseTokenGenerator(SECRET)
var token = tokenGenerator.createToken({uid: 'server_worker'})

var ref = new Firebase('https://' + APP_ID + '.firebaseio.com')
var queueRef = ref.child('queue')
// var specsRef = queueRef.child('specs')

ref.authWithCustomToken(token, function (err, authData) {
  if (err) {
    console.log('Login failed with error: ', err)
  } else {
    console.log('Authenticated successfully with payload: ', authData)
  }
})

// Define the spec for the task
// specsRef.set({
//   task_1: {
//     in_progress_state: 'task_1_in_progress',
//     timeout: 10000 // 10 sec
//   }
// })

// Create queue
var options = {
  // 'sanitize': true,
  // 'suppressStack': false,
  // 'specId': 'task_1',
  'numWorkers': 1,
}
var queue = new Queue(queueRef, options, function (data, progress, resolve, reject) {
  // Read and process task data
  console.log(data)

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

process.on('SIGINT', function () {
  console.log('Starting queue shutdown')
  queue.shutdown().then(function () {
    console.log('Finished queue shutdown')
    process.exit(0)
  })
})
