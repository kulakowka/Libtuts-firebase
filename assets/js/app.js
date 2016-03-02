var m = require('mithril')
var config = require('./config')

m.route.mode = 'pathname'

var homePage = require('./components/homePage')
var signInPage = require('./components/signInPage')
var signUpPage = require('./components/signUpPage')

var LanguagesIndexPage = require('./pages/languages/index')
var LanguagesShowPage = require('./pages/languages/show')

// initialize the application
m.route(document.getElementById('app'), '/', {
  '/': homePage,
  '/signin': signInPage,
  '/signup': signUpPage,

  '/languages': LanguagesIndexPage,
  '/language/:name': LanguagesShowPage

})

// config.firebase.onAuth(function (authData) {
//   if (authData) {
//     console.log('Authenticated with uid:', authData.uid)
//   } else {
//     console.log('Client unauthenticated.')
//     m.route('/')
//   }
// })
