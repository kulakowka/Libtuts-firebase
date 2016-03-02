'use strict'

var m = require('mithril')
var config = require('../../config')
var view = require('./view')
var mixinLayout = require('../mixinLayout')
var layout = require('../layout')
var nav = require('../nav')

var loginPage = {
  vm: (function () {
    var vm = {}
    vm.init = function () {
      vm.email = m.prop('kulakowka@gmail.com')
      vm.password = m.prop('ak87c210xx')
      vm.signIn = function () {
        if (vm.email() && vm.password()) {
          config.firebase.authWithPassword({
            email: vm.email(),
            password: vm.password()
          }, function (error, authData) {
            if (error) {
              console.log('Login Failed!', error)
            } else {
              m.route('/')
              console.log('Authenticated successfully with payload:', authData)
            }
          })
        }
      }
    }
    return vm
  }()),

  controller: function () {
    loginPage.vm.init()

    this.vm = loginPage.vm
  },

  view: view
}

module.exports = {view: mixinLayout(layout, nav, loginPage)}
