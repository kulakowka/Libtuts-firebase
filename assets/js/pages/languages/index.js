import m from 'mithril'
import firebase from '../../utils/firebase'
import Language from './_language'

const Languages = {
  controller (args) {
    this.list = m.prop([])
    firebase.on('languages', 'value', (data) => this.list(firebase.toArray(data.val())))
  },

  view (ctrl) {
    return (
      <div>
        <h1>languages index</h1>
        {ctrl.list().map(Language)}
      </div>
    )
  }
}

export default Languages
