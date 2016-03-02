var m = require('mithril')
var config = require('../config')
var View = require('../views/auth.msx')

var auth = {}

auth.vm = (function () {
  var vm = {}
  vm.init = function () {
    vm.email = m.prop('kulakowka@gmail.com')
    vm.newEmail = m.prop('')
    vm.password = m.prop('ak87c210xx')
    vm.success = m.prop(false)
    vm.currentUser = m.prop(false)

    vm.createAccount = function () {
      if (vm.email() && vm.password()) {
        config.firebase.createUser({
          email: vm.email(),
          password: vm.password()
        }, function (error, userData) {
          if (error) {
            console.log('Error creating user:', error)
          } else {
            vm.currentUser(userData.uid)
            m.redraw(true)
            console.log('Successfully created user account with uid:', userData.uid)
          }
        })
      }
    }

    vm.signIn = function () {
      if (vm.email() && vm.password()) {
        config.firebase.authWithPassword({
          email: vm.email(),
          password: vm.password()
        }, function (error, authData) {
          if (error) {
            console.log('Login Failed!', error)
          } else {
            vm.currentUser(authData.uid)
            m.redraw(true)
            console.log('Authenticated successfully with payload:', authData)
          }
        })
      }
    }

    vm.changeEmail = function () {
      if (vm.email() && vm.newEmail() && vm.password()) {
        config.firebase.changeEmail({
          oldEmail: vm.email(),
          newEmail: vm.newEmail(),
          password: vm.password()
        }, function (error) {
          if (error) {
            console.log('Error changing email:', error)
          } else {
            vm.email(vm.newEmail())
            vm.password('')
            m.redraw(true)
            console.log('Email changed successfully')
          }
        })
      }
    }
  }
  return vm
}())

auth.controller = function () {
  auth.vm.init()

  this.vm = auth.vm
}

auth.view = View

module.exports = auth
