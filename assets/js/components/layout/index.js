'use strict'

var m = require('mithril')

module.exports = function (nav, body) {
  return (
    <div class='layout'>
      <header>
        {nav}
      </header>
      <div class='body'>
        {m.component(body, {param: 1})}
      </div>
    </div>
  )
}
