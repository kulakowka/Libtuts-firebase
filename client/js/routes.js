import SignIn from './pages/auth/signin'
import SignUp from './pages/auth/signup'
import ResetPassword from './pages/auth/reset_password'
import Homepage from './pages/homepage/index'
import TutorialsIndex from './pages/tutorials/index'
import TutorialsNew from './pages/tutorials/new'
import TutorialShow from './pages/tutorials/show'
import TutorialEdit from './pages/tutorials/edit'
import LanguagesIndex from './pages/languages/index'
import LanguageShow from './pages/languages/show'
import ProjectsIndex from './pages/projects/index'
import ProjectShow from './pages/projects/show'
import UserShow from './pages/users/show'
import DomainShow from './pages/domains/show'
import Settings from './pages/settings/index'
import InfoPage from './pages/info/index'
import layout from './layouts/main'
import header from './components/header'
import footer from './components/footer'
import mixinLayout from './utils/mixinLayout'

const mainLayout = mixinLayout.bind(null, layout, header, footer)

const routes = {
  '/': mainLayout(Homepage),
  '/auth/signin': mainLayout(SignIn),
  '/auth/signup': mainLayout(SignUp),
  '/auth/reset_password': mainLayout(ResetPassword),
  '/tutorials': mainLayout(TutorialsIndex),
  '/tutorials/new': mainLayout(TutorialsNew),
  '/tutorial/:id': mainLayout(TutorialShow),
  '/tutorial/:id/edit': mainLayout(TutorialEdit),
  '/languages': mainLayout(LanguagesIndex),
  '/language/:id': mainLayout(LanguageShow),
  '/projects': mainLayout(ProjectsIndex),
  '/project/:id': mainLayout(ProjectShow),
  '/user/:id': mainLayout(UserShow),
  '/domain/:domain': mainLayout(DomainShow),
  '/settings': mainLayout(Settings),
  '/:page': mainLayout(InfoPage)
}

export default routes
