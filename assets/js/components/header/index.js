import m from 'mithril'
import firebase from '../../utils/firebase'
import Dropdown from '../dropdown'

const Header = {
  view () {
    var logout = function () {
      firebase.unauth()
    }
    const currentUser = null

    return (
      <header>
        <div class='inner'>
          <a href='/' class='siteName' config={m.route}>Library Tutorials</a>
          <nav class='mainMenu'>
            <a class='item' href='/tutorials' config={m.route}>Tutorials</a>
            <a class='item' href='/projects' config={m.route}>Projects</a>
            <a class='item' href='/languages' config={m.route}>Languages</a>
            <a class='item' href='/platforms' config={m.route}>Platforms</a>
          </nav>

          {currentUser ? (
            <nav class='userMenu'>
              <a class='item' href='/tutorial/new' config={m.route}>Add Tutorial</a>
              <span class='dropdown'>
                <a class='item handle'>{currentUser.username}</a>
                <span class='menu right'>
                  <a href={'/users/' + currentUser.username} config={m.route}>{currentUser.username}</a>
                  <a href={'/users/' + currentUser.username + '/tutorials'} config={m.route}>Your Tutorials</a>
                  <a href={'/users/' + currentUser.username + '/comments'} config={m.route}>Your Comments</a>
                  <a href={'/settings/profile'} config={m.route}>Settings</a>
                  <a href={'#logout'} onclick={logout}>Sign Out</a>
                </span>
              </span>
            </nav>
          ) : (
            <nav class='guestMenu'>
              {m.component(Dropdown, {handle: 'Sign in', items: [
                <a href={'/auth/signin'} config={m.route}>Sign in</a>,
                <a href={'/auth/signup'} config={m.route}>Sign up</a>
              ]})}
            </nav>
          )}
        </div>
      </header>
    )
  }
}

export default Header
