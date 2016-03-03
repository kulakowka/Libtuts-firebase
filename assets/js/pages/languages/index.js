import m from 'mithril'
import firebase from '../../utils/firebase'
import List from '../../components/languages/list'

const Languages = {
  controller (args) {
    this.list = m.prop([])
    firebase.on('languages', 'value', (data) => this.list(firebase.toArray(data.val())))
  },

  view (ctrl) {
    return (
      <div>
        <h1>languages index</h1>
        {List(ctrl.list())}
      </div>
    )
  }
}

export default Languages
