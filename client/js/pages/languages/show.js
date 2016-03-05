import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import About from '../../components/languages/about'

const Language = {
  controller (args) {
    const id = m.route.param('id')
    const ref = firebase.child('Languages/' + id)
    let scope = firebaseMixin(m, this)

    scope.onData(ref, (data) => (scope.data = data))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.data)}
        <section>
          include ../tutorials/includes/list
        </section>
        <section>
          include ../projects/includes/grid
        </section>
      </div>
    )
  }
}

export default Language
