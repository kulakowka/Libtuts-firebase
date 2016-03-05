import m from 'mithril'
import Form from '../../components/auth/forms/signin'

const SignIn = {
  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-4'>
          <h1>Sign in to LibTuts</h1>
          <section>
            {m.component(Form)}
          </section>
          <p>New to LibTuts? <a href='/auth/signup' config={m.route}>Create an account</a>.</p>
        </div>
      </div>
    )
  }
}

export default SignIn
