import m from 'mithril'
import User from '../../../models/User'

const Form = {
  controller (args) {
    this.user = m.prop(new User())
    this.result = m.prop(false)
    this.error = m.prop(false)
    this.resetPassword = (user, event) => {
      event.preventDefault()
      User.resetPassword({
        email: user.email()
      }).then(() => {
        this.result('A temporary password has been sent to your email. If it doesn\'t appear within a few minutes, check your spam folder.')
        m.redraw()
      }).catch((err) => {
        if (err.code === 'INVALID_USER') {
          this.error('Can\'t find that email, sorry.')
          m.redraw()
        }
        console.log('Pasword reset failed', err)
      })
    }
  },

  view (ctrl, args) {
    var user = ctrl.user()

    return (
      <section>
        {ctrl.result() ? (
          <div>{ctrl.result()}</div>
        ) : (
          <form class='defaultForm' onsubmit={ctrl.resetPassword.bind(this, user)}>

            <div class='field-description'>
              Enter your email address and we will send you temporary password with which within 24 hours you will be able to log in and update your account.
            </div>

            <div class={ctrl.error() ? 'field field-with-error' : 'field'}>
              <input type='text' oninput={m.withAttr('value', user.email)} value={user.email()} placeholder='Email' required autocomplete='off'/>
            </div>

            {!ctrl.error() ? null : <div class='field-error'>{ctrl.error()}</div>}

            <div class='field buttons center'>
              <button class='btn btn-action btn-wide' type='submit'>Reset password</button>
            </div>
          </form>
        )}
      </section>
    )
  }
}

export default Form
