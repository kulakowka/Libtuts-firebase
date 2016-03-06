import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Tutorials from '../../components/tutorials/list'

const User = {
  controller (args) {
    firebaseMixin(m, this)

    const domain = m.route.param('domain')

    this.onLiveData(firebase.child('Tutorials').orderByChild('domain').equalTo(domain), (data) => (this.tutorials = data))
  },

  view (ctrl) {
    return Tutorials(ctrl.tutorials)
  }
}

export default User
