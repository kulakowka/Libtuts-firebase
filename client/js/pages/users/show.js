import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'
import About from '../../components/users/about'
import Tutorials from '../../components/tutorials/list'
import Comments from '../../components/comments/list'

const User = {
  controller (args) {
    firebaseMixin(m, this)

    const id = m.route.param('id')

    this.onData(firebase.child('Users/' + id), (data) => (this.user = data))
    this.onLiveData(firebase.child('_user_tutorials/' + id), (data) => (this.tutorials = data))
    this.onLiveData(firebase.child('_user_comments/' + id), (data) => (this.comments = data))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.user)}
        {Tutorials(ctrl.tutorials)}
        {Comments(ctrl.comments)}
      </div>
    )
  }
}

export default User
