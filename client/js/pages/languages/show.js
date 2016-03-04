import m from 'mithril'
import firebase from '../../utils/firebase'
import About from '../../components/languages/about'

const Language = {
  controller (args) {
    let id = m.route.param('id')
    this.language = m.prop()
    firebase.on('languages/' + id, 'value', (data) => this.language(data.val()))
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

export default Language
