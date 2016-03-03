import m from 'mithril'
import firebase from '../../utils/firebase'
import List from '../../components/platforms/list'

const Platforms = {
  controller (args) {
    this.list = m.prop([])
    firebase.on('platforms', 'value', (data) => this.list(firebase.toArray(data.val())))
  },

  view (ctrl) {
    return (
      <div>
        <h1>platforms index</h1>
        {List(ctrl.list())}
      </div>
    )
  }
}

export default Platforms
