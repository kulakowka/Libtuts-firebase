import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Grid from '../../components/projects/grid'

const Projects = {
  controller (args) {
    const ref = firebase.child('Projects')
    let scope = firebaseMixin(m, this)

    scope.onLiveData(ref, (data) => (scope.data = data))
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
