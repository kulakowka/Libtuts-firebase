import m from 'mithril'
import firebase from '../../utils/firebase'
import Languages from '../../components/languages/grid'
import Platforms from '../../components/platforms/grid'
import Projects from '../../components/projects/grid'
import Tutorials from '../../components/tutorials/list'

const Homepage = {
  controller (args) {
    this.tutorials = m.prop([])
    this.languages = m.prop([])
    this.platforms = m.prop([])
    this.projects = m.prop([])
    // firebase.on('tutorials', 'value', (data) => this.tutorials(firebase.toArray(data.val())))
    // firebase.on('languages', 'value', (data) => this.languages(firebase.toArray(data.val())))
    // firebase.on('platforms', 'value', (data) => this.platforms(firebase.toArray(data.val())))
    // firebase.on('projects', 'value', (data) => this.projects(firebase.toArray(data.val())))

    // Add tasks onto the queue
    var taskNumber = 0
    setInterval(function () {
      firebase.child('queue/tasks').push({
        taskNumber: ++taskNumber
      })
    }, 1000)

    // firebase.child('languages').once('value', (data) => {
    //   console.log('/languages', data.val())
    //   firebase.child('languages/javascript').once('value', (data) => {
    //     console.log('/languages/javascript', data.val())
    //     firebase.child('languages/javascript/name').once('value', (data) => {
    //       console.log('/languages/javascript/name', data.val())
    //       // Test write
    //       firebase.child('languages/javascript/name').set('gagno')
    //     })
    //   })
    // })

    // firebase.child('platforms').once('value', (data) => {
    //   console.log('/platforms', data.val())
    //   firebase.child('platforms/npm').once('value', (data) => {
    //     console.log('/platforms/npm', data.val())
    //     firebase.child('platforms/npm/name').once('value', (data) => {
    //       console.log('/platforms/npm/name', data.val())
    //       // Test write
    //       firebase.child('platforms/npm/name').set('gagno')
    //     })
    //   })
    // })
  },

  view (ctrl) {
    return (
      <div>
        <div class='row row-l'>
          <div class='col col-7'>
            <section>
              {Tutorials(ctrl.tutorials())}
            </section>
          </div>
          <div class='col col-3'>
            <div>include ../includes/sidebar/about</div>
            <div>include ../includes/sidebar/search</div>
          </div>
        </div>
        <div class='row row-l'>
          <div class='col'>
            <section>
              {Projects(ctrl.projects())}
            </section>
            <section>
              {Languages(ctrl.languages())}
            </section>
            <section>
              {Platforms(ctrl.platforms())}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
