import firebase from '../../utils/firebase'
import firebaseMixin from '../../utils/firebaseMixin'
import Grid from '../../components/projects/grid'

const ref = firebase.child('Projects')

const Projects = {
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

export default Projects
