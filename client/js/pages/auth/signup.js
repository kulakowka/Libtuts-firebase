import m from 'mithril'
import helpers from '../../utils/helpers'
import Form from '../../components/auth/forms/signup'

const SignUp = {
  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-4'>
          <h1>Create your LibTuts account</h1>
          {m.component(Form)}
          <p>Do you have an account? <a href={helpers.signInUrl()} config={m.route}>Sign in</a>.</p>
        </div>
      </div>
    )
  }
}

export default SignUp
