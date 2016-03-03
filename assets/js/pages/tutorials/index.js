import m from 'mithril'
import firebase from '../../utils/firebase'
import List from '../../components/tutorials/list'

const Tutorials = {
  controller (args) {
    this.list = m.prop([])
    firebase.on('tutorials', 'value', (data) => this.list(firebase.toArray(data.val())))
  },

  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          <section>
            {List(ctrl.list())}
          </section>
        </div>
      </div>
    )
  }
}

export default Tutorials
