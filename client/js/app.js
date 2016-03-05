import m from 'mithril'
import routes from './routes'
import firebase from './utils/firebase'

firebase.onAuth(function (authData) {
  m.redraw()
})

m.route.mode = 'pathname'

m.route(document.getElementById('root'), '/', routes)

