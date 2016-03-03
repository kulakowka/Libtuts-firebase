import m from 'mithril'
import firebase from '../../utils/firebase'
import Language from './_language'

const Languages = {
  controller (args) {
    let name = m.route.param('name')
    this.language = m.prop()
    firebase.on('languages/' + name, 'value', (data) => this.language(data.val()))
  },

  view (ctrl) {
    return (
      <div>
        <h1>language show</h1>
        {Language(ctrl.language())}
      </div>
    )
  }
}

export default Languages

// var m = require('mithril')

// module.exports.controller = function () {
//   return {name: m.route.param('name')}
// }

// module.exports.view = function (controller) {
//   return (
//     <div>
//       <h1>Languages show {controller.name}</h1>
//     </div>
//   )
// }
