// import signInPage from './components/signInPage'
// import signUpPage from './components/signUpPage'
import Homepage from './pages/homepage/index'
import LanguagesIndex from './pages/languages/index'
import LanguageShow from './pages/languages/show'
import PlatformsIndex from './pages/platforms/index'
import PlatformShow from './pages/platforms/show'
import layout from './layouts/main'
import nav from './components/nav'
import mixinLayout from './utils/mixinLayout'

const routes = {
  '/': mixinLayout(layout, nav, Homepage),
  // '/signin': signInPage,
  // '/signup': signUpPage,
  '/languages': mixinLayout(layout, nav, LanguagesIndex),
  '/language/:name': mixinLayout(layout, nav, LanguageShow),
  '/platforms': mixinLayout(layout, nav, PlatformsIndex),
  '/:name': mixinLayout(layout, nav, PlatformShow)
}

export default routes
