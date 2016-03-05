import m from 'mithril'
import firebase from '../../utils/firebase'
import Form from '../../components/auth/forms/signup'

// const ref = firebase.child('Projects')

const SignUp = {
  controller (args) {

    this.onsubmit = () => console.log('submit')
  },

  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-4'>
          <h1>Create your personal account</h1>
          <section>
            {m.component(Form, {onsubmit: ctrl.onsubmit})}
          </section>
          <p>Do you have an account? <a href='/auth/signin'>Sign in</a>.</p>
        </div>
      </div>
    )
  }
}

export default SignUp
