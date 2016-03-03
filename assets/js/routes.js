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

const mainLayout = mixinLayout.bind(null, layout, header, footer)

const routes = {
  '/': mainLayout(Homepage),
  // '/signin': signInPage,
  // '/signup': signUpPage,
  '/languages': mainLayout(LanguagesIndex),
  '/language/:name': mainLayout(LanguageShow),
  '/projects': mainLayout(ProjectsIndex),
  '/platforms': mainLayout(PlatformsIndex),
  '/:name': mainLayout(PlatformShow),
  '/:platform/:name': mainLayout(ProjectShow)
}

export default routes
