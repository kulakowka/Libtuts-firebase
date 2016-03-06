import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Grid from '../../components/languages/grid'

const Languages = {
  controller (args) {
    firebaseMixin(m, this)

    this.onLiveData(firebase.child('Languages'), (data) => (this.languages = data))
  },

  view (ctrl) {
    return Grid(ctrl.languages)
  }
}

export default Languages
