module.exports = function mixinLayout (layout, nav, body) {
  return function () {
    return layout(nav(), body)
  }
}
