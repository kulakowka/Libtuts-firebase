import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Languages from '../../components/languages/grid'
import Projects from '../../components/projects/grid'
import Tutorials from '../../components/tutorials/list'

const Homepage = {
  controller (args) {
    firebaseMixin(m, this)

    this.onLiveData(firebase.child('Languages'), (data) => (this.languages = data))
    this.onLiveData(firebase.child('Projects'), (data) => (this.projects = data))
    this.onLiveData(firebase.child('Tutorials'), (data) => (this.tutorials = data))
  },

  view (ctrl) {
    return (
      <div>
        <div class='row row-l'>
          <div class='col'>
            {Tutorials(ctrl.tutorials)}
          </div>
        </div>
        <div class='row row-l'>
          <div class='col'>
            {Projects(ctrl.projects)}
            {Languages(ctrl.languages)}
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
