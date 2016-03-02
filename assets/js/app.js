var m = require('mithril')
var config = require('./config')

m.route.mode = 'pathname'

var homePage = require('./components/homePage')
var signInPage = require('./components/signInPage')
var signUpPage = require('./components/signUpPage')

// initialize the application
m.route(document.getElementById('app'), '/', {
  '/': homePage,
  '/signin': signInPage,
  '/signup': signUpPage
// '/dashboard': dashboard,
})

config.firebase.onAuth(function (authData) {
  if (authData) {
    console.log('Authenticated with uid:', authData.uid)
  } else {
    console.log('Client unauthenticated.')
    m.route('/')
  }
})
