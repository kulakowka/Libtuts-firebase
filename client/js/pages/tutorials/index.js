import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import List from '../../components/tutorials/list'

const Tutorials = {
  controller (args) {
    firebaseMixin(m, this)

    this.onLiveData(firebase.child('Tutorials'), (data) => (this.tutorials = data))
  },

  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          {List(ctrl.tutorials)}
        </div>
      </div>
    )
  }
}

export default Tutorials
