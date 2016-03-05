import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import List from '../../components/tutorials/list'

const Tutorials = {
  controller (args) {
    const ref = firebase.child('Tutorials')
    let scope = firebaseMixin(m, this)

    scope.onLiveData(ref, (data) => (scope.data = data))
  },

  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          <section>
            {List(ctrl.data)}
          </section>
        </div>
      </div>
    )
  }
}

export default Tutorials
