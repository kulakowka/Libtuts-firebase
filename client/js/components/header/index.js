import m from 'mithril'
import firebase from '../../utils/firebase'
import helpers from '../../utils/helpers'
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
            <a class='item' href={helpers.tutorialsUrl()} config={m.route}>Tutorials</a>
            <a class='item' href={helpers.projectsUrl()} config={m.route}>Projects</a>
            <a class='item' href={helpers.languagesUrl()} config={m.route}>Languages</a>
          </nav>

          {currentUser ? (
            <nav class='userMenu'>
              <a class='item' href={helpers.addTutorialUrl()} config={m.route}>Add Tutorial</a>
              {m.component(Dropdown, {handle: currentUser.username, items: (
                <span class='menu right'>
                  <a href={helpers.userUrl(currentUser.username)} config={m.route}>{currentUser.username}</a>
                  <a href={helpers.settingsUrl()} config={m.route}>Settings</a>
                  <a onclick={ctrl.logout}>Sign Out</a>
                </span>
              )})}
            </nav>
          ) : (
            <nav class='guestMenu'>
              {m.component(Dropdown, {handle: 'Sign in', items: (
                <span class='menu right'>
                  <a href={helpers.signInUrl()} config={m.route}>Sign in</a>
                  <a href={helpers.signUpUrl()} config={m.route}>Sign up</a>
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
