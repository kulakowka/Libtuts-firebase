import m from 'mithril'
import User from '../../../models/User'

const Form = {
  controller (args) {
    this.user = m.prop(new User())
    this.resetPassword = function (user, event) {
      event.preventDefault()
      User.resetPassword({
        email: user.email()
      }).then(() => {
        console.log('Pasword reset successfully')
        m.route('/')
      }).catch((err) => {
        console.log('Pasword reset failed', err)
      })
    }
  },

  view (ctrl, args) {
    var user = ctrl.user()

    return (
      <section>
        <form class='defaultForm' onsubmit={ctrl.resetPassword.bind(this, user)}>

          <div class='field'>
            <input type='text' oninput={m.withAttr('value', user.email)} value={user.email()} placeholder='Email' required autocomplete='off'/>
          </div>

          <div class='field buttons center'>
            <button class='btn btn-action btn-wide' type='submit'>Reset password</button>
          </div>
        </form>
      </section>
    )
  }
}

export default Form
