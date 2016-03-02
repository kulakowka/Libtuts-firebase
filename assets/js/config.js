var Firebase = require('firebase')

module.exports = {
  firebase: new Firebase('https://' + process.env.APP_ID + '.firebaseio.com/')
}
