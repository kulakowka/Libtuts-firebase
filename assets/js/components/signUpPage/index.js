'use strict'

var m = require('mithril')
var config = require('../../config')
var view = require('./view.msx')
var mixinLayout = require('../mixinLayout')
var layout = require('../layout')
var nav = require('../nav')

var signUpPage = {
  vm: (function () {
    var vm = {}
    vm.init = function () {
      vm.email = m.prop('kulakowka@gmail.com')
      vm.password = m.prop('ak87c210xx')
      vm.createAccount = function () {
        if (vm.email() && vm.password()) {
          config.firebase.createUser({
            email: vm.email(),
            password: vm.password()
          }, function (error, userData) {
            if (error) {
              console.log('Error creating user:', error)
            } else {
              m.route('/signin')
              console.log('Successfully created user account with uid:', userData.uid)
            }
          })
        }
      }
    }
    return vm
  }()),

  controller: function () {
    signUpPage.vm.init()

    this.vm = signUpPage.vm
  },

  view: view
}

module.exports = {view: mixinLayout(layout, nav, signUpPage)}
