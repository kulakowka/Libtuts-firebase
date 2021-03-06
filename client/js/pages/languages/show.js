import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import About from '../../components/languages/about'
import Tutorials from '../../components/tutorials/list'
import Projects from '../../components/projects/grid'

const Language = {
  controller (args) {
    firebaseMixin(m, this)

    const id = m.route.param('id')

    this.onData(firebase.child('Languages/' + id), (data) => (this.language = data))
    this.onLiveData(firebase.child('_language_tutorials/' + id), (data) => (this.tutorials = data))
    this.onLiveData(firebase.child('_language_projects/' + id), (data) => (this.projects = data))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.language)}
        <h2>Latest {ctrl.language.name} Tutorials</h2>
        {Tutorials(ctrl.tutorials)}
        <h2>Popular {ctrl.language.name} Projects</h2>
        {Projects(ctrl.projects)}
      </div>
    )
  }
}

export default Language
