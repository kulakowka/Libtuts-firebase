import m from 'mithril'
import firebase from '../../utils/firebase'
import Grid from '../../components/languages/grid'

const Languages = {
  controller (args) {
    this.list = m.prop(null)

    // Get languages and redraw when it will received from firebase
    m.startComputation()
    firebase.child('languages').on('value', (data) => {
      this.list(data)
      m.endComputation()
    })
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
