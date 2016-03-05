import m from 'mithril'
import firebase from '../../utils/firebase'
import firebaseMixin from '../../utils/firebaseMixin'

import Grid from '../../components/languages/grid'

const ref = firebase.child('Languages')

const Languages = {
  controller (args) {
    var scope = firebaseMixin(this)

    scope.onlivedata(ref, function (data) {
      scope.languages = data
    })
  },

  view (ctrl) {
    return (
      <section>
        {Grid(ctrl.languages)}
      </section>
    )
  }
}

export default Languages
