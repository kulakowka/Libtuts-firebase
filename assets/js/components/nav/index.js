'use strict'

var m = require('mithril')
var config = require('../../config')

module.exports = function () {
  var logout = function () {
    config.firebase.unauth()
  }
  return (
    <nav>
      <h1><a href='/' class='sitename' config={m.route}>sitename</a></h1>
      <ul>
        <li><a href='/languages' config={m.route}>Languages</a></li>
        
        <li><a href='/signin' config={m.route}>Sign in</a></li>
        <li><a href='/signup' config={m.route}>Sign up</a></li>

        <li><a href='#logout' onclick={logout}>Logout</a></li>
      </ul>
    </nav>
  )
}
