import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from 'mithril-firebase-mixin'

const Settings = {
  controller (args) {
    firebaseMixin(m, this)

    // this.onData(firebase.child('Users/' + id), (data) => (this.user = data))
  },

  view (ctrl) {
    return (
      <div>
        <h1>Settings</h1>

        <h2>Change email</h2>

        <h2>Change password</h2>
      </div>
    )
  }
}

export default Settings
