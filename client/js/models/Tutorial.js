import m from 'mithril'
import firebase from '../utils/firebase'

var Tutorial = function (data) {
  data = data || {}
  this._id = m.prop(data._id)
  this.title = m.prop(data.title || '')
  this.source = m.prop(data.source || '')
  this.content = m.prop(data.content || '')
  this.keywords = m.prop(data.keywords || '')
  this.languages = m.prop(data.languages || {})
  this.projects = m.prop(data.password || {})
}

Tutorial.save = function (id, data) {
  console.log('Tutorial.save', id, data)
  // update existing tutorial
  if (id) return firebase.child('queue/tutorials/' + id).set(data).then(() => id)

  // create new tutorial
  return firebase.child('queue/tutorials').push(data).then((snap) => snap.key())
}

export default Tutorial
