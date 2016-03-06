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
        <h2>Profile settings</h2>
        <p>username</p>
        <p>name</p>
        <p>homepage</p>
        <p>about</p>

        <h2>Change email</h2>
        <p>oldEmail</p>
        <p>newEmail</p>
        <p>password</p>

        <h2>Change password</h2>
        <p>email</p>
        <p>oldPassword</p>
        <p>newPassword</p>

        <h2>Delete account</h2>
        <p>email</p>
        <p>password</p>
      </div>
    )
  }
}

export default Settings
