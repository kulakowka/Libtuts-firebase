import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import About from '../../components/projects/about'
import Tutorials from '../../components/tutorials/list'

const Project = {
  controller (args) {
    firebaseMixin(m, this)

    const id = m.route.param('id')

    this.onData(firebase.child('Projects/' + id), (data) => (this.project = data))
    this.onLiveData(firebase.child('_project_tutorials/' + id), (data) => (this.tutorials = data))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.project)}
        <section>
          {Tutorials(ctrl.tutorials)}
        </section>
      </div>
    )
  }
}

export default Project
