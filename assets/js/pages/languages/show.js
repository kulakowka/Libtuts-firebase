var m = require('mithril')

module.exports.controller = function () {
  return {name: m.route.param('name')}
}

module.exports.view = function (controller) {
  return (
    <div>
      <h1>Languages show {controller.name}</h1>
    </div>
  )
}
