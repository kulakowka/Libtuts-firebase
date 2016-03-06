import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import helpers from '../../utils/helpers'
import About from '../../components/languages/about'
import Tutorials from '../../components/tutorials/list'
import Projects from '../../components/projects/grid'

const Language = {
  controller (args) {
    const id = m.route.param('id')

    let scope = firebaseMixin(m, this)

    scope.onData(firebase.child('Languages/' + id), (data) => (scope.data = data))

    scope.onLiveData(firebase.child('_language_tutorials/' + id), (data) => {
      scope.tutorials = {}
      helpers.toArray(data).forEach((item) => {
        scope.onData(firebase.child('Tutorials/' + item.key), (data) => {
          scope.tutorials[data._id] = data
        })
      })
    }, true)

    scope.onLiveData(firebase.child('_language_projects/' + id), (data) => {
      scope.projects = {}
      helpers.toArray(data).forEach((item) => {
        scope.onData(firebase.child('Projects/' + item.key), (data) => {
          scope.projects[data._id] = data
        })
      })
    }, true)
  },

  view (ctrl) {
    let tutorials = ctrl.tutorials ? helpers.toArray(ctrl.tutorials).map((obj) => obj.value) : []
    let projects = ctrl.projects ? helpers.toArray(ctrl.projects).map((obj) => obj.value) : []

    return (
      <div>
        {About(ctrl.data)}
        <section>
          {Tutorials(tutorials)}
        </section>
        <section>
          {Projects(projects)}
        </section>
      </div>
    )
  }
}

export default Language
