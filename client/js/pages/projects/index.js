import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Grid from '../../components/projects/grid'

const Projects = {
  controller (args) {
    firebaseMixin(m, this)

    this.onLiveData(firebase.child('Projects'), (data) => (this.projects = data))
  },

  view (ctrl) {
    return (
      <section>
        {Grid(ctrl.projects)}
      </section>
    )
  }
}

export default Projects
