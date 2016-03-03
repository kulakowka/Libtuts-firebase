import m from 'mithril'
import firebase from '../../utils/firebase'

const Nav = {
  view () {
    var logout = function () {
      firebase.unauth()
    }
    return (
      <nav>
        <h1><a href='/' class='sitename' config={m.route}>sitename</a></h1>
        <ul>
          <li><a href='/languages' config={m.route}>Languages</a></li>
          <li><a href='/platforms' config={m.route}>Platforms</a></li>

          <li><a href='/signin' config={m.route}>Sign in</a></li>
          <li><a href='/signup' config={m.route}>Sign up</a></li>

          <li><a href='#logout' onclick={logout}>Logout</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav
