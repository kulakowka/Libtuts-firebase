import m from 'mithril'
import firebase from '../../utils/firebase'
import Dropdown from '../dropdown'

const Header = {
  controller (args) {
    this.logout = function (event) {
      event.preventDefault()
      firebase.unauth()
    }
  },

  view (ctrl, args) {
    const currentUser = firebase.getAuth()

    if (currentUser) currentUser.username = currentUser.password.email.split('@')[0]

    return (
      <header>
        <div class='inner'>
          <a href='/' class='siteName' config={m.route}>Library Tutorials</a>
          <nav class='mainMenu'>
            <a class='item' href='/tutorials' config={m.route}>Tutorials</a>
            <a class='item' href='/projects' config={m.route}>Projects</a>
            <a class='item' href='/languages' config={m.route}>Languages</a>
          </nav>

          {currentUser ? (
            <nav class='userMenu'>
              <a class='item' href='/tutorial/new' config={m.route}>Add Tutorial</a>
              {m.component(Dropdown, {handle: currentUser.username, items: (
                <span class='menu right'>
                  <a href={'/users/' + currentUser.username} config={m.route}>{currentUser.username}</a>
                  <a href={'/users/' + currentUser.username + '/tutorials'} config={m.route}>Your Tutorials</a>
                  <a href={'/users/' + currentUser.username + '/comments'} config={m.route}>Your Comments</a>
                  <a href={'/settings/profile'} config={m.route}>Settings</a>
                  <a href={'#logout'} onclick={ctrl.logout}>Sign Out</a>
                </span>
              )})}
            </nav>
          ) : (
            <nav class='guestMenu'>
              {m.component(Dropdown, {handle: 'Sign in', items: (
                <span class='menu right'>
                  <a href={'/auth/signin'} config={m.route}>Sign in</a>
                  <a href={'/auth/signup'} config={m.route}>Sign up</a>
                </span>
              )})}
            </nav>
          )}
        </div>
      </header>
    )
  }
}

export default Header
