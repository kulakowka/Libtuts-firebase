import m from 'mithril'
import firebase from '../utils/firebase'
import Firebase from 'firebase'

function Presence (route, userid, onremove) {
  var authData = firebase.getAuth()
  var userRef

  if (authData) {
    userRef = firebase.child('_presence/' + route + '/' + authData.uid)
  } else {
    userRef = firebase.child('_presence/' + route + '/').push()
  }

  var amOnline = firebase.child('.info/connected')

  amOnline.on('value', (snapshot) => {
    if (snapshot.val()) {
      userRef.onDisconnect().remove()
      userRef.set(Firebase.ServerValue.TIMESTAMP)
    }
  })

  return {
    remove () {
      userRef.remove()
    }
  }
}

// var listRef = firebase.child('_online' + route + 'users')
//       var userRef = listRef.push()
//       firebase.child('.info/connected').on('value', function (snap) {
//         if (snap.val()) {
//           userRef.onDisconnect().remove()
//           userRef.set(true)
//         }
//       })

//       // Number of online users is the number of objects in the presence list.
//       listRef.on('value', function (snap) {
//         console.log('# of online users = ' + snap.numChildren())
//       })

export default function MainLayout (header, footer, body) {
  return {
    controller () {
      let route = m.route()
      route = route === '/' ? '~homepage' : route.replace(/\W/g, '~')

      var presence = new Presence(route, 'kulakowka')

      firebase.child('_presence/' + route).on('value', function (snap) {
        console.log('%d online users at %s ', snap.numChildren(), m.route())
      })

      return {
        onunload: function () {
          presence.remove()
        }
      }
    },
    view () {
      return [
        m.component(header),
        <div class='layout'>
          {m.component(body)}
        </div>,
        m.component(footer)
      ]
    }
  }
}




