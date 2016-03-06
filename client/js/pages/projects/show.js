import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import helpers from '../../utils/helpers'
import About from '../../components/projects/about'
import Tutorials from '../../components/tutorials/list'

const Project = {
  controller (args) {
    const id = m.route.param('id')

    let scope = firebaseMixin(m, this)

    scope.onData(firebase.child('Projects/' + id), (data) => (scope.data = data))

    scope.onLiveData(firebase.child('_project_tutorials/' + id), (data) => {
      scope.tutorials = {}
      helpers.toArray(data).forEach((item) => {
        scope.onData(firebase.child('Tutorials/' + item.key), (data) => {
          scope.tutorials[data._id] = data
        })
      })
    }, true)
  },

  view (ctrl) {
    let tutorials = ctrl.tutorials ? helpers.toArray(ctrl.tutorials).map((obj) => obj.value) : []
    return (
      <div>
        {About(ctrl.data)}
        <br/>
        <section>
          {Tutorials(tutorials)}
        </section>
      </div>
    )
  }
}

export default Project
