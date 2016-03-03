'use strict'

var m = require('mithril')
var firebase = require('../../utils/firebase')
var view = require('./view')
var mixinLayout = require('../mixinLayout')
var layout = require('../layout')
var nav = require('../nav')

var loginPage = {
  vm: (function () {
    var vm = {}
    vm.init = () => {
      vm.email = m.prop('kulakowka@gmail.com')
      vm.password = m.prop('ak87c210xx')
      vm.signIn = () => {
        if (vm.email() && vm.password()) {
          firebase.authWithPassword({
            email: vm.email(),
            password: vm.password()
          }, (error, authData) => {
            if (error) return console.log('Login Failed!', error)
            m.route('/')
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
