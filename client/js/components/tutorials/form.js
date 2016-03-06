import m from 'mithril'
import helpers from '../../utils/helpers'
import firebase from '../../utils/firebase'
import Tutorial from '../../models/Tutorial'
import Firebase from 'firebase'

const Form = {
  controller (args) {
    const currentUser = firebase.getAuth()

    console.log(args)
    
    this.tutorial = m.prop(args.tutorial)

    this.save = function (tutorial, event) {
      event.preventDefault()

      Tutorial.save({
        title: tutorial.title(),
        source: tutorial.source(),
        content: tutorial.content(),
        keywords: [], // tutorial.keywords(),
        languages: {}, // tutorial.languages(),
        projects: {}, // tutorial.projects(),
        author: currentUser.uid,
        createdAt: Firebase.ServerValue.TIMESTAMP,
        updatedAt: Firebase.ServerValue.TIMESTAMP
      }).then((snap) => {
        console.log('Tutorial saved', snap)
        // m.route('/')
      }).catch((err) => {
        console.log('Tutorial save failed', err)
      })
    }
  },

  view (ctrl, args) {
    var tutorial = ctrl.tutorial()

    return (
      <section>
        <form class='defaultForm' onsubmit={ctrl.save.bind(this, tutorial)}>

          <div class='field'>
            <input type='text' oninput={m.withAttr('value', tutorial.title)} value={tutorial.title()} placeholder='Title' required autocomplete='off'/>
          </div>

          <div class='field'>
            <input type='text' oninput={m.withAttr('value', tutorial.source)} value={tutorial.source()} placeholder='Source URL' autocomplete='off'/>
          </div>

          <div class='field'>
            <textarea type='text' oninput={m.withAttr('value', tutorial.content)} placeholder='Content'>{tutorial.content()}</textarea>
          </div>

          <div class='field'>
            <select oninput={m.withAttr('value', tutorial.languages)} multiple placeholder='Languages'>
              <option value='javascript'>JavaScript</option>
              <option value='ruby'>Ruby</option>
            </select>
          </div>

          <div class='field'>
            <select oninput={m.withAttr('value', tutorial.projects)} multiple placeholder='Projects'>
              <option value='react'>React.js</option>
              <option value='babel'>Babel.js</option>
            </select>
          </div>

          <div class='field'>
            <input type='text' oninput={m.withAttr('value', tutorial.keywords)} value={tutorial.keywords()} placeholder='Keywords'/>
          </div>

          <div class='field buttons'>
            <button class='btn btn-action' type='submit'>Publish</button>
          </div>
        </form>
      </section>
    )
  }
}

export default Form
