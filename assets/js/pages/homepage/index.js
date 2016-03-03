import m from 'mithril'
import firebase from '../../utils/firebase'
import Languages from '../../components/languages/grid'
import Platforms from '../../components/platforms/grid'
import Projects from '../../components/projects/grid'

const Homepage = {
  controller (args) {
    this.languages = m.prop([])
    this.platforms = m.prop([])
    this.projects = m.prop([])
    firebase.on('languages', 'value', (data) => this.languages(firebase.toArray(data.val())))
    firebase.on('platforms', 'value', (data) => this.platforms(firebase.toArray(data.val())))
    firebase.on('projects', 'value', (data) => this.projects(firebase.toArray(data.val())))

    // return {
    //   onunload () {
    //     // TODO: перестать слушать обновления
    //     console.log('unloading my component')
    //   }
    // }
  },

  view (ctrl) {
    return (
      <div>
        <div class='row row-l'>
          <div class='col col-7'>
            <section>
              tutorials list
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
