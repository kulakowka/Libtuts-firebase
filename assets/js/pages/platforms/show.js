import m from 'mithril'
import firebase from '../../utils/firebase'
import Item from '../../components/platforms/item'

const Platforms = {
  controller (args) {
    let name = m.route.param('name')
    this.platform = m.prop()
    firebase.on('platforms/' + name, 'value', (data) => this.platform(data.val()))
  },

  view (ctrl) {
    return (
      <div>
        <h1>platform show</h1>
        {Item(ctrl.platform())}
      </div>
    )
  }
}

export default Platforms
