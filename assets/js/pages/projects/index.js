import m from 'mithril'
import firebase from '../../utils/firebase'
import Grid from '../../components/projects/grid'

const Projects = {
  controller (args) {
    this.list = m.prop([])
    firebase.on('projects', 'value', (data) => this.list(firebase.toArray(data.val())))
  },

  view (ctrl) {
    return (
      <section>
        {Grid(ctrl.list())}
      </section>
    )
  }
}

export default Projects
