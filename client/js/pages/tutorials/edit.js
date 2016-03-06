import m from 'mithril'
import firebase from '../../utils/firebase'
import Form from '../../components/tutorials/form'
import Tutorial from '../../models/Tutorial'

let EditTutorial = {
  controller (args) {
    let id = m.route.param('id')

    m.startComputation()
    firebase.child('Tutorials/' + id).once('value', (data) => {
      this.tutorial = new Tutorial(data.val())
      m.endComputation()
    })
  },

  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          <h1>Edit tutorial</h1>
          {m.component(Form, {tutorial: ctrl.tutorial})}
        </div>
      </div>
    )
  }
}

export default EditTutorial
