import m from 'mithril'
import firebase from '../../utils/firebase'
import About from '../../components/languages/about'

const Languages = {
  controller (args) {
    let name = m.route.param('name')
    this.language = m.prop()
    firebase.on('languages/' + name, 'value', (data) => this.language(data.val()))
  },

  view (ctrl) {
    return (
      <div>
        {About(ctrl.language())}
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

export default Languages
