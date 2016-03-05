// import signInPage from './components/signInPage'
// import signUpPage from './components/signUpPage'
import Homepage from './pages/homepage/index'
import TutorialsIndex from './pages/tutorials/index'
import TutorialShow from './pages/tutorials/show'
import LanguagesIndex from './pages/languages/index'
import LanguageShow from './pages/languages/show'
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
  '/tutorials': mainLayout(TutorialsIndex),
  '/tutorial/:id': mainLayout(TutorialShow),
  '/languages': mainLayout(LanguagesIndex),
  '/language/:id': mainLayout(LanguageShow),
  '/projects': mainLayout(ProjectsIndex),
  '/project/:id': mainLayout(ProjectShow)
}

export default routes
