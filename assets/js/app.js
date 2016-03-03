import m from 'mithril'

// import signInPage from './components/signInPage'
// import signUpPage from './components/signUpPage'
import Homepage from './pages/homepage/index'
import LanguagesIndex from './pages/languages/index'
import LanguagesShow from './pages/languages/show'
import layout from './layouts/main'
import nav from './components/nav'
import mixinLayout from './utils/mixinLayout'

m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {
  '/': mixinLayout(layout, nav, Homepage),
  // '/signin': signInPage,
  // '/signup': signUpPage,
  '/languages': mixinLayout(layout, nav, LanguagesIndex),
  '/language/:name': mixinLayout(layout, nav, LanguagesShow)
})
