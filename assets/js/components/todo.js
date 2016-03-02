var m = require('mithril')
var View = require('../views/todo.msx')
var Todo = require('../models/Todo')
var TodoList = require('../models/TodoList')

// this application only has one module: todo
var todo = {}

// the view-model tracks a running list of todos,
// stores a description for new todos before they are created
// and takes care of the logic surrounding when adding is permitted
// and clearing the input after adding a todo to the list
todo.vm = (function () {
  var vm = {}
  vm.init = function () {
    // a running list of todos
    vm.list = new TodoList()

    // a slot to store the name of a new todo before it is created
    vm.description = m.prop('')

    // adds a todo to the list, and clears the description field for user convenience
    vm.add = function () {
      if (vm.description()) {
        vm.list.push(new Todo({description: vm.description()}))
        vm.description('')
      }
    }
  }
  return vm
}())

// the controller defines what part of the model is relevant for the current page
// in our case, there's only one view-model that handles everything
todo.controller = function () {
  todo.vm.init()
  this.description = todo.vm.description()
  this.onchange = m.withAttr('value', todo.vm.description)
  this.add = todo.vm.add
  this.list = todo.vm.list
}

// here's the view
todo.view = View

module.exports = todo
