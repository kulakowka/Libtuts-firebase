import SignIn from './pages/auth/signin'
import SignUp from './pages/auth/signup'
import Homepage from './pages/homepage/index'
import TutorialsIndex from './pages/tutorials/index'
import TutorialShow from './pages/tutorials/show'
import LanguagesIndex from './pages/languages/index'
import LanguageShow from './pages/languages/show'
import ProjectsIndex from './pages/projects/index'
import ProjectShow from './pages/projects/show'
import UserShow from './pages/users/show'
import DomainShow from './pages/domains/show'
import layout from './layouts/main'
import header from './components/header'
import footer from './components/footer'
import mixinLayout from './utils/mixinLayout'

const mainLayout = mixinLayout.bind(null, layout, header, footer)

const routes = {
  '/': mainLayout(Homepage),
  '/auth/signin': mainLayout(SignIn),
  '/auth/signup': mainLayout(SignUp),
  '/tutorials': mainLayout(TutorialsIndex),
  '/tutorial/:id': mainLayout(TutorialShow),
  '/languages': mainLayout(LanguagesIndex),
  '/language/:id': mainLayout(LanguageShow),
  '/projects': mainLayout(ProjectsIndex),
  '/project/:id': mainLayout(ProjectShow),
  '/user/:id': mainLayout(UserShow),
  '/domain/:domain': mainLayout(DomainShow)
}

export default routes
