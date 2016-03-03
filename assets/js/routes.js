// import signInPage from './components/signInPage'
// import signUpPage from './components/signUpPage'
import Homepage from './pages/homepage/index'
import LanguagesIndex from './pages/languages/index'
import LanguageShow from './pages/languages/show'
import PlatformsIndex from './pages/platforms/index'
import PlatformShow from './pages/platforms/show'
import ProjectsIndex from './pages/projects/index'
import ProjectShow from './pages/projects/show'
import layout from './layouts/main'
import header from './components/header'
import footer from './components/footer'
import mixinLayout from './utils/mixinLayout'

const routes = {
  '/': mixinLayout(layout, header, footer, Homepage),
  // '/signin': signInPage,
  // '/signup': signUpPage,
  '/languages': mixinLayout(layout, header, footer, LanguagesIndex),
  '/language/:name': mixinLayout(layout, header, footer, LanguageShow),
  '/projects': mixinLayout(layout, header, footer, ProjectsIndex),
  '/platforms': mixinLayout(layout, header, footer, PlatformsIndex),
  '/:name': mixinLayout(layout, header, footer, PlatformShow),
  '/:platform/:name': mixinLayout(layout, header, footer, ProjectShow)
}

export default routes
