var m = require('mithril')
var mixinLayout = require('../../components/mixinLayout')
var layout = require('../../components/layout')
var nav = require('../../components/nav')
var fb = require('../../utils/firebase')

function toArray (obj) {
  return Object.keys(obj).map((key) => obj[key])
}

var Languages = {}

Languages.controller = function (args) {
  Languages.list = m.prop([])
  fb.getData('languages', function (data) {
    Languages.list(toArray(data))
  })
}

Languages.view = function (ctrl) {
  var list = Languages.list()
  console.log('render Languages.view')
  return (
  <div>
    <h1>languages</h1>
    {list.map(function (language) {
       return (
       <div>
         <h2>{language.name}</h2>
         <p>
           tutorialsCount:
           {language.tutorialsCount}
         </p>
       </div>
       )
     })}
  </div>
  )
}

module.exports = {view: mixinLayout(layout, nav, Languages)}
