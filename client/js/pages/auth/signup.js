import m from 'mithril'
import Form from '../../components/auth/forms/signup'

const SignUp = {
  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-4'>
          <h1>Create your LibTuts account</h1>
          <section>
            {m.component(Form)}
          </section>
          <p>Do you have an account? <a href='/auth/signin' config={m.route}>Sign in</a>.</p>
        </div>
      </div>
    )
  }
}

export default SignUp
