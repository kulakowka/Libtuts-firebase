import m from 'mithril'
import firebase from '../../utils/firebase'
import LanguagesList from '../../components/languages/list'
import PlatformsList from '../../components/platforms/list'

const Homepage = {
  controller (args) {
    this.languages = m.prop([])
    this.platforms = m.prop([])
    firebase.on('languages', 'value', (data) => this.languages(firebase.toArray(data.val())))
    firebase.on('platforms', 'value', (data) => this.platforms(firebase.toArray(data.val())))
  },

  view (ctrl) {
    return (
      <div>
        <h1>languages</h1>
        {LanguagesList(ctrl.languages())}
        <h1>platforms</h1>
        {PlatformsList(ctrl.platforms())}
      </div>
    )
  }
}

export default Homepage
