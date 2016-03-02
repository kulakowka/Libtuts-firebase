'use strict'

var m = require('mithril')

module.exports = function (ctrl) {
  return (
    <div>
      <h1>Sign up</h1>
      <input onchange={m.withAttr('value', ctrl.vm.email)} value={ctrl.vm.email()} placeholder='Email'/>
      <br/><br/>
      <input onchange={m.withAttr('value', ctrl.vm.password)} value={ctrl.vm.password()} placeholder='Password'/>
      <br/><br/>
      <button onclick={ctrl.vm.createAccount}>Create account</button>
    </div>
  )
}

