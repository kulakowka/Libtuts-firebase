import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import Comments from '../../components/comments/list'
import Show from '../../components/tutorials/show'

let Tutorial = {
  controller (args) {
    let id = m.route.param('id')
    let tutorialsRef = firebase.child('Tutorials/' + id)
    let commentsRef = firebase.child('Comments').orderByChild('tutorial').equalTo(id)

    let scope = firebaseMixin(m, this)

    scope.onData(tutorialsRef, (data) => (scope.tutorial = data))
    scope.onLiveData(commentsRef, (data) => (scope.comments = data))

    // создадим новый таск для обработки коммента
    // let ref = firebase.child('queue/comments/tasks')

    // ref.push({
    //   content: '### Hello its comment\nThen its a text of this comment',
    //   tutorial: 't0000001',
    //   author: 'kulakowka'
    // }, (err) => console.log('Comment pushed to queue', err))
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
