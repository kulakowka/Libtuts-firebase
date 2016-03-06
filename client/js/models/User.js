import m from 'mithril'
import firebase from '../utils/firebase'

var User = function (data) {
  data = data || {}
  this.email = m.prop(data.email || '')
  this.password = m.prop(data.password || '')
}

User.create = function (data) {
  return firebase.createUser(data)
}

User.auth = function (data) {
  return firebase.authWithPassword(data)
}

User.resetPassword = function (data) {
  return firebase.resetPassword(data)
}

export default User
