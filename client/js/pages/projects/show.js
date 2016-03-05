import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import About from '../../components/projects/about'

const Project = {
  controller (args) {
    const id = m.route.param('id')
    const ref = firebase.child('Projects/' + id)
    let scope = firebaseMixin(m, this)

    scope.onData(ref, (data) => (scope.data = data))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.data)}
        <br/>
        <section>
          include ../tutorials/includes/list
        </section>
      </div>
    )
  }
}

export default Project
