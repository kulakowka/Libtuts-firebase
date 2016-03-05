import firebase from '../../utils/firebase'
import firebaseMixin from '../../utils/firebaseMixin'
import Grid from '../../components/languages/grid'

const ref = firebase.child('Languages')

const Languages = {
  controller (args) {
    var scope = firebaseMixin(this)

    scope.onlivedata(ref, (data) => (scope.data = data))
  },

  view (ctrl) {
    return (
      <section>
        {Grid(ctrl.data)}
      </section>
    )
  }
}

export default Languages
