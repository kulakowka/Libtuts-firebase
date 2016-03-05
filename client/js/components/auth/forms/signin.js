import m from 'mithril'
import User from '../../../models/User'

const Form = {
  controller (args) {
    this.user = m.prop(new User())
    this.create = function (user, event) {
      event.preventDefault()
      User.auth({
        email: user.email(),
        password: user.password()
      }).then((authData) => {
        console.log('Authenticated successfully', authData)
        m.route('/')
      }).catch((err) => {
        console.log('Authentication failed', err)
      })
    }
  },

  view (ctrl, args) {
    var user = ctrl.user()

    return (
      <form class='defaultForm' onsubmit={ctrl.create.bind(this, user)}>

        <div class='field'>
          <input type='text' oninput={m.withAttr('value', user.email)} value={user.email()} placeholder='Email' required autocomplete='off'/>
        </div>

        <div class='field'>
          <input type='text' oninput={m.withAttr('value', user.password)} value={user.password()} placeholder='Password' required autocomplete='off'/>
        </div>

        <div class='field-description'>
          <a href='/auth/forgot_password' config={m.route}>Forgot password?</a>
        </div>

        <div class='field buttons center'>
          <button class='btn btn-action btn-wide' type='submit'>Sign in</button>
        </div>
      </form>
    )
  }
}

export default Form
