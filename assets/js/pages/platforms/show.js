import m from 'mithril'
import firebase from '../../utils/firebase'
import About from '../../components/platforms/about'

const Platforms = {
  controller (args) {
    let id = m.route.param('id')
    this.platform = m.prop()
    firebase.on('platforms/' + id, 'value', (data) => this.platform(data.val()))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.platform())}
        <section>
          include ../tutorials/includes/list
        </section>
        <section>
          include ../projects/includes/grid
        </section>
      </div>
    )
  }
}

export default Platforms
