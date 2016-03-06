import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Comments from '../../components/comments/list'
import Show from '../../components/tutorials/show'

let Tutorial = {
  controller (args) {
    firebaseMixin(m, this)

    let id = m.route.param('id')

    this.onData(firebase.child('Tutorials/' + id), (data) => (this.tutorial = data))
    this.onLiveData(firebase.child('_tutorial_comments/' + id), (data) => (this.comments = data))
  },

  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          {Show(ctrl.tutorial)}

          <div id='comments'>
            <h2>Questions and discussion</h2>
            include ../comments/includes/form
            <br/>
            {Comments(ctrl.comments)}
          </div>
        </div>
      </div>
    )
  }
}

export default Tutorial
