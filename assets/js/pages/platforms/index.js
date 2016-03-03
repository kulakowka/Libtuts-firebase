import m from 'mithril'
import firebase from '../../utils/firebase'
import Grid from '../../components/platforms/grid'

const Platforms = {
  controller (args) {
    this.list = m.prop([])
    firebase.on('platforms', 'value', (data) => this.list(firebase.toArray(data.val())))
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
