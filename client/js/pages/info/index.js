import m from 'mithril'
import firebase from '../../utils/firebase'

const Page = {
  controller (args) {
    const page = m.route.param('page')

    firebase.child('Pages/' + page).once('value', (data) => {
      console.log('test', data.val())
      this.data = data.val()
      m.redraw()
    })
  },

  view (ctrl) {
    return !ctrl.data ? <p>Loading...</p> : <section class='infoPage'>{m.trust(ctrl.data)}</section>
  }
}

export default Page
