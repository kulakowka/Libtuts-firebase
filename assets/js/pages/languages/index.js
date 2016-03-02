var m = require('mithril')
var mixinLayout = require('../../components/mixinLayout')
var layout = require('../../components/layout')
var nav = require('../../components/nav')
var config = require('../../config')
var languagesRef = config.firebase.child('languages')

var Languages = {}
 
Languages.controller = function(args) {
  Languages.list = m.prop([])

  m.startComputation()

  languagesRef.on("value", function(snapshot) {
    var languages = snapshot.val()
    var list = []
    for (var key in languages) {
      list.push(languages[key])
    }
    Languages.list(list)
    m.endComputation()
  });
}
 
Languages.view = function(ctrl) {
  var list = Languages.list()

  return (
    <div>
      <h1>languages</h1>
      {list.map(function(language) {
        return (
          <div>
            <h2>{language.name}</h2>
            <p>tutorialsCount: {language.tutorialsCount}</p>
          </div>
        )
      })}
    </div>
  )
}

module.exports = {view: mixinLayout(layout, nav, Languages)}
