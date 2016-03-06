import m from 'mithril'
import firebase from '../utils/firebase'

var Tutorial = function (data) {
  data = data || {}
  this.title = m.prop(data.title || '')
  this.source = m.prop(data.source || '')
  this.content = m.prop(data.content || '')
  this.keywords = m.prop(data.keywords || [])
  this.languages = m.prop(data.languages || {})
  this.projects = m.prop(data.password || {})
}

Tutorial.save = function (data) {
  return firebase.child('queue/tutorials').push(data)
}

export default Tutorial
