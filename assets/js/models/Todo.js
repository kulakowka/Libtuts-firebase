var m = require('mithril')

// Todo model
module.exports = function Todo (data) {
  this.description = m.prop(data.description)
  this.done = m.prop(false)
}
