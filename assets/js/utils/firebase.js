import m from 'mithril'
import config from '../config'

export function getData (path, callback) {
  var ref = config.firebase.child(path)

  m.startComputation()

  ref.on('value', (snapshot) => {
    callback(snapshot.val())
    m.endComputation()
  })
}
