import m from 'mithril'
import firebase from '../../utils/firebase'
import helpers from '../../utils/helpers'
import Grid from '../../components/platforms/grid'

const Platforms = {
  controller (args) {
    this.list = m.prop(null)

    // Get platforms and redraw when it will received from firebase
    m.startComputation()
    firebase.child('platforms').on('value', (data) => {
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

export default Platforms
