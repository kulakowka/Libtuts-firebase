import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Grid from '../../components/projects/grid'

const ref = firebase.child('Projects')

const Projects = {
  controller (args) {
    var scope = firebaseMixin(m, this)

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

export default Projects
