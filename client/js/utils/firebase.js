import m from 'mithril'
import Firebase from 'firebase'

const firebase = new Firebase('https://' + process.env.APP_ID + '.firebaseio.com/')

// firebase.on('languages', 'value', cb)
// firebase.on = function (path, eventType, callback, cancelCallback, context) {
//   var ref = firebase.child(path)

//   m.startComputation()
//   return ref.on(eventType, function () {
//     callback(...arguments)
//     m.endComputation()
//   }, cancelCallback, context)
// }

// firebase.toArray = function (obj) {
//   return Object.keys(obj).map((key) => {
//     let item = obj[key]
//     item.id = key
//     return item
//   })
// }

export default firebase
