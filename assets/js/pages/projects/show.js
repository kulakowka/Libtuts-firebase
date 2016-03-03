import m from 'mithril'
import firebase from '../../utils/firebase'
import About from '../../components/projects/about'

const Project = {
  controller (args) {
    let id = m.route.param('platform') + '~' + m.route.param('name')
    this.project = m.prop()
    firebase.on('projects/' + id, 'value', (data) => this.project(data.val()))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.project())}
        <br/>
        <section>
          include ../tutorials/includes/list
        </section>
      </div>
    )
  }
}

export default Project
