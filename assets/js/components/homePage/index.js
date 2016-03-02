var m = require('mithril')
var mixinLayout = require('../mixinLayout')
var layout = require('../layout')
var nav = require('../nav')

var homePage = {
  view: function (ctrl) {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

module.exports = {view: mixinLayout(layout, nav, homePage)}
