import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import List from '../../components/tutorials/list'

const ref = firebase.child('Tutorials')

const Tutorials = {
  controller (args) {
    var scope = firebaseMixin(m, this)

    scope.onlivedata(ref, (data) => (scope.data = data))
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
