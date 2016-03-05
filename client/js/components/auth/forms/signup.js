import m from 'mithril'
import User from '../../../models/User'

const Form = {
  controller (args) {
    this.user = m.prop(new User())
    this.create = function (user, event) {
      event.preventDefault()
      User.create({
        email: user.email(),
        password: user.password()
      }).then((userData) => {
        console.log('user created', userData)
        m.route('/')
      }).catch((err) => {
        console.log('user not created', err)
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
        <div class='field-description'>
          You will occasionally receive account related emails.
          We promise not to share your email with anyone.
        </div>

        <div class='field'>
          <input type='text' oninput={m.withAttr('value', user.password)} value={user.password()} placeholder='Password' required autocomplete='off'/>
        </div>
        <div class='field-description'>
          Use at least one lowercase letter, one numeral, and seven characters.
        </div>

        <div class='field-description'>
          By clicking on "Create an account" below,
          you are agreeing to the <a href='/terms' config={m.route}>Terms of Service</a>
          and the <a href='/privacy' config={m.route}>Privacy Policy</a>.
        </div>

        <div class='field buttons center'>
          <button class='btn btn-action btn-wide' type='submit'>Create an account</button>
        </div>
      </form>
    )
  }
}

export default Form
