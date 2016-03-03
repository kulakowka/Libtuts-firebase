import m from 'mithril'
import firebase from '../../utils/firebase'
import Item from '../../components/languages/item'

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
        {Item(ctrl.language())}
      </div>
    )
  }
}

export default Languages
