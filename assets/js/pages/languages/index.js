import m from 'mithril'
import firebase from '../../utils/firebase'
import Grid from '../../components/languages/grid'

const Languages = {
  controller (args) {
    this.list = m.prop([])
    firebase.on('languages', 'value', (data) => this.list(firebase.toArray(data.val())))
  },

  view (ctrl) {
    return (
      <section>
        {Grid(ctrl.list())}
      </section>
    )
  }
}

export default Languages
