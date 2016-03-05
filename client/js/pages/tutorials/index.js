import firebase from '../../utils/firebase'
import firebaseMixin from '../../utils/firebaseMixin'
import List from '../../components/tutorials/list'

const ref = firebase.child('Tutorials')

const Tutorials = {
  controller (args) {
    var scope = firebaseMixin(this)

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
