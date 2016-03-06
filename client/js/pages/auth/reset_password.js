import m from 'mithril'
import helpers from '../../utils/helpers'
import Form from '../../components/auth/forms/reset_password'

const ResetPassword = {
  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-4 col-l'>
          <h1>Reset your password</h1>
          {m.component(Form)}
          <p>New to LibTuts? <a href={helpers.signUpUrl()} config={m.route}>Create an account</a>.</p>
        </div>
      </div>
    )
  }
}

export default ResetPassword
