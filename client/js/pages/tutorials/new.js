import m from 'mithril'
import Form from '../../components/tutorials/form'
import Tutorial from '../../models/Tutorial'

let NewTutorial = {
  controller (args) {
    this.tutorial = new Tutorial()
  },

  view (ctrl) {
    return (
      <div class='row'>
        <div class='col col-8 col-l'>
          <h1>Add tutorial</h1>
          {m.component(Form, {tutorial: ctrl.tutorial})}
        </div>
      </div>
    )
  }
}

export default NewTutorial
